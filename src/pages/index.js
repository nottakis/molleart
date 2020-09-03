import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Power back to the artists',
    imageUrl: 'img/burrrata1.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
      </>
    ),
  },
  {
    title: 'subDAO of lex_DAO',
    imageUrl: 'img/burrrata2.png',
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
          <button class="button button--secondary">Sign in with web3</button>
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
      </main>
      {/* Cf. https://facebookincubator.github.io/infima/docs/components/footer */}
      <footer>
        <div class="lpfooter text--center">
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
