function setData() {
    try{
        //Initialize Elements
    // var db = firebase.database();
    // var mName = document.getElementById("name");
    // var mCollege = document.getElementById("college");
    // var mNumber = document.getElementById("number");
    // var mMnitians = document.getElementById("mnitians");

    // //Store value in string
    // var name = mName.value;
    // var college = mCollege.value;
    // var number = mNumber.value;
    // var mnitians = mMnitians.value;

    // //Some hardcoded data
    // //Todo-
    // //1) Add real festid
    // var festid = "fest@1234"
    
    // // var uniqueId = "uniqueId";
    // var uniqueId = "waiting for id";
    
    var user = firebase.auth().currentUser;
        window.alert(user.uid);

    // uniqueId = profile.getId();
    //         var userDetails = {
    //             name: name,
    //             college: college,
    //             phone: number,
    //             mnitians: mnitians,
    //             festid: festid
    //         };
        
    // db.ref('users/' + uniqueId).set(userDetails);
    // gapi.load('auth2', function() {
    //     auth2 = gapi.auth2.init({
    //       client_id: '563054154548-u037bg5kvu45gegtoofmtr0c6ioql1ft.apps.googleusercontent.com',
    //       fetch_basic_profile: false,
    //       scope: 'profile'
    //     });

    //     if (auth2.isSignedIn.get()) {
    //         var profile = auth2.currentUser.get().getBasicProfile();
    //         console.log('ID: ' + profile.getId());
    //         console.log('Full Name: ' + profile.getName());
    //         console.log('Given Name: ' + profile.getGivenName());
    //         console.log('Family Name: ' + profile.getFamilyName());
    //         console.log('Image URL: ' + profile.getImageUrl());
    //         console.log('Email: ' + profile.getEmail());
            
    //         // location.href = './register2.html';
    //     }else{
    //         window.alert("not logged in");
    //     }

    // });
    }catch(error){
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        window.alert(errorMessage);
        // ...
    }
}