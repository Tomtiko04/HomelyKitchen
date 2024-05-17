import PropTypes from "prop-types";

export default function DishList({ render, items }) {
	return <div className="grid lg:grid-cols-3 my-10">{items?.map(render)}</div>;
}

DishList.propTypes = {
	render: PropTypes.any,
	items: PropTypes.any,
};