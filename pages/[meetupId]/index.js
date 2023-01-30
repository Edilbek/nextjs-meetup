import React from 'react'

import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails 
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      title='First meetup'
      address='Some Street 5'
      description='This is a first meetup'
    />
  )
}

export const getStaticPaths  = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      },
    ]
  }
}

export const getStaticProps  = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        title: 'First meetup',
        address: 'Some Street 5',
        description: 'This is a first meetup',
      }
    }
  }
}

export default MeetupDetailsPage;