document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-slider__link')

  links.forEach((x) => {
    x.addEventListener('click', () => {
      let active = document.querySelector('.nav-slider__link--active')

      if (x !== active) {
        x.classList.add('nav-slider__link--active')
        active.classList.remove('nav-slider__link--active')
      }
    })
  })
})
