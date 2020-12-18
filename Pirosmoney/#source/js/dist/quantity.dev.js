"use strict";

var increaseProductQuantity = function increaseProductQuantity(product) {
  var productId = $(product).parents('.product').get(0).id;
  var price = $.grep(productsInCart, function (el) {
    return el.id == productId;
  })[0].price;
  $.each(storageData, function (i, el) {
    if (el.id == productId) {
      el.itemsNumber += 1;
      $(product).siblings('.quantity').val(el.itemsNumber);
      $("#".concat(productId)).find('.price').html("$".concat((price * el.itemsNumber).toFixed(2)));
      $("#".concat(productId, "-dropdown")).find('.price').html("$".concat((price * el.itemsNumber).toFixed(2)));
    }
  });
  updateCart();
};

var subtractProductQuantity = function subtractProductQuantity(product) {
  var productId = $(product).parents('.product').get(0).id;
  var price = $.grep(productsInCart, function (el) {
    return el.id == productId;
  })[0].price;
  var itemsInCart = $.grep(productsInCart, function (el) {
    return el.id == productId;
  })[0].itemsNumber;

  if (itemsInCart > 0) {
    storageData.map(function (el) {
      if (el.id == productId) {
        el.itemsNumber -= 1;
        $(product).siblings('.quantity').val(el.itemsNumber);
        $("#".concat(productId)).find('.price').html("$".concat((price * el.itemsNumber).toFixed(2)));
        $("#".concat(productId, "-dropdown")).find('.price').html("$".concat((price * el.itemsNumber).toFixed(2)));
      }
    });
    updateCart();
  }

  ;
};

var removeProduct = function removeProduct(product) {
  var productId = $(product).parents('.product').get(0).id;
  storageData = $.grep(storageData, function (el, i) {
    return el.id != productId;
  });
  updateCart();
  updateProductList();
};