require('NSURL,UIApplication');
defineClass('ZLACameraPlayerViewController', {
    startPlayback: function() {
        var string = "http://imzhiliao.com/vedio.html";
        var zlaSrc = self.zlaMediaPlayerInfo().zlaSrc();
        string = string.stringByAppendingString(zlaSrc);
        var videoUrl = NSURL.URLWithString(string);
        UIApplication.sharedApplication().openURL(videoUrl);
        self.navigationController().popViewControllerAnimated(YES);
    },
});
