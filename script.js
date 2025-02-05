function toggleDarkMode() {
  document.body.classList.toggle('dark-mode')
}

// You can call this function on a button click or any other event
document
  .getElementById('darkModeToggle')
  .addEventListener('click', toggleDarkMode)
