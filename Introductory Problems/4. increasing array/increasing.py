def increasing_array(size, *arr):
    arr = list(arr)
    moves = 0
    for i, _ in enumerate(range(size-1)):
        if arr[i] > arr[i+1]:
            diff = arr[i] - arr[i+1]
            arr[i+1] += diff
            moves += diff
    print(arr)
    return moves

print(increasing_array(5, 3, 2, 5, 1, 7))
