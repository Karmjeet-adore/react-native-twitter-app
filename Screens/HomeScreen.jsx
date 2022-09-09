import React from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {

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

function goToProfile() {
   navigation.navigate('Profile Screen')
}

const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
    <TouchableOpacity onPress={()=>goToProfile()}>
        <Image 
        style={styles.avatar}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}>
        </Image>
         </TouchableOpacity>
         <View>
            <TouchableOpacity style={styles.flexContainer}>
                <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>@karmjeet</Text>
                <Text>&middot;</Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>8am</Text>
            </TouchableOpacity>
         </View>
       
        
    </View>
    );

  return (
    <View style={styles.container}>
     <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12,

    },
    avatar: {
        width: 43,
        height: 43,
        borderRadius: 21,
        marginRight: 8,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',    
    },
    tweetName: {
        fontWeight: 'bold',
        color: 'black',
    },
    tweetHandle: {
        color: 'grey',
        fontSize: 16,
        marginHorizontal: 8,
    }
        
});