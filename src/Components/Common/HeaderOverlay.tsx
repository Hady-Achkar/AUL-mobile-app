import React from 'react';
import { ViewStyle } from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../Constants/Metrics';

interface IProps {
  uri: string;
  text: string;
  onPress?: () => void;
  containerStyles?: ViewStyle;
}
const HeaderOverlay: React.FC<IProps> = ({
  uri,
  text,
  onPress,
  containerStyles,
}) => {
  return (
    <ImageBackground source={{ uri: uri }} style={styles.container}>
      <View style={[styles.container, { ...containerStyles }]}>
        <TouchableOpacity
          style={styles.description}
          onPress={onPress}
          disabled={!onPress}
        >
          <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,100,184,0.55) ',
    width: SCREEN_WIDTH,
    height: 150,
  },
  imageBackground: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 60,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#fff',
  },
});
export default HeaderOverlay;
