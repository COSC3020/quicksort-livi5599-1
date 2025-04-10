//iterative quicksort GeeksForGeeks
//Need to keep track of the pieces of the array that need to be processed next.
//Cannot have a set size for each piece since the sizes of the pieces depend on where the pivot is.

function quicksort(array) {
    console.log("array = ", array);
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);
    console.log("stack = ", stack);
    // console.log("placePivot(", low, ", ", high, ") = ");
    // placePivot(array, low, high);

    while (stack.length != 0) {
        high = stack.pop();
        low = stack.pop();
        console.log("high = ", high);
        console.log("low = ", low);
        let pivot = placePivot(array, low, high);
        console.log("pivot = ", pivot);
        console.log("array before for loop = ", array);
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] == pivot) {
                console.log("on pivot element, continuing...");
                continue;
            }
            else if (array[i] > pivot && i < array.indexOf(pivot)) {
                console.log("element ", array[i], " > pivot");
                console.log("array.indexOf(array[i] = ", array.indexOf(array[i]));
                console.log("moving ", array[i], " to the left of pivot");
                array.splice(array.indexOf(pivot) + 1, 0, array[i]);
                array.splice(i, 1);
                console.log("array after moving ", array[i], " to the left of pivot = ", array);
            }
            else if (array[i] < pivot && i > array.indexOf(pivot)) {
                console.log("element ", array[i], " < pivot");
                console.log("array.indexOf(array[i] = ", array.indexOf(array[i]));
                console.log("moving ", array[i], " to the right of pivot");
                array.unshift(array[i]);
                array.splice(i+1, 1);
                console.log("array after moving ", array[i], " to the right of pivot = ", array);
            }
        }
        console.log("array after for loop = ", array);

        if (array.indexOf(pivot) > 0 ) {
            console.log("Elements to left of pivot - creating left subarray...");
            stack.push(0);
            stack.push(array.indexOf(pivot) - 1);
            console.log("stack after left subarray created = ", stack);
        }

        if (array.indexOf(pivot) < array.length - 1 && array.indexOf(pivot) + 1 < array.length - 1) {
            console.log("Elements to right of pivot - creating right subarray...");
            stack.push(array.indexOf(pivot) + 1);
            stack.push(array.length - 1);
            console.log("stack after right subarray created = ", stack);
        }
    }
    // let pivIndex = array.indexOf(pivot);
    // console.log("pivIndex = ", pivIndex);
    // for (i = 0; i < pivIndex; i++) {
    //     stack.push(array.shift());
    //     //stack.push(array[i]);
    // }
    // console.log("stack = ", stack);
    // console.log("array = ", array);

    // low = stack[0];
    // mid = stack[Math.floor((stack.length - 1) / 2)];
    // high = stack[stack.length - 1];
    
    // pivArr[0] = low;
    // pivArr[1] = mid;
    // pivArr[2] = high;

    // if (!isSorted(pivArr)) {
    //     pivArr.sort();
    // }

    // let leftSubPiv = pivArr[1];
    // console.log("leftSubPiv = ", leftSubPiv);
    
    // stack[0] = pivArr[0];
    // stack[Math.floor((stack.length - 1) / 2)] = leftSubPiv;
    // stack[stack.length - 1] = pivArr[2];

    // console.log("stack before left side loop = ", stack);
    // for (i = 0; i < stack.length - 1; i++) {
    //     if (stack[i] == leftSubPiv) {
    //         console.log("on pivot element, continuing...");
    //         continue;
    //     }
    //     else if (stack[i] > leftSubPiv && i < stack.indexOf(leftSubPiv)) {
    //         // console.log("element ", stack[i], " > pivot");
    //         // console.log("array.indexOf(array[i] = ", array.indexOf(array[i]));
    //         // console.log("moving ", array[i], " to the left of pivot");
    //         stack.splice(stack.indexOf(leftSubPiv) + 1, 0, stack[i]);
    //         stack.splice(i, 1);
    //     }
    //     else if (stack[i] < leftSubPiv && i > stack.indexOf(leftSubPiv)) {
    //         stack.unshift(stack[i]);
    //         stack.splice(i+1, 1);
    //     }
    // }
    // console.log("stack after for loop = ", stack);

    // for (i = 0; i < array.length - 1; i++) {
    //     if (array[i] == pivot) {
    //         console.log("on pivot element, continuing...");
    //         continue;
    //     }
    //     else if (array[i] > pivot && i < array.indexOf(pivot)) {
    //         console.log("element ", array[i], " > pivot");
    //         console.log("array.indexOf(array[i] = ", array.indexOf(array[i]));
    //         console.log("moving ", array[i], " to the left of pivot");
    //         array.splice(array.indexOf(pivot) + 1, 0, array[i]);
    //         array.splice(i, 1);
    //         console.log("array after moving ", array[i], " to the left of pivot = ", array);
    //     }
    //     else if (array[i] < pivot && i > array.indexOf(pivot)) {
    //         console.log("element ", array[i], " < pivot");
    //         console.log("array.indexOf(array[i] = ", array.indexOf(array[i]));
    //         console.log("moving ", array[i], " to the right of pivot");
    //         array.unshift(array[i]);
    //         array.splice(i+1, 1);
    //         console.log("array after moving ", array[i], " to the right of pivot = ", array);
    //     }
    // }
    
}

