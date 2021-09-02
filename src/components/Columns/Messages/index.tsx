import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Item } from "./Item";
import { Priority } from "../../../Constants";

interface Props {
    priority: Priority
    messages?: any
}

export const Messages = ({ priority, messages }: Props) => {
    let bgColor = '#F56236'

    switch (priority) {
        case Priority.Info:
            bgColor='#88FCA3'
            break
        case Priority.Warning:
            bgColor='#FCE788'
            break
    }

    return (
        <Grid item xs>
            <Typography variant='h4'> {Priority[priority]} Type {priority + 1}</Typography>
            <Typography variant='body1'>Count 4</Typography>
            { /*Map the messages */}
            <Item bgColor={bgColor} messageText='asdasddd sdsadaaaaaaaasssssssaaaaaaaaaaaa '/>
        </Grid>
    )
}
