require('NSString,NSURL,UIApplication');
defineClass('ZLACameraPlayerViewController', {
    startPlayback: function() {

        var string = NSString.stringWithFormat("%@?playUrl=%@", BabyVideoAddress, self.zlaMediaPlayerInfo().zlaSrc());
        var videoUrl = NSURL.URLWithString(string);
        UIApplication.sharedApplication().openURL(videoUrl);
        self.navigationController().popViewControllerAnimated(YES);
    },
});
