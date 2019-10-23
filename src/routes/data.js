import HomePage from '<pages>/Home/Home';
import SharePage from '<pages>/Share/Share';

const Routes = {
  default: [
    {
      exact: true,
      path: '/',
      Component: HomePage,
    },
    {
      exact: true,
      path: '/share',
      Component: SharePage,
      isProtected: true,
    },
  ],
};

export default Routes;
