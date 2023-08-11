def repetitions(sequence):
    max_item = ''
    max_count = 0
    longest = []
    for i, codon in enumerate(sequence):
        if i+1 < len(sequence) and sequence[i+1] == codon:
            longest.append(codon)
    for i in longest:
        item_count = longest.count(i)
        if item_count > max_count:
          max_count = item_count
          max_item = i
    return max_item, max_count+1

x,y = repetitions('AAGGGTCCCCCTGA')
print(x, y)
