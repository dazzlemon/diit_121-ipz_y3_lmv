import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {sizes, colors} from '../theme';

const Settings = () => {
    const [selectedId, setSelectedId] = useState(null);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'My Account',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'User Profile',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Privacy & Safety',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29dа2',
          title: 'Authorized Apps',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d22',
          title: 'Connections',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e22d22',
          title: 'Appearance',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e21d22',
          title: 'Accessibility',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e2f723',
          title: 'Voice & Video',
        },
        {
          id: '58694a0f-3da1-471f-bd56-1455141e2f73',
          title: 'Text & Images',
        },
        {
          id: '58694a0f-3da1-471f-b436-1312141e2f73',
          title: 'Notifications',
        },
        {
          id: '58694a0f-3da1-471f-a4a8-13131241e2f7',
          title: 'Keybinds',
        },
        {
          id: '58694a0f-3da1-471f-a4f8-13131241e2f7',
          title: 'Language',
        },
      ];

      const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6665d2" : colors.itemBg;
        const color = item.id === selectedId ? 'white' : colors.itemFontColor;
        return (
          <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
        )
      };

      return (
        <SafeAreaView style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
         <View style={{ flex: 20, backgroundColor: "#36393F" }}>
         <FlatList

          />
         </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.itemBg,
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
    },
    item: {
      backgroundColor: colors.itemBg,
      borderRadius: sizes.borderRadius,
      padding: 1,
      marginVertical: 6,
      marginHorizontal: 1,
    },
    title: {
      color: colors.itemFontColor,
      textAlign: 'left',
      padding: 4,
      marginLeft: 80,
      fontSize: 14,
    },
  });
  
export default Settings;