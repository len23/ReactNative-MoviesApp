import { StyleSheet, View } from 'react-native';
import { StarsProps } from './Stars.types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylesStars from './Stars.styles';
import { memo } from 'react';

const styles = { ...stylesStars };
export const Stars = memo(({ rating }: StarsProps) => {
  const numStars = Math.round((5 / 10) * rating);
  const stars = [];
  for (let i = 0, j = 0; i < 5; i++) {
    if (j < numStars) {
      stars.push(<Ionicons key={i} name="star" size={20} color="#f5c518" />);
      j++;
    } else {
      stars.push(<Ionicons key={i} name="star-outline" size={20} color="#FFF" />);
    }
  }
  return <View style={styles.starsContainer}>{stars}</View>;
});
