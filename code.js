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
        if (isSorted(array)) {
            return array;
        }
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] == pivot) {
                continue;
            }
            else if (array[i] > pivot && i < array.indexOf(pivot)) {
                array.splice(array.indexOf(pivot) + 1, 0, array[i]);
                array.splice(i, 1);
            }
            else if (array[i] < pivot && i > array.indexOf(pivot)) {
                array.unshift(array[i]);
                array.splice(i+1, 1);
            }
        }
        if (isSorted(array)) {
            return array;
        }

        if (array.indexOf(pivot) > 0 ) {
            stack.push(0);
            stack.push(array.indexOf(pivot) - 1);
        }

        if (array.indexOf(pivot) < array.length - 1 && array.indexOf(pivot) + 1 < array.length - 1) {
            stack.push(array.indexOf(pivot) + 1);
            stack.push(array.length - 1);
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
        pivot = high;
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
