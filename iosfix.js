require('ZLBusinessAdjustmentInstance,AppDelegate');
defineClass('ZLLaunchPageViewController', {
    touchADButton: function(sender) {
        if (__url == null) {
            return;
        }

        ZLBusinessAdjustmentInstance.sharedInstance().taskTypeProcessingMethod_rootViewController(__url, AppDelegate.getAppDelegate().window().rootViewController());

        self.removeViewFromSuperview();
    },
});
