import type { ReactElement } from "react";
import s from "./header.module.css";

const Header = ({text}: {text: string}):ReactElement => {
    return (
        <header className={s.header}>
            {text}
        </header>
    );
}

export default Header