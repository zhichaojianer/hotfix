require('PublicMethod,UIBarButtonItem,ServiceManager');
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);

        var backButton = PublicMethod.createNavBackButtonWithTitle(NSLocalizedString("返回", null));
        backButton.addTarget_action_forControlEvents(self, backBarButtonClicked:, 6);
        self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithCustomView(backButton));

        self.ui__tableView().setDelegate(self);

        ServiceManager.getAllChildWithClassId_Success_failure(0, block('NSArray*', function(childArray) {

        }), block(function() {

        }));

    },
});