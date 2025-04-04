// // Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the sign-in button and dropdown container
  const signInBtn = document.getElementById('signInBtn');
  const dropdown = document.getElementById('signInDropdown');
  
  // Toggle dropdown visibility when the sign-in button is clicked
  signInBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent any default action
    dropdown.classList.toggle('show'); // Toggle visibility of dropdown
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target) && e.target !== signInBtn) {
      dropdown.classList.remove('show'); // Hide dropdown if clicking outside
    }
  });
});
