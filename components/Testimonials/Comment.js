import { BsChatQuote } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Comment = ({ text, name }) => {
	return (
		<div className='font-primary font-normal tracking-wider grid gap-2 py-8'>
			<div className='grid grid-cols-8 items-center'>
				{/* BsChatQuote */}
				<motion.div
					initial={{ scale: 0.98 }}
					animate={{ scale: 1.19 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className=' text-primary text-xl place-self-center'
				>
					<div className='p-2'>
						{' '}
						<BsChatQuote />{' '}
					</div>
				</motion.div>
				<span className='col-span-7 '>{text}</span>
			</div>
			<span className=' text-primary place-self-end font-bold'>-{name}</span>
		</div>
	);
};

export default Comment;
