export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "Angular",
    icon: "https://letsprogram.in/assets/images/icons/angular.png",
  },
  {
    name: "React JS",
    icon: "https://letsprogram.in/assets/images/icons/react.png",
  },
  {
    name: "Node JS",
    icon: "https://letsprogram.in/assets/images/icons/node.svg",
  },
  {
    name: ".NET",
    icon: "https://cdn.worldvectorlogo.com/logos/dotnet.svg",
  },
  {
    name: "C#",
    icon: "https://letsprogram.in/assets/images/icons/cc.png",
  },
  {
    name: "Typescript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "MongoDB",
    icon: "https://letsprogram.in/assets/images/icons/mongodb.svg",
  },
  {
    name: "Azure",
    icon: "https://letsprogram.in/assets/images/icons/Azure.png",
  },
  {
    name: "AWS",
    icon: "https://letsprogram.in/assets/images/icons/aws.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://letsprogram.in/assets/images/icons/tailwind.png",
  },
  {
    name: "git",
    icon: "https://letsprogram.in/assets/images/icons/git.png",
  },
  {
    name: "docker",
    icon: "https://letsprogram.in/assets/images/icons/docker.png",
  },
  {
    name: "Kubernetes",
    icon: "https://letsprogram.in/assets/images/icons/kuber.png",
  }
];

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "ti&m (Singapore)",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e6/3f/1b/e63f1b75-fef1-4eee-5728-c87c68795865/AppIcon-0-0-1x_U007epad-0-0-85-220.png/230x0w.webp",
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Led improvements in the Portfolio and Client Data modules to make the application faster and more responsive.",
      "Developed and maintained features in a micro frontend architecture, with Angular v17 as remote modules and a React shell, ensuring seamless integration and modularity across the application.",
      "Utilized .NET 8 Efcore within a Domain-Driven Design framework to build scalable, maintainable backend services.",
      "Implemented state management using NgRx for complex data flows in Angular, enhancing app performance and consistency across modules.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Credit Agricole CIB (Singapore)",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/1200px-Cr%C3%A9dit_Agricole.svg.png",
    iconBg: "#383E56",
    date: "October 2022 - April 2024",
    points: [
      "Modernized a legacy AngularJS and .NET Framework project into a microservices-based architecture, using React as the shell app and Angular (v16) as remote applications.",
      "Migrated backend services to .NET 7 and configured GitLab CI/CD pipelines with Argo CD for streamlined Kubernetes deployments, enhancing performance, stability, and scalability.",
      "Containerized backend services with Docker, simplifying deployment and scaling within the microservices architecture, and achieved 90% code coverage with xUnit, Jasmine, and Karma for unit testing.",
      "Conducted code reviews, provided training on micro frontend architecture, and engaged in Agile practices like sprint planning and retrospectives to align team efforts and achieve project milestones."
  ],
  },
  {
    title: "Software Engineer",
    company_name: "Morningstar India Pvt Ltd",
    icon: "https://companieslogo.com/img/orig/MORN-965b949f.png",
    iconBg: "#383E56",
    date: "October 2021 - October 2022",
    points: [
      "Developed scalable web applications using .NET Core 3.1, C#, React, and PostgreSQL, with deployment and storage on Azure services.",
      "Achieved 90% code coverage with unit tests using xUnit and Moq, ensuring robust and reliable software.",
      "Led an Angular migration, reducing architecture team workload by 30%, and provided training on Angular v13, while actively participating in code reviews to maintain high standards.",
      "Wrote clean, secure code with SonarLint, achieving zero Sonar Code Smells, and contributed to Agile practices like sprint planning and retrospectives to drive project success."
  ],
  },
  {
    title: "Software Engineer",
    company_name: "Citiustech Healthcare Pvt Ltd",
    icon: "https://www.citiustech.com/hubfs/citiustech-2024/Media%20Kit/Logos/CT%20Ultramarine/SVG/CitiusTech%20Logo_and_Brand%20Colours-02.svg",
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "Developed and maintained web applications using ASP.NET Core 2.1, C#, and SQL Server with backend functionality for data processing, validation, and storage using Entity Framework.",
      "Built reusable TypeScript components and hooks for REST API integration, utilizing a React component-based architecture.",
      "Implemented secure authentication and authorization mechanisms with Ping Federate.",
      "Actively participated in Agile ceremonies, including sprint planning, daily stand-ups, and sprint demos to ensure alignment and progress tracking."
  ],
  },
  {
    title: "Software Engineer",
    company_name: "Larsen & Toubro Infotech",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/LTI_Lets_solve.png",
    iconBg: "#383E56",
    date: "March 2018 - November 2020",
    points: [
      "Developed and maintained web applications using .NET technologies, including C#, ASP.NET, Web API, Entity Framework, and MS SQL Server.",
      "Supported front-end development with HTML, CSS, JavaScript, and Bootstrap for responsive and user-friendly interfaces.",
      "Collaborated with QA engineers in testing and debugging, identifying and fixing defects to ensure high-quality software deliverables.",
      "Applied Agile methodologies, including Scrum and Kanban, to improve development processes and team collaboration."
  ],
  },
  // Add more experiences here
];

export const projects = [
  {
    name: "AI Content Generator",
    description:
      "Effortlessly create high-quality, engaging content tailored to your needs with advanced AI-driven tools.",
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient ",
      },
    ],
    image: "src/assets/aicontentgenerator.png",
    source_code_link: "https://github.com/yshashi",
  },
  {
    name: "Social Media Resizer",
    description:
      "Instantly resize images for all social platforms, with easy drag-and-drop functionality and preview options.",
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient ",
      },
    ],
    image: "src/assets/socialmediaresizer.png",
    source_code_link: "https://github.com/yshashi",
  },
  {
    name: "Scrum Poker",
    description:
      "Make your agile estimation with collaborative Scrum Poker tool. Make team planning sessions more efficient and engaging!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/scrumpoker.png",
    source_code_link: "https://github.com/yshashi",
  },
];
