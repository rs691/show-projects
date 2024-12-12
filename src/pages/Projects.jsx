

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
  
  const projects = [
	{
	  name: "Web Forms",
	  description: "Web form used for collecting project data",
	  technologies: ["PHP", "Jquery", "MySQL", "Bootstrap"],
	
	},
	{
	  name: "Pricing Tool",
	  description: "Full-stack todo application with user authentication",
	  technologies: ["JavaScript", "Ajax", "Tailwind"]
	},
	{
		name: "Crud Application",
		description: "Full-stack todo application with user authentication",
		technologies: ["JavaScript", "Ajax", "Tailwind"]
	  }
  ]
  
  
  // Projects Page Component
function Projects(){
	
  
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
  export default Projects;