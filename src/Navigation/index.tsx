import React, { useEffect } from 'react';
import { BottomTabs } from './Bottom.tabs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startIntializeMajors } from '../actions/Major.Actions';
import { startInitializeEvents } from '../actions/Events.Actions';
import { startInitializeNews } from '../actions/News.Actions';
import { startInitializeSuggestions } from '../actions/Suggestions.actions';
import { startGetAllCampuses } from '../actions/Campuses.Actions';
import { AddToken } from '../Services/MISC';
import { startInitializeNotifications } from '../actions/Notifications.Actions';
import { StatusBar, SafeAreaView } from 'react-native';
// const baseUrl = 'https://api.meritt.dev/public';
const baseUrl = 'http://api.meritt.dev/public';

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startIntializeMajors());
    dispatch(startInitializeEvents());
    dispatch(startInitializeNews());
    dispatch(startInitializeSuggestions());
    dispatch(startGetAllCampuses());
    AddToken();
    dispatch(startInitializeNotifications());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Index;
