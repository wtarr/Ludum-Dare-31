var Util;
(function (Util) {
    var Node = (function () {
        function Node(data, priority) {
            this.data = data;
            this.priority = priority;
        }
        Node.prototype.equals = function (other) {
            return JSON.stringify(this.data) === JSON.stringify(other.data);
        };
        Node.prototype.toString = function () {
            return this.priority.toString();
        };
        return Node;
    })();
    Util.Node = Node;
    var PriorityQueue = (function () {
        function PriorityQueue() {
            this.list = [];
        }
        PriorityQueue.prototype.push = function (node) {
            this.list.push(node);
            this.sort();
        };
        PriorityQueue.prototype.sort = function () {
            for (var i = 0; i < this.list.length; i++) {
                var j = 0;
                while (this.list[j].priority > this.list[i].priority)
                    j++;
                var val = this.list[i]; // node
                for (var k = i; k > j; k--)
                    this.list[k] = this.list[k - 1];
                this.list[j] = val; // node
            }
        };
        PriorityQueue.prototype.pop = function () {
            return this.list.pop().data; // should pull the sorted top
        };
        PriorityQueue.prototype.hasItems = function () {
            return (this.list.length > 0);
        };
        PriorityQueue.prototype.contains = function (data, compareFunc) {
            var result = false;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                var temp = new Util.Node(data, 1);
                if (compareFunc(item.data, temp.data) == true) {
                    result = true;
                }
            }
            return result;
        };
        return PriorityQueue;
    })();
    Util.PriorityQueue = PriorityQueue;
})(Util || (Util = {}));
//# sourceMappingURL=priorityq.js.map