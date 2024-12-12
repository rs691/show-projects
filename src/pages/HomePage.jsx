import { motion } from 'framer-motion';

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


function HomePage() {
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
  export default HomePage;