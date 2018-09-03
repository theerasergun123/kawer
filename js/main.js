var config = {
    apiKey: "AIzaSyB_40cIIxp6VTnuod6ypRSXAYLLKxb5IkA",
    authDomain: "takwiraa.firebaseapp.com",
    databaseURL: "https://takwiraa.firebaseio.com",
    projectId: "takwiraa",
    storageBucket: "takwiraa.appspot.com",
    messagingSenderId: "985837818278"
};
firebase.initializeApp(config);

document.getElementById("sign-up-form").addEventListener("submit", submitForm);


var auth = firebase.auth();

var email = document.getElementById('username');
var pass = document.getElementById('pas');
var formulaire = document.getElementById('log');
var SignIn = document.getElementById('login');


function submitForm(e) {
    e.preventDefault();
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phoneNumber").value;

    saveuser(firstname, lastname, age, email, password, phone)
}


var existe = 0;
var users = firebase.database().ref('users')

function saveuser(firstname, lastname, age, email, password, phone) {
    users.orderByChild("email").equalTo(document.getElementById('email').value).once("value", function (snap) {
            var exist = (snap.val()!== null );
            if(!exist){
                var user = users.push();
                user.set({
                    firstname: firstname,
                    lastname: lastname,
                    age: age,
                    email: email,
                    password: password,
                    phone: phone
                });
                alert("welcom")
            }
            else{
                alert("compte exist");
            }
        })
    }

               













SignIn.addEventListener('click', e => {
    e.preventDefault();
    users.orderByChild("email").equalTo(document.getElementById('username').value).on("value", function (snap) {
        snap.forEach(function (snapshot) {
            var data = snapshot.val();
            //console.log(data["password"]);
            if ((data["email"] == document.getElementById('username').value) && (data["password"] == document.getElementById('pas').value)) {

                alert("you are successfully login we will redirect  you in dashboard");
                localStorage.setItem('user', JSON.stringify(data))
                $(".dashboard").css("display", "block");
                window.location.href = "dashboard.html";

            } else {
                alert("oops ther is something wrong please try agin");
            }
        }
        );
    }
    );
})






// Get the modal
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {

        modal2.style.display = 'none';
    }
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
}
$(".home").click(function(){
$(".dashboard").removeClass("active");
$(".home").addClass("active");

})
$(".dashboard").click(function(){
    $(".home").removeClass("active");
    $(".dashboard").addClass("active");
    
    })