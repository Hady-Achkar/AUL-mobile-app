import React, { useCallback, useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CourseItem from '../../Components/Course/Course.Item';
import { List } from 'react-native-paper';
import { IRequirnment } from '../../Types/Models/Requirnment';
import { ICourse } from '../../Types/Models/Course';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';

const Major = (props: any) => {
  const {
    route: {
      params: { major },
    },
  } = props;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: major.title,
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text>Apply Now</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView>
      <HeaderOverlay
        uri="https://source.unsplash.com/random"
        text={major.title}
      />
      <List.Section title={'English Requirnment'} titleStyle={styles.title}>
        {major.englishReq.map((el: ICourse) => {
          return <CourseItem course={el} key={el._id} />;
        })}
      </List.Section>
      <List.Section title={'General Requirnment'}>
        {major.generalReq.map((el: ICourse) => {
          return <CourseItem course={el} key={el._id} />;
        })}
      </List.Section>
      <List.Section title={'Elective Requirnment'}>
        {major.electiveCourses.map((el: ICourse) => {
          return <CourseItem course={el} key={el._id} />;
        })}
      </List.Section>
      <List.Section title={'Major Requirnment'}>
        {major.majorCourses.map((el: ICourse) => {
          return <CourseItem course={el} key={el._id} />;
        })}
      </List.Section>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
export default Major;
