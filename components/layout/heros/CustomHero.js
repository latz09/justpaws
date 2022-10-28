import Image from 'next/image';
import logo from '../../../public/images/image.png';

const CustomHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={logo}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-primary bg-opacity-40'>
				{/* Content under here */}
			
		

				
			</div>
		</div>
	);
};
export default CustomHero;
