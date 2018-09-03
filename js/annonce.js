var config = {
    apiKey: "AIzaSyB_40cIIxp6VTnuod6ypRSXAYLLKxb5IkA",
    authDomain: "takwiraa.firebaseapp.com",
    databaseURL: "https://takwiraa.firebaseio.com",
    projectId: "takwiraa",
    storageBucket: "takwiraa.appspot.com",
    messagingSenderId: "985837818278"
};
firebase.initializeApp(config);



database=firebase.database()
var ref=database.ref('takwira');
// ref.on('value',gotdata);


function getData(){

    ref.once("value").then(function(snapshot){
        snapshot.forEach(data)
    })
}

x=1;

function data (singleData){
   
    var takwira = singleData.val();
    console.log(takwira.leadername );
    $("#takwirat").append(`
    <div class="col-md-6 col-sm-12 blockss">
            <form class="teams">
                <label class="textt">Date</label> <label class="true">${takwira.date}</label>
                <br> <br>
                <label class="textt">Leader</label> <label class="true">${takwira.leadername}</label>
                <br> <br>
                <label class="textt">Localisation</label> <label class="true">${takwira.localisation}</label>
                <br> <br>
                <label class="textt">Name Of The Team</label> <label class="true">${takwira.nameofteam}</label>
                <br> <br>
                <label class="textt">Phone Number</label> <label class="true">${takwira.phone}</label>
            </form>
        </div>`)
    

    
}

getData()


// function gotdata(data){
//     console.log(data.val());
    
// }
