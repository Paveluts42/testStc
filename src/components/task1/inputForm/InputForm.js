import React from 'react'

const InputForm = ({text, changeText}) => {

    const onChangeText = ({target}) => {
        changeText(target.value)
    }

    return (
        <div className="col ">
            <div className="testForm">

                <h3>Компонент 1</h3>
                <textarea
                          placeholder="Ввод текста" onChange={onChangeText} value={text}/>

            </div>

        </div>
    )
}


export default InputForm
