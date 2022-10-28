import Head from 'next/head';
import Image from 'next/image';
import dog from '../../../public/images/hero-dog-shower.jpg';
import { Heading1, Heading2, Heading3, Heading4 } from '../../utils/Typography';
import { ButtonLink } from '../../utils/Utils';

const CustomHero = () => {
	return (
		<div className='relative w-full h-[80vh]'>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full bg-darkblue bg-opacity-60'>
				<div className='grid grid-cols-2 place-items-center h-full max-w-7xl mx-auto font-primary text-center'>
					<div className='text-white'>logo</div>
					<div>
						<div className='text-gray-50 text-right leading-[.9] grid gap'>
							<Heading1 text='JUST PAWS PET SALON' />
							<span className=' text-lightblue  font-secondary'>
								<Heading4 text='Your neighborhood grooming parlor' />
							</span>
						</div>
						<div className="my-4">
							<ButtonLink title='Contact' href={'/'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CustomHero;
