/// <reference path="../lib/qunit.d.ts"/>
/// <reference path="../util/priorityq.ts"/>
QUnit.module("Typescript");
QUnit.test("basic test", function () {
    ok(true, "true is true");
});
QUnit.test("priority queue", function () {
    var pq = new Util.PriorityQueue();
    pq.push(new Util.Node("two", 2));
    pq.push(new Util.Node("four", 4));
    pq.push(new Util.Node("three", 3));
    pq.push(new Util.Node("one", 1));
    var res1 = pq.pop();
    var res2 = pq.pop();
    var res3 = pq.pop();
    var res4 = pq.pop();
    ok(res1 == "one", "expect \"one\" to be at head of queue");
    ok(res2 == "two", "expect \"two\" after one and before three");
    ok(res3 == "three", "expect \"three\" after two and before four");
    ok(res4 == "four", "expect \"four\" last");
});
//# sourceMappingURL=maintest.js.map