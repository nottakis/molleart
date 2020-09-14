import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

import Features from '../components/Features/Features'
import Widget from '../components/Widget/Widget'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <div>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <img className="hero__image" src={useBaseUrl("img/hero.png")}/>
        <div className="container" style={{ position: "relative"}}>
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, padding: 10 }}>
          <button class="button button--secondary" data-dh-feature="network" data-dh-property-enable="true">
              Connect your account
          </button>
        </div>
      </header>
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
