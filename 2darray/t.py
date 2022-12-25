pairs = [[-6,9],[1,6],[8,10],[-1,4],[-6,-2],[-9,8],[-5,3],[0,3]]


pairs.sort()

print(pairs)

for start, end in pairs:
    print('start', start, 'end', end)

    streak = 1
    lastEnd = pairs[0]

    for i in range(1, len(pairs)):

                x, y = pairs[i]
                
                print('x > lastEnd[1]', x , lastEnd[1], '----', lastEnd)
                if( x > lastEnd[1] ):
                    print('inside', x,lastEnd[1])
                    streak += 1
                    lastEnd = pairs[i]
            
            # return streak