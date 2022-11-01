import { motion } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

const HeaderAnimation = ({ word }) => {
	const letters = word.split('');

	const container = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			// x: [5,0],
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 1 },
		show: {
			opacity: [1, 0.6, 1],
			// y: [5, -5, 5],
			transition: { ease: 'easeInOut', repeat: 3, repeatDelay: 0.6 },
		},
	};

	return (
		<div className='grid gap-4 place-items-center'>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				className='flex'
			>
				{letters.map((letter) => (
					<motion.p
						key={letter}
						variants={item}
						className='text-3xl md:text-6xl  text-lightblue'
					>
						{letter}
					</motion.p>
				))}
			</motion.div>{' '}
		</div>
	);
};

export default HeaderAnimation;
