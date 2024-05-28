import axios from 'axios';
import { ENDPOINTS } from '~constants/endpoints';
import { TAnime } from '~types';
import { http } from '~utils/http';

export const getAll = async () => {
  const { data }: { data: TAnime[] } = await http.get(ENDPOINTS.ANIMES.BASE);

  return data;
};
