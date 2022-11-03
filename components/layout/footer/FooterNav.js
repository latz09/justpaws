import Link from 'next/link';
import {navLinks} from '../../../data/navLinks'

const FooterNav = () => {

	return (
		<div className="grid gap-3 font-bold place-items-center">
        {navLinks.map(link => (
            <div key={link.name} className="hover:opacity-60 transition duration-700">
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
