
import React, { Component } from 'react';
import ReadMore from './Cont';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


class Post extends Component {
  constructor() {
    super();
    this.state = {
      content: true
    }
  }

  // componentHideAndShow = () => {
  //   this.setState(previousState => ({ content: !previousState.content }))
  // }

  // _renderTruncatedFooter = (handlePress) => {
  //   return (
  //     <Text style={{ color: 'blue', marginTop: 5 }} onPress={handlePress}>
  //       Read more
  //     </Text>
  //   );
  // }

  // _renderRevealedFooter = (handlePress) => {
  //   return (
  //     <Text style={{ color: 'blue', marginTop: 5 }} onPress={handlePress}>
  //       Show less
  //     </Text>
  //   );
  // }


  render() {
    let flag = 1;
    let { text } = this.props;

    return (
      <>

        <Text style={styles.titleText} >
          HERE IS THE TITLE
            </Text>
        <View>
          <View style={styles.cardLabel}>

          </View>

          <View style={styles.card}>
            <View style={styles.cardBody}>

              <ReadMore text={text} style={styles.cardText}

              />
            </View>
          </View>
        </View>

        <Image
          style={{ height: 250, borderWidth: 1 }}
          source={{ uri: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png' }}
        />

      </>
    );
  };
}

const styles = StyleSheet.create({

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  baseText: {
    fontSize: 20,
    fontFamily: 'Cochin',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});

export default Post;
