var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    let mergedHead = null;
    if (list1.data <= list2.data) {
        mergedHead = list1;
        list1 = list1.next;
    } else {
        mergedHead = list2;
        list2 = list2.next;
    }

    let mergedTail = mergedHead;

    while (list1 && list2) {
        let temp = null;
        if (list1.data <= list2.data) {
            temp = list1;
            list1 = list1.next;
        } else {
            temp = list2;
            list2 = list2.next;
        }
}
}