document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Function to close all dropdowns
    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown').forEach((menu) => {
        menu.classList.remove('open');
      });
    }
  
    // Add click event listeners to dropdown toggles
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
  
        const dropdown = toggle.nextElementSibling;
  
        // If the dropdown is already open, close it
        if (dropdown && dropdown.classList.contains('open')) {
          closeAllDropdowns(); // Close all dropdowns
        } else {
          // Close all other dropdowns
          closeAllDropdowns();
  
          // Open the clicked dropdown
          if (dropdown && dropdown.classList.contains('dropdown')) {
            dropdown.classList.add('open');
          }
        }
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      const isClickInsideDropdown = Array.from(dropdownToggles).some((toggle) => {
        const dropdown = toggle.nextElementSibling;
        return (
          toggle.contains(e.target) || (dropdown && dropdown.contains(e.target))
        );
      });
  
      if (!isClickInsideDropdown) {
        closeAllDropdowns();
      }
    });
  });
  