import * as React from 'react'
// import {Script} from "gatsby"
import useMediaQuery from "../hooks/useMediaQuery";
import {PROFILE_SIDEBAR_MENU} from "../constants/headerTabs"

import {Link} from 'gatsby'
import Layout from "../components/layout"
import Characters from "./characters";


const IndexPage = () => {

    return (
        <>
            <Layout>
                <h1>Choose a Tab</h1>
            </Layout>
            {/*<main className="app">*/}
            {/*    {isMobile && <HeaderMob />}*/}
            {/*    {!isMobile &&*/}
            {/*        <header className="app-tabs">*/}
            {/*            /!*{PROFILE_SIDEBAR_MENU.map(({ text, url }) => (*!/*/}
            {/*            /!*    <a*!/*/}
            {/*            /!*        key={text}*!/*/}
            {/*            /!*        href={url}*!/*/}
            {/*            /!*    >{text}</a>*!/*/}
            {/*            /!*))}*!/*/}

            {/*            /!*{PROFILE_SIDEBAR_MENU.map(({ text, url, id }) => (*!/*/}
            {/*            /!*    <a*!/*/}
            {/*            /!*        key={id}*!/*/}
            {/*            /!*        href={url}*!/*/}
            {/*            /!*        className={` ${path === url ? '.active' : ''}`}*!/*/}

            {/*            /!*    >{text}</a>*!/*/}
            {/*            /!*))}*!/*/}


            {/*            <a href="#all"*/}
            {/*               onClick={toggleClass}*/}
            {/*               className={isActive == "#all" ? "current" : ""}*/}
            {/*            >all</a>*/}
            {/*            <a href="#filter1"*/}
            {/*               onClick={toggleClass}*/}
            {/*               className={isActive == "#filter1" ? "current" : ""}*/}
            {/*            >Filter 1</a>*/}
            {/*            <a href="#">Filter 2</a>*/}
            {/*            <a href="#">Filter 3</a>*/}
            {/*        </header>*/}
            {/*    }*/}


            {/*    <section className="app-tabs-content">*/}
            {/*        test*/}
            {/*    </section>*/}

            {/*</main>*/}
            {/*<Script id="id">{`alert('Hello world')`}</Script>*/}

        </>
    )
}

export const Head = () => (
    <>
        <title>Home Page</title>
    </>
)

export default IndexPage