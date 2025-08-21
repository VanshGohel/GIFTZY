<?php
session_start();

// If user not logged in, redirect back to login page
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
    exit;
}

// Database connection
$host = "localhost";
$user = "root";
$pass = "";
$db   = "giftzy";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Database connection failed: " . $conn->connect_error);
}

// Save payment details
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['make_payment'])) {
    $email           = $_SESSION['user']; // login email stored in session
    $product_name    = $conn->real_escape_string($_POST['product_name']);
    $total_amount    = $_POST['total_amount']; // ✅ convert to proper number
    $cardholder_name = $conn->real_escape_string($_POST['cardholder_name']);
    $card_no         = $conn->real_escape_string($_POST['card_no']);
    $expiry_date     = $conn->real_escape_string($_POST['expiry_date']);
    $cvv             = $conn->real_escape_string($_POST['cvv']);
    $billing_address = $conn->real_escape_string($_POST['billing_address']);
    $payment_method  = $conn->real_escape_string($_POST['payment_method']);

    $sql = "INSERT INTO payment_master 
            (email, product_name, total_amount, cardholder_name, card_no, expiry_date, cvv, billing_address, payment_method) 
            VALUES 
            ('$email', '$product_name', '$total_amount', '$cardholder_name', '$card_no', '$expiry_date', '$cvv', '$billing_address', '$payment_method')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('✅ Payment successful!');</script>";
    } else {
        echo "<script>alert('❌ Error: " . $conn->error . "');</script>";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giftzy - Your Perfect Gift Destination</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <a href="#" class="logo" onclick="showPage('home')">Giftzy</a>
            <div class="search-box">
                <input type="text" placeholder="Search for perfect gifts..." id="searchInput">
                <button class="search-btn" onclick="searchProducts()">Search</button>
            </div>
            <div class="user-actions">
                <button class="cart-btn" onclick="toggleCart()">
                    🛒 Cart <span class="cart-count" id="cartCount">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-item"><a href="#" class="nav-link active" onclick="showPage('home')">Home</a></div>
            <div class="nav-item"><a href="#" class="nav-link" onclick="showPage('male')">Male</a></div>
            <div class="nav-item"><a href="#" class="nav-link" onclick="showPage('female')">Female</a></div>
            <div class="nav-item"><a href="#" class="nav-link" onclick="showPage('kids')">Kids</a></div>
            <div class="nav-item"><a href="#" class="nav-link" onclick="showPage('about')">About Us</a></div>
            <div class="nav-item"><a href="#" class="nav-link" onclick="showPage('account')">MyAcc</a></div>
            <div class="nav-item"><a href="logout.php" class="nav-link">Logout</a></div>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="container">
        <!-- Home Page -->
        <div id="home" class="page active">
            <div class="hero">
                <h1>Welcome to Giftzy</h1>
                <p>Discover the perfect gifts for everyone you love</p>
                <button class="cta-btn" onclick="showPage('male')">Start Shopping</button>
            </div>
            
            <div class="category-header">
                <h2>Featured Products</h2>
                <p>Handpicked gifts that will make anyone smile</p>
            </div>
            
            <div class="products-grid" id="featuredProducts">
                <!-- Featured products will be loaded here -->
            </div>
        </div>

        <!-- Male Page -->
        <div id="male" class="page">
            <div class="category-header">
                <h2>👨 Gifts for Men</h2>
                <p>Perfect gifts for the special men in your life</p>
            </div>
            <div class="products-grid" id="maleProducts"></div>
        </div>

        <!-- Female Page -->
        <div id="female" class="page">
            <div class="category-header">
                <h2>👩 Gifts for Women</h2>
                <p>Beautiful gifts that will make her day special</p>
            </div>
            <div class="products-grid" id="femaleProducts"></div>
        </div>

        <!-- Kids Page -->
        <div id="kids" class="page">
            <div class="category-header">
                <h2>👶 Gifts for Kids</h2>
                <p>Fun and educational gifts for little ones</p>
            </div>
            <div class="products-grid" id="kidsProducts"></div>
        </div>

        <!-- About Page -->
        <div id="about" class="page">
            <div class="about-content">
                <h2>About Giftzy</h2>
                <p>At Giftzy, we believe that every gift tells a story...</p>
            </div>
        </div>

        <!-- Account Page -->
        <div id="account" class="page">
            <div class="account-section">
                <h3>👤 Account Information</h3>
                <p><strong>Email:</strong> <?php echo $_SESSION['user']; ?></p>
            </div>
        </div>
    </div>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h3>🛒 Shopping Cart</h3>
            <button class="close-cart" onclick="toggleCart()">×</button>
        </div>
        <div class="cart-items" id="cartItems">
            <p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>
        </div>
        <div class="cart-total" id="cartTotal" style="display: none;">
            <h3>Total: ₹<span id="totalAmount">0</span></h3>
            <button class="checkout-btn" onclick="showPaymentModal()">Proceed to Checkout</button>
        </div>
    </div>

    <!-- Payment Modal -->
    <div class="modal" id="paymentModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>💳 Payment Details</h2>
                <button class="close-modal" onclick="closePaymentModal()">×</button>
            </div>
            <form method="POST">
                <input type="hidden" name="make_payment" value="1">
                <input type="hidden" id="productName" name="product_name">
                <input type="hidden" id="totalAmountInput" name="total_amount">

                <div class="form-group">
                    <label for="cardName">Cardholder Name</label>
                    <input type="text" id="cardName" name="cardholder_name" required>
                </div>
                <div class="form-group">
                    <label for="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="card_no" required maxlength="19">
                </div>
                <div class="card-row">
                    <div class="form-group">
                        <label for="expiryDate">Expiry Date</label>
                        <input type="text" id="expiryDate" name="expiry_date" required maxlength="5">
                    </div>
                    <div class="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" required maxlength="3">
                    </div>
                </div>
                <div class="form-group">
                    <label for="billingAddress">Billing Address</label>
                    <input type="text" id="billingAddress" name="billing_address" required>
                </div>
                <div class="form-group">
                    <label for="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" name="payment_method" required>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="netbanking">Net Banking</option>
                        <option value="wallet">Digital Wallet</option>
                    </select>
                </div>
                
                <button type="submit" class="pay-btn">Pay ₹<span id="paymentAmount">0</span></button>
            </form>
        </div>
    </div>

    <div class="notification" id="notification">
        <span id="notificationText">Item added to cart!</span>
    </div>

    <script src="script.js"></script>
</body>
</html>
