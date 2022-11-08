import Comment from './Comment';
import { motion } from 'framer-motion';
const AllComments = ({ data }) => {
	return (
		<>
			<div className='max-w-7xl hidde mx-auto flex flex-wrap flex-auto space-y-2 md:py-8 px-2 lg:py-10'>
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


