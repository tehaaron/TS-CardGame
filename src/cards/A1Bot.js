var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Card', '../CardRace', '../CardRarity', '../CardType'], function(require, exports, Card, Race, Rarity, Type) {
    var A1Bot = (function (_super) {
        __extends(A1Bot, _super);
        function A1Bot() {
            _super.call(this, 'A1 Bot', 0 /* Ground */, 2 /* Robot */, 0 /* Common */, 2, 2, 0, "a1Bot");
        }
        return A1Bot;
    })(Card);
    
    return A1Bot;
});
//# sourceMappingURL=A1Bot.js.map
