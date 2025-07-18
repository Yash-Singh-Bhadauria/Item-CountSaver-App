import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react'
import AllItems from './AllItems'
import Low from './Low'
import Create from './Create'

const Home = () => {
    const [idx,setIdx]=useState(0)
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.btnCont}>
        <Pressable style={[styles.btn,{backgroundColor:idx===0?'green':'white'}]} onPress={()=>setIdx(0)}>
            <Text style={styles.btnTxt}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.btn,{backgroundColor:idx===1?'green':'white'}]} onPress={()=>setIdx(1)}>
            <Text style={styles.btnTxt}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.btn,{backgroundColor:idx===2?'green':'white'}]} onPress={()=>setIdx(2)}>
            <Text style={styles.btnTxt}>Create</Text>
        </Pressable>
      </View>
      {idx===0 && <AllItems/>}
      {idx===1 && <Low/>}
      {idx===2 && <Create/>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    cont:{
        height:'100%',
        width:'100%',
        padding:'4%',
        marginTop:10
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    btnCont:{
        marginVertical:10,
        flexDirection:'row',
        gap:10
    },
    btn:{
        paddingVertical:3.5,
        paddingHorizontal:10,
        borderRadius:50,
        borderWidth:0.8,
        borderColor:'green'
    },
    btnTxt:{
        fontSize:12
    }
})
