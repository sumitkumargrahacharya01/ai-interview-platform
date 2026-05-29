export const fadeInUp = {

  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
}

export const staggerContainer = {

  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const scaleAnimation = {

  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
    },
  },
}