import React from 'react'
import {connect} from "react-redux";
import InputForm from "./inputForm/InputForm";
import {changeText} from "../../store/actions/changeText";
import OutputForm from "./outputForm/OutputForm";

const Task1 = (props) => {
    return (
        <>
            <h1>Тестовое задание № 1</h1>
            <InputForm {...props}/>
            <OutputForm {...props} />
        </>
    )
}

function mapStateToProps(state) {
    return {text: state.inputReducer.text}

}

function mapDispatchToProps(dispatch) {
    return {
        changeText: (text) => dispatch(changeText(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Task1)
