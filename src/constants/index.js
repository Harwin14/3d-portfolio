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
    carrent,
    jobit,
    tripguide,
    threejs,
    astra,
    alfa,
    rubicamp,
    vue,
    graphql,
    next,
    postgre,
    mysql,
    sqlite3,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
        name: "vue",
        icon: vue,
    },
    {
        name: "graphql",
        icon: graphql,
    },
    {
        name: "nextjs",
        icon: next,
    },
    {
        name: "postgre",
        icon: postgre,
    },
    {
        name: "sqlite",
        icon: sqlite3,
    },
];

const experiences = [
    {
        title: "Internship",
        company_name: "Astra International",
        icon: astra,
        iconBg: "#383E56",
        date: "Jan 2009 - Juni 2010",
        points: [
            "Observation and learning : observing and learning about various aspects of work in auto repair shops. This includes observing a technician who is experienced in carrying out repairs, maintenance or servicing of vehicles.",
            "Routine maintenance : assigned routine maintenance tasks, such as checking and changing oil, checking tires, cleaning vehicle parts, or filling coolant. These assignments help broaden my understanding of basic vehicle maintenance.",
            "Repair and troubleshooting : I am given the task of assisting technicians in carrying out vehicle repairs. This may involve repairing minor defects, replacing damaged components, or assisting in the troubleshooting process to find the source of the problem with the vehicle.",
            "Safety and cleanliness : As an intern, I must adhere to safety and cleanliness regulations in the car workshop. This includes using appropriate personal protective equipment, handling chemicals safely, and maintaining a clean working area.",
        ],
    },
    {
        title: "Chief of Store",
        company_name: "Sumber Alfaria Trijaya",
        icon: alfa,
        iconBg: "#E6DEDD",
        date: "Jan 2011 - Aug 2022",
        points: [
            "Managing store operations: Oversees and manages all aspects of store operations, including inventory management, cleanliness, security, and product availability.",
            "Creating and managing work schedules: Plans and organizes employee work schedules, ensuring adequate staffing to ensure smooth store operations.",
            "Managing the team:  Supervises the store crew, provides guidance, trains them, and motivates them to achieve optimal performance.",
            "Generating sales reports and analysis: Responsible for creating daily, weekly, and monthly sales reports. They analyze sales data to identify trends, manage inventory, and develop marketing strategies.",
            "Planning promotions and marketing activities: Collaborate with superiors and marketing teams to plan and execute in-store promotions or marketing activities, such as discounts, product bundling, or customer loyalty programs.",
            "Maintaining customer relationships: Strives to ensure customer satisfaction by providing excellent service, addressing customer complaints, and managing customer relationships in general.",
        ],
    },
    {
        title: "Starting Bootcamp",
        company_name: "Rubicamp",
        icon: rubicamp,
        iconBg: "#383E56",
        date: "Sep 2022 - Des 2022",
        points: [
            "Learning theory and concepts: I gain a basic understanding of bootcamp related topics, such as programming languages, terminologies and web development.",
            "Challenges and projects: I undertake various challenges and projects designed to test understanding and applying learned concepts. This will help me improve my skills in programming",
            "Doing assignments: I am given a task to complete. This could include reading additional material, completing an exercise or project, or preparing for a presentation.",
            "Attended lectures and presentations: I attended lectures and presentations delivered by instructors as experts in the field of programming. This helps me deepen my understanding of more complex topics or learn about the latest technologies and practices.",
        ],
    },
    {
        title: "Fresh graduates",
        company_name: "-",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "learn more about frontend frameworks, specifically reactjs and vuejs.",
            'Continue to improve my skills in programming by following courses on YouTube and running several tutorials to broaden my understanding and of course continue to improve my skills in "debugging a problem".',
            "and of course trying to apply for jobs.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
