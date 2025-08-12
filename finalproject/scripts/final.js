// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const contactBtn = document.querySelector('.contact-btn');
    
    // Mobile navigation toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('contact-modal');
    const contactButtons = document.querySelectorAll('.contact-btn, a[href="#contact"]');
    const closeModal = document.querySelector('.close-modal');
    
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#contact') {
                e.preventDefault();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Testimonial carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Fetch services data (simulating API call)
    async function fetchServices() {
        try {
            // Simulated data for demonstration
            const data = [
                {
                    id: 1,
                    title: "Web Design",
                    description: "Beautiful, responsive designs tailored to your brand and audience.",
                    image: "https://placehold.co/600x400/4a6fa5/ffffff?text=Web+Design"
                },
                {
                    id: 2,
                    title: "Web Development",
                    description: "Custom-built websites with clean, efficient code and modern technologies.",
                    image: "https://placehold.co/600x400/166088/ffffff?text=Web+Dev"
                },
                {
                    id: 3,
                    title: "E-Commerce",
                    description: "Complete online store solutions to sell your products worldwide.",
                    image: "https://placehold.co/600x400/4fc3a1/ffffff?text=E-Commerce"
                },
                {
                    id: 4,
                    title: "SEO Optimization",
                    description: "Improve your search rankings and drive more organic traffic.",
                    image: "https://placehold.co/600x400/343a40/ffffff?text=SEO"
                },
                {
                    id: 5,
                    title: "Content Management",
                    description: "Easy-to-use systems to manage your website content.",
                    image: "https://placehold.co/600x400/4a6fa5/ffffff?text=Content+Management"
                }
            ];

            const servicesContainer = document.getElementById('services-container');
            data.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('service-card');
                serviceCard.innerHTML = `
                    <div class="service-img" style="background-image: url('${service.image}');"></div>
                    <div class="service-content">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                `;
                servicesContainer.appendChild(serviceCard);
            });
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    }

    fetchServices();
});
