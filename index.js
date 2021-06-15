function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex);
    return min;
}


function merge(array1, array2) {
    let sorted = []
    while (array1.length != 0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            let value = array1.splice(0, 1);
            sorted.push(value[0]);
        } else {
            let value = array2.splice(0, 1);
            sorted.push(value[0]);
        }
    }
    return sorted.concat(array1).concat(array2);
}

function mergeSort(array) {
    let mid = array.length / 2;
    let array1 = array.slice(0, mid);
    let array2 = array.slice(mid);

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(array1), mergeSort(array2));
    }
}