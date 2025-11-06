import Container from "../Container/Container"
import "./Safe.css"

const Safe = () => {
    return (
        <section className="safe">
             <Container>
                <h3 className="safe__title">LiqX on <span className="safe__title-span">Rust</span></h3>
                <p className="safe__desctiption">Ensure the complete security of your private life with LiqX Messenger, which features full end-to-end encryption and is engineered using the Rust programming language.</p>
            </Container>
        </section>
    )
}


export default Safe