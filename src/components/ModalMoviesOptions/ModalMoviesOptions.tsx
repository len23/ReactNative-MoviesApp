import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ColorConstants } from '../../constants/StyleConstants';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesModalMoviesOptions } from './ModalMoviesOptions.styles';
import { ModalMoviesOptionsProps } from './ModalMoviesOptions.types';
import PickValues from './components/PickValues';
import { MovieOptions } from '../../types/MovieOptions';

const styles = { ...stylesModalMoviesOptions };

const ModalMoviesOptions = (props: ModalMoviesOptionsProps) => {
  const [value, setValue] = useState<MovieOptions | undefined>();

  useEffect(() => {
    setValue(props.options.find((op) => op !== props.selectedOption) as MovieOptions);
  }, [props.selectedOption]);

  return (
    <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Ionicons
            name="close-circle-outline"
            style={styles.closeIcon}
            size={40}
            color={ColorConstants.primaryYellowColor}
            onPress={props.onHideModal}
          />
          <PickValues
            selectedOption={props.selectedOption}
            options={props.options}
            value={value!}
            onSetValue={() => setValue(value)}
          />
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.selectButton} onPress={() => props.changeOption(value!)}>
              <Text style={styles.selectText}>Select</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMoviesOptions;
