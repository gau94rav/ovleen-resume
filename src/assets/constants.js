import PhoneIcon from "vue-material-design-icons/Phone.vue";
import MapIcon from "vue-material-design-icons/MapMarkerAccountOutline.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";

export const ProfileData = [
  {
    id: "phone",
    icon: PhoneIcon,
    text: "9103582661",
  },
  {
    id: "map",
    icon: MapIcon,
    text: "Gurdaspur, Punjab (India)",
  },
  {
    id: "email",
    icon: EmailIcon,
    text: "ovleenkaur11@gmail.com",
  },
];

export const EducationData = [
  {
    id: "mtech",
    title: "MTech in Biotechnology",
    items: [
      {
        id: "pu",
        title: "(August 2017 - August 2019)",
        text: "Punjab University, Chandigarh",
      },
      {
        id: "project",
        title: "Project",
        text: "Analysis of Novel variants Involved In Lung-Adenocarcinoma by using Next-generation Sequencing Technology",
      },
    ],
    has_seperator: true,
  },
  {
    id: "btech",
    title: "BTech in Biotechnology",
    items: [
      {
        id: "shoolini",
        title: "(July 2013 - July 2017)",
        text: "Shoolini University, Solan (H.P)",
      },
      {
        id: "project-1",
        title: "Project",
        text: "PCR based genetic marker for detection of leptospirosis",
      },
    ],
    has_seperator: false,
  },
];

export const CertData = [
  {
    id: "rpaper",
    title: "Published a Review Paper",
    subtext: "(22nd Oct 2021)",
    items: [
      {
        id: "paper-1",
        text: " The Genomic Landscape of Lung Adenocarcinoma- Insights Towards Personalized Medicine” in PINSA-Springer Journal",
      },
    ],
  },
];

export const KeySkills = [
  "Adaptability",
  "Creativity",
  "MS Office",
  "Research & Analytical",
  "Teaching",
];

export const InterestsData = [
  "Cooking",
  "Exploring new places",
  "Gardening",
  "Music",
];

export const WorkData = [
  {
    id: "research-1",
    title: "Research Analyst",
    subtext: "Translab Technologies",
    dates: {
      start: "31-12-2022",
      end: "31-12-2023",
    },
    roles: [
      "Conducted primary research to collect data from various sources, including white papers, research reports, and online databases.",
      "Communicated research findings to team members through presentations, reports, and other mediums.",
      "Stayed up-to-date on industry trends and developments through ongoing research and analysis",
    ],
  },
  {
    id: "research-2",
    title: "Research Analyst",
    subtext: "Translab Technologies",
    dates: {
      start: "31-10-2021",
      end: "31-12-2022",
    },
    roles: [
      "Conducted in-depth research on 150+ global companies to gather data and insights for multiple projects aimed at supporting decision-making.",
      "Played a key role in the development of a chatbot, working closely with the development team to design and test its functionality and usability",
      "Collaborated with cross-functional teams to develop new product lines, contributing to the ideation, design, and implementation phases.",
      "Created website content such as FAQs, blogs, stories, and other written materials to engage audiences and enhance the website's SEO.",
      "Conducted extensive market research on India to gather insights and identify opportunities for the project's growth and expansion.",
      "Provided valuable assistance in the creation of a website symptom checker, using expertise and skills to support the project's successful development.",
    ],
  },
  {
    id: "lecturer-1",
    title: "Contractual Lecturer – Department of Biotechnology",
    subtext: "Govt. College For Women Parade Ground, Jammu",
    dates: {
      start: "15-3-2024",
      end: "31-5-2024",
    },
    roles: [
      "Taught core subjects related to Biotechnology, such as Enzyme Technology, Bioprocess Technology and Basics Of Computer Science.",
      "Designed and delivered engaging lessons and practical sesssions to undergraduate students, ensuring deep understanding of key concepts.",
      "Prepared and maintained course materials including syllabi, Presentations, and Assignments",
      "Maintained attendance records and ensured compliance with institutional policies regarding student participation.",
      "Kept up to date with advancements in the biotechnology field and updated the curriculum accordingly to reflect current trends.",
      "Participated in departmental meetings and collaborated with colleagues to improve teaching strategy and course content.",
    ],
  },
];
