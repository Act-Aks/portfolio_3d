import { motion } from 'framer-motion'

import { projects } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { styles } from '@/styles'
import { fadeIn, textVariant } from '@/utils/motion'

import ProjectCard from './card/ProjectCard'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn({ delay: 0.1, duration: 1 })}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

const WrappedWorks = SectionWrapper(Works, 'works')
export default WrappedWorks
