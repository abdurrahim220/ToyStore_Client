import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ReactTabCard from './ReactTabCard';

const ReactTab = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel Group");

    useEffect(() => {
        fetch(`https://toy-store-server-delta.vercel.app/allToysByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='my-8'>

            <h2 className='text-center text-3xl font-bold mb-7'>Category By <span className='text-yellow-400'>Group Toys</span></h2>

            <div className='center flex justify-center'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleTabClick("Marvel Group")}
                            className={`tab  tab2 remote ${activeTab == "Marvel Group" ? " bg-black text-white" : ""
                                }`}>Marvel Group</Tab>
                        <Tab onClick={() => handleTabClick("Caption America")}
                            className={`tab  tab2 remote ${activeTab == "Caption America" ? " bg-black text-white" : ""
                                }`}>Captain America</Tab>
                        <Tab onClick={() => handleTabClick("Iron Man")}
                            className={`tab  tab2 remote ${activeTab == "Iron Man" ? " bg-black text-white" : ""
                                }`}>Iron Man</Tab>

                    </TabList>

                    <TabPanel>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {
                                toys.map(toy => <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {
                                toys.map(toy => <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {
                                toys.map(toy => <ReactTabCard key={toy._id} toy={toy}></ReactTabCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReactTab;