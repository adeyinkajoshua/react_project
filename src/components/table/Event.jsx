  

const EventTable = () => {
  
  const eventData = [
    { sn: 1, 
      date: '2023-11-21', 
    eventName: 'Event 1', 
    eventDescription: 'Description 1', 
    location: 'Location 1' },

    { sn: 2,
       date: '2023-11-22',
     eventName: 'Event 2', 
     eventDescription: 'Description 2',
      location: 'Location 2' },

    { sn: 3, 
      date: '2023-11-23',
     eventName: 'Event 3', 
     eventDescription: 'Description 3',
      location: 'Location 3' },

  ];

  return (
    <div className="container mt-5">
      <h2>Event Table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Date</th>
            <th scope="col">Event Name</th>
            <th scope="col">Event Description</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((event, i) => (
            <tr key={i}>
              <th scope="row">{event.sn}</th>
              <td>{event.date}</td>
              <td>{event.eventName}</td>
              <td>{event.eventDescription}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
