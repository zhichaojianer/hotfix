require('PublicMethod,UIBarButtonItem,ServiceManager');
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);

        var backButton = PublicMethod.createNavBackButtonWithTitle(NSLocalizedString("返回", null));
        backButton.addTarget_action_forControlEvents(self, @selector(backBarButtonClicked: ), UIControlEventTouchUpInside);
        self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithCustomView(backButton));

        self.ui_tableView().setDelegate(self);

    },
});