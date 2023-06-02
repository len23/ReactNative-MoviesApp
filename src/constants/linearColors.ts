import { Constants } from 'expo-camera';
import { MovieOptions } from '../types/MovieOptions';
import { ColorConstants } from './StyleConstants';
import { ThemeAplication } from '../types/IThemes';

const IMDBLinearColors = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'];
const MovieDBLinearColors = ['rgba(103, 156, 214, 1)', 'rgba(66, 82, 161, 1)'];

const menuIMDBColor = ColorConstants.backgroundMedium;
const menuMovieDbColor = '#5278b3';

const logoMenuIMDB = require('../../assets/imdb_image_full.png');
const logoMovieDb = require('../../assets/film_camera.png');

const titleMenuIMDB = 'Best Movies';
const titleMenuMovieDb = 'Now Playing';

const tabIMDBBackgroundColor = ColorConstants.backgroundLight;
const tabMovieDbBackgroundColor = '#5278b3';

const tabIMDBIconColor = ColorConstants.primaryYellowColor;
const tabMovieDbIconColor = '#b0b4c9';

export const getLinearColors = (theme: MovieOptions): ThemeAplication => {
  if (theme === MovieOptions.IMDB) {
    return {
      backgroundLinearColors: IMDBLinearColors,
      menuColor: menuIMDBColor,
      logoMenu: logoMenuIMDB,
      titleMenu: titleMenuIMDB,
      tabBackgroundColor: tabIMDBBackgroundColor,
      tabIconColor: tabIMDBIconColor,
    };
  } else if (theme === MovieOptions.NOW_PLAYING) {
    return {
      backgroundLinearColors: MovieDBLinearColors,
      menuColor: menuMovieDbColor,
      logoMenu: logoMovieDb,
      titleMenu: titleMenuMovieDb,
      tabBackgroundColor: tabMovieDbBackgroundColor,
      tabIconColor: tabMovieDbIconColor,
    };
  } else {
    return {
      backgroundLinearColors: ['#000', '#000'],
      menuColor: '#000',
      logoMenu: '',
      titleMenu: '',
      tabBackgroundColor: '',
      tabIconColor: '',
    };
  }
};
