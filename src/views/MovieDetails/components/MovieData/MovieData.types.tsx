import { IMovie } from '../../../../types/IMovie';

export type MovieDataProps = {
  movie: IMovie;
  onClickSeeTrailer: () => void;
  colorButton: string;
  onClickWatchNow: () => void;
};

export type SectionProps = {
  variable: string;
  value: number | string;
};
