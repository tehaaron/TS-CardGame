var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../Enemy', '../cards/NoviceSniper', '../cards/Marine', '../cards/Sectoid', '../cards/A1Bot'], function(require, exports, Enemy, NoviceSniper, Marine, Sectoid, A1Bot) {
    var CommanderLlama = (function (_super) {
        __extends(CommanderLlama, _super);
        function CommanderLlama() {
            _super.call(this, 'Commander Llama', []);
            this.addCard2Deck(new NoviceSniper());
            this.addCard2Deck(new NoviceSniper());
            this.addCard2Deck(new Marine());
            this.addCard2Deck(new Sectoid());
            this.addCard2Deck(new A1Bot());
            this.addCard2Deck(new Sectoid());
        }
        return CommanderLlama;
    })(Enemy);
    
    return CommanderLlama;
});
//# sourceMappingURL=CommanderLlama.js.map
