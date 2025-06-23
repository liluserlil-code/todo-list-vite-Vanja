import type { ReactElement } from "react";

const Header = ({text}: {text: string}):ReactElement => {
    return (
        <header style={{textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px"}}>
            {text}
        </header>
    );
}

export default Header