import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import categories from '../../utils/categories';


export default HeaderCategory = ({onChangeCategory}) => {

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
          itemTextStyle={{color:'#f5c518'}}
          itemContainerStyle={{backgroundColor:'#1a1a1a'}}
          confirmSelectItem={false}
          onChange={item => {
            setValue(item.value);
            onChangeCategory(item.value)
          }}
        />
      );
}

const styles = StyleSheet.create({
    dropdown: {
      marginLeft: 15,
      paddingLeft: 10,
      height: 25,
      width:150,
      borderLeftWidth: 5,
      borderLeftColor: "#f5c518",
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    iconStyle: {
      width: 30,
      height: 20,
    },
  });
