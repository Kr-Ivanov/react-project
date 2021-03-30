

export const initialState = {
    basket: [],
    user: null,
    admin: null,
    search: null,
    address: {},
};



export const getBasketTotal = (basket) => {
    return basket?.reduce((total, x) => Number(x.price) + total, 0)
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SEARCH_VALUE':
            return {
                ...state,
                search: action.search
            }
        case 'ADD_ADDRESS':
            return {
                ...state,
                address: action.address
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
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

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_ADMIN':
            return {
                ...state,
                admin: action.admin
            }


        default:
            return state;
    }

}