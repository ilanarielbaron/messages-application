import React from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./styled";
import { Messages } from "./Messages";
import { Priority } from "../../Constants";

export const Columns = () => {

    return (
        <Wrapper>
            <Grid container spacing={3} justifyContent="center">
                <Messages priority={Priority.Error} />
                <Messages priority={Priority.Warning} />
                <Messages priority={Priority.Info} />
            </Grid>
        </Wrapper>
    )
}
