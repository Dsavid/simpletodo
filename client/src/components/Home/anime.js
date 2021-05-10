export const parAnime = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 1,
  },
};
export const childAnime = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};
export const childAnimeAboutLeft = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};
export const childAnimeAboutright = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};
