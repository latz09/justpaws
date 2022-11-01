import Image from 'next/image';
import dog from '../../../public/images/hero-dog-shower.jpg';
import Services from '../../services/ServiceModalContainer';
import HeroSlogan from '../Headers/HeroSlogan';
import { useState } from "react";
import ServiceModalContainer from '../../services/ServiceModalContainer';
import ServicesModal from '../../services/ServicesModal';

const LandingHero = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className='relative w-full h-[85vh] '>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black bg-opacity-70 '>
				<div className='h-full grid place-items-end lg:grid-cols-3 lg:place-items-center max-w-7xl mx-auto'>
					<div className='landing  order-1 lg:col-span-2 lg:order-2'>
						<HeroSlogan />
					</div>
					<div className='md:place-self-center order-2 lg:order-1 w-full'>
						<ServiceModalContainer />
					</div>
				</div>
			</div>
			{/* <ServicesModal /> */}
			
		</div>
	);
};
export default LandingHero;
