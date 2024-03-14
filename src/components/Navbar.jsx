import { links } from '../data';
import Link from './Link';
const Navbar = () => {
  return <nav className=' h-16'>
    < div className='px-8 flex flex-col py-2 max-w-7xl sm:flex-row sm:gap-x-16  sm:items-center md:px-16 lg:px-32 lg:flex lg:justify-between sm:py-8' >
      <h1 className='text-white font-bold hover:text-cyan-500' >mo.</h1>
      <div className='flex gap-x-4'>
        {
          links.map((item) => {
            return <Link {...item} key={item.id} />
          })
        }
      </div>
    </div >

  </nav >
}
export default Navbar;