import { BsChatQuote } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Comment = ({ text, name }) => {
	return (
		<div className='font-primary font-normal tracking-wider p-4 grid gap-2 md:gap-4 mx-4 place-items-end '>
			<div className='flex items-center space-x-4'>
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 1.1 }}
					transition={{
						duration: 0.8,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className=' text-primary text-xl'
				>
					<BsChatQuote />{' '}
				</motion.div>
				<span className='text-right'>{text}</span>
			</div>
			<div className='place-self-end text-primary font-bold'>-{name}</div>
		</div>
	);
};

export default Comment;
