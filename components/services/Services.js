import { BsArrowDown } from 'react-icons/bs';
import HeaderAnimation from '../utils/animations/HeaderAnimation';
import PawPrints from '../utils/animations/PawPrints';

const Services = () => {
	return (
		<div className='bg-white p-4'>
			<div className='p-2 bg-primary'>
				<h4>
					<HeaderAnimation word='services' />{' '}
				</h4>
			</div>
		</div>
	);
};

export default Services;
