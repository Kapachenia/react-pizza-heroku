import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaBlock from "../components/PizzaBlock";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {

    const dispatch = useDispatch();

    const items = useSelector(({ pizzas }) => pizzas.items );

    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

    const cartItems = useSelector(({cart}) => cart.items);


    const { category, sortBy } = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    // const onSelectCategory = index => {
    //     dispatch(setCategory(index));
    // }

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
    dispatch({
        type: 'ADD_PIZZA_CART',
        payload: obj,
    })
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((i) => (
                        <PizzaBlock
                            onClickAddPizza={ handleAddPizzaToCart }
                            key={i.id} id={i.id} name={i.name}
                            price={i.price} imageUrl={i.imageUrl}
                            types={i.types} sizes={i.sizes}
                            addedCount={cartItems[i.id] && cartItems[i.id].items.length}
                            {...i}
                        />))
                    : Array(12).fill(<LoadingBlock />)
                }
            </div>
        </div>
    )
}

export default Home;