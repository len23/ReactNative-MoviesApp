import { Picker } from '@react-native-picker/picker';
import { ColorConstants } from '../../../constants/StyleConstants';
import { StyleSheet } from 'react-native';

type PickValuesProps = {
  selectedOption: string;
  value: string;
  options: string[];
  onSetValue: (value: string) => void;
};

const PickValues = (props: PickValuesProps) => {
  return (
    <Picker
      selectedValue={props.value}
      onValueChange={() => {
        if (props.value !== props.selectedOption) {
          props.onSetValue(props.value);
        }
      }}
      style={styles.pickerStyle}
      itemStyle={styles.itemStyle}
    >
      {props.options.map((c, i) => (
        <Picker.Item key={i} label={c} value={c} enabled={props.selectedOption !== c} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  itemStyle: { fontSize: 20, color: '#FFF' },
  pickerStyle: { backgroundColor: ColorConstants.backgroundLight, width: 350, height: 150 },
});

export default PickValues;
