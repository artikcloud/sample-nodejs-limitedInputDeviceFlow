# Sample using Limited Input (device flow) authentication 

This sample demonstrates the ARTIK cloud services Limited Input (device flow) authentication. This flow allows a user to use a secondary device (e.g. mobile phone) to complete authentication on a device with limited input (e.g. no keyboard). In this example, a console application will authenticate when the user authenticates remotely with a phone (or another computer) via the web.

**Prerequisites**

* node version >= 9.8.0
* npm version >= 5.8.1

Check your version by typing:

```
%> node --version
v9.8.0
%> npm --version
v5.8.1
```

### Setup / Installation

You will first need to **create an application** by visiting https://developer.artik.cloud.   

1. Add any required permission scope or device types to the application (optional). In this sample, we will not request any additional permissions.
2. Set the authentication type to "Limited Input" (required).
3. Note the application`client_id` and `client_secret` which will be required later (required).

If you need help with any of the above steps, read the [application guide](https://developer.artik.cloud/documentation/getting-started/applications.html).

### **Code setup**

1. Edit the `device-flow.js` from this root project folder and enter your `client_id` you retrieved after creating your application.

```
var client_id      = 'your client ID here'           
```

2. Install dependencies for the project by typing:

```
%> npm install
```

###Run sample  

Run the script via to start `node limited_device.js`

```
%> node limited_device.js
```

If running correctly, it will display a code for user to enter at the link `https://artik.cloud/go`, and will wait until user completes this step.

```
Go to https://artik.cloud/go and enter code: RCRS-QBKF

> Waiting to enter code, checking again in 5 secs ...
> Waiting to enter code, checking again in 5 secs ...
```

Using the browser (or any secondary device, e.g. mobile phone), go the the above link to login, enter code, and grant any permissions requested. Upon completion of entering the code, the running script earlier will acknowledge success.

```
> ...
> Waiting to enter code, checking again in 5 secs ...
> Waiting to enter code, checking again in 5 secs ...

Successful!  Code has been entered and received access token: 
abcdef012345678901234567890abcdef

You may revoke your token by visiting https://my.artik.cloud/profile
or by using https://accounts.artik.cloud/revokeToken API call
```

License and Copyright
---------------------

Licensed under the Apache License. See [LICENSE](LICENSE).

Copyright (c) 2018 Samsung Electronics Co., Ltd.
