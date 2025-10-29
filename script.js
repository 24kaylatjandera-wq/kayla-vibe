document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is the "Order Now" button or other non-hash link
            if (this.classList.contains('btn-order') || this.getAttribute('href') === '#') {
                // Prevent default scrolling for buttons that lead to external shop/modal
                e.preventDefault();
                // Example action for Order Now:
                console.log('Order Now button clicked. Redirecting to Shop page...');
                // Di sini Anda dapat menambahkan kode untuk membuka modal atau redirect ke halaman toko
                alert('Redirecting to our Online Shop!'); 
                return;
            }

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.main-header').offsetHeight, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add a subtle animation or class change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Logika tambahan untuk tombol "Explore Full Menu"
    const fullMenuBtn = document.querySelector('.full-menu-btn');
    if (fullMenuBtn) {
        fullMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Explore Full Menu clicked. Redirecting to Menu page...');
            alert('Opening the full Product Catalog!');
            // Di sini Anda akan menambahkan kode untuk redirect ke halaman Menu/Katalog produk
        });
    }

    // Logika tambahan untuk tombol "Shop Now" di CTA
    const shopNowCta = document.querySelector('.large-cta');
    if (shopNowCta) {
        shopNowCta.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Shop Now CTA clicked. Starting purchase process...');
            alert('Proceeding to Checkout/Shop.');
            // Di sini Anda akan menambahkan kode untuk memulai proses pembelian
        });
    }
});