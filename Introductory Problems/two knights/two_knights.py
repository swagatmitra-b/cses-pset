def twoKnights(n): 
    array = [i+1 for i in range(n)]
    for k in array: 
        numOfSq = k*k
        comboOfValidSq = ((numOfSq)**2 - (numOfSq))/2
        inValidSq = (k-1)*(k-2)*2*2
        print(int(comboOfValidSq - inValidSq))

twoKnights(8)
