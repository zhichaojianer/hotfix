require('NSURL,UIApplication');
defineClass('ZLACameraPlayerViewController', {
    startPlayback: function() {
        var string = "http://imzhiliao.com/vedio.html";
        string = string.stringByAppendingString(self.zlaMediaPlayerInfo().zlaSrc());
        var videoUrl = NSURL.URLWithString(string);
        UIApplication.sharedApplication().openURL(videoUrl);
        self.navigationController().popViewControllerAnimated(YES);
    },
});
