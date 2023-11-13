import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'

function Counter({count}) {
    return (
        <View style={styles.container}>
          <Text>This is count number: {count}</Text>
          <Pressable style={{width: 100, height: 100, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}

       
          >
           <Text>+</Text>
          </Pressable>
        </View>
      );
    }

const mapStateToProps = (state) => ({
  count: state.count
})

    export default connect(mapStateToProps, null)(Counter);
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    