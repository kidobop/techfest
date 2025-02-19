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
    schedule: [{ time: "1:30 PM", activity: "Registration" }],
    venue: "Software Lab 1, CT Block",
    coordinators: [{ name: "Anas Shaikh", contact: "6235103900" }],
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
    venue: "Software Lab 1, CT Block",
    schedule: [{ time: "3:30 PM", activity: "Registration" }],
    coordinators: [{ name: "Gautham Krishna", contact: "+91 9526774396" }],
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
    `,
    schedule: [{ time: "2:30 PM", activity: "Registration" }],
    venue: "CCF Lab, CT Block",
    coordinators: [{ name: "Joyal", contact: "8848334058" }],
  },
  {
    id: "pes",
    eventname: "PES",
    description: "Join this event to showcase your skills in a PES match.",
    date: "Feb 24, 2025 - 2:30 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/IMG-20250216-WA0154.jpg?updatedAt=1739728981917",
    registerUrl: "https://forms.gle/5CHWDRYoRMh9LyYP8",
    schedule: [{ time: "2:30 PM", activity: "Event Starts" }],
    venue: "Classroom 601, CT Block",
    coordinators: [{ name: "Kiran", contact: "9947084256" }],
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
    schedule: [{ time: "1:30 PM", activity: "Event Starts" }],
    venue: "CCF Lab, CT Block",
    coordinators: [{ name: "Alan PS", contact: "6238393020" }],
  },
  {
    id: "hackathon-and-idea-pitching",
    eventname: "InnovateX Idea Pitching",
    description: "Participate in a idea and pitch your innovative ideas.",
    date: "Feb 25, 2025 - 9:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/36776798_8467755.png?updatedAt=1739758889014",
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe3ZVHJvn2R5FH_-NZ6J7NaQqfjRBuOM107pw0KpscqFpeI6A/viewform",
    fullDescription: `Join us for an exciting hackathon where you can showcase your
    innovative ideas and technical skills. This event includes:
    - Real world problem solving challenge
    - Mentorship sessions
    - Pitch presentation
    - Networking opportunities`,
    schedule: [
      { time: "9:00 PM", activity: "Registration" },
      { time: "10:00 PM", activity: "Ideathon Begin" },
      { time: "3:00 PM", activity: "Event Closes" },
    ],
    venue: "Room 601, CT Block",
    coordinators: [{ name: "Nabeel", contact: "9207174577" }],
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
    - Award ceremony`,
    schedule: [{ time: "9:00 AM", activity: "Registration" }],
    venue: "Software Lab 1, CT Black",
    coordinators: [{ name: "Gautham", contact: "9526774396" }],
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
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Classroom 602, CT Block",
    coordinators: [{ name: "Amal babu", contact: "7902819431" }],
  },
  {
    id: "workshop",
    eventname: "Gamick",
    description: "Javascript Game Development Workshop.",
    date: "Feb 25, 2025 - 9:00 AM - 1:00 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_16-40-35-502.jpg?updatedAt=1739728982173",
    registerUrl: "https://forms.gle/CDEo1zsG6moai7vB8",
    fullDescription: `- This workshop has a duration of 4 hours and covers the basics of 2D game development.
 - Participants will learn essential concepts such as player movement, collision detection, and adding score mechanisms.
- The workshop also includes a session on deploying games on the internet.`,
    schedule: [{ time: "9:00 AM", activity: "Event Starts" }],
    venue: "CCF Lab, CT Block",
    coordinators: [{ name: "Alan PS", contact: "6238393020" }],
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
    `,
    schedule: [{ time: "9:00 AM", activity: "Registration" }],
    venue: "Room 603, CT Block",
    coordinators: [{ name: "Thomas", contact: "7994930867" }],
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
    - Mehndi challenges`,
    schedule: [
      { time: "11:00 AM", activity: "Registration" },
      { time: "11:30 AM", activity: "Mehndi Challenge Begins" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Room 601, CT Block",
    coordinators: [{ name: "Uthara", contact: "9605703562" }],
  },
  {
    id: "website-design",
    eventname: "Website Design",
    description: "Showcase your web design skills in this competitive event.",
    date: "Feb 25, 2025 - 11:00 AM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-16_19-34-18-055.jpg?updatedAt=1739728982165",
    registerUrl: "https://forms.gle/rDQnbKcmQSab5xWYA",
    fullDescription: `Participate in a website design competition where you can showcase your creativity and technical skills. This event includes:
    - Design challenges
    - Feedback Session
    - Award ceremony`,
    schedule: [
      { time: "10:30 AM", activity: "Registration" },
      { time: "11:00 AM", activity: "Design Challenge Begins" },
      { time: "1:00 PM", activity: "Feedback Session" },
      { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    venue: "Software Lab 1, CT Block",
    coordinators: [{ name: "Aaqil Fazil", contact: "9447676692" }],
  },
  {
    id: "fun-games",
    eventname: "Fun Games",
    description: "Enjoy a variety of fun games and activities.",
    date: "Feb 25, 2025 - 9:00 AM - 1:00 PM",
    imageUrl:
      "https://ik.imagekit.io/dvz2h68tj/Posters/Picsart_25-02-15_18-17-30-025.jpg?updatedAt=1739728982651",
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfjQ_q5iX27XGzyOkluMuAPIG71cr-8LPECNEDv3BcCK3AIbQ/viewform?usp=dialog",
    fullDescription: `Join us for a day of fun games and activities. This event includes:
    - Various fun games
    - Exciting activities
    - Award ceremony`,
    schedule: [
      { time: "9:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Fun Games Begin" },
      { time: "1:00 PM", activity: "Event Closes" },
    ],
    venue: "Seminar Hall",
    coordinators: [{ name: "Athul Krishna", contact: "9207630233" }],
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
    venue: "Room 602",
    coordinators: [{ name: "Vivek", contact: "7034204886" }],
  },
];

export default eventsData;
