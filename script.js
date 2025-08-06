/**
 * SkillCraft Technology Landing Page JavaScript
 * This file contains all interactive functionality for the landing page
 */

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    /**
     * Navbar scroll effect
     * Changes navbar background and adds shadow when scrolling down
     */
    function handleScroll() {
        // Add 'scrolled' class to navbar when page is scrolled down more than 50px
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call handleScroll on page load to set initial state
    handleScroll();
    
    /**
     * Mobile menu toggle functionality
     * Shows/hides the mobile menu when hamburger icon is clicked
     * with enhanced animation effects
     */
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
        
        // Add animation to menu items when opening
        if (mobileMenu.classList.contains('show')) {
            const menuItems = document.querySelectorAll('.mobile-menu-item');
            menuItems.forEach((item, index) => {
                // Stagger the animation of each menu item
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 * index); // Stagger effect
            });
        }
    }
    
    // Add click event listener to mobile menu button
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
    /**
     * Smooth scrolling to sections when clicking on navigation links
     */
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If target section exists, scroll to it smoothly
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if it's open
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    /**
     * Add animation to elements when they come into view
     */
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    }
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Call animateOnScroll on page load
    animateOnScroll();
});