import React from "react";
import PropTypes, {number} from "prop-types";
import PizzaBlock from "./PizzaBlock";

const Categories = ({ activeCategory, items, onClickCategory }) => {

    return (
        <div className='categories'>
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>Все
                </li>
                {
                    items.map((name, index) => (
                        <li className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={name}>{name}</li>
                    ))}
            </ul>
        </div>
    )
}

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};


Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;