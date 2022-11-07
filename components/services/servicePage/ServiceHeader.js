import LandingServiceHeader from './LandingServiceHeader';
import { Heading3 } from '../../utils/Typography';
import { motion } from 'framer-motion';
import { BsArrowBarRight } from 'react-icons/bs';

const ServiceHeader = ({ setModalIsOpen, modalIsOpen }) => {
	return (
		<>
			<div
				onClick={() => {
					setModalIsOpen(true);
				}}
				className='grid cursor-pointer -8 text-lightblue'
			>
				<div className='grid place-items-center space-x-3  '>
					<div className=' text-xl md:text-2xl mt-2 mb-3 font-primary font-normal'>
						Select Dog Size For{' '}
						<span className=' text-white'>Pricing</span>{' '}
					</div>
					<motion.div
						className='border border-lightblue  rounded-full w-full grid place-items-end  '
						initial={{ scale: 1 }}
						animate={{ scale: 1.015 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<span className='px-2 py-1 md:px-4 md:py-2  text-gray-50  text-xl'>
							<BsArrowBarRight />
						</span>
					</motion.div>
				</div>
			</div>
			<div className='text-center  text-gray-50'>
				<div className='text-4xl tracking-wide sm:text-5xl md:tracking-widest lg:text-7xl'>
					Services And Pricing
				</div>
			</div>
		</>
	);
};

export default ServiceHeader;
