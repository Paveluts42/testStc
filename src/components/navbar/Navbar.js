import React from "react"
import {Link} from "react-router-dom";

const Navbar=()=>{

    return(
        <div  className="fixed-top">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container ">
                    <div className="row">
                      <Link  className="navbar-brand" to="/">Тестовое задание № 1</Link>
                    </div>
                    <div className='row'>
                        <Link to="/task2" className="navbar-brand" >Тестовое задание № 2</Link>
                </div>

                </div>



            </nav>
        </div>
    )
}






export default Navbar
