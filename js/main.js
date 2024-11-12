$(function () {
  // $('.footer__top-title').on('click', function () {
  //   $(this).next().slideToggle(),
  // });
  // Инициализация слайдера баннера
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  // Инициализация слайдера продуктов
  function initProductSlider() {
    $('.product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
      nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            arrows: false,
            dots: true, // оставляем точки
          }
        },
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            dots: true,
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
            dots: true,
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        },
      ],
    });
  };
  $('.footer__topdrop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });
  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });

  // Инициализация слайдера при загрузке страницы
  initProductSlider();

  // Перезапуск слайдера при изменении размера окна
  $(window).on('resize', function () {
    if ($(window).width() >= 1301) {
      if (!$('.product-slider').hasClass('slick-initialized')) {
        initProductSlider();
      }
    } else {
      if (!$('.product-slider').hasClass('slick-initialized')) {
        initProductSlider();
      }
    }
  });

  // Меню мобильной версии
  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  // Переключение вкладок
  $('.tab').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    $this.siblings().removeClass('tab--active');
    $this.closest('.tabs-wrapper').siblings().find('div').removeClass('tabs-content--active');
    $this.addClass('tab--active');
    $($this.attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');

  });

  // Добавление/удаление фаворита
  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  // Стилизация элементов формы
  $('.filter-style').styler();

  // Переключение фильтров
  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  // Инициализация диапазона цен
  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: "double",
    min: 100000,
    max: 500000,
  });

  // Переключение отображения каталога
  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  // Инициализация рейтинга
  $(".rate-yo").rateYo({
    ratedFill: "#1c62cd",
    spacing: "7px",
    normalFill: "#c4c4c4",
  });


});
