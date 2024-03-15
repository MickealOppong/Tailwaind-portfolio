const Hero = () => {
  return <section className='flex justify-center font-roboto-medium'>
    <div className="mx-auto max-w-7xl py-36 px-8 grid grid-col-2 items-start gap-8 mt-16 md:items-center md:gap-y-16 md:px-16 md:flex flex-col">
      <article className='flex flex-col py-8 px-8 -rotate-3 '>
        <div className="flex">
          <h1 className="text-white text-3xl font-bold tracking-wider font-shadow">Hello!, <span className="text-xl ">i am</span></h1>
          <button className="bg-sky-500 text-white py-1 px-2 ml-2 capitalize rounded-xl font-shadow">web developer</button>

        </div>
        <p className="text-white text-2xl mt-4 tracking-wider font-shadow">Mike Oppong</p>
      </article>
      <div className="flex gap-4 mt-4">
        <button className="bg-sky-500 text-white h-16 w-36 rounded-md capitalize cursor-pointer"><a href="#projects" >see projects</a></button>
        <button className="bg-sky-500 text-white h-16 w-36 rounded-md capitalize cursor-pointer"><a href="#about" >know more</a></button>
      </div>
    </div>

  </section >
}
export default Hero;