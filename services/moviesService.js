import { optionsGetListMovies, optionsPostMovies, local, remote } from "../utils/options-headers";

const getMovies = async (cb) => {
    try {
        const movies = await (await fetch(`${local}/moviesByCategory`, optionsGetListMovies)).json();
        cb(movies);
    } catch (err) {
        console.error(err);
    }
}

const getSavedIdMovies = async (cb) => {
    try {
      const movies = await (await fetch(`${local}/getSavedMovies`, optionsGetListMovies)).json();
      cb(movies.map(movie => movie.imdbid));
    } catch (err) {
      console.error(err);
    }
  }

  const getSavedMovies = async (cb) => {
    try {
      const movies = await (await fetch(`${local}/getSavedMovies`, optionsGetListMovies)).json();
      cb(movies);
    } catch (err) {
      console.error(err);
    }
  }

const saveMovie = async (movie) => {
    const results =  await fetch(`${local}/saveMovie`, 
    {  
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imdbid: movie.imdbid,
        title: movie.title,
        thumbnail: movie.thumbnail,
        rating: movie.rating,
        director: movie.director,
        trailer: movie.trailer

      })
    }
  );
  const resultMovie = await results.json();
  return resultMovie;
}

const deleteMovie = async (imdbid, cb) => {
    try {
        await fetch(`${local}/removeSavedMovie/${imdbid}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        cb(imdbid);
    } catch (error) {
    console.log('err ==> ', err); 
    }
}

export {deleteMovie, saveMovie, getMovies, getSavedIdMovies, getSavedMovies}


