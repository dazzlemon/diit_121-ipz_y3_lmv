import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {sizes, colors} from '../theme';

const Settings = () => {
    const [selectedId, setSelectedId] = useState(null);

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

      const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6665d2" : "red";
        const color = item.id === selectedId ? 'white' : 'black';
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
         <View style={{ flex: 6, backgroundColor: "darkorange" }}>
         <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
         </View>
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
      color: colors.itemFontColor,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
export default Settings;