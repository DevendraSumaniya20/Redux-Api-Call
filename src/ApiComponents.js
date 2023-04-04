import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {CallApiData} from './ApiSlice';

const ApiComponents = () => {
  const dispatch = useDispatch();

  const getData = useSelector(state => state.CallApi);

  useEffect(() => {
    dispatch(CallApiData());
  }, []);

  return (
    <LinearGradient
      colors={['#d53369', '#cbad6d']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.main}>
      <View style={{marginHorizontal: 10}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {getData?.isLoading && <ActivityIndicator color="#00ff00" />}
          {getData?.error && <Text>{getData?.error}</Text>}
        </View>
        <FlatList
          showsVerticalScrollIndicator="false"
          ListHeaderComponent={<View style={{marginTop: 57}}></View>}
          data={getData?.data ? getData?.data : []}
          renderItem={({item}) => {
            return (
              <View style={styles.everyThingContainer}>
                <View style={{width: 280}}>
                  <Text>{item.title}</Text>
                  <Text>Price:- ${item.price}</Text>
                  <Text>Category:- {item.category}</Text>
                </View>

                <Image
                  source={{uri: item.image}}
                  style={styles.image}
                  resizeMode="stretch"
                />
              </View>
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default ApiComponents;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  everyThingContainer: {
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    textAlign: 'left',
  },
  image: {
    width: 50,
    height: 50,
  },
});
