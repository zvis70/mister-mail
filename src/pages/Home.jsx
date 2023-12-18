import imgUrl from '../assets/imgs/email_biglogo.jpg'

export function Home() {
    return (
        <section className="home">
            <h1>Welcome to mister-email App</h1>
            <img src={imgUrl} alt="" />
        </section>
    )
}
