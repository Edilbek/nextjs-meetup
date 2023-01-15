import React from 'react'

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first demo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    address: 'Some address 5',
    description: 'Some description'
  },
  {
    id: 'm2',
    title: 'A second demo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    address: 'Some address 5',
    description: 'Some description'
  },
  {
    id: 'm3',
    title: 'A third demo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    address: 'Some address 5',
    description: 'Some description'
  }
]

const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage;