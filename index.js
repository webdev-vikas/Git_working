function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}

// Change modal image dynamically
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.src;
    });
});