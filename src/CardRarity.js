define(["require", "exports"], function(require, exports) {
    (function (CardRarity) {
        CardRarity[CardRarity["Common"] = 0] = "Common";
        CardRarity[CardRarity["Standout"] = 1] = "Standout";
        CardRarity[CardRarity["Exquisite"] = 2] = "Exquisite";
        CardRarity[CardRarity["Diety"] = 3] = "Diety";
    })(exports.CardRarity || (exports.CardRarity = {}));
    var CardRarity = exports.CardRarity;
});
//# sourceMappingURL=CardRarity.js.map
