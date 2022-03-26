import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { SCREENS, Theme } from '../../Constants';

interface IProps {
  title: string;
  goBack: boolean;
}

const MyComponent: React.FC<IProps> = ({ title, goBack }) => {
  const navigation = useNavigation();
  const _goBack = () => console.log('Went back');

  const handleNavigateToNotifications = useCallback(() => {
    navigation.navigate(SCREENS.NOTIFICATIONS_STACK.name);
  }, [navigation]);

  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Appbar.Header style={{ backgroundColor: 'transparent' }}>
        {goBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
        <Appbar.Content
          title={title}
          titleStyle={{ color: Theme.colors.primary }}
        />
        <Appbar.Action
          icon="bell"
          size={18}
          color={Theme.colors.primary}
          onPress={handleNavigateToNotifications}
        />
        <Appbar.Action
          icon="dots-vertical"
          onPress={_handleMore}
          color={Theme.colors.primary}
        />
      </Appbar.Header>
    </>
  );
};

export default MyComponent;
