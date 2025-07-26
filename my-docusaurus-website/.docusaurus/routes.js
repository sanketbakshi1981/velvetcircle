import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '314'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'bb1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '27d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1c6'),
    exact: true
  },
  {
    path: '/events',
    component: ComponentCreator('/events', 'b4b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '088'),
    routes: [
      {
        path: '/docs/events',
        component: ComponentCreator('/docs/events', '5c8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '13c'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '24b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
