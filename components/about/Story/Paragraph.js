import { motion } from 'framer-motion';

const Paragraph = ({ text }) => {
	return (
		<motion.div
			className='font-normal text-darkblue text-base md:text-lg tracking-wide leading-8 text-justify'
			initial={{ opacity: 0, x: '-50' }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.1, duration: 0.7 }}
		>
			{text}
		</motion.div>
	);
};

export default Paragraph;
