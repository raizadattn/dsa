from collections import defaultdict
  
  
# Defining a dict
d = defaultdict(list)
print('d is ',d)
for i in range(5):
    print(d[i])
    d[i].append(i)
    print(d[i],'-------')

      
print("Dictionary with values as list:")
print(d)
print('d of 100 is ',d[100])