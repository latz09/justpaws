import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { navLinks } from '../../../data/navLinks';
import { FaPaw } from 'react-icons/fa';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	// const logoVariant = {
	// 	hidden: { x: 1 },
	// 	visible: { x: 2 },
	// };

	return (
		<div className='shadow-md w-full  top-0 left-0 z-10'>
			<div className='bg-primary bg-opacity-80'>
				<div className='max-w-7xl mx-auto flex items-center justify-between py-3 md:px-10 px-7   font-secondary tracking-widest'>
					<Link href={'/'}>
						<div
							className='text-lightblue hover:scale-110 hover:opacity-30 p-1 md:p-2 duration-700 text-5xl cursor-pointer'
							onClick={closeMenu}
							aria-label='Navigate Home'
						>
							<FaPaw />
						</div>
					</Link>

					<div
						onClick={() => setOpen(!open)}
						className='text-3xl  cursor-pointer md:hidden'
					>
						{!open ? (
							<button
								label='open navbar'
								aria-label='open dropdown navigation bar'
							>
								<RiMenu3Fill />{' '}
							</button>
						) : (
							<button
								label='close navbar'
								aria-label='close dropdown navigation bar'
							>
								<RiCloseLine />
							</button>
						)}
					</div>

					<div
						className={`${open && 'bg-primary bg-opacity-30 backdrop-blur-sm'} border-b-2 border-primary md:border-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-in ${
							open ? 'top-20' : 'top-[-490px]'
						}`}
					>
						{navLinks.map((link) => (
							<div
								key={link.name}
								className='md:ml-8 text-lg md:text-2xl md:my-0 my-7 text-center'
								onClick={() => setOpen(!open)}
							>
								<Link href={link.link}>
									<a className='text-white font-bold hover:text-lightblue transition duration-700'>
										{link.name}
									</a>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
