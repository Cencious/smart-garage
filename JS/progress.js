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

    $('input[name="repair"]:checked').each(function () {
      completedParts.push(this.value);
    });

    if (carPerson == "" || plate == "") {
      alert("Please fill in car details");
    } else {
      $(".results").text(
        `${carPerson}  has been successfully notified that the ${completedParts} has been repaired.`
      );
    }
  });

  $("#completion").click(function () {
    let carPerson = $("#car-owner").val();
    let plate = $("#plate").val();

    let engine = $("#engine").val();
    let fuelSystem = $("#fuel").val();
    let exhaustSystem = $("#exhaust").val();
    let coolingSystem = $("#cooling").val();
    let lubricationSystem = $("#lubrication").val();
    let electricalSystem = $("#electrical").val();
    let transmission = $("#transmission").val();
    let chassis = $("#chassis").val();
    let completedParts = [];

    $('input[name="repair"]:checked').each(function () {
      completedParts.push(this.value);
    });
    let isComplete = $("#isComplete").val();

    let repairPrice = 0;
    completedParts.forEach((completedPart) => {
      if (completedPart == "engine") {
        repairPrice += 50000;
      } else if (completedPart == "fuel-system") {
        repairPrice += 18000;
      } else if (completedPart == "exhaust-system") {
        repairPrice += 22000;
      } else if (completedPart == "cooling-system") {
        repairPrice += 27000;
      } else if (completedPart == "lubrication-system") {
        repairPrice += 12000;
      } else if (completedPart == "electrical-system") {
        repairPrice += 55000;
      } else if (completedPart == "transmission") {
        repairPrice += 35000;
      } else if (completedPart == "chassis") {
        repairPrice += 25000;
      }
    });

    if (isComplete == "no") {
      alert("repair incomplete");
    } else if (carPerson == "" || plate == "") {
      alert("please fill in car details");
    } else {
      $(".forms").hide();
      $(".results").text(
        `${carPerson} successfully notified that the repair is complete`
      );
      $(".price").text("Their total cost is Ksh" + repairPrice);
    }
  });
});
