 function Scroller(scrollId) {
    this.autoScroll = $(scrollId);
    this.iScrollHeight = this.autoScroll.prop('scrollHeight');
    this.iScrollTop = this.autoScroll.prop("scrollTop");
    this.he = this.autoScroll.height();

    var config = JSON.parse(document.querySelector(scrollId).dataset.config);
    console.log(config);
    this.amount = config.amount || 100;
    this.delay = config.delay || 2000;

    var self = this;
    this.timerId = setInterval(function () {
        if(self.iScrollTop+self.he < self.iScrollHeight-20) {
            self.iScrollTop = self.autoScroll.prop("scrollTop");
            self.iScrollTop+=self.amount;
            self.autoScroll.animate(
                {scrollTop: self.iScrollTop},
                "slow",
                "linear");
        }
        else {
            self.iScrollTop-=200;
            self.autoScroll.animate(
                {scrollTop: "0px"},
                "fast",
                "swing");
        }
    } , self.delay);
}

(function( $ ){
   $.fn.scroller = function() {
        var element = this;
        console.log(element.selector);
        this.AutoScroll = $(element.selector);
        this.iScrollHeight = this.AutoScroll.prop('scrollHeight');
        this.iScrollTop = this.AutoScroll.prop("scrollTop");
        this.he = this.AutoScroll.height();

        var self = this;
        this.timerId = setInterval(function () {
            if(self.iScrollTop+self.he < self.iScrollHeight-20)
            {
                self.iScrollTop = self.AutoScroll.prop("scrollTop");
                self.iScrollTop+=100;
                self.AutoScroll.animate(
                    {scrollTop: self.iScrollTop},
                    "slow",
                    "linear");
            }
            else
            {
                self.iScrollTop-=200;
                self.AutoScroll.animate(
                    {scrollTop: "0px"},
                    "fast",
                    "swing");
            }
        }, 2000);
    };
})( jQuery );