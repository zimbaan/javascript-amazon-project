export const cart=[
  {
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
  },
  {
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
  }
];

function AddToCart(productId){
  let selectquantity; 

    
  document.querySelectorAll(`.js-quantity-selector-${productId}`).forEach((select) => {
    selectquantity = parseInt(select.value);
  })

  let matchingItem;
  cart.forEach((item) => {
    if(productId === item.productId){
    matchingItem = item;
    }
  
  });

  if(matchingItem){
    matchingItem.quantity+=selectquantity;
  }else{
    cart.push({
      productId: productId,
      quantity: selectquantity,
    });
  }
}