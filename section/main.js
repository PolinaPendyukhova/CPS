let showBrands = document.querySelector(".show-brands");

function widgetFullHeight() {
  let brandsList = document.querySelector(".widget");
  let brandListFull = document.querySelector(".widget--full");

  if (brandListFull) {
    brandsList.classList.remove("widget--full");
    showBrands.classList.remove("show-brands--hide");
    showBrands.innerHTML = "Показать все";
  } else {
    brandsList.classList.add("widget--full");
    showBrands.classList.add("show-brands--hide");
    showBrands.innerHTML = "Скрыть";
  }
}

showBrands.addEventListener("click", widgetFullHeight);

const sliders = [{ selector: ".main" }];

const mediaQuerySize = 768;

function SlidersInit(sliders) {
  sliders.forEach((slider) => {
    if (!slider.slider) {
      slider.slider = new Swiper(slider.selector, {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
      });
    }
  });
}

function SlidersDestroy(sliders) {
  sliders.forEach((slider) => {
    if (slider.slider) {
      slider.slider.destroy();
      slider.slider = null;
    }
  });
}

function manageSlidesShow() {
  window.innerWidth < mediaQuerySize
    ? SlidersInit(sliders)
    : SlidersDestroy(sliders);
}

window.addEventListener("resize", manageSlidesShow);
