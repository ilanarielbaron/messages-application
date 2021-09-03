import React from "react";
import { Wrapper, Clear } from "./styled";
import { Typography } from "@material-ui/core";
import { useMessages } from "../../../../hooks/useMessages";
import { IMessage } from "../../../../type";

interface Props {
    bgColor: string
    message: IMessage
    arrayIndex: number
}

export const Item = ({ bgColor, message, arrayIndex }: Props) => {
    const { removeMessage } = useMessages()
    const { message: messageText, priority } = message

    return (
        <Wrapper style={{ background: bgColor }}>
            <Typography variant='body1'>{messageText}</Typography>
            <Clear onClick={() => { removeMessage(priority, arrayIndex) }}>
                <Typography variant='body1'>Clear</Typography>
            </Clear>
        </Wrapper>
    )
}
