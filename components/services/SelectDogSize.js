const SelectDogSize = () => {
	return (
		<div className="text-lightblue grid gap-3">
			<div className=' text-2xl'>
				Select Dog Size For{' '}
				<span className='font-bold text-primary'>Pricing</span>{' '}
			</div>

            <div className="border-2 border-primary rounded-full flex justify-between py-2 px-5">
                <span>{'Tiny'}</span>
                <span className="justify-self-end ">---</span>
            </div>



		</div>
	);
};

export default SelectDogSize;
