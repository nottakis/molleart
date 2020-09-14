
import React from 'react';
import styles from './styles.module.scss';

import useBaseUrl from '@docusaurus/useBaseUrl';

import Buy from './Dapphero/Buy'
import Gift from './Dapphero/Gift'
import Scribe from './Dapphero/Scribe'
import Sell from './Dapphero/Sell'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function WidgetContent() {
    return (
      <div>
        <Tabs 
          forceRenderTabPanel
          selectedTabClassName="tabs__item--active">
          <TabList className="tabs tabs--block">
            <Tab className="tabs__item">Scribe</Tab>
            <Tab className="tabs__item">Sell</Tab>
            <Tab className="tabs__item">Buy</Tab>
            <Tab className="tabs__item">Gift</Tab>
          </TabList>
          <TabPanel>
            <Scribe/>
          </TabPanel>
          <TabPanel>
            <Sell/>
          </TabPanel>
          <TabPanel>
            <Buy/>
          </TabPanel>
          <TabPanel>
            <Gift/>
          </TabPanel>
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

export default Widget;
