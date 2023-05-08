import TopMenu from '../../components/TopMenu';
import { StyleSheet, SafeAreaView, View, ActivityIndicator, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { IMovie, IMovieByCategory } from '../../types/IMovie';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownCategory from './components/DropdownCategory';
import { stylesHome } from './Home.styles';
import MovieListItem from './components/MovieListItem';

type HomeViewProps = {
  moviesList: IMovieByCategory;
  onMoviePress: (movie: IMovie) => void;
};

const HomeView = (props: HomeViewProps) => {
  const [category, setCategory] = useState<string>('Top_Ten');
  const [showList, setShowList] = useState<boolean>(false);
  const [savedList, setSavedList] = useState(Array<IMovie>);
  const [showSpinner, setShowSpinner] = useState<boolean>(true);

  const renderItem = ({ item }: { item: IMovie }) => {
    // const saved = savedList.some((imdbid) => item.imdbid === imdbid);
    return (
      <MovieListItem
        movie={item}
        onMoviePress={props.onMoviePress}
        // route={props.route}
        showList={showList}
        onTapBookMark={() => {}}
        saved={false}
      />
    );
  };

  return (
    <SafeAreaView style={stylesHome.container}>
      <TopMenu />
      <View>
        <View style={stylesHome.categoryTitleContainer}>
          <DropdownCategory onChangeCategory={setCategory} />
          <View style={stylesHome.iconsContainer}>
            <Ionicons
              name="albums-outline"
              color={!showList ? '#f5c518' : '#FFF'}
              size={40}
              onPress={() => {
                setShowList(false);
              }}
            />
            <Ionicons
              name="list-circle-outline"
              color={showList ? '#f5c518' : '#FFF'}
              size={40}
              onPress={() => {
                setShowList(true);
              }}
            />
          </View>
        </View>
        <FlatList
          data={props.moviesList[category]}
          renderItem={renderItem}
          horizontal={!showList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <ActivityIndicator
          style={{ marginTop: 200 }}
          size="large"
          color="#00ff00"
          animating={showSpinner}
          hidesWhenStopped={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
