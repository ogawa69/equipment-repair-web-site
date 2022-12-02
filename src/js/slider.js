import Swiper from "./swiper-bundle.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 767.98px)");
  const isTabletAndDesktop = window.matchMedia("(min-width: 768px)");

  const sliderBrand = new Swiper(".brands-slider__container", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".brands-slider__pagination",
      clickable: true,
    },
  });

  const sliderType = new Swiper(".type-slider__container", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".type-slider__pagination",
      clickable: true,
    },
  });

  const sliderPrice = new Swiper(".price-slider__container", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".price-slider__pagination",
      clickable: true,
    },
  });

  if (isMobile.matches) {
    sliderBrand;
    sliderType;
    sliderPrice;
  }

  if (isTabletAndDesktop.matches) {
    sliderBrand.destroy();
    sliderType.destroy();
    sliderPrice.destroy();
  }
});
