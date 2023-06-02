import { SafeAreaView } from 'react-native-safe-area-context';
import ModalMoviesOptions from '../../components/ModalMoviesOptions/ModalMoviesOptions';
import TopMenu from '../../components/TopMenu/TopMenu';
import useThemeStore from '../../store/themeStore';
import { useEffect, useState } from 'react';
import { MovieOptions } from '../../types/MovieOptions';
import { LinearGradient } from 'expo-linear-gradient';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = (props: MainContainerProps) => {
  const [theme, themeStyles, setTheme] = useThemeStore((state) => [
    state.optionTheme,
    state.themeStyles,
    state.setTheme,
  ]);
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);

  useEffect(() => {
    setShowOptionsModal(false);
  }, [theme]);

  return (
    <LinearGradient style={{ flex: 1 }} colors={themeStyles.backgroundLinearColors}>
      <SafeAreaView>
        <ModalMoviesOptions
          modalVisible={showOptionsModal}
          onHideModal={() => setShowOptionsModal(!showOptionsModal)}
          options={[MovieOptions.IMDB, MovieOptions.NOW_PLAYING]}
          changeOption={(item) => setTheme(item)}
          selectedOption={theme}
        />
        <TopMenu
          onPressDownArrow={() => {
            setShowOptionsModal(!showOptionsModal);
          }}
          backgroundColor={themeStyles.menuColor}
          logoMenu={themeStyles.logoMenu}
          titleMenu={themeStyles.titleMenu}
        />
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MainContainer;
