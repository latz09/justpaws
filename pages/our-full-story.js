import StoryContainer from '../components/about/Story/StoryContainer';
import { motion } from 'framer-motion';

const OurFullStory = () => {
	return (
		<div className='grid bg-gray-200 py-8'>
			<h1 className='text-xl font-normal md:text-4xl flex justify-center text-primary text-center py-6'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.4 }}
				>
					{' '}
					A Hair Situtation...
				</motion.div>{' '}
				<motion.div
					initial={{ x: '100vw', opacity: 0 }}
					animate={{ x: 0, opacity: [0, 0, 1] }}
					transition={{ type: 'spring', delay: .7, stiffness: 30}}
				>
					{' '}
					With a Happy Ending
				</motion.div>
			</h1>
			<StoryContainer />
		</div>
	);
};

export default OurFullStory;
