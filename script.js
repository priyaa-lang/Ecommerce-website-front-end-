 <!-- JavaScript -->
    <script type="module">
       

        // DOM Elements
        const productGrid = document.getElementById('products-grid');
        const productModal = document.getElementById('product-modal');
        const productDetailContainer = document.getElementById('product-detail-container');
        const cartSummary = document.getElementById('cart-summary');
        const cartToggle = document.querySelector('.cart-toggle');
        const cartClose = document.querySelector('.cart-close');
        const modalClose = document.querySelector('.modal-close');
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const priceFilter = document.getElementById('price-filter');
        const availabilityFilter = document.getElementById('availability-filter');
        const sortSelect = document.getElementById('sort-select');
        const productsCount = document.getElementById('products-count');
        const themeToggle = document.getElementById('theme-toggle');
        const themeDropdown = document.getElementById('theme-dropdown');
        const notification = document.getElementById('notification');
        const notificationTitle = document.getElementById('notification-title');
        const notificationBody = document.getElementById('notification-body');
        const notificationClose = document.getElementById('notification-close');
        const viewOptions = document.querySelectorAll('.view-option');

        // Extended products data with more images and features
        const products = [
            {
                "id": "prod-001",
                "name": "Midnight Sapphire Ring",
                "description": "Exquisite midnight sapphire ring set in 18k white gold with diamond accents. A statement piece that captures the essence of luxury. Features a precision-cut 2-carat sapphire with exceptional clarity and brilliance.",
                "category": "jewelry",
                "price": 3200.00,
                "originalPrice": 3800.00,
                "images": [
                    "https://i.etsystatic.com/25085947/r/il/a2bb49/5386624253/il_1588xN.5386624253_55in.jpg",
                    "https://i.etsystatic.com/23642276/r/il/01f394/3750845229/il_1588xN.3750845229_lob7.jpg",
                    "https://i.etsystatic.com/25398482/r/il/133ac6/6484553069/il_1588xN.6484553069_2i82.jpg",
                    "https://i.etsystatic.com/28802054/r/il/e2baf0/6949582259/il_1588xN.6949582259_o748.jpg",
                ],
                "badge": "Sale",
                "rating": 4.9,
                "reviewCount": 12,
                "stock": 1,
                "dateAdded": "2023-06-05",
                "features": [
                    "18k white gold setting",
                    "2-carat midnight sapphire",
                    "Diamond accents",
                    "GIA certified",
                    "Eco-friendly packaging"
                ],
                "variants": [
                    {
                        "id": "var-001-1",
                        "name": "Size 6",
                        "price": 3200.00
                    },
                    {
                        "id": "var-001-2",
                        "name": "Size 7",
                        "price": 3200.00
                    },
                    {
                        "id": "var-001-3",
                        "name": "Size 8",
                        "price": 3200.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Robert J.",
                        "date": "2023-10-12",
                        "rating": 5,
                        "text": "Absolutely breathtaking ring. My fiancée hasn't stopped looking at it since I proposed. The sapphire is deep and mysterious."
                    },
                    {
                        "author": "Nancy P.",
                        "date": "2023-09-18",
                        "rating": 5,
                        "text": "This ring is even more stunning in person. The midnight sapphire is unique and the setting is exquisite."
                    }
                ]
            },
            {
                "id": "prod-002",
                "name": "Obsidian Chronograph",
                "description": "Limited edition chronograph watch with obsidian dial and sapphire crystal. Swiss movement with 42-hour power reserve. A masterpiece of horological engineering with exceptional attention to detail.",
                "category": "watches",
                "price": 4500.00,
                "images": [
                    "https://i.pinimg.com/736x/4b/3e/bc/4b3ebc97c021e834db57254020e2f1a7.jpg",
                    "https://i.pinimg.com/1200x/0e/1c/e3/0e1ce33fc8cb88aae9c54dcd3f56d5f0.jpg",
                    "https://i.pinimg.com/736x/ae/68/a6/ae68a6dbd4eb7927d9a6d7468dd5e673.jpg",
                    "https://i.pinimg.com/736x/0a/1c/d8/0a1cd838646dec62c33d79276625cb50.jpg"
                ],
                "badge": "Limited",
                "rating": 4.8,
                "reviewCount": 18,
                "stock": 3,
                "dateAdded": "2023-08-22",
                "features": [
                    "Swiss automatic movement",
                    "Obsidian dial",
                    "Sapphire crystal",
                    "42-hour power reserve",
                    "Water resistant to 100m"
                ],
                "variants": [
                    {
                        "id": "var-002-1",
                        "name": "Black Leather",
                        "price": 4500.00
                    },
                    {
                        "id": "var-002-2",
                        "name": "Steel Bracelet",
                        "price": 4700.00
                    }
                ],
                "reviews": [
                    {
                        "author": "William H.",
                        "date": "2023-10-02",
                        "rating": 5,
                        "text": "This chronograph is a true work of art. The obsidian dial is mesmerizing and the Swiss movement is flawless."
                    },
                    {
                        "author": "Elizabeth K.",
                        "date": "2023-09-15",
                        "rating": 5,
                        "text": "Bought this as a gift for my husband and he absolutely loves it. A sophisticated timepiece that commands attention."
                    }
                ]
            },
            {
                "id": "prod-003",
                "name": "Burgundy Leather Briefcase",
                "description": "Handcrafted briefcase made from premium burgundy leather with brushed gold hardware. Spacious interior with dedicated compartments for laptops and documents. The perfect blend of functionality and elegance.",
                "category": "accessories",
                "price": 750.00,
                "images": [
                    "https://i.pinimg.com/1200x/60/fe/9b/60fe9b7bb4b5b4d3915273c35f366b95.jpg",
                    "https://i.pinimg.com/1200x/a6/bf/55/a6bf557e0805822318f6fc2e4b6df892.jpg",
                    "https://i.pinimg.com/736x/66/58/20/665820e2b99cddbd120a36dae347072b.jpg"
                ],
                "badge": null,
                "rating": 4.7,
                "reviewCount": 32,
                "stock": 8,
                "dateAdded": "2023-07-10",
                "features": [
                    "Full-grain leather",
                    "Brushed gold hardware",
                    "Laptop compartment",
                    "Document organizer",
                    "Adjustable shoulder strap"
                ],
                "variants": [
                    {
                        "id": "var-003-1",
                        "name": "Burgundy",
                        "price": 750.00
                    },
                    {
                        "id": "var-003-2",
                        "name": "Black",
                        "price": 750.00
                    },
                    {
                        "id": "var-003-3",
                        "name": "Tan",
                        "price": 750.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Michael R.",
                        "date": "2023-10-10",
                        "rating": 5,
                        "text": "This briefcase exceeded my expectations. The leather quality is superb and it has plenty of room for everything I need."
                    },
                    {
                        "author": "Jennifer W.",
                        "date": "2023-09-25",
                        "rating": 4,
                        "text": "Beautiful briefcase, very professional looking. The burgundy color is rich and sophisticated."
                    },
                    {
                        "author": "David L.",
                        "date": "2023-08-30",
                        "rating": 5,
                        "text": "Worth every penny. The craftsmanship is outstanding and it's already developing a beautiful patina."
                    }
                ]
            },
            {
                "id": "prod-004",
                "name": "Moss Green Silk Scarf",
                "description": "Handwoven moss green silk scarf with intricate gold thread embroidery. Perfect for adding a touch of luxury to any outfit. Crafted by master artisans using traditional techniques passed down through generations.",
                "category": "accessories",
                "price": 220.00,
                "images": [
                    "https://i.pinimg.com/1200x/ee/1d/0c/ee1d0ce9ad587beba189bb4a30e5c489.jpg",
                    "https://i.pinimg.com/736x/00/f8/7e/00f87e3b9f73e876a2fe4b1af90f1476.jpg",
                    "https://i.pinimg.com/1200x/d7/1f/24/d71f241f3bcf39bb3f0adeb439e74933.jpg"
                ],
                "badge": "New",
                "rating": 4.5,
                "reviewCount": 24,
                "stock": 15,
                "dateAdded": "2023-09-15",
                "features": [
                    "100% pure silk",
                    "Hand-embroidered details",
                    "Gold thread accents",
                    "Hand-rolled edges",
                    "Gift packaging included"
                ],
                "variants": [
                    {
                        "id": "var-004-1",
                        "name": "Moss Green",
                        "price": 220.00
                    },
                    {
                        "id": "var-004-2",
                        "name": "Midnight Blue",
                        "price": 220.00
                    },
                    {
                        "id": "var-004-3",
                        "name": "Burgundy",
                        "price": 220.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Alexandra M.",
                        "date": "2023-10-05",
                        "rating": 5,
                        "text": "Absolutely stunning scarf! The quality is exceptional and the moss green color is rich and elegant."
                    },
                    {
                        "author": "James T.",
                        "date": "2023-09-28",
                        "rating": 4,
                        "text": "Great scarf, very soft and luxurious. The gold embroidery adds a touch of sophistication."
                    },
                    {
                        "author": "Sophie L.",
                        "date": "2023-09-20",
                        "rating": 5,
                        "text": "Perfect accessory for both casual and formal occasions. The moss green is versatile and unique."
                    }
                ]
            },
            {
                "id": "prod-005",
                "name": "Charcoal Cashmere Coat",
                "description": "Luxurious charcoal cashmere coat with a classic silhouette. Made from the finest Mongolian cashmere for ultimate warmth and comfort. A timeless piece that will remain stylish for years to come.",
                "category": "apparel",
                "price": 1200.00,
                "images": [
                    "https://i.pinimg.com/1200x/e1/6d/7c/e16d7c512296d29048c02b832cf34ea7.jpg",
                    "https://i.pinimg.com/1200x/39/6a/c1/396ac1c80eb0818b78351b2d85063557.jpg",
                    "https://i.pinimg.com/736x/30/ff/67/30ff670b9e698f169dbbfd66ec6e34c8.jpg"
                    
                ],
                "badge": null,
                "rating": 4.6,
                "reviewCount": 41,
                "stock": 12,
                "dateAdded": "2023-09-01",
                "features": [
                    "100% Mongolian cashmere",
                    "Classic silhouette",
                    "Notched lapels",
                    "Two-button closure",
                    "Fully lined"
                ],
                "variants": [
                    {
                        "id": "var-005-1",
                        "name": "XS",
                        "price": 1200.00
                    },
                    {
                        "id": "var-005-2",
                        "name": "S",
                        "price": 1200.00
                    },
                    {
                        "id": "var-005-3",
                        "name": "M",
                        "price": 1200.00
                    },
                    {
                        "id": "var-005-4",
                        "name": "L",
                        "price": 1200.00
                    },
                    {
                        "id": "var-005-5",
                        "name": "XL",
                        "price": 1200.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Patricia S.",
                        "date": "2023-10-08",
                        "rating": 5,
                        "text": "This is the most luxurious coat I've ever owned! The cashmere is incredibly soft and warm. Worth every penny."
                    },
                    {
                        "author": "Thomas B.",
                        "date": "2023-09-22",
                        "rating": 4,
                        "text": "Great quality cashmere coat. Very warm and elegant. The charcoal color is versatile and sophisticated."
                    },
                    {
                        "author": "Margaret H.",
                        "date": "2023-09-05",
                        "rating": 5,
                        "text": "Absolutely beautiful coat. The cashmere is of exceptional quality and the fit is perfect."
                    }
                ]
            },
            {
                "id": "prod-006",
                "name": "Antique Gold Cufflinks",
                "description": "Elegant 18k antique gold cufflinks with a classic design. Perfect for formal occasions or to add a touch of sophistication to business attire. Meticulously crafted with attention to every detail.",
                "category": "accessories",
                "price": 350.00,
                "images": [
                    "https://i.pinimg.com/736x/85/99/a3/8599a34d29271f679a89f717ff8e29b6.jpg",
                    "https://i.pinimg.com/736x/e5/87/4b/e5874be2563f644c685902447b15e491.jpg",
                    "https://i.pinimg.com/736x/86/8a/31/868a316bb4aec733a89d2bc9812fa7a8.jpg"

                ],
                "badge": null,
                "rating": 4.4,
                "reviewCount": 19,
                "stock": 25,
                "dateAdded": "2023-08-15",
                "features": [
                    "18k antique gold",
                    "Classic design",
                    "Whale back closure",
                    "Polished finish",
                    "Gift box included"
                ],
                "variants": [
                    {
                        "id": "var-006-1",
                        "name": "Classic",
                        "price": 350.00
                    },
                    {
                        "id": "var-006-2",
                        "name": "Engraved",
                        "price": 380.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Charles D.",
                        "date": "2023-10-01",
                        "rating": 5,
                        "text": "These cufflinks are absolutely beautiful. The antique gold has a lovely luster and they feel substantial."
                    },
                    {
                        "author": "Susan M.",
                        "date": "2023-09-12",
                        "rating": 4,
                        "text": "Bought these as a gift for my husband and he loves them. They add a nice touch of elegance to his suits."
                    }
                ]
            },
            {
                "id": "prod-007",
                "name": "Vintage Leather Wallet",
                "description": "Handcrafted vintage leather wallet with multiple card slots and bill compartments. Made from full-grain leather that develops a beautiful patina over time. A perfect blend of functionality and timeless style.",
                "category": "accessories",
                "price": 180.00,
                "images": [
                    "https://i.pinimg.com/736x/77/1c/d2/771cd2ace3f807969f244eaf8bbcc728.jpg",
                    "https://i.pinimg.com/1200x/fc/1a/da/fc1adab5634dc38311f3d64353887b31.jpg",
                    "https://i.pinimg.com/736x/64/85/85/648585c0593e54d580c37569a08b8980.jpg"
                   
                ],
                "badge": "New",
                "rating": 4.7,
                "reviewCount": 28,
                "stock": 20,
                "dateAdded": "2023-10-01",
                "features": [
                    "Full-grain leather",
                    "8 card slots",
                    "2 bill compartments",
                    "RFID protection",
                    "Hand-stitched edges"
                ],
                "variants": [
                    {
                        "id": "var-007-1",
                        "name": "Brown",
                        "price": 180.00
                    },
                    {
                        "id": "var-007-2",
                        "name": "Black",
                        "price": 180.00
                    },
                    {
                        "id": "var-007-3",
                        "name": "Tan",
                        "price": 180.00
                    }
                ],
                "reviews": [
                    {
                        "author": "James K.",
                        "date": "2023-10-15",
                        "rating": 5,
                        "text": "Exceptional quality leather wallet. The craftsmanship is evident in every stitch. Highly recommended!"
                    },
                    {
                        "author": "Maria S.",
                        "date": "2023-10-05",
                        "rating": 4,
                        "text": "Beautiful wallet with plenty of space for cards and cash. The leather feels premium and durable."
                    }
                ]
            },
            {
                "id": "prod-008",
                "name": "Sapphire Drop Earrings",
                "description": "Elegant sapphire drop earrings set in 18k white gold. Perfect for special occasions or adding a touch of sophistication to everyday wear. Each sapphire is carefully selected for its exceptional color and clarity.",
                "category": "jewelry",
                "price": 1200.00,
                "images": [
                    "https://i.pinimg.com/736x/61/20/bd/6120bde9f0ae4775450a08762be4033c.jpg",
                    "https://i.pinimg.com/1200x/53/b9/63/53b963c26c31b110067699b5d9f5e6f1.jpg",
                    "https://i.pinimg.com/736x/61/20/bd/6120bde9f0ae4775450a08762be4033c.jpg"
                   
                ],
                "badge": "Exclusive",
                "rating": 4.9,
                "reviewCount": 15,
                "stock": 5,
                "dateAdded": "2023-09-20",
                "features": [
                    "18k white gold",
                    "2-carat sapphires",
                    "Diamond accents",
                    "Secure lever back",
                    "GIA certified"
                ],
                "variants": [
                    {
                        "id": "var-008-1",
                        "name": "Sapphire",
                        "price": 1200.00
                    },
                    {
                        "id": "var-008-2",
                        "name": "Ruby",
                        "price": 1250.00
                    },
                    {
                        "id": "var-008-3",
                        "name": "Emerald",
                        "price": 1300.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Elizabeth T.",
                        "date": "2023-10-10",
                        "rating": 5,
                        "text": "These earrings are absolutely stunning! The sapphires are deep blue and the setting is exquisite."
                    },
                    {
                        "author": "Jennifer L.",
                        "date": "2023-09-25",
                        "rating": 5,
                        "text": "Wore these to a wedding and received so many compliments. They're even more beautiful in person."
                    }
                ]
            },
            {
                "id": "prod-009",
                "name": "Midnight Blue Tuxedo",
                "description": "Tailored midnight blue tuxedo with satin lapels and premium wool fabric. A modern take on classic formalwear for the discerning gentleman. Expertly crafted for a perfect fit and exceptional comfort.",
                "category": "apparel",
                "price": 1500.00,
                "images": [
                    "https://i.pinimg.com/736x/a5/8c/eb/a58ceb999fa43ea28b1d336e53582eb5.jpg",
                    "https://i.pinimg.com/736x/4f/37/a6/4f37a6c82d5850b63ed817c878c6ea15.jpg",
                    "https://i.pinimg.com/736x/d8/23/e0/d823e01df5b4b375414a752a12d38727.jpg"
                ],
                "badge": "Limited",
                "rating": 4.8,
                "reviewCount": 22,
                "stock": 8,
                "dateAdded": "2023-08-10",
                "features": [
                    "Premium wool fabric",
                    "Satin lapels",
                    "Tailored fit",
                    "Bespoke alterations",
                    "Garment bag included"
                ],
                "variants": [
                    {
                        "id": "var-009-1",
                        "name": "38R",
                        "price": 1500.00
                    },
                    {
                        "id": "var-009-2",
                        "name": "40R",
                        "price": 1500.00
                    },
                    {
                        "id": "var-009-3",
                        "name": "42R",
                        "price": 1500.00
                    },
                    {
                        "id": "var-009-4",
                        "name": "44R",
                        "price": 1500.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Michael B.",
                        "date": "2023-10-12",
                        "rating": 5,
                        "text": "Exceptional tuxedo! The midnight blue is sophisticated and the fit is perfect. Worth every penny."
                    },
                    {
                        "author": "David W.",
                        "date": "2023-09-30",
                        "rating": 5,
                        "text": "Wore this to a black-tie event and received numerous compliments. The quality is outstanding."
                    }
                ]
            },
            {
                "id": "prod-010",
                "name": "Rose Gold Pocket Watch",
                "description": "Antique-inspired rose gold pocket watch with intricate engravings and quartz movement. A timeless piece that combines vintage charm with modern reliability. Perfect for the gentleman who appreciates classic style.",
                "category": "watches",
                "price": 680.00,
                "images": [
                    "https://i.pinimg.com/1200x/1e/ee/7e/1eee7e3ae7b690b35871eaa32299361a.jpg",
                    "https://i.pinimg.com/736x/78/85/1d/78851da44a0bcd1876bf25375cb09dea.jpg",
                    "https://i.pinimg.com/736x/94/67/ed/9467edb68a075e69f39b5476024ce8aa.jpg"
                ],
                "badge": "New",
                "rating": 4.6,
                "reviewCount": 31,
                "stock": 12,
                "dateAdded": "2023-10-05",
                "features": [
                    "Rose gold case",
                    "Intricate engravings",
                    "Quartz movement",
                    "Mineral crystal",
                    "Chain included"
                ],
                "variants": [
                    {
                        "id": "var-010-1",
                        "name": "Rose Gold",
                        "price": 680.00
                    },
                    {
                        "id": "var-010-2",
                        "name": "Yellow Gold",
                        "price": 650.00
                    },
                    {
                        "id": "var-010-3",
                        "name": "Silver",
                        "price": 620.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Robert T.",
                        "date": "2023-10-18",
                        "rating": 5,
                        "text": "This pocket watch is absolutely beautiful! The rose gold finish is elegant and the engravings are intricate."
                    },
                    {
                        "author": "William G.",
                        "date": "2023-10-08",
                        "rating": 4,
                        "text": "Great quality pocket watch with a vintage feel. The rose gold color is unique and sophisticated."
                    }
                ]
            },
            {
                "id": "prod-011",
                "name": "Diamond Tennis Bracelet",
                "description": "Stunning diamond tennis bracelet set in 18k white gold. Features brilliant-cut diamonds in a classic four-prong setting. A timeless piece that adds elegance to any outfit.",
                "category": "jewelry",
                "price": 2800.00,
                "originalPrice": 3200.00,
                "images": [
                    "https://i.pinimg.com/1200x/31/b9/d6/31b9d692bcbfb13da3c0e92e92f9695c.jpg",
                    "https://i.pinimg.com/736x/4d/bb/3e/4dbb3ea40e89d768df02df8c49de0b5f.jpg",
                    "https://i.pinimg.com/1200x/4f/3c/7a/4f3c7a468368eb73450bc3845aaa2f44.jpg"
                ],
                "badge": "Sale",
                "rating": 4.9,
                "reviewCount": 27,
                "stock": 6,
                "dateAdded": "2023-09-15",
                "features": [
                    "18k white gold",
                    "Brilliant-cut diamonds",
                    "Four-prong setting",
                    "Safety clasp",
                    "GIA certified"
                ],
                "variants": [
                    {
                        "id": "var-011-1",
                        "name": "7 inches",
                        "price": 2800.00
                    },
                    {
                        "id": "var-011-2",
                        "name": "7.5 inches",
                        "price": 2850.00
                    },
                    {
                        "id": "var-011-3",
                        "name": "8 inches",
                        "price": 2900.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Sarah M.",
                        "date": "2023-10-20",
                        "rating": 5,
                        "text": "This bracelet is absolutely stunning! The diamonds sparkle beautifully and the craftsmanship is exceptional."
                    },
                    {
                        "author": "Jennifer K.",
                        "date": "2023-10-05",
                        "rating": 5,
                        "text": "Received this as a gift and I wear it every day. It's elegant and timeless. Highly recommend!"
                    }
                ]
            },
            {
                "id": "prod-012",
                "name": "Italian Leather Gloves",
                "description": "Luxurious Italian leather gloves with cashmere lining. Handcrafted by skilled artisans using traditional techniques. The perfect accessory for cold weather while maintaining elegance.",
                "category": "accessories",
                "price": 150.00,
                "images": [
                    "https://i.pinimg.com/736x/a2/c8/cb/a2c8cbb524f4a6a2e8e4cf5a186c0757.jpg",
                    "https://i.pinimg.com/736x/81/90/82/81908201e16112efad3089dca7962e57.jpg",
                    "https://i.pinimg.com/1200x/94/51/ab/9451ab092e7cd84895539775624fa82d.jpg"
                ],
                "badge": "New",
                "rating": 4.5,
                "reviewCount": 18,
                "stock": 30,
                "dateAdded": "2023-10-10",
                "features": [
                    "Italian lambskin leather",
                    "Cashmere lining",
                    "Hand-stitched seams",
                    "Elasticated wrist",
                    "Gift box included"
                ],
                "variants": [
                    {
                        "id": "var-012-1",
                        "name": "Black",
                        "price": 150.00
                    },
                    {
                        "id": "var-012-2",
                        "name": "Brown",
                        "price": 150.00
                    },
                    {
                        "id": "var-012-3",
                        "name": "Burgundy",
                        "price": 150.00
                    }
                ],
                "reviews": [
                    {
                        "author": "Emily R.",
                        "date": "2023-10-22",
                        "rating": 5,
                        "text": "These gloves are incredibly soft and warm. The leather quality is exceptional and they fit perfectly."
                    },
                    {
                        "author": "Jessica L.",
                        "date": "2023-10-15",
                        "rating": 4,
                        "text": "Beautiful gloves that keep my hands warm in style. The cashmere lining makes them extra comfortable."
                    }
                ]
            }
        ];

        // Cart state
        let cartItems = [];
        let nextCartItemId = 1;

        // Wishlist state
        let wishlistItems = [];

        // Search and filter state
        let searchTerm = '';
        let category = 'all';
        let priceRange = 'all';
        let availability = 'all';
        let sortBy = 'featured';

        // View state
        let currentView = 'grid';

        // Theme state
        let currentTheme = 'dark';

        // Utility functions
        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        // Notification system
        function showNotification(title, message, type = 'success') {
            notificationTitle.textContent = title;
            notificationBody.textContent = message;
            notification.className = `notification ${type} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Product grid functions
        function renderProducts(productsToRender) {
            if (productsToRender.length === 0) {
                productGrid.innerHTML = `
                    <div class="no-products text-center p-xxl animate-fadeIn">
                        <i class="fas fa-search text-3xl mb-md text-tertiary"></i>
                        <p class="text-lg text-tertiary">No products found matching your criteria.</p>
                    </div>
                `;
                productsCount.textContent = 'Showing 0 products';
                return;
            }

            productGrid.innerHTML = productsToRender.map((product, index) => `
                <article class="product-card animate-fadeIn" data-product-id="${product.id}" style="animation-delay: ${index * 0.1}s">
                    <div class="product-image-container">
                        <img 
                            class="product-image" 
                            src="${product.images[0]}" 
                            alt="${product.name}" 
                            loading="lazy"
                        >
                        <div class="product-badges">
                            ${product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                        </div>
                        <div class="product-actions-quick">
                            <button class="quick-action wishlist-toggle" data-product-id="${product.id}" aria-label="Add to wishlist">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="quick-action quick-view" data-product-id="${product.id}" aria-label="Quick view">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="product-category">${product.category}</p>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                            $${product.price.toFixed(2)}
                        </p>
                        <div class="product-rating">
                            <div class="stars">
                                ${renderStars(product.rating)}
                            </div>
                            <span class="review-count">(${product.reviewCount})</span>
                        </div>
                        <button class="add-to-cart-button" data-product-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </article>
            `).join('');
            
            productsCount.textContent = `Showing ${productsToRender.length} product${productsToRender.length !== 1 ? 's' : ''}`;
            
            // Update wishlist toggle states
            updateWishlistToggles();
        }

        function renderStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let stars = '';
            
            // Full stars
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            // Half star
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            // Empty stars
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }

        function getProductById(id) {
            return products.find(product => product.id === id);
        }

        // Product detail functions
        function showProductDetail(productId) {
            const product = getProductById(productId);
            if (product) {
                renderProductDetail(product);
                productModal.classList.add('active');
            }
        }

        function renderProductDetail(product) {
            productDetailContainer.innerHTML = `
                <div class="product-detail">
                    <div class="product-detail-image-container">
                        <img 
                            class="product-detail-image" 
                            src="${product.images[0]}" 
                            alt="${product.name}" 
                        >
                        <div class="product-thumbnails">
                            ${product.images.map((image, index) => `
                                <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-image-src="${image}">
                                    <img src="${image}" alt="${product.name} - Image ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="product-detail-info">
                        <p class="product-detail-category">${product.category}</p>
                        <h2 class="product-detail-name">${product.name}</h2>
                        <div class="product-detail-rating">
                            <div class="stars">
                                ${renderStars(product.rating)}
                            </div>
                            <span class="review-count">(${product.reviewCount} reviews)</span>
                        </div>
                        <p class="product-detail-price">
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                            $${product.price.toFixed(2)}
                        </p>
                        <p class="product-detail-description">${product.description}</p>
                        
                        <div class="product-features">
                            <h3 class="variant-label">Features:</h3>
                            <ul class="feature-list">
                                ${product.features.map(feature => `
                                    <li class="feature-item">
                                        <i class="fas fa-check feature-icon"></i>
                                        <span>${feature}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        ${product.variants && product.variants.length > 0 ? `
                            <div class="product-variants">
                                <span class="variant-label">Options:</span>
                                <div class="variant-options">
                                    ${product.variants.map(variant => `
                                        <button class="variant-option" data-variant-id="${variant.id}">
                                            ${variant.name}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="product-stock ${product.stock > 0 ? (product.stock < 5 ? 'low-stock' : 'in-stock') : 'out-of-stock'}">
                            <span class="stock-indicator"></span>
                            <span>
                                ${product.stock > 0 ? 
                                    (product.stock < 5 ? `Only ${product.stock} left in stock` : 'In Stock') : 
                                    'Out of Stock'}
                            </span>
                        </div>
                        
                        <div class="product-actions">
                            <div class="quantity-selector">
                                <button class="quantity-button decrease">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" class="quantity-input" value="1" min="1" max="${product.stock || 1}">
                                <button class="quantity-button increase">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button 
                                class="add-to-cart-detail-button" 
                                data-product-id="${product.id}"
                                ${product.stock === 0 ? 'disabled' : ''}
                            >
                                ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                            <button 
                                class="wishlist-button ${wishlistItems.includes(product.id) ? 'active' : ''}" 
                                data-product-id="${product.id}"
                            >
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        
                        <div class="product-reviews">
                            <div class="reviews-header">
                                <h3 class="reviews-title">Customer Reviews</h3>
                                <button class="write-review-button">Write a Review</button>
                            </div>
                            
                            <div class="review-summary">
                                <div class="review-average">
                                    <div class="review-average-score">${product.rating.toFixed(1)}</div>
                                    <div class="review-average-stars">
                                        ${renderStars(product.rating)}
                                    </div>
                                    <div class="review-average-count">${product.reviewCount} reviews</div>
                                </div>
                                
                                <div class="review-breakdown">
                                    ${renderReviewBreakdown(product.reviews)}
                                </div>
                            </div>
                            
                            <div class="reviews-list">
                                ${product.reviews.map(review => `
                                    <div class="review-item">
                                        <div class="review-header">
                                            <span class="review-author">${review.author}</span>
                                            <span class="review-date">${review.date}</span>
                                        </div>
                                        <div class="review-rating">
                                            ${renderStars(review.rating)}
                                        </div>
                                        <p class="review-text">${review.text}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderReviewBreakdown(reviews) {
            // Calculate review distribution
            const distribution = [0, 0, 0, 0, 0]; // 5-star, 4-star, etc.
            
            reviews.forEach(review => {
                const starIndex = Math.ceil(review.rating) - 1;
                if (starIndex >= 0 && starIndex < 5) {
                    distribution[starIndex]++;
                }
            });
            
            const totalReviews = reviews.length;
            
            let breakdownHTML = '';
            
            // Generate breakdown from 5-star to 1-star
            for (let i = 4; i >= 0; i--) {
                const count = distribution[i];
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                
                breakdownHTML += `
                    <div class="review-bar">
                        <span class="review-bar-label">${i + 1}</span>
                        <div class="review-bar-graph">
                            <div class="review-bar-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span class="review-bar-count">${count}</span>
                    </div>
                `;
            }
            
            return breakdownHTML;
        }

        // Cart functions
        function addToCart(productId, quantity = 1, variantId = null) {
            const product = getProductById(productId);
            if (product) {
                // Check if item already exists in cart
                const existingItemIndex = cartItems.findIndex(item => 
                    item.productId === product.id && item.variantId === variantId
                );

                if (existingItemIndex !== -1) {
                    // Update quantity of existing item
                    cartItems[existingItemIndex].quantity += quantity;
                } else {
                    // Add new item to cart
                    const variant = variantId ? 
                        product.variants.find(v => v.id === variantId) : null;
                    
                    cartItems.push({
                        id: nextCartItemId++,
                        productId: product.id,
                        variantId: variantId,
                        name: product.name,
                        variantName: variant ? variant.name : null,
                        price: variant ? variant.price : product.price,
                        image: product.images[0],
                        quantity: quantity,
                        maxStock: product.stock
                    });
                }

                updateCartUI();
                
                // Show notification
                showNotification('Added to Cart', `${product.name} has been added to your cart.`);
                
                // Show optimistic UI feedback
                const button = document.querySelector(`.add-to-cart-button[data-product-id="${productId}"]`) || 
                              document.querySelector(`.add-to-cart-detail-button[data-product-id="${productId}"]`);
                
                if (button) {
                    const originalText = button.textContent;
                    button.textContent = 'Added!';
                    button.disabled = true;
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                    }, 2000);
                }
            }
        }

        function updateCartItemQuantity(itemId, isIncrease) {
            const itemIndex = cartItems.findIndex(item => item.id === itemId);
            
            if (itemIndex !== -1) {
                if (isIncrease) {
                    // Increase quantity if stock allows
                    if (cartItems[itemIndex].quantity < cartItems[itemIndex].maxStock) {
                        cartItems[itemIndex].quantity++;
                    } else {
                        showNotification('Stock Limit', 'Cannot add more items due to stock limitations.', 'error');
                    }
                } else {
                    // Decrease quantity, remove if it reaches 0
                    cartItems[itemIndex].quantity--;
                    
                    if (cartItems[itemIndex].quantity <= 0) {
                        cartItems.splice(itemIndex, 1);
                    }
                }
                
                updateCartUI();
            }
        }

        function removeCartItem(itemId) {
            const itemIndex = cartItems.findIndex(item => item.id === itemId);
            
            if (itemIndex !== -1) {
                const removedItem = cartItems[itemIndex];
                cartItems.splice(itemIndex, 1);
                updateCartUI();
                
                showNotification('Item Removed', `${removedItem.name} has been removed from your cart.`);
            }
        }

        function updateCartUI() {
            const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
            const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            
            // Update cart count in header
            document.querySelector('.cart-count').textContent = itemCount;
            cartToggle.dataset.cartCount = itemCount;
            
            // Update cart items
            const cartItemsContainer = document.getElementById('cart-items');
            const cartEmpty = document.getElementById('cart-empty');
            
            if (cartItems.length === 0) {
                cartItemsContainer.hidden = true;
                cartEmpty.hidden = false;
            } else {
                cartItemsContainer.hidden = false;
                cartEmpty.hidden = true;
                
                cartItemsContainer.innerHTML = cartItems.map(item => `
                    <div class="cart-item" data-cart-item-id="${item.id}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <h3 class="cart-item-name">${item.name}</h3>
                            ${item.variantName ? `<p class="cart-item-variant">${item.variantName}</p>` : ''}
                            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                            <div class="cart-item-quantity">
                                <button class="cart-item-quantity-button decrease">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="cart-item-quantity-input">${item.quantity}</span>
                                <button class="cart-item-quantity-button increase">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }
            
            // Update cart totals
            document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
        }

        // Wishlist functions
        function toggleWishlist(productId) {
            const product = getProductById(productId);
            if (!product) return;
            
            const index = wishlistItems.indexOf(productId);
            
            if (index === -1) {
                // Add to wishlist
                wishlistItems.push(productId);
                showNotification('Added to Wishlist', `${product.name} has been added to your wishlist.`);
            } else {
                // Remove from wishlist
                wishlistItems.splice(index, 1);
                showNotification('Removed from Wishlist', `${product.name} has been removed from your wishlist.`);
            }
            
            updateWishlistToggles();
        }

        function updateWishlistToggles() {
            // Update wishlist buttons in product cards
            document.querySelectorAll('.wishlist-toggle').forEach(button => {
                const productId = button.dataset.productId;
                if (wishlistItems.includes(productId)) {
                    button.classList.add('active');
                    button.querySelector('i').classList.remove('far');
                    button.querySelector('i').classList.add('fas');
                } else {
                    button.classList.remove('active');
                    button.querySelector('i').classList.remove('fas');
                    button.querySelector('i').classList.add('far');
                }
            });
            
            // Update wishlist button in product detail
            const detailWishlistButton = document.querySelector('.product-detail .wishlist-button');
            if (detailWishlistButton) {
                const productId = detailWishlistButton.dataset.productId;
                if (wishlistItems.includes(productId)) {
                    detailWishlistButton.classList.add('active');
                } else {
                    detailWishlistButton.classList.remove('active');
                }
            }
        }

        // Search and filter functions
        function applyFilters() {
            let filteredProducts = products.filter(product => {
                // Search filter
                if (searchTerm && !matchesSearch(product, searchTerm)) {
                    return false;
                }
                
                // Category filter
                if (category !== 'all' && product.category !== category) {
                    return false;
                }
                
                // Price filter
                if (priceRange !== 'all' && !matchesPriceRange(product, priceRange)) {
                    return false;
                }
                
                // Availability filter
                if (availability !== 'all' && !matchesAvailability(product, availability)) {
                    return false;
                }
                
                return true;
            });
            
            // Apply sorting
            filteredProducts = applySort(filteredProducts);
            
            renderProducts(filteredProducts);
        }

        function matchesSearch(product, term) {
            return (
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term)
            );
        }

        function matchesPriceRange(product, range) {
            switch (range) {
                case '0-100':
                    return product.price >= 0 && product.price <= 100;
                case '100-500':
                    return product.price > 100 && product.price <= 500;
                case '500-1000':
                    return product.price > 500 && product.price <= 1000;
                case '1000+':
                    return product.price > 1000;
                default:
                    return true;
            }
        }

        function matchesAvailability(product, avail) {
            switch (avail) {
                case 'in-stock':
                    return product.stock > 0;
                case 'low-stock':
                    return product.stock > 0 && product.stock < 5;
                default:
                    return true;
            }
        }

        function applySort(productsToSort) {
            const sortedProducts = [...productsToSort];
            
            switch (sortBy) {
                case 'price-low-high':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high-low':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                    sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                    break;
                case 'rating':
                    sortedProducts.sort((a, b) => b.rating - a.rating);
                    break;
                case 'featured':
                default:
                    // Keep original order for featured
                    break;
            }
            
            return sortedProducts;
        }

        // Theme functions
        function setTheme(themeName) {
            // Remove all theme attributes
            document.documentElement.removeAttribute('data-theme');
            
            // Set the selected theme
            if (themeName !== 'dark') {
                document.documentElement.setAttribute('data-theme', themeName);
            }
            
            currentTheme = themeName;
            
            // Save theme preference to localStorage
            localStorage.setItem('theme', themeName);
            
            // Close theme dropdown
            themeDropdown.classList.remove('active');
            
            // Show notification
            showNotification('Theme Changed', `Theme has been changed to ${themeName}.`);
        }

        // View functions
        function setView(viewName) {
            currentView = viewName;
            
            // Update view option buttons
            viewOptions.forEach(option => {
                if (option.dataset.view === viewName) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            // Update product grid class
            if (viewName === 'list') {
                productGrid.classList.add('list-view');
            } else {
                productGrid.classList.remove('list-view');
            }
            
            // Re-render products with new view
            applyFilters();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Theme toggle
            themeToggle.addEventListener('click', () => {
                themeDropdown.classList.toggle('active');
            });
            
            // Theme options
            document.querySelectorAll('.theme-option').forEach(option => {
                option.addEventListener('click', () => {
                    setTheme(option.dataset.theme);
                });
            });
            
            // Close theme dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!themeToggle.contains(e.target) && !themeDropdown.contains(e.target)) {
                    themeDropdown.classList.remove('active');
                }
            });
            
            // Cart toggle
            cartToggle.addEventListener('click', () => {
                cartSummary.classList.toggle('active');
            });
            
            // Cart close
            cartClose.addEventListener('click', () => {
                cartSummary.classList.remove('active');
            });
            
            // Modal close
            modalClose.addEventListener('click', () => {
                productModal.classList.remove('active');
            });
            
            // Close modal when clicking outside
            productModal.addEventListener('click', (e) => {
                if (e.target === productModal) {
                    productModal.classList.remove('active');
                }
            });
            
            // Notification close
            notificationClose.addEventListener('click', () => {
                notification.classList.remove('show');
            });
            
            // Search input with debounce
            searchInput.addEventListener('input', debounce((e) => {
                searchTerm = e.target.value.toLowerCase().trim();
                applyFilters();
            }, 300));
            
            // Filter change events
            categoryFilter.addEventListener('change', (e) => {
                category = e.target.value;
                applyFilters();
            });
            
            priceFilter.addEventListener('change', (e) => {
                priceRange = e.target.value;
                applyFilters();
            });
            
            availabilityFilter.addEventListener('change', (e) => {
                availability = e.target.value;
                applyFilters();
            });
            
            // Sort change event
            sortSelect.addEventListener('change', (e) => {
                sortBy = e.target.value;
                applyFilters();
            });
            
            // View options
            viewOptions.forEach(option => {
                option.addEventListener('click', () => {
                    setView(option.dataset.view);
                });
            });
            
            // Category cards
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', () => {
                    const categoryValue = card.dataset.category;
                    categoryFilter.value = categoryValue;
                    category = categoryValue;
                    applyFilters();
                    
                    // Scroll to products section
                    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
                });
            });
            
            // Newsletter forms
            document.querySelectorAll('.newsletter-form').forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = form.querySelector('.newsletter-input').value;
                    showNotification('Subscription Successful', `Thank you for subscribing with ${email}!`);
                    form.reset();
                });
            });
            
            // Event delegation for product cards and buttons
            document.addEventListener('click', (e) => {
                // Product card click
                const productCard = e.target.closest('.product-card');
                if (productCard && !e.target.closest('.add-to-cart-button') && !e.target.closest('.quick-action')) {
                    const productId = productCard.dataset.productId;
                    showProductDetail(productId);
                }
                
                // Add to cart button click
                const addToCartButton = e.target.closest('.add-to-cart-button');
                if (addToCartButton) {
                    e.stopPropagation();
                    const productId = addToCartButton.dataset.productId;
                    addToCart(productId);
                }
                
                // Quick view button click
                const quickViewButton = e.target.closest('.quick-view');
                if (quickViewButton) {
                    e.stopPropagation();
                    const productId = quickViewButton.dataset.productId;
                    showProductDetail(productId);
                }
                
                // Wishlist toggle click
                const wishlistToggle = e.target.closest('.wishlist-toggle');
                if (wishlistToggle) {
                    e.stopPropagation();
                    const productId = wishlistToggle.dataset.productId;
                    toggleWishlist(productId);
                }
                
                // Add to cart detail button click
                const addToCartDetailButton = e.target.closest('.add-to-cart-detail-button');
                if (addToCartDetailButton) {
                    const productId = addToCartDetailButton.dataset.productId;
                    const quantity = parseInt(document.querySelector('.quantity-input').value);
                    const selectedVariant = document.querySelector('.variant-option.selected')?.dataset.variantId;
                    addToCart(productId, quantity, selectedVariant);
                }
                
                // Wishlist detail button click
                const wishlistButton = e.target.closest('.wishlist-button');
                if (wishlistButton) {
                    const productId = wishlistButton.dataset.productId;
                    toggleWishlist(productId);
                }
                
                // Cart item quantity change
                const cartQuantityButton = e.target.closest('.cart-item-quantity-button');
                if (cartQuantityButton) {
                    const cartItem = cartQuantityButton.closest('.cart-item');
                    const cartItemId = cartItem.dataset.cartItemId;
                    const isIncrease = cartQuantityButton.classList.contains('increase');
                    updateCartItemQuantity(cartItemId, isIncrease);
                }
                
                // Cart item remove
                const cartItemRemove = e.target.closest('.cart-item-remove');
                if (cartItemRemove) {
                    const cartItem = cartItemRemove.closest('.cart-item');
                    const cartItemId = cartItem.dataset.cartItemId;
                    removeCartItem(cartItemId);
                }
                
                // Variant selection
                const variantOption = e.target.closest('.variant-option');
                if (variantOption) {
                    document.querySelectorAll('.variant-option').forEach(option => {
                        option.classList.remove('selected');
                    });
                    variantOption.classList.add('selected');
                }
                
                // Quantity selector
                const quantityButton = e.target.closest('.quantity-button');
                if (quantityButton) {
                    const quantityInput = document.querySelector('.quantity-input');
                    const currentValue = parseInt(quantityInput.value);
                    
                    if (quantityButton.classList.contains('decrease')) {
                        quantityInput.value = Math.max(1, currentValue - 1);
                    } else if (quantityButton.classList.contains('increase')) {
                        quantityInput.value = currentValue + 1;
                    }
                }
                
                // Product thumbnail click
                const productThumbnail = e.target.closest('.product-thumbnail');
                if (productThumbnail) {
                    const imageSrc = productThumbnail.dataset.imageSrc;
                    const productDetailImage = document.querySelector('.product-detail-image');
                    productDetailImage.src = imageSrc;
                    
                    document.querySelectorAll('.product-thumbnail').forEach(thumbnail => {
                        thumbnail.classList.remove('active');
                    });
                    productThumbnail.classList.add('active');
                }
            });
        }

        // Initialize the application
        function init() {
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme && savedTheme !== 'dark') {
                setTheme(savedTheme);
            }
            
            // Render initial products
            renderProducts(products);
            
            // Set up event listeners
            setupEventListeners();
        }

        // Initialize the application when DOM is fully loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
