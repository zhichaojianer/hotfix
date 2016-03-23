require('PublicMethod,UIBarButtonItem,ServiceManager')
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES)

        // var backButton = PublicMethod.createNavBackButtonWithTitle(NSLocalizedString("返回", null));
        // backButton.addTarget_action_forControlEvents(self, @selector(backBarButtonClicked: ), UIControlEventTouchUpInside);
        // self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithCustomView(backButton));

        // self.ui_tableView().setDelegate(self);

        // ServiceManager.getAllChildWithClassId_Success_failure(0, block('NSArray*', function(childArray) {
        //     var index = self.childArray().indexOfObject(self.selectChildInfo());

        //     self.setChildArray(childArray);
        //     self.setSelectChildInfo(self.childArray[index]());
        //     self.configSelectChild(self.selectChildInfo());

        //     if (childArray.count() * 44 > 180) {
        //         self.selectChildTableHeightConstraint().setConstant(180);
        //     } else {
        //         self.selectChildTableHeightConstraint().setConstant(childArray.count() * 44);
        //     }
        // }), block(function() {

        // }));
    }
})