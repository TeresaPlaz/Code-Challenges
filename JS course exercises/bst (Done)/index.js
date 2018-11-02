// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node
{
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert (n)
  {
    if (n > this.data && !this.right)
    {
      this.right = new Node( n );
    }
    else if ( n > this.data && this.right )
    {
      this.right.insert( n );
    }
    else if (n < this.data && this.left) 
    {
      this.left.insert( n );
    }
    else if ( n < this.data && !this.left )
    {
      this.left = new Node( n );
    }
  }

  contains (n2)
  {
    if ( this.data === n2 )
    {
      return this;
    }
    else if ( n2 > this.data && this.right)
    {
      return this.right.contains( n2 );
    }
    else if ( n2 < this.data && this.left)
    {
      return this.left.contains( n2 );
    }

    return null;
  }
}

module.exports = Node;
