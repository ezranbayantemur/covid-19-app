import {SafeAreaView, Button} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function App() {
  const handleReceive = () => {
    axios
      .get('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
          'X-RapidAPI-Key':
            '0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
      })
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <SafeAreaView>
      <Button title="Hey!" onPress={handleReceive} />
    </SafeAreaView>
  );
}
