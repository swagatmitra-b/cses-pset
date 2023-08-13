def customers(size, *times): 
    tracker = []
    max = 0
    for i in range(size): 
        start1, end1 = times[i]
        for j in range(i+1, size): 
            start2, end2 = times[j]
            if start1 < end2 and end1> start2:
                tracker.append(i);
                tracker.append(j)
    for i in tracker: 
        freq = tracker.count(i)
        if (freq > max): 
            max = freq
    print(max)

customers(3, [5, 8], [2, 4], [3, 9])
