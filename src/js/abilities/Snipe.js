var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Ability'], function(require, exports, Ability) {
    var Snipe = (function (_super) {
        __extends(Snipe, _super);
        function Snipe(damage) {
            this.damage = 1;
            _super.call(this, 'Snipe ' + this.damage, true);
        }
        return Snipe;
    })(Ability);
});
//# sourceMappingURL=Snipe.js.map
