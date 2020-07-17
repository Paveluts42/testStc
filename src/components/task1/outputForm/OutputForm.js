import React from 'react'

const OutputForm = ({text, changeText}) => {


    return (
        <div className='row'>
            <div className='col'>
                <div className='testForm'>
                    <h3>Компонент 2</h3>

                    {text ?
                        <div className="jumbotron">
                            <h1 className="display-7">Введенный текст</h1>

                            <hr className="my-4"/>
                            <h6 className='mx-auto'>{text}</h6>
                            <br/>
                            <button className="btn btn-primary " onClick={() => changeText('')}>Очистить</button>
                        </div> :
                        <>
                            <hr/>
                            <h5>Введите текст</h5>
                        </>
                    }

                </div>
            </div>
        </div>
    )

}

export default OutputForm
