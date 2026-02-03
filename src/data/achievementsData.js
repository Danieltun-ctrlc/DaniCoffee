// src/data/achievementsData.js

const achievementsData = [
  {
    id: 1,
    username: "myothettun",
    userImage: "/assets/me.jpg",
    location: "Jeonju, South Korea",
    date: "May 2025",

    // CHANGED: Now an array of multiple images
    images: [
      "/assets/national_team.jpg",
      "/assets/striker_daniel.jpg",
      "/assets/burmese.png",
      "/assets/fairplay.jpg",
    ],

    title: "2025 Drone Soccer National Striker",
    caption: `
       Top 8 in the World! 
      
      I represented Singapore 🇸🇬 as part of the National Team (Class 20 Merlion) at the FIDA Drone Soccer World Cup. 
      
      As the team Striker, I helped secure notable victories against China (25:19), UK (24:6), and France (23:19).
    `,
    likes: 842,
    comments: [
      {
        user: "system_admin",
        text: " Context: FIDA Drone Soccer World Cup, Jeonju.",
      },
      {
        user: "tech_explainer",
        text: " Role: Piloting the striker drone through goals while evading defenders.",
      },
    ],
    tags: ["#DroneSoccer", "#TeamSingapore", "#FIDAWorldCup"],
  },

  {
    id: 2,
    username: "myothettun",
    userImage: "/assets/me.jpg",
    location: "DSTA Academy Singapore", // Or "DSTA Academy, Singapore"
    date: "June 2025",

    // Placeholders - make sure you have images in assets
    images: [
      "/assets/brainhack_main.jpg",
      "/assets/brainhack-gp.jpeg",
      "/assets/brainhack_con.jpg",
      "/assets/brainhack_dis.jpg",
      "/assets/brainhack_code.jpg",
    ],

    title: "BrainHack 2025 Finalist 🏆",

    caption: `
      Honored to be a Finalist at BrainHack 2025, one of Singapore's most prestigious cybersecurity competitions! 
      
      We competed with our project 'WiseGuard' a smart cybersecurity platform for smart cities.
      
      As the Main Full Stack Coder, I led the development of our core features, including the AI-Moderated Community and the Threat Assessment Chatbot. It was an intense experience tackling complex challenges in AI and cyber-resilience alongside the brightest minds in tech.
    `,

    likes: 624,

    comments: [
      {
        user: "cyber_daily",
        text: " Project Spotlight: WiseGuard features a Dual-Layer Trend System that identifies threats using both user reports and AI analysis.",
      },
      {
        user: "judge_panel",
        text: "Technical Note: Impressive implementation of the Smart Learning System to deliver bite-sized security lessons.",
      },
    ],

    tags: [
      "#BrainHack2025",
      "#WiseGuard",
      "#Finalist",
      "#FullStack",
      "#Cybersecurity",
      "#AI",
    ],
  },
];

export default achievementsData;
