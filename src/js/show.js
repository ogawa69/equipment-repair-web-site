document.addEventListener('DOMContentLoaded', () => {
  const aboutMore = document.querySelector('.about__more')
  const aboutImg = aboutMore.querySelector('.about__expander-ico')
  const aboutHiddenText = document.querySelector('.about__info-text--more')
  const brandCards = document.querySelectorAll('.brands-slider__slide')
  const typeCards = document.querySelectorAll('.type-slider__slide')
  const brandBtn = document.querySelector('.services-brands__show')
  const brandBtnImg = brandBtn.querySelector('.services-brands__expand-ico-up')
  const brandBtnTxt = brandBtn.querySelector('.services-brands__button-text')
  const typeBtn = document.querySelector('.services-type__show')
  const typeBtnImg = typeBtn.querySelector('.services-type__expand-ico-up')
  const typeBtnTxt = typeBtn.querySelector('.services-type__button-text')
  const burger = document.querySelector('.burger')
  const burgerBtns = burger.querySelectorAll('button')
  const burgerBtnInHeader = document.querySelector('.page-header__burger')
  const burgerBtn = burger.querySelector('.burger__burger-button')
  const burgerOverlay = burger.querySelector('.burger__overlay')
  const burgerExit = burger.querySelector('.burger__burger-button')
  const requestCall = document.querySelector('.request-call')
  const callBtn = burger.querySelector('.burger__call')
  const callBtnInHeader = document.querySelector('.page-header__call')
  const callOverlay = requestCall.querySelector('.request-call__overlay')
  const callExit = requestCall.querySelector('.request-call__exit')
  const feedback = document.querySelector('.feedback')
  const feedbackBtn = burger.querySelector('.burger__chat')
  const feedbackBtnInHeader = document.querySelector('.page-header__chat')
  const feedbackOverlay = feedback.querySelector('.feedback__overlay')
  const feedbackExit = feedback.querySelector('.feedback__exit')
  const pageMain = document.querySelector('.page-main')

  const INTERECTIVE_SELECTORS = [
    'a',
    'button',
    'input',
    'textarea',
    '[tabindex]'
  ]

  const isSmallScreen = window.matchMedia('(max-width: 1340px)')
  const isTablet = window.matchMedia(
    '(min-width: 768px) and (max-width: 1119.98px)'
  )
  const isDesktop = window.matchMedia('(min-width: 1340px)')

  class modalWindow {
    constructor(doc, modal) {
      this.doc = doc
      this.modal = modal
      this.interactiveElementsList = []
      this.blockElementsList = []
    }

    create() {
      let elements = this.doc.querySelectorAll(INTERECTIVE_SELECTORS.toString())
      let element
      for (let i = 0; i < elements.length; i++) {
        element = elements[i]
        if (!this.modal.contains(element)) {
          if (element.getAttribute('tabindex') !== '-1') {
            element.setAttribute('tabindex', '-1')
            this.interactiveElementsList.push(element)
          }
        }
      }

      let children = this.doc.body.children
      for (let i = 0; i < children.length; i++) {
        element = children[i]
        if (!this.modal.contains(element)) {
          if (element.getAttribute('aria-hidden') !== 'true') {
            element.setAttribute('aria-hidden', 'true')
            this.blockElementsList.push(element)
          }
        }
      }
    }

    remove() {
      let element
      while (this.interactiveElementsList.length !== 0) {
        element = this.interactiveElementsList.pop()
        element.setAttribute('tabindex', '0')
      }
    }
  }

  const getEveryNth = (arr, nth) => {
    const result = []

    for (let i = 3; i < arr.length; i += nth) {
      result.push(arr[i])
    }

    return result
  }

  const hideItems = (arr, value) => {
    value = value - 1

    for (let i = arr.length - 1; i > value; i = i - 1) {
      arr[i].classList.add('hidden')
    }
  }

  const showItems = (arr) => {
    arr.forEach((x) => x.classList.remove('hidden'))
  }

  const hideEveryNth = (cards, value) => {
    const everyCard = getEveryNth(cards, value)

    everyCard.forEach((x) => x.classList.add('hidden'))
  }

  const showMoreCards = (
    cards,
    btn,
    btnTxt,
    btnImg,
    itemsOnList,
    itemsOnTablet
  ) => {
    if (btn.textContent === 'Показать все') {
      showItems(cards)
      btnTxt.textContent = 'Скрыть'
      btnImg.classList.toggle('expand-ico-down')
    } else {
      hideItems(cards, itemsOnList)
      btnTxt.textContent = 'Показать все'
      btnImg.classList.toggle('expand-ico-down')
    }

    if (isTablet.matches) {
      hideEveryNth(cards, itemsOnTablet)
    }
  }

  const feedbackModal = new modalWindow(document, feedback)
  const requestCallModal = new modalWindow(document, requestCall)
  const burgerModal = new modalWindow(document, burger)

  if (isSmallScreen.matches) {
    burgerBtns.forEach((element) => {
      element.addEventListener('click', () => {
        burger.classList.remove('active')
        burgerModal.remove()
      })
    })

    pageMain.addEventListener('click', () => {
      burger.classList.remove('active')
      burgerModal.remove()
    })
  }

  if (isTablet.matches) {
    hideEveryNth(brandCards, 4)
    hideItems(brandCards, 8)
    hideItems(typeCards, 3)
  }

  if (isDesktop.matches) {
    hideItems(brandCards, 8)
    hideItems(typeCards, 4)
  }

  burgerBtnInHeader.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerModal.create()
  })

  burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerModal.create()
  })

  burgerOverlay.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerModal.remove()
  })

  burgerExit.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerModal.remove()
  })

  feedbackBtnInHeader.addEventListener('click', () => {
    feedback.classList.toggle('active')
    feedbackModal.create()
  })

  feedbackBtn.addEventListener('click', () => {
    feedback.classList.toggle('active')
    feedbackModal.create()
  })

  feedbackOverlay.addEventListener('click', () => {
    feedback.classList.toggle('active')
    feedbackModal.remove()
  })

  feedbackExit.addEventListener('click', () => {
    feedback.classList.toggle('active')
    feedbackModal.remove()
  })

  callBtnInHeader.addEventListener('click', () => {
    requestCall.classList.toggle('active')
    requestCallModal.create()
  })

  callBtn.addEventListener('click', () => {
    requestCall.classList.toggle('active')
    requestCallModal.create()
  })

  callOverlay.addEventListener('click', () => {
    requestCall.classList.toggle('active')
    requestCallModal.remove()
  })

  callExit.addEventListener('click', () => {
    requestCall.classList.toggle('active')
    requestCallModal.remove()
  })

  aboutMore.addEventListener('click', () => {
    if (aboutMore.textContent === 'Читать далее') {
      aboutHiddenText.classList.remove('hidden')
      aboutMore.textContent = 'Скрыть'
      aboutImg.classList.toggle('expand-ico-down')
    } else {
      aboutHiddenText.classList.add('hidden')
      aboutMore.textContent = 'Читать далее'
      aboutImg.classList.toggle('expand-ico-down')
    }
  })

  brandBtn.addEventListener('click', () => {
    showMoreCards(brandCards, brandBtn, brandBtnTxt, brandBtnImg, 8, 4)
  })

  typeBtn.addEventListener('click', () => {
    showMoreCards(typeCards, typeBtn, typeBtnTxt, typeBtnImg, 4, 3)
  })
})
