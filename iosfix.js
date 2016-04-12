
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