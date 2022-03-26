import React, { useCallback } from "react"
import { ActivityIndicator } from "react-native"
import { FlatList, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import { AppState } from "../../reducers"
import CampusCard from "./Campus.Card"

const CampusSection = () => {
  const Campuses = useSelector((state: AppState) => state.campuses.campuses)
  const renderItem = useCallback((item) => {
    return <CampusCard campus={item.item} />
  }, [])

  return (
    <View>
      <FlatList
        data={Campuses}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const style = StyleSheet.create({})
export default CampusSection
