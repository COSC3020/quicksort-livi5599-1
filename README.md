# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

-----

The worst-case runtime of my implementation is $\Theta(nlogn)$.  This comes from the while loop which implements my partition function.  Since the array is divided during each iteration of the while loop, that makes that loop's runtime $\Theta(nlogn)$, resulting in the entire implementation's overall runtime $\Theta(nlogn)$.

-----

I received help from Ali and ChatGPT.  Ali gave me ideas on different implementations to use, and ChatGPT helped me understand why certain versions of my code wouldn't work, which helped me know which parts of my code needed revisions, which I then implemented on my own.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
