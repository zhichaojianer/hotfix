require('UIColor,UIView,ColorManager,UILabel,UIScreen,UIFont');
defineClass('ZLVIPCenterController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();

        self.setTitle("会员中心");
        self.view().setBackgroundColor(UIColor.whiteColor());

        var view = UIView.alloc().initWithFrame(self.view().frame());
        view.setBackgroundColor(ColorManager.colorWithViewBackground());
        self.view().addSubview(view);

        var label = UILabel.alloc().initWithFrame(CGRectMake(10, 200, UIScreen.mainScreen().bounds().size().width() - 10 * 2, 20));
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