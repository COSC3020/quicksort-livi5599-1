function quicksort(array) {
    if (array.length < 2) {
        return array;
    }

    if (array.length == 2) {
        if (!isSorted(array)) {
            array.sort((a, b) => a - b);
        }
        return array;
    }
    
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 1) {
        high = stack.pop();
        low = stack.pop();
        let [pivot, pivIndex] = placePivot(array, low, high);
        // if (isSorted(array)) {
        //     return array;
        // }
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] == pivot && i == pivIndex) {
                continue;
            }
            else if (array[i] > pivot && i < pivIndex) {
                array.splice(pivIndex + 1, 0, array[i]);
                array.splice(i, 1);
            }
            else if (array[i] < pivot && i > pivIndex) {
                array.unshift(array[i]);
                array.splice(i+1, 1);
            }
        }
        // if (isSorted(array)) {
        //     return array;
        // }

        if (pivIndex > 0) {
            stack.push(0);
            stack.push(pivIndex - 1);
        }

        if (pivIndex < array.length - 1 && pivIndex + 1 < array.length - 1) {
            stack.push(pivIndex + 1);
            stack.push(array.length - 1);
        }
    }
    return array;
}

function placePivot(a, low, high) {
    let pivot = null;
    let pivIndex = null;
    let pivArr = [];
    if ((high - low) + 1 <= 2) {
        var mid = null;
    }
    else {
        mid = Math.floor((high - low) / 2);
    }

    if (mid == null) {
        pivArr.push(a[low], a[high]);
        if (!isSorted(pivArr)) {
            pivArr.sort();
        }
        pivot = a[high];
        pivIndex = a.indexOf(pivot);
        a[low] = pivArr[0];
        a[high] = pivot;
    }
    else {
        pivArr.push(a[low], a[mid], a[high]);

        if (!isSorted(pivArr)) {
            pivArr.sort();
        }

        pivot = pivArr[1];
        pivIndex = a.indexOf(pivot);
 
        a[low] = pivArr[0];
        a[mid] = pivot;
        a[high] = pivArr[2];
        
    }
    return [pivot, pivIndex];
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
