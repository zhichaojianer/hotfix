require('PublicMethod,UIBarButtonItem,ServiceManager');
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);

        self.ui__tableView().setDelegate(self);

        ServiceManager.getAllChildWithClassId_Success_failure(0, block('NSArray*', function(childArray) {

            if (childArray.count() * 44 > 180) {
                __selectChildTableHeightConstraint().setConstant(180);
            } else {
                __selectChildTableHeightConstraint().setConstant(childArray.count() * 44);
            }
        }), block(function() {

        }));

    },
});