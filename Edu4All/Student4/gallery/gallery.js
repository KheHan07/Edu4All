document.addEventListener('DOMContentLoaded', function() { /*runs only when the html doc is fully loaded*/
    // Handle thumbnail click to show extended view
    document.querySelectorAll('.thumbnail img').forEach(img => {
        img.addEventListener('click', function() { /*when an image is clicked it makes the extended view visible and retrieves information from the relevant classes*/
            const overlay = document.getElementById('overlay');
            const extendedImage = document.getElementById('extendedImage');
            const extendedTitle = document.getElementById('extendedTitle');
            const extendedDescription = document.getElementById('extendedDescription');
            
            const thumbnail = img.closest('.thumbnail');
            
            extendedImage.src = img.src;
            extendedTitle.textContent = thumbnail.dataset.title;
            extendedDescription.textContent = thumbnail.dataset.description;
            
            overlay.style.display = 'flex';
        });
    });

    /*Handle close button click to hide extended view*/
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
    });

    /*Handle color picker change to customize page color*/
    document.getElementById('colorPicker').addEventListener('input', function() {
        document.body.style.backgroundColor = this.value;
    });

    /*Handle font picker change to customize font style*/
    document.getElementById('fontPicker').addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
    });
});
