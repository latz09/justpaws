import Comment from './Comment';
import { comments } from '../../data/Comments';
import { motion } from 'framer-motion';
const TestimonialComponent = () => {
	const firstFourComments = comments.slice(0, 4);

	return (
		<div className='py-20 md:py-40 grid place-items-center'>
			<motion.h1
				className='text-4xl'
				initial={{ opacity: 1 }}
				whileInView={{ opacity: 0 }}
				transition={{ delay: 1, duration: 2 }}
			>
				What our clients say about us...
			</motion.h1>

			<motion.div
				className='max-w-7xl hidde mx-auto flex flex-wrap flex-auto space-y-2'
				initial={{ opacity: 0, scale: .2 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1.6, duration: 1.3 }}
			>
				{firstFourComments.map((comment) => (
					<div key={comment.id} className='w-full md:w-1/2'>
						<Comment text={comment.comment} name={comment.name} />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default TestimonialComponent;
