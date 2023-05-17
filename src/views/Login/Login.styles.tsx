import { StyleSheet } from 'react-native';

export const stylesLogin = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
  },
  formContainer: {
    width: 300,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#6DB5BF',
    paddingBottom: 5,
    marginVertical: 10,
  },
  inputText: {
    fontSize: 20,
    color: '#A8B6B8',
    marginLeft: 15,
  },
  presseableButton: {
    backgroundColor: '#186491',
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: 300,
    alignItems: 'center',
    marginVertical: 50,
  },
  presseableText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 25,
  },
  informativeText: {
    color: '#FFF',
    fontSize: 20,
  },
});
