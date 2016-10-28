require('ZLBusinessAdjustmentInstance,AppDelegate');
defineClass('ZLLaunchPageViewController', {
    touchADButton: function(sender) {
        if (self.url() == null) {
            return;
        }

        ZLBusinessAdjustmentInstance.sharedInstance().taskTypeProcessingMethod_rootViewController(self.url(), AppDelegate.getAppDelegate().window().rootViewController());

        self.removeViewFromSuperview();
    },
});
