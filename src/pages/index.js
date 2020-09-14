import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

import Header from '../components/Header/Header'
import Features from '../components/Features/Features'
import Widget from '../components/Widget/Widget'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Features/>
        <Widget/>
      </main>
      {/* Cf. https://facebookincubator.github.io/infima/docs/components/footer */}
      <footer>
        <div className={clsx(styles.lpfooter, 'text--center')}>
          <Link to={useBaseUrl('docs/')}>
            About
          </Link>
          <a target='_blank' href="https://twitter.com/MolLeArt">
            Twitter
          </a>
          <a target='_blank' href="https://discord.gg/hxgBHZP">
            Discord
          </a>
          <a target='_blank' href="https://github.com/Mol-LeArt">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
