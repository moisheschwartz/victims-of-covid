import React from 'react'

export default function FooterBar() {

    return (
        <>
            <div style={{ padding: "12px 20px", width: "100%" }}>
                <p style={{ textAlign: "center" }}></p>
            </div>
            <div style={{ padding: "12px 20px", width: "100%", backgroundColor: "teal", textAlign: "center", justifyContent: "space-around", color: "#fff" }}>
                <div>Created by Moishe Schwartz. <br />Suggestions, Comments or anything else please email <a style={{ color: "#fff" }} href="mailto:mosesschwartzdev@gmail.com">mosesschwartzdev@gmail.com</a></div>
                <br />
                <a href='https://ko-fi.com/H2H61MLKY' target='_blank'><img height='36' style={{ 'border': '0px', 'height': '36px' }} src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
            </div>
        </>
    )
}
