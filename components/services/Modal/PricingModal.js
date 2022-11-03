import { AiOutlineDash } from 'react-icons/ai';

import LandingServiceHeader from '../LandingServiceHeader';

const PricingModal = ({ setModalIsOpen }) => {
	return (
		<>
			<div className='grid  w-full h-full '>
				<div>
					<div>
						<LandingServiceHeader />
					</div>
					<div
						className=' border-2 border-primary rounded-full grid py-2 px-5'
						onClick={() => {
							setModalIsOpen(true);
						}}
					>
						<span className='justify-self-end text-2xl animate-pulse'>
							<AiOutlineDash />{' '}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingModal;
