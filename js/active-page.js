// Select all nav items
const navItems = document.querySelectorAll('.nav-item');

// Function to remove 'active' class from all items and add it to the clicked item
navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' from all items
    navItems.forEach(nav => nav.classList.remove('active'));
    
    // Add 'active' to the clicked item
    this.classList.add('active');
  });
});
