import React, { useCallback } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SCREEN_WIDTH } from '../../Constants/Metrics';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import MajorCard from './Major.Card';

const MajorsSection = () => {
  const Majors = useSelector((state: AppState) => state.majors.majors);
  const renderMajor = useCallback((item) => {
    return <MajorCard major={item.item} />;
  }, []);
  const keyExtractor = useCallback((item) => item?._id, []);

  return (
    <FlatList
      data={Majors}
      renderItem={renderMajor}
      keyExtractor={keyExtractor}
      style={{ height: '100%' }}
    />
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default MajorsSection;
