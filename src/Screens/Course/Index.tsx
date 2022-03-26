import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Course = (props:any) => {
    const {route: {params: {course}}} = props
    return (
        <View style={styles.container}>
            <Text>{course.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Course
