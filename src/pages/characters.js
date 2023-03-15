import * as React from "react"
import Layout from "../components/layout";
import TabContent from "../components/tabContent";

const Characters = () => {
    return (
        <Layout>
            <TabContent
                title="text"
                imageSrc="https://placehold.co/600x400"
                text="text"
            />
        </Layout>
    )
}

export default Characters;