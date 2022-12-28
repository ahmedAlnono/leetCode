var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1.sort() , ...nums2.sort()].sort();
    let test;
    for(let j = 0 ; j < arr.length ; j++){
    for (let i =0 ; i< arr.length ; i++){
        if(arr[i] > arr[i+1]){
            test =arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = test;
        } 
    }
}
    console.log(arr);
    if (arr.length%2 == 0){
        return (arr[arr.length/2 -1]+arr[arr.length/2])/2;
    }
    else{
        console.log(arr[Math.floor(arr.length/2)]);
        return arr[Math.floor(arr.length/2)];
    }
};
findMedianSortedArrays([-2,-1],[3]);    