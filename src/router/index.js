import Discover from '@/pages/discover';
import Friends from '@/pages/friends';
import Mine from '@/pages/mine';

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
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
