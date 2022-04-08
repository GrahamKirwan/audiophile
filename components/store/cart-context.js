import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {

    const [cartData, updateCartData] = useState(
        {
            yx1Earphones: 0,
            xx59Headphones: 0,
            xx99MarkOneHeadphones: 0,
            xx99MarkTwoHeadphones: 0,
            zx7Speaker: 0,
            zx9Speaker: 0
        }
    )

    const [cartTotal, updateCartTotal] = useState(0)

    function addToCartHandler(name, num) {

        let data = cartData;
        if(name == 'yx1-earphones'){
            data.yx1Earphones = data.yx1Earphones + num;
        }
        else if (name == 'xx59-headphones'){
            data.xx59Headphones = data.xx59Headphones + num;
        }
        else if (name == 'xx99-mark-one-headphones'){
            data.xx99MarkOneHeadphones = data.xx99MarkOneHeadphones + num;
        }
        else if (name == 'xx99-mark-two-headphones'){
            data.xx99MarkTwoHeadphones = data.xx99MarkTwoHeadphones + num;
        }
        else if (name == 'zx7-speaker'){
            data.zx7Speaker = data.zx7Speaker + num;
        }
        else if (name == 'zx9-speaker'){
            data.zx9Speaker = data.zx9Speaker + num;
        }
        updateCartData(data);
        countTotal();
    }

    function countTotal() {
        let total = 0;
        // Count total
        for (const key in cartData) {
            total = total + cartData[key];
        }
        // Update cart state total
        updateCartTotal(total);
    }

    const context = {
        cart: cartData,
        cartTotal: cartTotal,
        addToCart: addToCartHandler
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}