import Image from 'next/image';
import dog from '../../../public/images/cubeism.jpg';
import ServiceHeader from '../../services/servicePage/ServiceHeader';
import { motion } from 'framer-motion';

const ServiceHero = ({ setModalIsOpen }) => {
	return (
		<div className='relative w-full h-[30vh] lg:h-[45vh] '>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='top'
				placeholder='blur'
			/>

			<motion.div className='relative h-full  bg-opacity-50 bg-black' initial={{}} animate={{}}>
				<motion.div
					className='grid place-items-center h-full'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{delay: .4, duration: 1}}
				>
					<ServiceHeader setModalIsOpen={setModalIsOpen} />
				</motion.div>{' '}
			</motion.div>
		</div>
	);
};

export default ServiceHero;
