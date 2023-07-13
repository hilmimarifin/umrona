import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {fetchListPost} from '../api/api';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = ({navigation}: {navigation: any}): JSX.Element => {
  const [listPost, setListPost] = useState<Post[]>([]);
  const getListPost = async () => {
    const data = await fetchListPost();
    setListPost(data);
  };
  useEffect(() => {
    getListPost();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.listPost}
        data={listPost}
        renderItem={({item}) => (
          <PostItem title={item.title} navigation={navigation} id={item.id} />
        )}
      />
    </SafeAreaView>
  );
};

const PostItem = ({
  title,
  id,
  navigation,
}: {
  title: string;
  id: number;
  navigation: any;
}) => {
  return (
    <View style={styles.postItem}>
      <Button
        title={title}
        onPress={() => navigation.navigate('Detail', {id: id})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postItem: {
    marginBottom: 10,
  },
  listPost: {
    marginHorizontal: 10,
  },
});
export default Home;
