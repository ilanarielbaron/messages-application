import React from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./styled";
import { Messages } from "./Messages";
import { Priority } from "../../Constants";
import { useMessages } from "../../hooks/useMessages";

export const Columns = () => {
    const { errorMessages, infoMessages, warningMessages } = useMessages()
    return (
        <Wrapper>
            <Grid container spacing={3} justifyContent="center">
                <Messages priority={Priority.Error} messages={errorMessages} />
                <Messages priority={Priority.Warning} messages={warningMessages} />
                <Messages priority={Priority.Info} messages={infoMessages} />
            </Grid>
        </Wrapper>
    )
}
