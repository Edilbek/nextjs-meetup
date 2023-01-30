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

const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// export const getStaticProps = async () => {
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1,
//   };
// }

export default HomePage;