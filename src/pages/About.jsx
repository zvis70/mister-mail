import { Link, Outlet } from "react-router-dom";

export function About() {
    return (
        <div className="about">
            <h1>Best Mailbox</h1>
            <p>Introducing MisterMail, 
                a revolutionary email application meticulously crafted for seamless communication in the digital age. 
                MisterMail redefines the email experience, combining sleek design with unparalleled functionality to streamline your inbox management. 
                With an intuitive user interface, our app ensures effortless navigation, allowing you to compose, send, and organize emails with unprecedented ease. 
                What sets MisterMail apart is its lightning-fast performance, powered by advanced algorithms that prioritize efficiency without compromising security. 
                Say goodbye to cluttered inboxes – SwiftMail's smart categorization and customizable filters empower you to take control of your correspondence. 
                Whether you're a busy professional, an entrepreneur, or a casual user, MisterMail adapts to your needs, making email management a breeze. 
                Download MisterMail now and elevate your email experience to new heights.</p>
            <nav>
                <Link to="/about/team">Team</Link>
                <Link to="/about/vision">Vision</Link>
            </nav>
            <Outlet />
        </div>
    )
}
