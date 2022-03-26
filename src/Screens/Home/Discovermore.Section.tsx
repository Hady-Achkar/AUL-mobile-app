import React, {useCallback} from 'react';
import {StyleSheet, Button, ImageBackground} from 'react-native'
import {SCREENS} from "../../Constants";
import {useNavigation} from "@react-navigation/native";
import {SCREEN_WIDTH} from "../../Constants/Metrics";

const DiscovermoreSection = () => {
    const navigation = useNavigation()
    const handleNavigate = useCallback(() => {
        navigation.navigate(SCREENS.MAJORS_SCREEN.name)
    }, [navigation])
    return (
        <ImageBackground source={{uri: 'https://source.unsplash.com/random'}} style={styles.imageStyle}>
            <Button title={'Discover More'} onPress={handleNavigate} color={'white'}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: SCREEN_WIDTH,
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingBottom: 20
    }
})
export default DiscovermoreSection
