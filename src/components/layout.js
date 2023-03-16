import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";

import HeaderMob from "./headerMob";
import Header from "./header";

import '../css/index.scss'


const Layout = ( {children} ) => {

    const isMobile = useMediaQuery('(max-width: 1024px)');
    return (
        <>
            <main className="app">
                {isMobile && <HeaderMob/>}
                {!isMobile && <Header />}

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