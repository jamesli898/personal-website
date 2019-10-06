import React from 'react';
import ExperienceTile from './ExperienceTile';

const projects = [
  {
  experiencedate: 'Current',
  experienceheader: 'SportVue',
  experiencedescription: 'Building an ice hockey earpiece to track a player’s head orientation and a complementary mobile app that will allow players to track their metrics during games and practices',
  experiencetoolsheader: 'Services/Tools Utilized',
  experiencetools: 'Arduino, Fusion 360, Python', 
  },
  {
  experiencedate: 'Current',
  experienceheader: 'CodeBase',
  experiencedescription: 'Working as a software developer for a student agency that supports 15+ industry-leading clients. Currently building a personal website and will be building a website for EthiCAL Apparel.',
  experiencetoolsheader: 'Services/Tools Utilized',
  experiencetools: 'p5.js, React.js', 
  },
  {
  experiencedate: 'Sep 2015 - Dec 2018',
  experienceheader: 'bestmobilecoins.com',
  experiencedescription: 'E-commerce store that sold Madden Mobile and NBA Live Mobile coins. I farmed coins, used Gusto for accounting , advertised on Google Adwords and YouTube, and led a small team of freelancers for website maintenance. Received 11,501 orders amounting to $239,038 in revenue.',
  experiencetoolsheader: 'Services/Tools Utilized',
  experiencetools: 'Gusto, Upwork, Shopify, iOS AutoTouch, Android OS HiroMacro, Google Adwords, YouTube Sponsorships',
  },
  {
  experiencedate: 'Aug 2017 - Jun 2019',
  experienceheader: 'Scientific Researcher',
  experiencedescription: 'Thermally modeled heat-trapping roofing patterns and verified results with physical experimentation, resulting in roofing surfaces that can decrease the heating load and energy usage of buildings. Won first place in category at the Virginia State Science and Engineering Fair.',
  experiencetoolsheader: 'Services/Tools Utilized',
  experiencetools: 'ANSYS Meshing, ANSYS Fluent, CFD Post, Vernier LabQuest 2',
  },
];

class Experience extends React.Component {
  render() {
    return (
      <div className = 'Experience-section'>
        {projects.map((item) => (<ExperienceTile {...item}/>))}
      </div>
      //<Modal {...person} title='Modal heading' animation={false} />
      //is equal to
      //<Modal name={person.name} age={person.age} title='Modal heading' animation={false} />
    );
  }
}

export default Experience;
