import React, {useEffect, useRef, useState} from 'react';
import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Post as PostType} from './Home';
import {fetchDetailPost} from '../api/api';

const Detail = ({route}: {route: any}): JSX.Element => {
  const [Post, setPost] = useState<PostType>();
  const translateXAnim = useRef(new Animated.Value(-200)).current;
  const translateYAnim = useRef(new Animated.Value(200)).current;

  const getPost = async () => {
    const data = await fetchDetailPost(route.params.id);
    setPost(data);
  };
  useEffect(() => {
    getPost();
    animateElementX();
    animateElementY();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateElementX = () => {
    Animated.timing(translateXAnim, {
      toValue: 0, // Ubah sesuai dengan lebar elemen yang ingin digunakan
      duration: 1000, // Durasi animasi dalam milidetik
      useNativeDriver: true,
    }).start();
  };
  const animateElementY = () => {
    Animated.timing(translateYAnim, {
      toValue: 0, // Ubah sesuai dengan lebar elemen yang ingin digunakan
      duration: 1000, // Durasi animasi dalam milidetik
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View style={[{transform: [{translateY: translateYAnim}]}]}>
          <Text style={styles.title}>{Post?.title}</Text>
        </Animated.View>

        <Animated.View style={[{transform: [{translateX: translateXAnim}]}]}>
          <Text>{Post?.body}</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Detail;
