import React, {Fragment, useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import {FlatList, Button, View, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from 'react-native-styled-components';
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
      const Item = ({ item, onPress, backgroundColor, textColor, titleBackgroundColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <MyText style={[styles.itemTitle, textColor, titleBackgroundColor]}>{item.title}</MyText>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6665d2" : colors.itemBg;
        const color = item.id === selectedId ? 'white' : colors.itemFontColor;
        return (
          <Item
          titleBackgroundColor = {{ backgroundColor }}
          item={item}
          onPress={() => setSelectedId(item.id)}
          textColor={{ color }}
        />
        )
      };

      return (
        <View style={[styles.container, { flexDirection: "row"}]}>
          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
          </View>
         <View style ={ styles.mainContent}>
          <MyText style ={ styles.header}> My Account </MyText>
          <View style = {styles.profileBox}> 

            <View style ={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', margin: 20}}>
              <FaUserCircle size={150} style = {{ margin: 0,padding: 0}}/>   
              <MyText style = {{ color:colors.itemFontColor, paddingLeft: 10, fontSize: 24, fontWeight: 'bold' }}>
                User name
              </MyText>
              <View style = {{flex: 10}}>
                <TouchableOpacity style={[styles.blueButton, { alignSelf: 'flex-end'}]}>
                  Edit User Profile
                </TouchableOpacity>   
              </View>
            </View>

            <View style = {styles.mainInfoBox}>
              <View style = {{flexDirection: "row"}}>
                <View style = {{flexDirection: "column",  padding: 7}}>
                  <MyText style={{fontWeight: 'bold'}}>USERNAME</MyText>
                  <MyText style={{fontSize: 16}}>John</MyText>
                </View>
                  <View style = {{flex: 10}}>
                    <TouchableOpacity style={[styles.blackButton, {alignSelf: 'flex-end'}]}>
                      Edit
                    </TouchableOpacity>   
                  </View>
              </View>

              <View style = {{flexDirection: "row"}}>
                <View style = {{flexDirection: "column", padding: 7}}>
                  <MyText style={{fontWeight: 'bold'}} >EMAIL</MyText>
                  <MyText style={{fontSize: 16}}>*********@gmail.com</MyText>
                </View>
                  <View style = {{flex: 10}}>
                    <TouchableOpacity style={[styles.blackButton, {alignSelf: 'flex-end'}]}>
                      Edit
                    </TouchableOpacity>   
                  </View>
              </View>

              <View style = {{flexDirection: "row"}}>
                <View style = {{flexDirection: "column",  padding: 7}}>
                  <MyText style={{fontWeight: 'bold'}} >PHONE NUMBER</MyText>
                  <MyText style={{fontSize: 16}}>You haven't added a phone number yet</MyText>
                </View>
                  <View style = {{flex: 10}}>
                    <TouchableOpacity style={[styles.blackButton, {alignSelf: 'flex-end'}]}>
                      Add
                    </TouchableOpacity>   
                  </View>
              </View>
            </View>     
          </View>
         </View>
        </View>
      );
}

const styles = StyleSheet.create({

    styleText: {
      color: colors.itemFontColor
    },


    container: {
        flex: 1,
        backgroundColor: colors.itemBg,
        color: colors.itemFontColor,
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
    },
    mainContent: {
      flex: 20,
      backgroundColor: "#36393F",
      paddingLeft: 20
    },
    header: {
      color:'#ffffff',
      fontSize: 28,
      fontStyle: 'bold'
    },
    profileBox: {
      width: 800,
      height: 460,
      color: colors.itemFontColor,
      marginVertical:20,
      marginHorizontal: 10,
      borderRadius: 15,
      paddingVertical: 10,
      backgroundColor:"#202225"
    },
    blueButton : {
      
      width: 140,
      height: 40,
      borderRadius: 15,
      fontWeight: 'bold',
      fontSize: '10',
      color: colors.white,
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#6665d2'
    },
    blackButton : {
      width: 50,
      height: 30,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#4f545c',
      textAlign: 'center',
      color: colors.white,
      justifyContent: 'center'
    },
    mainInfoBox: {
      width: 760,
      height: 220,
      marginVertical:20,
      marginHorizontal: 20,
      borderRadius: 15,
      paddingVertical: 10,
      backgroundColor:"#2f3136",
      flexDirection: "column",
      justifyContent: 'space-between',
      lignItems: 'center'
    },
    item: {
      backgroundColor: colors.itemBg,
      borderRadius: sizes.borderRadius,
      padding: 1,
      marginVertical: 6,
      marginHorizontal: 16,
    },
    itemTitle: {
      color: colors.itemFontColor,
      textAlign: 'left',
      borderRadius: 10,
      padding: 4,
      marginLeft: 60,
      marginRight: 20,
      fontSize: 14,
    },
  });
  
  const MyText = styled(Text, styles.styleText);
export default Settings;