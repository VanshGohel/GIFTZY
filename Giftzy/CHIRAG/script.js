  // Sample product data
        const products = {
            featured: [
                { id: 1, name: "Premium Wireless Headphones", price: 2999, emoji: "🎧", rating: 4.5, category: "electronics" },
                { id: 2, name: "Luxury Watch", price: 8999, emoji: "⌚", rating: 4.8, category: "accessories" },
                { id: 3, name: "Designer Handbag", price: 3999, emoji: "👜", rating: 4.6, category: "fashion" },
                { id: 4, name: "Smartphone", price: 15999, emoji: "📱", rating: 4.7, category: "electronics" }
            ],
            male: [
                { id: 5, name: "Men's Smartwatch", price: 4999, emoji: "⌚", rating: 4.4, category: "tech" },
                { id: 6, name: "Leather Wallet", price: 1299, emoji: "👝", rating: 4.6, category: "accessories" },
                { id: 7, name: "Gaming Headset", price: 3499, emoji: "🎮", rating: 4.7, category: "gaming" },
                { id: 8, name: "Fitness Tracker", price: 2299, emoji: "⌚", rating: 4.3, category: "fitness" },
                { id: 9, name: "Bluetooth Speaker", price: 1999, emoji: "🔊", rating: 4.5, category: "audio" },
                { id: 10, name: "Coffee Mug Set", price: 899, emoji: "☕", rating: 4.2, category: "home" }
            ],
            female: [
                { id: 11, name: "Designer Jewelry Set", price: 5999, emoji: "💎", rating: 4.8, category: "jewelry" },
                { id: 12, name: "Silk Scarf", price: 1899, emoji: "🧣", rating: 4.6, category: "fashion" },
                { id: 13, name: "Makeup Kit", price: 2499, emoji: "💄", rating: 4.7, category: "beauty" },
                { id: 14, name: "Floral Perfume", price: 3299, emoji: "🌸", rating: 4.5, category: "fragrance" },
                { id: 15, name: "Yoga Mat", price: 1499, emoji: "🧘‍♀️", rating: 4.4, category: "fitness" },
                { id: 16, name: "Handbag Collection", price: 4499, emoji: "👜", rating: 4.6, category: "accessories" }
            ],
            kids: [
                { id: 17, name: "Educational Tablet", price: 6999, emoji: "📱", rating: 4.6, category: "education" },
                { id: 18, name: "Toy Car Set", price: 1299, emoji: "🚗", rating: 4.7, category: "toys" },
                { id: 19, name: "Art Supplies Kit", price: 999, emoji: "🎨", rating: 4.5, category: "creative" },
                { id: 20, name: "Building Blocks", price: 1799, emoji: "🧱", rating: 4.8, category: "construction" },
                { id: 21, name: "Story Books Set", price: 799, emoji: "📚", rating: 4.6, category: "books" },
                { id: 22, name: "Musical Keyboard", price: 2499, emoji: "🎹", rating: 4.4, category: "music" }
            ]
        };

        // Enhanced product data with descriptions and features
        const productDetails = {
            1: {
                description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear.",
                features: ["Active Noise Cancellation", "30-Hour Battery Life", "Bluetooth 5.0 Connectivity", "Quick Charge - 5 mins for 2 hours", "Premium Leather Padding", "Built-in Microphone"]
            },
            2: {
                description: "Elegant luxury timepiece crafted with precision. Features Swiss movement, sapphire crystal glass, and water resistance up to 100m. Perfect for formal occasions and daily wear.",
                features: ["Swiss Movement", "Sapphire Crystal Glass", "Water Resistant 100m", "Stainless Steel Case", "Leather Strap", "2-Year Warranty"]
            },
            3: {
                description: "Premium designer handbag made from genuine leather. Spacious interior with multiple compartments, adjustable strap, and elegant gold-tone hardware.",
                features: ["Genuine Leather Construction", "Multiple Compartments", "Adjustable Strap", "Gold-tone Hardware", "Dust Bag Included", "1-Year Warranty"]
            },
            4: {
                description: "Latest smartphone with advanced camera system, fast processor, and all-day battery life. Features 5G connectivity and premium build quality.",
                features: ["5G Connectivity", "48MP Camera System", "Fast Processor", "All-day Battery", "Premium Build", "1-Year Warranty"]
            },
            5: {
                description: "Advanced smartwatch with fitness tracking, heart rate monitoring, and smart notifications. Water-resistant design perfect for active lifestyle.",
                features: ["Fitness Tracking", "Heart Rate Monitor", "Smart Notifications", "Water Resistant", "7-Day Battery", "Multiple Sport Modes"]
            },
            6: {
                description: "Handcrafted leather wallet with RFID protection. Multiple card slots, bill compartments, and premium stitching for durability.",
                features: ["RFID Protection", "Multiple Card Slots", "Bill Compartments", "Premium Stitching", "Compact Design", "Gift Box Included"]
            },
            7: {
                description: "Professional gaming headset with surround sound, noise-cancelling microphone, and comfortable over-ear design for extended gaming sessions.",
                features: ["7.1 Surround Sound", "Noise-cancelling Mic", "Comfortable Design", "RGB Lighting", "Multi-platform Compatible", "Braided Cable"]
            },
            8: {
                description: "Advanced fitness tracker with comprehensive health monitoring, sleep tracking, and smartphone connectivity for complete wellness management.",
                features: ["Health Monitoring", "Sleep Tracking", "Smartphone Sync", "Water Resistant", "Long Battery Life", "Multiple Sensors"]
            },
            9: {
                description: "Portable Bluetooth speaker with rich bass, 360-degree sound, and rugged waterproof design perfect for outdoor adventures.",
                features: ["360-degree Sound", "Waterproof Design", "Rich Bass", "12-Hour Battery", "Bluetooth 5.0", "Portable Design"]
            },
            10: {
                description: "Premium coffee mug set with thermal insulation, ergonomic design, and elegant finish. Perfect for coffee enthusiasts.",
                features: ["Thermal Insulation", "Ergonomic Design", "Set of 2 Mugs", "Elegant Finish", "Dishwasher Safe", "Gift Ready Packaging"]
            },
            11: {
                description: "Exquisite designer jewelry set featuring premium materials, elegant craftsmanship, and timeless design. Perfect for special occasions.",
                features: ["Premium Materials", "Elegant Craftsmanship", "Timeless Design", "Anti-tarnish Coating", "Jewelry Box Included", "Lifetime Warranty"]
            },
            12: {
                description: "Luxurious silk scarf with beautiful patterns, soft texture, and versatile styling options. Made from 100% pure silk.",
                features: ["100% Pure Silk", "Beautiful Patterns", "Soft Texture", "Versatile Styling", "Hand-rolled Edges", "Care Instructions Included"]
            },
            13: {
                description: "Complete makeup kit with high-quality cosmetics, professional brushes, and elegant carrying case. Perfect for all occasions.",
                features: ["High-quality Cosmetics", "Professional Brushes", "Elegant Case", "All Occasions", "Dermatologist Tested", "Cruelty-free"]
            },
            14: {
                description: "Enchanting floral perfume with long-lasting fragrance, elegant bottle design, and premium ingredients sourced globally.",
                features: ["Long-lasting Fragrance", "Premium Ingredients", "Elegant Bottle", "Global Sourcing", "Gift Box Included", "50ml Size"]
            },
            15: {
                description: "Professional yoga mat with superior grip, eco-friendly materials, and optimal thickness for comfort and stability.",
                features: ["Superior Grip", "Eco-friendly Materials", "Optimal Thickness", "Non-slip Surface", "Easy to Clean", "Carrying Strap"]
            },
            16: {
                description: "Designer handbag collection featuring multiple styles, premium materials, and versatile designs for every occasion.",
                features: ["Multiple Styles", "Premium Materials", "Versatile Designs", "Quality Hardware", "Dust Bags Included", "Collection Set"]
            },
            17: {
                description: "Educational tablet designed for kids with parental controls, educational apps, and durable child-friendly design.",
                features: ["Parental Controls", "Educational Apps", "Child-friendly Design", "Durable Construction", "Eye Protection", "2-Year Warranty"]
            },
            18: {
                description: "Exciting toy car set with multiple vehicles, realistic details, and safe materials perfect for imaginative play.",
                features: ["Multiple Vehicles", "Realistic Details", "Safe Materials", "Imaginative Play", "Durable Construction", "Age Appropriate"]
            },
            19: {
                description: "Complete art supplies kit with high-quality materials, variety of tools, and organized storage for creative expression.",
                features: ["High-quality Materials", "Variety of Tools", "Organized Storage", "Creative Expression", "Non-toxic", "Instruction Guide"]
            },
            20: {
                description: "Engaging building blocks set promoting creativity, problem-solving skills, and hours of educational fun for children.",
                features: ["Promotes Creativity", "Problem-solving Skills", "Educational Fun", "Safe Materials", "Age Appropriate", "Instruction Manual"]
            },
            21: {
                description: "Captivating story books set with engaging tales, beautiful illustrations, and age-appropriate content for young readers.",
                features: ["Engaging Tales", "Beautiful Illustrations", "Age Appropriate", "Educational Content", "Durable Pages", "Reading Guide"]
            },
            22: {
                description: "Musical keyboard with learning modes, built-in songs, and interactive features to inspire young musicians.",
                features: ["Learning Modes", "Built-in Songs", "Interactive Features", "Volume Control", "Headphone Jack", "Music Stand"]
            }
        };

        // Cart functionality
        let cart = [];

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts('featured', 'featuredProducts');
            loadProducts('male', 'maleProducts');
            loadProducts('female', 'femaleProducts');
            loadProducts('kids', 'kidsProducts');
            
            // Add card number formatting
            document.getElementById('cardNumber').addEventListener('input', formatCardNumber);
            document.getElementById('expiryDate').addEventListener('input', formatExpiryDate);
            document.getElementById('cvv').addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        });

        // Load products into grid
        function loadProducts(category, containerId) {
            const container = document.getElementById(containerId);
            const productList = products[category];
            
            container.innerHTML = productList.map(product => `
                <div class="product-card">
                    <div class="product-image">${product.emoji}</div>
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                    <div class="product-rating">
                        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-buttons">
                        <button class="add-to-cart" onclick="showProductDetail(${product.id}, '${category}', 'cart')">
                            Add to Cart
                        </button>
                        <button class="buy-now" onclick="showProductDetail(${product.id}, '${category}', 'buy')">
                            Buy Now
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Page navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Close cart if open
            document.getElementById('cartSidebar').classList.remove('open');
        }

        // Show product detail page
        function showProductDetail(productId, category, action) {
            const product = findProductById(productId);
            if (!product) return;
            
            const details = productDetails[productId] || {
                description: "High-quality product with excellent features and reliable performance.",
                features: ["Premium Quality", "Excellent Features", "Reliable Performance", "Great Value", "Customer Support", "Warranty Included"]
            };
            
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Create or update product detail page
            let detailPage = document.getElementById('productDetail');
            if (!detailPage) {
                detailPage = document.createElement('div');
                detailPage.id = 'productDetail';
                detailPage.className = 'page';
                document.querySelector('.container').appendChild(detailPage);
            }
            
            detailPage.innerHTML = `
            <button class="back-btn" onclick="goBack()">← Back to Products</button>    
                <div class="product-detail">
                    <div class="product-detail-image">${product.emoji}</div>
                    <div class="product-detail-info">
                        <h1 class="product-detail-title">${product.name}</h1>
                        <div class="product-detail-price">₹${product.price.toLocaleString()}</div>
                        <div class="product-detail-rating">
                            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                            <span>(${product.rating} out of 5)</span>
                            <span style="margin-left: 1rem; color: #28a745;">In Stock</span>
                        </div>
                        
                        <div class="product-detail-description">
                            ${details.description}
                        </div>
                        
                        <div class="product-detail-features">
                            <h4>Key Features:</h4>
                            <ul>
                                ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="quantity-selector">
                            <label for="quantity">Quantity:</label>
                            <input type="number" id="quantity" class="quantity-input" value="1" min="1" max="10">
                        </div>
                        
                        <div class="payment-methods">
                            <h4>Payment Options:</h4>
                            <div class="payment-logos-grid">
                                <div class="payment-logo visa">VISA</div>
                                <div class="payment-logo mastercard">MasterCard</div>
                                <div class="payment-logo rupay">RuPay</div>
                                <div class="payment-logo upi">UPI</div>
                                <div class="payment-logo paytm">Paytm</div>
                                <div class="payment-logo gpay">Google Pay</div>
                                <div class="payment-logo phonepay">PhonePe</div>
                                <div class="payment-logo amazon">Amazon Pay</div>
                                <div class="payment-logo netbanking">Net Banking</div>
                                <div class="payment-logo paypal">PayPal</div>
                            </div>
                        </div>
                        
                        <div class="detail-buttons">
                            <button class="detail-add-cart" onclick="addToCartFromDetail(${productId})">
                                Add to Cart
                            </button>
                            <button class="detail-buy-now" onclick="buyNowFromDetail(${productId})">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="related-products">
                    <h3>Related Products</h3>
                    <div class="products-grid" id="relatedProducts">
                        <!-- Related products will be loaded here -->
                    </div>
                </div>
            `;
            
            detailPage.classList.add('active');
            
            // Load related products
            loadRelatedProducts(category, productId);
            
            // Store the action for later
            detailPage.dataset.action = action;
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Load related products
        function loadRelatedProducts(category, excludeId) {
            const container = document.getElementById('relatedProducts');
            if (!container) return;
            
            const allProducts = [];
            for (const cat in products) {
                allProducts.push(...products[cat].map(p => ({...p, category: cat})));
            }
            
            const related = allProducts
                .filter(p => p.id !== excludeId)
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
            
            container.innerHTML = related.map(product => `
                <div class="product-card">
                    <div class="product-image">${product.emoji}</div>
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                    <div class="product-rating">
                        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-buttons">
                        <button class="add-to-cart" onclick="showProductDetail(${product.id}, '${product.category}', 'cart')">
                            Add to Cart
                        </button>
                        <button class="buy-now" onclick="showProductDetail(${product.id}, '${product.category}', 'buy')">
                            Buy Now
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Add to cart from detail page
        function addToCartFromDetail(productId) {
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const product = findProductById(productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    emoji: product.emoji,
                    quantity: quantity
                });
            }
            
            updateCartUI();
            showNotification(`${quantity} item(s) added to cart!`);
        }

        // Buy now from detail page
        function buyNowFromDetail(productId) {
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const product = findProductById(productId);
            if (!product) return;
            
            // Clear current cart and add only this item
            cart = [{
                id: productId,
                name: product.name,
                price: product.price,
                emoji: product.emoji,
                quantity: quantity
            }];
            
            updateCartUI();
            showNotification('Added to cart for immediate purchase!');
            
            // Directly show payment modal
            setTimeout(() => {
                showPaymentModal();
            }, 500);
        }

        // Go back to previous page
        function goBack() {
            const detailPage = document.getElementById('productDetail');
            if (detailPage) {
                detailPage.classList.remove('active');
            }
            
            // Show home page by default
            showPage('home');
        }

        // Add product to cart (original function for direct cart operations)
        function addToCart(productId, category) {
            const product = findProductById(productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    emoji: product.emoji,
                    quantity: 1
                });
            }
            
            updateCartUI();
            showNotification('Item added to cart!');
        }

        // Find product by ID
        function findProductById(id) {
            for (const category in products) {
                const product = products[category].find(p => p.id === id);
                if (product) return product;
            }
            return null;
        }

        // Update cart UI
        function updateCartUI() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const cartCount = document.getElementById('cartCount');
            const totalAmount = document.getElementById('totalAmount');
            const paymentAmount = document.getElementById('paymentAmount');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
                cartTotal.style.display = 'none';
                cartCount.textContent = '0';
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.emoji}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span style="margin: 0 0.5rem; font-weight: bold;">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="qty-btn" onclick="removeFromCart(${item.id})" style="background: #dc3545; margin-left: 0.5rem;">🗑️</button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            cartTotal.style.display = 'block';
            cartCount.textContent = itemCount;
            totalAmount.textContent = total.toLocaleString();
            paymentAmount.textContent = total.toLocaleString();
        }

        // Update item quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
            showNotification('Item removed from cart');
        }

        // Toggle cart sidebar
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.toggle('open');
        }

        // Show payment modal
        function showPaymentModal() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            document.getElementById('paymentModal').classList.add('show');
        }

        // Close payment modal
        function closePaymentModal() {
            document.getElementById('paymentModal').classList.remove('show');
        }

        // Process payment
        function processPayment(event) {
            event.preventDefault();
            
            // Simple validation
            const cardName = document.getElementById('cardName').value;
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            
            if (!cardName || !cardNumber || !expiryDate || !cvv) {
                showNotification('Please fill all payment details!');
                return;
            }
            
            // Simulate payment processing
            showNotification('Processing payment...');
            
            setTimeout(() => {
                // Clear cart and close modals
                cart = [];
                updateCartUI();
                closePaymentModal();
                toggleCart();
                
                showNotification('Payment successful! Thank you for your order!');
                
                // Reset form
                document.querySelector('#paymentModal form').reset();
            }, 2000);
        }

        // Format card number
        function formatCardNumber(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        }

        // Format expiry date
        function formatExpiryDate(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 4);
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            e.target.value = value;
        }

        // Search products
        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            if (!query) return;
            
            const allProducts = [];
            for (const category in products) {
                allProducts.push(...products[category].map(p => ({...p, category})));
            }
            
            const results = allProducts.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                displaySearchResults(results);
            } else {
                showNotification('No products found for your search');
            }
        }

        // Display search results
        function displaySearchResults(results) {
            // Create search results page
            const container = document.querySelector('.container');
            
            // Hide all existing pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Create or update search results page
            let searchPage = document.getElementById('searchResults');
            if (!searchPage) {
                searchPage = document.createElement('div');
                searchPage.id = 'searchResults';
                searchPage.className = 'page';
                container.appendChild(searchPage);
            }
            
            searchPage.innerHTML = `
                <div class="category-header">
                    <h2>🔍 Search Results</h2>
                    <p>Found ${results.length} products matching your search</p>
                </div>
                <div class="products-grid">
                    ${results.map(product => `
                        <div class="product-card">
                            <div class="product-image">${product.emoji}</div>
                            <div class="product-title">${product.name}</div>
                            <div class="product-price">₹${product.price.toLocaleString()}</div>
                            <div class="product-rating">
                                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                                <span>(${product.rating})</span>
                            </div>
                            <div class="product-buttons">
                                <button class="add-to-cart" onclick="showProductDetail(${product.id}, '${product.category}', 'cart')">
                                    Add to Cart
                                </button>
                                <button class="buy-now" onclick="showProductDetail(${product.id}, '${product.category}', 'buy')">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            searchPage.classList.add('active');
            
            // Update navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
        }

        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Handle search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        // Close modals when clicking outside
        document.getElementById('paymentModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closePaymentModal();
            }
        });

        // Add some interactive effects
        document.addEventListener('mouseover', function(e) {
            if (e.target.classList.contains('product-card')) {
                e.target.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });

        document.addEventListener('mouseout', function(e) {
            if (e.target.classList.contains('product-card')) {
                e.target.style.transform = 'translateY(0) scale(1)';
            }
        });

        // Add loading animation for buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart') || e.target.classList.contains('detail-add-cart')) {
                const originalText = e.target.textContent;
                e.target.textContent = 'Adding...';
                e.target.style.opacity = '0.7';
                
                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.style.opacity = '1';
                }, 500);
            } else if (e.target.classList.contains('buy-now') || e.target.classList.contains('detail-buy-now')) {
                const originalText = e.target.textContent;
                e.target.textContent = 'Processing...';
                e.target.style.opacity = '0.7';
                
                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.style.opacity = '1';
                }, 500);
            }
        });

        // Add touch support for mobile
        let touchStartY = 0;
        document.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', function(e) {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            // Simple swipe up gesture to close cart on mobile
            if (diff > 50 && document.getElementById('cartSidebar').classList.contains('open')) {
                toggleCart();
            }
        });

        // Intersection Observer for lazy loading animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        // Observe product cards for animation
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                document.querySelectorAll('.product-card').forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    observer.observe(card);
                });
            }, 100);
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Close cart with Escape key
            if (e.key === 'Escape') {
                const cartSidebar = document.getElementById('cartSidebar');
                const paymentModal = document.getElementById('paymentModal');
                
                if (paymentModal.classList.contains('show')) {
                    closePaymentModal();
                } else if (cartSidebar.classList.contains('open')) {
                    toggleCart();
                }
            }
        });

        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Add loading state
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });