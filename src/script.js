function adjustFontSize() {
    const textarea = document.getElementById('dynamic-textarea');
    let fontSize = (window.innerHeight / 1300) * 60;  // Initial font size based on page height
    textarea.style.fontSize = fontSize + 'em';

    // Function to check if content overflows
    function isOverflowing(element) {
        return element.scrollWidth > element.clientWidth;
    }

    // Reduce font size until content fits without overflow
    while (isOverflowing(textarea) && fontSize > 0) {
        fontSize -= 0.1;  // Adjust this value to change the rate of font size reduction
        textarea.style.fontSize = fontSize + 'em';
    }
}

// Initial adjustment on page load
window.addEventListener('load', adjustFontSize);