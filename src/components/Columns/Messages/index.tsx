import { Grid, Typography } from "@material-ui/core";
import { Item } from "./Item";
import { Priority } from "../../../utils/constants";
import { IMessage } from "../../../type";

interface Props {
    priority: Priority
    messages: IMessage[]
    bgColor: string
}

export const Messages = ({ priority, messages, bgColor }: Props) => {
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
