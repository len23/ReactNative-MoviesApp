import { IMovie } from '../../../../types/IMovie';

export type MovieRowProps = {
  item: IMovie;
  onPressBookmarkIcon: (movie: IMovie) => void;
};
