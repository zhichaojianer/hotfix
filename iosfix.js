require('UIColor,UIView');
defineClass('ZLVIPCenterController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();

        self.setTitle("会员中心");
        self.view().setBackgroundColor(UIColor.whiteColor());

        var view = UIView.alloc().initWithFrame(self.view().frame());
        view.setBackgroundColor(UIColor.whiteColor());
        self.view().addSubview(view);

    },
    viewWillAppear: function(animated) {
        self.super().viewWillAppear(animated);
    },
});