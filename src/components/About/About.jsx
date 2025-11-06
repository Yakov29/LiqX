import Container from "../Container/Container"
import "./About.css"

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <h3 className="about__title">About <span className="about__title-span">LiqX</span></h3>
                <p className="about__desctiption">Secure your private life with LiqX messenger featuring full end-to-end encryption. This decentralized platform is created and governed by a unified global community of professionals dedicated to confidentiality.</p>
            </Container>
        </section>
    )
}

export default About