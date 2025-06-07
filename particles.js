tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 900,
      },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 2.5,
      random: { enable: true, minimumValue: 1 },
      anim: { enable: false },
    },
    links: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 160,
        links: {
          opacity: 0.5,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
});
