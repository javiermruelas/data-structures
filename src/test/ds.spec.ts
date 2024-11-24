import {
  CustomArray,
  HashMap,
  LinkedList,
  BinarySearchTree,
  AVLTree,
  Graph,
} from '../ds';

describe('CustomArray', () => {
  let arr: CustomArray<number>;

  beforeEach(() => {
    arr = new CustomArray<number>();
  });

  describe('Basic Array Operations', () => {
    it('should start empty', () => {
      expect(arr.isEmpty()).toBe(true);
      expect(arr.getSize()).toBe(0);
    });

    it('push should add elements', () => {
      arr.push(1);
      arr.push(2);
      expect(arr.getSize()).toBe(2);
      expect(arr.get(0)).toBe(1);
    });

    it('pop should remove and return last element', () => {
      arr.push(1);
      arr.push(2);
      expect(arr.pop()).toBe(2);
      expect(arr.getSize()).toBe(1);
    });

    it('get should retrieve element at index', () => {
      arr.push(1);
      arr.push(2);
      expect(arr.get(1)).toBe(2);
    });

    it('set should update element at index', () => {
      arr.push(1);
      arr.set(0, 5);
      expect(arr.get(0)).toBe(5);
    });

    it('remove should delete element at index', () => {
      arr.push(1);
      arr.push(2);
      arr.push(3);
      expect(arr.remove(1)).toBe(2);
      expect(arr.getSize()).toBe(2);
      expect(arr.get(1)).toBe(3);
    });
  });

  describe('Queue Operations', () => {
    it('enqueue should add elements to the end', () => {
      arr.enqueue(1);
      arr.enqueue(2);
      expect(arr.getSize()).toBe(2);
      expect(arr.peek()).toBe(1);
    });

    it('dequeue should remove and return first element', () => {
      arr.enqueue(1);
      arr.enqueue(2);
      expect(arr.dequeue()).toBe(1);
      expect(arr.getSize()).toBe(1);
    });

    it('peek should return first element without removing', () => {
      arr.enqueue(1);
      arr.enqueue(2);
      expect(arr.peek()).toBe(1);
      expect(arr.getSize()).toBe(2);
    });
  });

  describe('Stack Operations', () => {
    it('stackPush should add elements to top', () => {
      arr.stackPush(1);
      arr.stackPush(2);
      expect(arr.stackPeek()).toBe(2);
    });

    it('stackPop should remove and return top element', () => {
      arr.stackPush(1);
      arr.stackPush(2);
      expect(arr.stackPop()).toBe(2);
      expect(arr.getSize()).toBe(1);
    });

    it('stackPeek should return top element without removing', () => {
      arr.stackPush(1);
      arr.stackPush(2);
      expect(arr.stackPeek()).toBe(2);
      expect(arr.getSize()).toBe(2);
    });
  });
});

