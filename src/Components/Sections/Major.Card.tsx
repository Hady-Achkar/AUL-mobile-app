import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { IMajor } from '../../Types/Models/Major';
import { SCREEN_WIDTH } from '../../Constants/Metrics';
import { SCREENS, Theme } from '../../Constants';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  major: IMajor;
}

const MajorCard: React.FC<IProps> = ({ major }) => {
  const navigation = useNavigation();
  const handleNavigation = useCallback(() => {
    navigation.navigate(SCREENS.MAJOR_SCREEN.name, { major });
  }, []);
  return (
    <Card style={styles.wrapper} elevation={2}>
      <TouchableOpacity style={styles.container} onPress={handleNavigation}>
        <Text style={styles.textLeft}>{major.title}</Text>
        <Text style={styles.textRight}>{major.needCredits} Credits</Text>
      </TouchableOpacity>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center',
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
  },
  wrapper: {
    marginBottom: 10,
  },
  textLeft: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textRight: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    color: Theme.colors.primary,
  },
});
export default MajorCard;
