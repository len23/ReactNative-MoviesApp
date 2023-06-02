import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { stylesDropDownCountry } from './DropDownCountry.styles';
import { DropdownCountryProps } from './DropDownCountry.types';

const styles = { ...stylesDropDownCountry };
const DropdownCountry = (props: DropdownCountryProps) => {
  const { selectedCountry, onChangeCountry, countryList } = props;

  const Item: any = Picker.Item;
  return (
    <View style={{ marginTop: 200 }}>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue, itemIndex) => onChangeCountry(itemValue)}
        style={styles.picker}
        itemStyle={styles.itemStyle}
      >
        {countryList.map((c) => (
          <Item key={c} label={c} value={c} />
        ))}
      </Picker>
    </View>
  );
};

export default DropdownCountry;
