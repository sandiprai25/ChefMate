$(document).ready(function() {
    // Testimonial Slider
    let currentSlide = 0;
    const totalSlides = $('.testimonial').length;
    
    $('.slider-dot').click(function() {
        const index = $(this).data('index');
        showSlide(index);
    });
    
    function showSlide(index) {
        $('.testimonial').removeClass('active');
        $('.testimonial').eq(index).addClass('active');
        
        $('.slider-dot').removeClass('active');
        $('.slider-dot').eq(index).addClass('active');
        
        currentSlide = index;
    }
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        let target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });
});
