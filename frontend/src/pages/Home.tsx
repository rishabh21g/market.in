import {Link} from 'react-router-dom'
import Card from './Card'

const Home = () => {
  return (
    <div className='flex flex-col p-6 mx-auto items-center justify-center gap-5'>
      <section className='w-full'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/6513a7c588e48152.jpg?q=20" alt="banner" className='w-full object-cover h-auto rounded-xl' />
      </section>
      <main className='w-full flex flex-col'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-thin text-gray-500'>Latest Product</h1>
          <p className='font-thin from-neutral-800 underline hover:text-red-600'><Link to={"/search"}>More</Link></p>
        </div>
        <div className='flex flex-wrap gap-2 p-2 items-center justify-center my-5'>
          <Card productId ={"nfjdbc"} name={"Printer"} photo={""} price={89} stock={26} handler={()=>{}} />



        </div>
      </main>
    </div>
  )
}

export default Home