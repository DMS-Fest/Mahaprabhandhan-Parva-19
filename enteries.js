function showLoader() {
    document.getElementById("loader-container").className = "show";
}

function hideLoader() {
    document.getElementById("loader-container").className = "hide";
}

function setData() {
    showLoader();
    try {
        //Initialize Elements
        var user = firebase.auth().currentUser;
        var db = firebase.database();
        var mName = document.getElementById("name");
        var mCollege = document.getElementById("college");
        var mNumber = document.getElementById("number");
        var mMnitians = document.getElementById("mnitians");
        var festid = "sad";
        var idRef = db.ref("festid");
        // var userRef = db.ref('users/unique');
        var userRef = db.ref('users/' + user.uid);

        //Store value in string
        var name = mName.value;
        var college = mCollege.value;
        var number = mNumber.value;
        var mnitians = mMnitians.value;

        var userDetails = {
            name: name,
            college: college,
            phone: number,
            mnitians: mnitians,
            festid: festid
        };


        createAccount(idRef, userRef, userDetails);

        // var uniqueId = "uniqueId";
        // location.href = './register2.html';
    } catch (error) {
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

function createAccount(idRef, userRef, userDetails) {
    var x = 0;
    firebase.database().ref('/festid').transaction(function (cv) {
        console.log(cv);
        // Check if the result is NOT NULL:
        x = cv;
        return (cv || 0) + 1;
    }, function (error, committed, snapshot) {
        if (error) {
            console.log("error in transaction");
        } else if (!committed) {
            console.log("transaction not committed");
        } else {
            console.log("Transaction Committed");
        }
    }, true).then(function () {
        var id = "MPP" + x;
        console.log(id);
        userDetails['festid'] = id;

        userRef.set(userDetails).then(
            function () {
                //             document.getElementById("go-back-button").className = "show";
                hideLoader();
                location.href = './register2.html'
            }
        ).catch(
            function (error) {
                window.alert(error.message)
            }
        );
    });
}



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

    //     }else{
    //         window.alert("not logged in");
    //     }

    // });