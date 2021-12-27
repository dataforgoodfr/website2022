import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{backgroundImage:`url(${useBaseUrl('img/headerdfg.jpg')})`,backgroundSize:"cover",backgroundPosition: "bottom", minHeight:"calc(100vh - 60px)",zIndex:-1}}
    >
      <div className="container" >
        <img src={`${useBaseUrl('img/logo-dfg-new.png')}`} style={{width:150}}/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button-home"
            to="/docs">
            Rejoindre la communauté
          </Link>
          <Link
            className="button button--secondary button--lg button-home"
            to="/docs">
            Proposer un projet
          </Link>
          <Link
            className="button button--secondary button--lg button-home"
            to="/docs">
            Découvrir l'association
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Data For Good - le numérique pour l'intérêt général">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
