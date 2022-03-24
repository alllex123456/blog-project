import classes from './Layout.module.css';

import { Fragment } from 'react';
import Image from 'next/image';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>ALEX'S BLOG</div>
        <div className={classes.image}>
          <Image
            src="/images/profile-photo.jpg"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <MainNavigation />
      </header>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
