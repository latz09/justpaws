import { HiOutlineArrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";


const AboutBlurb = () => {
	return (
		<div className='max-w-4xl mx-auto text-lg md:text-2xl md:leading-9 tracking-wide text-justify grid px-2'>
			<p className=''>
				{`Welcome to JUST PAWS PET SALON a friendly family-owned grooming salon located in the Signal Hills Shopping Center at 1201 South Robert Street in West St. Paul.  We are a pet salon where we treat your dog as if it was our very own pet. Our location is convenient for residents of St. Paul, West St. Paul, South St. Paul, Lilydale, Mendota Heights  and Inver Grove Heights.`}
			</p>
			<motion.div className='place-self-end flex space-x-2 place-items-center text-primary font-bold'  
                initial={{x: -1000, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: .2, duration: 2}}
            >
				<span>Our Full Story</span>
				<span className="animate-pulse">
					<HiOutlineArrowRight />
				</span>
			</motion.div>
		</div>
	);
};

export default AboutBlurb;
