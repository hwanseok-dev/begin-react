import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const onChange = (e) => {
        const {name, value} = e.target; // e.target.name, e.target.value
        setInputs({
            ...inputs,
            [name]: value, // [e.target.name] : e.target.value
        })
    };
    const nameInput = useRef();
    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    };
    const {name, nickname} = inputs;
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="이름" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
            </div>
        </div>
    );
}

export default InputSample;