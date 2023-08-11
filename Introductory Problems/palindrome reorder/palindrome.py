def palindrome_reorder(str): 
    alphaSet = []
    count = {}
    string = list(str.lower())
    for i in range(97, 123): 
        alphaSet.append(chr(i))
    for alpha in alphaSet: 
        if (alpha in string): 
            count[alpha] = string.count(alpha)
    if (len(string) % 2 != 0):
        oddSize = list(filter(lambda x: x % 2 != 0, count.values()))
        if (len(oddSize) != 1):
            return 'NO SOLUTION'
    else: 
        for freq in count.items(): 
            if (freq % 2 != 0): 
                return 'NO SOLUTION'
    return makePali(count)


def makePali(count): 
    start = "" 
    mid = ""
    end = ""
    for key in count: 
        if count[key] % 2 != 0:
            for _ in range(count[key]): 
                mid += key
        else: 
            for _ in range(int(count[key]/2)): 
                start += key
                end += key
    delim = ""
    end = list(end)
    end.reverse()
    end = delim.join(end)      
    return start+mid+end

print(palindrome_reorder('AAABACCBA'))

