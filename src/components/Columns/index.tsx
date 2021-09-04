import React from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./styled";
import { Messages } from "./Messages";
import { Priority } from "../../utils/constants";
import { useMessages } from "../../hooks/useMessages";
import { getBgColor } from "../../utils";

export const Columns = () => {
    const { errorMessages, infoMessages, warningMessages } = useMessages()
    return (
        <Wrapper>
            <Grid container spacing={3} justifyContent="center">
                <Messages priority={Priority.Error} messages={errorMessages} bgColor={getBgColor(Priority.Error)} />
                <Messages priority={Priority.Warning} messages={warningMessages} bgColor={getBgColor(Priority.Warning)} />
                <Messages priority={Priority.Info} messages={infoMessages} bgColor={getBgColor(Priority.Info)} />
            </Grid>
        </Wrapper>
    )
}
