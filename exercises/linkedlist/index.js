// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node
{
  constructor (data, next = null)
  {
    this.data = data;
    this.next = next;
  }
}

class LinkedList
{
  constructor () 
  {
    this.head = null;
  }

  insertFirst (data)
  {
    this.head = new Node( data, this.head );
  }

  size ()
  {
    let counter = 0;
    let node = this.head;
    {
      while (node)
      {
        counter++;
        node = node.next;
      }
    }
    return counter;
  }

  getFirst ()
  {
    return this.head;
  }

  getLast ()
  {
    let node = this.head;

      while ( node && node.next )
      {
        node = node.next;
      }

      return node;
  }

  clear ()
  {
    if ( this.head )
    {
      this.head = null;
    }
  }

  removeFirst ()
  {
    this.head = this.head.next;
  }

  removeLast ()
  {
    let node = this.head;

    if ( !node ) { return; }
    if ( !node.next ) { this.head = null; return;}
    
      while ( node.next.next )
      {
          node = node.next;
      }
    node.next = null;
  }

  insertLast (data)
  {
    let last = this.getLast();
    const replace = new Node( data );

    if ( last )
    {
      last.next = replace; 
    }

    else
    {
      this.head = replace;
    }
  }

  getAt (n)
  {

    let counter = 0;
    let node = this.head;
      while (node)
      {
        if ( n === counter )
        {
          return node;
        }
        else
        {
          counter++;
          node = node.next;
        }
      }
    
    return null;
  }
  
  removeAt ( n )
  {
    if ( !this.head ) { return; }

    if ( n === 0 ) { this.head = this.head.next; return; }

    const previous = this.getAt( n - 1 );

    if ( !previous || !previous.next) { return; }

    else
    {
      previous.next = previous.next.next;
    }
  }

  insertAt ( data, n )
  {
    if ( !this.head ) { this.head = new Node( data ); return; }
    else if ( n === 0 ) { this.insertFirst( data ); return; }
    else
    {
      const previous = this.getAt( n - 1 ) || this.getLast();
      const node = new Node( data, previous.next );
        previous.next = node;
        return;
    }
  }

}

module.exports = { Node, LinkedList };
