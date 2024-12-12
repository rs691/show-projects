
import { motion } from 'framer-motion'



// Page Transitions
const pageVariants = {
  initial: { opacity: 0, x: "-100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100%" }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}


// Home Page Component
const HomePage = () => {
  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Jane Doe
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Junior Web Developer | React Enthusiast | Learning & Growing
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block"
        >
          <a 
            href="#projects" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            View My Projects
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      name: "E-Commerce Dashboard",
      description: "React-based admin panel with data visualization",
      technologies: ["React", "Recharts", "Firebase"]
    },
    {
      name: "Task Management App",
      description: "Full-stack todo application with user authentication",
      technologies: ["MERN Stack", "JWT", "Tailwind"]
    }
  ]

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gray-50 p-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// About Page Component
const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4"
    >
      <div className="max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <motion.img
          src="/api/placeholder/200/200"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          About Me
        </h2>
        <p className="text-gray-600 text-center leading-relaxed">
          Recent computer science graduate passionate about web development. 
          I specialize in React and modern web technologies, continuously 
          learning and expanding my skill set.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Download Resume
          </motion.a>
          <motion.a 
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

// Main App Component
const Project2 = () => {
  return (
    <div>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
    </div>
  )
}

export default Project2;