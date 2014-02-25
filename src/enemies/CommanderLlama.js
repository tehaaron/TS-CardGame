var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Enemy', '../Deck', '../cards/Marine'], function(require, exports, Enemy, Deck, Marine) {
    var CommanderLlama = (function (_super) {
        __extends(CommanderLlama, _super);
        function CommanderLlama() {
            _super.call(this, 'Commander Llama', new Deck());
            this.deck.addCard2Deck(new Marine());
        }
        return CommanderLlama;
    })(Enemy);
    
    return CommanderLlama;
});
//# sourceMappingURL=CommanderLlama.js.map
