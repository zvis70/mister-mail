import { Link, NavLink } from "react-router-dom";

import imgUrl from '../assets/imgs/GMAIL1.png';
import { utilService } from "../services/util.service";

/* <header className="app-header"> */
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' } 


export function AppHeader() {

    return (
      

        <section className="mailBox-upper-header-img">
                     <img src={imgUrl} alt="fgsdfg" /> 
                     {/* <h1> {`Hello ${loggedinUser.fullname}`}</h1>  */}
                     
                     {/* <section className="container"> */}
                  
                {/* <nav>
                    <NavLink to="/">Home</NavLink>
                     <NavLink to="/about">About</NavLink> 
                    <NavLink to="/mailbox">MailBox</NavLink>
                </nav> */}
            {/* </section> */}
        </section>
        

    )
}


