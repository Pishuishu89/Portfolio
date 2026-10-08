// All site content lives here. Edit this file to update the site.
// You shouldn't need to touch the components.
// Images go in /public/images and are referenced by file name.

export const profile = {
  name: 'Ishaan Das-Basak',
  role: 'Analytics · BI · Product',
  location: 'Scarborough, Ontario',
  email: 'ishaandasbasak@gmail.com',
  linkedin: 'https://linkedin.com/in/ishaan-das-basak',
  github: 'https://github.com/Pishuishu89',
  intro:
    'Fourth-year Software Engineering (Big Data) student at York University. I work where data, systems and business decisions meet, building reporting people actually use and understanding the pipelines behind it.',
  stats: [
    { value: '1×', label: 'hackathon winner' },
    { value: '3', label: 'analytics roles' },
    { value: '7', label: 'certifications' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a fourth-year Software Engineering (Big Data) student at the Lassonde School of Engineering, York University, and I work where data, systems and business decisions meet.",
    "At Kao Canada I built the Power BI dashboards the sales team used for pricing strategy, competitive analysis and retail performance tracking, plus Excel reporting and Power Automate workflows that took recurring reports off people's plates. I'm now joining Irving Consumer Products as a Business Intelligence Analyst Co-op, continuing my work in CPG.",
    "My strength is turning messy data into reporting people actually use, and understanding the pipelines behind it, not just the final dashboard.",
  ],
  lookingFor: {
    title: 'What I want to do next',
    text: 'Business and analyst roles in CPG (sales, category or commercial analytics) where my engineering background helps teams make faster, sharper decisions. I also want to try product management and product analytics: figuring out what to build, measuring whether it worked, and working with engineers to ship it.',
    tags: ['Sales analytics', 'Category analytics', 'Commercial analytics', 'Product management', 'Product analytics'],
  },
};

export const experience = [
  {
    company: 'Irving Consumer Products',
    role: 'Business Intelligence Analyst Co-op',
    period: 'Incoming · Winter 2027',
    points: ['Incoming Business Intelligence Analyst Co-op, continuing my work in the CPG space.'],
    tags: ['Business Intelligence', 'Power BI', 'SQL', 'CPG'],
  },
  {
    company: 'Kao Canada',
    role: 'Sales Analyst Intern',
    period: '', // add dates, e.g. 'May 2025 to Aug 2026'
    points: [
      'Built Power BI dashboards the sales team used for pricing strategy, competitive analysis and retail performance tracking, fed from SAP BW via Analysis for Office.',
      'Built Excel reporting with PivotTables, Power Query and VBA, and automated recurring reporting workflows with Power Automate.',
      'Worked with NielsenIQ, Circana and Numerator syndicated data, and built a Copilot Studio agent grounded in internal policy documentation.',
      'Wrote handover documentation so incoming interns could own the reporting pipelines.',
    ],
    tags: ['Power BI', 'SAP BW / AFO', 'Excel / VBA', 'Power Automate', 'Copilot Studio'],
    links: [
      { label: 'Sales Drilldown dashboard', url: 'https://github.com/Pishuishu89/Sales-Drilldown-' },
      { label: 'Daily Sales Report pipeline', url: 'https://github.com/Pishuishu89/Daily-Sales-Report' },
    ],
  },
];

// category: 'ml' | 'data' | 'web', or a list like ['ml', 'data']. Used for the filter buttons.
export const projects = [
  {
    title: 'Retail Demand Forecasting',
    category: 'data',
    featured: true,
    description:
      'End-to-end forecasting on the Walmart M5 dataset. LightGBM (Tweedie) predicts 28-day demand across 3,000+ SKUs at 95% store-level accuracy, served through a Power BI star schema with forecast vs. actual monitoring and SKU drilldown. Claude MCP generates the DAX measures and documentation.',
    tags: ['Python', 'LightGBM', 'Power BI', 'DAX', 'MCP'],
    links: { code: 'https://github.com/Pishuishu89/Retail-Demand-Forecasting-Dashboard' },
    image: '',
  },
  {
    title: 'Live NBA Win Probability',
    category: ['ml', 'data'],
    featured: true,
    description:
      'Real-time win probability dashboard. A 1D CNN trained on 300,000+ play-by-play events streams predictions over Flask-SocketIO to a live Chart.js view.',
    tags: ['Python', '1D CNN', 'Flask-SocketIO', 'Chart.js', 'Render'],
    links: {
      demo: 'https://nba-win-probability.onrender.com',
      code: 'https://github.com/Pishuishu89/nba-win-probability',
    },
    image: '',
  },
  {
    title: 'SpeakEZ: ASL to English Glove',
    category: 'ml',
    featured: true,
    description:
      'Wearable glove that translates ASL to speech with flex sensors and an ESP32. A custom CNN trained on 150,000+ labelled readings hits 97.5% on static letters, with time-series inference over Wi-Fi and no cameras.',
    tags: ['ESP32', 'TensorFlow', 'Python', 'Vite'],
    links: { code: 'https://github.com/zen-karia/SpeakEz' },
    image: 'speakez.png',
  },
  {
    title: 'MacroMeals',
    category: 'web',
    description:
      'Team full-stack fitness app. I built the onboarding quiz with calorie and macro calculation, the friends system, recipe visibility rules and an 80-test pytest suite.',
    tags: ['Django', 'React Router v7', 'TypeScript', 'pytest'],
    links: { code: 'https://github.com/vinceflores/macromeals' },
    image: '',
  },
  {
    title: 'Credit Card Fraud Detection',
    category: 'ml',
    description:
      'Streamlit app comparing Logistic Regression, Random Forest and XGBoost on imbalanced fraud data, with interactive metrics and file uploads.',
    tags: ['scikit-learn', 'XGBoost', 'Streamlit'],
    links: {
      demo: 'https://credit-card-fraud-app-ew858uzdpnuepddsnovuqt.streamlit.app',
      code: 'https://github.com/Pishuishu89/credit-card-fraud-app',
    },
    image: '',
  },
  {
    title: 'WhoTheGOAT: NBA MVP Predictor',
    category: 'ml',
    description: 'Selenium-scraped stats feed a RandomForestRegressor (~1% MAE) behind a Flask UI.',
    tags: ['Python', 'Selenium', 'Random Forest', 'Flask'],
    links: {
      demo: 'https://pishuishu89.github.io/WhoTheGoat/',
      code: 'https://github.com/Pishuishu89/WhoTheGoat',
    },
    image: '',
  },
  {
    title: 'Plant Disease Classifier',
    category: 'ml',
    description:
      'TensorFlow CNN that separates healthy from diseased leaves, with a Streamlit front end and a Dockerized deploy.',
    tags: ['TensorFlow', 'Streamlit', 'Docker'],
    links: {
      demo: 'https://v6wcbgrfoydjmjysgicbe8.streamlit.app',
      code: '', // paste the GitHub repo URL here
    },
    image: 'plant-disease-classifier.png',
  },
  {
    title: 'Real-Time Squat Analyzer',
    category: 'ml',
    description: 'OpenCV + MediaPipe tool that tracks knee angle and gives live depth feedback.',
    tags: ['OpenCV', 'MediaPipe', 'Python'],
    links: { code: 'https://github.com/Pishuishu89/Depth_Checker' },
    image: 'squat-analyzer.png',
  },
  {
    title: 'Hackathon Fitness Tracker',
    category: 'web',
    description:
      'Full-stack fitness tracker with a heartbeat-to-text Arduino hack and nutrition data scraped with Python.',
    tags: ['React', 'Arduino', 'Python'],
    links: { code: 'https://github.com/artin59/CTRL-HACK-DEL' },
    image: 'fitness-app.png',
  },
  {
    title: 'Cyclistic Bike-Share Analysis',
    category: 'data',
    description: 'Exploratory analysis of Chicago bike-share trips to separate member and casual rider behaviour.',
    tags: ['pandas', 'Seaborn', 'Matplotlib'],
    links: { code: 'https://github.com/Pishuishu89/Cyclistic' },
    image: 'cyclistic.png',
  },
];

export const skills = [
  {
    group: 'BI & Analytics',
    items: ['Power BI', 'DAX', 'Power Query (M)', 'Data modelling', 'Excel / VBA', 'SAP BW / AFO'],
  },
  {
    group: 'Machine Learning',
    items: ['scikit-learn', 'LightGBM', 'XGBoost', 'PyTorch', 'TensorFlow / Keras'],
  },
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'Java', 'JavaScript / TypeScript', 'R'],
  },
  {
    group: 'Automation & Product',
    items: ['Power Automate', 'Power Apps', 'Copilot Studio', 'Jira / Agile', 'Flask', 'Django', 'React'],
  },
];

