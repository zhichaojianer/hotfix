require('NSString,ZLRichtxtInfo,NSURL');
defineClass('NotifyCell', {
    lectureShareViewTapAction: function(gestureRecognizer) {
        var jsonObject = NSString.jsonObjectWithNSString(self.notifyMessage().messageInfo().shareJson());
        var zlRichtxtInfo = ZLRichtxtInfo.getRichtxtInfoWithDict(jsonObject);
        if (!NSString.checkNullNotContainsLineFeedString(jsonObject["contenturl"])) {
            zlRichtxtInfo.setContenturl(NSURL.URLWithString(jsonObject["contenturl"].stringByAddingPercentEscapesUsingEncoding(NSUTF8StringEncoding)));
        } else if (!NSString.checkNullNotContainsLineFeedString(jsonObject["detailUrl"])) {
            zlRichtxtInfo.setContenturl(NSURL.URLWithString(jsonObject["detailUrl"].stringByAddingPercentEscapesUsingEncoding(NSUTF8StringEncoding)));
        }
        self.lectureShareBlock()(zlRichtxtInfo);
    },
});