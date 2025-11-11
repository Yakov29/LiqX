import Container from "../Container/Container";
import "./Developers.css"
// Импорт FaGithub, который вызывал ошибку "is defined but never used", 
// здесь не указан, но я предполагаю, что его нужно удалить, если он есть.

const Developers = () => {
  const developers = [
    {
      avatar: "https://avatars.githubusercontent.com/u/210502744?v=4",
      name: "btCC",
      do: "LiqX Desktop Application",
      link: 'https://github.com/64Xasm'
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/108018683?v=4",
      name: "Yakov29",
      do: "LiqX Web Application",
      link: 'https://github.com/Yakov29'
    },
  ];
  return (
    <section className="developers" id="developers">
      <Container>
        <h3 className="developers__title">Developers</h3>
        <ul className="developers__list">
          {/* <li className="developers__item">
            <img className="developers__avatar" src="" alt="" />
            <h5 className="developers__name">Yakv</h5>
            <p className="developers__do">fr fr fr</p>
          </li> */}
          {developers.map((developer) => ( 
            <li className="developers__item" key={developer.name}> 
              <img className="developers__avatar" src={developer.avatar} alt={developer.name} /> 
              <h5 className="developers__name">{developer.name}</h5>
              <p className="developers__do">{developer.do}</p>
              {/* ИСПРАВЛЕНО: Добавлен rel="noopener noreferrer" для устранения ошибки безопасности */}
              <a 
                className="developers__link" 
                target="_blank" 
                rel="noopener noreferrer" 
                href={developer.link}
              >
                Github
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Developers;