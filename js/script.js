$(document).ready(function () {
  $(".lot-preview__gallery-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".lot-preview__gallery-thumb",
  });
  $(".lot-preview__gallery-thumb").slick({
    variableWidth: true,
    useTransform: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".lot-preview__gallery-carousel",
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    swipe: false,
    draggable: false,
    accessibility: false,
  });
  $(".search-toggle").on("focus", function () {
    $(".modal-search__result").slideToggle();
  });
  $(".search-toggle").on("blur", function () {
    $(".modal-search__result").slideToggle();
  });
  $(".btn-filter").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
  $(".filter-toggle").on("click", function () {
    $(".modal-block__filter").slideToggle();
    $(".filter-clear").slideToggle();
    if ($(this).html() == "Свернуть") {
      $(this).html("Другие параметры");
    } else {
      $(this).html("Свернуть");
    }
  });
  $(".filter-clear").on("click", function () {
    $(".btn-filter").removeClass("active");
  });
  $(".search").on("click", function () {
    $(".modal").removeClass("hidden");
    $(".modal-fade").removeClass("hidden");
    $(".modal-search").removeClass("hidden");
    $(body).css("overflow", "hidden");
  });
  $(".call").on("click", function () {
    $(".modal").removeClass("hidden");
    $(".modal-fade").removeClass("hidden");
    $(".modal-call").removeClass("hidden");
    $(body).css("overflow", "hidden");
  });
  $(".modal-close").on("click", function () {
    $(".modal").addClass("hidden");
    $(".modal-fade").addClass("hidden");
    $(".modal-call").addClass("hidden");
    $(".modal-search").addClass("hidden");
    $(body).css("overflow", "auto");
  });
  $(".modal-input").blur(function () {
    let regTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    let regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
    if (
      $(this).val().search(regTel) == -1 &&
      $(this).val().search(regName) == -1
    ) {
      if ($(this).val().length != 0) {
        $(this).addClass("invalid");
        $(".modal-btn").removeClass("valid");
      }
    } else if (
      $(this).val().search(regTel) != -1 ||
      $(this).val().search(regName) != -1 ||
      $(this).val().length == 0
    ) {
      $(this).removeClass("invalid");
      $(".modal-btn").addClass("valid");
    }
  });
  let slider_amount = document.getElementById("slider-amount");
  let slider_squars = document.getElementById("slider-squars");
  noUiSlider.create(slider_amount, {
    start: [0, 100],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
  noUiSlider.create(slider_squars, {
    start: [0, 100],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
});
