





$(document).ready(function () {
    $("#progress").click(function () {

        let carPerson = $("#car-owner").val();
        let plate = $("#plate").val();

        let engine = $("#engine").val();
        let fuelSystem = $("#fuel").val();
        let exhaustSystem = $("#exhaust").val();
        let coolingSystem = $("#cooling").val();
        let lubricationSystem = $("#lubrication").val();
        let electricalSystem = $("#electriacal").val();
        let transmission = $("#transmission").val();
        let chassis = $("#chassis").val();
        let completedParts = [];

        $('input[name="repair"]:checked').each(function() {
            completedParts.push(this.value);
            });

        
        
    });

    $("#completion").click(function() {

        let isComplete = $("#isComplete").val();

        if (isComplete == "yes") {
           alert("user notified")
        }
        else {
            alert("repair incomplete")
        }        
    });
    
    
});
