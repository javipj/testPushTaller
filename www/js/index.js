/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDAFw6M2TqHuobL2HYqK7rQof5OoZBBPAI",
	    authDomain: "test-88454.firebaseapp.com",
	    databaseURL: "https://test-88454.firebaseio.com",
	    projectId: "test-88454",
	    storageBucket: "test-88454.appspot.com",
	    messagingSenderId: "346580135752"
	  };

function testfb(){





FCMPlugin.onTokenRefresh(function(token){
    firebase.database().ref("tokensfb").push({registrationId: token});
    alert( token );
});


FCMPlugin.getToken(function(token){
    firebase.database().ref("tokensfb").push({registrationId: token});
    alert(token);
});
FCMPlugin.subscribeToTopic('topicExample');

FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
      //Notification was received on device tray and tapped by the user.
      alert( JSON.stringify(data) +"tapped");
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      alert( JSON.stringify(data) +"foreground");
    }
});





}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

  	firebase.initializeApp(config);

	testfb();


    }

};
