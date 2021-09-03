import { CssBaseline, Container } from "@material-ui/core";
import { Header } from "./Header";
import { TopBar } from "./TopBar";
import { Columns } from "./Columns";
import { TopMessage } from "./TopMessage";

export const Home = () => (
    <>
        <TopBar />
        <CssBaseline />
        <Container maxWidth='lg'>
            <Header />
            <TopMessage />
            <Columns />
        </Container>
    </>
)
