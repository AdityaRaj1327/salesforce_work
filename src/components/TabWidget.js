'use client'

import { useState } from 'react'
import InfoIcon from './InfoIcon'

const tabContent = {
  'About Me': `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
  
  'Experiences': `I have extensive experience in sales and customer relationship management, specializing in enterprise solutions. Over the past decade, I've helped numerous Fortune 500 companies optimize their sales processes and achieve their business goals.

My expertise includes solution selling, account management, and strategic planning. I'm passionate about building lasting relationships with clients and helping them succeed.`,
  
  'Recommended': `Based on my experience with similar clients, I recommend starting with our Enterprise package which includes advanced analytics and 24/7 support. 

This solution has helped companies increase their sales efficiency by up to 40% within the first year. I'd be happy to schedule a demo to show you how it works.`
}

export default function TabWidget() {
  const [activeTab, setActiveTab] = useState('About Me')
  const tabs = ['About Me', 'Experiences', 'Recommended']

  return (
    <div className="bg-dark-card rounded-2xl p-6 shadow-xl">
      {/* Info Icon */}
      <div className="flex justify-end mb-4">
        <InfoIcon />
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 bg-dark-surface rounded-full p-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${
              activeTab === tab ? 'tab-button-active' : 'tab-button-inactive'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-dark-text leading-relaxed text-sm">
        {tabContent[activeTab].split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
