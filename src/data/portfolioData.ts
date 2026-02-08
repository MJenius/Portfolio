export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ai-ml' | 'web' | 'data-analysis' | 'all';
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  details: {
    overview: string;
    achievements: string[];
    techStack: string[];
  };
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  glowColors: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'voice-assistant',
    title: 'AI Voice Assistant for LeetCode',
    description: 'A sophisticated voice-enabled assistant that revolutionizes how developers prepare for technical interviews.',
    category: 'ai-ml',
    tags: ['Python', 'NLP', 'spaCy', 'LeetCode API', 'ElevenLabs'],
    github: 'https://github.com/MJenius/AI-Voice-Assistant-Python',
    featured: false,
    details: {
      overview: 'A sophisticated voice-enabled assistant that revolutionizes how developers prepare for technical interviews. This project combines natural language processing with voice synthesis to create an interactive learning experience.',
      achievements: [
        'Voice command recognition for hands-free operation',
        'Company-specific problem suggestions using LeetCode API',
        'Context-aware problem recommendations based on user history',
        'Real-time voice feedback using ElevenLabs API',
        'Dynamic problem query handling (50+ problem types)'
      ],
      techStack: [
        'spaCy NLP for intent recognition and entity extraction',
        'LeetCode API integration for problem data',
        'ElevenLabs for natural voice synthesis',
        'Python-based backend with async processing',
        '30% improvement in response accuracy over rule-based systems'
      ]
    }
  },
  {
    id: 'social-media-backend',
    title: 'Enterprise Social Media Backend',
    description: 'A secure, scalable Node.js backend featuring RBAC, Rate Limiting, and automated CI/CD pipelines.',
    category: 'web',
    tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Redis'],
    github: 'https://github.com/mjenius/social-media-management-system',
    featured: false,
    details: {
      overview: 'A production-ready backend system designed for high availability and security. It features advanced system design patterns including throttling, input sanitization, and automated disaster recovery.',
      achievements: [
        'Implemented Role-Based Access Control (RBAC) for granular permission management',
        'Engineered a custom Rate Limiter to prevent DDoS and abuse',
        'Automated database backups and log rotation using Cron jobs',
        'Integrated GitHub Actions for automated testing (Jest/Supertest)'
      ],
      techStack: [
        'Node.js & Express.js',
        'MongoDB (Mongoose)',
        'Jest & Supertest (Testing)',
        'Docker & GitHub Actions (CI/CD)',
        'Winston (Logging)'
      ]
    }
  },
  {
    id: 'spotify',
    title: 'Spotify Song Recommender',
    description: 'A K-Nearest Neighbors recommendation engine that uses audio features from the Spotify API.',
    category: 'ai-ml',
    tags: ['Python', 'KNN', 'Spotify API', 'Scikit-learn', 'ML'],
    github: 'https://github.com/MJenius/Spotify-Song-Recommender',
    featured: false,
    details: {
      overview: 'A K-Nearest Neighbors recommendation engine that uses audio features from the Spotify API to provide personalized song suggestions tailored to user taste.',
      achievements: [
        'Analyzes 10+ audio features (tempo, energy, danceability, instrumentalness, etc.) to compute similarity',
        'Produces personalized playlists with an 80% relevance score on user validation',
        'Optimized feature pipeline for faster similarity lookups and reduced latency'
      ],
      techStack: [
        'Python, Scikit-learn (KNN), Spotipy / Spotify Web API',
        'Pandas & NumPy for data processing',
        'Simple Flask/Streamlit demo for interactive exploration'
      ]
    }
  },
  {
    id: 'covid-radiomics',
    title: 'CT-Based Radiomics for COVID-19 Detection',
    description: 'A deep learning pipeline for COVID-19 detection using chest CT imaging.',
    category: 'data-analysis',
    tags: ['Python', 'PyTorch', 'CNN', 'Medical Imaging', 'DL'],
    github: 'https://github.com/MJenius/CT-based-Radiomics-for-COVID-19-Detection',
    featured: false,
    details: {
      overview: 'A deep learning pipeline for COVID-19 detection using chest CT imaging, leveraging convolutional neural networks for automated diagnosis.',
      achievements: [
        'Trained CNN models on curated COVID-19 CT scan dataset',
        'Achieved 90%+ accuracy on test set for COVID vs. Non-COVID classification',
        'Implemented data augmentation techniques to address class imbalance',
        'Developed explainability visualizations using Grad-CAM for clinical trust'
      ],
      techStack: [
        'Python, PyTorch, torchvision',
        'CNN architectures (ResNet, EfficientNet)',
        'Medical image preprocessing pipelines',
        'Grad-CAM for model interpretability'
      ]
    }
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting ML System',
    description: 'A machine learning system for predicting retail demand patterns.',
    category: 'data-analysis',
    tags: ['Python', 'Time Series', 'Forecasting', 'XGBoost', 'ML'],
    featured: true,
    details: {
      overview: 'A machine learning system for predicting retail demand patterns using historical sales data and external features.',
      achievements: [
        'Developed time series forecasting models for inventory optimization',
        'Reduced forecast error by 25% compared to baseline methods',
        'Implemented feature engineering for seasonality and trends',
        'Created automated retraining pipeline for model updates'
      ],
      techStack: [
        'Python, XGBoost, Prophet',
        'Pandas for time series manipulation',
        'Feature engineering for temporal patterns',
        'Model validation with walk-forward testing'
      ]
    }
  },
  {
    id: 'docparse-ai',
    title: 'DocParse AI',
    description: 'An intelligent PDF extraction and processing system using AI.',
    category: 'web',
    tags: ['Python', 'NLP', 'PDF Processing', 'AI', 'OCR'],
    demo: 'https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/',
    featured: false,
    details: {
      overview: 'An intelligent PDF extraction and processing system that uses AI to extract structured data from documents.',
      achievements: [
        'Developed multi-format document parsing pipeline',
        'Achieved 95% accuracy in structured data extraction',
        'Implemented table detection and extraction algorithms',
        'Built OCR pipeline for scanned documents'
      ],
      techStack: [
        'Python, PyPDF2, pdfplumber',
        'Tesseract OCR for scanned documents',
        'spaCy for text processing',
        'Custom table detection algorithms'
      ]
    }
  },
  {
    id: 'aegis',
    title: 'AEGIS Surveillance System',
    description: 'An AI-powered surveillance system for real-time threat detection.',
    category: 'ai-ml',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'YOLO', 'Real-time'],
    github: 'https://github.com/ZeroDeaths7/Aegis-Tamper-Resistant-Surveillance-System',
    featured: true,
    details: {
      overview: 'An AI-powered surveillance system for real-time threat detection and monitoring using computer vision.',
      achievements: [
        'Implemented real-time object detection with YOLO',
        'Developed multi-camera tracking system',
        'Created alert system for suspicious activity',
        'Optimized for edge deployment with 30+ FPS'
      ],
      techStack: [
        'Python, OpenCV, YOLOv5',
        'Multi-threaded video processing',
        'Real-time alert notification system',
        'Edge optimization techniques'
      ]
    }
  },
  {
    id: 'football-scouting',
    title: 'Football Scouting & Recruitment Dashboard',
    description: 'A professional Decision Support System for football scouts using ML, AI, and advanced analytics.',
    category: 'data-analysis',
    tags: ['Python', 'Streamlit', 'FastAPI', 'Scikit-Learn', 'SHAP', 'Ollama'],
    github: 'https://github.com/yourusername/scouting-dashboard',
    featured: true,
    details: {
      overview: 'A professional-grade Decision Support System (DSS) designed for football scouts and recruitment analysts. Leverages Machine Learning and Generative AI to identify tactical archetypes, stylistic statistical twins, and undervalued prospects across European football and the English pyramid.',
      achievements: [
        'Weighted Similarity Engine using Cosine Similarity with triple weighting on elite traits (>75th percentile)',
        'Tactical Style Map (PCA) visualizing 2D footballing universe to identify tactical hybrids',
        'Archetype Discovery via K-Means Clustering into 8-12 tactical roles (e.g., Deep-Lying Playmaker)',
        'Explainable AI with SHAP values and similarity drivers for model transparency',
        'Age-Curve Analysis detecting high-ceiling prospects with Z-score calculations per cohort',
        'Generative Scouting Reports using Ollama (Llama 3.2) for prose-style narrative analysis',
        'PDF Dossier Export for offline recruitment meetings',
        'Head-to-Head Comparison with radar charts and relative quality toggles'
      ],
      techStack: [
        'Streamlit for interactive frontend UI',
        'FastAPI with hybrid SQL + JSON schema (SQLite)',
        'Scikit-Learn for similarity engine and K-Means clustering',
        'SHAP for explainable AI and model attribution',
        'Plotly for advanced data visualizations (PCA, radar, heatmaps)',
        'Ollama (Llama 3.2) for generative scouting narratives',
        'FPDF for professional report generation',
        'Docker containerization for deployment'
      ]
    }
  },
  {
    id: 'traffic-control',
    title: 'Explainable RL Traffic Control',
    description: 'PPO-based Reinforcement Learning agent reducing emergency travel time by 10.6% with SHAP interpretability.',
    category: 'ai-ml',
    tags: ['Python', 'RL', 'Stable-Baselines3', 'PPO', 'SHAP'],
    github: 'https://github.com/rajeev8008/sumo-traffic-rl-project',
    featured: true,
    details: {
      overview: 'A safety-critical RL agent trained using Proximal Policy Optimization (PPO) to manage traffic signals. Unlike black-box models, this system uses SHAP to explain decision-making and a Reward Decomposition framework to verify emergency vehicle prioritization.',
      achievements: [
        'Reduced emergency vehicle travel time by 10.6% and overall congestion by 4.2%',
        'Architected a Reward Decomposition framework to audit agent incentives',
        'Implemented SHAP analysis to visualize the 43D state space decision boundaries',
        'Benchmarked against Fixed-Time and Rule-Based controllers in SUMO'
      ],
      techStack: [
        'Python',
        'Stable-Baselines3 (PPO)',
        'SUMO Traffic Simulator (TraCI)',
        'SHAP (Explainable AI)',
        'Pandas & Matplotlib'
      ]
    }
  }
];

