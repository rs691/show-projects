
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



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




// Main App Component
const App = () => {
  return (
    <div>
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
            <Link to="/about" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              About Me
            </Link>
            <Link to="/contact" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              Lets Talk
            </Link>
            <Link to="/projects" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              View My Projects
            </Link>
            <Link to="/hero" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
             Awards and Recognition
            </Link>
      
          </motion.div>
        </motion.div>
      </motion.div>
    
    </div>
  )
}

export default App