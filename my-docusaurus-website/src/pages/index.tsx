import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import EventList from '../components/EventList';
import { events } from '../data/events';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Discover unique experiences and events">
      <main>
        <div className="container" style={{padding: '2rem'}}>
          <div style={{
            background: 'linear-gradient(90deg, #ff385c 0%, #ffb400 100%)',
            color: '#fff',
            padding: '3rem 1rem',
            borderRadius: '16px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <h1 style={{fontSize: '2.5rem', margin: 0}}>Discover Unique Experiences</h1>
            <p style={{fontSize: '1.25rem', marginTop: '1rem'}}>Book unforgettable activities hosted by locals.</p>
          </div>
          <EventList events={events} />
        </div>
      </main>
    </Layout>
  );
}