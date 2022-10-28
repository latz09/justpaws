import Head from 'next/head';
import Image from 'next/image';
import dog from '../../../public/images/hero-dog-shower.jpg';
import Services from '../../services/Services';
import { Heading1, Heading2, Heading3, Heading4 } from '../../utils/Typography';
import { ButtonLink } from '../../utils/Utils';
import LandingHero from '../Headers/LandingHero';

const CustomHero = () => {
	return (
		<div className='relative w-full h-[80vh] md:h-[80vh]'>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-darkblue bg-opacity-70 md:bg-opacity-70 '>
				<div className='landing'>
					<div className='self-end md:self-center  order-2 lg:order-1'>
						<Services />
					</div>
					<div className="self-end md:self-center order-1 lg:order-2">
						<LandingHero />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CustomHero;
