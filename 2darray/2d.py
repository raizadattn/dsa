# first method not good, pass by reference issue
rows, cols = (5, 5)
arr = [[0]*cols]*rows
print(arr)


rows, cols = (5, 5)
arr = [[0 for i in range(cols)] for j in range(rows)]
print(arr)
