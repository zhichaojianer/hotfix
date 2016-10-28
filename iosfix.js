require('ZLBusinessAdjustmentInstance,AppDelegate');
defineClass('ZLLaunchPageViewController', {
    touchADButton: function(sender) {
        if (_url == null) {
            return;
        }

        ZLBusinessAdjustmentInstance.sharedInstance().taskTypeProcessingMethod_rootViewController(_url, AppDelegate.getAppDelegate().window().rootViewController());

        self.removeViewFromSuperview();
    },
});
