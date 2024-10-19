
    const navbar = document.getElementById('navbar');
    let timeout;

    // Show navbar when mouse moves
    document.addEventListener('mousemove', () => {
        navbar.style.opacity = '1'; // Show the navbar
        navbar.style.transition = 'opacity 0.3s'; // Smooth transition
        clearTimeout(timeout);

        // Hide navbar after 2 seconds
        timeout = setTimeout(() => {
            navbar.style.opacity = '0'; // Hide the navbar
        }, 2000);
    });

    // Hide navbar initially
    navbar.style.opacity = '0';

    // Navbar toggle for mobile
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });


    let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let slideTimer;
    
    // Initial function to start the slideshow
    showSlides();
    
    function showSlides() {
      // Hide all slides and remove active classes
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
      }
    
      // Increment slideIndex and loop back if it exceeds the number of slides
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
    
      // Show the current slide and activate the corresponding dot
      slides[slideIndex - 1].classList.add("active");
      dots[slideIndex - 1].classList.add("active");
    
      // Automatically change slides every 2 seconds
      slideTimer = setTimeout(showSlides, 2000);
    }
    
    // Function to go to a specific slide based on dot click
    function currentSlide(n) {
      clearTimeout(slideTimer);  // Stop automatic slideshow temporarily
      slideIndex = n + 1;        // Set slideIndex to the selected slide (adjusting for 0-based index)
      showSlides();               // Show the selected slide
    }
    
    // Pause slideshow on hover
    let projectCards = document.getElementsByClassName("project-card");
    
    for (let i = 0; i < projectCards.length; i++) {
      projectCards[i].addEventListener("mouseenter", function() {
        clearTimeout(slideTimer);  // Stop the automatic slideshow when hovering
      });
      
      projectCards[i].addEventListener("mouseleave", function() {
        slideTimer = setTimeout(showSlides, 2000);  // Resume slideshow when hover ends
      });
    }
    
    // Add click event listeners to dots for manual navigation
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", function() {
        currentSlide(i);  // When a dot is clicked, navigate to the corresponding slide
      });
    }
    



    document.addEventListener('scroll', function() {
        const glow = document.querySelector('body::before');
        const scrollPosition = window.scrollY; // Get the scroll position
        const windowHeight = window.innerHeight; // Get the height of the viewport

        // Change the position of the glow based on scroll position
        glow.style.top = `${50 + (scrollPosition / windowHeight) * 50}%`; // Adjust vertical position
        glow.style.left = `50%`; // Keep it centered horizontally
    });