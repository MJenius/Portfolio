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
    description: 'Event-Driven Football & Decision Intelligence Platform featuring Kafka event streaming, Bayesian simulations, and causal inference.',
    category: ['data-analysis', 'ai-ml', 'web'],
    tags: ['FastAPI', 'Kafka', 'gRPC', 'Kubernetes', 'Docker', 'Redis', 'PyMC', 'DoWhy', 'dbt'],
    github: 'https://github.com/MJenius/UnderdogAI',
    featured: true,
    details: {
      overview: 'UnderdogAI is an event-driven decision intelligence platform combining Monte Carlo tournament simulations, Bayesian modeling, and causal inference.',
      achievements: [
        'Architected an event-driven microservices backend using Kafka to decouple Monte Carlo simulations, reducing API blocking latency by ~84% (324ms → <50ms)',
        'Engineered asynchronous workers running 63,000+ match simulations in ~324ms per task via vectorized computation for scalable tournament evaluation',
        'Built end-to-end data pipelines using Airflow and dbt to construct warehouse feature marts with temporal joins',
        'Developed Bayesian forecasting and causal inference models using PyMC and DoWhy, validating predictions with log loss (~0.88) and Brier score (~0.52)',
        'Tracked experiments, model versions, and evaluation metrics using MLflow to enable reproducible training and comparison',
        'Built containerized microservices with CI/CD validation and traceable job execution for reliable debugging'
      ],
      techStack: [
        'Python, FastAPI, gRPC, Kafka',
        'Kubernetes, Docker, Redis, Airflow, dbt',
        'PyMC, DoWhy, MLflow, PostgreSQL'
      ]
    }
  },
  {
    id: 'ai-data-analyst',
    title: 'AI Data Analyst Agent',
    description: 'A multi-agent AI system achieving 95-100% NL-to-SQL accuracy with FAISS schema search, sandboxed Docker execution, and fallback LLM routing.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'Groq/Gemini APIs', 'RAG', 'Pydantic', 'Docker'],
    github: 'https://github.com/MJenius/ai-data-analyst-agent',
    featured: true,
    details: {
      overview: 'A multi-agent natural-language-to-SQL system designed for reliable, schema-grounded database analytics with multi-model fallback and isolated execution.',
      achievements: [
        'Achieved 95-100% natural-language-to-SQL accuracy on a 100-query benchmark across 8 domains, validated against schema-grounded ground truth',
        'Architected a planner-executor-evaluator multi-agent system with FAISS schema retrieval and multi-model fallback (Groq → Gemini), improving execution accuracy',
        'Built semantic retrieval layer using FAISS + Sentence Transformers enabling context-aware query generation',
        'Integrated Dockerized execution sandboxes to isolate generated SQL scripts, reducing unsafe execution risks to 0% during schema validation',
        'Designed automated evaluation pipeline with Dockerized execution sandboxes to safely validate query correctness via execution and parsing checks'
      ],
      techStack: [
        'Python, FastAPI, Pydantic',
        'FAISS, Sentence Transformers, RAG',
        'Groq / Gemini APIs, Docker, SQLite / PostgreSQL'
      ]
    }
  },
  {
    id: 'sentinelgraph',
    title: 'SentinelGraph',
    description: 'Behavioral Intelligence & Anomaly Detection SOC Platform with max-dominant risk fusion, SHAP explainability, and GNN/Graph-RAG traversal.',
    category: ['ai-ml', 'data-analysis'],
    tags: ['Python', 'Streamlit', 'NetworkX', 'RAGAS', 'PyTorch', 'Docker', 'FastAPI', 'SHAP'],
    github: 'https://github.com/mjenius/sentinelgraph',
    featured: true,
    details: {
      overview: 'A high-performance behavioral intelligence platform for SOC analysts featuring multi-detector risk fusion engines, graph topology visualization, counterfactual explainability, and microservice containerization.',
      achievements: [
        'Architected a 7-detector behavioral anomaly ensemble for 1,000+ entities, suppressing false positive alert rates by >90% via max-dominant risk fusion',
        'Built an 11-step detection pipeline and max-dominant risk fusion engine for 10K+ logs, processing events with 3.4ms average scoring latency',
        'Evaluated GNN and Graph-RAG traversal pipelines with RAGAS, achieving 0.942 PR-AUC and sub-10ms scoring latency over 10K benchmark events',
        'Integrated counterfactual explainability and SHAP feature breakdowns, increasing policy explainability and threat triage efficiency by 30%',
        'Developed dynamic graph topology renderers and real-time timeline scrubbers, reducing threat triage time for SOC analysts by 65%',
        'Containerized microservices using Docker Compose and created a 56-test Pytest suite, achieving 100% test pass rate for automated pipeline validation'
      ],
      techStack: [
        'Python, FastAPI, Streamlit',
        'PyTorch, NetworkX, RAGAS, SHAP',
        'Docker, Docker Compose, Pytest'
      ]
    }
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting ML System',
    description: 'Production-grade forecasting pipeline predicting retail demand across 30K+ SKUs with lag features and time-aware drift detection.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['LightGBM', 'FastAPI', 'Pandas', 'SciPy', 'SQLite', 'Parquet', 'Python'],
    github: 'https://github.com/MJenius/demand-forecasting-ml',
    featured: true,
    details: {
      overview: 'A machine learning forecasting pipeline built across 30K+ SKUs (2M+ records) with time-aware cross-validation and PSI drift monitoring.',
      achievements: [
        'Built forecasting pipeline across 30K+ SKUs (2M+ records), achieving 25% MAPE reduction vs baselines via lag-based and rolling features',
        'Implemented time-aware cross-validation, preventing temporal leakage to improve real-world generalization',
        'Designed rolling-window drift detection and reproducible retraining pipelines, utilizing Population Stability Index (PSI) thresholds to trigger automated alerts'
      ],
      techStack: [
        'Python, LightGBM, FastAPI',
        'Pandas, SciPy, SQLite, Parquet',
        'Time-Series Analysis & Drift Detection (PSI)'
      ]
    }
  },
  {
    id: 'adaptive-golf',
    title: 'Adaptive Golf Alliance Foundation',
    description: 'A production React client application featuring responsive multi-page navigation, lazy loading, and asset optimization for 30+ media assets.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Vercel'],
    demo: 'https://www.adaptivegolfalliance.com/',
    featured: true,
    details: {
      overview: 'Delivered a production React application for an external non-profit client, implementing responsive multi-page navigation, lazy loading asset optimizations, and validated contact workflows.',
      achievements: [
        'Delivered a production React application for an external client, implementing responsive multi-page navigation and accessible UI components',
        'Improved performance through lazy loading, asset optimization, and code splitting for a media gallery serving 30+ assets',
        'Managed deployment on Vercel and implemented validated contact workflows to support reliable production usage'
      ],
      techStack: [
        'React, TypeScript, TailwindCSS',
        'Framer Motion, EmailJS, Vercel'
      ]
    }
  },
  {
    id: 'traffic-control',
    title: 'Adaptive Traffic Signal Control (PPO)',
    description: 'Explainable PPO reinforcement learning traffic signal management reducing emergency transit time by 10.6% in SUMO.',
    category: 'ai-ml',
    tags: ['PPO', 'SUMO', 'Stable-Baselines3', 'SHAP', 'Python', 'Reinforcement Learning'],
    github: 'https://github.com/rajeev8008/Adaptive-Traffic-Signal-Control',
    featured: true,
    details: {
      overview: 'A safety-critical RL system using Proximal Policy Optimization (PPO) and SUMO simulation to optimize emergency transit and intersection flow, backed by 43D state space SHAP interpretability.',
      achievements: [
        'Reduced emergency vehicle transit time by 10.6% vs fixed baseline using PPO-based reinforcement learning',
        'Applied SHAP-based interpretability over 43D state space, increasing policy reliability and explainability by 30% in safety-critical simulation scenarios'
      ],
      techStack: [
        'Python, Stable-Baselines3 (PPO)',
        'SUMO Traffic Simulator (TraCI)',
        'SHAP (Explainable AI), Pandas, Matplotlib'
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
  }
];

export const experiences: Experience[] = [
  {
    title: 'AI Intern',
    organization: 'Wadhwani Foundation',
    period: 'June 2026 – Present',
    description: 'Participated in technical architecture reviews for enterprise AI document ingestion, analyzed RAG retrieval & vector search routing, evaluated Qdrant multi-modal embeddings, and established Controller-Service-Repository patterns in FastAPI.',
    tags: ['FastAPI', 'MongoDB', 'RAG', 'Qdrant', 'Vector Search', 'Multi-Modal Embeddings', 'System Architecture'],
    glowColors: ['#6366f1', '#a855f7', '#ec4899']
  },
  {
    title: 'Web Developer Intern',
    organization: 'Superhhero Learning',
    period: 'June 2025 – September 2025',
    description: 'Deployed 8+ MERN pages for 100+ active users. Optimized MongoDB/Mongoose indexing & query execution to reduce API response latency by 25% and improved load speed by 10%.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Performance Optimization'],
    glowColors: ['#0894FF', '#C959DD', '#FF2E54']
  },
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'PES University, Bangalore',
    period: 'Aug 2023 – May 2027',
    description: 'CGPA: 7.85 / 10.00. Focus on Explainable AI, LLMs & RAG, Deep Learning, Reinforcement Learning, Distributed Systems, Cloud Computing, and Software Engineering.',
    tags: ['AI & ML', 'Explainable AI', 'LLMs & RAG', 'Distributed Systems', 'MERN Stack'],
    glowColors: ['#9333ea', '#ec4899', '#3b82f6']
  }
];

export const skills = {
  languages: ['Python', 'SQL (PostgreSQL / MongoDB / Redis / SQLite)', 'JavaScript', 'TypeScript', 'Java', 'R'],
  webBackend: ['React', 'Next.js 14', 'TailwindCSS', 'Framer Motion', 'Node.js', 'Express', 'FastAPI', 'REST APIs', 'gRPC', 'JWT', 'RBAC', 'Rate Limiting', 'Socket.IO', 'Vercel'],
  aiMl: ['PyTorch', 'Scikit-learn', 'LightGBM', 'OpenCV', 'SHAP', 'LangChain', 'LangGraph', 'RAG', 'FAISS', 'Qdrant', 'Pinecone', 'Sentence Transformers', 'Groq/Gemini APIs', 'Multi-Agent AI', 'RAGAS', 'PPO (SUMO)', 'PyMC', 'DoWhy'],
  infraDevops: ['Distributed Systems', 'Event-Driven Systems', 'Kafka', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'AWS (EC2, S3)', 'Airflow', 'dbt', 'MLflow', 'Parquet', 'Drift Detection', 'Model Monitoring']
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
