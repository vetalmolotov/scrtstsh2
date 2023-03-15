import * as React from "react"
import "../css/tab-content.scss"

const TabContent = ({
                        title,
                        imageSrc,
                        text,
                    }) => {
    return (
        <section className="tab-content">
            <h2 className="tab-content-title">{title}</h2>
            <div className="tab-content-img">
                <img src={imageSrc} alt="" />
            </div>
            <p className="tab-content-text">{text}</p>
        </section>
    )
}

export default TabContent;