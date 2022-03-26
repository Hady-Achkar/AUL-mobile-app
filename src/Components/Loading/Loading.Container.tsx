import React from 'react'
import {ActivityIndicator} from 'react-native'
import Theme from '../../Constants/Theme'

const LoadingContainer = () => {
    return (
        <ActivityIndicator size={24} color={Theme.colors.primary}/>
    )
}

export default LoadingContainer
