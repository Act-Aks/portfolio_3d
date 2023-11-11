import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { styles } from '@/styles'
import { textVariant } from '@/utils/motion'

import ExperienceCard from './card/ExperienceCard'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Projects I have worked on</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline layout='1-column-left'>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const WrappedExperience = SectionWrapper(Experience, 'Experience')
export default WrappedExperience
