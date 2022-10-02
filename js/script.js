
    var count = 1;
    var $bloks = [ $(), $("#first"), $("#second"), $("#third"), $("#four"), $("#fifth"), $("#six"), $('#seven'), $('#eight'), $('#nine')];
    var count_for_theme =0;
$(document).ready(function(){
    $("#next").on("click", function() {
        ++count;
        $("#back").css("display", "block");
        $bloks[count].css("display", "block");
        $bloks[count-1].css("display", "none");
        console.log(count);
        if(count == ($bloks.length-2)){
            $("#next").css("display", "none");
        }});
        //var count_for_back = 1;
        $("#back").on("click", function() {
            --count;
            $("#next").css("display", "block");
            $bloks[count].css("display", "block");
            $bloks[count+1].css("display", "none");
            console.log(count);
            $('#nine').css("display", "none");
            $("#buble").css("display", "block");
                    $(".info").css("margin-top", "-5%");
            if(count == 1){
                $("#back").css("display", "none");
                console.log(count);
            }});
            $("#who-it").on("click", function() {
                $("#buble").css("display", "none");
                $(".info").css("margin-top", "-10%");
                $("#superhero-img").css("top", "35%");
                $('#nine').css("display", "block");
                $bloks[$bloks.length-2].css("display", "none");
            });
        
})