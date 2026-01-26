import SchemaCard from '../ui/schema-card-with-animated-wave-visualizer';

interface Certification {
  name: string;
  issuer: string;
  description: string;
  credential_url: string;
  logo: string;
  logoType: 'image' | 'text';
}

const certifications: Certification[] = [
  {
    name: 'Google Data Analytics',
    issuer: 'Coursera',
    description: 'Comprehensive certification in data analysis, visualization, and business intelligence using Google tools.',
    logo: 'https://www.google.com/favicon.ico',
    logoType: 'image',
    credential_url: 'https://coursera.org/share/11aafe0abcf8437084bc6d19db82c564'
  },
  {
    name: 'IBM Generative AI',
    issuer: 'Coursera',
    description: 'Advanced certification in generative AI technologies, including GPT models and prompt engineering.',
    logo: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
    logoType: 'image',
    credential_url: 'https://coursera.org/share/beaa01b66b9804e5d9547c403fa9840f'
  },
  {
    name: 'Microsoft Computer Vision',
    issuer: 'Azure AI',
    description: 'Specialized certification in Azure Cognitive Services for computer vision and image processing.',
    logo: 'https://www.microsoft.com/favicon.ico',
    logoType: 'image',
    credential_url: 'https://coursera.org/share/2db49eb5a4a3fbd458b3c759d3635992'
  },
  {
    name: 'Kaggle ML & DL',
    issuer: 'Kaggle',
    description: 'Expert-level certification in machine learning and deep learning through practical competitions.',
    logo: 'https://www.kaggle.com/favicon.ico',
    logoType: 'image',
    credential_url: 'https://www.kaggle.com/mjeniusmj'
  },
  {
    name: 'Meta GenAI Analytics',
    issuer: 'Meta/Coursera',
    description: 'Advanced certification in generative AI applications for data analytics and business intelligence.',
    logo: 'https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg',
    logoType: 'image',
    credential_url: 'https://coursera.org/share/3b59ffff270c01b2e6ffdc4fb13abc2f'
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="pt-24 pb-32 px-6 scroll-mt-0 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Certifications</h2>
        </div>

        <div className="reveal-element">
          <>
            {/* Top row - 3 certifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 max-w-5xl mx-auto">
              {certifications.slice(0, 3).map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
            {/* Bottom row - 2 certifications centered */}
            {certifications.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {certifications.slice(3, 5).map((cert, index) => (
                  <CertificationCard key={index + 3} cert={cert} />
                ))}
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.credential_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      <div className="flex items-start gap-3 mb-3">
        <img 
          src={cert.logo} 
          alt={`${cert.name} Logo`} 
          className="w-14 h-14 rounded-lg object-contain flex-shrink-0 p-2"
        />
        <div className="flex-1">
          <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors">
            {cert.name}
          </h3>
          <p className="text-slate-400 text-xs">{cert.issuer}</p>
        </div>
      </div>
      <p className="text-slate-300 text-xs leading-relaxed">
        {cert.description}
      </p>
    </a>
  );
}

export function ContactSection() {
  return (
    <>
      <section id="contact" className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12 reveal-element">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 gradient-text">Contact Me</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-element">
              <SchemaCard />
            </div>

            <div className="reveal-element">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <a href="mailto:mjenius1357@gmail.com"
                          className="text-slate-300 hover:text-blue-400 transition-colors">
                          mjenius1357@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-slate-300">Bangalore, Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Profiles</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://github.com/MJenius" target="_blank" rel="noopener noreferrer"
                      className="social-link p-4 rounded-lg flex items-center hover:bg-slate-800/50 transition-colors">
                      <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">GitHub</h4>
                        <p className="text-slate-400 text-sm">@MJenius</p>
                      </div>
                    </a>

                    <a href="https://leetcode.com/u/mjenius1357/" target="_blank" rel="noopener noreferrer"
                      className="social-link p-4 rounded-lg flex items-center hover:bg-slate-800/50 transition-colors">
                      <svg className="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0L1.605 6.021v7.958L12 19.5l10.395-5.521V6.021L12 0zm0 2.5l7.5 4.5v6l-7.5 4.5-7.5-4.5v-6l7.5-4.5z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold">LeetCode</h4>
                        <p className="text-slate-400 text-sm">@mjenius1357</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://leetcode.com/u/mjenius1357/" target="_blank" rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors">
              LeetCode
            </a>
            <a href="https://github.com/MJenius" target="_blank" rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:mjenius1357@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
          <p className="text-slate-400">
            Mevin Jose, AIML Student at PES University
          </p>
        </div>
      </footer>
    </>
  );
}
