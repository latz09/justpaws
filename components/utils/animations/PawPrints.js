import { motion } from 'framer-motion';
import { IoMdPaw} from 'react-icons/io';
const PawPrints = () => {
	const container = {
		hidden: {  },
		show: {
			opacity: 1,
			// x: [5,0],
			transition: {
                delay: 2.5,
				staggerChildren: 0.6,
			},
		},
	};

	const item = {
		hidden: { opacity: 1, color: '#C2dfe3' },
		show: {
			opacity: 1,
            y: [3, -3, 3 ],
            color: ['#C2dfe3', '#0C71E4', '#C2dfe3'],			
			transition: { duration: 1.7, repeat: Infinity, repeatDelay: 3, ease:'easeIn' },
		},
	};
	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='show'
			className='flex space-x-1'
		>
			<motion.div variants={item} className=''>
				<IoMdPaw/>
			</motion.div>
			<motion.div variants={item} className=''>
				<IoMdPaw/>
			</motion.div>
			<motion.div variants={item} className=''>
				<IoMdPaw/>
			</motion.div>
		</motion.div>
	);
};

export default PawPrints;
