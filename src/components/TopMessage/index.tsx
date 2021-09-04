import React, {useEffect, useState} from "react";
import { Wrapper } from "./styled";
import { Snackbar } from "@material-ui/core";
import { useMessages } from "../../hooks/useMessages";
import { Alert } from "@material-ui/lab";

let lastCount = 0;

export const TopMessage = () => {
    const { errorMessages } = useMessages()
    const [topMessage, setTopMessage] = useState<string | undefined>()
    const [open, setOpen] = useState(false)

    /** Set the latest error message for 2 seconds except a new one came or the user clean all the messages */
    useEffect(() => {
        if (!errorMessages ||
            errorMessages.length === 0 ||
            (errorMessages.length < lastCount && errorMessages[0].message !== topMessage)) {
                lastCount = errorMessages.length
                setOpen(false)
                setTimeout(() => {
                    setTopMessage(undefined)
                }, 500)

                return
        }

        setOpen(true)
        lastCount = errorMessages.length
        setTopMessage(errorMessages[0].message)
        // eslint-disable-next-line
    }, [errorMessages])

    return (
        <Wrapper>
            <Snackbar className='snackbar' anchorOrigin={{horizontal: 'center', vertical: 'top'}} open={open}  autoHideDuration={2000} onClose={() => {setOpen(false)}}>
                <Alert severity="error">{topMessage}</Alert>
            </Snackbar>
        </Wrapper>
    )
}
