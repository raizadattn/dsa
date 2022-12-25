# https://www.codingninjas.com/codestudio/problems/merge-two-binary-max-heaps_1170049?leftPanelTab=1

def mergeHeap(arr1, arr2):
    # Write your code here
#     print('trlsld',arr1,arr2)
    merge = []
    for i in arr1:
        merge.append(i)
    for i in arr2:
        merge.append(i)
    buildHeap(merge,len(merge) )
#     print(merge, len(merge))
#     printHeap(arr1)
    return merge
    
    

# def printHeap(arr):
# #     for i in arr:
# #         print(i)
# #     print('haha',arr,len(arr))
# #       print(arr)
# #         return arr
def buildHeap(arr, n):
#     print('inside Bh')
    startIndex = int(n/2)-1
    for i in range(startIndex, -1, -1):
        heapify(arr, n, i)

def heapify(arr,n ,i ):
#     if i >= n:
#         return
    largest = i
    left = 2*i + 1
    right = 2*i+ 2
    if left<n and arr[largest]<arr[left]:
        largest = left
    if right< n and arr[largest]<arr[right]:
        largest = right
    if(largest != i):
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)