export const experiences: Experience[] = [
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'PES University, Bangalore',
    period: '2023 – 2027',
    description: 'Pursuing a Bachelor\'s degree with 2 scholarships awarded. Focus on building strong foundations in core computer science and applied machine learning.',
    tags: ['Machine Learning', 'Data Structures', 'Software Engineering', 'Algorithms'],
    glowColors: ['#9333ea', '#ec4899', '#3b82f6']
  },
  {
    title: 'Web Development Intern',
    organization: 'Superhhero Learning',
    period: 'July 2025 – September 2025',
    description: 'Built and deployed a production MERN platform for ~100 monthly users. Improved API performance by 10% and reduced development iteration time by 25%.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Vercel'],
    glowColors: ['#0894FF', '#C959DD', '#FF2E54']
  }
];

export const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C', 'R'],
  webBackend: ['FastAPI', 'Flask', 'Node.js', 'Express', 'React', 'Next.js'],
  aiMl: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
  infraDevops: ['Git', 'Vercel', 'Modal', 'PostgreSQL', 'MongoDB', 'Docker']
};

export const socialLinks = {
  github: 'https://github.com/MJenius',
  linkedin: 'https://www.linkedin.com/in/mevin-jose/',
  leetcode: 'https://leetcode.com/u/MJenius/',
  email: 'mailto:mjenius1357@gmail.com'
};

export const contactInfo = {
  email: 'mjenius1357@gmail.com',
  location: 'Bangalore, India',
  availability: 'Available for internships and opportunities',
  resume: 'Mevin%20Jose%20Resume.pdf'
};
