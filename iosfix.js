defineClass('ZLChosenTableController', {
    createTabBanner: function() {
        var width = UIScreen.mainScreen().bounds().size().width();
        var height = width * (150 / 375.0 f);
        self.ui__view().setFrame(CGRectMake(0, 0, width, height));
        self.ui__pageControl().setTransform(CGAffineTransformMakeScale(0.75, 0.75));
        self.ui__pageControl().setBackgroundColor(UIColor.clearColor());
        if (self.ViewModel.zlbannerList().count() < 1) {
            self.ui__pageControl().setNumberOfPages(1);
        } else {
            self.ui__pageControl().setNumberOfPages(self.ViewModel.zlbannerList().count());
        }
        self.ui__pageControl().setPageIndicatorTintColor(UIColor.colorWithWhite_alpha(1, 0.5));
        self.ui__pageControl().setCurrentPageIndicatorTintColor(UIColor.colorWithRed_green_blue_alpha(255 / 255. f(), 109 / 255. f(), 83 / 255. f(), 1));
        self.ui__scrollView().setContentSize(CGSizeMake(width * self.ViewModel.zlbannerList().count(), height));
        self.ui__scrollView().setScrollsToTop(NO);
    }
});
