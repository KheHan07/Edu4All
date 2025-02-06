document.addEventListener("DOMContentLoaded", function() {
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        node.addEventListener('mouseenter', function() { /*when the mouse hovers this colour is depicted*/
            this.style.fill = '#d2e12c';
        });
        node.addEventListener('mouseleave', function() { /*and reverts back to this once it leaves*/
            this.style.fill = '#4CAF50';
        });
        node.addEventListener('click', function() { /*redirects to the relevant url*/
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });

    nodes.forEach(node => {
        node.addEventListener('focus', function() {
            this.style.fill = '#d2e12c';
        });
        node.addEventListener('blur', function() {
            this.style.fill = '#4CAF50';
        });
    });

    nodes.forEach(node => {
        node.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const url = this.getAttribute('data-url');
                window.location.href = url;
            }
        });
    });
});
