const Loader = () => {
  return (
   <div className=" flex justify-center items-center w-full h-screen mx-auto my-auto">
     <div
      className="loader border-t-2 rounded-full border-green-500 bg-green-300 animate-spin
       aspect-square w-8 flex justify-center items-center text-teal-700 mask-b-from-20% mask-b-to-80% "
    ></div>
   </div>
  );
};

export default Loader;
