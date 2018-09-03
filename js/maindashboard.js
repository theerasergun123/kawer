var config = {
    apiKey: "AIzaSyB_40cIIxp6VTnuod6ypRSXAYLLKxb5IkA",
    authDomain: "takwiraa.firebaseapp.com",
    databaseURL: "https://takwiraa.firebaseio.com",
    projectId: "takwiraa",
    storageBucket: "takwiraa.appspot.com",
    messagingSenderId: "985837818278"
};
firebase.initializeApp(config);

$(".home").click(function () {
    $(".home").addClass("active");
    $(".dashboard").removeClass("active");
})
$(".dashboard").click(function () {
    $(".dashboard").addClass("active");
    $(".home").removeClass("active");
})
var state = $(".trueLeader").text();

if (state == "Leader") {
    $(".forTeamLeaders").css("display", "Block");
}
else {
    $(".forTeamLeaders").css("display", "none");
}

var user = JSON.parse(localStorage.getItem('user'))
document.getElementById("firstNamedashboard").innerHTML = user.firstname
document.getElementById("LastNamedashboard").innerHTML = user.lastname
document.getElementById("agedashboard").innerHTML = user.age
document.getElementById("phonedashboard").innerHTML = user.phone
document.getElementById("emaildashboard").innerHTML = user.email

document.getElementById("creat-match").addEventListener("submit", submitForm);
var auth = firebase.auth();
var takwira = firebase.database().ref('takwira')



function submitForm(e) {
    e.preventDefault();
    var nameofteam = document.getElementById('nameofteam').value;
    var leadername = document.getElementById('leadername').value;
    var date = document.getElementById('date').value;
    var phone= document.getElementById('phone').value;
    var localisation = document.getElementById('localisation').value;

    savematch(nameofteam, leadername, date, phone, localisation)
}
function savematch(nameofteam, leadername, date, phone, localisation) {
    
                var match = takwira.push();
                match.set({
                    nameofteam:nameofteam, 
                    leadername:leadername, 
                    date:date,
                    phone:phone,
                    localisation:localisation, 
                    

                
                })
            }