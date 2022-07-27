import './styles.css';

const SplashScreen = () => {
  return (
    <section className='wrapper' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)` }}>
      <article className='content'>
        <h1 className='title'>site em construção</h1>
        <p className='description'>novidades em breve</p>

        <url className='urls'>
          <li>
            <a href='https://carreiras.americanas.com/estagio-tech'>site</a>
          </li>

          <li>
            <a href='https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-americanas-s-a-EI_IE10939.13,27.htm'>glassdoor</a>
          </li>

          <li>
            <a href='https://www.linkedin.com/company/americanas-sa/mycompany/'>linkedin</a>
          </li>
        </url>
      </article>
    </section>
  );
};

export default SplashScreen;