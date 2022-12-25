arr = [1,2]
path = []
path = path+[arr[1]]

print(path)

dist = [0,float('inf')]

if dist[0]+10< dist[1]:
    print('yes')
else:
    print('no')

arr = [float('-inf')]*8
# arr[3]='q'
print(arr)
if arr[1]>10:
    print('yes')
else:
    print('np')

if float('-inf')==arr[0]:
    print('hmmm')

else:
    print('n----',arr[0])


print( 'inf + 1', float('inf')+1)