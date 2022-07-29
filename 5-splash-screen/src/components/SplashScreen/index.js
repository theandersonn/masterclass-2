import PropTypes from 'prop-types';

import './styles.css';

const SplashScreen = ({image, title, description, urls = []}) => {
  return (
    <section className='wrapper' style={{ backgroundImage: `url(${image ? image : ''})` }}>
      <article className='content'>
        <h1 className='title'>{title || 'site em construção'}</h1>
        <p className='description'>{description || 'novidades em breve'}</p>

        {urls.length ? (
          <ul className='urls'>
            {urls.map((item, id) => (
              <li key={id}>
                <a href={item.url} target='_blank' rel='noreferrer'>{item.title}</a>
              </li>
            ))}
          </ul>
        ) : ''}
      </article>
    </section>
  );
};

SplashScreen.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.array,
}

export default SplashScreen;