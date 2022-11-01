import BusinessDetails from './BusinessDetails';
import CallPhoneNumber from './CallPhoneNumber';
import FooterNav from './FooterNav';
import Hours from './Hours';

const Footer = () => {
	return (
		<div className='grid grid-cols-3 gap-2 items-center footer'>
			<Hours />
			<div className="grid gap-4 self-start">
				<CallPhoneNumber />
				<BusinessDetails />
			</div>
			<FooterNav />
		</div>
	);
};

export default Footer;
