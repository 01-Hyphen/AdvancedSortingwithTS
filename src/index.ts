import { LinkedListCollection } from "./LinkedListCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { StringCollection } from "./StringCollection";

const numbers = new NumbersCollection([10,20,30,90,60,50])
const name = new StringCollection("Rahul");
// const sorter = new Sorter(name)

name.sort();
// console.log(name.collection);
numbers.sort();
// console.log(numbers.collection);

const linkedList = new LinkedListCollection()
linkedList.add(55)
linkedList.add(24)
linkedList.add(3)
linkedList.add(2)
linkedList.add(10)

linkedList.sort()
// console.log(linkedList.compare(0,1));
// console.log(linkedList.at(0));
linkedList.print()
// console.log(linkedList.at(0)  > linkedList.at(1));





