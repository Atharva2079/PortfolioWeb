// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Atharva2079/PortfolioWeb",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI / ML Engineer",
    icon: web,
  },
  {
    title: "AR Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Web Dev",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // Using React icon as placeholder for Python/OpenCV if not available, 
  // or just listing available ones. 
  // User listed: React, Three, Tailwind, Node, Mongo, Python, OpenCV, Git, Figma.
  // We don't have Python/OpenCV icons in basic set. 
  // We'll trust the user's manual list to be sufficient with what we have for now.
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Augmented Reality Developer Intern",
    company_name: "Trueview",
    icon: starbucks, // Placeholder icon
    iconBg: "#383E56",
    date: "Internship",
    points: [
      "Developed an AR Wardrobe system enabling virtual clothing try-ons to reduce dependency on physical changing rooms.",
      "Implemented immersive AR interactions using Unity and Blender for realistic visualization.",
      "Integrated AI-driven personalization concepts to enhance user engagement and experience.",
      "Collaborated with frontend and backend teams to ensure seamless system integration.",
    ],
  },
  {
    title: "AR & Computer Vision Developer Intern",
    company_name: "Star Maven Digital",
    icon: tesla, // Placeholder icon
    iconBg: "#E6DEDD",
    date: "Internship",
    points: [
      "Designed and developed an AR-based wall color visualizer and measurement tool for interior design.",
      "Implemented computer vision algorithms using OpenCV for accurate wall detection and real-time measurement.",
      "Enhanced user decision-making by enabling live color previews and material estimation.",
      "Worked closely with industry mentors to align the solution with real-world client requirements.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS: {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}[] = [];

// Hackathons
export const HACKATHONS = [
  {
    title: "14× Hackathon Winner | SIH ’25 Grand Finalist",
    company_name: "Smart India Hackathon",
    icon: starbucks, // Placeholder
    iconBg: "#383E56",
    date: "Current",
    points: [
      "Recognized for repeatedly delivering high-impact, scalable tech solutions across multiple hackathons.",
      "Shortlisted as a Grand Finalist at Smart India Hackathon 2025, representing advanced problem-solving and real-world innovation.",
    ],
  },
  {
    title: "Fusion Hackathon – Domain Winner",
    company_name: "SKNCOE",
    icon: tesla, // Placeholder
    iconBg: "#E6DEDD",
    date: "Oct 2025",
    points: [
      "Secured Domain Winner for presenting a technically robust and innovative solution.",
      "Recognized for clarity, feasibility, and real-world relevance.",
    ],
  },
  {
    title: "IEEE CIS IDEATHON 2025 – First Prize",
    company_name: "IEEE Computational Intelligence Society",
    icon: shopify, // Placeholder
    iconBg: "#383E56",
    date: "Aug 2025",
    points: [
      "Awarded First Prize for proposing an AI-driven solution evaluated by academic and industry experts.",
      "Demonstrated strong computational intelligence principles and practical deployment potential.",
    ],
  },
  {
    title: "PICT Impetus ’25 – International Level Runner-Up",
    company_name: "PICT Pune",
    icon: meta, // Placeholder
    iconBg: "#E6DEDD",
    date: "Mar 2025",
    points: [
      "Achieved Runner-Up position in an international-level project competition.",
      "Recognized for innovation depth, execution quality, and presentation.",
    ],
  },
  {
    title: "Techathon 2.0 – Best Solution Winner",
    company_name: "Innovation Foundation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025",
    points: [
      "Won Best Solution Award at a national hackathon.",
      "Delivered an end-to-end, impact-oriented system with strong technical architecture.",
    ],
  },
  {
    title: "International Innovation Challenge – Top 30 Teams",
    company_name: "Manipal University Jaipur",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2024",
    points: [
      "Selected among the Top 30 teams internationally.",
      "Showcased innovation excellence and strong competitive standing on a global platform.",
    ],
  },
  {
    title: "Tietoevry Hackathon – Top 5 Finalists",
    company_name: "COEP Pune",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Finished in the Top 5 teams overall.",
      "Ranked 1st in problem statement category for applied machine learning and analytical strength.",
    ],
  },
  {
    title: "Smart India Hackathon 2024 – Internal Hackathon Winner",
    company_name: "Smart India Hackathon",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2024",
    points: [
      "Won the internal SIH selection round.",
      "Qualifying for higher evaluation levels by presenting a scalable, government-aligned solution.",
    ],
  },
  {
    title: "Technical Secretary",
    company_name: "Vishwakarma Institute of Technology, Pune",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Role-based Achievement",
    points: [
      "Leading technical initiatives and mentoring teams for hackathons.",
      "Organizing events and fostering a strong innovation culture within the institute.",
    ],
  },
  {
    title: "IUCAA Satellite Making Challenge – Runner-Up",
    company_name: "IUCAA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2021",
    points: [
      "Recognized for hands-on engineering skills and teamwork in satellite design.",
      "Demonstrated early interest in deep tech and systems engineering.",
    ],
  },
  {
    title: "Best Outgoing Student",
    company_name: "Deccan Education Society’s DES Secondary School",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2021",
    points: [
      "Awarded for academic excellence, leadership, and overall contribution.",
    ],
  },
  {
    title: "Smart School Hackathon 2020 – National Winner",
    company_name: "Persistent Systems (C4i4)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2020",
    points: [
      "Won a national-level hackathon at school level.",
      "Marked the beginning of a consistent journey in competitive innovation.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "AR Wardrobe",
    description:
      "An Augmented Reality virtual try-on system that allows users to digitally visualize outfits and receive personalized fashion recommendations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project1, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
  {
    name: "HeamoScan",
    description:
      "AI-powered healthcare solution that predicts hemoglobin levels using nail or fingertip images, offering a non-invasive alternative to blood testing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: project2, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
  {
    name: "Wall Color Visualizer",
    description:
      "AR-based system that allows users to preview wall colors in real time and accurately measure wall dimensions to estimate paint requirements.",
    tags: [
      {
        name: "ar",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "web-technologies",
        color: "pink-text-gradient",
      },
    ],
    image: project3, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
  {
    name: "Marine Fouling Monitoring",
    description:
      "Machine learning–based solution for detecting and analyzing marine biofouling on submerged structures to improve maintenance efficiency.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "image-processing",
        color: "green-text-gradient",
      },
    ],
    image: project4, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
  {
    name: "Vardhit-Setu",
    description:
      "Immersive AR/VR platform for checking India’s cultural heritage. Enables interactive exploration of monuments using 3D reconstructions and storytelling.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "arcore",
        color: "green-text-gradient",
      },
      {
        name: "vr",
        color: "pink-text-gradient",
      },
    ],
    image: project5, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
  {
    name: "Warehouse Management",
    description:
      "Virtual warehouse navigation system helping employees locate items inside large warehouses using digital mapping and guided navigation.",
    tags: [
      {
        name: "ar-concepts",
        color: "blue-text-gradient",
      },
      {
        name: "virtual-mapping",
        color: "green-text-gradient",
      },
      {
        name: "web",
        color: "pink-text-gradient",
      },
    ],
    image: project6, // Placeholder
    source_code_link: "https://github.com/Atharva2079",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/atharva-patwardhan-8b204b30a",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Atharva2079",
  },
] as const;
