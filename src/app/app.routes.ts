import { Routes } from '@angular/router';
import { MainFrame } from './main-frame/main-frame';
import { GraphqlBook } from './graphql-book/graphql-book';
import { Home } from './home/home';
import { RestfulBook } from './restful-book/restful-book';
import { Tensorflowjsc } from './components/tensorflowjsc/tensorflowjsc';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'graphqlbook',
    component: GraphqlBook
  },
  {
    path: 'restfulbook',
    component: RestfulBook
  },
  {
    path: 'tensorflow',
    component: Tensorflowjsc
  }
];

