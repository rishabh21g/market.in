import { useEffect, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import CartItems from "../components/CartItems";

const cartItems = [
  {
    pdoductid:String
  }
];
const subTotal: number = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharge = 200;
const discount = -40;
const total = subTotal + tax + shippingCharge;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }, 500);
    return () => {
      clearTimeout(timeoutID);
      setIsValid(false);
    };
  }, [coupon]);
  return (
    <div className="w-full flex p-12 mx-auto gap-5 h-dvh my-4">
      <main className="flex flex-col w-3/4 bg-green-50 h-full py-4">
      {
        cartItems.map((item , idx)=><CartItems key={idx}/>)
      }
      </main>
      <aside className="flex flex-col w-1/4 h-full py-4 items-start justify-center">
        <p>Sub total : {subTotal}</p>
        <p>Tax : {tax}</p>
        <p>Shipping charges : {shippingCharge}</p>
        <p>Discount : {discount}</p>
        <p>
          <b>Total : {total + discount}</b>
        </p>
        <span className="text-2xl mt-6 ">Coupon!</span>

        <input
          className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-md appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm my-4"
          placeholder="Apply your Coupon code "
          type="text"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value.toUpperCase());
            setIsValid(true);
          }}
        />
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full"
        >
          Check Out
        </button>
        {coupon && isValid ? (
          <span className="text-xl font-semibold text-green-500 my-2 text-center">
            {discount} &#8377; off using using the coupon code {coupon}{" "}
          </span>
        ) : (
          <span className="text-xl text-red-600 font-bold my-2 text-center flex items-center justify-center ">
            {" "}
            Invalid code <BiSolidError className="size-6" />
          </span>
        )}
      </aside>
    </div>
  );
};

export default Cart;
