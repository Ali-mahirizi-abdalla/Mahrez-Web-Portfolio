/**
 * File: main.js
 * Purpose: Handle boot sequence, animations and console security messages
 */

document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    logSecurityMessages();
});

/**
 * Simulates a system boot sequence with delayed lines
 */
function initBootSequence() {
    const bootLines = document.querySelectorAll('.boot-line');
    const bootScreen = document.getElementById('bootScreen');
    const mainContent = document.getElementById('mainContent');

    bootLines.forEach((line, index) => {
        const delay = parseInt(line.getAttribute('data-delay')) || index * 500;
        setTimeout(() => {
            line.classList.add('active');
            
            // If it's the last line, transition to main content
            if (index === bootLines.length - 1) {
                setTimeout(() => {
                    bootScreen.style.transition = 'opacity 0.8s ease-out';
                    bootScreen.style.opacity = '0';
                    
                    setTimeout(() => {
                        bootScreen.style.display = 'none';
                        mainContent.style.transition = 'opacity 1s ease-in';
                        mainContent.style.opacity = '1';
                        // Trigger skill bar animations
                        animateSkillBars();
                    }, 800);
                }, 1500);
            }
        }, delay);
    });
}

/**
 * Animate skill bars when they come into view
 */
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

/**
 * Fun security logs for curious developers
 */
function logSecurityMessages() {
    console.log("%c🔐 Alimahirizi Abdalla — Full-Stack + Ethical Hacker", "color: #00ff41; font-size: 16px; font-weight: bold;");
    console.log("%cIf you're inspecting for vulnerabilities, nice. Email me for a responsible discussion.", "color: #888; font-style: italic;");
    console.log("%cThis portfolio has no tracking scripts. Privacy is a feature.", "color: #00ff41; border: 1px solid #00ff41; padding: 2px 5px;");
}

// Add smooth scroll for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
