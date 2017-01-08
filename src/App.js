// in src/App.js
import React from 'react';
import {jsonServerRestClient} from 'admin-on-rest';
import { Admin, Resource } from 'admin-on-rest';
import myApiRestClient from './restClient';

import { Delete } from 'admin-on-rest/lib/mui';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

import Dashboard from './Dashboard';

import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
  <div>
      <Admin dashboard={Dashboard} restClient={myApiRestClient}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}  icon={PostIcon} />
          <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
      <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}  icon={PostIcon} />
          <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
  </div>
);

export default App;
