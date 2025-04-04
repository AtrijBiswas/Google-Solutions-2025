document.addEventListener('DOMContentLoaded', function() {
  const signInBtn = document.getElementById('signInBtn');
  const dropdown = document.getElementById('signInDropdown');
  signInBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    dropdown.classList.toggle('show'); 
  });
  window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target) && e.target !== signInBtn) {
      dropdown.classList.remove('show'); 
    }
  });
});
