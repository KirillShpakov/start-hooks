import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };
    // Without callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    // with callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutcallBack : {withoutCallback.current}</p>
            <p>Render withcallBack : {withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                onChange={handleChange}
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
