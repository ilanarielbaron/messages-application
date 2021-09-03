import { Grid, Typography } from "@material-ui/core";
import { Item } from "./Item";
import { Priority } from "../../../Constants";
import { IMessage } from "../../../type";

interface Props {
    priority: Priority
    messages: IMessage[]
}

export const Messages = ({ priority, messages }: Props) => {
    let bgColor = '#F56236'

    switch (priority) {
        case Priority.Info:
            bgColor = '#88FCA3'
            break
        case Priority.Warning:
            bgColor = '#FCE788'
            break
    }

    return (
        <Grid item xs>
            <Typography variant='h4'> {Priority[priority]} Type {priority + 1}</Typography>
            <Typography variant='body1'>Count {messages.length}</Typography>
            {messages.map((message, index) => {
                return (
                    <Item key={index} bgColor={bgColor} message={message} arrayIndex={index} />
                )
            })}
        </Grid>
    )
}
