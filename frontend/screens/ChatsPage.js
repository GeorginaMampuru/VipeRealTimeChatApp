import React from 'react';
import { View, Text, Image } from 'react-native';

const ChatsPage = () => {
    const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#292f3e', flex: 1, justifyContent: 'center', width: '100%' }}>
      <View style={{ backgroundColor: '#292f3e', height: 812, overflow: 'hidden', position: 'relative', width: 375 }}>
        <View style={{ position: 'absolute', top: 837, left: 85 }}>
          <Text style={{ color: '#ffffff', fontFamily: 'Roboto-Light', fontSize: 13, letterSpacing: 1 }}>potem sie zobaczy</Text>
        </View>
        <View style={{ position: 'absolute', top: 446, left: 5, width: 355, height: 366 }}>
          <Image source={{ uri: 'image.png' }} style={{ position: 'absolute', top: 360, left: 6, width: 112, height: 6 }} />
          <Image source={{ uri: 'image-2.png' }} style={{ position: 'absolute', top: 280, left: 0, width: 92, height: 86 }} />
          <Text style={{ position: 'absolute', top: 298, left: 85, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Mase</Text>
          <Image source={{ uri: 'group.png' }} style={{ position: 'absolute', top: 252, left: 85, width: 15, height: 15 }} />
          <Image source={{ uri: 'image-3.png' }} style={{ position: 'absolute', top: 220, left: 6, width: 112, height: 112 }} />
          <Text style={{ position: 'absolute', top: 228, left: 85, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Mom</Text>
          <Image source={{ uri: 'image-4.png' }} style={{ position: 'absolute', top: 150, left: 15, width: 82, height: 82 }} />
          <View style={{ position: 'absolute', top: 160, left: 15, width: 34, height: 34, backgroundColor: '#404656', borderRadius: 30, shadowColor: '#00000073', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 24 }} />
          <View style={{ position: 'absolute', top: 159, left: 17, width: 336, height: 27 }}>
            <Text style={{ position: 'absolute', top: 9, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1, textAlign: 'right' }}>+22</Text>
            <Text style={{ position: 'absolute', top: 0, left: 279, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1, textAlign: 'right' }}>01 Feb</Text>
            <Text style={{ position: 'absolute', top: 0, left: 68, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Girls Trip</Text>
          </View>
          <Image source={{ uri: 'image-5.png' }} style={{ position: 'absolute', top: 90, left: 21, width: 102, height: 102 }} />
          <View style={{ position: 'absolute', top: 89, left: 15, width: 340, height: 38 }}>
            <Text style={{ position: 'absolute', top: 23, left: 70, color: '#ffffff', fontFamily: 'Roboto-Light', fontSize: 13, letterSpacing: 1 }}>nigrand</Text>
            <View style={{ position: 'absolute', top: 1, left: 0, width: 34, height: 34, backgroundColor: '#404656', borderRadius: 30, shadowColor: '#00000073', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 24 }}>
              <Text style={{ position: 'absolute', top: 8, left: 7, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1, textAlign: 'right' }}>+3</Text>
            </View>
            <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1, textAlign: 'right' }}>Mon</Text>
            <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>The 6ceed</Text>
          </View>
          <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Kealeboga</Text>
          <Image source={{ uri: 'image-6.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        </View>
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>01 Feb</Text>
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>18 Mar</Text>
        <Image source={{ uri: 'vector.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Image source={{ uri: 'group-2.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Tue</Text>
      </View>
      <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>01 Feb</Text>
      <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Marzena Klasa</Text>
      <View style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}>
        <Image source={{ uri: 'group-3.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Image source={{ uri: 'rectangle.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Image source={{ uri: 'union.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Sanelisiwe</Text>
        <Image source={{ uri: 'rectangle-2.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Image source={{ uri: 'image.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Sanelisiwe</Text>
        <Image source={{ uri: 'rectangle-3.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Image source={{ uri: 'union-2.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontmily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Sanelisiwe</Text>
        <Image source={{ uri: 'rectangle-4.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Sanelisiwe</Text>
        <Image source={{ uri: 'rectangle-4.png' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Sanelisiwe</Text>
      </View>
      <Image source={{ uri: 'union-3.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
      <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Favourites</Text>
      <View style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}>
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>Search...</Text>
        <Image source={{ uri: 'subtract.svg' }} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
      </View>
      <View style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}>
        <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>+</Text>
      </View>
      <Text style={{ position: 'absolute', top: 0, left: 0, color: '#ffffff', fontFamily: 'Roboto-Regular', fontSize: 15, letterSpacing: 1 }}>V I P E</Text>
      <View style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
    </View>
  <TouchableOpacity onPress={()=> navigation.push('ChatsPage')}>
  <Text className="text-sky-600">SignUp</Text>
</TouchableOpacity>
);
};

export default ChatsPage;
