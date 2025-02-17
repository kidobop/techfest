const eventsData = [
  {
    id: "cyber-hunt",
    eventname: "Cyber Hunt",
    description: "Test your knowledge in an exciting IT quiz competition.",
    date: "Feb 24, 2025 - 1:30 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/WhatsApp%20Image%202025-02-15%20at%2017.55.06_c03cb16a.jpg?updatedAt=1739814833633",
    registerUrl: "https://tinyurl.com/55y72jms",
    fullDescription: `Join us for an exciting IT quiz competition where you can test your knowledge and win exciting prizes. This event includes:
    - Multiple rounds of quizzes
    - Expert judges
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Quiz Round 1" },
      { time: "11:00 AM", activity: "Quiz Round 2" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Final Round" },
      { time: "2:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Auditorium, Room 101",
    coordinators: [
      { name: "Charlie Davis", contact: "charlie@example.com" },
      { name: "Daisy Miller", contact: "daisy@example.com" },
    ],
  },
  {
    id: "hack-and-seek",
    eventname: "Hack and Seek",
    description:
      "Solve puzzles and escape the room in this thrilling challenge.",
    date: "Feb 24, 2025 - 3:30 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0200.jpg?updatedAt=1739728982178",
    registerUrl: "https://forms.gle/KrVWUyt2iUHaknt79",
  },
  {
    id: "e-games",
    eventname: "E-Games",
    description: "Compete in various e-games and show off your gaming skills.",
    date: "Feb 24, 2025 - 3:00 AM",
    imageUrl: "/900.jpg",
    registerUrl: "https://example.com/e-games",
    fullDescription: `Join us for an exciting e-games competition where you can showcase your gaming skills. This event includes:
    - Multiple gaming challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Gaming Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Gaming Room, Room 606",
    coordinators: [
      { name: "Ivy Red", contact: "ivy@example.com" },
      { name: "Jack Yellow", contact: "jack@example.com" },
    ],
  },
  {
    id: "fast-typing",
    eventname: "TypeXpress",
    description:
      "Test your typing speed in this fast-paced typing competition.",
    date: "Feb 24, 2025 - 2:30 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0174.jpg?updatedAt=1739728981999",
    registerUrl: "https://forms.gle/xkj2j31sw5QNwJoN6",
    fullDescription: `Join us for an exciting fast-typing competition where you can test your typing speed. This event includes:
    - Typing challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Typing Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Typing Room, Room 909",
    coordinators: [
      { name: "Olivia White", contact: "olivia@example.com" },
      { name: "Peter Green", contact: "peter@example.com" },
    ],
  },
  {
    id: "pes",
    eventname: "PES",
    description:
      "Join this event to showcase your skills in a specific domain.",
    date: "Feb 24, 2025 - 2:30 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0154.jpg?updatedAt=1739728981917",
    registerUrl: "https://forms.gle/5CHWDRYoRMh9LyYP8",
  },
  {
    id: "dashdog",
    eventname: "Dashdog",
    description:
      "Compete in a fast-paced challenge to test your agility and speed.",
    date: "Feb 24, 2025 - 1:30 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/WhatsApp%20Image%202025-02-17%20at%2018.13.20_17d40d9b.jpg?updatedAt=1739816266776",
    registerUrl: "https://forms.gle/gxW4B7mw6PnmoCUo6",
  },
  {
    id: "crack-the-code",
    eventname: "Crack the Code",
    description:
      "Put your problem-solving skills to the test with various puzzles.",
    date: "Feb 25, 2025 - 9:30 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0201(1).jpg?updatedAt=1739728982003",
    registerUrl: "https://forms.gle/CW1HnofpmHsdZvmX7",
    fullDescription: `Join us for an exciting puzzle-solving competition where you can test your problem-solving skills. This event includes:
    - Multiple puzzle challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Puzzle Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Puzzle Room, Room 505",
    coordinators: [
      { name: "Grace Green", contact: "grace@example.com" },
      { name: "Henry Blue", contact: "henry@example.com" },
    ],
  },
  {
    id: "spot-photography",
    eventname: "Spot Photography",
    description:
      "Capture the moment in this on-the-spot photography competition.",
    date: "Feb 25, 2025 - 9:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/WhatsApp%20Image%202025-02-15%20at%2019.02.50_8daa0dcc.jpg?updatedAt=1739814811612",
    registerUrl: "https://forms.gle/KzM9vAYQBRYXJzsg6",
    fullDescription: `Join us for an exciting on-the-spot photography competition where you can capture the moment. This event includes:
    - Photography challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Photography Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Photography Room, Room 808",
    coordinators: [
      { name: "Mia Pink", contact: "mia@example.com" },
      { name: "Nolan Brown", contact: "nolan@example.com" },
    ],
  },
  {
    id: "workshop",
    eventname: "Gamick",
    description: "Javascript Game Development Workshop.",
    date: "Feb 25, 2025 - 9:00 AM - 1:00 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_16-40-35-502.jpg?updatedAt=1739728982173",
    registerUrl: "https://forms.gle/CDEo1zsG6moai7vB8",
  },
  {
    id: "cube",
    eventname: "Cube Conquest",
    description:
      "Solve the Rubik's Cube as fast as you can in this speed challenge.",
    date: "Feb 25, 2025 - 10:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0191.jpg?updatedAt=1739728982008",
    registerUrl: "https://forms.gle/8rAwXSeHqs317UfP8",
    fullDescription: `Join us for an exciting Rubik's Cube speed challenge where you can solve the Rubik's Cube as fast as you can. This event includes:
    - Speed challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Speed Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Rubik's Cube Room, Room 1010",
    coordinators: [
      { name: "Quinn Blue", contact: "quinn@example.com" },
      { name: "Rachel Red", contact: "rachel@example.com" },
    ],
  },
  {
    id: "mehndi",
    eventname: "Mehndi",
    description:
      "Showcase your artistic skills in this traditional Mehndi competition.",
    date: "Feb 25, 2025 - 11:30 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_17-14-39-353.png?updatedAt=1739728982776",
    registerUrl: "https://forms.gle/5Y5qw1bGLyFxowm4A",
    fullDescription: `Join us for an exciting Mehndi competition where you can showcase your artistic skills. This event includes:
    - Mehndi challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Mehndi Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Mehndi Room, Room 1111",
    coordinators: [
      { name: "Sophia Green", contact: "sophia@example.com" },
      { name: "Thomas Brown", contact: "thomas@example.com" },
    ],
  },
  {
    id: "website-design",
    eventname: "Website Design",
    description: "Showcase your web design skills in this competitive event.",
    date: "Feb 25, 2025 - 11:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-16_19-34-18-055.jpg?updatedAt=1739728982165",
    registerUrl: "https://example.com/website-design",
    fullDescription: `Participate in a website design competition where you can showcase your creativity and technical skills. This event includes:
    - Design challenges
    - Expert feedback
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Design Challenge Begins" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Expert Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Design Studio, Room 202",
    coordinators: [
      { name: "Alice Johnson", contact: "alice@example.com" },
      { name: "Bob Brown", contact: "bob@example.com" },
    ],
  },
  {
    id: "fun-games",
    eventname: "Fun Games",
    description: "Enjoy a variety of fun games and activities.",
    date: "Feb 25, 2025 - 9:00 AM - 1:00 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_18-17-30-025.jpg?updatedAt=1739728982651",
    registerUrl: "/dept/computer-engineering/fun-games",
    fullDescription: `Join us for a day of fun games and activities. This event includes:
    - Various fun games
    - Exciting activities
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Fun Games Begin" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Fun Room, Room 707",
    coordinators: [
      { name: "Kelly Orange", contact: "kelly@example.com" },
      { name: "Liam Purple", contact: "liam@example.com" },
    ],
  },
  {
    id: "freefire",
    eventname: "Freefire",
    description:
      "Compete in a Freefire gaming tournament and show off your skills.",
    date: "Feb 25, 2025 - 1:00 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250214-WA0018.jpg?updatedAt=1739728982007",
    registerUrl: "https://forms.gle/5kzHvZZDAmcF7uJ19",
  },
  {
    id: "hackathon-and-idea-pitching",
    eventname: "Hackathon and Idea Pitching",
    description: "Participate in a hackathon and pitch your innovative ideas.",
    date: "Feb 25, 2025 - 9:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/36776798_8467755.png?updatedAt=1739758889014",
    registerUrl: "https://example.com/hackathon",
    fullDescription: `Join us for an exciting hackathon where you can showcase your
    innovative ideas and technical skills. This event includes:
    - 24-hour coding challenge
    - Mentorship sessions
    - Pitch presentation
    - Networking opportunities`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Opening Ceremony" },
      { time: "11:00 AM", activity: "Hacking Begins" },
    ],
    venue: "Engineering Block, Room 301",
    coordinators: [
      { name: "John Doe", contact: "john@example.com" },
      { name: "Jane Smith", contact: "jane@example.com" },
    ],
  },
];

export default eventsData;
