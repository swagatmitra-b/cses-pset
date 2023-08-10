def factorial(n): 
    if n == 0 or n == 1: 
        return 1
    return n*factorial(n-1)

def trailing_zeroes(n): 
    fact = list(str(factorial(n)))
    fact.reverse()
    if fact[0] == '0': 
        for i, digit in enumerate(fact): 
            if digit != '0': 
                return len(fact[0:i])
    
print(trailing_zeroes(20))