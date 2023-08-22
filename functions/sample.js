
  exports.handler = function(context, event, callback) {
  
  //customerinformation
    let customerinformation = [];

    const mobilenumber="6479498443";
  
    // Generate two "Invalid pin" failures
    if(mobilenumber>0) {
      customerinformation.push({
        name: "Vasavi",
        email: "vasaviseelam@gmail.com",
        mobilenumber : mobilenumber
      });
    }
  
  
    const response = {
      customerinformation: customerinformation
    };
  
    const twilioResponse = new Twilio.Response();
    twilioResponse.appendHeader('Content-Type', 'application/json');
    twilioResponse.setBody(response);
  
    callback(null, twilioResponse);
  };
  
  function generateRandomTimestamp() {
    const now = new Date();
    const randomMinutesAgo = Math.floor(Math.random() * 60);
    now.setMinutes(now.getMinutes() - randomMinutesAgo);
    return now.toISOString();
  }