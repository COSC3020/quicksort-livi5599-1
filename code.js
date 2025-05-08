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
    console.log("stack = ", stack);

    while (stack.length > 0) {
        high = stack.pop();
        low = stack.pop();
        let pivPos = partition(array, low, high);
        if (pivPos-1 > low) {
            stack.push(low);
            stack.push(pivPos-1);
        }

        if (pivPos+1 < high) {
            stack.push(pivPos+1);
            stack.push(high);
        }
    }
    return array;
}

function partition(a, low, high) {
    let mid = low + Math.floor((high - low) / 2);
    let pivArr = [a[low], a[mid], a[high]].sort((x, y) => x - y);
    let pivotVal = pivArr[1];

    let pivotIndex = a.indexOf(pivotVal, low);
    [a[pivotIndex], a[high]] = [a[high], a[pivotIndex]];

    let i = low;
    for (let j = low; j < high; j++) {
        if (a[j] <= pivotVal) {
            [a[i], a[j]] = [a[j], a[i]];
            i++;
        }
    }

    [a[i], a[high]] = [a[high], a[i]];
    return i;
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
