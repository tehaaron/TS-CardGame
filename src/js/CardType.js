define(["require", "exports"], function(require, exports) {
    (function (CardType) {
        CardType[CardType["Ground"] = 0] = "Ground";
        CardType[CardType["Air"] = 1] = "Air";
        CardType[CardType["Water"] = 2] = "Water";
        CardType[CardType["Structure"] = 3] = "Structure";
        CardType[CardType["Command"] = 4] = "Command";
    })(exports.CardType || (exports.CardType = {}));
    var CardType = exports.CardType;
});
//# sourceMappingURL=CardType.js.map
