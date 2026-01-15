import { useEffect } from 'react';
import { initPortfolio } from './portfolio';

const content = `
  <nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#home" class="text-xl font-bold gradient-text" style="text-decoration:none;">Mevin Jose
          Portfolio</a>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="nav-link active text-slate-300 hover:text-white">Home</a>
          <a href="#projects" class="nav-link text-slate-300 hover:text-white">Projects</a>
          <a href="#skills" class="nav-link text-slate-300 hover:text-white">Skills</a>
          <a href="#contact" class="nav-link text-slate-300 hover:text-white">Contact</a>
        </div>
        <button class="md:hidden text-slate-300 hover:text-white" id="mobile-menu-btn">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6">
    <div class="hero-bg"></div>
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <img src="/resources/profile-avatar.png" alt="Mevin Jose Profile Pic"
          class="profile-avatar mx-auto mb-8 floating-animation">
      </div>

      <div class="reveal-element">
        <h1 class="hero-title text-5xl md:text-7xl font-bold mb-6">
          <span class="gradient-text" id="typed-text"></span>
          <span class="typewriter-cursor">|</span>
        </h1>
      </div>

      <div class="reveal-element">
        <p class="hero-subtitle text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Turning ideas into impactful products with AI and modern web tech. Building smart, scalable
          solutions for tomorrow.
        </p>
      </div>

      <div class="reveal-element flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a href="#projects"
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 transition-all btn-highlight-hover">
          View My Work
        </a>
        <a href="#contact"
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all btn-highlight-hover">
          Get In Touch
        </a>
        <a href="/Mevin Jose Resume.pdf" download
          class="border border-slate-600 px-8 py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all btn-highlight-hover">
          Download Resume
        </a>
      </div>

      <div class="reveal-element flex justify-center space-x-6 text-slate-400">
        <a href="https://github.com/MJenius" target="_blank" class="skill-icon hover:text-blue-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://leetcode.com/u/mjenius1357/" target="_blank" class="skill-icon hover:text-orange-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
          </svg>
        </a>
        <a href="mailto:mjenius1357@gmail.com" class="skill-icon hover:text-green-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          A showcase of my most impactful work in AI/ML and full-stack development
        </p>
      </div>

      <div class="splide reveal-element" id="featured-projects">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Demand Forecasting ML</h3>
                    <p class="text-slate-400">MLOps • End-to-End • Production</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  End-to-end retail demand forecasting with hybrid ML + statistical models,
                  drift detection, and auto-retraining pipeline.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">LightGBM</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Pandas</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> ↓25% MAE improvement
                  </div>
                  <a href="https://github.com/MJenius/Demand-Forecasting-ML-System" target="_blank"
                    class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">AEGIS Surveillance</h3>
                    <p class="text-slate-400">CV • Security • Top-10 Hackathon</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Tamper-resistant surveillance system using HMAC-SHA256 watermarking and real-time
                  tamper detection (blur, glare, blackout).
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">OpenCV</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Flask</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Socket.IO</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> &lt;2% false positives
                  </div>
                  <a href="https://github.com/ZeroDeaths7/AegisAI-tamper-resistent-surveillance-system"
                    target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Adaptive Traffic Control</h3>
                    <p class="text-slate-400">RL • PPO • Smart City</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Reinforcement Learning agent (PPO) optimizing emergency vehicle routing in SUMO,
                  trained on Bangalore traffic data.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Python</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Stable-Baselines3</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">SUMO</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Pandas</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> 10.6% faster emergency travel
                  </div>
                  <a href="https://github.com/rajeev8008/sumo-traffic-rl-project" target="_blank"
                    class="text-blue-400 hover:text-blue-300 transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
            </li>

            <li class="splide__slide">
              <div class="project-card p-8 rounded-xl card-hover">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">DocParse AI</h3>
                    <p class="text-slate-400">Full Stack • Multi-Model • SaaS</p>
                  </div>
                </div>
                <p class="text-slate-300 mb-6">
                  Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback.
                  Deployed via Modal + Vercel.
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Modal</span>
                  <span class="tech-tag px-3 py-1 rounded-full text-sm">Vercel</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="text-sm text-slate-400">
                    <span class="text-green-400">●</span> 99% accuracy
                  </div>
                  <div class="flex gap-4">
                    <a href="https://pdf-playground-8wlek8vg8-mevin-joses-projects.vercel.app/" target="_blank"
                      class="text-blue-400 hover:text-blue-300 transition-colors">Live Demo →</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-6 bg-slate-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Expertise</h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Specialized in AI/ML and modern web development technologies
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-element">
        <div class="text-center">
          <div
            class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 skill-icon">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">AI/ML Development</h3>
          <p class="text-slate-300 mb-6">
            Building intelligent solutions with cutting-edge machine learning algorithms and data-driven
            insights
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Python</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">TensorFlow</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Scikit-learn</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">Pandas</span>
            <span class="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm">NumPy</span>
          </div>
        </div>

        <div class="text-center">
          <div
            class="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 skill-icon">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">Web Development</h3>
          <p class="text-slate-300 mb-6">
            Creating scalable, responsive applications with modern frameworks and clean architecture
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">React</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">Node.js</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">MongoDB</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">Express</span>
            <span class="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="reveal-element">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
          <div class="prose max-w-none text-left">
            <p class="mb-4">
              Hi, I'm Mevin Jose, an AI/ML and Software Engineering student at PES University (2023–2027)
              with hands-on experience designing and deploying real-time computer vision applications
              and end-to-end ML pipelines in production environments.
            </p>

            <p class="mb-4">
              I'm proficient in Python, FastAPI, Node.js, React, TensorFlow, and PyTorch, with strong
              foundations in system design, microservices, RESTful APIs, CI/CD automation, and cloud
              deployment (Vercel, Modal).
            </p>

            <p class="mt-4">
              I'm passionate about building high-performance software that integrates AI innovation
              and clean engineering practices to deliver measurable impact. Currently open to
              internships and collaboration opportunities.
            </p>

          </div>
          <div class="bg-slate-800/40 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-white mb-3">Quick facts</h3>
            <ul class="list-none space-y-2 text-left">
              <li><strong>Education:</strong> B.Tech (AI & ML), PES University</li>
              <li><strong>Location:</strong> Bangalore, India</li>
              <li><strong>Email:</strong> <a href="mailto:mjenius1357@gmail.com"
                  class="text-blue-400 hover:underline">mjenius1357@gmail.com</a></li>
              <li><strong>Open to:</strong> Internships & Collaboration</li>
            </ul>
            <h4 class="mt-4 font-semibold">Certifications</h4>
            <ul class="list-disc pl-5 mt-2">
              <li><a href="https://coursera.org/share/11aafe0abcf8437084bc6d19db82c564"
                  data-cert="google-data-analytics" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Google Data Analytics</a></li>
              <li><a href="https://coursera.org/share/beaa01b66b9804e5d9547c403fa9840f"
                  data-cert="ibm-generative-ai" class="text-blue-400 hover:underline" target="_blank"
                  rel="noopener noreferrer">IBM Generative AI</a></li>
              <li><a href="https://coursera.org/share/3b59ffff270c01b2e6ffdc4fb13abc2f"
                  data-cert="meta-genai-analytics" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Meta GenAI</a></li>
              <li><a href="https://coursera.org/share/2db49eb5a4a3fbd458b3c759d3635992"
                  class="text-blue-400 hover:underline" target="_blank"
                  rel="noopener noreferrer">Microsoft Computer Vision</a></li>
              <li><a href="https://www.kaggle.com/mjeniusmj" class="text-blue-400 hover:underline"
                  target="_blank" rel="noopener noreferrer">Kaggle ML & DL</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="pt-20 pb-6 px-6">
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
      <div class="project-grid reveal-element" id="projects-grid">
        <div class="project-card p-6 rounded-xl" data-category="ai-ml" data-title="AEGIS Surveillance System">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">AEGIS Surveillance</h3>
              <p class="text-slate-400 text-sm">CV • Security • Top-10 Hackathon</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Tamper-resistant surveillance system using HMAC-SHA256 watermarking and real-time tamper
            detection (blur, glare, blackout).
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">OpenCV</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Flask</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Socket.IO</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> &lt;2% false positives
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('aegis')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml" data-title="Adaptive Traffic Control">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Adaptive Traffic Control</h3>
              <p class="text-slate-400 text-sm">RL • PPO • Smart City</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Reinforcement Learning agent (PPO) optimizing emergency vehicle routing in SUMO, trained on
            Bangalore traffic data.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Stable-Baselines3</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">SUMO</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Pandas</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 10.6% faster emergency travel
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('traffic-rl')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="web" data-title="DocParse AI">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">DocParse AI</h3>
              <p class="text-slate-400 text-sm">Full Stack • Multi-Model • SaaS</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Multi-model PDF extraction platform (Surya, Docling, MinerU) with PyMuPDF fallback. Deployed via
            Modal + Vercel.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">FastAPI</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Next.js</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Modal</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Vercel</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 99% accuracy
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('pdf-playground')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="AI Voice Assistant for LeetCode">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">AI Voice Assistant</h3>
              <p class="text-slate-400 text-sm">Python • NLP • Voice</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Voice-enabled assistant for LeetCode problem solving with company-specific suggestions using
            spaCy NLP and LeetCode API integration.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">spaCy</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">ElevenLabs</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">LeetCode API</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 30% accuracy improvement
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('voice-assistant')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="web" data-title="Superhhero Learning Platform">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Superhhero Learning</h3>
              <p class="text-slate-400 text-sm">MERN • Ed-Tech</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            Full-stack MERN application for online learning platform with scalable architecture and
            optimized performance.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">React</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Node.js</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">MongoDB</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Express</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> 25% faster development
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('superhhero')">
              View Details →
            </button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="CT-Based Radiomics for COVID-19">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 2l4 4-4 4-4-4 4-4z M2 20l4-4 4 4-4 4-4-4z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">CT-Based Radiomics for COVID-19</h3>
              <p class="text-slate-400 text-sm">Medical Imaging • Radiomics</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">A research-oriented radiomics pipeline for CT-based triage of
            COVID-19 patients, including feature extraction and model evaluation.</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">PyRadiomics</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Scikit-learn</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Image Processing</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400"><span class="text-green-400">●</span> Research pipeline
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('ct-radiomics')">View Details →</button>
          </div>
        </div>

        <div class="project-card p-6 rounded-xl" data-category="ai-ml"
          data-title="Demand Forecasting ML System">
          <div class="flex items-center mb-4">
            <div
              class="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Demand Forecasting ML</h3>
              <p class="text-slate-400 text-sm">MLOps • End-to-End • Production</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mb-4">
            End-to-end retail demand forecasting system with hybrid ML modeling, drift detection, model
            registry,
            and safe auto-retraining pipeline.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag px-2 py-1 rounded-full text-xs">Python</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">LightGBM</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">FastAPI</span>
            <span class="tech-tag px-2 py-1 rounded-full text-xs">MLOps</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-xs text-slate-400">
              <span class="text-green-400">●</span> ∙25% MAE improvement
            </div>
            <button class="text-blue-400 hover:text-blue-300 transition-colors text-sm"
              onclick="openModal('demand-forecasting')">View Details →</button>
          </div>
        </div>
      </div>
    </div>
  </section>

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
          A tamper-resistant surveillance system developed for the Kodikon Hackathon (Top-10/280 teams). It
          secures CCTV feeds using HMAC-SHA256 watermarks and detects tampering in real-time.
        </p>
        <h3 class="text-xl font-semibold text-white">Key Achievements:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Real-time detection of blur, shake, glare, and blackout events</li>
          <li>Achieved &lt;2% false positives and &lt;100ms detection latency</li>
          <li>Implemented glare rescue (CLAHE) and flow-based reposition detection</li>
          <li>Secure incident logging with cryptographic verification</li>
        </ul>
        <h3 class="text-xl font-semibold text-white">Technical Stack:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Python, OpenCV, Flask, Socket.IO</li>
          <li>HMAC-SHA256 for watermarking</li>
          <li>ffmpeg for stream processing</li>
          <li>SQLite for incident logging</li>
        </ul>
        <div class="flex gap-4 mt-6">
          <a href="https://github.com/ZeroDeaths7/AegisAI-tamper-resistent-surveillance-system"
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

  <section id="skills" class="pt-32 pb-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">Technical Skills</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          A comprehensive overview of my expertise across AI/ML, web development, and software engineering
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 bg-slate-800/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience Timeline</h2>
        <p class="text-slate-300">My journey in technology and software development</p>
      </div>

      <div class="space-y-8 reveal-element">
        <div class="timeline-item">
          <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white">B.Tech in AI & ML</h3>
              <span class="text-blue-400 font-semibold">2023 - 2027</span>
            </div>
            <p class="text-slate-400 font-medium mb-2">PES University, Bangalore</p>
            <p class="text-slate-300 text-sm mb-3">
              Pursuing Bachelor's degree in Artificial Intelligence and Machine Learning with CGPA of
              7.54.
              Relevant coursework includes Data Structures, Operating Systems, Database Management
              Systems,
              Computer Networks, Software Engineering, and Machine Learning.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">Machine
                Learning</span>
              <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">Data Structures</span>
              <span class="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">Software
                Engineering</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white">Web Development Intern</h3>
              <span class="text-blue-400 font-semibold">July 2025 - Sept 2025</span>
            </div>
            <p class="text-slate-400 font-medium mb-2">Superhhero Learning</p>
            <p class="text-slate-300 text-sm mb-3">
              Developed and deployed a production MERN landing platform receiving ~100 monthly users.
              Integrated APIs and improved workflow efficiency, reducing development time by 25%.
              Optimized backend performance and caching, improving load time by 10%.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">React</span>
              <span class="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">Node.js</span>
              <span class="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs">MongoDB</span>
              <span class="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-xs">Vercel
                Auto-Deploy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
        <p class="text-slate-300">Organized by category and expertise level</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-element">
        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            Programming Languages
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Python</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">JavaScript/TypeScript</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">SQL</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Java</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">C</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">R</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            AI/ML
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">PyTorch</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">TensorFlow</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Scikit-Learn</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">OpenCV</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Pandas / NumPy</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Web Development
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">FastAPI / Flask</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">React / Next.js</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Node.js / Express</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">RESTful APIs</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">MongoDB / PostgreSQL</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            Tools & Platforms
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-300">MLOps & Model Deployment</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">CI/CD (GitHub Actions, Vercel)</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Docker</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Git & Version Control</span>
              <span class="text-green-400 text-sm">Advanced</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-300">Testing (PyTest, Unit)</span>
              <span class="text-blue-400 text-sm">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 bg-slate-800/30">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 reveal-element">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technologies & Frameworks</h2>
        <p class="text-slate-300">Tools and technologies I work with regularly</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Web Development
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">FastAPI</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Flask</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">React</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Express</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span class="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            AI/ML
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">PyTorch</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span
              class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Scikit-Learn</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">OpenCV</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Pandas</span>
            <span class="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">NumPy</span>
          </div>
        </div>

        <div class="skill-card p-6 rounded-xl reveal-element">
          <h3 class="text-xl font-bold text-white mb-6 flex items-center">
            <div
              class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
            
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            Tools & Platforms
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Machine
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Deep
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Computer
              Vision</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">NLP</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Generative
              AI</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Reinforcement
              Learning</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">MLOps</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Model
              Deployment</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Docker</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Git
              & GitHub Actions</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Vercel
              CI/CD</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Modal</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">PyTest</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">SQLite</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">Tableau</span>
            <span class="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">TensorBoard</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6">
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
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
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
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
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
            <div
              class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
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
            <div
              class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
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
            <div
              class="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
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

  <section id="contact" class="pt-32 pb-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <div class="reveal-element">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 gradient-text">Get In Touch</h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          Let's connect and explore opportunities to collaborate on innovative projects.
          I'm always open to discussing AI/ML, web development, and technology.
        </p>
      </div>
    </div>
  </section>

  <section class="pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="reveal-element">
          <div class="contact-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold text-white mb-6">Get In Touch</h2>

            <div class="text-center space-y-6">
              <p class="text-slate-300">
                I'm always interested in discussing new opportunities, collaborating on projects,
                or just connecting with like-minded professionals in the tech community.
              </p>

              <div class="space-y-4">
                <a href="mailto:mjenius1357@gmail.com"
                  class="btn-primary w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>

                <p class="text-slate-400 text-sm">
                  Direct email: <a href="mailto:mjenius1357@gmail.com"
                    class="text-blue-400 hover:text-blue-300">mjenius1357@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal-element">
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-white mb-6">Let's Connect</h2>
              <p class="text-slate-300 mb-6">
                I'm currently available for freelance projects, full-time opportunities, and
                collaborative work.
                Whether you have a project in mind or just want to discuss technology, I'd love to hear
                from you.
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
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
                  class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
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

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold">Availability</h3>
                  <p class="text-slate-300">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white mb-4">Professional Profiles</h3>
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

            <div>
              <h3 class="text-xl font-bold text-white mb-4">Resume</h3>
              <a href="/Mevin Jose Resume.pdf" download
                class="btn-primary w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-12 px-6 border-t border-slate-700">
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
    initPortfolio();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default App;
