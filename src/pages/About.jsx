import { Link, Outlet } from "react-router-dom";

export function About() {
    return (
        <div className="about">
            <h1>We are all about robots</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit quibusdam deleniti corrupti quasi, temporibus porro pariatur quos nisi aspernatur, alias totam hic. Nobis, cupiditate veritatis? Similique cum corporis tempore?</p>
            <nav>
                <Link to="/about/team">Team</Link>
                <Link to="/about/vision">Vision</Link>
            </nav>
            <Outlet />
        </div>
    )
}
