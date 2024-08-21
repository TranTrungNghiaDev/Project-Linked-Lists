class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }
  append(value) {
    let node = this.headNode;
    while (node.nextNode) {
      node = node.nextNode;
    }

    node.nextNode = value;
  }

  prepend(value) {
    const copyHeadNode = this.headNode;
    this.headNode = value;
    this.headNode.nextNode = copyHeadNode;
  }

  size() {
    let count = 0;
    let currentNode = this.headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    const firstNode = this.headNode;
    return firstNode;
  }

  tail() {
    let tailNode = this.headNode;
    while (tailNode.nextNode) {
      tailNode = tailNode.nextNode;
    }
    return tailNode;
  }

  at(index) {
    if (index < 0) {
      console.log("Index must greater than 0");
    } else if (index > this.size()) {
        console.log("Index is bigger list size");
    } else {
      let currentNode = this.headNode;
      let currentIndex = 0;
      while (currentIndex <= index) {
        if (currentIndex == index) {
          return currentNode;
        } else {
          currentNode = currentNode.nextNode;
          currentIndex++;
        }
      }
    }
  }

  pop() {
    let currentNode = this.headNode;
    let lastNode = this.headNode.nextNode;
    
    while(lastNode.nextNode) {
        currentNode = currentNode.nextNode;
        lastNode = lastNode.nextNode;
    }
    currentNode.nextNode = null;
    lastNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;
    while(currentNode) {
        if(currentNode.value === value) {
            return true;
        } else {
            currentNode = currentNode.nextNode;
        }
    }
    return false;
  }

  find(value) {
    let currentIndex = 0;
    let currentNode = this.headNode;
    while(currentNode) {
        if(currentNode.value === value) {
            return currentIndex;
        } else {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
    }
    return null;
  }

  toString() {
    let currentNode = this.headNode;
    let currentString = "";
    while(currentNode) {        
        if(currentString === "") {
            currentString = currentNode.value;
        }
        else {
            currentString = `${currentString} -> ${currentNode.value}`;
        }

        currentNode = currentNode.nextNode;
    }
    currentString = `${currentString} -> null`;

    return currentString;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const firstNode = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
const fourthNode = new Node(4);
const zeroNode = new Node(0);

const listNode = new LinkedList(firstNode);
listNode.append(secondNode);
listNode.append(thirdNode);
listNode.append(fourthNode);
listNode.prepend(zeroNode);
