export interface Project {
  id: string;
  title: string;
  description: string;
  category: ('ai-ml' | 'web' | 'data-analysis' | 'all') | ('ai-ml' | 'web' | 'data-analysis' | 'all')[];
  tags: string[];
  image?: string;
  github?: string;
  doi?: string;
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
    description: 'High-throughput event-driven decision platform with Kafka streaming, Monte Carlo simulations, and Airflow/dbt data pipelines.',
    category: ['data-analysis', 'ai-ml', 'web'],
    tags: ['FastAPI', 'Kafka', 'gRPC', 'Kubernetes', 'Docker', 'Redis', 'Airflow', 'dbt', 'MLflow', 'PyMC', 'DoWhy'],
    github: 'https://github.com/MJenius/UnderdogAI',
    featured: true,
    details: {
      overview: 'A decision-intelligence platform combining event-driven microservices, Monte Carlo simulations, causal inference, and an Airflow/dbt data pipeline processing 120K+ records.',
      achievements: [
        'Improved HTTP API throughput 57% (352 to 553 req/s) with 50 concurrent clients and 1,000 requests, reducing P50, P95, and P99 latency by 37%, 26%, and 29% respectively with zero failures',
        'Reduced server CPU time 42% and peak memory usage 10% through bounded TTL caching, async processing, shared service clients, and optimized request paths',
        'Engineered fault-tolerant Kafka processing with manual offset commits, idempotent job handling, atomic Redis completion, bounded retries, and exponential backoff; recovered from two injected failures in 3.0 seconds',
        'Built async Monte Carlo workers processing 63,000+ match simulations per task and deployed containerized services with CI/CD validation, health probes, metrics, and rolling Kubernetes deployments',
        'Built an Airflow/dbt data pipeline processing 120K+ records at 12.2K records/s, materializing a 49,413-record, 29-column feature mart using temporal joins and feature engineering',
        'Implemented 19 automated data-quality and temporal-leakage checks with zero failures across null-key, duplicate, referential-integrity, freshness, invalid-value, and leakage tests; tracked experiments with MLflow'
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
    title: 'AI Data Analyst Agent - Research Preprint',
    description: 'Research preprint evaluating a multi-stage reliability architecture for NL-to-SQL, achieving 73.40% result equivalence and 100% execution success on a 500-query benchmark.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['Text-to-SQL', 'LLM Agents', 'RAG', 'FAISS', 'SQLGlot', 'SQLite', 'Statistical Evaluation', 'Python'],
    github: 'https://github.com/MJenius/ai-data-analyst-agent',
    doi: 'https://doi.org/10.5281/zenodo.22024528',
    featured: true,
    details: {
      overview: 'Research preprint (August 2026) investigating why natural-language-to-analytical-SQL fails over multi-table relational databases and evaluating an observable multi-stage reliability architecture: graph-guided semantic schema RAG, DAG query planning with deterministic validation, and AST-based structural verification with closed-loop repair, benchmarked over 500 queries on the Olist e-commerce data warehouse (9 tables, 100,000+ orders).',
      achievements: [
        'Achieved 73.40% result equivalence (367/500) with 95% CI [69.26%, 77.18%] and 100% SQL execution success across 8 business domains of the Olist e-commerce warehouse, with zero provider errors, 429s, or timeouts',
        'Designed graph-guided semantic schema RAG combining FAISS embeddings with foreign-key graph traversal, retrieving minimal schema subgraphs at 93.1% precision and 95.3% recall',
        'Introduced DAG query planning with deterministic pre-execution catalog validation that statically prunes hallucinated tables, columns, and join paths prior to SQL generation',
        'Demonstrated via controlled ablation that AST-based structural verification raises execution reliability from 34.0% to 65.0% and result equivalence from 15.0% to 26.0% (McNemar exact p=0.0192, Odds Ratio=3.75)',
        'Audited 101 self-repair events exposing the self-repair trade-off: while 96.0% of post-repair queries were syntactically valid, aggressive repair rules caused 22 false-positive regressions against only 4 genuine recoveries',
        'Derived an AST failure taxonomy across 133 non-equivalent queries — missing join paths (27.8%), filter omissions/errors (24.8%), aggregation mismatches (24.1%) — with controlled synthetic perturbation robustness analysis across 5 vectors'
      ],
      techStack: [
        'Python, SQLite (sandboxed read-only engine), SQLGlot (AST verification)',
        'FAISS, Sentence Transformers, Graph-Guided Schema RAG',
        'Clopper-Pearson / Wilson Score / BCa Bootstrap Statistical Evaluation'
      ]
    }
  },
  {
    id: 'sentinelgraph',
    title: 'SentinelGraph',
    description: 'Behavioral intelligence platform with 7-detector risk fusion, GNN/Graph-RAG traversal, and real-time graph visualization for SOC analysts.',
    category: ['ai-ml', 'data-analysis'],
    tags: ['Python', 'Streamlit', 'NetworkX', 'RAGAS', 'PyTorch', 'Docker', 'FastAPI', 'SHAP', 'Redis'],
    github: 'https://github.com/mjenius/sentinelgraph',
    featured: true,
    details: {
      overview: 'A behavioral intelligence and anomaly detection platform for SOC analysts featuring multi-detector risk fusion, GNN/Graph-RAG traversal, counterfactual explainability, and containerized microservices.',
      achievements: [
        'Architected a 7-detector behavioral anomaly ensemble for 1,000+ entities, suppressing false positive alert rates by over 90% via max-dominant risk fusion',
        'Built an 11-step event-processing pipeline combining graph analysis and risk-fusion services to score 10K+ logs at 3.4ms average latency',
        'Evaluated GNN and Graph-RAG traversal pipelines with RAGAS, achieving 0.942 PR-AUC and sub-10ms scoring latency over 10K benchmark events',
        'Integrated counterfactual explainability and SHAP feature breakdowns, increasing policy explainability and threat triage efficiency by 30%',
        'Reduced threat-triage time 65% by delivering dynamic graph-topology visualization and real-time event-timeline tooling',
        'Containerized backend services with Docker Compose and created a 56-test Pytest suite achieving 100% automated pipeline pass rate'
      ],
      techStack: [
        'Python, FastAPI, Streamlit',
        'PyTorch, NetworkX, RAGAS, SHAP',
        'Docker, Docker Compose, Redis, Pytest'
      ]
    }
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting ML System',
    description: 'Leakage-safe LightGBM forecasting pipeline over 58.3M records with expanding-window validation and PSI drift monitoring.',
    category: ['data-analysis', 'ai-ml'],
    tags: ['LightGBM', 'FastAPI', 'Pandas', 'SciPy', 'SQLite', 'Parquet', 'MLflow', 'Python'],
    github: 'https://github.com/MJenius/demand-forecasting-ml',
    featured: true,
    details: {
      overview: 'A production-grade forecasting pipeline covering 58.3M historical records across 3,049 SKUs and 10 stores, with time-aware cross-validation and PSI-based drift detection.',
      achievements: [
        'Built a leakage-safe LightGBM forecasting pipeline covering 58.3M records, 3,049 SKUs, and 10 stores; evaluated 7- and 28-day horizons using 3-fold expanding-window validation',
        'Achieved the lowest MAE among evaluated models, improving on the strongest baseline by 5.36% at the 7-day horizon and 4.10% at the 28-day horizon',
        'Implemented PSI-based drift monitoring and guarded auto-retraining; rejected a candidate model after detecting a 0.585% RMSE regression and preserved the active model',
        'Added incremental dbt processing, reducing no-op pipeline runtime by 20.9%; PostgreSQL benchmarks averaged 8.74ms across 20 queries'
      ],
      techStack: [
        'Python, LightGBM, FastAPI',
        'Pandas, SciPy, SQLite, Parquet',
        'MLflow, Drift Detection (PSI)'
      ]
    }
  },
  {
    id: 'mandate',
    title: 'Mandate — AI Agent Financial Control Plane',
    description: 'Security-critical financial authorization control plane for AI agents with deterministic policy enforcement, concurrency-safe budget reservations, and self-healing payment workflows.',
    category: ['web', 'ai-ml'],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'MCP', 'Razorpay', 'Docker', 'Pytest', 'Prometheus', 'OpenTelemetry'],
    github: 'https://github.com/MJenius/Mandate-Razorpay-Control-Plane',
    featured: false,
    details: {
      overview: 'A deterministic financial authorization and control plane that sits between autonomous AI agents and Razorpay APIs/MCP. Enforces hierarchical authority, policy-based spending limits, concurrency-safe budget reservations, webhook idempotency, rate limiting, and reconciliation to prevent unauthorized or inconsistent financial operations.',
      achievements: [
        'Built a deterministic authorization gateway with hierarchical delegation, dynamic MCP tool filtering, spending policies, human-review thresholds, and zero-gateway-dispatch enforcement for denied operations',
        'Engineered atomic PostgreSQL budget reservations and validated financial correctness across 12 real Docker/PostgreSQL concurrency trials at 100, 200, and 500 concurrent requests with zero overspend',
        'Implemented idempotent financial state transitions, HMAC webhook verification, replay protection, and self-healing reconciliation for dropped, duplicated, delayed, and out-of-order payment events',
        'Added Redis-backed per-agent rate limiting, Prometheus metrics, OpenTelemetry-compatible observability, property-based testing, and deterministic failure-injection testing',
        'Evaluated authorization against 1,144 hostile simulated scenarios with 100% blocked unauthorized operations and zero unauthorized Razorpay gateway dispatches',
        'Built reproducible CI, Docker-based integration testing, Locust contention tooling, and automated verification covering security, concurrency, recovery, and state-consistency invariants'
      ],
      techStack: [
        'Python, FastAPI, PostgreSQL, Redis',
        'MCP, Razorpay APIs, Docker, Pytest',
        'Prometheus, OpenTelemetry, Locust, Hypothesis'
      ]
    }
  },
  {
    id: 'adaptive-golf',
    title: 'Adaptive Golf Alliance Foundation',
    description: 'Production React application for an external client with responsive navigation, lazy loading, and code-split media gallery.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'Vercel'],
    demo: 'https://www.adaptivegolfalliance.com/',
    featured: true,
    details: {
      overview: 'Delivered a production React application for an external non-profit client with responsive navigation, accessible UI components, and optimized asset delivery.',
      achievements: [
        'Delivered a production React application for an external client with responsive navigation, accessible UI components, and validated contact workflows',
        'Improved frontend performance through lazy loading, asset optimization, and code splitting for a media gallery serving 30+ assets',
        'Managed deployment on Vercel with validated contact workflows supporting reliable production usage'
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
    description: 'PPO reinforcement learning traffic signal system reducing emergency vehicle transit time by 10.6% with SHAP interpretability over 43D state space.',
    category: 'ai-ml',
    tags: ['PPO', 'SUMO', 'Stable-Baselines3', 'SHAP', 'Python', 'Reinforcement Learning'],
    github: 'https://github.com/rajeev8008/Adaptive-Traffic-Signal-Control',
    featured: true,
    details: {
      overview: 'A safety-critical RL system using Proximal Policy Optimization and SUMO simulation to optimize emergency transit and intersection flow, with SHAP-based interpretability over a 43-dimensional state space.',
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
    period: 'Jun 2026 - Aug 2026',
    description: 'Participated in architecture reviews for an enterprise-grade, multi-tenant AI platform processing structured Excel data and unstructured documents. Reviewed the Python/FastAPI codebase, tracing API-to-service-to-repository workflows for document ingestion, OCR, LLM extraction, embeddings, and Qdrant-based semantic retrieval. Studied RAG retrieval, vector-search, and conversational AI flows across distributed services spanning FastAPI, NestJS, RabbitMQ, MongoDB/CosmosDB, and Azure Blob Storage.',
    tags: ['FastAPI', 'RAG', 'Qdrant', 'Vector Search', 'Embeddings', 'System Architecture', 'Distributed Services'],
    glowColors: ['#6366f1', '#a855f7', '#ec4899']
  },
  {
    title: 'Web Developer Intern',
    organization: 'Superhhero Learning',
    period: 'Jun 2025 - Sep 2025',
    description: 'Developed and deployed 8+ MERN pages serving 100+ active users. Optimized MongoDB indexing and query execution, reducing API response latency by 25%. Built aggregation pipelines for real-time product analytics, cutting reporting effort by 40%. Improved page-load speed by 10% through asset compression and performance observability pipelines.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Performance Optimization', 'Aggregation Pipelines'],
    glowColors: ['#0894FF', '#C959DD', '#FF2E54']
  },
  {
    title: 'B.Tech in AI & Machine Learning',
    organization: 'PES University, Bangalore',
    period: 'Aug 2023 - May 2027',
    description: 'CGPA: 7.85 / 10.00. Coursework includes Explainable AI, LLMs & Applications (RAG), Advanced Foundations of ML (Deep Learning, Reinforcement Learning), Database Management Systems, Data Warehousing and Mining, Cloud Computing, Software Engineering, and Compiler Design.',
    tags: ['AI & ML', 'Explainable AI', 'LLMs & RAG', 'Deep Learning', 'Reinforcement Learning', 'Distributed Systems'],
    glowColors: ['#9333ea', '#ec4899', '#3b82f6']
  }
];

export const skills = {
  languages: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java', 'R'],
  webBackend: ['FastAPI', 'Node.js', 'Express', 'React', 'Next.js', 'TailwindCSS', 'REST', 'gRPC', 'JWT', 'RBAC', 'Flask', 'Streamlit', 'Vercel'],
  aiMl: ['PyTorch', 'Scikit-learn', 'LightGBM', 'OpenCV', 'SHAP', 'LangChain', 'LangGraph', 'RAG', 'FAISS', 'Qdrant', 'Pinecone', 'Sentence Transformers', 'Multi-Agent AI', 'RAGAS', 'PPO (SUMO)', 'PyMC', 'DoWhy', 'NLP', 'Hugging Face', 'PEFT (LoRA)'],
  infraDevops: ['Docker', 'Kubernetes', 'Kafka', 'GitHub Actions', 'AWS (EC2, S3)', 'CI/CD', 'Airflow', 'dbt', 'MLflow', 'Parquet', 'BigQuery', 'Drift Detection', 'Model Monitoring', 'Event-Driven Systems', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Pandas', 'NumPy', 'SciPy', 'Statistical Analysis', 'Data Validation', 'Tableau']
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
