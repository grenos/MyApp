import React from 'react';
import { ScrollView, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: 'pink' }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      </SafeAreaView>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta libero
        quidem modi, impedit eligendi facilis sunt sint eveniet qui ex
        temporibus cupiditate esse itaque laborum perspiciatis? Velit animi
        quasi fugiat. {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo
        beatae rerum nesciunt molestias qui eum molestiae alias at inventore a
        dignissimos optio doloremque voluptatem, vel eius. Quas, asperiores!
        Fugiat? {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque et
        magni officia sint ullam pariatur unde consequuntur explicabo,
        repellendus error labore voluptate beatae, facere sed aliquid veritatis
        saepe, vitae nihil. {'\n'}
        {'\n'}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta libero
        quidem modi, impedit eligendi facilis sunt sint eveniet qui ex
        temporibus cupiditate esse itaque laborum perspiciatis? Velit animi
        quasi fugiat. {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo
        beatae rerum nesciunt molestias qui eum molestiae alias at inventore a
        dignissimos optio doloremque voluptatem, vel eius. Quas, asperiores!
        Fugiat? {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque et
        magni officia sint ullam pariatur unde consequuntur explicabo,
        repellendus error labore voluptate beatae, facere sed aliquid veritatis
        saepe, vitae nihil. {'\n'}
        {'\n'}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta libero
        quidem modi, impedit eligendi facilis sunt sint eveniet qui ex
        temporibus cupiditate esse itaque laborum perspiciatis? Velit animi
        quasi fugiat. {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo
        beatae rerum nesciunt molestias qui eum molestiae alias at inventore a
        dignissimos optio doloremque voluptatem, vel eius. Quas, asperiores!
        Fugiat? {'\n'}
        {'\n'}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque et
        magni officia sint ullam pariatur unde consequuntur explicabo,
        repellendus error labore voluptate beatae, facere sed aliquid veritatis
        saepe, vitae nihil.
      </Text>
    </ScrollView>
  );
};