function placePivot(a, low, high) {
    let pivot = null;
    let pivArr = [];
    let lowEl = a[low];
    console.log("lowEL = ", lowEl);
    if (high - low <= 2) {
        console.log("2 or less elements, so no midEl");
        let midEl = null;
    }
    else {
        midEl = a[Math.floor((high - low) / 2)];
        console.log("midEl = ", midEl);
    }
    let highEl = a[high];
    console.log("highEl = ", highEl);
    if (midEl == null) {
        console.log("midEl == null");
        pivArr.push(lowEl, highEl);
        console.log("pivArr = ", pivArr);
        pivot = highEl;
        a[a.indexOf(lowEl)] = pivArr[0];
        a[a.indexOf(highEl)] = pivot;

    }
    else {
        pivArr.push(lowEl, midEl, highEl);
        console.log(pivArr);

        if (!isSorted(pivArr)) {
            pivArr.sort();
        }
        console.log("pivArr after sort check = ", pivArr);

        pivot = pivArr[1];

        a[a.indexOf(lowEl)] = pivArr[0];
        a[a.indexOf(midEl)] = pivot;
        a[a.indexOf(highEl)] = pivArr[2];
        console.log
    }

    return pivot;
}

function isSorted(a) {
    let sorted = true;
    for (i = 0; i < a.length; i++) {
        if (a[i] > a[i+1]) {
            sorted = false;
            return sorted;
        }
    }
    return sorted;
}






    // let sortedArr = [];
    // var size = array.length;
    // while (size != 0) {
    //     pivot = array[0];
    //     for (i = array.length - 1; i > array.indexOf(pivot); i--) {
    //         if (array[i] < pivot) {
    //             [array[array.indexOf(pivot)], array[i]] = [array[i], array[array.indexOf(pivot)]];
    //         }
    //     }
    //     for (i = 0; i < array.indexOf(pivot); i++) {
    //         if (array[i] > pivot) {
    //             [array[array.indexOf(pivot)], array[i]] = [array[i], array[array.indexOf(pivot)]];
    //         }
    //     }

    //     sortedArr[array.indexOf(pivot)] = pivot;
    //     size -= 1;
    // }

    // isSorted = false;
    // while (isSorted == false) {
    //     if (array.length != sortedArr.length) {
    //         newPivot = array[sortedArr.length];
    //         for (i = array.length - 1; i > array.indexOf(newPivot); i--) {
    //             if (array[i] < newPivot) {
    //                 [array[array.indexOf(newPivot)], array[i]] = [array[i], array[array.indexOf(newPivot)]];
    //             }
    //         }
    //         for (i = 0; i < array.indexOf(newPivot); i++) {
    //             if (array[i] > newPivot) {
    //                 [array[array.indexOf(newPivot)], array[i]] = [array[i], array[array.indexOf(newPivot)]];
    //             }
    //         }
    //         sortedArr[array.indexOf(newPivot)] = newPivot;
    //     }
    //     else {
    //         isSorted = true;
    //     }
    // }
    // return array;

let arr = [3, 0, 1, 8, 7, 2, 5, 4, 9, 6];
console.log(quicksort(arr));
