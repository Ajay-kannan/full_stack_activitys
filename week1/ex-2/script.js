const sizePrices = {
    small: 99,
    medium: 199,
    large: 399
  };
  
  const crustPrices = {
    'thin-crust': 0,
    'deep-pan': 20
  };
  
  const toppingPrices = {
    mushrooms: 15,
    olives: 10,
    fingernail: 30,
    'spicy-beef': 20
  };
  
  const homeDeliveryPrice = 25;
  
  let cartItems = [];
  
  const updateTotal = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      const sizePrice = sizePrices[item.size];
      const crustPrice = crustPrices[item.crust];
      const toppingPrice = item.toppings.reduce((acc, topping) => acc + toppingPrices[topping], 0);
      const deliveryPrice = item.homeDelivery ? homeDeliveryPrice : 0;
      return acc + sizePrice + crustPrice + toppingPrice + deliveryPrice;
    }, 0);
  
    document.getElementById('total-cost').textContent = `Total: ₹${totalPrice}`;
  };
  
  const addToCart = () => {
    const form = document.getElementById('order-form');
    const size = form.elements['size'].value;
    const crust = form.elements['crust'].value;
    const toppings = [];
    const toppingsInputs = form.elements['toppings'];
    for (let i = 0; i < toppingsInputs.length; i++) {
      if (toppingsInputs[i].checked) {
        toppings.push(toppingsInputs[i].value);
      }
    }
    const homeDelivery = form.elements['home-delivery'].checked;
  
    const item = { size, crust, toppings, homeDelivery };
    cartItems.push(item);
  
    const cartList = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    const itemDetails = `${size.toUpperCase()} ${crust.toUpperCase()} PIZZA`;
    cartItem.textContent = itemDetails;
    cartList.appendChild(cartItem);
  
    updateTotal();
  };
  
  const addButton = document.getElementById('add-to-cart-btn');
  addButton.addEventListener('click', addToCart);
  