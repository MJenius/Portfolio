import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { initPortfolio } from './portfolio';
import { SocialLinks } from './components/social-links';
import { MicroExpanderNavBar } from './components/ui/micro-expander-navbar';
import { GradientButton } from './components/ui/gradient-button';
import { GooeyText } from './components/ui/gooey-text-morphing';
import { Home, Briefcase, Lightbulb, MessageSquare, Download, Eye, Mail, User, BriefcaseBusiness, Award } from 'lucide-react';
import { Vortex } from './components/ui/vortex';
import { ThreeDPhotoCarouselDemo, DemoOne } from '@/components/ui/demo';
import { ProfileCard } from '@/components/ui/profile-card';
import { LiveEngineeringStats } from './components/live-engineering-stats';
import { ProjectsHoverEffect } from './components/ui/projects-hover-effect';
import { ExperienceTimeline } from './components/ui/experience-timeline';
import SchemaCard from './components/ui/schema-card-with-animated-wave-visualizer';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About Me', url: '#about', icon: User },
  { name: 'Work Experience', url: '#experience', icon: BriefcaseBusiness },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Lightbulb },
  { name: 'Certifications', url: '#certifications', icon: Award },
  { name: 'Contact', url: '#contact', icon: MessageSquare }
];

const htmlContent = `

  <section id="home" class="min-h-screen flex items-start justify-center pt-28 px-6">
      <div class="max-w-6xl mx-auto text-center relative z-20">
      <div class="reveal-element">
        <img src="resources/profile-avatar.png" alt="Mevin Jose Profile Pic"
          class="profile-avatar mx-auto mb-8 floating-animation">
      </div>

      <div class="reveal-element">
        <div id="particle-text-container" class="h-30 flex items-center justify-center mb-10"></div>
      </div>

      

      <div id="hero-buttons-container" class="reveal-element flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"></div>

      <div id="social-links-container" class="reveal-element flex justify-center mt-2"></div>
    </div>
  </section>

  <section class="pt-40 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8 reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          A showcase of my most impactful work in AI/ML and full-stack development
        </p>
      </div>

      <div id="featured-carousel-container" class="reveal-element"></div>
    </div>
  </section>

  <section id="about" class="py-16 px-6 relative overflow-hidden">
    <div class="absolute inset-0 bg-linear-to-b from-slate-900/0 via-slate-900/40 to-slate-950"></div>
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-8 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
      </div>

      <div class="reveal-element flex justify-center" id="profile-card-container"></div>
    </div>
  </section>

  <section id="experience" class="pt-32 pb-16 px-6 -scroll-mt-28">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience Timeline</h2>
        <p class="text-slate-300">My journey in technology and software development</p>
      </div>

      <div class="reveal-element" id="experience-timeline-container"></div>
    </div>
  </section>

  <section id="projects" class="pt-20 pb-6 px-6  -scroll-mt-16">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          A comprehensive showcase of my work in AI/ML, full-stack development, and innovative problem-solving
        </p>
      </div>
    </div>
  </section>

  <section class="pb-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="reveal-element flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
        <div class="flex-1 max-w-md">
          <input type="text" id="project-search" placeholder="Search projects..."
            class="search-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-400 focus:outline-none">
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="filter-btn active px-4 py-2 rounded-lg text-sm font-medium" data-filter="all">
            All Projects
          </button>
          <button class="filter-btn px-4 py-2 rounded-lg text-sm font-medium" data-filter="ai-ml">
            AI/ML
          </button>
          <button class="filter-btn px-4 py-2 rounded-lg text-sm font-medium" data-filter="web">
            Web Development
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-20 px-6">
    <div class="max-w-6xl mx-auto" style="max-width:1560px;">
      <div class="reveal-element" id="projects-hover-container"></div>
    </div>
  </section>

  <div id="modal-smms" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('smms')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Social Media Management System (SMMS)</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A production-grade social media management platform designed for teams and agencies to efficiently manage multiple accounts, schedule content, automate publishing, and track analytics from a unified dashboard.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Role-based access control (RBAC) for secure multi-user workflows</li>
          <li>Post scheduling and auto-publishing with queue management</li>
          <li>Comprehensive analytics and engagement tracking</li>
          <li>Built with ~77% automated test coverage for production reliability</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Node.js with Express.js backend</li>
          <li>SQLite for data persistence</li>
          <li>Role-based access control (RBAC) implementation</li>
          <li>RESTful APIs with comprehensive error handling</li>
          <li>Jest/Mocha for automated testing</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Social-Media-Management-System" target="_blank"
            class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-voice-assistant" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('voice-assistant')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">AI Voice Assistant for LeetCode</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A sophisticated voice-enabled assistant that revolutionizes how developers prepare for technical
          interviews.
          This project combines natural language processing with voice synthesis to create an interactive
          learning experience.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Features:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Voice command recognition for hands-free operation</li>
          <li>Company-specific problem suggestions using LeetCode API</li>
          <li>Context-aware problem recommendations based on user history</li>
          <li>Real-time voice feedback using ElevenLabs API</li>
          <li>Dynamic problem query handling (50+ problem types)</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Implementation:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>spaCy NLP for intent recognition and entity extraction</li>
          <li>LeetCode API integration for problem data</li>
          <li>ElevenLabs for natural voice synthesis</li>
          <li>Python-based backend with async processing</li>
          <li>30% improvement in response accuracy over rule-based systems</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/AI-Voice-Assistant-Python" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-superhhero" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('superhhero')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Superhhero Learning Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A comprehensive full-stack MERN application serving as the official landing page for Superhhero
          Learning,
          an innovative ed-tech platform. This project demonstrates enterprise-level development practices and
          scalable architecture.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Developed and deployed full-stack MERN application</li>
          <li>Collaborated with 4+ developers to streamline integration</li>
          <li>Reduced development time by 25% through optimized workflows</li>
          <li>Improved load time performance by 10% through API optimization</li>
          <li>Ensured cross-platform compatibility across devices</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>React with modern hooks and state management</li>
          <li>Node.js with Express.js backend architecture</li>
          <li>MongoDB for flexible data storage</li>
          <li>Responsive design with mobile-first approach</li>
          <li>RESTful API design with proper error handling</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://www.superhhero.com/" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-spotify" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('spotify')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Spotify Song Recommender</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A K-Nearest Neighbors recommendation engine that uses audio features from the Spotify API to provide
          personalized song suggestions tailored to user taste.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Analyzes 10+ audio features (tempo, energy, danceability, instrumentalness, etc.) to compute
            similarity</li>
          <li>Produces personalized playlists with an 80% relevance score on user validation</li>
          <li>Optimized feature pipeline for faster similarity lookups and reduced latency</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Scikit-learn (KNN), Spotipy / Spotify Web API</li>
          <li>Pandas & NumPy for data processing</li>
          <li>Simple Flask/Streamlit demo for interactive exploration</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Spotify-Song-Recommender" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-cardiovascular" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('cardiovascular')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Cardiovascular Disease Prediction</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A clinical prediction model using Support Vector Machines to estimate cardiovascular disease risk
          from patient vitals and laboratory features.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Engineered and selected 11 clinical predictors to improve model robustness</li>
          <li>Achieved 72% accuracy on held-out test data with cross-validation</li>
          <li>Produced explainability plots to highlight top contributing features for clinicians</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Scikit-learn (SVM), Pandas</li>
          <li>Matplotlib/Seaborn for visualization</li>
          <li>Notebook-based analysis with reproducible preprocessing steps</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Cardiovascular-Disease-Prediction" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-delivery" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('delivery')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Food Delivery Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A multi-vendor full-stack platform built to manage listings, orders, and real-time delivery updates
          across multiple restaurants.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Integrated 5+ vendors with order management and admin dashboards</li>
          <li>Implemented real-time order tracking and notifications using Socket.io</li>
          <li>Designed admin analytics to monitor vendor performance and orders</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>React frontend, Node.js + Express backend</li>
          <li>MongoDB for vendor & order storage, Socket.io for realtime</li>
          <li>Deployed with basic CI and environment-based configuration</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/BetterPESwiggy" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-aegis" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('aegis')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">AEGIS Surveillance System</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A tamper-resistant surveillance system developed for the Kodikon Hackathon (Top-10/280 teams). It secures CCTV feeds using real-time computer vision, cryptographic HMAC-SHA256 watermarks, and forensic analysis to detect physical attacks, replay attacks, and feed manipulation.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Real-time detection of blur, shake, glare, blackout, and replay attacks</li>
          <li>Achieved &lt;2% false positives and &lt;100ms detection latency</li>
          <li>Cryptographically verifiable incident logging with HMAC-SHA256 watermarks</li>
          <li>Forensic analysis for post-attack investigation and evidence preservation</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, OpenCV, Flask, Socket.IO</li>
          <li>HMAC-SHA256 for cryptographic watermarking</li>
          <li>SQLite for secure incident logging</li>
          <li>ffmpeg for stream processing</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/ZeroDeaths7/Aegis-Tamper-Resistant-Surveillance-System"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-traffic-rl" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('traffic-rl')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Adaptive Traffic-Signal Control</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A Reinforcement Learning system optimizing emergency vehicle routing using Proximal Policy
          Optimization (PPO), trained on a large Bangalore traffic dataset.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Reduced emergency travel time by 10.6%</li>
          <li>Improved general traffic flow: Trucks (4.2%), Cars (3.4%), Bikes (1.2%)</li>
          <li>Built custom SUMO environments and PPO agent training pipelines</li>
          <li>Developed comprehensive analytics visualizations for performance metrics</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, Stable-Baselines3 (PPO)</li>
          <li>SUMO Traffic Simulator</li>
          <li>Pandas, NumPy for data analysis</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/rajeev8008/sumo-traffic-rl-project" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-pdf-playground" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('pdf-playground')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">DocParse AI – Intelligent PDF Extraction Platform</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          A full-stack multi-model PDF extraction platform that leverages state-of-the-art models like Surya,
          Docling, and MinerU, with a PyMuPDF fallback for speed.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Achieved 99% extraction accuracy across complex document layouts</li>
          <li>35% faster processing with optimized pipelines</li>
          <li>Deployed via Modal for serverless GPU inference and Vercel for frontend</li>
          <li>Automated CI/CD workflows for seamless updates</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>FastAPI, Next.js, TypeScript</li>
          <li>PyMuPDF, Surya, Docling, MinerU</li>
          <li>Modal, Vercel, GitHub Actions</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/PDF-Extractor-With-PymuPDF" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
          <a href="https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/" target="_blank"
            class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-colors">Live
            Demo</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-ct-radiomics" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('ct-radiomics')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">CT-Based Radiomics for COVID-19</h2>
      <div class="space-y-4 text-slate-300">
        <p>This project provides a radiomics pipeline for extracting quantitative features from chest CT scans
          to support triage and prognosis for COVID-19 patients.</p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>End-to-end feature extraction using PyRadiomics</li>
          <li>Model evaluation and reproducible experiments</li>
          <li>Comprehensive README and usage examples</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, PyRadiomics, NumPy</li>
          <li>Scikit-learn for modeling and evaluation</li>
          <li>ITK / SimpleITK for image IO and preprocessing</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/rajeev8008/CT-Based-Radiomics-for-COVID-19-Patient-Triage"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-demand-forecasting" class="modal">
    <div class="modal-content p-8 m-4">
      <button class="modal-close" onclick="closeModal('demand-forecasting')">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Demand Forecasting ML System</h2>
      <div class="space-y-4 text-slate-300">
        <p>
          End-to-end retail demand forecasting system with hybrid ML modeling, monitoring, and
          auto-retraining.
          Designed for 30k+ SKU–store time series in production environments.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Deployed hybrid ML + statistical forecasting (∙25% MAE improvement)</li>
          <li>Implemented drift detection & model versioning for production-safe retraining</li>
          <li>Leakage-safe feature engineering with explicit baseline validation</li>
          <li>Model registry with versioning, rollback support, and safe promotions</li>
          <li>Production-style FastAPI inference with /health, /model-info, /predict endpoints</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, LightGBM, Pandas, NumPy, SciPy</li>
          <li>FastAPI for production inference API</li>
          <li>SQLite, Parquet for storage</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/MJenius/Demand-Forecasting-ML-System" target="_blank"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">View on
            GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <section id="skills" class="pt-0 pb-20 px-6 -scroll-mt-28">
    <div class="max-w-6xl mx-auto">
      <div id="technologies-showcase-container" class="reveal-element"></div>
    </div>
  </section>

  <section id="certifications" class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Certifications</h2>
        <p class="text-slate-300">Professional certifications and achievements</p>
      </div>

      <div class="cert-grid reveal-element">
        <a href="https://coursera.org/share/11aafe0abcf8437084bc6d19db82c564" data-cert="google-data-analytics"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <img src="https://www.google.com/favicon.ico" alt="Google Logo" class="w-12 h-12 mr-4 rounded-lg object-contain" />
            <div>
              <h3 class="text-lg font-bold text-white">Google Data Analytics</h3>
              <p class="text-slate-400 text-sm">Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Comprehensive certification in data analysis, visualization, and
            business intelligence using Google tools.</p>
        </a>

        <a href="https://coursera.org/share/beaa01b66b9804e5d9547c403fa9840f" data-cert="ibm-generative-ai"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <img src="https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg" alt="IBM Logo" class="w-12 h-12 mr-4 rounded-lg object-contain" />
            <div>
              <h3 class="text-lg font-bold text-white">IBM Generative AI</h3>
              <p class="text-slate-400 text-sm">Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Advanced certification in generative AI technologies, including
            GPT models and prompt engineering.</p>
        </a>

        <a href="https://coursera.org/share/2db49eb5a4a3fbd458b3c759d3635992"
          data-cert="microsoft-computer-vision" target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft Logo" class="w-12 h-12 mr-4 rounded-lg object-contain" />
            <div>
              <h3 class="text-lg font-bold text-white">Microsoft Computer Vision</h3>
              <p class="text-slate-400 text-sm">Azure AI</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Specialized certification in Azure Cognitive Services for computer
            vision and image processing.</p>
        </a>

        <a href="https://www.kaggle.com/mjeniusmj" data-cert="kaggle-ml-dl" target="_blank"
          rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <img src="https://www.kaggle.com/favicon.ico" alt="Kaggle Logo" class="w-12 h-12 mr-4 rounded-lg object-contain" />
            <div>
              <h3 class="text-lg font-bold text-white">Kaggle ML & DL</h3>
              <p class="text-slate-400 text-sm">Kaggle</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Expert-level certification in machine learning and deep learning
            through practical competitions.</p>
        </a>

        <a href="https://coursera.org/share/3b59ffff270c01b2e6ffdc4fb13abc2f" data-cert="meta-genai-analytics"
          target="_blank" rel="noopener noreferrer"
          class="certification-badge p-6 rounded-xl block hover:bg-slate-700/50 transition-colors">
          <div class="flex items-center mb-4">
            <img src="https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg" alt="Meta Logo" class="w-12 h-12 mr-4 rounded-lg object-contain" />
            <div>
              <h3 class="text-lg font-bold text-white">Meta GenAI Analytics</h3>
              <p class="text-slate-400 text-sm">Meta/Coursera</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm">Advanced certification in generative AI applications for data
            analytics and business intelligence.</p>
        </a>
      </div>
    </div>
  </section>

  <section id="contact" class="min-h-screen pt-6 pb-20 px-6 flex flex-col justify-center">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-12 reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-2 gradient-text">Contact Me</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="reveal-element" id="schema-card-container"></div>

        <div class="reveal-element">
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-6">Contact</h2>
              <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Email</h3>
                  <a href="mailto:mjenius1357@gmail.com"
                    class="text-slate-300 hover:text-blue-400 transition-colors">
                    mjenius1357@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Location</h3>
                  <p class="text-slate-300">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white mb-4">Profiles</h3>
              <div class="grid grid-cols-2 gap-4">
                <a href="https://github.com/MJenius" target="_blank"
                  class="social-link p-4 rounded-lg flex items-center">
                  <svg class="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <h4 class="text-white font-semibold">GitHub</h4>
                    <p class="text-slate-400 text-sm">@MJenius</p>
                  </div>
                </a>

                <a href="https://leetcode.com/u/mjenius1357/" target="_blank"
                  class="social-link p-4 rounded-lg flex items-center">
                  <svg class="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                  </svg>
                  <div>
                    <h4 class="text-white font-semibold">LeetCode</h4>
                    <p class="text-slate-400 text-sm">@mjenius1357</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-12 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="flex justify-center space-x-6 mb-6">
        <a href="https://leetcode.com/u/mjenius1357/" target="_blank"
          class="text-slate-400 hover:text-white transition-colors">
          LeetCode
        </a>
        <a href="https://github.com/MJenius" target="_blank"
          class="text-slate-400 hover:text-white transition-colors">
          GitHub
        </a>
        <a href="mailto:mjenius1357@gmail.com" class="text-slate-400 hover:text-white transition-colors">
          Email
        </a>
      </div>
      <p class="text-slate-400">
        Mevin Jose, AIML Student at PES University
      </p>
    </div>
  </footer>
`;

