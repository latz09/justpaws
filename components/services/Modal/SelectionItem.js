const SelectionItem = ({
	size,
	description,
	setSelectedId,
	id,
	setDescriptionOpen,
}) => {
	const handleClick = () => {
		setSelectedId(id);
		setDescriptionOpen(true);
	};

	return (
		<li
			className='grid gap-2 place-items-center sizes'
			onClick={handleClick}
		>
			<span className=''> {size}</span>
			<span className='text-sm font-normal'>{description}</span>
		</li>
	);
};

export default SelectionItem;
