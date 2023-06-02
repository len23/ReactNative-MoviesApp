import { MovieOptions } from '../../types/MovieOptions';

export type ModalMoviesOptionsProps = {
  modalVisible: boolean;
  onHideModal: () => void;
  selectedOption: string;
  changeOption: (itemValue: MovieOptions) => void;
  options: string[];
};
