import { Link, NavLink } from "react-router-dom";
import imgUrl from '../assets/imgs/GMAIL1.png';
import { utilService } from "../services/util.service";


/* <header className="app-header"> */

function getloggedinUser() {

            let loggedinUser = loggedinUser;
            return {loggedinUser};
            }

export function AppHeader() {
    return (

        
        <section className="mailBox-upper-header-img">
            {/*                 <h1>Robots</h1>*/}
            <img src={imgUrl} alt="" />
            {/*  <h1>{`Hello ${loggedinUser.fullname}`}</h1> 
 */}
            {/* <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/robot">Robots</NavLink>
                </nav> */}
        </section>

    )
}
