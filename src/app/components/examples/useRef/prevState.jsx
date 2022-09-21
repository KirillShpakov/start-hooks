import React, { useState, useRef, useEffect } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev state: {prevState.current}</p>
            <p>current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>ToggleOtherState</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
