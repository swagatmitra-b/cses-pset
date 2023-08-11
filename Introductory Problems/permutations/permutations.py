def permutation(n):
    full_array = [i+1 for i in range(n)]
    even_array = list(filter(lambda x: x % 2 == 0, full_array))
    odd_array = list(filter(lambda x: x % 2 != 0, full_array))
    if n > 3:
        if n % 2 != 0:
            a = odd_array[-1]
            b = odd_array[0]
            temp = a
            a = b
            b = temp
            even_array.reverse()
            even_array.extend(odd_array)
            return even_array
        else:
            even_array.extend(odd_array)
            return even_array

    else:
        return 'NO SOLUTION'

print(permutation(10))
