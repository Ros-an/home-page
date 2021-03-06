import React from 'react'
import "./Footer.css"
const footerPartOne = [
    {
        id: 1,
        heading: "Company",
        list: ["Blog", "About", "Press", "Careers", "Social Good", "Contact"]
    },
    {
        id: 2,
        heading: "Partnerships",
        list: ["Linktree of Enterprise", "Charities", "Linktree Ambassador"]
    },
    {
        id: 3,
        heading: "Support",
        list: ["Help Topics", "Getting Started", "Features How To", "FAQs", "Report a Violation"]
    },
    {
        id: 4,
        heading: "Trust & Legal",
        list: ["Terms & Conditions", "Privacy policy", "Trust Centre"]
    }
]
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__part1">
                    {footerPartOne.map(item => {
                        return (
                            <div key={item.id}>
                                <p>{item.heading}</p>
                                <ul>
                                    {item.list.map((elem, index) => <li key={index}>{elem}</li>)}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className="footer__part2">
                    <div className="navbar--logo" style={{color: "black"}}>
                        <img src="https://d1nnwinjc04txl.cloudfront.net/favicon-32x32.png?v=530918d2c86b9dd11c4fde40fa99d1b4" alt="linktree-logo" />
                        <p>linktree</p>
                    </div>
                    <div className="icon">
                    </div>
                </div>
                <div className="footer__part3">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly93ZWIucmVzb3VyY2Uub3JnL2NjLyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vaW5rc2NhcGUuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIzMDAwIgogICBoZWlnaHQ9IjIwMDAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQzIgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY2Jhc2U9IkM6XERvY3VtZW50cyBhbmQgU2V0dGluZ3NcV2lraXBlZGlhXERlc2t0b3AiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkF1c3RyYWxpYW4gQWJvcmlnaW5hbCBGbGFnLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMTg2NSIKICAgICBpbmtzY2FwZTpjeD0iMTUwMCIKICAgICBpbmtzY2FwZTpjeT0iMTAwMCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNzU2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjU0MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5IiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo1LjY3MDU5MjMxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0idG9waGFsZiIKICAgICAgIHdpZHRoPSIzMDAwIgogICAgICAgaGVpZ2h0PSIxMDAwIgogICAgICAgeD0iMCIKICAgICAgIHk9IjAiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZpbGw6I2ZlMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS42NzA1OTIzMTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9ImJvdHRvbWhhbGYiCiAgICAgICB3aWR0aD0iMzAwMCIKICAgICAgIGhlaWdodD0iMTAwMCIKICAgICAgIHg9IjAiCiAgICAgICB5PSIxMDAwIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgIHN0eWxlPSJmaWxsOiNmZGZkMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJjaXJjbGUiCiAgICAgICBzb2RpcG9kaTpjeD0iNTI4LjE1MDA5IgogICAgICAgc29kaXBvZGk6Y3k9IjkzMC4yOTQ5OCIKICAgICAgIHNvZGlwb2RpOnJ4PSI0MzYuOTk3MjgiCiAgICAgICBzb2RpcG9kaTpyeT0iNDM2Ljk5NzI4IgogICAgICAgZD0iTSA5NjUuMTQ3MzcgOTMwLjI5NDk4IEEgNDM2Ljk5NzI4IDQzNi45OTcyOCAwIDEgMSAgOTEuMTUyODAyLDkzMC4yOTQ5OCBBIDQzNi45OTcyOCA0MzYuOTk3MjggMCAxIDEgIDk2NS4xNDczNyA5MzAuMjk0OTggeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM1OTM3LDAsMCwxLjEzNTY5Niw5MDMuNjQ1OSwtNTkuODQ3MDgpIiAvPgogIDwvZz4KPC9zdmc+Cg==" alt="country" />
                    <p>
                    We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
