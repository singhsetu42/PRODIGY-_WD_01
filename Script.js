function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
}

// Function to handle hover effect on menu items
function handleHover(event) {
    event.target.style.color = '#f0a500';
}

function handleMouseOut(event) {
    event.target.style.color = 'white';
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Attach hover event listeners to menu items
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('mouseover', handleHover);
    item.addEventListener('mouseout', handleMouseOut);
});
