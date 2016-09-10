var iScrollHeight = $('#AutoScroll').prop('scrollHeight');
    var iScrollTop = $("#AutoScroll").prop("scrollTop");
    var he = $("#AutoScroll").height();
    console.log(iScrollHeight);
    console.log(iScrollTop);
    var id = setInterval(scrollBar , 2000);
    function scrollBar() {
        if(iScrollTop+he < iScrollHeight-20)
        {
            iScrollTop = $("#AutoScroll").prop("scrollTop");
            iScrollTop+=100;
            // $("#AutoScroll").prop('scrollTop',iScrollTop);
            $("#AutoScroll").animate(
                {scrollTop: iScrollTop},
                "slow",
                "linear");
        }
        else
        {
            iScrollTop-=200;
            $("#AutoScroll").animate(
                {scrollTop: "0px"},
                "fast",
                "swing");
        }
    }