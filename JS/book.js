$(document).ready(function () {
    $("#button").click(function () {
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var myDate = document.getElementById("date").value
        var time = document.getElementById("time").value

        if (name == "" || email == "" || myDate == "" || time == "") {
            alert("Please fill in the details")
        } else {
            alert("Hi " + name + "Thank you for booking with us. You have book on " + myDate + "" + "at" + time)
        }
    })
})







