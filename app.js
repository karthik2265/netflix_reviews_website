window.addEventListener('click', function(e) {
  const element = e.target
  
  if (element.classList.contains('far')) {
    const countElement = element.nextElementSibling
    console.log(countElement)
    countElement.textContent = parseInt(countElement.textContent) + 1
  }
})

