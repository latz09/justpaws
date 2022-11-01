import { FaPaw } from 'react-icons/fa';

const BusinessDetails = () => {
	return (
		<div className='grid gap-3 text-xl text-center'>
	
			<p>
				Visit{' '}
				<span className='font-bold'>
					JUST PAWS <span className='font-semibold'>Grooming Salon</span>{' '}
				</span>{' '}
				at
			</p>
			<div className='grid gap-1 text-lg'>
				<span>The Signal Hills Shopping Center</span>
				<span>1201 South Robert Street, Suite 5</span>
				<span>West St. Paul, MN 55118</span>
				
			</div>
		</div>
	);
};

export default BusinessDetails;
