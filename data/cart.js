export const cart=[];

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