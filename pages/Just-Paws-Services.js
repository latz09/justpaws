import { useState } from 'react';
import { pricingAndSizes } from '../data/pricingAndSizes';
import ModalOverlay from '../components/utils/ModalOverlay';
import ModalSections from '../components/services/Modal/ModalSections';
import ServiceHeader from '../components/services/servicePage/ServiceHeader';
import Nails from '../components/services/servicePage/Nails';
import PricingComponent from '../components/services/servicePage/PricingComponent';
import CallPhoneNumber from '../components/layout/footer/CallPhoneNumber';
import BusinessDetails from '../components/layout/footer/BusinessDetails';
import ServiceHero from '../components/layout/heros/ServiceHero';
import { FiScissors } from 'react-icons/fi';
const JustPawsServices = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className=''>
			<ServiceHero setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
			<div className='grid lg:grid-cols-3 max-w-7xl mx-auto  lg:my-12'>
				<div className='lg:hidden pb-4  px-4 lg:py-8 lg:pb-0'>
					<div className='text-3xl lg:text-5xl font-primary py-8'>Nails</div>
					<Nails />
				</div>

				<div className='lg:col-span-2 p-4 grid gap-12'>
					<div className='grid gap-4'>
						<div className='text-3xl lg:text-5xl font-primary '>
							{' '}
							Bath and brush
						</div>
						<PricingComponent data={pricingAndSizes} position={1} />
					</div>
					<div className='grid gap-4 mb-8'>
						<span className='text-3xl lg:text-5xl font-primary'> Grooming</span>
						<PricingComponent data={pricingAndSizes} position={2} />
					</div>
				</div>
				<div className='hidden lg:block lg:ml-20'>
					<div className='h-1/3'>
						<div className='text-3xl lg:text-5xl font-primary py-8 text-center'>
							Nails
						</div>
						<Nails />
					</div>
					<div className='hidden lg:grid gap-12  text-primary text-xl font-normal '>
						<BusinessDetails />
						<CallPhoneNumber />
					</div>
				</div>
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

export default JustPawsServices;
