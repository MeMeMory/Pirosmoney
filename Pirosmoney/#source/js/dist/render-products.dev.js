"use strict";

var buildProductList = function buildProductList() {
  $.each(productsInCart, function (i, el) {
    var product = renderProducts(el);
    $('#product-list').append(product);
  });
};

var buildDropdownCart = function buildDropdownCart() {
  $.each(productsInCart, function (i, el) {
    var product = renderDropdownProducts(el);
    $('#dropdown-cart').append(product);
  });
};

var bindProductEvents = function bindProductEvents() {
  $('button.increase').on('click', function (e) {
    increaseProductQuantity(e.currentTarget);
  });
  $('button.decrease').on('click', function (e) {
    subtractProductQuantity(e.currentTarget);
  });
  $('a.remove-product').on('click', function (e) {
    removeProduct(e.currentTarget);
  });
};