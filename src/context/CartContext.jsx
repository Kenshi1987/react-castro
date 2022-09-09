import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export function CartProvider ({children}){
    const [items, setItems] = useState ([]);

    function addItem (item, quantity) {
        console.log({...item,quantity});
    
        if (isInCart(item.id)){            
            let aux = items;
            let itemIndex = aux.findIndex ((element) => element.id == item.id);            
            aux[itemIndex].quantity += quantity;
            setItems ([...aux])
        } else {
            
            setItems([...items, {...item, quantity}]);
        }
    }

    function removeItem(itemId){
        setItems(items.filter((element) => element.id !=itemId));
    }

    function clear(){
        setItems([]);
    }

    function isInCart(itemId){
        if (!!items){
            return items.some((element)=>element.id ==itemId);

        } else {
        
            return false
    }
}
            
    return (
        <CartContext.Provider value={{addItem, removeItem, items, clear}}>
            {children}
        </CartContext.Provider>
    )
    }


