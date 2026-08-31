// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Call button functionality
document.querySelectorAll('.call-button, .btn-call').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'tel:+918839932268';
    });
});

// WhatsApp button functionality
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', function() {
        window.open('https://wa.me/918839932268', '_blank');
    });
});

// Enquiry form submission
const enquiryForm = document.querySelector('.enquiry-form form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create mailto link
        const subject = encodeURIComponent('MAHAONLINE Enquiry from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
        
        window.location.href = `mailto:contact@mahaonline.com?subject=${subject}&body=${body}`;
        
        // Reset form
        this.reset();
    });
}

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature, .doc-item').forEach(element => {
    observer.observe(element);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);