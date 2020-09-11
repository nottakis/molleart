import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

import Buy from './dapphero/_buy'
import Gift from './dapphero/_gift'
import Scribe from './dapphero/_scribe'
import Sell from './dapphero/_sell'

const features = [
  {
    title: 'Power back to the artists',
    imageUrl: 'img/raidguild1.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
      </>
    ),
  },
  {
    title: 'subDAO of lex_DAO',
    imageUrl: 'img/raidguild2.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
      </>
    ),
  },
  {
    title: 'Web3 creative commons',
    imageUrl: 'img/logo.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
        
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function WidgetContent() {
  return (
    <div>
      <Tabs>
        <TabList className="tabs tabs--block">
          <Tab className="tabs__item">Scribe</Tab>
          {/* <Tab className="tabs__item">Sell</Tab>
          <Tab className="tabs__item">Buy</Tab>
          <Tab className="tabs__item">Gift</Tab> */}
        </TabList>
        <TabPanel>
          <Scribe/>
        </TabPanel>
        {/* <TabPanel>
          <Sell/>
        </TabPanel>
        <TabPanel>
          <Buy/>
        </TabPanel>
        <TabPanel>
          <Gift/>
        </TabPanel> */}
      </Tabs>
    </div>
  )
}

function Widget() {
  return (
    <div class="container">
      <div class="row">
        <div class="col col--6">
          <img src={useBaseUrl("img/scribe.gif")} />
        </div>
        <div class="col col--6">
          <WidgetContent/>
        </div>
      </div>
    </div>
  );
}

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
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <Widget/>
        </section>
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
