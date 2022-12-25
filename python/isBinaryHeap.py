# https://www.codingninjas.com/codestudio/problems/is-binary-heap-tree_893136?leftPanelTab=1

'''
  ----Binary tree node class for reference-----
    class BinaryTreeNode:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

'''
class BinaryTreeNode:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

def isBinaryHeapTree(root):

    # Write your code here.
    count = countNodes(root)
#     print('cnt',count)
    ans = isCbt(root ,count, 0)
#     print('ans',ans)
    return ans and isMaxOrder(root)
#     pass
def countNodes(root):
    if root is None:
        return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
def isCbt(root, count, i):
#     print('cbt',root, root.data,count,i)
#     print('isVbt')
    if root is None:
#         print('non')
        return True
    if i>=count:
        return False
    left = isCbt(root.left, count, 2*i+1 )
#     print('back',left)
    right = isCbt(root.right, count, 2*i+2 )
    
    return left and right
def isMaxOrder(root):
#     print('isMax')
    if root.right is None and root.left is None:
        return True

    if root.right is None:
        return root.left.data<=root.data
    if root.left.data <= root.data and root.right.data <= root.data:
        return isMaxOrder( root.left ) and isMaxOrder( root.right)
    else:
        return False
    

root = BinaryTreeNode(23)
root.left = 36
root.left.left = 10
root.left.left = 1
root.left.right = 14
root.left.right = 23
root.right = 23
root.right.left = 5
root.right.right = 6
