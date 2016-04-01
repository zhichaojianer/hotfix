defineClass('ZLMessageViewController', {
    configInputViewMethod: function() {

        //知了客服隐藏语音功能
        if (self.currentConversation().toUserInfo().userId() == 1000) {
            self.inputImageLeftConstraint().setConstant(10);
            self.keyBroadButton().setHidden(YES);
        } else {
            self.inputImageLeftConstraint().setConstant(44);
            self.keyBroadButton().setHidden(NO);
        }

        self.configVoiceInputView();
    },
});