import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {sizes, colors} from '../theme';

const Settings = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e2124',
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
    },
    item: {
      backgroundColor: '#6665d2',
      borderRadius: sizes.borderRadius,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      color: colors.white,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
export default Settings;