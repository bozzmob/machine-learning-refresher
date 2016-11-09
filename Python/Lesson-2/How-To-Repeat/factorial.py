# Define a procedure, factorial, that
# takes one number as its input
# and returns the factorial of
# that number.

def factorial(n):
    i = 1
    fact = 1
    while i < n:
        fact = fact * n
        n = n - 1
        
    return fact
    
#print factorial(4)
#>>> 24
#print factorial(5)
#>>> 120
#print factorial(6)
#>>> 720

