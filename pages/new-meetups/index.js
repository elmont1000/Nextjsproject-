import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetup = () => {
  const AddNewMeetup = (dataPassed) => {
    console.log(dataPassed);
  };

  return <NewMeetupForm onAddMeetup={AddNewMeetup} />;
};

export default newMeetup;
