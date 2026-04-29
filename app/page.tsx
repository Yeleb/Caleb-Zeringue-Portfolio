export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold">CZ</a>
          <div className="flex gap-3 md:gap-6 text-sm md:text-base">
            <a href="#about" className="hover:text-violet-400 transition">About</a>
            <a href="#skills" className="hover:text-violet-400 transition">Skills</a>
            <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
            <a href="#experience" className="hover:text-violet-400 transition hidden sm:block">Experience</a>
            <a href="#experience" className="hover:text-violet-400 transition sm:hidden">Exp</a>
            <a href="#education" className="hover:text-violet-400 transition hidden sm:block">Education</a>
            <a href="#education" className="hover:text-violet-400 transition sm:hidden">Edu</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Caleb Zeringue</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6">Computer Science Student | Software Engineer</p>
        <p className="text-gray-400 mb-8">Louisiana State University • Fall 2026</p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/Yeleb" 
            target="_blank"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/caleb-zeringue-44812633a" 
            target="_blank"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 rounded-lg transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:calebzeringue25@gmail.com"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
          >
            Email
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a Computer Science student at Louisiana State University with a concentration in Software Engineering, 
          expecting to graduate in Fall 2026. I have experience building full-stack web applications, mobile apps, 
          compilers, AI-powered tools, and cybersecurity education platforms. I'm passionate about creating software 
          that solves real problems and constantly learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-400">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>C</li>
                <li>C#</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-400">Frameworks & Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React Native</li>
                <li>Next.js</li>
                <li>Flask</li>
                <li>FastAPI</li>
                <li>PyTorch</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-400">Databases & Systems</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Firebase</li>
                <li>SQLite</li>
                <li>Supabase (PostgreSQL)</li>
                <li>MySQL</li>
                <li>Windows</li>
                <li>macOS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="space-y-12">
            {/* Project 1 - Vigiloo */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">Vigiloo</h3>
                <span className="text-gray-400">January – May 2026</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Next.js, TypeScript, Supabase, Tailwind CSS, PostgreSQL</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Built a full-stack Duolingo-style cybersecurity education platform with a team of 6 to teach non-technical users how to identify, avoid, and report scams, fraud, and phishing attacks</li>
                <li>• Created age-specific learning paths with interactive lesson modules, flashcards for cybersecurity terminology, and daily quizzes</li>
                <li>• Integrated AI into 3 different social media demos simulating scammer interactions on Instagram, Snapchat, and TikTok</li>
                <li>• Implemented live scam news feed on home page and dedicated news page pulling real-time fraud alerts from Supabase</li>
              </ul>
              <a 
                href="https://github.com/sngu114/Vigiloo" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 - BrainScan AI */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">BrainScan AI</h3>
                <span className="text-gray-400">August – December 2025</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Python, PyTorch, FastAPI, Next.js, TypeScript, Tailwind CSS, SQLite</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed web app that classifies brain tumors from MRI scans using a custom CNN model with 96%+ accuracy across four categories: Glioma, Meningioma, Pituitary, and No Tumor</li>
                <li>• Implemented Grad-CAM visualization to generate heatmaps highlighting tumor regions</li>
                <li>• Built a FastAPI backend to serve the PyTorch model with real-time inference and a responsive Next.js frontend for image upload and result display</li>
                <li>• Preprocessed training data using MD5 hashing to detect and remove duplicate images</li>
              </ul>
              <a 
                href="https://github.com/christixian/BrainScanAI_4444" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 3 - C-Dialect Compiler */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">C-Dialect Compiler</h3>
                <span className="text-gray-400">August – December 2025</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Java, MIPS Assembly, Tiger Compiler Framework</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Built a compiler for a custom C dialect using keywords like "fun" and "var" that translates source code to MIPS assembly</li>
                <li>• Implemented complete compilation pipeline: lexical analysis, parsing (using CUP), type checking, intermediate representation generation, canonicalization, and MIPS assembly code generation</li>
                <li>• Added support for arrays, nested structures (if/else, while, for loops), multi-parameter functions, and variable initializers not present in base Tiger implementation</li>
              </ul>
              <a 
                href="https://github.com/Yeleb/Compiler-Final-Project" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 4 - Sendrr Webmail App */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">Sendrr Webmail App</h3>
                <span className="text-gray-400">March – May 2026</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Python, Flask, MySQL, HTML/CSS</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Built a full-stack webmail application with a team in Cybersecurity class — goal was to create a web app, find vulnerabilities, then fix them</li>
                <li>• Designed and implemented a MySQL database schema with users, emails, and sessions tables to support authentication, messaging, and admin activity tracking</li>
                <li>• Identified and documented multiple security vulnerabilities including plain text password storage, SQL injection, no DoS protection, and insecure Flask key</li>
                <li>• Maintained two separate GitHub branches representing vulnerable and secured versions for side-by-side security comparison</li>
              </ul>
              <a 
                href="https://github.com/justinat0r/CSC2361Project" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 5 - Music Social Media App */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">Music Social Media App</h3>
                <span className="text-gray-400">February – May 2025</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Firebase, React Native, TypeScript</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Collaborated with a team of 5 to design and develop a mobile social media app focused on music sharing and discovery</li>
                <li>• Built features allowing users to create profiles, follow others, and share songs with captions—similar to Instagram but centered around music</li>
                <li>• Led front-end UI/UX development while also contributing to backend logic, including games, profiles, and navigation</li>
                <li>• Used Firebase for backend services including authentication, database, and real-time updates</li>
              </ul>
              <a 
                href="https://github.com/CSC-3380-Spring-2025/Team-5" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 6 - Lexer + Parser */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">Lexer + Recursive Descent Parser</h3>
                <span className="text-gray-400">February – May 2025</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Java</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed a lexer and recursive descent parser in Java to analyze and validate syntax of user input based on specific language rules</li>
                <li>• Built a simple UI where users can input code and press "Run" to check for syntax errors in real time</li>
                <li>• Implemented tokenization logic in the lexer to break down input into recognizable symbols for the parser</li>
              </ul>
              <a 
                href="https://github.com/Yeleb/Lexer_and_RecursiveDescentParser" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 7 - Car Detailing Database */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-semibold text-violet-400">Car Detailing Database</h3>
                <span className="text-gray-400">August – December 2025</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Python, Flask, SQLite, HTML/CSS</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed a full-stack web application for managing a car detailing business</li>
                <li>• Built features for customer management, vehicle tracking, service catalog viewing, and appointment scheduling with full CRUD functionality</li>
                <li>• Designed and implemented a relational SQLite database schema to store and manage business data efficiently</li>
                <li>• Developed responsive web UI using Flask templates and HTML/CSS for intuitive navigation and data entry</li>
              </ul>
              <a 
                href="https://github.com/Yeleb/Car-Detailing-Database" 
                target="_blank"
                className="inline-block mt-4 text-violet-400 hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-violet-400 pl-6">
              <h3 className="text-xl font-semibold">Oyster Cook</h3>
              <p className="text-violet-400">French Market Bistro • Baton Rouge, LA</p>
              <p className="text-gray-400 mb-3">August 2022 – Present</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Started as Busser, promoted to Dishwasher, then to Oyster Cook based on performance and reliability</li>
                <li>• Provide helpful service to guests and work collaboratively with front and back-of-house teams</li>
                <li>• Stay calm and focused during busy shifts while handling multiple tasks at once</li>
              </ul>
            </div>

            <div className="border-l-2 border-violet-400 pl-6">
              <h3 className="text-xl font-semibold">Co-Founder</h3>
              <p className="text-violet-400">Bayou Detailing LLC • Baton Rouge, LA</p>
              <p className="text-gray-400 mb-3">April 2022 – July 2022</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Co-founded a small car detailing business providing interior and exterior cleaning services</li>
                <li>• Communicated with a wide range of customers to schedule appointments and understand their specific vehicle care needs</li>
                <li>• Developed customer service, time management, and entrepreneurial skills in a hands-on business environment</li>
              </ul>
            </div>

            <div className="border-l-2 border-violet-400 pl-6">
              <h3 className="text-xl font-semibold">Cashier</h3>
              <p className="text-violet-400">Rouses Market • Prairieville, LA</p>
              <p className="text-gray-400 mb-3">March 2021 – December 2021</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Provided friendly and efficient customer service</li>
                <li>• Trusted by managers to assist in additional roles like stocking, washing dishes, and front counter</li>
                <li>• Gained communication skills and learned to handle stressful customer situations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold">Louisiana State University</h3>
            <p className="text-violet-400 text-lg">B.S. in Computer Science (Software Engineering)</p>
            <p className="text-gray-400 mb-4">Expected Graduation: Fall 2026</p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Relevant Coursework</h4>
            <p className="text-gray-300 leading-relaxed">
              Data Structures & Algorithms, Computer Organization & Design, Object Oriented Design, 
              Programming Languages, Artificial Intelligence, Compiler Construction, Database Management, 
              Operating Systems, Video Game Design, Intro to Cybersecurity and Cyber Defense, 
              Software Systems Development, Software Quality and Testing, Digital Forensics
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-950 text-center text-gray-400">
        <p>© 2026 Caleb Zeringue</p>
        <p className="text-sm mt-2">Last updated: April 2026</p>
      </footer>
    </main>
  );
}
