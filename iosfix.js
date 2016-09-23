require('UIScreen,UIColor,UIImageView,ColorManager,UITapGestureRecognizer');
defineClass('ZLChosenTableController', {
    createTabBanner: function() {

        var width = UIScreen.mainScreen().bounds().size().width();
        var height = width * (150 / 375.0 f);
        self.ui__view().setFrame(CGRectMake(0, 0, width, height));
        self.ui__pageControl().setTransform(CGAffineTransformMakeScale(0.75, 0.75));
        self.ui__pageControl().setBackgroundColor(UIColor.clearColor());
        if (_ViewModel.zlbannerList().count() < 1) {
            self.ui__pageControl().setNumberOfPages(1);
        } else {
            self.ui__pageControl().setNumberOfPages(_ViewModel.zlbannerList().count());
        }
        self.ui__pageControl().setPageIndicatorTintColor(UIColor.colorWithWhite_alpha(1, 0.5));
        self.ui__pageControl().setCurrentPageIndicatorTintColor(UIColor.colorWithRed_green_blue_alpha(255 / 255. f(), 109 / 255. f(), 83 / 255. f(), 1));
        self.ui__scrollView().setContentSize(CGSizeMake(width * _ViewModel.zlbannerList().count(), height));
        self.ui__scrollView().setScrollsToTop(NO);
        for (var i = 0; i < _ViewModel.zlbannerList().count(); i++) {
            var model = _ViewModel.zlbannerList[i]();
            var imageView = UIImageView.alloc().initWithFrame(CGRectMake(width * i, 0, width, height));
            imageView.yy__setImageWithURL_placeholder(model.image(), null);
            imageView.setBackgroundColor(ColorManager.placeholderBackgroundColor());
            imageView.setClipsToBounds(YES);
            imageView.setContentMode(UIViewContentModeScaleAspectFill);
            var tap = UITapGestureRecognizer.alloc().initWithTarget_action(self, @selector(tapBannerAction: ));
            imageView.addGestureRecognizer(tap);
            tap.view().setTag(i + 1);
            imageView.setUserInteractionEnabled(YES);
            self.ui__scrollView().addSubview(imageView);
        }
        self.setupTimer();
    },
});
