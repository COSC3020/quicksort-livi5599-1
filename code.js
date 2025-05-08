function quicksort(array) { //O(nlogn)
    if (array.length < 2) { //O(1)
        return array;
    }

    if (array.length == 2) { //O(1)
        if (!isSorted(array)) { //O(n)
            array.sort((a, b) => a - b); //O(1)
        }
        return array; //O(1)
    }
    
    let stack = []; //O(1)
    stack.push(0); //O(1)
    stack.push(array.length - 1); //O(1)

    while (stack.length > 0) { //O(nlogn)
        high = stack.pop(); //O(1)
        low = stack.pop(); //O(1)
        let pivPos = partition(array, low, high); //O(n)
        if (pivPos-1 > low) { //O(1)
            stack.push(low); //O(1)
            stack.push(pivPos-1); //O(1)
        }

        if (pivPos+1 < high) { //O(1)
            stack.push(pivPos+1); //O(1)
            stack.push(high); //O(1)
        }
    }
    return array; //O(1)
}

function partition(a, low, high) { //O(n)
    let mid = low + Math.floor((high - low) / 2); //O(1)
    let pivArr = [a[low], a[mid], a[high]].sort((x, y) => x - y); //O(1)
    let pivotVal = pivArr[1]; //O(1)

    let pivotIndex = a.indexOf(pivotVal, low); //O(n)
    [a[pivotIndex], a[high]] = [a[high], a[pivotIndex]]; //O(1)

    let i = low; //O(1)
    for (let j = low; j < high; j++) { //runs high-low times -> O(n)
        if (a[j] <= pivotVal) { //O(1)
            [a[i], a[j]] = [a[j], a[i]];
            i++;
        }
    }

    [a[i], a[high]] = [a[high], a[i]]; //O(1)
    return i; //O(1)
}

function isSorted(a) { //O(n)
    let sorted = true; //O(1)
    for (i = 0; i < a.length; i++) { //runs a.length times -> O(n)
        if (a[i] > a[i+1]) { //O(1)
            sorted = false;
            return sorted;
        }
    }
    return sorted; //O(1)
}
