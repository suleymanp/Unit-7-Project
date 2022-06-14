$("button").click(function() {
    let predict = $(".fortune").val();
    $(".fortune-display").append(predict + " is ");
    let Fortune = $(".Fortune").val();
    $(".fortune-display").append(Fortune + " years old and in about 28 years the sport that " + predict + " will play is ");
    let fortune2 = $(".fortune2").val();
    $(".fortune-display").append(fortune2 + ". ");
    let fortune3 = $(".fortune3").val();
    $(".fortune-display").append("The " + fortune2 + " team that " + predict + " is in, is called " + fortune3 + ".");
});