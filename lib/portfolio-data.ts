import { group } from "console"
import { link } from "fs"

export const profileData = {
  name: 'Md Sajidul Mowla',
  title: 'Software Engineer',
  avatar: 'https://avatars.githubusercontent.com/u/76745588?v=4',
  email: 'smsajid7300.com',
  phone: '+8801859368074',
  // birthday: '',
  location: 'Halishahar, Chattogram, Bangladesh',
  social: {
    github: 'https://github.com/sajid73',
    linkedin: 'https://linkedin.com/in/sajid73',
  },
}

export const aboutData = {
  description: [
    "I'm a Software Engineer from Chattogram, Bangladesh, specializing in Web Development, AI Development and creating innovative digital solutions. I enjoy turning complex problems into simple, beautiful and intuitive applications.",
    "My job is to build your website or software application solution so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I've worked with various technologies including React, Next.js, Node.js, and ML tools.",
  ],
  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    // {
    //   icon: 'Smartphone',
    //   title: 'Mobile Development',
    //   description: 'Professional development of mobile applications with React Native and modern tools.',
    // },
    {
      icon: 'BrainCircuit',
      title: 'Machine Learning',
      description: 'Creating AI/ML solutions like classifier, RAG pipeline, Data analysis with latest tools and frameworks.',
    },
  ],
  testimonials: [
    {
      avatar: '/professional-man.jpg',
      name: 'Daniel Lewis',
      text: 'John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Jessica Miller',
      text: 'John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Michael Chen',
      text: 'Outstanding work! John delivered a high-quality product that exceeded our expectations. His attention to detail is remarkable.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Sarah Johnson',
      text: 'Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.',
    },
  ],
  clients: [
    { name: 'TechCorp', logo: '/tech-company-logo.jpg' },
    { name: 'StartupHub', logo: '/startup-logo.png' },
    { name: 'DesignStudio', logo: '/design-agency-logo.png' },
    { name: 'CodeLabs', logo: '/software-company-logo.png' },
    { name: 'WebSolutions', logo: '/web-agency-logo.jpg' },
    { name: 'AppMakers', logo: '/app-development-logo.jpg' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'Chittagong University of Engineering & Technology',
      period: '2019 — 2024',
      description:
        'Studied Computer Science with a focus on machine learning thesis and publications.',
    },
    {
      title: 'Complete Web Development Bootcamp',
      period: '2020 — 2021',
      description: 'Intensive program covering modern JavaScript frameworks, responsive design, and web solutions. Earned a certificate of completion and highest recognition.',
    },
  ],
  experience: [
    {
      title: 'Software Engineer Intern',
      period: 'September 2023 — October 2023',
      description:
        'Leading development of scalable web applications using React, Node.js, and cloud technologies. Learning from industry experts and implementing best practices.',
    }
  ],
  // skills: [
  //   { name: 'Web Design', level: 90 },
  //   { name: 'Frontend Development', level: 95 },
  //   { name: 'Backend Development', level: 85 },
  //   { name: 'Database Design', level: 80 },
  // ],
  skills: [
    {group: 'Machine Learning', items: ['Python', 'PyTorch', 'scikit-learn', 'Pandas']},
    {group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Ant Design']},
    {group: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs']},
    {group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Firebase']},
    {group: 'Programming Language', items: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'SQL']},
    {group: 'Tools & Platforms', items: ['Git', 'Github', 'Notion', 'n8n']},
  ]
}

export const portfolioData = {
  categories: ['all', 'web development', 'machine learning'],
  projects: [
    {
      title: 'AviSignt - Bird Species Classifier',
      category: 'machine learning',
      image: '/modern-ecommerce-website.png',
      description: 'A comparative analysis of bird species classification and an UI to classify birds. The models were trained on dataset publicly available on Kaggle. The UI was designed to classify birds based on an uploaded image.',
      tech: ['Python', 'Tensorflow', 'Streamlit UI', 'VGG16', 'ResNet50'],
      liveUrl: '',
      githubUrl: 'https://github.com/sajid73/AviSight-Bird_species_classifier',
    },
    {
      title: 'PayPredict - Salary Prediction System',
      category: 'machine learning',
      image: '/modern-ecommerce-website.png',
      description: 'Aninterface for predicting salary in tech industry. Based on profession, country, and years of experience this system will give an estimate salary. The system is built using machine learning based on Stack Overflow data.',
      tech: ['Python', 'Streamlit UI', 'scikit-learn', 'Pandas'],
      liveUrl: '',
      githubUrl: 'https://github.com/sajid73/PayPredict-salary_prediction',
    },
    {
      title: 'JoruriDoctor - Telemedicine System',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description: 'A full-stack project focusing on emergency expert medical access to remote people.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: '',
      githubUrl: 'https://github.com/sajid73/joruriDoctor-client',
    },
    {
      title: 'EventEase - Event Management Platform',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description: 'A software platform designed to manage and coordinate the different events held within a university.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: '',
      githubUrl: 'https://github.com/sajid73/EventEase-cuet_event_management',
    },
    {
      title: 'SmartBusDesk - Bus Ticket AI helper',
      category: 'machine learning',
      image: '/modern-ecommerce-website.png',
      description: '• SmartBusDesk: Bus ticket book and QA assistant SmartBusDesk is a bus ticket booking and AI-powered query assistance platform designed to simplify travel management',
      tech: ['streamlit', 'fastapi', 'chromadb', 'langchain'],
      liveUrl: '',
      githubUrl: 'https://github.com/sajid73/SmartBusDesk-AI_ticket_book',
    },
  ],  
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
  ],
}

export const contactData = {
  email: 'smsajid7300.com',
  phone: '+8801859368074',
  location: 'Halishahar, Chattogram, Bangladesh',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.0069!2d91.773262!3d22.3370558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd93ac9d59423%3A0xacccd083fee9504d!2z4Ka54Ka-4Kaw4Ka_4Ka24Ka-4Kau4KeH4KafIOCmrOCnjeCmruCmvuCmsOCnjeCmvuCmuOCnjeCmvuCmvuCmuA!5e0!3m2!1sen!2sbd!4v1234567890000',
}
