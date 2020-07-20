import React, {useState} from 'react'

import {TriangleDownIcon, TriangleRightIcon} from "@primer/octicons-react";

const Task2 = () => {

    const [state, setState] = useState({
        table: [
            {tabs: 4, secondContetn: "bla bla bla", open: false},
            {tabs: 5, secondContetn: "foo bar foobar", open: false},
            {tabs: 2, secondContetn: "one two three", open: false},
        ]
    })
    return (
        <>
            <h1>Тестовое задание № 2</h1>
            <br/>
            <div className='testForm'>
                <div className='jumbotron'>
                    <table className=" table-borderless">
                        <tbody>
                        {
                            state.table.map((data, idx) => {
                                return <React.Fragment key={idx + Date.now()}>
                                <tr >
                                    <td>
                                        <button className='table-content'><p>{data.tabs}</p></button>
                                    </td>
                                    <td>
                                        <button className='table-content'>1</button>
                                    </td>
                                    <td>
                                        <button className={data.open? "table-button": 'table-content'}  onClick={() => setState(
                                            (prevState) => {
                                                prevState.table[idx].open = !prevState.table[idx].open
                                                return {...prevState}
                                            }
                                        )}>
                                            {data.open ? <div className='table-item' >PARAMETRS LIST<TriangleDownIcon
                                                    verticalAlign='middle'
                                                    size={27}/></div> :
                                                <div className='table-item'>PARAMETRS LIST<TriangleRightIcon
                                                    verticalAlign='middle'
                                                    size={27}/></div>}
                                        </button>
                                    </td>
                                </tr>

                                    {data.open && <tr className='secondContetn'>
                                            <td >{Date.now()}</td>
                                            <td> <h3>{data.secondContetn}</h3></td>
                                        <td>show</td>


                                    </tr>}
                                </React.Fragment>


                            })
                        }
                        </tbody>
                    </table>
                </div>
                <br/>
                <div className='jumbotron'>
                    <select className="custom-select mb-3">
                        <option>Новый список</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <br/>
                    <button type="button" style={{width: 175, color: "#424C49"}}
                            className="btn btn-warning btn-sm">Создать
                    </button>
                    <hr/>
                    <button type="button" style={{width: 91, color: "#424C49", backgroundColor: '#D9E0E2'}}
                            className="btn btn-secondary btn-sm">Создать
                    </button>
                </div>
            </div>
        </>)
}
export default Task2
