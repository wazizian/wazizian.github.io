// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research contributions towards a principled understanding of optimization dynamics in deep learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research programs spanning stochastic optimization, robustness, and machine learning theory.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference presentations, seminars, and workshop talks on optimization, machine learning, and LLM research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses and exercise sessions at Université Grenoble Alpes and ENSIMAG.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-the-rate-of-convergence-of-bregman-proximal-methods-was-accepted-for-publication-in-siam-journal-on-optimization-preprint-on-arxiv",
          title: 'Our work “The rate of convergence of Bregman proximal methods” was accepted for...',
          description: "",
          section: "News",},{id: "news-presented-our-deterministic-analysis-of-mirror-methods-at-the-smai-mode-conference-in-marseille-slides-available",
          title: 'Presented our deterministic analysis of mirror methods at the SMAI MODE Conference in...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-paper-what-is-the-long-run-distribution-of-stochastic-gradient-descent-a-large-deviations-analysis-was-accepted-at-icml-2024-paper-on-arxiv",
          title: 'Excited to share that our paper “What is the long-run distribution of stochastic...',
          description: "",
          section: "News",},{id: "news-gave-a-seminar-on-large-deviation-theory-for-sgd-at-the-séminaire-de-statistique-of-the-lpsm-lab-in-paris-slides-here",
          title: 'Gave a seminar on “Large deviation theory for SGD” at the Séminaire de...',
          description: "",
          section: "News",},{id: "news-released-skwdro-a-library-for-wasserstein-distributionally-robust-machine-learning-collaborative-work-with-florian-vincent-and-my-advisors-available-on-arxiv",
          title: 'Released “skwdro: a library for Wasserstein distributionally robust machine learning” - collaborative work...',
          description: "",
          section: "News",},{id: "news-presented-invariant-measures-and-sgd-asymptotics-at-the-séminaire-de-probabilités-et-statistiques-of-nice-university-slides-available",
          title: 'Presented “Invariant measures and SGD asymptotics” at the Séminaire de Probabilités et Statistiques...',
          description: "",
          section: "News",},{id: "news-released-our-paper-how-does-the-pretraining-distribution-shape-in-context-learning-joint-work-with-ali-hasan-from-our-morgan-stanley-collaboration-available-on-arxiv",
          title: 'Released our paper “How does the pretraining distribution shape in-context learning?” - joint...',
          description: "",
          section: "News",},{id: "news-our-paper-the-global-convergence-time-of-stochastic-gradient-descent-in-non-convex-landscapes-was-accepted-at-icml-2025-preprint-available",
          title: 'Our paper “The global convergence time of stochastic gradient descent in non-convex landscapes”...',
          description: "",
          section: "News",},{id: "news-completed-my-phd-internship-at-apple-machine-learning-research-in-paris-working-on-uncertainty-quantification-methods-for-large-language-models-in-marco-cuturi-s-team-see-our-prepint",
          title: 'Completed my PhD internship at Apple Machine Learning Research in Paris, working on...',
          description: "",
          section: "News",},{id: "news-wrapped-up-my-internship-at-morgan-stanley-ml-research-new-york-where-i-investigated-in-context-learning-capabilities-of-llms-see-our-preprint",
          title: 'Wrapped up my internship at Morgan Stanley ML Research, New York, where I...',
          description: "",
          section: "News",},{id: "news-delivered-an-invited-seminar-on-stochastic-optimization-in-deep-learning-at-morgan-stanley-machine-learning-research-new-york-slides",
          title: 'Delivered an invited seminar on stochastic optimization in deep learning at Morgan Stanley...',
          description: "",
          section: "News",},{id: "news-presented-our-work-on-the-lon-run-behaviour-of-sgd-on-non-convex-landscapes-to-the-inria-argo-team-in-paris-slides",
          title: 'Presented our work on the lon-run behaviour of SGD on non-convex landscapes to...',
          description: "",
          section: "News",},{id: "projects-expressive-power-of-invariant-and-equivariant-gnns",
          title: 'Expressive power of invariant and equivariant GNNs',
          description: "Precise characterization of what symmetry-aware graph networks can represent.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/graph-neural-networks/";
            },},{id: "projects-internal-mechanisms-of-large-language-models",
          title: 'Internal mechanisms of large language models',
          description: "Understanding uncertainty estimates and in-context learning through targeted experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/internal-llm-mechanisms/";
            },},{id: "projects-last-iterate-convergence-of-mirror-methods",
          title: 'Last-iterate convergence of mirror methods',
          description: "Determining how Bregman geometry impacts last-iterate guarantees in variational inequalities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mirror-methods/";
            },},{id: "projects-smooth-game-optimization-for-machine-learning",
          title: 'Smooth game optimization for machine learning',
          description: "Unified analyses and accelerated methods for differentiable games.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smooth-game-optimization/";
            },},{id: "projects-stochastic-optimization-in-deep-learning",
          title: 'Stochastic optimization in deep learning',
          description: "Large-deviation analysis of SGD invariant measures and global convergence times.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stochastic-optimization/";
            },},{id: "projects-wasserstein-distributionally-robust-optimization",
          title: 'Wasserstein distributionally robust optimization',
          description: "Regularization schemes and generalization guarantees for Wasserstein DRO models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wasserstein-dro/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oXxTTe8AAAAJ", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/azizian_w_1.html", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/243/3135.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wazizian", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wa%C3%AFss-azizian-93420432b", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/wazizian", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%69%73%73.%61%7A%69%7A%69%61%6E@%75%6E%69%76-%67%72%65%6E%6F%62%6C%65-%61%6C%70%65%73.%66%72", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
