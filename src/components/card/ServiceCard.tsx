import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { services } from '@/constants'
import { fadeIn } from '@/utils/motion'

type ServiceCardProps = {
  index: number
} & (typeof services)[0]

const ServiceCard: React.FC<ServiceCardProps> = ({ title, index, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn({
          direction: 'Right',
          type: 'spring',
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          // eslint-disable-next-line
          /** @ts-ignore */
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] text-center font-bold'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard
