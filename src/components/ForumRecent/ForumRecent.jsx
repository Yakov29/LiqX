import Container from "../Container/Container";

const ForumRecent = () => {
  return (
    <section className="forum">
      <Container>
        <ul className="forum__list">
            <li className="forum__item">
                <span className="forum__time">3 minutes ago</span>
                <h3 className="forum__title">App long starts</h3>
                <p className="forum__status">Answered</p>
                <button className="forum__view">View theme</button>
            </li>
        </ul>
      </Container>
    </section>
  );
};


export default ForumRecent