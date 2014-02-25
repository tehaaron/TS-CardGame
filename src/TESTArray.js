define(["require", "exports", 'TESTStuff'], function(require, exports, Stuff) {
    var TestArray = (function () {
        function TestArray() {
            this.array = [];
        }
        TestArray.prototype.addStuff = function (newStuff) {
            this.array.push(newStuff);
        };
        return TestArray;
    })();
    
    return TestArray;
});
//# sourceMappingURL=TESTArray.js.map
