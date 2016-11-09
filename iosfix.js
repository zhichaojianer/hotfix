require('NSURLRequest,NSURL');
defineClass('CreditWebViewController', {
    initWithUrl: function(url) {
        self = self.super().init();

        var array = url.componentsSeparatedByString("&token=");
        if (array.count() == 3) {
            url = array.objectAtIndex(0).stringByAppendingString("&token=");
            url = url.stringByAppendingString(array.objectAtIndex(2));
        }
        self.setRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(url)));

        return self;
    },
});
