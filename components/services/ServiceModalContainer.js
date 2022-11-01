
import HeaderAnimation from '../utils/animations/HeaderAnimation';

import SelectDogSize from './SelectDogSize';

const ServiceModalContainer = () => {
	return (
		<div className='bg-li backdrop-blur-sm p-1 border border-opacity-70 border-primary shadow-lg'>
			<div className='tracking-wider grid place-items-center gap-2 my-8'>
				<HeaderAnimation word='Services' />
				<SelectDogSize />
				
			</div>
		</div>
	);
};

export default ServiceModalContainer;
