var client_id = ''  //enter your client ID     

var request = require("request");
var poll = null;
var data = null;


//this generates a code for user to enter authenticate from a 2nd device
function generate_device_code() {

  var options = { 
    method: 'POST',
    url: 'https://accounts.artik.cloud/device/code',
    form: {
      "client_id": client_id
    } 
  };

  request(options, function (error, response, body) {

    if(error) throw new Error(error);

    //{"device_code":"8d25dddc-ef39-4403-8959-e49be487f7dd","user_code":"QKVF-HLJT","verification_url":"https://artik.cloud/go","expires_in":1800,"interval":5}
    data = JSON.parse(body);

    if(data.error) {
      console.log(data.error);
      return;
    }

    console.log("\nGo to `https://artik.cloud/go` and enter code: " + data.user_code);
    //poll server to check if code entered by user
    poll = setInterval(function(){
          check_code_entered();
    }, data.interval * 1000 + 500)


  });

}

//poll and checks whether the code has been entered by user
function check_code_entered() {

  var options = { 
    method: 'POST',
    url: 'https://accounts.artik.cloud/token',
    form: { 
       client_id: client_id,
       grant_type: 'device_code',
       code: data.device_code 
     } 
  };

  request(options, function (error, response, body) {

    console.log("> Waiting to enter code, checking again in 5 secs ...");


    var data = JSON.parse(body);

    if(data.access_token) {
      console.log("\nSuccessful!  Code has been entered and received access token: %s", data.access_token);
      clearInterval(poll);
      
      if (error) throw new Error(error);

      console.log(body);
      console.log("\rYou may revoke your token by visiting https://my.artik.cloud/profile")
      console.log("or by using https://accounts.artik.cloud/revokeToken API call");
      
    }

  });

}

generate_device_code();


