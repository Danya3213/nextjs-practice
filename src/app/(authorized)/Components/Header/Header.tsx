import {Container} from "@Components/Container/Container";
import cl from './header.module.scss'
import {Logo} from "./Components/Logo/Logo";
import {Name} from "./Components/Name/Name";
import {Button} from "./Components/Button/Button";
import {Border} from "./Components/Border/Border";

export const Header = () => {

    return (
        <header className={cl.header}>
            <Container className={cl.inner}>
                <Logo/>
                <div className={cl.column}>
                    <Name/>
                    <Border/>
                    <Button/>
                </div>
            </Container>
        </header>
    );
};