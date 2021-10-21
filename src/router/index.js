import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const Discover = lazy(() => import('@/pages/discover'));
const Friends = lazy(() => import('@/pages/friends'));
const Mine = lazy(() => import('@/pages/mine'));

const Recommend = lazy(() => import('@/pages/discover/child-pages/recommend'));
const Album = lazy(() => import('@/pages/discover/child-pages/album'));
const Artist = lazy(() => import('@/pages/discover/child-pages/artist'));
const Djradio = lazy(() => import('@/pages/discover/child-pages/djradio'));
const Ranking = lazy(() => import('@/pages/discover/child-pages/ranking'));
const Songs = lazy(() => import('@/pages/discover/child-pages/songs'));
const Player = lazy(() => import('@/pages/player'));

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
      },
      {
        path: '/discover/player',
        component: Player
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
