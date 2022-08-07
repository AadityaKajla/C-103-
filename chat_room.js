function getData(){firebase.data().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key; Room_names = childKey;0 });});}
getData();
function logout(){
    window.location= "index.html";
}