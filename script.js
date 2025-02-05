function toggleDarkMode() {
  document.body.classList.toggle('dark-mode')
  const themeSwitch = document.querySelector('.theme-switch')
  themeSwitch.classList.toggle('justify-end')

  // Save the current mode to local storage
  const isDarkMode = document.body.classList.contains('dark-mode')
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled')
}

// Check the saved mode on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode')
    const themeSwitch = document.querySelector('.theme-switch')
    themeSwitch.classList.add('justify-end')
  }
})
