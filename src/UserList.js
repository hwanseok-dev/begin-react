import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    useEffect(() =>{
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트ㅡ가 화면에서 사라짐');
        }
    }, [])
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
               onClick={() => onToggle(id)}
            >{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            <button>수정</button>
        </div>
    )
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

// onRemove, onToggle가 useCallback로 되어서 props가 바뀌는 경우에만 새로
export default React.memo(UserList,
    ((prevProps, nextProps) => prevProps.users === nextProps.users));