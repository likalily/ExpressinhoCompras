import React from 'react';
import Stars from 'react-native-stars';
import {Text, View, StyleSheet} from 'react-native';

import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

export default ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }

  if (left > 0) {
    s[i] = 1; //i acessado por ter sido declarado como var
  }
  return (
    
      <Stars
        default={4}
        count={1}
        half={true}
        starSize={20}
        fullStar={<StarFull width="24" height="24" fill="#6C5CE7" />}
        emptyStar={<StarEmpty width="24" height="24" fill="#6C5CE7" />}
        halfStar={<StarHalf width="24" height="24" fill="#6C5CE7" />}
      />

  );
};
