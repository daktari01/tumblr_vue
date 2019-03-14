import AuthBase from '../../components/AuthBase';
import UserRegistration from '../../components/UserRegistration';

const auth = [
  {
    path: '/auth',
    component: AuthBase,
    children: [
      {
        path: 'signup',
        component: UserRegistration
      },
    ],
  },
];

export default auth;
