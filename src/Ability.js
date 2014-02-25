define(["require", "exports"], function(require, exports) {
    var Ability = (function () {
        function Ability(name, isDisabled) {
            this.name = name;
            this.isDisabled = isDisabled;
        }
        Ability.prototype.action = function () {
        };
        return Ability;
    })();
    
    return Ability;
});
//# sourceMappingURL=Ability.js.map
