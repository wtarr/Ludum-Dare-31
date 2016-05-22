// based originally, ported and modified from https://github.com/laurentluce/python-algorithms
///<reference path="priorityq.ts"/>

module PathFinding {
    export class Node {

        x:number;
        y:number;
        worldx:number;
        worldy:number;
        reachable:boolean;
        parent:Node;
        g:number = 0;
        h:number = 0;
        f:number = 0;

        constructor(x:number, y:number, worldx:number, worldy:number, reachable:boolean) {
            this.x = x;
            this.y = y;
            this.worldx = worldx;
            this.worldy = worldy;
            this.reachable = reachable;
            this.parent = null;
        }

        equals(other:Node):boolean {
            return this.x == other.x && this.y == other.y;
        }
    }

    export class AStar {

        openlist:Util.PriorityQueue<Node>; // lowest f val is the priority
        closed:Array<Node>;
        nodes:Array<Node>;
        mapRowCount:number;
        mapColCount:number;
        cellWidth:number;
        cellHeight:number;
        start:Node;
        end:Node;
        map:Array<number>;


        constructor(rowsCount:number, colCount:number, cellWidth:number, cellHeight:number, map:Array<number>, start:Node, end:Node) {
            this.mapColCount = colCount;
            this.mapRowCount = rowsCount;

            this.start = start;
            this.end = end;

            this.cellWidth = cellWidth;
            this.cellHeight = cellHeight;

            this.map = map;

            // initialise the collections
            this.nodes = new Array<Node>();
            this.openlist = new Util.PriorityQueue<Node>();
            this.closed = new Array<Node>();

            this.init_grid();

        }

        init_grid():void {
            var row = 0;
            var index = 0;

            for (var y = 0; y < this.mapRowCount; y++) {
                for (var x = 0; x < this.mapColCount; x++) {

                    var key = this.map[x + row];

                    if (key == 1 || key == 2) {

                        //reachable = false
                        var node = new Node(x, y, ((x * this.cellWidth) + (this.cellWidth / 2)), ((y * this.cellHeight) + (this.cellHeight / 2)), false);
                        this.nodes.push(node);
                    }
                    else {
                        //reachable = true
                        var node = new Node(x, y, ((x * this.cellWidth) + (this.cellWidth / 2)), ((y * this.cellHeight) + (this.cellHeight / 2)), true);
                        this.nodes.push(node);
                    }

                    index++;
                }
                row += this.mapColCount;
            }
        }

        get_heuristic(node:Node):number {
            return 10 * (Math.abs(node.x - this.end.x) + Math.abs(node.y - this.end.y));
        }

        get_node(x, y):Node {
            var index = y * this.mapColCount + x;
            return this.nodes[index];
        }

        get_adjNode(node:Node):Array<Node> {

            var nodes = [];

            // The edge cases ....
            // Top left
            if (node.x == 0 && node.y == 0) {
                //o #
                //#
                nodes.push(this.get_node(node.x + 1, node.y));
                nodes.push(this.get_node(node.x + 1, node.y));

                return nodes;
            }

            // Top right
            if (node.x == this.mapColCount - 1 && node.y == 0) {
                //# o
                //  #
                nodes.push(this.get_node(node.x - 1, node.y));
                nodes.push(this.get_node(node.x, node.y + 1));

                return nodes;
            }

            // Bottom left
            if (node.x == 0 && node.y == this.mapRowCount - 1) {
                //#
                //o #
                nodes.push(this.get_node(node.x, node.y - 1));
                nodes.push(this.get_node(node.x + 1, node.y));

                return nodes;
            }

            // Bottom right
            if (node.x == this.mapColCount - 1 && node.y == this.mapRowCount - 1) {
                //  #
                //# o
                nodes.push(this.get_node(node.x, node.y - 1));
                nodes.push(this.get_node(node.x - 1, node.y));

                return nodes;
            }

            // left edge
            if (node.x == 0 && node.y > 0)
            {
                //#
                //o #
                //#
                nodes.push(this.get_node(node.x, node.y-1));
                nodes.push(this.get_node(node.x+1, node.y));
                nodes.push(this.get_node(node.x, node.y+1));

                return nodes;
            }

            // right edge
            if (node.x == this.mapColCount-1 && node.y > 0 )
            {
                // #
                //#o
                // #
                nodes.push(this.get_node(node.x, node.y-1));
                nodes.push(this.get_node(node.x-1, node.y));
                nodes.push(this.get_node(node.x, node.y+1));

                return nodes;
            }

            // top edge
            if (node.x > 0  && node.y == 0)
            {
                //#o#
                // #
                nodes.push(this.get_node(node.x -1, node.y));
                nodes.push(this.get_node(node.x, node.y + 1));
                nodes.push(this.get_node(node.x + 1, node.y));

                return nodes;
            }

            // bottom edge
            if (node.x > 0 && node.y == this.mapRowCount -1)
            {
                // #
                //#o#
                nodes.push(this.get_node(node.x -1 ,    node.y));
                nodes.push(this.get_node(node.x ,       node.y - 1));
                nodes.push(this.get_node(node.x +1,     node.y));

                return nodes;

            }

            // For everything else
            // #
            //#o#
            // #
            nodes.push(this.get_node(node.x, node.y - 1)); // up
            nodes.push(this.get_node(node.x, node.y + 1)); // down
            nodes.push(this.get_node(node.x - 1, node.y)); // left
            nodes.push(this.get_node(node.x + 1, node.y)); // right

            return nodes;
        }

        display_path(goal: Node):Array<Node> {
            var path = [];

            var node = goal;

            if (node.parent == undefined && node.equals(this.start)) {
                path.push(node);
                return path;
            }

            while (!node.parent.equals(this.start)) {
                node = node.parent;
                //console.log("path: node: " + node.x + ", " + node.y);
                path.push(node);
            }

            return path;
        }

        updateNode(adj:Node, node:Node) {
            adj.g = node.g + 10;
            adj.h = this.get_heuristic(adj);
            adj.parent = node;
            adj.f = adj.h + adj.g;
        }

        findPath():Array<Node> {
            this.openlist.push(new Util.Node(this.start, this.start.f));

            while (this.openlist.hasItems()) {

                var node = this.openlist.pop();

                this.closed.push(node);

                if (node.equals(this.end)) {
                    // path found
                    return this.display_path(node);

                }

                var adj_nodes = [];
                adj_nodes = this.get_adjNode(node);


                for (var i = 0; i < adj_nodes.length; i++)
                {
                    var adj_node = adj_nodes[i];
                    if (adj_node.reachable == true && this.closedListContains(adj_node) == false) {
                        if (this.openlist.contains(adj_node, (a, b) => {
                                var x1 = a.x;
                                var x2 = b.x;
                                var y1 = a.y;
                                var y2 = b.y;

                                if (x1 === x2 && y1 === y2)
                                    return true;
                                else
                                    return false;
                            }))
                        {
                            if (adj_node.g > node.g + 10) {
                                this.updateNode(adj_node, node);
                            }
                        }
                        else
                        {
                            this.updateNode(adj_node, node);
                            this.openlist.push(new Util.Node<Node>(adj_node, adj_node.f));
                        }
                    }
                }
            }

            return [];
        }

        private closedListContains(node:Node):boolean {

            for (var i = 0; i < this.closed.length; i++)
            {
                var closed = this.closed[i];

                if (closed.equals(node)) {
                    return true;
                }
            }
            return false;
        }

        public GetNodesList():Array<Node> {
            return this.nodes;
        }


    }
}
