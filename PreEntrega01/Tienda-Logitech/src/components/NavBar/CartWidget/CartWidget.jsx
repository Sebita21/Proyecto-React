import cart from './assets/cart4.svg';

const CartWidget = () => {
  return (
    <div>
      <div class="d-flex justify-content-around mr-5">
        <div class="mx-1 ">
          <img src={cart} alt="cart-widget" class="imagen" />
        </div>
        <span class="text-light mx-2 mt-1">0</span>
      </div>
    </div>
  );
};

export default CartWidget;
