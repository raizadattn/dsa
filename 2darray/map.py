import collections
map = collections.defaultdict(int)
map[0] = 1
print(map[2])

map2 = collections.defaultdict(set)
map2[1] = {1,2,3}
map2[(1,2)] = {4,56}
map2[(2,1)] = {7,5,6}
map2[(1,2)] = {4}


print(map2)