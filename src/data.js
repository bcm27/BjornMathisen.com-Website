module.exports = {
  title: 'Bjørn Mathisen - portfolio and resume',
  header: "Hi, I'm Bjørn Mathisen",
  description: "I'm a recently graduated from Principia College with my Bachelors in Computer Science. I have 4 years of programming experience in a variety of student lead SCRUM/Agile projects and am confident in coding in a variety of languages; C#, C, .net, Python, Java, MYSQL/SQL/MongoDB. Other languages that I have been exposed to are LISP, Ruby, OpCode, Assembly, PHP. HTML/CSS, JavaScript, Masm32 and others. If you would like to see any of my personal and school related projects please see below.",
  name: 'Bjørn Mathisen',
  footerTitle: 'Software Engineer',
  email: 'thebcm27@gmail.com',
  cta: {
    label: 'Get my resume',
    url: 'resume.pdf',
  },
  socials: [
    { icon: 'twitter', url: 'https://twitter.com/Bjornthebrave' },
    { icon: 'github-circled', url: 'https://github.com/bcm27' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    { icon: 'dribbble', url: '//' },
    { icon: 'skype', url: '//' },
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/bjorn-mathisen-48a69528' },
  ],
  projects: [
    {
      name: 'Customer Management System ',
      description: 'Desktop WPF C# application developed for a client that allows the user to manage bookings, clients, and view a calendar of future gigs, all hosted on a virtual SQL server.',
      tags: ['C#', 'SQL', 'Database', 'CRM', 'SCRUM', 'Issue Tracking', 'Unit Testing', 'Freelance Work'],
      alt: 'Combustion Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'combustion.png',
      url: 'https://github.com/bcm27/CRM_Basic'
    },
    {
      name: 'Club Budgeting Tool',
      description: 'Using SCRUM workflow I developed a desktop C# Windows Forms application allowing students to login and access club budget information, create and store documents on a SQL server accessible from two GUIs. One being a normal user-level access, and the other being an admin-level access. \n',
      tags: ['C#', 'SQL', 'Database', 'SCRUM', 'Issue Tracking', 'Unit Testing', 'Group Project', 'Undergraduate'],
      img: 'merc-01.png',
      url: 'https://github.com/bcm27/ClubBudgeting'
    },
    {
      name: "Python Chat Server and Client",
      description: '',
      tags: ['Python', 'Group', 'Undergraduate', 'Server/Client', 'GUI', 'Database'],
      url: 'htpps://github.com/bcm27/ChatApp'
    }
  ],
  experiences: [
    {
      title: 'Field Engineer at Zerma',
      timeline: 'January 2019 to the present',
      responsibilities: [
          'Installed and programmed both small- and large-scale granulators and grinders for industrial factories across the United States.'
          ,'Installed and repaired injection molding machines across the United States.'
          ,'Performed maintenance on inventory management computers and sped up operating speeds by 80 percent before the installation accounting software'
      ]
    },
    {
      title: 'Observatory Manager at Principia College',
      timeline: 'January 2015 - December 2019',
      description: 'Implemented Gamification for system',
      responsibilities: [
        'Organized and trained over eight student operators; maintained the observatory schedule and organized public campus-wide events on a weekly basis.'
    ,'Updated training manuals and facilitated the upgrade from DOS to EXP for the telescope control system.'
    ,'President of the Astronomy Club which organized field trips and maintained a member count of over twenty five students.'

]
    }
  ],
  testimonials: [
    {
      quote: 'Incredibly talented and hardworking. A super friendly guy who is a frequent communicator',
      name: 'Martina Carter',
      title: 'CEO at Company'
    },
    {
      quote: 'Wow, thank you for this, you probably have the most intuitive explanation for this problem!',
      name: 'Person Name'
    }
  ]
}
