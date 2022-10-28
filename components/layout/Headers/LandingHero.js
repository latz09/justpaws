import { Heading1, Heading4 } from '../../utils/Typography';
import { ButtonLink } from '../../utils/Utils';

const LandingHero = () => {
	return (
		<div className='mx-2'>
			<div className='text-gray-50 text-left lg:text-right leading-[.9] grid gap'>
				<div className='text-center lg:text-right'>
					<Heading1 text='JUST PAWS PET SALON' />
				</div>
				<span className=' text-lightblue  font-secondary text-center lg:text-right'>
					<Heading4 text='Your neighborhood grooming parlor' />
				</span>
			</div>
			<div className='md:hidden grid place-items-center my-4 text-center '>
				<ButtonLink title='Contact' href={'/'} type='withpaw' />
			</div>
		</div>
	);
};

export default LandingHero;
