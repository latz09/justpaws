import Link from 'next/link';

// export const ButtonLink = ({ href, title, type }) => {
// 	<>
// 		{type === 'primary' ? (
// 			<Link href={href}>
// 				<a className='btn btn-primary'>{title}</a>  </Link>

//                 </>

export const ButtonLink = ({ href, title, color }) => {
	return (
		<>
			<div className='text-white'>
				{color === 'secondary' ? (
					<div>
						<Link href={href}>
							<a className='btn btn-secondary'>{title}</a>
						</Link>
					</div>
				) : (
					<div>
						<Link href={href}>
							<a className='btn btn-primary'>{title}</a>
						</Link>
					</div>
				)}
			</div>
		</>
	);
};
