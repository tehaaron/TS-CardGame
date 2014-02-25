var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Card', '../CardRace', '../CardRarity', '../CardType', '../Ability'], function(require, exports, Card, Race, Rarity, Type, Ability) {
    var NoviceSniper = (function (_super) {
        __extends(NoviceSniper, _super);
        function NoviceSniper() {
            _super.call(this, 'Novice Sniper', 0 /* Ground */, 0 /* Human */, 0 /* Common */, 1, 1, 0, []);
        }
        return NoviceSniper;
    })(Card);
    
    return NoviceSniper;
});
//# sourceMappingURL=NoviceSniper.js.map
