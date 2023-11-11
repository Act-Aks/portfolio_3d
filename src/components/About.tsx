import { motion } from 'framer-motion'

import { services } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { styles } from '@/styles'
import { fadeIn, textVariant } from '@/utils/motion'

import ServiceCard from './card/ServiceCard'

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ delay: 0.1, duration: 1 })}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a software developer with experience in JavaScript and TypeScript,
        and have an intermediate expertise in React, Node. I'm an active learner
        who yearn to learn various tech-stacks with a collaborative mindset to
        create user-friendly, efficient applications and keen on learning to
        solve real world problems with others. Let's work as a team!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about')
export default WrappedAbout
