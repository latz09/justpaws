import { FaPaw } from "react-icons/fa";

const CallPhoneNumber = () => {
	return (
		<div className="text-center grid gap-2">
			{' '}
			<p>For consultation or to make an appointment</p>
			<div className='flex items-center justify-center space-x-4 tracking-normal font-semibold '>
				<span>
					<FaPaw />{' '}
				</span>
				<span>651 451-0303</span>
			</div>{' '}
		</div>
	);
};

export default CallPhoneNumber;
