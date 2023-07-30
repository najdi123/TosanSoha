import React from 'react';
import clsx from '../utils/classNames'
const Item = ({ item, setSelectedItemsList, setOrderList }) => {
    const enabled = item.text !== 5 ? item.text : '';

    const handleClick = () => {
        setOrderList((prevState) => [...prevState, item.text]);
        setSelectedItemsList((prevListState) =>
            prevListState.map((obj) =>
                obj.text === item.text ? { ...obj, selected: true } : obj
            )
        );
    };

    return (
        <div
            className={clsx(['grid-item', item.selected ? 'activated' : ''])}
            onClick={!item.selected ? handleClick : undefined}
        >
            {enabled && enabled}
        </div>
    );
};

export default Item;