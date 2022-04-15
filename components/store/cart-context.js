import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cartData, updateCartData] = useState([
    {
      name: "yx1Earphones",
      displayName: "YX1",
      price: 599,
      img: "/images/cart/image-yx1-earphones.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
    {
      name: "xx59Headphones",
      displayName: "XX59",
      price: 899,
      img: "/images/cart/image-xx59-headphones.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
    {
      name: "xx99MarkOneHeadphones",
      displayName: "XX99 1",
      price: 1750,
      img: "/images/cart/image-xx99-mark-one-headphones.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
    {
      name: "xx99MarkTwoHeadphones",
      displayName: "XX99 11",
      price: 2999,
      img: "/images/cart/image-xx99-mark-two-headphones.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
    {
      name: "zx7Speaker",
      displayName: "ZX7",
      price: 3500,
      img: "/images/cart/image-zx7-speaker.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
    {
      name: "zx9Speaker",
      displayName: "ZX9",
      price: 4500,
      img: "/images/cart/image-zx9-speaker.jpg",
      totalInCart: 0,
      itemTotalPrice: 0,
    },
  ]);

  const [cartTotal, updateCartTotal] = useState(0);

  const [cartPrice, updateCartPrice] = useState(0);

  const [indvidualItemCount, updateIndividualItemCount] = useState(0);

  function addToCartHandler(name, num) {
    let data = cartData;
    if (name == "yx1-earphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "yx1Earphones") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    } else if (name == "xx59-headphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx59Headphones") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    } else if (name == "xx99-mark-one-headphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkOneHeadphones") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    } else if (name == "xx99-mark-two-headphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkTwoHeadphones") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    } else if (name == "zx7-speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx7Speaker") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    } else if (name == "zx9-speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx9Speaker") {
          data[i].totalInCart = data[i].totalInCart + num;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price * num;
        }
      }
    }
    updateCartData(data);
    countTotal();
    countCartPrice();
    countIndividualItems();
  }

  function countTotal() {
    let total = 0;
    // Count total
    for (let i = 0; i < cartData.length; i++) {
      total = total + cartData[i].totalInCart;
    }
    // Update cart state total
    updateCartTotal(total);
  }

  function countCartPrice() {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total = total + cartData[i].itemTotalPrice;
    }
    // Update cart price total
    updateCartPrice(total);
  }

  function countIndividualItems() {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].totalInCart > 0) {
        total++;
      }
    }
    updateIndividualItemCount(total);
  }

  function removeAllClickHandler() {
    let data = cartData;

    for (let i = 0; i < data.length; i++) {
      data[i].totalInCart = 0;
      data[i].itemTotalPrice = 0;
    }

    updateCartData(data);
    countTotal();
    countCartPrice();
    countIndividualItems();
  }

  function removeOneFromCart(name) {
    let data = cartData;
    if (name == "yx1Earphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "yx1Earphones") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    } else if (name == "xx59Headphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx59Headphones") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    } else if (name == "xx99MarkOneHeadphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkOneHeadphones") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    } else if (name == "xx99MarkTwoHeadphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkTwoHeadphones") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    } else if (name == "zx7Speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx7Speaker") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    } else if (name == "zx9Speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx9Speaker") {
          data[i].totalInCart = data[i].totalInCart - 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice - data[i].price;
        }
      }
    }

    updateCartData(data);
    countTotal();
    countCartPrice();
    countIndividualItems();
  }

  function addOneToCart(name) {
    console.log(name);
    let data = cartData;
    if (name == "yx1Earphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "yx1Earphones") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    } else if (name == "xx59Headphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx59Headphones") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    } else if (name == "xx99MarkOneHeadphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkOneHeadphones") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    } else if (name == "xx99MarkTwoHeadphones") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "xx99MarkTwoHeadphones") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    } else if (name == "zx7Speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx7Speaker") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    } else if (name == "zx9Speaker") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == "zx9Speaker") {
          data[i].totalInCart = data[i].totalInCart + 1;
          data[i].itemTotalPrice = data[i].itemTotalPrice + data[i].price;
        }
      }
    }

    updateCartData(data);
    countTotal();
    countCartPrice();
    countIndividualItems();
  }

  const context = {
    cart: cartData,
    cartTotal: cartTotal,
    cartPrice: cartPrice,
    cartIndvidualItemCount: indvidualItemCount,
    addToCart: addToCartHandler,
    removeAllClickHandler: removeAllClickHandler,
    removeOneFromCart: removeOneFromCart,
    addOneToCart: addOneToCart,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
