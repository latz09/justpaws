import Comment from './Comment';
import { motion } from 'framer-motion';
const AllComments = ({ data }) => {
	return (
		<>
			<h1 className="text-center pb-14 text-4xl text-primary font-primary font-normal tracking-wider">What Our Clients Are Saying About Us</h1>
			<div className='max-w-7xl hidde mx-auto flex flex-wrap flex-auto space-y-2'>
				{data.map((comment) => (
					<div key={comment.id} className='w-full md:w-1/2'>
						<Comment text={comment.comment} name={comment.name} />
					</div>
				))}
			</div>
		</>
	);
};

export default AllComments;
