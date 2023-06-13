import axios from 'axios';
import { API_URL } from './constant';
import toRupiah from '@develoka/angka-rupiah-js';

export const fetchDataInvesta = async (
  endpoint,
  method = 'GET',
  data = null,
  headers
) => {
  try {
    const response = await axios({
      url: `${API_URL}/${endpoint}`,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getTokenInvesta = (token) => {
  const res = {
    headers: {
      Authorization: `${token}`,
      // 'Content-Type': 'multipart/form-data',
    },
  };
  return res;
};

export const toRupiahInvesta = (num) => {
  return toRupiah(num, { dot: ',', floatingPoint: 0 });
};

export const getPercentageInvesta = (part, full) => {
  return (part / full) * 100;
};

export const dateFormatInvesta = (date) => {
  let date_string = date;
  let date_object = new Date(date_string);
  let options = { day: 'numeric', month: 'long', year: 'numeric' };
  let formatted_date = date_object.toLocaleDateString('id-ID', options);
  return formatted_date;
};
