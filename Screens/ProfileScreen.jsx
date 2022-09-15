import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking, FlatList} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default function ProfileScreen() {

    const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
    {
    id: '4',
    title: 'Forth Item',
  },
    {
    id: '5',
    title: 'Fifth Item',
  },
    {
    id: '6',
    title: 'Sixth Item',
  },
{
    id: '7',
    title: 'Seventh Item',
  },
  {
    id: '8',
    title: 'Eighth Item',
  },
  {
    id: '9',
    title: 'Ninth Item',
  },
  {
    id: '10',
    title: 'tenth Item',
  },

];

const renderItem = ({ item }) => (
    <View style={{marginVertical:20}}>
       <Text>{item.title}</Text> 
    </View>
)
const ProfileHeader = () => (
     <View style={style.container}>
       <Image
        style={style.backgroundImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
        }}>
      </Image>
  
    <View style={style.avatarContainer}>
       <Image
          style={style.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}>
        </Image>
         <TouchableOpacity style={style.followButton}>
          <Text style={style.followButtonText}>
            Follow
          </Text>
        </TouchableOpacity>
     </View>
     
      <View>
        <View style={style.nameContainer}>
            <Text style={style.profileName}>Name Name</Text>
            <Text style={style.profileHandle}>@handle</Text>
        </View>
          <View style={style.profileContainer}>
            <Text style={style.profileContainerText}>React, Redux and React-Native Developer</Text>
          </View>
      </View>    
          
      <View style={style.locationContainer}>
         <EvilIcons name="location" size={24} color="gray" />
         <Text style={style.textGray}> Melbourne, VIC</Text>
       </View>
           
      <View style={style.linkContainer}>
          <TouchableOpacity
              style={style.linkItem}
              onPress={() => Linking.openURL('https://reactnative.dev')}>
            
              <EvilIcons name="link" size={24} color="gray" />
              <Text style={style.linkColor}>reactnative.dev</Text>
          </TouchableOpacity>
          <View style={[style.linkItem, style.ml4]}>
              <EvilIcons name="calendar" size={24} color="gray" />
              <Text style={style.textGray}>
                Joined 13 April 2021
              </Text>
           </View>
        </View>
        
      <View style={style.followContainer}>
            <View style={style.followItem}>
              <Text style={style.followItemNumber}>509</Text>
              <Text style={style.followItemLabel}>Following</Text>
            </View>
            <View style={[style.followItem, style.ml4]}>
              <Text style={style.followItemNumber}>2,354</Text>
              <Text style={style.followItemLabel}>Followers</Text>
            </View>
       </View>
      
       <View style={style.separator}></View>
   </View>

  );
  return (
  <FlatList
        style={style.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={style.separator}></View>}
          ListHeaderComponent={ProfileHeader}
      />
  );
}
const style = StyleSheet.create({
   textGray: {
        color: 'gray',
    },
    ml4: {
        marginLeft: 16,

    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width:800,
    height:120,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginTop: -38,
  },
  avatar: {
    width: 80,
    height:80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameContainer: {
   paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  profileHandle: {
    color: 'grey',
    marginTop: 4,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 12,
  },
 linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  linkColor: {
    color: '#1d9bf1',
  },
  linkItem: {
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: 'row',
  },
  followItemNumber: {
    fontWeight: 'bold',
  },
  followItemLabel: {
    marginLeft: 4,
  },
   separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});

