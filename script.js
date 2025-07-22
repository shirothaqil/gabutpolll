// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show More Projects functionality
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let isExpanded = false;
    
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            if (!isExpanded) {
                // Show hidden projects with staggered animation
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.display = 'block';
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(30px) scale(0.8)';
                        
                        // Trigger animation
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    }, index * 150);
                });
                
                // Change button text and state
                setTimeout(() => {
                    this.textContent = 'Tampilkan Lebih Sedikit';
                    isExpanded = true;
                }, hiddenProjects.length * 150);
                
            } else {
                // Hide projects with reverse animation
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(-30px) scale(0.8)';
                        
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }, index * 100);
                });
                
                // Change button text and state
                this.textContent = 'Tampilkan Lebih Banyak Proyek';
                isExpanded = false;
            }
        });
    }
    
    // Smooth scrolling untuk navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections untuk animasi
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe project items untuk animasi staggered (hanya yang visible)
    const visibleProjectItems = document.querySelectorAll('.project-item:not(.hidden-project)');
    visibleProjectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Typing effect untuk hero title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Parallax effect untuk hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallax}px) scale(1)`;
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Mohon isi semua field!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Pesan berhasil dikirim! Terima kasih.', 'success');
            this.reset();
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                break;
            default:
                notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Add hover effects to project items
    const allProjectItems = document.querySelectorAll('.project-item');
    allProjectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn, .btn-small');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .fade-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .slide-in-left {
            animation: slideInLeft 0.8s ease forwards;
        }
        
        .slide-in-right {
            animation: slideInRight 0.8s ease forwards;
        }
    `;
    document.head.appendChild(style);
    
    // Add loading animation
    window.addEventListener('load', function() {
        const loader = document.createElement('div');
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #3498db, #2980b9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;
        
        loader.innerHTML = `
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        `;
        
        const spinStyle = document.createElement('style');
        spinStyle.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinStyle);
        
        document.body.appendChild(loader);
        
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
    
    // Add dark mode toggle (optional)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #3498db, #2980b9);
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
    `;
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(darkModeToggle);
    
    // Add dark mode styles
    const darkModeStyle = document.createElement('style');
    darkModeStyle.textContent = `
        .dark-mode {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        
        .dark-mode header {
            background: rgba(26, 26, 26, 0.95) !important;
        }
        
        .dark-mode .about,
        .dark-mode .contact {
            background: #2d2d2d !important;
        }
        
        .dark-mode .project-item {
            background: #2d2d2d !important;
        }
        
        .dark-mode .contact input,
        .dark-mode .contact textarea {
            background: #3d3d3d !important;
            border-color: #4d4d4d !important;
            color: #e0e0e0 !important;
        }
        
        .dark-mode nav a,
        .dark-mode .logo,
        .dark-mode h1,
        .dark-mode h2,
        .dark-mode h3 {
            color: #e0e0e0 !important;
        }
        
        .dark-mode .hero-content p,
        .dark-mode .about p,
        .dark-mode .contact p,
        .dark-mode .project-item p {
            color: #b0b0b0 !important;
        }
    `;
    document.head.appendChild(darkModeStyle);
});

