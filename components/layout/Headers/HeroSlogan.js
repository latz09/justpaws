import { Heading1, Heading4 } from '../../utils/Typography';
import { ButtonLink } from '../../utils/Utils';

const HeroSlogan = () => {
	return (
		<div className='mx-2 '>
			<div className='text-gray-50 leading-[.9] grid place-items-end'>
				<div className='text-primary grid place-items-end'>
					<span className='font-semibold'>
						<Heading1 text='JUST PAWS' />
					</span>
					<span className='text-lightblue'>
						<Heading1 text='PET SALON ' />
					</span>
				</div>
				<span className=' text-lightblue font-secondary my-1'>
					<Heading4 text='Your neighborhood grooming parlor' />
				</span>
			</div>
			<div className=' my-4 md:my-7 text-center'>
				<ButtonLink title='Contact' href={'/'} type='withpaw' /> 
			</div>
		</div>
	);
};

export default HeroSlogan;
