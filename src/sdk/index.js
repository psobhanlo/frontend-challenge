"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadData;

function loadData() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skipped = _ref.skipped,
        skipped = _ref$skipped === void 0 ? 0 : _ref$skipped,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 20 : _ref$size;

    var items = Array(size);

    for (var index = 0; index < size; index++) {
        var status = Math.floor(Math.random() * 3) === 0 ? {
            title: "آگهی نشده",
            advertised: 0
        } : {
            title: "آگهی شده",
            advertised: 1
        };
        items[index] = {
            human_readable_id: Math.random().toString(36).substring(7),
            status: status,
            title: "\u06F2\u06F0\u06F1\u06F8\u066C \u0647\u06CC\u062F\u0648\u0646\u062F\u0627\u06CC\u066C \u0633\u0627\u0646\u062A\u0627\u0641\u0647 (".concat(Math.random().toString(36).substring(7), ")"),
            image: Math.ceil(Math.random() * 3) + ".png",
            price: {
                slug: "price",
                value: Math.floor(Math.random() * 90071992547),
                unit: "تومان"
            },
            created_at: 1555235671000
        };
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            return resolve({
                total: 2000,
                size: 20,
                skipped: skipped,
                items: items
            });
        }, 3000);
    });
}