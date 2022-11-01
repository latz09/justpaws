
import HeaderAnimation from '../utils/animations/HeaderAnimation';

import SelectDogSize from './SelectDogSize';
import ServicesModal from './ServicesModal';

const ServiceModalContainer = () => {
	return (
		<div className='bg-li backdrop-blur-sm p-1  shadow-lg'>
			<div className='tracking-wider grid place-items-center gap-2 my-8'>
				
				<SelectDogSize />
				
			</div>
			
		</div>
	);
};

export default ServiceModalContainer;
