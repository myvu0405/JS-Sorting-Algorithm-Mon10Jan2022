//Monday: Bubble Sort
const bubbleSort = function (arr) {
    let temp=0;
    /*
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j]<arr[i]) {
                temp= arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }*/

    for (let i=0; i<arr.length; i++) {
        for (let j=arr.length-1;j>=i;j--) {
            if (arr[j]<arr[j-1]) {
                temp= arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {

    let temp=0;
    let minIdx=0;
    for (let i=0;i<arr.length;i++){
        minIdx=i;
        for(let j=i+1;j<arr.length;j++){
            minIdx=arr[j]<arr[minIdx]? j:minIdx;

        }
        temp=arr[i];
        arr[i]=arr[minIdx];
        arr[minIdx]=temp;

    }

    return arr;
}

const arr1=[7,5,2,4,3,9];
const arr2=[9,7,5,4,3,1];
const arr3=[1,2,3,4,5,6];
console.log(bubbleSort(arr2));
console.log(selectionSort(arr1));