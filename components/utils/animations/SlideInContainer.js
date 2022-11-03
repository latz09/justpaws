import { motion, AnimatePresence } from 'framer-motion';

const SlideInContainer = ({ children }) => {
	const slideInVariants = {
		hidden: { opacity: 0, x: '-2vw' },
		visible: {
			opacity: 1,
            x: 1,
			transition: {
				delay: .1,
				duration: 1.3,
			},
		},
		exit: { x: '100vw', transition: { duration: 1 } },
	};

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				variants={slideInVariants}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default SlideInContainer;
