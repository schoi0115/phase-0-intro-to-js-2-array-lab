// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
    function destructivelyAppendCat (name) {
        cats.push('Ralph')
}
    function destructivelyPrependCat (name) {
        cats.unshift('Bob')
}
    function destructivelyRemoveLastCat () {
        cats.pop('name')
}
    function destructivelyRemoveFirstCat () {
        cats.shift('name')
}

    function appendCat(name) {
        return [...cats,name]
    }
   
   function prependCat(name) {
        return [name,...cats]
   }
   
   function removeLastCat(name) {
       return cats.slice(0,-1)
   }
   
   function removeFirstCat(name) {
       return cats.slice(1)
   }