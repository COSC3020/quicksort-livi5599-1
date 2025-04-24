function quicksort(array) {
    if (array.length < 2) {
        return array;
    }

    if (array.length == 2) {
        if (!isSorted(array)) {
            array.sort();
        }
        return array;
    }
    
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 1) {
        high = stack.pop();
        low = stack.pop();
        let pivot = placePivot(array, low, high);
        console.log("array after placePivot = ", array);
        if (isSorted(array)) {
            return array;
        }
        for (i = 0; i < array.length - 1; i++) {
            // if (isSorted(array)) {
            //     return array;
            // }
            if (array[i] == pivot) {
                console.log(array[i], " = pivot, continuing...");
                continue;
            }
            else if (array[i] > pivot && i < array.indexOf(pivot)) {
                console.log(array[i], "> pivot and ", i, "< pivot index");
                array.splice(array.indexOf(pivot) + 1, 0, array[i]);
                console.log("array after 1st splice = ", array);
                array.splice(i, 1);
                console.log("array after 2nd splice = ", array);
            }
            else if (array[i] < pivot && i > array.indexOf(pivot)) {
                console.log(array[i], "< pivot and ", i, "> pivot index");
                array.unshift(array[i]);
                console.log("array after unshift = ", array);
                array.splice(i+1, 1);
                console.log("array after splice = ", array);
            }
        }
        if (isSorted(array)) {
            return array;
        }

        if (array.indexOf(pivot) > 0) {
            console.log("elements to the left of pivot");
            stack.push(0);
            stack.push(array.indexOf(pivot) - 1);
            console.log("updated stack = ", stack);
        }

        if (array.indexOf(pivot) < array.length - 1 && array.indexOf(pivot) + 1 < array.length - 1) {
            console.log("elements to the right of pivot");
            stack.push(array.indexOf(pivot) + 1);
            stack.push(array.length - 1);
            console.log("updated stack = ", stack);
        }
    }
    return array;
}

function placePivot(a, low, high) {
    let pivot = null;
    let pivArr = [];
    if ((high - low) + 1 <= 2) {
        var mid = null;
    }
    else {
        mid = Math.floor((high - low) / 2);
    }

    if (mid == null) {
        pivArr.push(a[low], a[high]);
        pivot = a[high];
        a[low] = pivArr[0];
        a[high] = pivot;
    }
    else {
        pivArr.push(a[low], a[mid], a[high]);

        if (!isSorted(pivArr)) {
            pivArr.sort();
        }

        pivot = pivArr[1];
 
        a[low] = pivArr[0];
        a[mid] = pivot;
        a[high] = pivArr[2];
        console.log("a after placePivot = ", a);
        
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

let arr = [3, 1, 2, 4];
console.log(quicksort(arr));
