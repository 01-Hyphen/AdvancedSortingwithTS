import { Sorter } from "./Sorter";

class Node{
    next : Node|null = null;

    constructor(public data:number){}
}


export class LinkedListCollection extends Sorter{

    head:Node|null = null;

    add(data:number):void{

        let node = new Node(data);
        
        if(!this.head){
            this.head = node;
            return;
        }
        
        let tail = this.head;

        while(tail.next){
            tail = tail.next;
        }

        tail.next = node;

    }

    get length():number{
        let counter = 1;

        if(!this.head){
            return 0;
        }

        let node = this.head;

        while(node.next){
            counter++;
            node = node.next;
        }

        return counter;
    }

    at(index:number):Node{

        if(!this.head){
            throw Error("Index OutOfBound Exception")
        }

       let counter = 0;
       let node:Node|null = this.head;
       while(node){
        if(index === counter){
            return node;
        }
        counter++;
        node = node.next;
       }
       throw new Error("Index OutOfBound Exception");
    }

    compare(leftIndex:number,rightIndex:number):boolean{

        if(!this.head){
            throw new Error("Index OutOfBound Exception")
        }
        
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex:number,rightIndex:number):void{
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        
        let leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print():void{
        if(!this.head){
            return;
        }

        let node :Node|null = this.head;

        while(node){
            console.log(node.data);
            node = node.next;
            

        }
    }
  
    


}
