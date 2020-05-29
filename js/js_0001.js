let list = [10, 15, 3, 7], k = 17;

//Solution #1
function check_array(_array, sum) {
    for (const element1 of _array) {
        for (const element2 of _array) {
            if (element1 + element2 === sum) {
                return true;
            }
        }
    }
    return false;
}


//Solution #2
function check_array2(_array, sum) {
    let _diff_arr = [];
    for (const element1 of _array) {
        const difference = sum - element1;
        if (_diff_arr.includes(difference)) {
            return true;
        }
        _diff_arr.push(element1);
    }
    return false;
}

console.log(check_array(list, k));
console.log(check_array([10, 20, 30, 40], 60));
console.log(check_array([1, 5, 61, 10], 55));

console.log(check_array2(list, k));
console.log(check_array2([10, 20, 30, 40], 60));
console.log(check_array2([1, 5, 61, 10], 55));