import { BsCartPlus } from "react-icons/bs";

function Cart({ count }) {
  return (
    <div>
      <BsCartPlus /> Cart: {count}
    </div>
  );
}

export default Cart;
