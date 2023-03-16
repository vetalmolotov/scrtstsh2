import * as React from "react"
import {PROFILE_SIDEBAR_MENU} from "../constants/headerTabs";
import {Link} from "gatsby";
import {useState} from "react";
import "../css/header.scss"

const Header = () => {

    const [isActive, setActive] = useState("");
    const toggleClass = (e) => {
        setActive(e.currentTarget.href);
    };
    return (
        <header className="app-tabs">

            {PROFILE_SIDEBAR_MENU.map(({
                                           text,
                                           url,
                                           id
                                       }) => (
                <Link
                    key={id}
                    to={url}
                    onClick={toggleClass}
                    className={!isActive === url ? "active" : ""}

                >{text}</Link>
            ))}

        </header>
    )
}

export default Header;