export const education = {
  school: 'York University',
  place: 'Lassonde School of Engineering · Toronto, ON',
  degree: 'B.Eng. Software Engineering, Big Data stream',
  period: 'Expected May 2027',
};

// Newest first. Add a url to make the row clickable.
export const certifications = [
  { name: 'Agile Project Management with Jira Cloud', issuer: 'LinkedIn', date: 'May 2026', url: '' },
  { name: 'Claude Code 101', issuer: 'Anthropic', date: 'Apr 2026', url: '' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'Apr 2026', url: '' },
  { name: 'Microsoft Power BI Data Analyst', issuer: 'Microsoft', date: 'Apr 2025', url: '' },
  { name: 'Foundations of Data Science', issuer: 'Google', date: 'Apr 2025', url: '' },
  { name: 'Google AI Essentials', issuer: 'Google', date: 'Apr 2025', url: 'https://www.credly.com/earner/earned/badge/ab70373a-76fe-4197-9cff-385398d9828a' },
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Coursera', date: 'Mar 2025', url: 'https://www.credly.com/earner/earned/badge/986d20b7-7e07-425f-bd60-ce76f514faec' },
];

export const involvement = [
  { role: 'Senior Member', org: 'Bethune College Council', period: 'Sep 2025 to Apr 2026', note: 'Bethune Athletics' },
  { role: 'Logistics Executive', org: 'CTRL+HACK+DEL', period: 'May 2025 to Feb 2026', note: '' },
  { role: 'Sponsorship Commissioner', org: 'York Engineering Competition', period: 'Jul 2025 to Oct 2025', note: '' },
  { role: 'Food and Beverage Volunteer', org: 'Kids Help Phone', period: 'May 2026', note: 'BMO Walk So Kids Can Talk' },
  { role: 'Blood Donor', org: 'Canadian Blood Services', period: '', note: '' },
];
