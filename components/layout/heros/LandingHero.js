import Image from 'next/image';
import dog from '../../../public/images/hero-dog-shower.jpg';

import HeroSlogan from '../Headers/HeroSlogan';

import ServiceModalContainer from '../../services/Modal/ServiceModalContainer';

const LandingHero = () => {
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
				<div className=' place-items-center  h-full grid  lg:grid-cols-3 lg:place-items-center max-w-7xl mx-auto'>
					<div className='landing self-end grid order-1 lg:col-span-2 lg:order-2 z-10 flex-shrink'>
						<HeroSlogan />
					</div>
					<div className='md:place-self-center order-2 lg:order-1 w-full h-full z-20 grow'>
						<div className="grid items-end md:place-items-center h-full">
							<ServiceModalContainer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LandingHero;
