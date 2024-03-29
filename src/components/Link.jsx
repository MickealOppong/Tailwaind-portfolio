const Link = ({ id, href, text }) => {


  return <div className="active:opacity-100">
    <a key={id} href={href} className='capitalize text-primary font-bold tracking-wider  ' target="_blank">{text}</a>
  </div>
}

export default Link;