
import hero from '../assets/un.svg';
const Hero = () => {
  return <section className="mx-auto max-w-xl h-screen mt-20">
    <div className="flex flex-col px-8 md:grid grid-cols-2 ">
      <img src={hero} alt="" className='hidden md:flex md:w-56 md:h-56' />
      <div className='flex flex-col w-96'>
        <h4 className="uppercase font-bold mb-4">A bit about me</h4>
        <p className="tracking-wider leading-6">
          I am a graduate of MA Finance from University of Econommics in Katowice, i hold a Bachelor of laws degree. I am married and a father who enjoys creating web applications. I love what i do and i do what i love.
        </p>
        <p className="tracking-wider leading-6 mt-4"> My journey to software development was influence by my previous work experience in a software company helping to design and implement user requirements for Enterprice applications.</p>
      </div>
    </div>
  </section >
}
export default Hero;