import React from "react";
import { Wrapper } from "./styled";
import { Button } from "@material-ui/core";
import { useMessages } from "../../../hooks/useMessages";

export const Actions = () => {
    const { isSubscribed, toggleSubscription, clearMessages } = useMessages()
    return (
        <Wrapper>
            <Button variant="contained" onClick={toggleSubscription}>
                {isSubscribed ? 'Stop' : 'Start'}
            </Button>
            <Button variant="contained" onClick={clearMessages}>
                Clear
            </Button>
        </Wrapper>
    )
}
