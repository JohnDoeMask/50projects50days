const panels = document.querySelectorAll('.panel')
/*
  Add 'active' to clicked item
*/
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove 'active' class for all the items first
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
