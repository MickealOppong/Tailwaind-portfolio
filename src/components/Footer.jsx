import { FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {

  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return <footer className=" flex items-center justify-around py-4 h-24 bg-accent">
    <div className="flex flex-col">
      <p className="uppercase ">contact</p>
      <span>mikel.oppon@gmail.com</span>
      <span>(+48) 739-593-752</span>
    </div>
    <div className='flex gap-4 '>
      <a href="https://github.com" referrerPolicy="no-referrer" target="_blank"><FaGithub className='text-slate-500 h-6 w-6 ' /></a>
      <a href="https://www.facebook.com/profile.php?id=100087249967744" referrerPolicy="no-referrer" target="_blank"><FaFacebook className='text-slate-500 h-6 w-6 ' /></a>
    </div>
    <div className="flex mt-2">
      <p className="text-slate-500 capitalize tracking-wider font-medium mt-2 ">&#169; <span>{getCurrentYear()}</span> mike oppong.</p>
    </div>

  </footer>
}
export default Footer;