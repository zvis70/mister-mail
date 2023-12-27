import { useEffect, useState } from "react"
import { AppHeader } from "../cmps/AppHeader"
import { EmailFolderList } from "../cmps/EmailFolderList"
import { AppFooter } from "../cmps/AppFooter"
import { EmailIndex } from "./EmailIndex"

/* import { Link } from "react-router-dom" */

/* import { useNavigate, useParams } from "react-router" */
/* import { robotService } from "../services/robot.service" */


export function MailBox() {

    return (

        <form>
            <section className="grid-container">
                <header className="mailBox-upper-header">
                    <AppHeader />
                </header>

                <header className="mailBox-secondary-header">
                    <h1>כותרות משנה</h1>
                </header>

                <aside className="mailBox-menu-header ">
                    <p> <button className="compose-btn" /* onClick="" */>Compose</button> </p>
                </aside>

                <aside className="mailBox-side-menu">
                    <EmailFolderList />
                </aside>

                <main className="mailBox-main-list">
                    {/* <h1>main list</h1> */}
                    <EmailIndex />

                </main>
                <div className="mailBox-right">
                    <p>right</p>
                </div>

                <footer className="mailBox-footer">
                    <AppFooter />
                </footer>
            </section>
        </form>


    )

}

