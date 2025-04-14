import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import ShowcaseCard from "./ShowcaseCard";
import StepCard from "./StepCard";
import Footer from "./Footer";

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
            <p className="text-xl text-hypr-text/80 mb-8">
              A passionate learner in Computer Science, <span className="text-hypr-accent">Data Science</span>, DSA, and Chess
            </p>
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
        
        <div className="bg-hypr-sidebar rounded-lg border border-hypr-border p-6">
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
              description="Began learning programming at age 10 with Scratch and Python."
            />
            <StepCard
              icon="fas fa-chess-knight"
              title="Chess Achievement"
              description="Reached 1900 Elo rating after years of practice and tournament play."
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

        <div className="bg-hypr-sidebar rounded-lg border border-hypr-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-6 text-hypr-text/80">
                Feel free to reach out for collaborations, questions, or just to say hi!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope w-8 text-hypr-accent"></i>
                  <a href="mailto:haaziq@example.com" className="hover:text-hypr-accent transition">haaziq@example.com</a>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-github w-8 text-hypr-accent"></i>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-hypr-accent transition">Haaziq's GitHub</a>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-linkedin w-8 text-hypr-accent"></i>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-hypr-accent transition">Haaziq's LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 bg-hypr-bg border border-hypr-border rounded-md focus:outline-none focus:ring-1 focus:ring-hypr-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 bg-hypr-bg border border-hypr-border rounded-md focus:outline-none focus:ring-1 focus:ring-hypr-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-3 py-2 bg-hypr-bg border border-hypr-border rounded-md focus:outline-none focus:ring-1 focus:ring-hypr-accent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="bg-hypr-primary hover:bg-hypr-primary/80 px-4 py-2 rounded-md text-sm font-medium transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}