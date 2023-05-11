import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import categories from '../../../../constants/Categories';
import stylesDropDownContainer from './DropDownContainer.styles';

const styles = { ...stylesDropDownContainer };

type DropdownCategoryProps = {
  onChangeCategory: (value: string) => void;
};

const DropdownCategory = (props: DropdownCategoryProps) => {
  const [value, setValue] = useState('Top_Ten');

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={categories}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={value}
      itemTextStyle={{ color: '#f5c518' }}
      itemContainerStyle={{ backgroundColor: '#1a1a1a' }}
      confirmSelectItem={false}
      onChange={(item) => {
        setValue(item.value);
        props.onChangeCategory(item.value);
      }}
    />
  );
};

export default DropdownCategory;
