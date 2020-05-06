import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const getLocalState = () => {
  return AsyncStorage.getItem('abuttoMobile');
};

export let initialState = {
  isLoggedIn: false,
};

const useController = () => {
  const persistState = (newState) => {
    AsyncStorage.setItem('abuttoMobile', JSON.stringify(newState)).then((data) => {
      console.log('stored');
    });
  };

  const [state, dispatch] = React.useReducer((state, value) => {
    let newState = {
      ...state,
      ...value,
    };
    persistState(newState);
    return newState;
  }, initialState);

  useEffect(() => {
    getLocalState().then((data) => {
      if (data) {
        dispatch(JSON.parse(data));
      }
    });
  }, []);

  return {state, dispatch};
};

export default useController;
