import { FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {

  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return <footer className="bg-gray-700 flex  flex-col justify-center items-center py-4 h-36">
    <div className='flex gap-4 '>
      <a href="https://github.com" referrerPolicy="no-referrer" target="_blank"><FaGithub className='text-white h-6 w-6 ' /></a>
      {
        /*
         <a href=""><FaLinkedin className='text-white h-4 w-4 hover:text-black duration-300' /></a>
        */
      }
      <a href="https://www.facebook.com/profile.php?id=100087249967744" referrerPolicy="no-referrer" target="_blank"><FaFacebook className='text-white h-6 w-6 ' /></a>
    </div>
    <div className="flex mt-2">
      <p className="text-white capitalize tracking-wider font-semibold">&#169; <span>{getCurrentYear()}</span> mike oppong. all rights reserved </p>
    </div>
  </footer>
}
export default Footer;