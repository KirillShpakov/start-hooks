import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" ref={inputRef} className="form-control" id="email" />
            <button className="btn btn-primary" onClick={handleClick}>Focus Input</button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину обьекта</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
