/*
--------------------------------------------------------------------------------
Resources 

    - 'left and right bounds' pair idea 
    1. https://www.geeksforgeeks.org/iterative-quick-sort/

    - partitionLow function
    2. COSC-2030, Lab6

--------------------------------------------------------------------------------

// we will replicate the functionality of the recursive quicksort
// by storing pairs of (left,right) bounds in a array, and then
// poping off the right and then left value before the next partition

// after the call to partition, we evaluate the next bounds pairs
// in respect to the position of the previous pivot value... 

--------------------------------------------------------------------------------

Example: say we have the array [7,2,1,5,3,8,4,6] ( NOTE : using partitionLow )
 
 0 1 2 3 4 5 6 7 

[7 2 1 5 3 8 4 6] push (l = 0, r = 7), push (l =  , r =  ), pivotStart = 0, pivotEnd = 6 ... ArrayBounds = (0,7)    ... pop (0,7)
[4 2 1 5 3 6 7 8] push (l = 0, r = 5), push (l =  , r =  ), pivotStart = 0, pivotEnd = 3 ... ArrayBounds = (0,5)    ... pop (0,5)
[3 2 1 4 5 6 7 8] push (l = 0, r = 2), push (l = 4, r = 5), pivotStart = 4, pivotEnd = 4 ... ArrayBounds = (0,2,4,5)... pop (4,5)
[3 2 1 4 5 6 7 8] push (l = 0, r = 2), push (l = 4, r = 5), pivotStart = 4, pivotEnd = 4 ... ArrayBounds = (0,2)    ... pop (0,2)
[1 2 3 4 5 6 7 8] push (l = 0, r = 1), push (l =  , r =  ), pivotStart = 1, pivotEnd = 1 ... ArrayBounds = (0,1)    ... pop (0,1)
[1 2 3 4 5 6 7 8] 

--------------------------------------------------------------------------------
*/

function quicksort(array)
{
    var left = 0
    var right = array.length-1

    if (array.length > 0)
    {
        var bounds = new Array()
        bounds.push(left)
        bounds.push(right)
        console.log(bounds)
    
        while(bounds.length > 0)
        {
            console.log("--------------------------------------")
            console.log("beginning (bounds) --------> " + bounds)
            console.log("before partition (array) --> " + array)
            // now we will pop off our bounds for the next partition call
            // if a left AND right pair were just added after the recent parition
            // then we will first call the right pair, then the left
            // pop of first element from pair (right) then second (left)

            // pop first value, the last element for our partition
            let last = bounds.pop()
            // pop second value, the first element for our partition 
            let first = bounds.pop()
            // find pivot position when parititioning the first element
            let pivot = partitionLow(array, first, last)

            console.log("previous bounds used ------> (" + first + "," + last + ")" + 
                        "\nafter pop (bounds) --------> " + bounds + 
                        "\nafter partition (array) ---> " + array)
    
    
            if (pivot - 1 > first) // if true, push left bounds (first, pivot-1)
            {
                // push left index for left pair
                bounds.push(first)   
                // push right index for left pair 
                bounds.push(pivot - 1)

                console.log("push left bounds : ( " + first + ", " + (pivot-1)  + ")")
            }
    
            if (pivot + 1 < last) // if ture, push right bounds (pivot+1, last)
            {
                // push left index for right pair 
                bounds.push(pivot + 1)
                // push right index for right pair 
                bounds.push(last)

                console.log("push left bounds : ( " + (pivot + 1) + ", " + last + ")")
            }

            console.log("after push (bounds) -------> " + bounds)
        }
    }
    return array;
}


function swap (arr, x, y)
{
    let tmp = arr[x]
    arr[x] = arr[y]
    arr[y] = tmp
}

// partition the around the first element in the array
function partitionLow (x, left, right)
{
    var pivot = x[left]            // pivot is leftmost element
    var pivotIndex = right         // set pivot at right index (we dont know where it will be yet)
    for (let i = right; i > left; i--)
    {
        if (x[i] >= pivot)        // if element is greater than pivot (or equal)
        {
            swap(x,pivotIndex,i); // swap element at pivotIndex with element at current increment 
            pivotIndex--;         // decrement pivotIndex
        }
    }
    //console.log("swap " + pivotIndex + " and " + left)
    swap(x,pivotIndex,left)      // pivot still at beginning, swap with pivotPosition
    return pivotIndex
}

// partition the around the last element in the array
function partitionHigh (x, left, right)
{ 
    var pivot = x[right]          // pivot is rightmost element
    var pivotIndex = left         // set pivot index at 0 (we dont know where it will be yet)
    for (let i = left; i < right; i++)
    {
        
        if (x[i] <= pivot)        // if element is less than pivot (or equal)
        { 
            swap(x,pivotIndex,i); // swap element at pivotIndex with element at current increment 
            pivotIndex++;         // increment pivotIndex
        }
    }
    swap(x,pivotIndex,right)      // pivot still at end, swap with pivotPosition
    return pivotIndex
}

// simplified version for understanding, not practicle, nor usable for our current implementation of quicksort 
function partitionSimple (x, left, right, p)
{
    var pivot = x[p]
    var x_partition = new Array()
    for (let i = left; i <= right; i++)
    {
        if (x[i] <= pivot && i != p)
        {
            x_partition.push(x[i])
        }
    }
    x_partition.push(pivot)
    for (let i = left; i <= right; i++)
    {
        if (x[i] > pivot && i != p)
        {
            x_partition.push(x[i])
        }
    }
    return x_partition
}



