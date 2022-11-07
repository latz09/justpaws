import Image from 'next/image';
import dog from '../../../public/images/trim.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonLink } from '../../utils/Utils';

const ServiceDescriptionHero = () => {
	return (
		<div className='relative w-full h-[35vh] lg:h-[50vh] '>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black bg-opacity-70 '>
				<div className='grid place-items-center h-full'>
					<motion.div
						className=''
						initial={{ scale: 0.99 }}
						animate={{ scale: 1.01 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<ButtonLink
							href={'/Just-Paws-Services'}
							title='Services and Pricing'
						/>
					</motion.div>
				</div>{' '}
			</div>
		</div>
	);
};

export default ServiceDescriptionHero;
