import React, { useCallback } from 'react';
import { RefreshControl, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Header } from '../../Components';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import SuggestionCard from '../../Components/SuggestionCard/Index';
import { Theme } from '../../Constants';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Constants/Metrics';
import { AppState } from '../../reducers';
import { AddVote, ViewAllSuggestions } from '../../Services/Suggestions';
import { ISuggestion } from '../../Types/Models/Suggestion';
const Index = () => {
  const [suggestions, setSuggestions] = React.useState<ISuggestion[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const fetchSuggestions = () => {
    ViewAllSuggestions()
      .then((res) => {
        setSuggestions(res.data.suggestions);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  React.useEffect(() => {
    fetchSuggestions();
  }, []);
  const handleVote = useCallback((id: string) => {
    try {
      AddVote(id)
        .then(console.log)
        .catch(console.error)
        .finally(() => {
          fetchSuggestions();
        });
    } catch (err) {
      console.log(err.response.data);
    }
  }, []);
  const renderItem = useCallback((item) => {
    return <SuggestionCard suggestion={item.item} handleVote={handleVote} />;
  }, []);
  const refreshControl = useCallback(
    () => <RefreshControl refreshing={loading} onRefresh={fetchSuggestions} />,
    [loading, fetchSuggestions]
  );
  const keyExtractor = useCallback((item) => item._id, []);
  return (
    <>
      <HeaderOverlay
        text="Suggestions"
        uri="https://source.unsplash.com/random"
      />
      <FlatList
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={refreshControl()}
      />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
