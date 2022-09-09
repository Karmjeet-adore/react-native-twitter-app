import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function TweetScreen({navigation}) {
    function goToProfile() {
   navigation.navigate('Profile Screen')
}
  return (
    <View style={styles.container}>
    <View style={styles.profileContainer}>
     <TouchableOpacity style={styles.flexRow} onPress={()=>goToProfile()}>
         <Image 
        style={styles.avatar}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}>
        </Image>
        <View>
            <Text style={styles.tweetName}>Name Name</Text>
            <Text style={styles.tweetHandle}>@handle</Text>
        </View>
     </TouchableOpacity>
    <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={24} color="gray" />
    </TouchableOpacity>
    
         </View>
         <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>
                    Treat people with love and respect. Treat them as you would be treated. It's a hard world out there, don't make it harder.
                    Stay safe. Love one another. Life is hard for everyone, so spread peace and happiness. #tweetlove

                </Text>
         </View>
         <View style={styles.tweetEngagment}>
            <View style={[styles.flexRow, styles.ml4]}>
                <Text style={styles.tweetName}>100</Text>
                <Text style={styles.tweetLabel}>retweet</Text>
            </View>
             <View style={[styles.flexRow, styles.ml4]}>
                <Text style={styles.tweetName}>38</Text>
                <Text style={styles.tweetLabel}>Quote Tweet</Text>
            </View>
             <View style={[styles.flexRow, styles.ml4]}>
                <Text style={styles.tweetName}>50</Text>
                <Text style={styles.tweetLabel}>Likes</Text>
            </View>
         </View>
         <View style={[styles.tweetEngagment, styles.spaceAround]}>
            <TouchableOpacity>
                <EvilIcons 
                    name="comment" 
                    size={22} 
                    color="gray" 
                    style={{marginright:2}} />
           
            </TouchableOpacity>
            <TouchableOpacity>
                <EvilIcons 
                    name="retweet" 
                    size={22} 
                    color="gray" 
                    />
                
            </TouchableOpacity>
            <TouchableOpacity>
                <EvilIcons 
                    name="heart" 
                    size={22} 
                    color="gray" 
                   />
            </TouchableOpacity>
            <TouchableOpacity >
                <EvilIcons 
                    name={Platform.OS = 'ios' ? "share-apple" : "share-google"}
                    size={22} 
                    color="gray" 
                     />
            </TouchableOpacity>
            
         </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25 ,
        marginRight: 8,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:12,
        paddingHorizontal: 10,
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
        marginTop:6,

    },
     tweetContentContainer: {
        marginTop:4,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,

    },
    tweetContent: {
        lineHeight:30,
        fontSize:20,
    },
    tweetEngagment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:10,
        paddingHorizontal: 12,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    tweetName: {
        fontWeight: 'bold',
    },
    tweetLabel: {
        color: 'grey',
        marginLeft: 6,
    },
     ml4: {
        marginLeft: 16,

    },
    spaceAround: {
        justifyContent: 'space-around',
    },
});