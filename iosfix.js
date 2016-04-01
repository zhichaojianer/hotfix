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

defineClass('PerInfoViewController', {
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
        tableView.deselectRowAtIndexPath_animated(indexPath, YES);

        var rowNum = indexPath().row();
        var cellIdentifier = self.infoTitleArray(rowNum);
        if (cellIdentifier.isEqualToString("HeadImageCellIdentifier")) {
            self.imagePickerActionMethod();
        } else if (cellIdentifier.isEqualToString("UserNameCellIdentifier")) {
            self.showNameViewController();
        } else if (cellIdentifier.isEqualToString("UserGenderCellIdentifier")) {
            self.showGenderActionSheet();
        } else if (cellIdentifier.isEqualToString("UserCardCellIdentifier")) {
            self.showPickCardInfoViewController();
        } else if (cellIdentifier.isEqualToString("ZLAddressCellIdentifier")) {
            self.showZLAddressManageViewController();
        }
    },
});