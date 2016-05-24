
defineClass('CreditStoreViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);
        self.webView().setDelegate(self);
        self.navigationController().setNavigationBarHidden_animated(YES, NO);
    },
    viewWillDisappear: function(animated) {
        self.super().viewWillDisappear(YES);
        self.webView().setDelegate(null);
        self.navigationController().setNavigationBarHidden_animated(NO, NO);
    },
});

require('ServiceManager');
defineClass('ZLACameraPlayerViewController', {
    getPlayAddressRequestWithDeviceId: function(zlaDeviceId) {
        ServiceManager.getPlayAddressWithDeviceId_success_failure(zlaDeviceId, block('ZLAMediaPlayerInfo*', function(zlaMediaPlayerInfo) {
                self.ui_offlineImageView().setHidden(YES);
                self.setZlaMediaPlayerInfo(zlaMediaPlayerInfo);
                self.startPlayback();
            } else {
                self.ui_activeView().stopAnimating();
                self.ui_activeView().setHidden(YES);
                self.ui_networkFailureLabel().setHidden(NO);
                self.ui_networkFailureLabel().setText("设备已离线");
                self.ui_offlineImageView().setHidden(NO);
            }
        }), block('NSString*', function(failureMsg) {
            self.ui_activeView().stopAnimating();
            self.ui_activeView().setHidden(YES);
            self.ui_networkFailureLabel().setHidden(NO);
            if (failureMsg == null) {
                self.ui_networkFailureLabel().setText("网络连接失败");
            } else {
                self.ui_networkFailureLabel().setText(failureMsg);
            }
            self.ui_networkFailureLabel().setText(failureMsg);
            self.ui_offlineImageView().setHidden(NO);
        }));
},
});