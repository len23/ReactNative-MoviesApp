import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamsList } from '../../types/Stacks';

export type SignUpProps = NativeStackScreenProps<SignUpStackParamsList, 'SignUp'>;

export type SignUpInputs = {
  email: string;
  userName: string;
  password: string;
  repeatPassword: string;
  profilePictureName?: string;
};
