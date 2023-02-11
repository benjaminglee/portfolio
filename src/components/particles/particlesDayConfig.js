export const particlesConfigDay = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: '#fff3a1',
    },
    shape: {
      type: 'image',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '../../images/flower.png',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    rotate: {
      animation: {
        enable: true,
        speed: 50,
        sync: false,
      },
    },
    size: {
      value: 7.5,
      random: true,
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2.2,
      direction: 'bottom-left',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: [],
      },
      onclick: {
        enable: false,
        mode: [],
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
