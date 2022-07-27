import PropTypes from 'prop-types';

import './styles.css';

const SplashScreen = ({image, title, description, urls = []}) => {
  return (
    <section className='wrapper' style={{ backgroundImage: `url(${image ? image : ''})` }}>
      <article className='content'>
        <h1 className='title'>{title || 'site em construção'}</h1>
        <p className='description'>{description || 'novidades em breve'}</p>

        {urls.length ? (
          <url className='urls'>
            {urls.map((item, id) => (
              <li>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </url>
        ) : ''}
      </article>
    </section>
  );
};

SplashScreen.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.string,
}

export default SplashScreen;