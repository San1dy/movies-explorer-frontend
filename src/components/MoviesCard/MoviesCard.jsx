import './MoviesCard.css';

function MoviesCard({ title, imgLink, isSaved, isLike }) {

  return (
    <article className='movies-card'>
      <div className="movies-card__element">
        <img className='movies-card__img' src={imgLink} alt={title} />
        {isSaved
            ?
            <div className="movies-card__btn-delete" />
            :
            <div className={`movies-card__indicator ${isLike ? 'movies-card__indicator_active' : ''}`} />
          }
      </div>
      <div className='movies-card__cover'>
          <h2 className='movies-card__title'>
            {title}
          </h2>
          <p className='movies-card__time'>
            2ч08м
          </p>
      </div>
    </article>
  );
}

export default MoviesCard;
