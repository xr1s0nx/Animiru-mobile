import { useQuery } from '@tanstack/react-query';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { apiAnimes } from '~api';
import { QUERY_KEYS } from '~constants/app';
import { TAnime } from '~types';
import { AnimeLine } from './components';
import { useEffect, useState } from 'react';

export const Catalog = () => {
  const { data, isLoading, refetch } = useQuery({ queryKey: [QUERY_KEYS.ANIMES], queryFn: apiAnimes.getAll });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    refetch();
  };

  useEffect(() => {
    setRefreshing(isLoading);
  }, [isLoading]);

  return (
    <>
      <Text style={{ fontSize: 32, fontWeight: 600, paddingLeft: 10, paddingBottom: 10, color: 'orange' }}>Каталог</Text>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={{ paddingBottom: 80 }}>
        {data && data.map((anime: TAnime) => <AnimeLine info={anime} key={anime.id} />)}
      </ScrollView>
    </>
  );
};
