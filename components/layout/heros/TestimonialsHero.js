import Image from 'next/image';
import artPiece from '../../../public/images/warhole-dog-glasses.jpg';
import { motion } from 'framer-motion';

const TestimonialsHero = () => {
	return (
		<div className='relative w-full h-[35vh] lg:h-[50vh] '>
			<Image
				src={artPiece}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full '>
				<div className='grid place-items-center h-full bg-black/60'>
					<motion.h1
						className='text-3xl lg:text-7xl text-white font-primar font-normal tracking-wider px-2'
						initial={{ opacity: 0, scale: 0.24 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.9, duration: 1.6,}}
					>
						What Our Clients Are Saying About Us
					</motion.h1>
				</div>{' '}
			</div>
		</div>
	);
};

export default TestimonialsHero;
