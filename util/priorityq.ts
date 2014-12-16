module Util {
    export class Node<T>
    {
        data: T
        priority: number

        constructor(data: T, priority: number)
        {
            this.data = data;
            this.priority = priority
        }

        toString () : string
        {
            return this.priority.toString()
        }
    }

    export class PriorityQueue<T>
    {
        list : Array<Node<T>> = [];

        push (node: Node<T>) : void // insertion sort
        {
            this.list.push(node);
            this.sort();
        }

        private sort()
        {
            for (var i = 0; i < this.list.length; i++)
            {
                var j = 0;
                while (this.list[j].priority > this.list[i].priority) j++;

                var val = this.list[i]; // node

                for (var k = i; k > j; k--) this.list[k] = this.list[k - 1]; // node

                this.list[j] = val; // node
            }
        }

        pop () : T
        {
            return this.list.pop().data; // should pull the sorted top
        }
    }


}