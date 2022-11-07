import Paragraph from './Paragraph';
import { paragraphs } from '../../../data/ourStory';
import { motion } from 'framer-motion';
const StoryContainer = () => {
	return (
		<div className='max-w-3xl mx-auto grid gap-2 my-4 px-2 md:px-0'>
			<h1 className='text-xl font-normal md:text-4xl flex justify-center text-primary text-center py-6'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.4 }}
				>
					{' '}
					A Hairy Situtation...
				</motion.div>{' '}
				<motion.div
					initial={{ x: '100vw', opacity: 0 }}
					animate={{ x: 0, opacity: [0, 0, 1] }}
					transition={{ type: 'spring', delay: 0.7, stiffness: 30 }}
				>
					{' '}
					With a Happy Ending
				</motion.div>
			</h1>
			<div>
				
				{paragraphs.map((paragraph) => (
					<div key={paragraph.id} className='py-4 px-2 md:px-0'>
						<Paragraph text={paragraph.text} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StoryContainer;
