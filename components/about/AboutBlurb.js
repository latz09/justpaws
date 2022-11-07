import { HiOutlineArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SlideInContainer from '../utils/animations/SlideInContainer';

const AboutBlurb = () => {
	return (
		<div className='max-w-4xl mx-auto text-lg md:text-2xl md:leading-9 tracking-wide text-justify grid px-3 font-normal text-darkblue/80 leading-8'>
			<p className='grid gap-3 font-primary'>
				<span>
					Welcome to <span className="text-primary font-semibold"> JUST PAWS PET SALON </span> a friendly family-owned
					grooming salon located in the Signal Hills Shopping Center at <span className="text-primary"> 1201
					South Robert Street in West St. Paul</span>. We are a pet salon where we
					treat your dog as if it was our very own pet.
				</span>
				<span>
					Our location is convenient for residents of St. Paul, West St. Paul,
					South St. Paul, Lilydale, Mendota Heights and Inver Grove Heights.
				</span>
				{``}
			</p>

			<Link href={'/our-full-story'}>
				<motion.div
					className='place-self-end flex space-x-2 place-items-center text-primary font-bold mt-3 md:mt-7 cursor-pointer'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 1 }}
				>
					<span>Our Full Story</span>
					<motion.div
						className='pl-3 pt-1 text-3xl'
						initial={{ x: 0, opacity: 0.9 }}
						animate={{ x: -6, opacity: 1 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<HiOutlineArrowRight />
					</motion.div>
				</motion.div>
			</Link>
		</div>
	);
};

export default AboutBlurb;
