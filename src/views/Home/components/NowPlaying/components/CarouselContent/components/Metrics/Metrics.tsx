import { Text, View } from 'react-native';
import { styles } from './Metrics.styles';

type MetricsProps = {
  name: string;
  value: number;
};

const Metrics = (props: MetricsProps) => {
  const { name, value } = props;
  return (
    <View style={styles.metricContainer}>
      <Text style={styles.metricsValue}>{value}</Text>
      <Text style={styles.metricsName}>{name}</Text>
    </View>
  );
};

export default Metrics;
