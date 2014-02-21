var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Ability'], function(require, exports, Ability) {
    var Armor = (function (_super) {
        __extends(Armor, _super);
        function Armor(armorValue) {
            this.armorValue = 1;
            _super.call(this, 'Armor ' + this.armorValue, true);
        }
        return Armor;
    })(Ability);
});
//# sourceMappingURL=Armor.js.map
