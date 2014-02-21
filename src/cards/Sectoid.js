var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Card', '../CardRace', '../CardRarity', '../CardType'], function(require, exports, Card, Race, Rarity, Type) {
    var Sectoid = (function (_super) {
        __extends(Sectoid, _super);
        function Sectoid() {
            _super.call(this, 'Sectoid', 0 /* Ground */, 1 /* Alien */, 0 /* Common */, 1, 3, 1);
        }
        return Sectoid;
    })(Card);
    
    return Sectoid;
});
//# sourceMappingURL=Sectoid.js.map
