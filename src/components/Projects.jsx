import { projectData } from '../data';
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return <section className='max-w-6xl mx-auto' id="projects">
    <SectionTitle text="Web creations" />
    <div className='max-w-6xl mx-auto px-8 grid gap-2 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4'>
      {
        projectData.map((item) => {
          const { id, img, url, github, text } = item;
          return <article className='grid gap-8'>
            <a href={url} referrerPolicy='non_referer' target='_blank' ><img src={img} className='rounded-md shadow-md ' /></a>

          </article>
        })
      }
    </div>
    <div className='flex justify-right px-32 my-8'>
      <button className="btn btn-primary tracking-wider"><a href="https://vite-cms.netlify.app/" referrerPolicy="no_referer" target="_blank">More projects</a></button>
    </div>
  </section>
}
export default Projects;