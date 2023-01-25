export const extractMovieData = (movie) => {
  const {
    image: {
      url: urlImage,
      formats: {
        thumbnail: { url: urlThumbnail },
      },
    },
    id: movieId,
    created_at,
    updated_at,
    ...movieData
  } = movie;
  return {
    image: `https://api.nomoreparties.co/${urlImage}`,
    thumbnail: `https://api.nomoreparties.co/${urlThumbnail}`,
    movieId,
    ...movieData,
  };
};
