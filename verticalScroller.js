 function Scroller(scrollId) {
    this.AutoScroll = scrollId;
    this.iScrollHeight = $(this.AutoScroll).prop('scrollHeight');
    this.iScrollTop = $(this.AutoScroll).prop("scrollTop");
    this.he = $(this.AutoScroll).height();
    // console.log(this.AutoScroll);
    // console.log(this.iScrollHeight);
    // console.log(this.iScrollTop);
    var self = this;
    this.id = setInterval(function () {
        if(self.iScrollTop+self.he < self.iScrollHeight-20)
        {
            // console.log(self.iScrollTop + " " + self.AutoScroll);
            self.iScrollTop = $(self.AutoScroll).prop("scrollTop");
            self.iScrollTop+=100;
            // $(self.AutoScroll).prop('scrollTop',self.iScrollTop);
            $(self.AutoScroll).animate(
                {scrollTop: self.iScrollTop},
                "slow",
                "linear");
        }
        else
        {
            self.iScrollTop-=200;
            $(self.AutoScroll).animate(
                {scrollTop: "0px"},
                "fast",
                "swing");
        }
    } , 2000);
}

(function( $ ){
   $.fn.scroller = function() {
        var element = this;
        console.log(element.selector);
        this.AutoScroll = element.selector;
        this.iScrollHeight = $(this.AutoScroll).prop('scrollHeight');
        this.iScrollTop = $(this.AutoScroll).prop("scrollTop");
        this.he = $(this.AutoScroll).height();

        var self = this;
        this.id = setInterval(function () {
            if(self.iScrollTop+self.he < self.iScrollHeight-20)
            {
                self.iScrollTop = $(self.AutoScroll).prop("scrollTop");
                self.iScrollTop+=100;
                $(self.AutoScroll).animate(
                    {scrollTop: self.iScrollTop},
                    "slow",
                    "linear");
            }
            else
            {
                self.iScrollTop-=200;
                $(self.AutoScroll).animate(
                    {scrollTop: "0px"},
                    "fast",
                    "swing");
            }
        } , 2000);
    };
})( jQuery );