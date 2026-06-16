export interface Project {
  id: string;
  title: string;
  description: string;
  category: ('ai-ml' | 'web' | 'data-analysis' | 'all') | ('ai-ml' | 'web' | 'data-analysis' | 'all')[];
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
    id: 'underdog-ai',
    title: 'UnderdogAI',
    description: 'Decision Intelligence and Predictive Football Analytics Platform designed to identify underdogs, simulate tournaments, and predict upset probabilities.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['Python', 'FastAPI', 'dbt', 'PyMC', 'Kafka', 'Docker', 'Airflow'],
    github: 'https://github.com/MJenius/UnderdogAI',
    featured: true,
    details: {
      overview: 'UnderdogAI is built on a modular data-to-decision architecture combining streaming event meshes, Bayesian statistics, and causal inference. It models match outcomes as independent Poisson processes with latent team strength parameters inferred through MCMC sampling.',
      achievements: [
        'Implemented event-driven simulation processing using Apache Kafka for long-running Monte Carlo tournaments',
        'Engineered a probabilistic model via Bayesian Inference (PyMC) to estimate latent team strengths and uncertainty',
        'Developed dbt analytics layer to transform raw staging tables into a structured feature warehouse',
        'Utilized Microsoft\'s DoWhy to isolate the Average Treatment Effect of team preparation on tournament outcomes',
        'Architected horizontal scalability with FastAPI gateway and stateless, containerized simulation workers'
      ],
      techStack: [
        'Python, FastAPI, gRPC',
        'PyMC (Bayesian Modeling), DoWhy (Causal Inference)',
        'dbt (Analytics Engineering), PostgreSQL, MinIO',
        'Apache Kafka, Redis, Apache Airflow',
        'Docker, Kubernetes, Next.js'
      ]
    }
  },
  {
    id: 'ai-data-analyst',
    title: 'AI Data Analyst Agent',
    description: 'A multi-agent AI system designed for reliable database analysis with FAISS schema search, sandboxed query execution, and resilient LLM cascading.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['Python', 'FastAPI', 'FAISS', 'Groq API', 'Multi-Agent AI', 'SQL', 'LLM Failover'],
    github: 'https://github.com/MJenius/ai-data-analyst-agent',
    featured: true,
    details: {
      overview: 'A multi-agent AI system designed for reliable database analysis. Given a natural language business question, the system retrieves relevant schemas via semantic search (FAISS), generates precise SQL queries, executes them in a sandboxed SQLite environment, validates the output with compiler feedback, and provides a structured executive report with fallback LLM routing (Groq/Gemini).',
      achievements: [
        'Orchestrated a 3-agent pipeline (Planner, Executor, Evaluator) using FastAPI and SSE for real-time telemetry streaming',
        'Engineered a Schema Retriever utilizing FAISS dense vector search and disk-based caching, achieving ~85-90% retrieval accuracy',
        'Built an Analytics Executor with strict query parsing and read-only sandboxed database connections for verified safety',
        'Implemented an automated 2-retry self-correction loop using database compiler feedback, achieving 95-100% SQL success rate',
        'Designed a resilient API failover client cascading from Groq (Llama 3.3) to Gemini (1.5 Flash) with deterministic local SQL backup',
        'Created a premium glassmorphism dashboard UI using custom HSL CSS, ES6+ Javascript, and Server-Sent Events telemetry'
      ],
      techStack: [
        'Python 3.11+, FastAPI, Uvicorn',
        'FAISS, SentenceTransformers (all-MiniLM-L6-v2) for vector search',
        'Groq API (Llama 3.3), Gemini API (1.5 Flash), SQLite3',
        'Vanilla HTML5, ES6+ JS, Custom HSL CSS (Glassmorphism UI, SSE)'
      ]
    }
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting ML System',
    description: 'A machine learning system for predicting retail demand patterns.',
    category: ['data-analysis', 'ai-ml'],
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
  },
  {
    id: 'football-scouting',
    title: 'GenAI Football Scouting Dashboard',
    description: 'A professional Decision Support System for football scouts using ML, AI, and advanced analytics.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['Python', 'Streamlit', 'FastAPI', 'Scikit-Learn', 'SHAP', 'Ollama'],
    github: 'https://github.com/MJenius/scouting-Dashboard',
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
    id: 'aegis',
    title: 'AEGIS Tamper-Resistant Surveillance',
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
    id: 'nebula',
    title: 'Nebula - AI Movie Discovery',
    description: 'Semantic Movie Search Engine',
    category: 'web',
    tags: ['Next.js', 'FastAPI', 'Python', 'Pinecone', 'Docker', 'Zustand'],
    github: 'https://github.com/rajeev8008/Nebula',
    featured: true,
    details: {
      overview: 'An AI-powered semantic search engine that discovers movies by natural language meaning and context, visualized in an interactive 3D graph.',
      achievements: [
        'Architected containerized full-stack system (Next.js 14 + FastAPI) orchestrating multi-service communication with Dockerized deployment and modular service separation',
        'Implemented semantic vector search using Pinecone and optimized client-state management via Zustand, enabling low-latency context-aware discovery',
        'Developed an interactive 3D graph visualization with Three.js to represent movies and their cosine similarity scores',
        'Configured a robust CI/CD pipeline running Pytest, Jest, and Playwright E2E tests on every push'
      ],
      techStack: [
        'Next.js, FastAPI, Python, Pinecone',
        'Docker, Zustand, Tailwind CSS, Three.js',
        'Sentence Transformers (all-MiniLM-L6-v2)'
      ]
    }
  },
  {
    id: 'covid-radiomics',
    title: 'COVID-19 Radiomics Detection',
    description: 'A deep learning pipeline for COVID-19 detection using chest CT imaging.',
    category: 'data-analysis',
    tags: ['Python', 'PyTorch', 'CNN', 'Medical Imaging', 'DL'],
    github: 'https://github.com/rajeev8008/CT-Based-Radiomics-for-COVID-19-Patient-Triage',
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
    id: 'cardiovascular-disease',
    title: 'Cardiovascular Disease Prediction',
    description: 'Exploratory data analysis and feature engineering on tabular health data to predict cardiovascular disease risk.',
    category: 'ai-ml',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'EDA'],
    github: 'https://github.com/MJenius/Cardiovascular-Disease-Prediction',
    featured: false,
    details: {
      overview: 'A comprehensive exploratory data analysis and feature engineering project on tabular health data. Demonstrates the ability to extract meaningful signals from messy real-world datasets through visualization and statistical techniques.',
      achievements: [
        'Comprehensive EDA using Seaborn and Matplotlib for distribution analysis and correlation insights',
        'Identified key features predicting cardiovascular disease through statistical exploration',
        'Engineered domain-specific features from raw health metrics',
        'Created compelling visualizations revealing patterns in patient cohorts',
        'Demonstrated proficiency in finding signals in high-dimensional tabular data'
      ],
      techStack: [
        'Python for data analysis and scripting',
        'Pandas for data manipulation and aggregation',
        'NumPy for numerical computing',
        'Seaborn & Matplotlib for exploratory visualizations',
        'Statistical analysis techniques for feature importance'
      ]
    }
  },
  {
    id: 'peswiggy',
    title: 'PESwiggy',
    description: 'A high-concurrency MERN food delivery platform with real-time cart sync, Stripe payments, and analytics.',
    category: 'web',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe API', 'JWT'],
    github: 'https://github.com/MJenius/BetterPESwiggy-PESwiggy',
    featured: false,
    details: {
      overview: 'A full-stack MERN application that replicates a real food delivery service with enterprise-grade features. Demonstrates high-concurrency handling, real-time synchronization, secure payments, and advanced analytics.',
      achievements: [
        'Built a high-concurrency MERN application with real-time cart synchronization',
        'Integrated Stripe payments with webhook-based order verification for secure transactions',
        'Generated real-time sales analytics using MongoDB aggregation pipelines',
        'Implemented comprehensive role-based access control (RBAC) for users and admins',
        'Enabled secure menu management, order tracking, and analytics dashboards'
      ],
      techStack: [
        'MongoDB for flexible document storage and aggregation pipelines',
        'Express.js backend for RESTful APIs and webhook handling',
        'React frontend for dynamic, real-time UI',
        'Node.js runtime with async/concurrent request handling',
        'Stripe API for payment processing with webhook verification',
        'JWT (JSON Web Tokens) for secure authentication and authorization'
      ]
    }
  },
  {
    id: 'food-delivery-sql',
    title: 'Food Delivery DBMS',
    description: 'A relational database system demonstrating raw SQL mastery through a fully normalized food delivery schema with complex queries and business logic.',
    category: 'data-analysis',
    tags: ['Python', 'Flask', 'MySQL', 'SQL', 'Data Modeling'],
    github: 'https://github.com/MJenius/SQL-Based-Food-Delivery-System',
    featured: false,
    details: {
      overview: 'A robust relational database application modeling a complete food delivery workflow — orders, drivers, restaurants, and deliveries. Built with raw SQL to demonstrate mastery of joins, aggregations, nested queries, and parameterized queries without ORM abstractions.',
      achievements: [
        'Designed a fully normalized relational schema modeling orders, drivers, restaurants, and delivery workflows',
        'Authored optimized SQL queries using JOINs, subqueries, and aggregations for operational performance reports',
        'Implemented real-world driver assignment logic handling concurrency and delivery state management',
        'Used parameterized queries throughout to prevent SQL Injection, demonstrating security-first design',
        'Translated raw transactional data into actionable metrics for efficiency and throughput analysis'
      ],
      techStack: [
        'Python & Flask for application logic',
        'MySQL with raw SQL (no ORM)',
        'Complex JOINs, nested queries, and aggregations',
        'Relational schema design & data modeling',
        'Parameterized queries for SQL injection prevention'
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
    id: 'voice-assistant',
    title: 'LeetCode Voice Assistant',
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
    id: 'multi-agent-coder',
    title: 'Multi-Agent GitHub Issue Resolver',
    description: 'An autonomous multi-agent AI system using LangGraph and Ollama that analyzes, resolves, and validates GitHub issues with deterministic flow control and isolated Docker sandbox testing.',
    category: 'ai-ml',
    tags: ['LangGraph', 'Ollama', 'Python', 'Docker', 'Multi-Agent AI', 'FastAPI', 'StateGraph'],
    github: 'https://github.com/MJenius/Multi-Agent-Coder',
    featured: false,
    details: {
      overview: 'A production-grade autonomous multi-agent system orchestrated through a Supervisor-led StateGraph architecture. Built with LangGraph and Ollama (Llama 3.2, Qwen 2.5), it intelligently analyzes GitHub issues and generates surgical patches with deterministic safety guardrails and isolated Docker sandbox validation.',
      achievements: [
        'Architected a Supervisor-orchestrated StateGraph with specialized agents (Researcher, Coder, Reviewer) for deterministic issue resolution',
        'Implemented Hard Guards to enforce deterministic flow control and prevent infinite loops in multi-agent workflows',
        'Generated surgical, standard Unified Diffs for precise patch application with minimal side effects',
        'Deployed an isolated, network-disabled Docker sandbox for safe patch testing with Git-based regression baselines',
        'Integrated TokenBucket rate limiting and FastAPI backend for production-grade scalability',
        'Achieved autonomous end-to-end issue resolution without manual intervention'
      ],
      techStack: [
        'LangGraph for multi-agent orchestration and StateGraph patterns',
        'Ollama with Llama 3.2 and Qwen 2.5 for local LLM inference',
        'Docker Engine with network isolation for safe patch validation',
        'Python with FastAPI for backend API layer',
        'Git for baseline management and regression tracking',
        'TokenBucket rate limiting for production stability'
      ]
    }
  },
  {
    id: 'adaptive-golf',
    title: 'Adaptive Golf Alliance Foundation',
    description: 'A high-performance React SPA developed for a registered non-profit, emphasizing accessibility and optimized delivery of 30+ media assets through code splitting and lazy loading.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'EmailJS', 'Vercel', 'Performance'],
    demo: 'https://www.adaptivegolfalliance.com/',
    featured: false,
    details: {
      overview: 'A production React Single Page Application developed for the Adaptive Golf Alliance Foundation, a registered non-profit. The application prioritizes accessibility, performance optimization, and seamless user experience through modern architecture and best practices in web delivery.',
      achievements: [
        'Implemented aggressive code splitting and dynamic imports to reduce initial bundle size by 40%',
        'Optimized image assets through compression and responsive sizing, enabling 30+ high-quality media files with minimal load time impact',
        'Architected a paginated media gallery with lazy loading and intersection observer for progressive image rendering',
        'Integrated Framer Motion animations for polished, accessible page transitions and interactive UI components',
        'Built a validated contact form with EmailJS integration for seamless non-profit communication workflows',
        'Deployed to Vercel with automatic CI/CD for instant production updates'
      ],
      techStack: [
        'React with TypeScript for type-safe component architecture',
        'Framer Motion for sophisticated animations and interactions',
        'Tailwind CSS for rapidly scalable, accessible styling',
        'EmailJS for client-side form submissions',
        'Lazy loading and intersection observer APIs for performance',
        'Vercel deployment with edge-optimized delivery'
      ]
    }
  }
];

export const experiences: Experience[] = [
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'PES University, Bangalore',
    period: '2023 – 2027',
    description: 'Pursuing a Bachelor\'s degree with 3 scholarships awarded. Focus on building strong foundations in core computer science and applied machine learning.',
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
  languages: ['Python', 'SQL (PostgreSQL/MySQL)', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'R', 'C', 'HTML/CSS'],
  webBackend: ['React', 'Next.js 14', 'FastAPI', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'REST APIs', 'JWT Auth', 'RBAC', 'Rate Limiting', 'Socket.IO', 'Stripe API', 'Vercel', 'Responsive Design', 'Cloudinary'],
  aiMl: ['PyTorch', 'Scikit-learn', 'LightGBM', 'Stable-Baselines3', 'SHAP', 'OpenCV', 'NLP', 'FAISS', 'Sentence Transformers', 'RAG', 'Groq/Gemini APIs', 'Llama 3 (Ollama)', 'Prompt Engineering', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Plotly', 'Streamlit', 'Clustering', 'Time-Series Forecasting', 'Feature Engineering', 'EDA', 'ETL Pipelines', 'Model Evaluation', 'SUMO'],
  infraDevops: ['Docker', 'CI/CD', 'GitHub Actions', 'Git', 'PostgreSQL', 'MongoDB (Mongoose)', 'SQLite', 'Redis', 'Pinecone', 'Supabase', 'Vector Databases', 'Jest', 'Supertest', 'Drift Detection', 'Model Monitoring', 'MLOps', 'Linux', 'pytest']
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
