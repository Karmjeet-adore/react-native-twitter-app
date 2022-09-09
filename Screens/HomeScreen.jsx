import React from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Platform} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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

function goToSingleTweet() {
   navigation.navigate('Tweet Screen')
}
function goToNewTweet() {
   navigation.navigate('New Tweet')
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
         <View style={{flex:1}}>
            <TouchableOpacity style={styles.flexRow} onPress={()=> goToSingleTweet()}>
                <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>@karmjeet</Text>
                <Text>&middot;</Text>
                <Text numberOfLines={1} style={styles.tweetHandle}>8am</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tweetContentContainer} onPress={()=> goToSingleTweet()}>
                <Text style={styles.tweetContent}>
                    Treat people with love and respect. Treat them as you would be treated. It's a hard world out there, don't make it harder
                </Text>
            </TouchableOpacity>
            <View style={styles.tweetEngagment}>
            <TouchableOpacity style={styles.flexRow}>
                <EvilIcons 
                    name="comment" 
                    size={22} 
                    color="gray" 
                    style={{marginright:2}} />
                <Text style={styles.textGray}>100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons 
                    name="retweet" 
                    size={22} 
                    color="gray" 
                    style={{marginright:2}} />
                <Text style={styles.textGray}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons 
                    name="heart" 
                    size={22} 
                    color="gray" 
                    style={{marginright:2}} />
                <Text style={styles.textGray}>25</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons 
                    name={Platform.OS = 'ios' ? "share-apple" : "share-google"}
                    size={22} 
                    color="gray" 
                    style={{marginright:2}} />
            </TouchableOpacity>
            </View>
         </View> 
    </View>
    );

  return (
    <View style={styles.container}>
     <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator} />}
      />
     <TouchableOpacity style={styles.floatingButton} onPress={()=>goToNewTweet()}>
        <AntDesign name="plus" size={30} color="white" />
     </TouchableOpacity>
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
    tweetSeparator: {
        borderBottomColor:'rgb(230, 236, 240)',
        borderBottomWidth: 1,
    },
    avatar: {
        width: 43,
        height: 43,
        borderRadius: 21,
        marginRight: 8,
    },
    flexRow: {
        flexDirection: 'row',  
    },
    tweetName: {
        fontWeight: 'bold',
        color: 'black',
    },
    tweetHandle: {
        color: 'grey',
        fontSize: 16,
        marginHorizontal: 8,
    },
    tweetContentContainer: {
        marginTop:4,
    },
    tweetContent: {
        lineHeight:20,
    },
    textGray: {
        color: 'gray',
    },
    ml4: {
        marginLeft: 16,

    },
    tweetEngagment: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgb(29, 161, 242)',
        alignItems: 'center',
        justifyContent: 'center',
    },
        
});