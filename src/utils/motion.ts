const Directions = ['Left', 'Right', 'Up', 'Down'] as const

type AnimationProps = {
  direction?: (typeof Directions)[number]
  type?: string
  delay?: number
  duration?: number
}

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationProps) => {
  return {
    hidden: {
      x: direction === 'Left' ? 100 : direction === 'Right' ? -100 : 0,
      y: direction === 'Up' ? 100 : direction === 'Down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationProps) => {
  return {
    hidden: {
      x: direction === 'Left' ? '-100%' : direction === 'Right' ? '100%' : 0,
      y: direction === 'Up' ? '100%' : direction === 'Down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
