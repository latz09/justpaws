import Link from 'next/link';
import {navLinks} from '../../../data/navLinks'

const FooterNav = () => {

	return (
		<div className="grid gap-3 font-bold place-items-center">
        {navLinks.map(link => (
            <div key={link.name}>
                <Link href={link.link}>
                    <a >
                       {link.name} 
                    </a>
                </Link>

            </div>
        ))}
        
        </div>
	);
};

export default FooterNav;
