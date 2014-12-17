/// <reference path="../lib/qunit.d.ts"/>
/// <reference path="../util/priorityq.ts"/>
/// <reference path="../util/aStar.ts"/>
QUnit.module("Priority Queue");
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
QUnit.test("Test priority queue has items function", function () {
    var pq = new Util.PriorityQueue();
    pq.push(new Util.Node("test node", 1));
    ok(pq.hasItems() == true, "When queue has items, return true");
    pq.pop();
    ok(pq.hasItems() == false, "When queue is empty, return false");
});
QUnit.test("Node equals", function () {
    var n1 = new Util.Node("string", 1);
    var n2 = new Util.Node("string", 1);
    var res = n1.equals(n2);
    ok(res, "expected equals");
});
/// ========================= Astar testing ============================
QUnit.module("A Star testing");
QUnit.test("basic test", function () {
    ok(true, "true is true");
});
QUnit.test("Map itialisation", function () {
    var map = [1, 1, 1, 1];
    var as = new PathFinding.AStar(2, 2, 32, 32, map, new PathFinding.Node(0, 0, 16, 16, true), new PathFinding.Node(1, 1, 48, 48, true));
    var nodelist = as.GetNodesList();
    ok(nodelist[0].worldx == 16 && nodelist[0].worldy == 16, "Node0 x: 16, y: 16");
    ok(nodelist[3].worldx == 48 && nodelist[3].worldy == 48, "Node3 x: 48, y: 48");
});
QUnit.test("Test Get node function returns correct node based on x, y supplied", function () {
    var grid = [
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0
    ];
    var as = new PathFinding.AStar(3, 3, 32, 32, grid, new PathFinding.Node(0, 0, 16, 16, true), new PathFinding.Node(1, 1, 48, 48, true));
    var node = as.get_node(1, 1);
    ok(node.reachable === true, "The middle is reachable proving selection was correct");
    node = as.get_node(2, 2);
    ok(node.reachable === true, "The bottom right is reachable proving selection was correct");
    // some unreachables
    node = as.get_node(0, 0);
    ok(node.reachable === false, "The top left is unreachable proving selection was correct");
    node = as.get_node(0, 2);
    ok(node.reachable === false, "The top right is unreachable proving selection was correct");
});
QUnit.test("Get adj nodes", function () {
    var grid = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    var as = new PathFinding.AStar(3, 3, 32, 32, grid, new PathFinding.Node(0, 0, 16, 16, true), new PathFinding.Node(1, 1, 48, 48, true));
    var adj_nodes = as.get_adjNode(new PathFinding.Node(1, 1, 48, 48, true));
    ok(adj_nodes.length === 4, "Expect four nodes, from up, down and left and right");
});
QUnit.test("Path finding with start == finish", function () {
    var grid = [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ];
    var as = new PathFinding.AStar(6, 6, 32, 32, grid, new PathFinding.Node(0, 5, 16, 176, true), new PathFinding.Node(0, 5, 16, 176, true));
    var path = as.findPath();
    ok(path.length == 1, "todo");
});
QUnit.test("Test get heuristic", function () {
    var grid = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    var as = new PathFinding.AStar(3, 3, 32, 32, grid, new PathFinding.Node(0, 0, 16, 16, true), new PathFinding.Node(2, 2, 80, 80, true));
    var h = as.get_heuristic(new PathFinding.Node(0, 0, 16, 16, true));
    ok(h == 40, "correct heuristic");
    h = as.get_heuristic(new PathFinding.Node(0, 2, 16, 80, true));
    ok(h == 20, "correct heuristic");
});
QUnit.test("Path finding with start 1 away from finish", function () {
    var grid = [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ];
    var as2 = new PathFinding.AStar(6, 6, 32, 32, grid, new PathFinding.Node(0, 3, 16, 112, true), new PathFinding.Node(0, 5, 16, 176, true));
    var path = as2.findPath();
    ok(false, "todo");
});
QUnit.test("Path finding with obstacle avoidance away from finish", function () {
    var grid = [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ];
    var as2 = new PathFinding.AStar(6, 6, 32, 32, grid, new PathFinding.Node(3, 1, 80, 48, true), new PathFinding.Node(0, 5, 16, 176, true));
    var path = as2.findPath();
    ok(false, "todo");
});
//# sourceMappingURL=maintest.js.map