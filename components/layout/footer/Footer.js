import BusinessDetails from './BusinessDetails';
import CallPhoneNumber from './CallPhoneNumber';
import FooterNav from './FooterNav';
import Hours from './Hours';

const Footer = () => {
	return (
		<div className='grid gap-8 place-items-center lg:grid-cols-3 lg:gap-2 items-center footer'>
			<Hours />
			<div className='grid gap-8 place-items-center lg:gap-4 lg:self-start'>
				<CallPhoneNumber />
				<BusinessDetails />
			</div>

			<FooterNav />
		</div>
	);
};

export default Footer;
