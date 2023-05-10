import { IMovie } from '../../../../types/IMovie';

export type MovieDataProps = {
  movie: IMovie;
  onClickSeeTrailer: () => void;
  colorButton: string;
};

export type SectionProps = {
  variable: string;
  value: number | string;
};
