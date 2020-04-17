import React from 'react'

export default function FooterBar() {

    return (
        <>
            <div style={{ padding: "12px 20px", width: "100%" }}>
                <p style={{ textAlign: "center" }}>Please note: The data is not updated in real time, it's done manually approx. once a day if the site will gain traction I'll work on making it sync the totals automaticlly every few hours</p>
            </div>
            <div style={{ padding: "12px 20px", width: "100%", backgroundColor: "teal", textAlign: "center", justifyContent: "space-around", color: "#fff" }}>
                <div>Created by Moishe Schwartz. <br />Suggestions, Comments or anything else please email <a style={{ color: "#fff" }} href="mailto:mosesschwartzdev@gmail.com">mosesschwartzdev@gmail.com</a></div>
            </div>
        </>
    )
}
