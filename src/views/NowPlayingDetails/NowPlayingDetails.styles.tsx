import { StyleSheet } from 'react-native';
import { PAGE_WIDTH } from '../../constants/WindowConstants';

export const styles = StyleSheet.create({
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: PAGE_WIDTH,
  },
  categories: { alignItems: 'center', marginVertical: 10, width: PAGE_WIDTH * 0.5 },
  categoriesText: { color: '#4e4d4d', fontSize: 17 },
});
