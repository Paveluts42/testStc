import React from 'react'
import {TriangleDownIcon, TriangleRightIcon} from "@primer/octicons-react";

const Task2 = () => {
    return (
        <>
            <h1>Тестовое задание № 2</h1>
            <br/>
            <div className='testForm'>
                <div className='jumbotron'>
                    <table className=" table-borderless">
                        <tbody>
                        <tr>
                            <td>
                                <div className='table-content'><p>4</p></div>
                            </td>
                            <td>
                                <div className='table-content'></div>
                            </td>
                            <td>
                                <div className='table-content'>
                                    <div className='table-item'>PARAMETRS LIST<TriangleRightIcon verticalAlign='middle'
                                                                                                 size={27}/></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='table-content'><p>5</p></div>
                            </td>
                            <td>
                                <div className='table-content'></div>
                            </td>
                            <td>
                                <div className='table-content'>
                                    <div className='table-item'>PARAMETRS LIST<TriangleRightIcon verticalAlign='middle'
                                                                                                 size={27}/></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='table-content'><p>2</p></div>
                            </td>
                            <td>
                                <div className='table-content'></div>
                            </td>
                            <td>
                                <div className='table-content'>
                                    <div className='table-item'>PARAMETRS LIST<TriangleDownIcon verticalAlign='middle'
                                                                                                size={27}/></div>
                                </div>
                            </td>
                        </tr>

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
