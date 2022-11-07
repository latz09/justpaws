import { BsChatQuote } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Comment = ({ text, name }) => {
	return (
		<div className='font-primary font-normal tracking-wider p-4 grid gap-2 md:gap-4 mx-4 place-items-end'>
			<div className='flex justify-between items-center space-x-3 md:space-x-4 w-full '>
				<motion.div
					initial={{ scale: .98 }}
					animate={{ scale: 1.19 }}
					transition={{
						duration: 1,
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
				<span className='pl-4 md:pl-2 md:text-right'>{text}</span>
			</div>
			<div className='place-self-end text-primary font-bold'>-{name}</div>
		</div>
	);
};

export default Comment;
