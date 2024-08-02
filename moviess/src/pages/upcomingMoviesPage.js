import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import { getMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";




const UpcomingMoviesPage = () => {


  const [movies, setMovies] = useState([]);


  useEffect(() => {
    // Fetch upcoming movies from the TMDB API.
    getUpcomingMovies().then(upcomingMovies => {
      setMovies(upcomingMovies);
    });
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
