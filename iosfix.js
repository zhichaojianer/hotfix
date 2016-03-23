require('PublicMethod,UIBarButtonItem,ServiceManager');
defineClass('ZLPushAssistantViewController', {
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(YES);

        self.ui__tableView().setDelegate(self);

        ServiceManager.getAllChildWithClassId_Success_failure(0, block('NSArray*', function(childArray) {
 
        }), block(function() {

        }));

    },
});