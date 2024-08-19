/*

Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/



// function gettime(){
//     var d=new Date()
//     //  var currtime=d.getTime();
//     var currtime=d.toLocaleTimeString();
//     console.log(currtime);

    
// }

// setInterval(gettime,1000);


//-----------------------------------------------------------------------------------------

const clock = () => {
    const time = new Date();
    const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
    const minutes =
      time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
    const seconds =
      time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
    console.log(`${hours}:${minutes}:${seconds}`);
  };
  
  setInterval(clock, 1000);
