import { BsCartPlusFill } from "react-icons/bs";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const Card = ({ productId, photo, name, price, stock, handler }: ProductProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs transition-transform p-5 hover:scale-105 duration-300 bg-gradient-to-t from-gray-50 to-sky-100">
      <div className="relative">
        <img
          className="w-full h-[70%] object-cover rounded-lg"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/printer/i/8/e/g3770-canon-original-imagnqhbrtrjmvak.jpeg?q=70"
          alt={name}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-48">
        <h3 className="text-lg sm:text-xl mb-3 text-center font-semibold text-gray-800">{name}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-green-700">₹{price}</span>
            <button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300"
              onClick={handler}
            >
              Buy Now <BsCartPlusFill className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-right font-medium text-gray-600">Stock: {stock}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
