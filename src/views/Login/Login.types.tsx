import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamsList } from '../../types/Stacks';

export type LoginProps = NativeStackScreenProps<SignUpStackParamsList, 'LogIn'>;

export type LoginForm = {
  userName: string;
  password: string;
};
