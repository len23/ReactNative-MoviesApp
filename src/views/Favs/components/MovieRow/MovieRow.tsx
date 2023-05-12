import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMovie } from '../../../../types/IMovie';
import { MovieRowProps } from './MovieRow.types';
import stylesMovieRow from './MovieRow.styles';
import { useState } from 'react';
import TrailerModal from '../../../../components/TrailerModal/TrailerModal';
import { Stars } from './components/Stars/Stars';

const styles = { ...stylesMovieRow };
const MovieRow = ({ item, onPressBookmarkIcon }: MovieRowProps) => {
  const [seeTrailer, setSeeTrailer] = useState<boolean>(false);
  const handleSeeTrailer = () => {
    setSeeTrailer(!seeTrailer);
  };
  return (
    <View style={styles.contaierItem}>
      <View style={styles.detalisContainer}>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
        <View>
          <Text style={styles.title}>
            {item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}
          </Text>
          <Text style={styles.director}>{item.director[0]}</Text>
          <Text style={styles.rating}>{item.rating}</Text>
          <Stars rating={item.rating} />
        </View>
      </View>
      <View style={styles.containerIcons}>
        <Ionicons name="play-sharp" size={30} color="#f5c518" onPress={handleSeeTrailer} />
        <Ionicons
          style={styles.bookmarkIcon}
          name="bookmark"
          size={30}
          color="#FFF"
          onPress={() => {
            onPressBookmarkIcon(item);
          }}
        />
      </View>
      <TrailerModal
        seeTrailer={seeTrailer}
        onPlayTrailer={handleSeeTrailer}
        idTrailer={item.trailer.split('/').pop()}
      />
    </View>
  );
};

export default MovieRow;
