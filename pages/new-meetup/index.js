import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = () => {
    console.log('hello');
  };
  
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetupPage;