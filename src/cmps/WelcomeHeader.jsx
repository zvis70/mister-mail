import { Link, NavLink } from "react-router-dom";

export function WelcomeHeader() {
    const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' } 
    return (
        <header className="app-header">
            <section className="container">
                <h1>{`Hello ${loggedinUser.fullname}`}</h1>

                <nav>
                    <NavLink to="/">Home</NavLink>
                     <NavLink to="/about">About</NavLink> 
                    <NavLink to="/mailbox">MailBox</NavLink>
                </nav>
            </section>
        </header>
    )
}
