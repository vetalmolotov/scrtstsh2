// import * as React from 'react'
import React, {useState} from 'react';
// import {Script} from "gatsby"
import useMediaQuery from "../hooks/useMediaQuery";
// import {PROFILE_SIDEBAR_MENU} from "../constants/headerTabs"

import {Link} from 'gatsby'
import HeaderMob from "./headerMob";

import '../css/index.scss'
// import {path} from "xstate";


const Layout = (
    {children}
    ) => {
    const lol = document.getElementsByClassName(".app");
    // const [isActive, setActive] = useState(false);
    // const toggleState = () => {
    //     setActive(!isActive);
    // };

    const [isActive, setActive] = useState("");
    const toggleClass = (e) => {
        setActive(e.currentTarget);
    };


    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <>
            <main className="app">
                {isMobile && <HeaderMob/>}
                {!isMobile &&
                <header className="app-tabs">
                    {/*{PROFILE_SIDEBAR_MENU.map(({ text, url }) => (*/}
                    {/*    <a*/}
                    {/*        key={text}*/}
                    {/*        href={url}*/}
                    {/*    >{text}</a>*/}
                    {/*))}*/}

                    {/*{PROFILE_SIDEBAR_MENU.map(({ text, url, id }) => (*/}
                    {/*    <a*/}
                    {/*        key={id}*/}
                    {/*        href={url}*/}
                    {/*        className={` ${path === url ? '.active' : ''}`}*/}

                    {/*    >{text}</a>*/}
                    {/*))}*/}


                    <Link to="/characters"
                          onClick={toggleClass}
                          className={isActive == "#all" ? "current" : ""}
                    >all</Link>
                    <Link to="/characters/filter1"
                          onClick={toggleClass}
                          className={isActive == "#filter1" ? "current" : ""}
                    >Filter 1</Link>
                    <Link to="/characters/filter2">Filter 2</Link>
                    <Link to="/characters/filter2">Filter 3</Link>
                </header>
                }

                {!isMobile &&
                <section className="app-tabs-content">
                    {children}
                </section>
                }

            </main>
            {/*<Script id="id">{`alert('Hello world')`}</Script>*/}

        </>
    )
}

export default Layout;