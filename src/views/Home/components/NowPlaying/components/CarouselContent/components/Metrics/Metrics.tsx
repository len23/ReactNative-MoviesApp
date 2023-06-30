import { Text, View } from 'react-native';
import { styles } from './Metrics.styles';

type MetricsProps = {
  name: string;
  value: number;
  colorText?: string;
};

const Metrics = (props: MetricsProps) => {
  const { name, value, colorText } = props;
  return (
    <View style={styles.metricContainer}>
      <Text style={styles.metricsValue}>{value}</Text>
      <Text style={colorText ? { ...styles.metricsName, color: colorText } : styles.metricsName}>
        {name}
      </Text>
    </View>
  );
};

export default Metrics;
