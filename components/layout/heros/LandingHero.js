import Image from 'next/image';
import dog from '../../../public/images/hero-dog-shower.jpg';
import Services from '../../services/Services';
import HeroSlogan from '../Headers/HeroSlogan';
import { motion } from "framer-motion";

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
				<div className='h-full '>
					<div className='landing '>
						<HeroSlogan />
					</div>
					<div className=''>
						<Services />
					</div>
				</div>
			</div>
		</div>
	);
};
export default LandingHero;
