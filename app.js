$("#run").click(function () {
    var n = $("#input-number").val();
    if(n % 3 === 0 && n % 5 === 0) {
        $("#output").text("FizzBuzz XXX Edited");
    }
    else if(n % 3 === 0) {
        $("#output").text("Fizz");
    }
    else if(n % 5 === 0) {
        $("#output").text("Buzz");
    }
});