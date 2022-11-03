import Image from 'next/image';
import dog from '../../../public/images/trim.jpg';
import ServiceHeader from '../../services/servicePage/ServiceHeader';
import { motion } from 'framer-motion';

const ServiceHero = ({ setModalIsOpen }) => {
	return (
		<div className='relative w-full h-[25vh] lg:h-[45vh] '>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black bg-opacity-80 '>
				<motion.div
					className='grid place-items-center h-full'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{delay: .4, duration: 1}}
				>
					<ServiceHeader setModalIsOpen={setModalIsOpen} />
				</motion.div>{' '}
			</div>
		</div>
	);
};

export default ServiceHero;