function App() {
  useEffect(() => {
    // Mount a single global Vortex background
    const vortexContainer = document.createElement('div');
    vortexContainer.id = 'vortex-global';
    Object.assign(vortexContainer.style, {
      position: 'fixed',
      inset: '0',
      width: '100%',
      height: '100%',
      zIndex: '0',
      pointerEvents: 'none',
    });
    document.body.prepend(vortexContainer);

    const vortexRoot = ReactDOM.createRoot(vortexContainer);
    vortexRoot.render(
      <Vortex
        backgroundColor="#000000"
        rangeY={800}
        particleCount={900}
        baseHue={220}
        containerClassName="w-full h-full"
      />
    );

    // Wait for next tick to ensure DOM is ready, then mount shadcn pieces
    setTimeout(() => {
      initPortfolio();

      // Mount React components to their containers
      // Mount Featured 3D Carousel
      const featuredCarouselContainer = document.getElementById('featured-carousel-container');
      if (featuredCarouselContainer) {
        const root = ReactDOM.createRoot(featuredCarouselContainer);
        root.render(<ThreeDPhotoCarouselDemo />);
      }
      const navContainer = document.getElementById('navbar-container');
      if (navContainer) {
        const root = ReactDOM.createRoot(navContainer);
        root.render(<MicroExpanderNavBar items={navItems} />);
      }

      const socialContainer = document.getElementById('social-links-container');
      if (socialContainer) {
        const root = ReactDOM.createRoot(socialContainer);
        root.render(<SocialLinks />);
      }

      // Mount Hero Buttons
      const heroButtonsContainer = document.getElementById('hero-buttons-container');
      if (heroButtonsContainer) {
        const root = ReactDOM.createRoot(heroButtonsContainer);
        root.render(
          <>
            <GradientButton asChild>
              <a href="#projects">
                <Eye className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </GradientButton>
            <GradientButton variant="variant" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </GradientButton>
            <GradientButton asChild>
              <a href="Mevin%20Jose%20Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </GradientButton>
          </>
        );
      }

      // Mount Live Engineering Stats
      const liveStatsContainer = document.getElementById('live-stats-container');
      if (liveStatsContainer) {
        const root = ReactDOM.createRoot(liveStatsContainer);
        root.render(<LiveEngineeringStats />);
      }

      // Mount Profile Card
      const profileCardContainer = document.getElementById('profile-card-container');
      if (profileCardContainer) {
        const root = ReactDOM.createRoot(profileCardContainer);
        root.render(<ProfileCard />);
      }

      // Mount Experience Timeline
      const experienceTimelineContainer = document.getElementById('experience-timeline-container');
      if (experienceTimelineContainer) {
        const experienceItems = [
          {
            title: 'B.Tech in Artificial Intelligence & Machine Learning',
            organization: 'PES University, Bangalore',
            period: '2023 – 2027',
            description:
              'Pursuing a Bachelor\'s degree with a current CGPA of 7.78. Focus on building strong foundations in core computer science and applied machine learning.',
            tags: ['Machine Learning', 'Data Structures', 'Software Engineering', 'Algorithms'],
            glowColors: ['#9333ea', '#ec4899', '#3b82f6'],
          },
          {
            title: 'Web Development Intern',
            organization: 'Superhhero Learning',
            period: 'July 2025 – September 2025',
            description:
              'Built and deployed a production MERN platform for ~100 monthly users. Improved API performance by 10% and reduced development iteration time by 25%.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'Vercel'],
            glowColors: ['#0894FF', '#C959DD', '#FF2E54'],
          },
        ];
        const root = ReactDOM.createRoot(experienceTimelineContainer);
        root.render(<ExperienceTimeline items={experienceItems} />);
      }

      // Mount Email Button
      const emailButtonContainer = document.getElementById('email-button-container');
      if (emailButtonContainer) {
        const root = ReactDOM.createRoot(emailButtonContainer);
        root.render(
          <GradientButton className="w-full" asChild>
            <a href="mailto:mjenius1357@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </GradientButton>
        );
      }

      // Mount Resume Download Button
      const resumeButtonContainer = document.getElementById('resume-button-container');
      if (resumeButtonContainer) {
        const root = ReactDOM.createRoot(resumeButtonContainer);
        root.render(
          <GradientButton className="w-full" variant="variant" asChild>
            <a href="Mevin%20Jose%20Resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </GradientButton>
        );
      }

      // Mount Schema Card
      const schemaCardContainer = document.getElementById('schema-card-container');
      if (schemaCardContainer) {
        const root = ReactDOM.createRoot(schemaCardContainer);
        root.render(<SchemaCard />);
      }

      // Mount GooeyText Component
      const particleTextContainer = document.getElementById('particle-text-container');
      if (particleTextContainer) {
        const root = ReactDOM.createRoot(particleTextContainer);
        root.render(
          <GooeyText
            texts={['AI Developer', 'ML Engineer', 'Fullstack Dev', 'Problem Solver']}
            morphTime={1}
            cooldownTime={0.25}
          />
        );
      }

      // Mount Projects Hover Effect
      const projectsHoverContainer = document.getElementById('projects-hover-container');
      if (projectsHoverContainer) {
        const root = ReactDOM.createRoot(projectsHoverContainer);
        root.render(<ProjectsHoverEffect />);
      }

      // Mount Technologies Showcase
      const technologiesContainer = document.getElementById('technologies-showcase-container');
      if (technologiesContainer) {
        const root = ReactDOM.createRoot(technologiesContainer);
        root.render(<DemoOne />);
      }
    }, 0);

    return () => {
      vortexRoot.unmount();
      vortexContainer.remove();
    };
  }, []);

  return (
    <>
      <div id="navbar-container"></div>
      <div className="relative z-10" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export default App;
