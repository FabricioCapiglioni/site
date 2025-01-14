const CategoryCard = ({ name, image }) => {
	return (
		<div className="categoryCard">
			<img className="categoryCard__image" src={image} alt={name} />
			<strong className="categoryCard__name">{name}</strong>
		</div>
	);
};

export default CategoryCard;
