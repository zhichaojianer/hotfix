require('ZLDefaults');
defineClass('AppDelegate', {
    checkVersion: function() {
        ZLDefaults.sharedInstance().setRedPointShow(NO);

        _zlHomeViewModel.checkVersionWithComplete(block(function() {

            if (ZLDefaults.sharedInstance().redPointShow()) {
                _tabBarVC.tabBar().showRedPointOnItemIndex(3);
            } else {
                _tabBarVC.tabBar().hideRedPointOnItemIndex(3);
            }
            self.showVersionUpdateAlertView();
        }));
    },
});
