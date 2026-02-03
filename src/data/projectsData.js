// src/data/projectsData.js

const projectsData = [
  {
    id: "wiseguard",
    featured: true,
    title: "WiseGuard",
    category: "Mobile App",
    tagline: "Smart Cybersecurity for Smart Cities",
    image: "/assets/wiseguard.png",

    problem:
      "With the rise of digital scams and AI-driven threats, citizens lack a centralized, real-time platform to report and verify cybersecurity threats efficiently.",
    solution:
      "A smart community platform that combines AI threat detection with crowdsourced intelligence, allowing users to report scams and receive real-time alerts.",

    features: [
      "AI-Moderated Community: Automatically filters off-topic discussions.",
      "Dual-Layer Trend System: Identifies threats based on reports and AI analysis.",
      "Threat Assessment Chatbot: Users upload screenshots for instant AI analysis.",
      "Smart Learning System: Delivers bite-sized cybersecurity lessons.",
    ],

    techStack: {
      frontend: ["React Native", "Expo", "NativeWind", "TypeScript"],
      backend: ["Python Flask", "MySQL"],
      tools: ["Gemini API", "Git", "Figma"],
    },

    myRole:
      "Full Stack Developer & AI Integration Lead. Designed mobile architecture and integrated Gemini API.",
    challenges:
      "Reducing image analysis latency. Solved by optimizing compression, reducing response time by 40%.",
    learned:
      "Deep intricacies of Prompt Engineering to ensure AI acts strictly as a cybersecurity expert.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/WiseGuard",
      live: null,
    },
  },
  {
    id: "rp-community",
    featured: true,
    title: "RP Community Hub",
    category: "Web App",
    tagline: "Connecting Students, Empowering Growth",
    image: "/assets/rpcommunity.jpg",

    problem:
      "Students lack a centralized platform to find study groups, share notes, and connect with peers outside their class.",
    solution:
      "A gamified web platform that aggregates student events, study resources, and social connections.",

    features: [
      "Gamified Points System: Earn rewards for uploading notes.",
      "Smart Filtering: Filter content by School or Diploma.",
      "Event Management: Host and join study sessions.",
    ],

    techStack: {
      frontend: ["React", "TailwindCSS"],
      backend: ["Node.js", "Express"],
      tools: ["MySQL", "Vercel"],
    },

    myRole:
      "Backend Developer. Designed database schema for points system and API authentication.",
    challenges:
      "Handling complex SQL queries for filtering. Used optimized joins for fast load times.",
    learned: "Solid understanding of RESTful API design and state management.",

    links: {
      github: "https://github.com/24041225-kae/CA2_C219",
      live: "https://monumental-gaufre-ed6370.netlify.app/",
    },
  },
  {
    id: "spaceship-game",
    featured: false,
    title: "SpaceShip Game",
    category: "Games",
    tagline: "Retro-style arcade shooter built with Python & Pygame",
    image: "/assets/spaceship.png",

    problem:
      "To build a robust, interactive arcade game that demonstrates complex Object-Oriented Programming concepts in a real-time environment.",
    solution:
      "A modular spaceship shooter developed with Python, using Pygame and Turtle libraries for smooth rendering and responsive controls.",

    features: [
      "OOP Architecture: Modular classes for player, enemies, and game state.",
      "Interactive Controls: Smooth keyboard navigation and combat mechanics.",
      "Retro Graphics: Classic arcade visual style using Turtle graphics.",
    ],

    techStack: {
      frontend: ["Python", "Pygame", "Turtle"],
      backend: ["OOP Logic", "Math Module"],
      tools: ["Git", "VS Code"],
    },

    myRole:
      "Solo Developer. Architected the class hierarchy, implemented collision detection algorithms, and designed the game loop.",
    challenges:
      "Optimizing the game loop for smooth frame rates and handling precise collision detection between moving objects.",
    learned:
      "Mastered Object-Oriented Programming (OOP) principles and event-driven programming in Python.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/Spaceship_game",
      live: null,
    },
  },
  {
    id: "snake-game",
    featured: false,
    title: "Snake Game",
    category: "Games",
    tagline: "Classic arcade challenge testing reflexes and precision",
    image: "/assets/snake.png",

    problem:
      "To recreate the classic engaging gameplay experience of Snake, requiring precise real-time control and dynamic difficulty scaling without input lag.",
    solution:
      "A Python-based arcade game utilizing OOP to manage the snake's continuous movement, adaptive speed, and segment-based growth mechanics.",

    features: [
      "Dynamic Growth: Snake length increases segment by segment visually representing progress.",
      "Adaptive Difficulty: Speed adjusts to keep the gameplay challenging and rewarding.",
      "Real-time Physics: Smooth motion handling and precise collision detection with walls or body.",
    ],

    techStack: {
      frontend: ["Python", "Turtle", "Pygame"],
      backend: ["OOP Logic", "Time/Random Modules"],
      tools: ["VS Code", "Git"],
    },

    myRole:
      "Solo Developer. Designed the central snake entity, implemented the directional input system, and coded the collision logic.",
    challenges:
      "Managing the coordinate updates for body segments to ensure they follow the head smoothly as the snake grows longer.",
    learned:
      "Strengthened understanding of lists/arrays for game state management and real-time event loop processing.",

    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "confi",
    featured: false,
    title: "Confi",
    category: "Web App",
    tagline: "Community-driven platform for spreading kindness & connection",
    image: "/assets/confi.png",

    problem:
      "Communities often lack a centralized, incentivized platform where members can easily ask for help or organize social gatherings to combat isolation.",
    solution:
      "A gamified web application that encourages kindness by allowing users to post help requests, join events, and earn redeemable rewards for their contributions.",

    features: [
      "Kindness Economy: Post help requests or accept them to earn points.",
      "Rewards System: Redeem earned points for real-world gifts.",
      "Community Events: Create or join gatherings to share happiness and connect.",
    ],

    techStack: {
      frontend: ["HTML/CSS", "Bootstrap 5", "Jinja Engine"],
      backend: ["Python", "Flask", "WTForms"],
      tools: ["Git", "VS Code"],
    },

    myRole:
      "Full Stack Developer. Built the user authentication flows, implemented the event management system, and integrated the point-redemption logic.",
    challenges:
      "Designing a database schema that efficiently links users, help requests, and reward transactions while keeping the point balance synchronized.",
    learned:
      "Gained deep experience with server-side rendering using Jinja2 and handling secure form validation with Flask-WTF.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/hackathon",
      live: null,
    },
  },
  {
    id: "hushwave",
    featured: false,
    title: "HushWave App Prototype",
    category: "Other Programs",
    tagline: "Smart auditory filter to aid ADHD concentration",
    image: "/assets/hushwave.png",

    problem:
      "Students with ADHD often struggle to filter out background auditory distractions in classrooms or study groups, leading to sensory overload and lack of focus.",
    solution:
      "A smart mobile application that processes environmental sound in real-time, removing unwanted noise while keeping essential voices clear and focused.",

    features: [
      "Voice Isolation: Filters background sounds, prioritizing only selected voices.",
      "Group Mode: Reduces distant noise to focus specifically on nearby conversations.",
      "Focus Mode: Blocks all external sounds completely for deep concentration.",
    ],

    techStack: {
      frontend: ["Figma", "Expo"],
      backend: ["Audio Processing"],
      tools: [],
    },

    myRole:
      "Product Designer & Developer. Conceptualized the user interface for ADHD accessibility and defined the core audio filtering logic.",
    challenges:
      "Designing a UI that is strictly non-distracting while offering complex audio controls.",
    learned:
      "Gained insight into accessibility-first design and the challenges of real-time audio signal processing.",

    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "animal-prediction",
    featured: false,
    title: "Animal Population Prediction",
    category: "AI",
    tagline: "Data-driven forecasting tool for species population trends",
    image: "/assets/animal-prediction.png",

    problem:
      "Conservationists and researchers need accessible tools to visualize how specific animal populations might decline over time based on current trends.",
    solution:
      "A Python-based predictive modeling tool that estimates future population numbers and visualizes these trends using interactive graphs.",

    features: [
      "Population Estimation: Predicts specific animal populations for any year from 2025 onwards.",
      "Visual Graphing: Generates clear, interactive Matplotlib graphs to display population decline or growth.",
      "Decay Prediction Model: Applies a mathematical decay-based algorithm for realistic long-term forecasting.",
    ],

    techStack: {
      frontend: ["Matplotlib (Pyplot)"],
      backend: ["Python", "Pandas", "NumPy"],
      tools: ["Git"],
    },

    myRole:
      "Solo Developer. Implemented the decay algorithms, handled data processing with Pandas, and designed the visualization logic.",
    challenges:
      "Ensuring the decay model accurately represented realistic biological constraints rather than just simple linear regression.",
    learned:
      "Deepened knowledge of data analysis libraries (Pandas/NumPy) and data visualization techniques in Python.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/AnimalPrediction",
      live: "https://youtu.be/-yEDcKF54Fs?si=PW1vLbQlGTjnhe_N",
    },
  },
  {
    id: "trash-turns",
    featured: false,
    title: "Trash Turns",
    category: "Web App",
    tagline: "Real-time chore tracking dashboard for roommates",
    image: "/assets/trashturn.png",

    problem:
      "Shared living spaces often lead to confusion or conflict regarding household chores, specifically tracking whose turn it is to take out the trash.",
    solution:
      "A digital roommate dashboard that automates task rotation and provides real-time updates on current chore responsibilities to ensure accountability.",

    features: [
      "Real-Time Updates: Instantly reflects changes in task ownership across all devices.",
      "Smart Rotation: Automatically assigns the next roommate in line after a task is completed.",
      "User Dashboard: A clean, simple interface to view schedules and mark tasks as done.",
    ],

    techStack: {
      frontend: ["HTML/CSS", "JavaScript"],
      backend: ["Node.js"],
      tools: ["Git", "GitHub Pages?"],
    },

    myRole:
      "Full Stack Developer. Created the logic for task rotation and built the real-time status display interface.",
    challenges:
      "Ensuring the state (whose turn it is) persisted correctly for all users without requiring a complex login system.",
    learned:
      "Learned how to manage shared state and design simple, effective user interfaces for specific utility problems.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/trashturn",
      live: null,
    },
  },
  {
    id: "personal-stats",

    title: "Personal Stats",
    category: "Web App",
    tagline: "Gamified dashboard for tracking personal growth attributes",
    image: "/assets/personal_stats.png",

    problem:
      "Self-improvement often feels abstract and difficult to measure. Without concrete metrics, it is hard to stay motivated or visualize progress in soft skills.",
    solution:
      "A personal growth tracker that gamifies real life, allowing users to quantify and level up attributes like Knowledge, Guts, and Charm on a dynamic dashboard.",

    features: [
      "Stat Dashboard: Input and track core attributes: Knowledge, Guts, Charm, Proficiency, Thinking, and Kindness.",
      "Progress Visualization: Dynamic charts (radar or line graphs) to view improvement trends over time.",
      "Motivation System: Encourages consistent self-development by treating life achievements as XP (Experience Points).",
    ],

    techStack: {
      frontend: ["HTML/CSS", "JavaScript", "Chart.js"],
      backend: ["Node.js", "SQLite"],
      tools: ["Git", "VS Code"],
    },

    myRole:
      "Full Stack Developer. Designed the gamified concept, built the CRUD system for stat updates, and integrated visualization libraries for the dashboard.",
    challenges:
      " designing a database schema that tracks historical data points efficiently to allow for 'progress over time' visualization rather than just static values.",
    learned:
      "Mastered data visualization techniques and learned how to translate abstract concepts (like 'charm') into quantifiable application logic.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/personal_stats",
      live: null,
    },
  },
  {
    id: "geohelp",

    title: "GeoHelp – City in Nature",
    category: "Mobile App",
    tagline:
      "Location-based community platform for Singapore’s Green Plan 2030",
    image: "/assets/geo-help.png",

    problem:
      "Community-driven environmental efforts often suffer from a lack of visibility, making it difficult to coordinate volunteers or identify exactly where help is needed for green initiatives.",
    solution:
      "A location-based mobile app that visualizes environmental requests on an interactive map, enabling users to easily discover, post, and collaborate on activities like tree planting and park maintenance.",

    features: [
      "Interactive Map Interface: Visualizes help requests as markers for easy discovery.",
      "Community Collaboration: Users can create, join, or leave initiatives in real-time.",
      "Detail Management: Sliding panels display comprehensive request info including category and specialist requirements.",
    ],

    techStack: {
      frontend: ["React Native", "Google Maps API"],
      backend: ["Node.js", "Express", "RESTful APIs"],
      tools: ["Git", "PostgreSQL/MySQL"],
    },

    myRole:
      "Full Stack Developer. Integrated the mapping service, built the RESTful API endpoints for request management, and implemented the sliding panel UI animations.",
    challenges:
      "Ensuring seamless synchronization between the interactive map markers and the persistent database state while maintaining smooth UI performance.",
    learned:
      "Deepened expertise in geospatial data handling, RESTful API integration, and mobile state management patterns.",

    links: {
      github: "https://github.com/AY2025-S2-C346",
      live: null,
    },
  },
  {
    id: "skylab-dronehub",

    title: "SkyLab - DroneHub",
    category: "Other Programs",
    tagline: "Singapore's first Drone Soccer Experience Hub & STEM Workshop",
    image: "/assets/pmi.jpg",

    problem:
      "Despite the rising popularity of drone sports, Singapore lacks accessible, dedicated facilities for education, recreation, and competitive drone soccer, limiting public engagement.",
    solution:
      "A proposed 10m x 10m physical arena and workshop that democratizes access to drone sports through school partnerships, corporate team building, and retail.",

    features: [
      "Physical Arena & Workshop: A dedicated space designed for competitive matches and technical maintenance workshops.",
      "Comprehensive Business Plan: Includes a detailed Business Model Canvas (BMC), Cost-Benefit Analysis (CBA), and Marketing Journey Map.",
      "Project Roadmap: A full execution strategy covering WBS (Work Breakdown Structure), Risk Register, and a Gantt Chart timeline.",
    ],

    techStack: {
      frontend: ["Business Model Canvas", "Stakeholder Analysis"],
      backend: ["Cost-Benefit Analysis", "Risk Register"],
      tools: ["Project Charter", "WBS", "Gantt Chart", "RACI Matrix"],
    },

    myRole:
      "Operations Lead (Daniel). Responsible for defining the operational workflow, managing the project timeline (Oct 2025 - June 2026), and developing risk mitigation strategies.",
    challenges:
      "Balancing a high initial startup cost (estimated SGD 180,000) against projected revenue streams while ensuring regulatory compliance (CAAS permits).",
    learned:
      "Mastered formal project management methodologies, including financial forecasting, stakeholder management, and strategic marketing planning.",

    links: {
      github: null,
      live: null,
    },
  },
  {
    id: "mental-novel",

    title: "Mental Novel",
    category: "Games",
    tagline: "Choice-driven visual novel exploring anxiety and resilience",
    image: "/assets/mental.png",

    problem:
      "Anxiety is often an invisible struggle. Many people find it difficult to articulate the 'masks' they wear to survive daily social interactions.",
    solution:
      "A browser-based visual novel that immerses players in these emotional scenarios. It uses choice-driven storytelling to foster empathy and provide encouragement.",

    features: [
      "Branching Narrative: Your choices shape the story, leading to one of 3 distinct endings.",
      "Atmospheric Design: Optimized for desktop with immersive visuals and a curated soundtrack for engagement.",
      "Accessibility: Fully playable in the browser without downloads, focusing on mental health awareness.",
    ],

    techStack: {
      frontend: ["React", "CSS Animation", "CSS Canvas", "Next.js"],
      backend: ["Vercel Deployment"],
      tools: ["Figma (Assets)", "Audio Editing"],
    },

    myRole:
      "Solo Developer. Wrote the branching script, designed the UI for the dialogue system, and integrated the audio-visual assets.",
    challenges:
      "Creating a state management system to track player choices and trigger the correct narrative path (endings) dynamically.",
    learned:
      "Learned how to use interactive media for storytelling and the technical handling of audio assets in a web environment.",

    links: {
      github: "https://github.com/Danieltun-ctrlc/mentalnovel",
      live: "https://Mentalnovel-v4.vercel.app",
    },
  },
  {
    id: "whispers-of-the-shrine",

    title: "Whispers of the Shrine",
    category: "Games",
    tagline:
      "Psychological VR escape room set in a surreal Japanese dreamscape",
    image: "/assets/whispers.png",

    problem:
      "Traditional escape games often focus solely on logic puzzles, lacking emotional weight. The goal was to create an experience where the 'trap' is the protagonist's own mind—their stress, doubts, and regrets.",
    solution:
      "A first-person VR narrative where players navigate a distorted spiritual realm. Puzzles are not just obstacles but symbolic rituals that require the player to confront and release inner burdens to wake up.",

    features: [
      "Emotion-Driven Design: Puzzles symbolize struggles like anger and doubt, requiring introspection to solve.",
      "Surreal Atmosphere: A hauntingly beautiful world modeling traditional Japanese shrines and gardens.",
      "Ritualistic Interactions: Unique VR mechanics involving physical offerings and unlocking spiritual paths.",
    ],

    techStack: {
      frontend: ["Unity", "XR Interaction Toolkit"],
      backend: ["C#"],
      tools: ["Blender", "Oculus/Meta Quest"],
    },

    myRole:
      "Solo Developer. Created the concept art, designed the 'mind-palace' level layout, and programmed the interaction mechanics for the ritual-based puzzles.",
    challenges:
      "Balancing the surreal, dreamlike aesthetic with clear visual cues so players don't get lost while exploring the non-linear environment.",
    learned:
      "Learned how to use environmental storytelling and atmospheric sound design to guide player emotions without using heavy dialogue.",

    links: {
      github: null,
      live: "https://youtu.be/699SQrNLBJw",
    },
  },
  {
    id: "oh-meme-generator",

    title: "Open House Meme Generator",
    category: "AI",
    tagline: "AI-powered meme creation tool using Model Context Protocol (MCP)",
    image: "/assets/oh_meme.jpg",

    problem:
      "Creating witty, relevant memes for events often involves juggling separate tools for templates, text editing, and creative brainstorming, which slows down production.",
    solution:
      "A unified dashboard built on the Model Context Protocol that integrates AI tools directly into the editor, allowing for smart caption generation, template remixing, and layered editing in one workflow.",

    features: [
      "AI Caption Assist: Uses MCP tools to generate punchy captions, tone tweaks, and variations instantly.",
      "Layered Editor: Professional-grade drag/resize text tools with outline and placement adjustments.",
      "Batch Mode: Generates multiple caption variants in a single click for rapid content testing.",
    ],

    techStack: {
      frontend: ["React", "HTML5 Canvas"],
      backend: ["Model Context Protocol (MCP)", "Node.js"],
      tools: ["Git", "AI APIs"],
    },

    myRole:
      "Full Stack Developer. Implemented the MCP client architecture to connect with AI tools and built the interactive canvas editor for real-time meme rendering.",
    challenges:
      "Successfully integrating the Model Context Protocol to handle asynchronous AI responses while keeping the visual editor responsive and lag-free.",
    learned:
      "Gained cutting-edge experience with MCP for tool-use agents and advanced state management for graphical editors.",

    links: {
      github: "https://github.com/Sweekwang/OH-Meme-dashboard",
      live: null,
    },
  },
];

export default projectsData;
