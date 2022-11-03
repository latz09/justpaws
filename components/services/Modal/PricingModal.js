import { AiOutlineDash } from 'react-icons/ai';
import { motion } from 'framer-motion';
import LandingServiceHeader from '../servicePage/LandingServiceHeader';

const PricingModal = ({ setModalIsOpen }) => {
	return (
		<>
			<div className='grid  w-full h-full '>
				<div>
					<div>
						<LandingServiceHeader />
					</div>
					<motion.div
						className=' border-2 border-primary rounded-full grid py-2 px-5'
						initial={{ scale: 0.94 }}
						animate={{ scale: [1, .94, 1, .94, 1]}}
						transition={{
							duration: 3.5,
							delay: 2,
							repeat: 4,
							repeatType: 'reverse',
							repeatDelay: 4,
						}}
						onClick={() => {
							setModalIsOpen(true);
						}}
					>
						<span className='justify-self-end text-2xl animate-pulse'>
							<AiOutlineDash />{' '}
						</span>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default PricingModal;
