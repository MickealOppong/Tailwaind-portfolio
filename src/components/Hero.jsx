import img from '../assets/img-bg.jpeg';
const Hero = () => {
  return <section className='px-16 md:px-0 flex justify-center font-roboto-medium'>
    <div className="mx-auto max-w-7xl py-36 px-8 grid grid-col-2 items-start gap-8 mt-16 md:items-center md:gap-y-16 md:px-16 md:flex flex-col ">
      <article className='grid grid-cols-2 -rotate-3 -mt-10'>
        <div className="hidden md:flex md:w-80">
          <img src={img} />
        </div>
        <div className="flex flex-col -md:ml-20">
          <h2 className="italic text-5xl font-semibold text-primary font-shadow w-96 h-60 tracking-wide ">
            I'm Michael Oppong,
            Web Developer<br />
            from Łódź, Poland.
          </h2>
        </div>
      </article>
      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary h-16 capitalize cursor-pointer"><a href="#projects" >see projects</a></button>
        <button className="btn btn-primary h-16 capitalize cursor-pointer"><a href="#about" >know more</a></button>
      </div>
    </div>

  </section >
}
export default Hero;