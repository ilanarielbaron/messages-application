import React from "react";
import { Wrapper } from "./styled";
import { Button } from "@material-ui/core";

export const Actions = () => {
    return (
        <Wrapper>
            <Button variant="contained">
                Start
            </Button>
            <Button variant="contained">
                Clear
            </Button>
        </Wrapper>
    )
}
