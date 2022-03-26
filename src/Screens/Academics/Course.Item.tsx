import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { ICourse } from '../../Types/Models/Course';

interface IProps {
  course: ICourse;
}

const CourseItem: React.FC<IProps> = ({ course }) => {
  return <View></View>;
};
export default CourseItem;
