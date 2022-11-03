import LandingServiceHeader from './LandingServiceHeader';
import { Heading3 } from '../../utils/Typography';

import { BsArrowBarRight } from 'react-icons/bs';

const ServiceHeader = ({ setModalIsOpen }) => {
	return (
		<>
			<div
				onClick={() => {
					setModalIsOpen(true);
				}}
				className='grid cursor-pointer -8 text-lightblue'
			>
				<div className='grid place-items-center space-x-3  '>
					<span className=''>
						<LandingServiceHeader />
					</span>
					<span className='border border-lightblue  rounded-full w-full grid place-items-end '>
						<span className='px-4 py-2 text-primary  text-xl'>
							<BsArrowBarRight />
						</span>
					</span>
				</div>
			</div>
			<div className='text-center  text-primary'>
				<div className="text-5xl tracking-widest lg:text-7xl">Services And Pricing</div>
			</div>
		</>
	);
};

export default ServiceHeader;
