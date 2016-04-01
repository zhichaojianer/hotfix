require('UIColor,UIView,UILabel,UIFont');
defineClass('ZLVIPCenterController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();

        self.setTitle("会员中心");
        self.view().setBackgroundColor(UIColor.whiteColor());

        var view = UIView.alloc().initWithFrame(self.view().frame());
        view.setBackgroundColor(UIColor.whiteColor());
        self.view().addSubview(view);

        var label = UILabel.alloc().initWithFrame(CGRectMake(10, 88,300, 20));
        label.setText("会员中心全面升级中，敬请期待哦");
        label.setTextColor(UIColor.darkGrayColor());
        label.setTextAlignment(1);
        label.setBackgroundColor(UIColor.clearColor());
        label.setFont(UIFont.systemFontOfSize(13));
        self.view().addSubview(label);

    },
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(animated);
    },
});