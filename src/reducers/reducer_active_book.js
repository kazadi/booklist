//state argument is not application state,
//only the state reducer is responsible for
// ${books} in reducer/index.js
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}