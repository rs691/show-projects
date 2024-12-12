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


function About() {
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
            href="/contact.jsx"
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

export default About;