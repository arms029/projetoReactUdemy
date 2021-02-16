import React from 'react';
import styled from 'styled-components';
// import './Person.css'

const PersonStyle = styled.div`
    width: 60%;
    margin:auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    margin-top: 20px;
    @media (min-width: 500px) {
            width: 350px;
        }
    @media (min-width: 800px) {
            width: 700px;
        }
    @media (min-width: 1200px) {
            width: 1000px;
        }
    `;

const BtnDelStyle = styled.button`
    background-color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    margin-left: 20px;
    `;

const person = (props) => {


    return (
        // <div className="Person" style={style}>
        <PersonStyle>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text"
                onChange={props.changed}
                value={props.name} />
            <BtnDelStyle
                className="btn-del"
                onClick={props.click}>DELETE
            </BtnDelStyle>
        </PersonStyle>

    )
};

export default person;