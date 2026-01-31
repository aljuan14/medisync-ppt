/**
 * Medisync Presentation - Main JavaScript
 * Using Reveal.js 5.x
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Reveal.js
    Reveal.initialize({
        hash: true,
        controls: true,
        progress: true,
        center: true,

        transition: 'slide',
        backgroundTransition: 'fade',
        transitionSpeed: 'default',

        autoAnimateEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        autoAnimateDuration: 0.8,

        width: 1280,
        height: 720,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,

        keyboard: true,
        overview: true,
        touch: true,
        fragments: true
    });

    // Initialize Lucide icons
    Reveal.on('ready', () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

    // Re-initialize icons on slide change
    Reveal.on('slidechanged', () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
});
