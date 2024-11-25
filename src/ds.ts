/**
 * In this file I will attempt to implement all data structures from scratch!
 *
 * To do:
 * Tries - after trees
 * Heaps - after trees
 */

export class HashMap<K, V> {
  private buckets: Array<Array<[K, V]>>;
  private size: number;
  private capacity: number;

  constructor(capacity: number = 16) {
    this.buckets = new Array(capacity);
    this.size = 0;
    this.capacity = capacity;
  }

  put(key: K, value: V): void {}
  get(key: K): V | undefined {
    return undefined;
  }
  remove(key: K): V | undefined {
    return undefined;
  }
  has(key: K): boolean {
    return false;
  }
  clear(): void {}
  getSize(): number {
    return 0;
  }
  isEmpty(): boolean {
    return false;
  }
  private hash(key: K): number {
    return 0;
  }
  private resize(): void {}
}

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value: T): void {}
  prepend(value: T): void {}
  delete(value: T): boolean {
    return false;
  }
  find(value: T): ListNode<T> | null {
    return new ListNode(value);
  }
  insertAt(index: number, value: T): boolean {
    return false;
  }
  removeAt(index: number): T | null {
    return null;
  }
  getSize(): number {
    return 0;
  }
  isEmpty(): boolean {
    return false;
  }
  toArray(): T[] {
    return [];
  }

  enqueue(value: T): void {}
  dequeue(): T | undefined {
    return undefined;
  }
  peek(): T | undefined {
    return undefined;
  }

  push(value: T): void {}
  pop(): T | undefined {
    return undefined;
  }
  stackPeek(): T | undefined {
    return undefined;
  }
}

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value: T): void {}

  delete(value: T): void {}

  find(value: T): TreeNode<T> | null {
    return null;
  }
  getMin(): T | null {
    return null;
  }
  getMax(): T | null {
    return null;
  }
  inorderTraversal(): T[] {
    return [];
  }
  preorderTraversal(): T[] {
    return [];
  }
  postorderTraversal(): T[] {
    return [];
  }

  levelOrderTraversal(): T[] {
    return [];
  }
  getHeight(): number {
    return 0;
  }
  isEmpty(): boolean {
    return false;
  }
  getSize(): number {
    return 0;
  }
}

export class AVLNode<T> {
  value: T;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;
  height: number;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

export class AVLTree<T> {
  private root: AVLNode<T> | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(value: T): void {}
  delete(value: T): void {}
  find(value: T): AVLNode<T> | null {
    return null;
  }
  private getHeight(node: AVLNode<T> | null): number {
    return 0;
  }
  private getBalanceFactor(node: AVLNode<T> | null): number {
    return 0;
  }
  private rotateRight(y: AVLNode<T>): AVLNode<T> {
    return y;
  }
  private rotateLeft(x: AVLNode<T>): AVLNode<T> {
    return x;
  }
  private balance(node: AVLNode<T>): AVLNode<T> {
    return node;
  }
}

export class Graph<T> {
  private adjacencyList: Map<T, T[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {}
  removeVertex(vertex: T): void {}
  addEdge(vertex1: T, vertex2: T): void {}
  removeEdge(vertex1: T, vertex2: T): void {}
  getNeighbors(vertex: T): T[] {
    return [];
  }
  hasVertex(vertex: T): boolean {
    return false;
  }
  hasEdge(vertex1: T, vertex2: T): boolean {
    return false;
  }
  dfs(startVertex: T): T[] {
    return [];
  }
  bfs(startVertex: T): T[] {
    return [];
  }
  findPath(startVertex: T, endVertex: T): T[] {
    return [];
  }
  getVertices(): T[] {
    return [];
  }
  getEdges(): [T, T][] {
    return [];
  }
}
