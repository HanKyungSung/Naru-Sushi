import React, { useState } from "react";

export const MenuContext = React.createContext();

export default function MenuContextProvider(props) {
    const [totalAmount, setTotalAmount] = useState(0);
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <MenuContext.Provider value={{totalAmount, items, addItem}}>
            {props.children}
        </MenuContext.Provider>
    );
}