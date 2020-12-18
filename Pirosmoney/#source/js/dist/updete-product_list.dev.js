"use strict";

var updateProductList = function updateProductList() {
  $('#product-list').empty();
  buildProductList();
  $('#dropdown-cart').empty();
  buildDropdownCart();
  bindProductEvents();
};