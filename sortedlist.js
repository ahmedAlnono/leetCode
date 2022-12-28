var mergeKLists = function(lists) {
    let newList = [];
    for(let i = 0 ; i < lists.length ; i++){
        newList = [...newList,...Array.from(lists)[i]];
    }
    console.log(newList.sort());
    function arrayToList(array){
        var list = null;
        for (var i = array.length - 1; i >= 0; i--)
          list = {value: array[i], rest: list};
        return list;
      }
     return arrayToList(newList.sort());
};
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));