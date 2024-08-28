export const DetailCourse = [
  {
    id: "1124142",
    slug: "mastering-python-for-data-science",
    title: "Mastering Python for Data Science",
    description:
      "Become proficient in Python programming and its applications in data science. This course covers data manipulation, analysis, visualization, and machine learning using Python libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn.",
    category: ["Python", "Data Science", "Machine Learning", "Backend"],
    lecture_type: "pre-recorded",
    level: "Intermediate",
    duration: "20 Hours",
    instructor: {
      name: "Dr. Sarah Johnson",
      picture: "",
      position: "Data Scientist",
      company: "Data Insights Corp",
      courses: ["Mastering Python for Data Science", "Advanced Data Analysis"],
    },
    stages: [
      {
        id: "1412522",
        title: "Getting Started with Python",
        slug: "getting-started-with-python",
        progress: 100,
        details: [
          {
            id: "142113",
            title: "Introduction to Python",
            slug: "introduction-to-python",
            is_watched: true,
            is_playing: false,
            is_locked: false,
            duration: "10:00",
            video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
            comments: [
              {
                id: "2353",
                name: "James",
                text: "Great introduction! Very clear and easy to follow.",
                likes: 15,
                replies: 1,
                detail_replies: [],
                createdAt: "2024-08-26T08:30:00Z",
              },
            ],
            files: [
              {
                title: "Python Basics Slide Deck",
                url: "https://www.example.com/python-basics.pdf",
              },
            ],
          },
          {
            id: "142114",
            title: "Data Structures in Python",
            slug: "data-structures-in-python",
            is_watched: true,
            is_playing: false,
            is_locked: false,
            duration: "12:00",
            video: "https://www.youtube.com/watch?v=egw2H4SnQXU",
            comments: [
              {
                id: "2354",
                name: "Emily",
                text: "Struggled a bit with lists and dictionaries, but the examples really helped.",
                likes: 10,
                replies: 3,
                detail_replies: [
                  {
                    id: "35513",
                    name: "John",
                    text: "Practice is key, keep going!",
                    likes: 5,
                    createdAt: "2024-08-26T09:00:00Z",
                  },
                ],
                createdAt: "2024-08-26T08:45:00Z",
              },
            ],
            files: [
              {
                title: "Data Structures Cheat Sheet",
                url: "https://www.example.com/python-data-structures.pdf",
              },
            ],
          },
          {
            id: "142115",
            title: "Functions and Modules",
            slug: "functions-and-modules",
            is_watched: true,
            is_playing: false,
            is_locked: false,
            duration: "15:00",
            video: "https://www.youtube.com/watch?v=HfbcYLtI4zc",
            comments: [
              {
                id: "2355",
                name: "Michael",
                text: "Can someone explain how to pass arguments to functions?",
                likes: 8,
                replies: 2,
                createdAt: "2024-08-26T10:00:00Z",
              },
            ],
            files: [
              {
                title: "Functions and Modules Notes",
                url: "https://www.example.com/python-functions.pdf",
              },
            ],
          },
        ],
      },
      {
        id: "14123",
        title: "Intermediate Python Programming",
        slug: "intermediate-python-programming",
        progress: 40,
        details: [
          {
            id: "142116",
            title: "Object-Oriented Programming",
            slug: "object-oriented-programming",
            is_watched: true,
            is_playing: false,
            is_locked: false,
            duration: "20:00",
            video: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
            comments: [
              {
                id: "2356",
                name: "Sophia",
                text: "Finally starting to understand OOP concepts!",
                likes: 12,
                replies: 2,
                detail_replies: [],
                createdAt: "2024-08-26T11:00:00Z",
              },
            ],
            files: [
              {
                title: "OOP Overview",
                url: "https://www.example.com/python-oop.pdf",
              },
            ],
          },
          {
            id: "142117",
            title: "Error Handling and Exceptions",
            slug: "error-handling-and-exceptions",
            is_watched: false,
            is_playing: true,
            is_locked: false,
            duration: "18:00",
            video: "https://www.youtube.com/watch?v=NIWwJbo-9_8",
            comments: [
              {
                id: "2357",
                name: "Liam",
                text: "The examples were helpful, but exceptions still confuse me sometimes.",
                likes: 9,
                replies: 1,
                detail_replies: [
                  {
                    id: "35514",
                    name: "Emma",
                    text: "Don't worry, just keep practicing!",
                    likes: 4,
                    createdAt: "2024-08-26T11:30:00Z",
                  },
                ],
                createdAt: "2024-08-26T11:15:00Z",
              },
            ],
            files: [
              {
                title: "Error Handling Cheat Sheet",
                url: "https://www.example.com/python-error-handling.pdf",
              },
            ],
          },
          {
            id: "142118",
            title: "Working with Files",
            slug: "working-with-files",
            is_watched: false,
            is_playing: false,
            is_locked: true,
            duration: "22:00",
            video: "https://www.youtube.com/watch?v=U3weB_Mt90c",
            comments: [],
            files: [
              {
                title: "File Handling Guide",
                url: "https://www.example.com/python-file-handling.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: "1124143",
  //   slug: "react-and-redux-for-modern-web-development",
  //   title: "React and Redux for Modern Web Development",
  //   description:
  //     "Build dynamic web applications using React and Redux. This course covers the fundamentals of React, component-based architecture, state management with Redux, and deploying web apps to the cloud.",
  //   category: ["React", "Redux", "Frontend", "Fullstack"],
  //   lecture_type: "pre-recorded",
  //   level: "Intermediate",
  //   duration: "20 Hours",
  //   instructor: {
  //     name: "Alex Turner",
  //     picture: "",
  //     position: "Fullstack Developer",
  //     company: "WebDev Masters",
  //     courses: ["React and Redux for Modern Web Development", "Advanced React"],
  //   },
  //   stages: [
  //     {
  //       id: "14123",
  //       title: "React Basics",
  //       progress: 75,
  //       details: [
  //         {
  //           id: "142116",
  //           title: "Introduction to React",
  //           is_watched: true,
  //           is_playing: false,
  //           is_locked: false,
  //           duration: "8:00",
  //           video: "https://www.youtube.com/watch?v=DLX62G4lc44",
  //           comments: [
  //             {
  //               id: "2356",
  //               name: "Sophia",
  //               text: "Awesome introduction, really excited to learn more!",
  //               likes: 20,
  //               replies: 2,
  //               createdAt: "2024-08-26T11:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "React Basics Slide Deck",
  //               url: "https://www.example.com/react-basics.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142117",
  //           title: "State and Props",
  //           is_watched: false,
  //           is_playing: false,
  //           is_locked: true,
  //           duration: "14:00",
  //           video: "https://www.youtube.com/watch?v=7fPXI_MnBOY",
  //           comments: [
  //             {
  //               id: "2357",
  //               name: "Liam",
  //               text: "Props are a bit confusing, but the examples help.",
  //               likes: 12,
  //               replies: 3,
  //               detail_replies: [
  //                 {
  //                   id: "35514",
  //                   name: "Emma",
  //                   text: "It gets easier with practice, keep at it!",
  //                   likes: 7,
  //                   createdAt: "2024-08-26T11:30:00Z",
  //                 },
  //                 {
  //                   id: "35514",
  //                   name: "Enma",
  //                   text: "It gets easier with practice, keep at it!sdfada",
  //                   likes: 7,
  //                   createdAt: "2024-08-26T11:30:00Z",
  //                 },
  //               ],
  //               createdAt: "2024-08-26T11:15:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "State and Props Reference",
  //               url: "https://www.example.com/react-state-props.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142118",
  //           title: "Handling Events in React",
  //           is_watched: false,
  //           is_playing: true,
  //           is_locked: false,
  //           duration: "10:00",
  //           video: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
  //           comments: [
  //             {
  //               id: "2358",
  //               name: "Oliver",
  //               text: "Is there a way to handle multiple events in one function?",
  //               likes: 10,
  //               replies: 1,
  //               detail_replies: [],
  //               createdAt: "2024-08-26T12:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Event Handling in React",
  //               url: "https://www.example.com/react-events.pdf",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "1124144",
  //   slug: "data-structures-and-algorithms-in-java",
  //   title: "Data Structures and Algorithms in Java",
  //   description:
  //     "Learn essential data structures and algorithms in Java. This course is designed for developers who want to enhance their problem-solving skills and prepare for coding interviews.",
  //   category: ["Java", "Algorithms", "Data Structures", "Backend"],
  //   lecture_type: "pre-recorded",
  //   level: "Intermediate",
  //   duration: "20 Hours",
  //   instructor: {
  //     name: "David Kim",
  //     picture: "",
  //     position: "Software Engineer",
  //     company: "Tech Solutions Ltd.",
  //     courses: ["Data Structures and Algorithms in Java", "Java Masterclass"],
  //   },
  //   stages: [
  //     {
  //       id: "14124",
  //       title: "Introduction to Data Structures",
  //       progress: 60,
  //       details: [
  //         {
  //           id: "142119",
  //           title: "Arrays and Linked Lists",
  //           is_watched: true,
  //           is_playing: false,
  //           is_locked: false,
  //           duration: "20:00",
  //           video: "https://www.youtube.com/watch?v=ZBdE8DElQQU",
  //           comments: [
  //             {
  //               id: "2359",
  //               name: "Daniel",
  //               text: "This was a great overview of arrays and linked lists!",
  //               likes: 22,
  //               replies: 2,
  //               createdAt: "2024-08-26T13:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Arrays and Linked Lists Slides",
  //               url: "https://www.example.com/java-arrays-linked-lists.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142120",
  //           title: "Stacks and Queues",
  //           is_watched: false,
  //           is_playing: true,
  //           is_locked: false,
  //           duration: "18:00",
  //           video: "https://www.youtube.com/watch?v=wjI1WNcIntg",
  //           comments: [
  //             {
  //               id: "2360",
  //               name: "Mia",
  //               text: "Can someone clarify the difference between stacks and queues?",
  //               likes: 14,
  //               replies: 2,
  //               detail_replies: [
  //                 {
  //                   id: "35515",
  //                   name: "Jack",
  //                   text: "Think of a stack as a stack of plates and a queue as a line of people.",
  //                   likes: 9,
  //                   createdAt: "2024-08-26T13:30:00Z",
  //                 },
  //               ],
  //               createdAt: "2024-08-26T13:15:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Stacks and Queues Reference",
  //               url: "https://www.example.com/java-stacks-queues.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142121",
  //           title: "Trees and Graphs",
  //           is_watched: false,
  //           is_playing: false,
  //           is_locked: true,
  //           duration: "25:00",
  //           video: "https://www.youtube.com/watch?v=9RHO6jU--GU",
  //           comments: [
  //             {
  //               id: "2361",
  //               name: "Sophia",
  //               text: "Are there any real-world applications of graphs?",
  //               likes: 17,
  //               replies: 3,
  //               createdAt: "2024-08-26T14:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Trees and Graphs Notes",
  //               url: "https://www.example.com/java-trees-graphs.pdf",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "1124145",
  //   slug: "fullstack-web-development-with-nodejs-and-express",
  //   title: "Fullstack Web Development with Node.js and Express",
  //   description:
  //     "Learn how to build scalable web applications using Node.js and Express. This course covers backend development, RESTful API design, database integration, and deployment.",
  //   category: ["Node.js", "Express", "Backend", "Fullstack"],
  //   lecture_type: "pre-recorded",
  //   level: "Intermediate",
  //   duration: "20 Hours",
  //   instructor: {
  //     name: "Emma Watson",
  //     picture: "",
  //     position: "Senior Backend Developer",
  //     company: "DevXpert Solutions",
  //     courses: [
  //       "Fullstack Web Development with Node.js and Express",
  //       "RESTful APIs with Node.js",
  //     ],
  //   },
  //   stages: [
  //     {
  //       id: "14125",
  //       title: "Setting Up the Development Environment",
  //       progress: 85,
  //       details: [
  //         {
  //           id: "142122",
  //           title: "Introduction to Node.js",
  //           is_watched: true,
  //           is_playing: false,
  //           is_locked: false,
  //           duration: "10:00",
  //           video: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
  //           comments: [
  //             {
  //               id: "2362",
  //               name: "Olivia",
  //               text: "Node.js seems really powerful! Looking forward to learning more.",
  //               likes: 19,
  //               replies: 1,
  //               detail_replies: [],
  //               createdAt: "2024-08-26T15:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Node.js Installation Guide",
  //               url: "https://www.example.com/nodejs-installation.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142123",
  //           title: "Understanding Express.js",
  //           is_watched: false,
  //           is_playing: true,
  //           is_locked: false,
  //           duration: "12:00",
  //           video: "https://www.youtube.com/watch?v=L72fhGm1tfE",
  //           comments: [
  //             {
  //               id: "2363",
  //               name: "Ethan",
  //               text: "Express.js makes routing so much easier!",
  //               likes: 16,
  //               replies: 2,
  //               detail_replies: [
  //                 {
  //                   id: "35516",
  //                   name: "Sophia",
  //                   text: "Absolutely, it's a game-changer for backend development.",
  //                   likes: 10,
  //                   createdAt: "2024-08-26T15:30:00Z",
  //                 },
  //               ],
  //               createdAt: "2024-08-26T15:15:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Express.js Quickstart",
  //               url: "https://www.example.com/expressjs-quickstart.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142124",
  //           title: "Building RESTful APIs",
  //           is_watched: false,
  //           is_playing: false,
  //           is_locked: true,
  //           duration: "20:00",
  //           video: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  //           comments: [
  //             {
  //               id: "2364",
  //               name: "Ava",
  //               text: "Is there a way to handle errors in Express gracefully?",
  //               likes: 14,
  //               replies: 2,
  //               createdAt: "2024-08-26T16:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "RESTful API Design Guide",
  //               url: "https://www.example.com/restful-api-design.pdf",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "1124146",
  //   slug: "ad",
  //   title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
  //   description:
  //     "Master modern CSS and Sass to create stunning websites. This course covers Flexbox, CSS Grid, animations, and responsive design. You'll learn how to build visually appealing and mobile-friendly web pages.",
  //   category: ["CSS", "Sass", "Frontend", "Design"],
  //   lecture_type: "pre-recorded",
  //   level: "Intermediate",
  //   duration: "20 Hours",
  //   instructor: {
  //     name: "Rachel Green",
  //     picture: "",
  //     position: "UI/UX Designer",
  //     company: "Creative Web Studio",
  //     courses: [
  //       "Advanced CSS and Sass: Flexbox, Grid, Animations",
  //       "Responsive Web Design",
  //     ],
  //   },
  //   stages: [
  //     {
  //       id: "14126",
  //       title: "CSS Fundamentals",
  //       progress: 90,
  //       details: [
  //         {
  //           id: "142125",
  //           title: "Flexbox Layout",
  //           is_watched: true,
  //           is_playing: false,
  //           is_locked: false,
  //           duration: "15:00",
  //           video: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
  //           comments: [
  //             {
  //               id: "2365",
  //               name: "Charlotte",
  //               text: "Flexbox is amazing! It really simplifies layout design.",
  //               likes: 23,
  //               replies: 1,
  //               detail_replies: [],
  //               createdAt: "2024-08-26T17:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "Flexbox Guide",
  //               url: "https://www.example.com/flexbox-guide.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142126",
  //           title: "CSS Grid Layout",
  //           is_watched: false,
  //           is_playing: true,
  //           is_locked: false,
  //           duration: "18:00",
  //           video: "https://www.youtube.com/watch?v=EFafSYg-PkI",
  //           comments: [
  //             {
  //               id: "2366",
  //               name: "Elijah",
  //               text: "Grid layout is so powerful! Thanks for the clear explanation.",
  //               likes: 21,
  //               replies: 3,
  //               detail_replies: [
  //                 {
  //                   id: "35517",
  //                   name: "Amelia",
  //                   text: "Once you get the hang of it, you'll love using CSS Grid!",
  //                   likes: 12,
  //                   createdAt: "2024-08-26T17:30:00Z",
  //                 },
  //               ],
  //               createdAt: "2024-08-26T17:15:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "CSS Grid Cheatsheet",
  //               url: "https://www.example.com/css-grid-cheatsheet.pdf",
  //             },
  //           ],
  //         },
  //         {
  //           id: "142127",
  //           title: "CSS Animations",
  //           is_watched: false,
  //           is_playing: false,
  //           is_locked: true,
  //           duration: "20:00",
  //           video: "https://www.youtube.com/watch?v=1z6v56Tx6KE",
  //           comments: [
  //             {
  //               id: "2367",
  //               name: "Benjamin",
  //               text: "The animation techniques here are mind-blowing!",
  //               likes: 25,
  //               replies: 2,
  //               createdAt: "2024-08-26T18:00:00Z",
  //             },
  //           ],
  //           files: [
  //             {
  //               title: "CSS Animation Examples",
  //               url: "https://www.example.com/css-animations.pdf",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
