[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11871223&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Worst case would be a sorted list, where we will have to run a while loop n times. 

- This is because we will need to evaluate 9 pairs of bounds that are each called to partition
- If we have array with 10 sorted elements, and we wanted to call quicksort, we would need to partition (0,9), (1,9), (2,9), (3,9), (4,9), (5,9), (6,9), (7,9), (8,9) BREAK

- We take into account tht we call partition every pass, therefore, for each pair (1,9) to (8,9), we call partition which loops through the length of the input size, and evaluates two constant time operations, an 'if' statement and a swap function that will always have a constant time. 
- With that being said, we can conclude that the partition function has a time complexity $\Theta$(n), where n is the size of the input list (right - left)
    
- Besides the while loop that runs either 0 or n-1 times, the only two operations that are significant for time operations is the number of runs through the while loop, which would be $\Theta$(n) for a sorted list, and a call to partition, also $\Theta$(n), for every pass in teh while loop 

- Therefore in total, our time complexity for a worst case scenario would be $\Theta$(n*n) = $\Theta$(n^2)