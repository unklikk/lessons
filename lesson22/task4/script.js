let events = [
    { event: "встреча", time: 10 },
    { event: "урок", time: 14 },
    { event: "концерт", time: 18 }
  ];
  
  let eveningEvents = 0;
  
  function isEvening(time) {
    return time >= 18;
  }
  
  events,forEach((event) {
    if (isEvening(event.time) {
      console.log(`${event.event}: вечернее событие`);
      eveningEvent = eveningEvents + 1
    } else {
      console.log(`${event.event}: дневное событие`);
    }
  });
  
  console.log(`Вечерних событий: ${eveningEvents}`;);