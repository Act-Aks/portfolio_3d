import { motion } from 'framer-motion'

import { feedbacks } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { styles } from '@/styles'
import { textVariant } from '@/utils/motion'

import FeedbackCard from './card/FeedbackCard'

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Feedbacks</h2>
        </motion.div>

        <motion.div
          variants={textVariant()}
          className='flex flex-wrap justify-center gap-8'>
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={feedback.name} {...feedback} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const WrappedFeedbacks = SectionWrapper(Feedbacks, 'feedbacks')
export default WrappedFeedbacks
