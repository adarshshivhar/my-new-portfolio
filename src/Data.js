const info = {
  headerSection: {
    name: 'adarsh',
    image:
      'image-https://scontent.fpnq10-1.fna.fbcdn.net/v/t1.0-9/87031444_2949475678429642_8465334270733320192_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=tCsLysRvj0UAX-63pA1&_nc_ht=scontent.fpnq10-1.fna&oh=034939153963ba27a81f2d7aeda51999&oe=5FC4BBA4',
    desgination: 'full-stack developer',
    socialIcons: [
      {
        id: 1,
        icon: 'facebook',
        link: 'https://www.facebook.com/adarshshivhare456',
      },
      {
        id: 2,
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/adarsh-shivhare16/',
      },
      { id: 3, icon: 'github', link: 'https://github.com/adarshshivhar' },
      {
        id: 4,
        icon: 'instagram',
        link: 'https://www.instagram.com/chiku_855/',
      },
    ],
  },

  //

  aboutSection: {
    describePart1: `I am a Former Application Developer Intern in Rishabh Software Vadodara, Gujarat. 
          I hold MTech(ICT) specialization in Software Engineering and Databases, 
          Degree from Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar, Gujarat.`,

    describePart2: `Over the course of my internship, master's and bachelor's, I have done various projects and developed a keen interest in building the best product for customers. 
                    I am well versed in technologies like Java, JavaScript, Angular, Spring Boot, SQL, REST API, GIT, which I have extensively 
                     used throughout the project development phases. Other than Technical background, 
                            I love traveling and exploring new places and, more importantly, a Team Player. I also participated 
                            in many cricket tournaments during my University time. I follow a number of sci-fi and fantasy genre 
                            movies and television shows. I spend a lot of my free time exploring the latest technological advancements 
                            in the web development world.`,
    aboutImg:
      'https://scontent.fbho1-2.fna.fbcdn.net/v/t1.0-9/42424433_2030798756964010_1842113955745497088_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=p0vmrd0MMSkAX9Nt16R&_nc_ht=scontent.fbho1-2.fna&oh=ae6c7532ea9e7470eb5a030680810147&oe=603C4915',
    //

    resume:
      'https://github.com/adarshshivhar/Resume/blob/master/Adarsh_Shivhare_Resume_Updated.pdf',
  },

  //

  experienceSection: [
    {
      id: 1,
      order: 1,
      title: 'Application Developer Intern',
      dates: 'Jan 2020 - Jun 2020',
      duties: [
        'Designing, maintaining and building the reusable, efficient and reliable Java code',
        'Developing the service layer that acts as a bridge between the presentation layer and data access layer, with spring framework.',
        'Implementing the Design Patterns like MVC to improve the performance.',
        'Working in an Agile(Scrum) environment.',
        'Implementing GIT for version control.',
      ],
      company: 'Rishabh Software',
    },
    // {
    //   id: 2,
    //   order: 2,
    //   title: 'Application Developer',
    //   dates: 'Jan 2020 - Jun 2020',
    //   duties: [
    //     'Designing, maintaining and building the reusable, efficient and reliable Java code',
    //     'Developing the service layer that acts as a bridge between the presentation layer and data access layer, with spring framework.',
    //     'Implementing the Design Patterns like MVC to improve the performance.',
    //     'Working in an Agile(Scrum) environment.',
    //     'Implementing GIT for version control.',
    //   ],
    //   company: 'Rishabh Software',
    // },
  ],

  skillsSection: [
    {
      id: 1,
      domain: 'front-end',
      tech: [
        {
          id: 1,
          name: 'HTML/CSS',
          profeciency: '70',
        },
        {
          id: 2,
          name: 'javascript',
          profeciency: '80',
        },
        {
          id: 3,
          name: 'React',
          profeciency: '80',
        },
        {
          id: 4,
          name: 'Angular',
          profeciency: '50',
        },
      ],
    },
    {
      id: 2,
      domain: 'back-end',
      tech: [
        {
          id: 1,
          name: 'c++',
          profeciency: '70',
        },
        {
          id: 2,
          name: 'java',
          profeciency: '70',
        },
        {
          id: 3,
          name: 'node.js',
          profeciency: '50',
        },
      ],
    },
    {
      id: 3,
      domain: 'database',
      tech: [
        {
          id: 1,
          name: 'My-Sql',
          profeciency: '60',
        },
        {
          id: 2,
          name: 'mongoDB',
          profeciency: '60',
        },
      ],
    },
    {
      id: 4,
      domain: 'other',
      tech: [
        {
          id: 1,
          name: 'git',
          profeciency: '70',
        },
      ],
    }
  ],

  //

  educationSection: [
    {
      id: 1,
      collegeOrSchool:
        'Dhirubhai Ambani Institute of Information and Communication Technology',
      degree: 'M.Tech',
      duration: '2018-2020',
      cpiOrPercent: '6.86',
    },
    {
      id: 2,
      collegeOrSchool:
        'Shri Shankaracharya Group of Institutions(SSGI), Bhilai/CSVTU',
      degree: 'BE(CSE)',
      duration: '2014-2018',
      cpiOrPercent: '8.71',
    },
    {
      id: 3,
      collegeOrSchool: 'D.A.V. Public School, SECL Gevra Project (C.G.)',
      degree: 'CBSE',
      duration: '2013-2014',
      cpiOrPercent: '86.8%',
    },
    {
      id: 4,
      collegeOrSchool: 'D.A.V. Public School, SECL Gevra Project (C.G.)',
      degree: 'CBSE',
      duration: '2011-2012',
      cpiOrPercent: '9.4',
    },
  ],
};
export default info;
