const openDialogButton = document.querySelector('.openModal')
const popupContainer = document.querySelector('.dialogOverlay-container')
const crossButton = document.querySelector('.crossBtn')
const cancelButton = document.querySelector('.cancelBtn')
openDialogButton.addEventListener('click', () => {
  popupContainer.classList.add('show')
})

crossButton.addEventListener('click', () => {
  popupContainer.classList.remove('show')
})
cancelButton.addEventListener('click', () => {
  popupContainer.classList.remove('show')
})
