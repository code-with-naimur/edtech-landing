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

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header')
  accordionHeaders.forEach(header => {
    const content = header.nextElementSibling
    const icon = header.querySelector('.accordion-icon')

    header.addEventListener('click', event => {
      event.stopPropagation() // Prevent event from bubbling up to parent accordions

      const isOpen = content.classList.contains('open')
      const allContents =
        header.parentElement.parentElement.querySelectorAll(
          '.accordion-content'
        )
      const allIcons =
        header.parentElement.parentElement.querySelectorAll('.accordion-icon')

      // Close all sibling accordions
      allContents.forEach(c => {
        if (c !== content) {
          c.classList.remove('open')
        }
      })

      allIcons.forEach(i => {
        if (i !== icon) {
          i.classList.remove('rotate')
        }
      })

      // Toggle the clicked accordion
      if (isOpen) {
        content.classList.remove('open')
        icon.classList.remove('rotate')
      } else {
        content.classList.add('open')
        icon.classList.add('rotate')
      }
    })
  })
})