describe('HashMap', () => {
  let map: HashMap<string, number>;

  beforeEach(() => {
    map = new HashMap<string, number>();
  });

  it('should start empty', () => {
    expect(map.isEmpty()).toBe(true);
    expect(map.getSize()).toBe(0);
  });

  it('put should add key-value pairs', () => {
    map.put('one', 1);
    expect(map.get('one')).toBe(1);
    expect(map.getSize()).toBe(1);
  });

  it('get should retrieve values by key', () => {
    map.put('one', 1);
    map.put('two', 2);
    expect(map.get('two')).toBe(2);
  });

  it('remove should delete key-value pairs', () => {
    map.put('one', 1);
    expect(map.remove('one')).toBe(1);
    expect(map.has('one')).toBe(false);
  });

  it('has should check if key exists', () => {
    map.put('one', 1);
    expect(map.has('one')).toBe(true);
    expect(map.has('two')).toBe(false);
  });

  it('clear should remove all entries', () => {
    map.put('one', 1);
    map.put('two', 2);
    map.clear();
    expect(map.isEmpty()).toBe(true);
  });

  it('should handle collisions', () => {
    for (let i = 0; i < 100; i++) {
      map.put(`key${i}`, i);
    }
    expect(map.get('key50')).toBe(50);
  });
});

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe('Basic Operations', () => {
    it('should start empty', () => {
      expect(list.isEmpty()).toBe(true);
      expect(list.getSize()).toBe(0);
    });

    it('append should add elements to end', () => {
      list.append(1);
      list.append(2);
      expect(list.toArray()).toEqual([1, 2]);
    });

    it('prepend should add elements to start', () => {
      list.prepend(1);
      list.prepend(2);
      expect(list.toArray()).toEqual([2, 1]);
    });

    it('delete should remove element', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.delete(2)).toBe(true);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it('find should locate element', () => {
      list.append(1);
      list.append(2);
      expect(list.find(2)?.value).toBe(2);
      expect(list.find(3)).toBeNull();
    });

    it('insertAt should add element at index', () => {
      list.append(1);
      list.append(3);
      expect(list.insertAt(1, 2)).toBe(true);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it('removeAt should delete element at index', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.removeAt(1)).toBe(2);
      expect(list.toArray()).toEqual([1, 3]);
    });
  });

  describe('Queue Operations', () => {
    it('enqueue should add to end', () => {
      list.enqueue(1);
      list.enqueue(2);
      expect(list.peek()).toBe(1);
    });

    it('dequeue should remove from front', () => {
      list.enqueue(1);
      list.enqueue(2);
      expect(list.dequeue()).toBe(1);
      expect(list.peek()).toBe(2);
    });
  });

  describe('Stack Operations', () => {
    it('push should add to top', () => {
      list.push(1);
      list.push(2);
      expect(list.stackPeek()).toBe(2);
    });

    it('pop should remove from top', () => {
      list.push(1);
      list.push(2);
      expect(list.pop()).toBe(2);
      expect(list.stackPeek()).toBe(1);
    });
  });
});

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  it('should start empty', () => {
    expect(bst.isEmpty()).toBe(true);
    expect(bst.getSize()).toBe(0);
  });

  it('insert should add nodes', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    expect(bst.getSize()).toBe(3);
    expect(bst.find(3)).not.toBeNull();
  });

  it('delete should remove nodes', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.delete(3);
    expect(bst.find(3)).toBeNull();
    expect(bst.getSize()).toBe(2);
  });

  it('find should locate nodes', () => {
    bst.insert(5);
    bst.insert(3);
    expect(bst.find(5)?.value).toBe(5);
    expect(bst.find(10)).toBeNull();
  });

  it('getMin should return minimum value', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    expect(bst.getMin()).toBe(3);
  });

  it('getMax should return maximum value', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    expect(bst.getMax()).toBe(7);
  });

  it('should perform traversals correctly', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    expect(bst.inorderTraversal()).toEqual([3, 5, 7]);
    expect(bst.preorderTraversal()).toEqual([5, 3, 7]);
    expect(bst.postorderTraversal()).toEqual([3, 7, 5]);
    expect(bst.levelOrderTraversal()).toEqual([5, 3, 7]);
  });

  it('getHeight should return correct height', () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    expect(bst.getHeight()).toBe(2);
  });
});

describe('AVLTree', () => {
  let avl: AVLTree<number>;

  beforeEach(() => {
    avl = new AVLTree<number>();
  });

  it('should maintain balance after insertions', () => {
    avl.insert(10);
    avl.insert(20);
    avl.insert(30);
    avl.insert(40);
    avl.insert(50);

    const root = (avl as any).root;
    expect(
      Math.abs(
        (root.left ? root.left.height : 0) -
          (root.right ? root.right.height : 0),
      ),
    ).toBeLessThanOrEqual(1);
  });

  it('should maintain balance after deletions', () => {
    avl.insert(10);
    avl.insert(20);
    avl.insert(30);
    avl.delete(20);

    const root = (avl as any).root;
    expect(
      Math.abs(
        (root.left ? root.left.height : 0) -
          (root.right ? root.right.height : 0),
      ),
    ).toBeLessThanOrEqual(1);
  });

  it('find should locate nodes', () => {
    avl.insert(10);
    avl.insert(20);
    avl.insert(30);
    expect(avl.find(20)?.value).toBe(20);
    expect(avl.find(40)).toBeNull();
  });
});

describe('Graph', () => {
  let graph: Graph<string>;

  beforeEach(() => {
    graph = new Graph<string>();
  });

  it('should add vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.hasVertex('A')).toBe(true);
    expect(graph.hasVertex('B')).toBe(true);
  });

  it('should remove vertices', () => {
    graph.addVertex('A');
    graph.removeVertex('A');
    expect(graph.hasVertex('A')).toBe(false);
  });

  it('should add edges', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(true);
  });

  it('should remove edges', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.removeEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(false);
  });

  it('should get neighbors', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.getNeighbors('A')).toEqual(['B', 'C']);
  });

  it('should perform DFS', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.dfs('A')).toEqual(['A', 'B', 'C']);
  });

  it('should perform BFS', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.bfs('A')).toEqual(['A', 'B', 'C']);
  });

  it('should find path between vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.findPath('A', 'C')).toEqual(['A', 'B', 'C']);
  });

  it('should get all vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  it('should get all edges', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.getEdges()).toEqual([['A', 'B']]);
  });
});
