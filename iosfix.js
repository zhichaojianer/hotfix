defineClass('PublicMethod', {}, {
    getM80AttributedLabelDisplaySize_width: function(label, width) {
        var tempSize = CGSizeMake(200, 10000);
        var size = label.sizeThatFits(tempSize);

        if (size.width() < 10) {
            size.setWidth(10);
        }

        if (size.height() < 28) {
            size.setHeight(28);
        }
        size.setWidth(size.width() + 25);
        size.setHeight(size.height() + 10);

        return size;
    },
});
