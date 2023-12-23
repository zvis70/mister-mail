import imgUrl from '../assets/imgs/email_biglogo.jpg'
import { WelcomeHeader } from '../cmps/WelcomeHeader'

export function Home() {
    return (
        
        <section className="home">
            <WelcomeHeader/>
            <h1>Welcome to <span style={{ fontWeight: "800", textDecoration: "underline" }} >mister email</span></h1>
            <img src={imgUrl} alt="" />
        </section>
    )
}
