import { FaGithub } from "react-icons/fa";
const Footer = () => {

  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return <footer className="flex  flex-col md:flex-row items-center justify-around py-4 h-36 bg-accent">

    <div className="grid grid-cols-2 gap-x-24 items-center ml-16 md:flex md:flex-row md:justify-between">
      <div className="flex flex-col">
        <p className="uppercase text-secondary font-bold">contact</p>
        <span>mikel.oppon@gmail.com</span>
        <span>(+48) 739-593-752</span>
      </div>
      <div className='flex gap-4 '>
        <a href="https://github.com/mickealoppong" referrerPolicy="no-referrer" target="_blank"><FaGithub className='text-neutral h-6 w-6 ' /></a>
      </div>
    </div>
    <div className="flex mt-2">
      <p className="text-neutral capitalize tracking-wider font-medium mt-2 ">&#169; <span>{getCurrentYear()}</span> mike oppong.</p>
    </div>

  </footer>
}
export default Footer;