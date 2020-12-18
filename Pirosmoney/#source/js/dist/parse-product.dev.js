"use strict";

var updateCart = function updateCart() {
  Cookies.setStorage('cart', storageData);
  productsInCart = [];
  parseStorageDataWithProduct();
  updatePill();
  updateTotalAmount();
};

var parseStorageDataWithProduct = function parseStorageDataWithProduct() {
  $.each(storageData, function (i, el) {
    var id = el.id;
    var itemsNumber = el.itemsNumber;
    $.each(productList, function (i, el) {
      if (id == el.id) {
        el.itemsNumber = itemsNumber;
        productsInCart.push(el);
      }
    });
  });
};

var updatePill = function updatePill() {
  var itemsInCart = 0;
  $.each(productsInCart, function (i, el) {
    itemsInCart += el.itemsNumber;
  });
  $('.badge-pill').html(itemsInCart);
};

var updateTotalAmount = function updateTotalAmount() {
  var total = 0;
  var shippingCost = 0;
  var summary = (total + shippingCost).toFixed(2);
  $.each(productsInCart, function (i, el) {
    total += el.itemsNumber * el.price;
  });
  $('#total-price').html("$".concat(total.toFixed(2)));
  $('#shipping-price').html(shippingCost === 0 ? 'Free' : "$".concat(shippingCost));
  $('#summary').html("$".concat(summary));
};