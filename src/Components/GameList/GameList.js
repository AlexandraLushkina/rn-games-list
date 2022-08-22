import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';

import { getGamesList, getPlatforms } from '../../api';
import { optionsSort, optionsPlatform } from '../../consts';
import GameCard from '../GameCard';
import Dropdown from '../Dropdown';
import { Controls } from './GameListStyled';

export default GameList = () => {
  const [games, setGamesList] = useState([]);
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState('-rating');
  const [platformsList, setPlatformsList] = useState([]);
  const [platform, setPlatform] = useState();
  
  useEffect(() => {
    getPlatforms().then(res => {
      setPlatformsList(res.results);
    });
  }, [platformsList]);
  
  
  useEffect(() => {
    loadGames();
  }, [page]);
  
  useEffect(() => {
    setGamesList([]);
    setPage(1);
    loadGames();
  }, [ordering, platform]);
  
  const loadGames = () => {
    getGamesList(page, ordering, platform).then(res => {
      const newData = Array.from(new Set([...games, ...res.data.results]));
      setGamesList(newData);
    });
  }
  
  const loadMore = () => {
    setPage(page + 1);
  }
  
  const onSortSelect = (selected) => {
    setOrdering(selected.type);
  }
  
  const onPlatfromSelect = (selected) => {
    setPlatform(selected.type);
  }
  
  return (
    <SafeAreaView>
      <Controls>
        <Dropdown startLabel={ordering} data={optionsSort} onSelect={onSortSelect} />
        <Dropdown startLabel={'платформа'} data={optionsPlatform} onSelect={onPlatfromSelect} />
      </Controls>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={games}
        renderItem={({ item }) => ( <GameCard key={item.id} game={item} />)}
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
      />
    </SafeAreaView>
  );
}