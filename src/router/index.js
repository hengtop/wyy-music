import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@/pages/discover';
import Friends from '@/pages/friends';
import Mine from '@/pages/mine';

import Recommend from '@/pages/discover/child-pages/recommend';
import Album from '@/pages/discover/child-pages/album';
import Artist from '@/pages/discover/child-pages/artist';
import Djradio from '@/pages/discover/child-pages/djradio';
import Ranking from '@/pages/discover/child-pages/ranking';
import Songs from '@/pages/discover/child-pages/songs';

const routes = [
  {
    path: '/',
    exact: true,
    //重定向
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        //重定向
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friends',
    component: Friends
  }
];

export default routes;
