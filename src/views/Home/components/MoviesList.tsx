import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import MovieItem from './MovieListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  deleteMovie,
  saveMovie,
  getMoviesByCategory,
  getSavedIdMovies,
} from '../../../services/moviesService';
import DropdownCategory from './DropdownCategory';
import stylesMoviesList from '../styles/MoviesList.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../types/Stacks';
import { IMovie, IMovieByCategory } from '../../../types/IMovie';

const styles = { ...stylesMoviesList };
type HomeViewProps = {
  moviesList: IMovieByCategory;
};
const MoviesList = (props: HomeViewProps) => {


  useEffect(() => {}, []);

  // useEffect(() => {
  //   props.navigation.addListener('tabPress', () => {
  //     getSavedIdMovies(setSavedList);
  //   });
  // }, [props.navigation]);

  // useEffect(() => {
  //   getSavedIdMovies(setSavedList);
  // }, [route.params]);

  // const handleOnTapBookMark = async (movie, cb) => {
  //   try {
  //     const saved = savedList.some((imdbid) => movie.imdbid === imdbid);
  //     if (!saved) {
  //       const resultMovie = await saveMovie(movie);
  //       setSavedList([...savedList, resultMovie.movie.imdbid]);
  //       cb();
  //     } else {
  //       await deleteMovie(movie.imdbid, (id) =>
  //         setSavedList(savedList.filter((imdbid) => imdbid !== id)),
  //       );
  //       cb();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };



  return (
  
  );
};

export default MoviesList;
