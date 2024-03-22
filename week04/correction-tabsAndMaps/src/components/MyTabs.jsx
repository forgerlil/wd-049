import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap';

const MyTabs = () => {
  const lng = 48.17299;
  const lat = 11.54851;

  const allTabs = [
    {
      id: crypto.randomUUID(),
      tabTitle: 'Title 1',
      tabContent: 'Any content 1',
    },
    {
      id: crypto.randomUUID(),
      tabTitle: 'Title 2',
      tabContent: 'Any content 2',
    },
    {
      id: crypto.randomUUID(),
      tabTitle: 'Title 3',
      tabContent: 'Any content 3',
    },
    {
      id: crypto.randomUUID(),
      tabTitle: 'Title 4',
      tabContent: 'Any content 4',
    },
    {
      id: crypto.randomUUID(),
      tabTitle: 'Title 3',
      tabContent: 'Any content 3',
    },
  ];

  return (
    <Tabs defaultIndex={1}>
      <TabList>
        {/* {allTabs.map((tab) => (
          <Tab key={tab.id + '_tab'}>{tab.tabTitle}</Tab>
        ))} */}
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      {/* {allTabs.map((tab) => (
        <TabPanel key={tab.id + '_tab_content'}>
          <h2>{tab.tabContent}</h2>
        </TabPanel>
      ))} */}

      <TabPanel>
        <img
          src='https://m.media-amazon.com/images/I/41+gelS+89L._AC_SY300_SX300_.jpg'
          alt='Rubber duck'
        />
      </TabPanel>
      <TabPanel>
        <MyMap lng={lng} lat={lat} />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
