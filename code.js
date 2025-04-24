//test using a small input and comparing what should be in the stack to what is actually going on in the stack

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
        let [pivot, pivIndex] = placePivot(array, low, high);
        console.log("array after placePivot = ", array);
        if (isSorted(array)) {
            return array;
        }
        for (i = 0; i < array.length - 1; i++) {
            // if (isSorted(array)) {
            //     return array;
            // }
            if (array[i] == pivot && i == pivIndex) {
                console.log(array[i], " = pivot, continuing...");
                continue;
            }
            else if (array[i] > pivot && i < pivIndex) {
                console.log(array[i], "> pivot and ", i, "< pivot index");
                array.splice(array.indexOf(pivot) + 1, 0, array[i]);
                console.log("array after 1st splice = ", array);
                array.splice(i, 1);
                console.log("array after 2nd splice = ", array);
            }
            else if (array[i] < pivot && i > pivIndex) {
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

        if (pivIndex > 0) {
            console.log("elements to the left of pivot");
            stack.push(0);
            stack.push(array.indexOf(pivot) - 1);
            console.log("updated stack = ", stack);
        }

        if (pivIndex < array.length - 1 && pivIndex + 1 < array.length - 1) {
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
    let pivIndex = null;
    let pivArr = [];
    if ((high - low) + 1 <= 2) {
        var mid = null;
        console.log("mid set to null")
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
        pivIndex = a.indexOf(pivot);
        console.log("pivIndex = ", pivIndex);
        a[low] = pivArr[0];
        a[high] = pivot;
        console.log("updated a = ", a);
    }
    else {
        pivArr.push(a[low], a[mid], a[high]);

        if (!isSorted(pivArr)) {
            pivArr.sort();
        }
        console.log("pivArr = ", pivArr);

        pivot = pivArr[1];
        console.log("pivot = ", pivot);
        pivIndex = a.indexOf(pivot);
        console.log("pivIndex = ", pivIndex);
 
        a[low] = pivArr[0];
        a[mid] = pivot;
        a[high] = pivArr[2];
        console.log("a after placePivot = ", a);
        
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

let arr = [3, 1, 2, 4];
console.log(quicksort(arr));
