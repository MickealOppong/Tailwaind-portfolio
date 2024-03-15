const Link = ({ id, href, text }) => {
  return <div className="active:opacity-100">
    <a key={id} href={href} className='capitalize text-gray-700 font-bold tracking-wider hover:text-sky-600 duration-300 '>{text}</a>
  </div>
}

export default Link;