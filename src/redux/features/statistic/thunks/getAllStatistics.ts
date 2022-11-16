import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {Statistic} from '@types';

const {API_KEY, API_HOST, API_URL} = Config;

interface Response {
  errors: any[];
  get: string;
  parameters: any[];
  response: Statistic[];
  results: number;
}

export default createAsyncThunk('statistics/getAllStatistics', async () => {
  const {data} = await axios.get<Response>(API_URL + '/statistics', {
    headers: {'X-RapidAPI-Key': API_KEY!, 'X-RapidAPI-Host': API_HOST!},
  });

  return data.response;
});
