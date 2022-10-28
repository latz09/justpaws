import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

export const ButtonLink = ({ href, title, type }) => {
	let styles;
	switch (type) {
		case 'secondary':
			styles = 'btn btn-secondary';
			break;
		case 'withpaw':
			styles = 'btn btn-primary'
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
								<span>
									{' '}
									<FaPaw />{' '}
								</span>
							)}
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};
