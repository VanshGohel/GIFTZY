<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$host = "localhost";
$user = "root";   // change if needed
$pass = "";       // change if needed
$db   = "giftzy";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Database connection failed: " . $conn->connect_error);
}

$message = "";

/* ---------- SIGNUP ---------- */
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["signup"])) {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    if ($password !== $confirm_password) {
        $message = "<p class='error'>❌ Passwords do not match.</p>";
    } else {
        $hashedPassword = md5($password); // ✅ only one MD5

        $stmt = $conn->prepare("INSERT INTO users_of_giftzy (email, password) VALUES (?, ?)");
        if ($stmt) {
            $stmt->bind_param("ss", $email, $hashedPassword);
            if ($stmt->execute()) {
                $message = "<p class='success'>✅ Account created successfully! Please login.</p>";
            } else {
                $message = "<p class='error'>❌ Account creation failed: " . $stmt->error . "</p>";
            }
            $stmt->close();
        }
    }
}

/* ---------- LOGIN ---------- */
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $email = trim($_POST["email"]);
    $password = md5($_POST["password"]); // ✅ hash entered password once

    $stmt = $conn->prepare("SELECT id, email, password FROM users_of_giftzy WHERE email=? LIMIT 1");
    if ($stmt) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($row = $result->fetch_assoc()) {
            if ($row['password'] === $password) {
                $_SESSION["user"] = $row['email'];

                // Make sure no output before redirect
                ob_clean();
                header("Location: index.php");
                exit;
            } else {
                // Debugging output
                echo "DEBUG: Entered hash = $password <br>";
                echo "DEBUG: Stored hash  = " . $row['password'] . "<br>";
                $message = "<p class='error'>❌ Wrong password entered.</p>";
            }
        } else {
            $message = "<p class='error'>❌ No account found with this email.</p>";
        }
        $stmt->close();
    }
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup - Responsive Auth</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        .message-box {
            margin: 10px 0;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }


        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ffff 0%, #fffdd0 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .auth-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            padding: 40px 30px;
            position: relative;
            overflow: hidden;
        }

        .auth-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .auth-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .auth-title {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
            font-weight: 300;
        }

        .auth-subtitle {
            color: #666;
            font-size: 0.9rem;
        }

        .form-group {
            margin-bottom: 20px;
            position: relative;
        }

        .form-input {
            width: 100%;
            padding: 15px 20px;
            border: 2px solid #e1e8ed;
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: #f8f9fa;
        }

        .form-input:focus {
            outline: none;
            border-color: #667eea;
            background: white;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }

        .form-input::placeholder {
            color: #999;
            transition: all 0.3s ease;
        }

        .form-input:focus::placeholder {
            opacity: 0.7;
            transform: translateY(-2px);
        }

        .auth-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
        }

        .auth-btn:hover:enabled {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .auth-btn:active:enabled {
            transform: translateY(0);
        }

        .auth-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .auth-btn:hover::before {
            left: 100%;
        }

        .form-footer {
            text-align: center;
            margin-top: 25px;
        }

        .toggle-text {
            color: #666;
            font-size: 0.9rem;
        }

        .toggle-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            margin-left: 5px;
            transition: color 0.3s ease;
        }

        .toggle-link:hover {
            color: #764ba2;
            text-decoration: underline;
        }

        .form-divider {
            margin: 25px 0;
            text-align: center;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .form-divider::before {
            content: '';
            flex: 1;
            height: 1px;
            background: #e1e8ed;
            margin-right: 15px;
        }

        .form-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e1e8ed;
            margin-left: 15px;
        }

        .form-divider span {
            background: transparent;
            color: #999;
            font-size: 0.9rem;
            white-space: nowrap;
        }

        .social-btn {
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e8ed;
            background: white;
            color: #333;
            border-radius: 12px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .social-btn:hover {
            border-color: #667eea;
            transform: translateY(-1px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .forgot-password {
            text-align: center;
            margin-top: 8px;
            margin-bottom: 0;
        }

        .forgot-password a {
            color: #667eea;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .forgot-password a:hover {
            color: #764ba2;
            text-decoration: underline;
        }

        .form-container {
            display: none;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
        }

        .form-container.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
            animation: slideIn 0.4s ease;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .success-message {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 20px;
            display: none;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
            .auth-container {
                padding: 30px 20px;
                margin: 10px;
            }
            
            .auth-title {
                font-size: 1.5rem;
            }
            
            .form-input {
                padding: 12px 16px;
            }
            
            .auth-btn {
                padding: 12px;
                font-size: 1rem;
            }
        }

        @media (max-width: 320px) {
            body {
                padding: 10px;
            }
            
            .auth-container {
                padding: 20px 15px;
            }
        }

        /* Loading animation */
        .loading {
            position: relative;
        }

        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .auth-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <!-- Login Form -->
        <div id="loginForm" class="form-container active">
            <div class="auth-header">
                <h1 class="auth-title"><b>Sign in</b></h1>
            </div>

            <?php if (!empty($message)) echo "<div class='message-box'>$message</div>"; ?>

            <!-- Login Form -->
            <form id="loginFormElement" method="POST" action="">
                <div class="form-group">
                    <input type="email" name="email" class="form-input" placeholder="Email address" required>
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-input" placeholder="Password" required>
                <div class="forgot-password">
                    <a href="#">Forgot your password?</a>
                </div>
        </div>
    <button type="submit" name="login" class="auth-btn">Sign In</button>
</form>


            <div class="form-divider">
                <span>or Sign in with</span>
            </div>

            <button class="social-btn" onclick="socialLogin('google')">
                Continue with Google
            </button>

            <button class="social-btn" onclick="socialLogin('facebook')">
                Continue with Facebook
            </button>

            <div class="form-footer">
                <span class="toggle-text">Don't have an account?</span>
                <a href="#" class="toggle-link" onclick="toggleForm('signup')">Sign up</a>
            </div>
        </div>

        <!-- Signup Form -->
        <div id="signupForm" class="form-container">
            <div class="auth-header">
                <h1 class="auth-title">Create Account</h1>
                <p class="auth-subtitle">Join us today</p>
            </div>



            <!-- Signup Form -->
<!-- <form id="signupFormElement" method="POST" action="">
    <div class="form-group">
        <input type="email" name="email" class="form-input" placeholder="Email address" required>
    </div>
    <div class="form-group">
        <input type="password" name="password" class="form-input" placeholder="Password" required>
    </div>
    <div class="form-group">
        <input type="password" name="confirm_password" class="form-input" placeholder="Confirm password" required>
    </div>
    <button type="submit" name="signup" class="auth-btn">Create Account</button>
</form> -->


        <form id="signupFormElement" method="POST" action="">
            <div class="form-group">
                <input type="email" name="email" class="form-input" placeholder="Email address" required>
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-input" placeholder="Password" required>
            </div>
            <div class="form-group">
                <input type="password" name="confirm_password" class="form-input" placeholder="Confirm Password" required>
            </div>
            <button type="submit" class="auth-btn" name="signup">Create Account</button>
        </form>



            <div class="form-divider">
                <span>or continue with</span>
            </div>

            <button class="social-btn" onclick="socialLogin('google')">
                Sign up with Google
            </button>

            <button class="social-btn" onclick="socialLogin('facebook')">
                Sign up with Facebook
            </button>

            <div class="form-footer">
                <span class="toggle-text">Already have an account?</span>
                <a href="#" class="toggle-link" onclick="toggleForm('login')">Sign in</a>
            </div>
        </div>
    </div>

    <script>
/* ----------- Form Toggle ----------- */
function toggleForm(form) {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById(form + "Form").classList.add("active");
}

/* ----------- Login Form ----------- */


/* ----------- Signup Form ----------- */
</script>

</body>
</html>
