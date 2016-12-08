require('ZLDefaults');
defineClass('ZLAboutUsViewController', {
    verisonUpdate: function() {

        ZLDefaults.sharedInstance().setRedPointShow(NO);

        self.showVersionUpdateAlertView();

    },
});
