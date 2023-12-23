import { useEffect, useState } from "react"
import { AppHeader } from "../cmps/AppHeader"
import { EmailFolderList } from "../cmps/EmailFolderList"
import { AppFooter } from "../cmps/AppFooter"

/* import { Link } from "react-router-dom" */

/* import { useNavigate, useParams } from "react-router" */
/* import { robotService } from "../services/robot.service" */


export function MailBox() {

    return (

        <form>
        <section className="grid-container">
            <header className="mailBox-upper-header">
               {/* <h1>כותרת ראשית</h1> */}
                <AppHeader />
                {/*   <input class="nosubmit" type="search" placeholder="Search..."> </input> */}
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
                  
            <main className=' mailBox-main-list'>
            <h1>main list</h1>
                
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

