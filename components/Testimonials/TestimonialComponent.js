import Comment from './Comment';
import { comments } from '../../data/comments';
import { motion } from 'framer-motion';
const TestimonialComponent = () => {
	const firstFourComments = comments.slice(0, 4);

	return (
		<div className=' grid place-items-center'>
			<motion.h1
				className='text-4xl text-center'
				initial={{ opacity: 1, scale: 1 }}
				whileInView={{ opacity: 0, scale: 0 }}
				transition={{ delay: 1.4, duration: 1.7 }}
			>
				What our clients say about us...
			</motion.h1>

			<motion.div
				className='max-w-7xl hidde mx-auto flex flex-wrap flex-auto space-y-2'
				initial={{ opacity: 0, scale: 0.2 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 1.4 }}
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
