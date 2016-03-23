require('PublicMethod,UIBarButtonItem,ServiceManager');
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);

        self.setTitle("接送助手");

        var backButton = PublicMethod.createNavBackButtonWithTitle("返回");
        backButton.addTarget_action_forControlEvents(self, "backBarButtonClicked:", 6);
        self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithCustomView(backButton));

        self.ui__tableView().setDelegate(self);

        ServiceManager.getAllChildWithClassId_Success_failure(0, block('NSArray*', function(childArray) {
            var index = self.childArray().indexOfObject(self.selectChildInfo());

        }), block(function() {

        }));

    },

    backBarButtonClicked: function(sender) {
        self.tabBarController().setSelectedIndex(1);
        self.navigationController().popToRootViewControllerAnimated(YES);
    },
});