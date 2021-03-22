import React from 'react';
import { SEO } from 'gatsby-plugin-seo';

import Navbar from '@/components/shared/navbar';
import Hero from '../components/core/hero/';
const IndexPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="TvůjDezert"
        description="Aplikace TvůjDezert se zaměřuje na podporu menších kaváren a cukráren. V aplikaci máš možnost najít nové zajímavé podniky a ušetřit díky výhodným voucherům."
        pagePath="/"
        htmlLanguage="cs"
      />
      <Navbar />
      <Hero />
    </div>
  );
};

export default IndexPage;
