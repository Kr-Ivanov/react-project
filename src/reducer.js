

export const initialState = {
    basket: [],
    user: null,
    admin: null,

};



export const getBasketTotal = (basket) => {
    return basket?.reduce((total, x) => Number(x.price) + total, 0)
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const i = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (i >= 0) {
                newBasket.splice(i, 1);

            } else {
                console.warn(`Can not remove product (id: ${action.id}) as it is not in basket!`)
            }

            return {
                ...state,
                basket: newBasket,
            }

        default:
            return state;
    }

}