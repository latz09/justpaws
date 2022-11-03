import PricingModal from './PricingModal';
import { useEffect, useState } from 'react';
import ModalOverlay from '../../utils/ModalOverlay';
import { pricingAndSizes } from '../../../data/pricingAndSizes';
import ModalSections from './ModalSections';

const ServiceModalContainer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);



	return (
		<div>
			<div className='tracking-wider grid place-items-center gap-2 my-8 text-lightblue p-2 cursor-pointer'>
				<PricingModal setModalIsOpen={setModalIsOpen} />
			</div>
			{modalIsOpen && (
				<ModalOverlay setModalIsOpen={setModalIsOpen}>
					<ModalSections
						data={pricingAndSizes}
						setModalIsOpen={setModalIsOpen}
					/>
				</ModalOverlay>
			)}
		</div>
	);
};

export default ServiceModalContainer;
