import React from 'react';

function Hello(props) {
    const {name, color, backgroundColor, isSpecial} = props;
    return <div style={{backgroundColor}}>
        {isSpecial ? <b>*</b> : null}
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
    </div>;
}

Hello.defaultProps = {
    name: '이름 없음'
}

export default Hello;