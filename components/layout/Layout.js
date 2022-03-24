import classes from './Layout.module.css';

import { Fragment } from 'react';
import Link from 'next/link';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>
          <Link href="/">ALEX's BLOG</Link>
        </div>

        <MainNavigation />
      </header>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
