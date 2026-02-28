/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ============================================
       MOBILE MENU TOGGLE
       ============================================ */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    /* ============================================
       HEADER SCROLL EFFECT
       ============================================ */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    /* ============================================
       TYPING ANIMATION
       ============================================ */
    const typingText = document.querySelector('.typing-text');
    const words = [
        'Full Stack Developer',
        'MERN Stack Developer',
        'React Developer',
        'Node.js Developer',
        'Web Designer',
        'Problem Solver'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    if (typingText) {
         typeEffect();
    }
    
    /* ============================================
       ACTIVE NAVIGATION ON SCROLL
       ============================================ */
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    /* ============================================
       SMOOTH SCROLL FOR NAV LINKS
       ============================================ */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /* ============================================
       REVEAL ANIMATION ON SCROLL
       ============================================ */
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach((el, index) => {
            const revealTop = el.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                // Add staggered delay
                setTimeout(() => {
                    el.classList.add('active');
                }, index * 100);
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
    
    /* ============================================
       CONTACT FORM HANDLING
       ============================================ */
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            
            // Show success message
            formMessage.textContent = `Thanks ${name}! Your message has been sent successfully.`;
            formMessage.style.color = '#22d3ee';
            formMessage.style.fontSize = '1.5rem';
            formMessage.style.textAlign = 'center';
            formMessage.style.marginTop = '1rem';
            
            // Reset form
            form.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
    
    /* ============================================
       SMOOTH SCROLL FOR BACK TO TOP
       ============================================ */
    const backToTop = document.querySelector('.back-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /* ============================================
       PARALLAX EFFECT FOR HERO IMAGE
       ============================================ */
    const homeImg = document.querySelector('.home-img');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (homeImg && scrollY < 500) {
            homeImg.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
    
    /* ============================================
       COUNTER ANIMATION FOR SKILLS (Optional)
       ============================================ */
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    /* ============================================
       PREVENT SCROLL ON MENU OPEN (Mobile)
       ============================================ */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    /* ============================================
       INITIAL ANIMATIONS
       ============================================ */
    // Add fade-in class to elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8-bezier(0.4, 0s cubic, 0.2, 1)';
    });
    
    // Trigger initial reveal for hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.home-content > *');
        heroElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 100);
    
    console.log('Portfolio loaded successfully! 🚀');
});
