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
    //let i = low - 1; //used to determine which elements are <= pivot
    //pick the pivot
    let pivot = null;
    let pivArr = [];
    if ((high - low) + 1 <= 2) {
        var mid = null;
        console.log("mid set to null");
    }
    else {
        mid = Math.floor((high - low) / 2);
        console.log("mid = ", mid);
    }

    if (mid == null) {
        pivArr.push(a[low], a[high]);
        if (!isSorted(pivArr)) {
            pivArr.sort();
        }
        console.log("pivArr = ", pivArr);
        pivot = a[high];
        console.log("pivot = ", pivot);
    }
    else {
        pivArr.push(a[low], a[mid], a[high]);
        console.log("pivArr = ", pivArr);

        if (!isSorted(pivArr)) {
            pivArr.sort();
        }
        console.log("pivArr = ", pivArr);

        pivot = pivArr[1];
        //let pivIndex = a.indexOf(pivot);
        console.log("pivot = ", pivot);
        //console.log("pivIndex = ", pivIndex);
    }
    
    //let pivIndex = a.indexOf(pivot, low);
    let i = low-1;
    let j = high+1;
    while (true) {
        do {
            i++;
        } while (a[i] < pivot);

        do {
            j--;
        } while (a[j] > pivot);

        if (i >= j) {
            return j;
        }

        [a[i], a[j]] = [a[j], a[i]];
    }
    // for (let j = low; j <= high; j++) {
    //     if (a[j] < pivot && j > pivIndex) {
    //         console.log(a[j], " is less than pivot but is to the right of pivot");

    //     }
    // }

    // [a[i+1], a[pivIndex]] = [a[pivIndex], a[i+1]];
    // console.log("a after pivot placement = ", a);
    // return i+1;
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
