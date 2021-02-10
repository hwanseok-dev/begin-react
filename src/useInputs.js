import {useState, useReducer, useCallback} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            throw new Error('Unhandled Action Type')
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);
    const reset = useCallback(e => {
        dispatch({
            type: 'RESET'
        });
    }, []);
    return [form, onChange, reset]
}

export default useInputs;

// function useInputs(initialForm){
//     const [form, setForm] = useState(initialForm);
//     const onChange = useCallback(e =>{
//         const {name, value} = e.target;
//         setForm(form => ({
//             ...form,
//             [name]: form
//         }))
//     }, []);
//     const reset = useCallback(() => setForm(initialForm), [initialForm]);
//     return [form, onChange, reset]
// }

