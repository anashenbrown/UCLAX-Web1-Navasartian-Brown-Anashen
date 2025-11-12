import { useState } from "react";
import styled from "styled-components";

// components
import Input from "@App/Core/components/Form/Inputs/Input";

//styles
const ForminputStateStyled = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary.default};
`;

// component
const ForminputState = () => {
    const [value, setValue] = useState("");
    const formInput = {
        id: "userName",
        labelText: "Name",
        type: "text",
        value: value,
    };
    const onChange = (e) => {
        setValue(e.target.value);
    };

    console.log(value);

    return (
        <div>
            <h2>Form Input State</h2>
            <ForminputStateStyled>
                <Input formInput={formInput} onChange={onChange} />
            </ForminputStateStyled>
        </div>
    );
};

export default ForminputState;
