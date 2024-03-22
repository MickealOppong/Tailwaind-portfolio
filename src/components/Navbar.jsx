import { links } from '../data';
import Link from './Link';
const Navbar = () => {


  return <nav className=' h-16'>
    < div className='max-w-md mx-auto flex justify-around py-16' >
      <h1 className='text-primary font-bold'>mo</h1>
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