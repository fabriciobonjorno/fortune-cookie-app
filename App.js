import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textSentence, setTextSentence] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  let sentences = require('./src/sentences.json').sentences;

  function breakCookie(){
    let randomNumber = Math.floor(Math.random() * sentences.length);
    setTextSentence("\"" + sentences[randomNumber] + "\"");
    setImg(require('./src/biscoitoAberto.png'));
    setIsVisible(false);

    setTimeout(() => {
      setImg(require('./src/biscoito.png'));
      setTextSentence('');
      setIsVisible(true);
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}
      />
      <Text style={styles.sentenceText}>{ textSentence }</Text>
      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Open Cookie</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
   width: 230,
   height: 230
  },
  sentenceText:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 10
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#dd7b22'
  }
})

export default App;
