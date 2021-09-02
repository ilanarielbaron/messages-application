import React from "react";
import { Wrapper, Clear } from "./styled";
import { Typography } from "@material-ui/core";

interface Props {
    bgColor: string
    messageText: string
}

export const Item = ({bgColor, messageText}: Props) => {

    return (
        <Wrapper style={{background: bgColor}}>
            <Typography variant='body1'>{messageText}</Typography>
            <Clear>
                <Typography variant='body1'>Clear</Typography>
            </Clear>
        </Wrapper>
    )
}
