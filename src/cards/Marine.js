var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Card', '../CardRace', '../CardRarity', '../CardType'], function(require, exports, Card, Race, Rarity, Type) {
    var Marine = (function (_super) {
        __extends(Marine, _super);
        function Marine() {
            _super.call(this, 'Marine', 0 /* Ground */, 0 /* Human */, 0 /* Common */, 3, 1, 0);
        }
        return Marine;
    })(Card);
    
    return Marine;
});
//# sourceMappingURL=Marine.js.map
