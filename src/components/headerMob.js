// import * as React from 'react'
import React from 'react';
// import {Script} from "gatsby"


import '../css/heade-mob.scss'
import TabContent from "./tabContent";


const HeaderMob = () => {


    return (
        <>
            <header className="app-tabs-mob" id="header">

                <form>
                    <section className="menu-item">
                        <label id="q" htmlFor="content01">All</label>
                        <input
                            type="radio"
                            name="mob-menu-item"
                            id="content01"
                        />
                        <div className="menu-item-content">
                            lol
                        </div>
                    </section>

                    <section className="menu-item">
                        <label htmlFor="content02">Filter 01</label>
                        <input
                            type="radio"
                            name="mob-menu-item"
                            id="content02"
                        />
                        <div className="menu-item-content">
                            <TabContent
                                title="Filter 1"
                                imageSrc="https://placehold.co/300x400"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                            />
                        </div>
                    </section>

                    <section className="menu-item">
                        <label htmlFor="content03">Filter 02</label>
                        <input
                            type="radio"
                            name="mob-menu-item"
                            id="content03"
                        />
                        <div className="menu-item-content">
                            <TabContent
                                title="Filter 2"
                                imageSrc="https://placehold.co/400x400"
                                text="text"
                            />
                        </div>
                    </section>

                    <section className="menu-item">
                        <label htmlFor="content04">Filter 03</label>
                        <input
                            type="radio"
                            name="mob-menu-item"
                            id="content04"
                        />
                        <div className="menu-item-content">test filter 3</div>
                    </section>
                </form>


            </header>
            {/*<Script id="id">{`alert('Hello world')`}</Script>*/}

        </>
    )
}


export default HeaderMob