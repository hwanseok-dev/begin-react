import React from 'react';

function Wrapper(props){
    const {children} = props;
    const style = {
        border: '2px solid black',
        padding: '16px'
    };
    return <div style={style}>{children}</div>
}

export default Wrapper;