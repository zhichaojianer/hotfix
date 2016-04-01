require('UIColor,UIView,UILabel,UIButton,UIBarButtonItem');
defineClass('ZLVIPCenterController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();

        self.setTitle("会员中心");
        self.view().setBackgroundColor(UIColor.whiteColor());

        var backButton = UIButton.alloc().initWithFrame({x:0, y:0, width:60, height:44});
        backButton.setTitle_forState("返回", 0);
        backButton.setImage_forState(UIImage.imageNamed("public_btn_back_black"), 0);
        backButton.titleLabel().setFont(UIFont.systemFontOfSize(17));
        backButton.addTarget_action_forControlEvents(self, "touchBackButton", 6);
        var backBarButton = UIBarButtonItem.alloc().initWithCustomView(backButton);
        self.navigationItem().setLeftBarButtonItem(backBarButton);

    },
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(animated);

        var view = UIView.alloc().initWithFrame(self.view().frame());
        view.setBackgroundColor(UIColor.lightGrayColor());
        self.view().addSubview(view);

        var label = UILabel.alloc().initWithFrame(self.view().frame());
        label.setText("会员中心全面升级中，敬请期待哦");
        label.setTextColor(UIColor.darkGrayColor());
        label.setTextAlignment(1);
        label.setBackgroundColor(UIColor.clearColor());
        label.setFont(UIFont.systemFontOfSize(13));
        self.view().addSubview(label);
    },
});