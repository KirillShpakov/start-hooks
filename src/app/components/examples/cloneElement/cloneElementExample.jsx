import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    // const handleChange = (target) => {
    //     // console.log("change: ", target);
    // };
    const field = <TextField label="email" name="email" />;
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {/* {React.cloneElement(field, { onChange: handleChange, label: "Clone Email" })} */}
        </CardWrapper>
    );
};

export default CloneElementExample;
