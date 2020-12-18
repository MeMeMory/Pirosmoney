"use strict";

$('.add-to-cart').on('click', function (e) {
  addToCart(e.currentTarget);
});

var addToCart = function addToCart(product) {
  var productId = $(product).attr('productId');
  var isAlreadyInCart = $.grep(productsInCart, function (el) {
    return el.id == productId;
  }).length;

  if (isAlreadyInCart) {
    $.each(storageData, function (i, el) {
      if (productId == el.id) {
        el.itemsNumber += 1;
      }
    });
  } else {
    var newProduct = {
      id: Number(productId),
      itemsNumber: 1
    };
    storageData.push(newProduct);
  }

  updateCart();
  updateProductList();
};