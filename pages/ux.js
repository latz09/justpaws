const Ux = () => {
	return (
		<div className='relative w-full h-[30vh]'>
			<div className='relative flex justify-center items-center h-full bg-primary'>
				{/* Content under here */}
				<div className='text-center max-w-3xl mx-auto bg-red shadow-lg px-12 py-20 text-blue2 '>
					<h1 className='text-4xl  font-bold text-white mt-12'>Color Scheme</h1>
					<div className='grid gap-3 mt-8 text-3xl justify-items-start'></div>
				</div>
			</div>
			<div className='text-primary text-center py-12 mx-auto text-7xl'>
				<h1>Color Pallete</h1>
				<div className='py-8 flex space-x-5 px-4 justify-center w-full'>
					<span className='p-8 font-bold text-base bg-primary 8  rounded-full text-white'>
						Primary
					</span>
					<span className='p-8 font-bold text-base bg-red 8  rounded-full text-white'>
						Secondary
					</span>
					<span className='p-8 font-bold text-base bg-darkblue 8  rounded-full text-white'>
						Darkblue
					</span>
					<span className='p-8 font-bold text-base bg-lightblue 8  rounded-full text-white'>
						lightblue
					</span>
					<span className='p-8 font-bold text-base bg-dark 8  rounded-full text-white'>
						Dark
					</span>
				</div>
				<h1 className='mb-8 text-lightblue'>Typography</h1>
				<div className='font-custom text-secondary grid gap-8'>
					<h1 className='text-[130px] tracking-wider'>
						Heading 1
                      
					</h1>
					<h1 className='text-[110px] text-red font-bold tracking-wider'>
						Heading 2
                        
					</h1>
					<h2 className='text-[90px] tracking-wider'>
						Heading 3
					</h2>
					<h3 className='text-7xl font-semibold tracking-wider'>Heading 4</h3>
				</div>
				<div className='py-12 text-left text-3xl leading-[1.7] text-red max-w-2xl mx-auto tracking-wide font-bold '>
                    <span className="text-sm px-2">open sans</span>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
						orci nulla pellentesque dignissim enim sit amet. Ullamcorper
						malesuada proin libero nunc consequat interdum varius sit amet.
						Interdum varius sit amet mattis vulputate enim nulla aliquet.
					</p>
				</div>
				<div className='py-12 text-left max-w-2xl mx-auto leading-[1.6] text-2xl tracking-wider font-semibold'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
						orci nulla pellentesque dignissim enim sit amet. Ullamcorper
						malesuada proin libero nunc consequat interdum varius sit amet.
						Interdum varius sit amet mattis vulputate enim nulla aliquet.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Ux;
