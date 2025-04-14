import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import ShowcaseCard from "./ShowcaseCard";
import StepCard from "./StepCard";
import Footer from "./Footer";
import { TypeAnimation } from 'react-type-animation';

export default function MainContent() {
  // Skills
  const skills = [
    {
      icon: "fab fa-python",
      title: "Python",
      description: "Proficient in data science libraries including Pandas, NumPy, and Matplotlib."
    },
    {
      icon: "fas fa-database",
      title: "Data Science",
      description: "Experience with data analysis, visualization, and machine learning models."
    },
    {
      icon: "fab fa-linux",
      title: "Linux",
      description: "I use Arch btw. Experienced with customizing and optimizing Linux environments."
    },
    {
      icon: "fab fa-html5",
      title: "HTML/CSS",
      description: "Strong foundation in creating responsive and accessible web interfaces."
    },
    {
      icon: "fas fa-code",
      title: "DSA",
      description: "Strong understanding of data structures and algorithms for efficient problem solving."
    },
    {
      icon: "fab fa-cpp",
      title: "C++",
      description: "Knowledge of C++ for algorithmic problem solving and system programming."
    },
    {
      icon: "fas fa-chess",
      title: "Chess",
      description: "Strategic thinking with a peak rating of 1900 Elo."
    }
  ];

  // Projects
  const projects = [
    {
      title: "Trading Bot",
      description: "Automated trading bot for stock market analysis using Python and C++."
    },
    {
      title: "Data Science Portfolio",
      description: "Projects showcasing data analysis skills with Pandas, NumPy, and model building."
    },
    {
      title: "Chess Analysis Tool",
      description: "Tool to analyze chess games, including position evaluation and move suggestions."
    },
    {
      title: "Personal Website",
      description: "This portfolio website built with modern web technologies."
    }
  ];

  return (
    <main className="flex-1 lg:ml-64 p-6 md:p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section id="home" className="mb-16">
        <div className="rounded-lg border border-hypr-border bg-gradient-to-br from-hypr-bg/20 to-hypr-bg/50 p-6 md:p-8 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hey There
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-hypr-accent">
              OREWA HAAZIQ ALI
            </h2>
            <div className="text-xl text-hypr-text/80 mb-8 h-[60px] flex justify-center">
              <div className="flex gap-2">
                <span>Orewa</span>
                <TypeAnimation
                  sequence={[
                    'Data Scientist',
                    1000,
                    'Programmer',
                    1000,
                    'Chess Player',
                    1000,
                    'Problem Solver',
                    1000,
                    'ML Enthusiast',
                    1000,
                    'DSA Expert',
                    1000,
                    'Python Developer',
                    1000,
                    'AI Researcher',
                    1000,
                    'Logic Master',
                    1000,
                    'Math Enthusiast',
                    1000,
                    'Future Innovator',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1.25rem', display: 'inline-block', minWidth: '180px' }}
                  className="text-hypr-accent font-semibold"
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a
                href="#projects"
                className="bg-hypr-primary hover:bg-hypr-primary/80 px-6 py-3 rounded-full text-sm font-medium transition flex items-center"
              >
                <i className="fas fa-code-branch mr-2"></i> Showcase
              </a>
              <a
                href="#skills"
                className="bg-hypr-sidebar hover:bg-hypr-sidebar/80 px-6 py-3 rounded-full text-sm font-medium transition flex items-center"
              >
                <i className="fas fa-cogs mr-2"></i> Quick Start
              </a>
              <a
                href="#"
                className="bg-hypr-primary hover:bg-hypr-primary/80 px-6 py-3 rounded-full text-sm font-medium transition flex items-center"
              >
                <i className="fas fa-file-alt mr-2"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mb-16">
        <SectionTitle icon="fas fa-user" title="About Me" />
        
        <div className="rounded-lg border border-hypr-border relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-hypr-primary/10 via-hypr-bg to-hypr-secondary/10 z-0"></div>
          
          {/* Animated dot pattern overlay */}
          <div className="absolute inset-0 opacity-5 z-0" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                 backgroundSize: '20px 20px',
               }}>
          </div>
          
          {/* Decorative accent elements */}
          <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-hypr-accent/10 blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-hypr-primary/10 blur-3xl"></div>
          
          <div className="relative z-10 p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">
                Orewa Haaziq, a 14-year-old passionate about programming, data science, DSA, and chess. I am currently learning advanced data science techniques and machine learning models to become a data scientist and AI engineer by the time I finish school.
              </p>
              <p className="text-lg mt-4">
                My values center around kindness, supporting others, and striving to make the world better through technology and innovation. I believe in collaborative learning and sharing knowledge with the community.
              </p>
              <p className="text-lg mt-4">
                When I'm not coding or analyzing data, I enjoy playing chess where I reached a peak rating of 1900 Elo, and practice calisthenics to keep my mind and body in balance.
              </p>
            </div>
            
            {/* Visual accent */}
            <div className="border-l-4 border-hypr-accent pl-4 mt-6 italic text-hypr-text/90">
              "One line of code at a time."
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <SectionTitle icon="fas fa-cogs" title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <FeatureCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <SectionTitle icon="fas fa-code-branch" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ShowcaseCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="mb-16">
        <SectionTitle icon="fas fa-road" title="My Journey" />

        <div className="bg-hypr-sidebar rounded-lg border border-hypr-border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <StepCard
              icon="fas fa-child"
              title="Started Programming"
              description="Began learning programming at age 14 with Python."
            />
            <StepCard
              icon="fas fa-chess-knight"
              title="Chess Achievement"
              description="Reached 1900 Elo rating after playing 4 months."
            />
            <StepCard
              icon="fas fa-graduation-cap"
              title="Future Goals"
              description="Working towards becoming a data scientist and AI engineer."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <SectionTitle icon="fas fa-envelope" title="Contact Me" />

        <div className="rounded-lg border border-hypr-border relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-hypr-primary/5 to-hypr-bg z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-hypr-accent/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-hypr-primary/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5 z-0" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
               }}>
          </div>
          
          <div className="relative z-10 p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-6 text-hypr-text/80 max-w-2xl">
                Feel free to reach out for collaborations, questions, or just to say hi!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-3xl">
                <div className="flex flex-col items-center p-6 bg-hypr-bg/30 rounded-lg border border-hypr-border/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-hypr-accent/10">
                  <div className="w-14 h-14 rounded-full bg-hypr-primary/10 flex items-center justify-center mb-4">
                    <i className="fas fa-envelope text-hypr-accent text-2xl"></i>
                  </div>
                  <a href="mailto:haaziqali01@gmail.com" className="hover:text-hypr-accent transition">haaziqali01@gmail.com</a>
                </div>
                <div className="flex flex-col items-center p-6 bg-hypr-bg/30 rounded-lg border border-hypr-border/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-hypr-accent/10">
                  <div className="w-14 h-14 rounded-full bg-hypr-primary/10 flex items-center justify-center mb-4">
                    <i className="fab fa-github text-hypr-accent text-2xl"></i>
                  </div>
                  <a href="https://github.com/HAAZIQ-ALI" target="_blank" rel="noopener noreferrer" className="hover:text-hypr-accent transition">HAAZIQ-ALI</a>
                </div>
                <div className="flex flex-col items-center p-6 bg-hypr-bg/30 rounded-lg border border-hypr-border/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-hypr-accent/10">
                  <div className="w-14 h-14 rounded-full bg-hypr-primary/10 flex items-center justify-center mb-4">
                    <i className="fab fa-linkedin text-hypr-accent text-2xl"></i>
                  </div>
                  <a href="https://www.linkedin.com/in/haaziq-ali-98310a35b" target="_blank" rel="noopener noreferrer" className="hover:text-hypr-accent transition">haaziq-ali</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}