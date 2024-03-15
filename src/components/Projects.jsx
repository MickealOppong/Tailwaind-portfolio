import { projectData } from '../data';
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return <section id="projects">
    <SectionTitle text="Web creations" />
    <div className='max-w-6xl mx-auto px-8 grid gap-2 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4'>
      {
        projectData.map((item) => {
          const { id, img, url, github, text } = item;
          return <article className='grid gap-8 border-2 rounded-md shadow-md w-90 '>
            <a href={url} referrerPolicy='non_referer' target='_blank'><img src={img} className='' /></a>

          </article>
        })
      }
    </div>
    <div className='flex justify-right px-32 my-8'>
      <button className="bg-sky-600 text-white rounded-md px-2 py-2 w-36 tracking-wider"><a href="https://vite-cms.netlify.app/" referrerPolicy="no_referer" target="_blank">More projects</a></button>
    </div>
  </section>
}
export default Projects;