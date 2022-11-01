import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const ButtonLink = ({ href, title, type }) => {
	let styles;
	switch (type) {
		case 'secondary':
			styles = 'btn btn-secondary';
			break;
		case 'withpaw':
			styles = 'btn btn-primary';
			break;

		default:
			styles = 'btn btn-primary';
	}

	return (
		<>
			<div className='text-white'>
				<div className='grid place-items-end'>
					<Link href={href}>
						<a
							className={`${styles}  ${
								type === 'withpaw' && 'flex space-x-4 place-items-center'
							} `}
						>
							<span> {title}</span>
							{type === 'withpaw' && (
								<motion.div
									initial={{ scale: 1 }}
									animate={{ scale: [1.1, 1] }}
									transition={{
										
										type: 'spring',
										stiffness: 80,
										// damping: 80,
										repeat: Infinity,
										repeatType: 'reverse'
									
									}}
								>
									{' '}
									<FaPaw />{' '}
								</motion.div>
							)}
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};
