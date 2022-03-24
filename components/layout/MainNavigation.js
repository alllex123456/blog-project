import classes from './MainNavigation.module.css';

import Link from 'next/link';

const MainNavigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={classes.item}>
          <Link href="/">See All Posts</Link>
        </li>
        <li>
          <Link href="/">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
