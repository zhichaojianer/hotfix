defineClass('PublicMethod', {width: a, height: b}, {
    getM80AttributedLabelDisplaySize_width: function(label, width) {
        var size = label.sizeThatFits({width: 200, height:10000});

        if (size.width() < 10) {
            size.setWidth(10);
        }

        if (size.height() < 28) {
            size.setHeight(28);
        }
        var a = size.width() + 25;
        var b = size.height() + 10;
        return {a, b};
    },
});
