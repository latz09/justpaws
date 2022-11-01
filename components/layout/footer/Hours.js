const Hours = () => {
	return (
		<div className='grid gap-4 '>
			<div className='grid'>
				<span className='font-bold'>Monday - Wednesday - Friday</span>
				<span className='font-semibold'>8:00AM - 5:00PM</span>
			</div>
			<div className='grid'>
				<span className='font-bold'>Tuesday - Friday</span>
				<span className='font-semibold'>10:00AM - 6:00PM</span>
			</div>
			<div className="w-2/3 text-base italic ">
				<span>On an occasion a Saturday morning appointment may be made.</span>
			</div>
		</div>
	);
};

export default Hours;
