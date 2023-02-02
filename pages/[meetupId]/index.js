import { MongoClient, ObjectId } from 'mongodb';

import React, { Fragment } from 'react'
import Head from 'next/head';

import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  return <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta
        name='description'
        content={props.meetupData.description}
      />
    </Head>

    <MeetupDetails 
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  </Fragment>
}

export const getStaticPaths  = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://ediltalantbekov:parol123@cluster1.ki1gqa6.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() }
    }))
  }
}

export const getStaticProps  = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

   const client = await MongoClient.connect(
    'mongodb+srv://ediltalantbekov:parol123@cluster1.ki1gqa6.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      }
    }
  }
}

export default MeetupDetailsPage;