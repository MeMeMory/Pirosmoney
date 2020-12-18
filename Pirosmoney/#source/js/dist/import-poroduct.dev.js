"use strict";

$(document).ready(function () {
  var storageData = [];
  $.get("product.json", function (res) {
    productList = res;
    var isStorageEmpty = Cookies.getStorage('cart').length === 0;

    if (!isStorageEmpty) {
      storageData = Cookies.getStorage('cart');
    }

    updateCart();
    buildProductList();
    buildDropdownCart();
    bindProductEvents();
  });
});