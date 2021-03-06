import React, {useReducer, useRef, useMemo, useCallback} from 'react';
import Hello from './Hello'
import './App.css'
import Wrapper from "./Wrapper";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs"
function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
        {id: 1, username: 'hwanseok1', email: 'hwanseok1.dev@gmail.com', active: true},
        {id: 2, username: 'hwanseok2', email: 'hwanseok2.dev@gmail.com', active: false},
        {id: 3, username: 'hwanseok3', email: 'hwanseok3.dev@gmail.com', active: true}
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                user.id === action.id
                ? {...user, active : !user.active}
                : user)
            }
        case 'REMOVE_USER':
            return {
                ...initialState,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            throw new Error('Unhandled Action Type')
    }
}


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form, onChange, reset] = useInputs({
        username:'',
        email:''
    })
    const nextId = useRef(4);
    const {users} = state;
    const {username, email} = form;

    const onCreate = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            },
        });
        nextId.current += 1;
        reset();
    }, [username, email, reset])

    const onToggle = useCallback((id) => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    }, []);
    const onRemove = useCallback((id) => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, [])

    const userCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <Wrapper>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            <div>활성 사용자 수 asd:{userCount}</div>
        </Wrapper>
    );
}

export default App;
