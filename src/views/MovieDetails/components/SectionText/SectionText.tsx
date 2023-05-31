import { StyleSheet, Text } from 'react-native';
import {
  FontConstants,
  FontSizeConstants,
  SizeConstants,
} from '../../../../constants/StyleConstants';

type SectionProps = {
  variable: string;
  value: string | number;
};

const SectionText = ({ variable, value }: SectionProps) => {
  return (
    <Text style={styles.SectionVariable}>
      {variable}: <Text style={{ fontWeight: 'normal' }}>{value}</Text>{' '}
    </Text>
  );
};

const styles = StyleSheet.create({
  SectionVariable: {
    fontWeight: FontConstants.weightBold,
    fontSize: FontSizeConstants.mediumSize - 3,
    marginVertical: SizeConstants.paddingSmall - 6,
  },
});

export default SectionText;
