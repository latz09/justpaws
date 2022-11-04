import { BsChatQuote } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Comment = ({ text, name }) => {
	return (
		<div className='font-primary font-normal tracking-wider p-4 grid gap-2 md:gap-4 mx-4 place-items-end  border-black'>
			<div className='flex justify-between items-center space-x-3 md:space-x-4 w-full '>
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 1.1 }}
					transition={{
						duration: 0.8,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className=' text-primary text-xl justify-self-start'
				>
					<div className="">
						{' '}
						<BsChatQuote />{' '}
					</div>
				</motion.div>
				<span className='text-right'>{text}</span>
			</div>
			<div className='place-self-end text-primary font-bold'>-{name}</div>
		</div>
	);
};

export default Comment;
