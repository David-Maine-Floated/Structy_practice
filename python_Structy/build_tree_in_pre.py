class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def build_tree_in_pre(in_order, pre_order):

  return _build_tree_in_pre(in_order, 
                           pre_order, 
                           0, 
                           len(in_order) - 1, 
                           0, 
                           len(pre_order) - 1)

def _build_tree_in_pre(in_order, pre_order, start_in, end_in, start_pre, end_pre):
  if end_in < start_in: 
    return None 

  value = pre_order[start_pre]
  root = Node(value)
  mid = in_order.index(value)
  leftSize = mid - start_in

  root.left = _build_tree_in_pre(
    in_order, 
    pre_order,
    start_in, 
    mid -1,
    start_pre + 1,
    start_pre + leftSize
  )

  root.right = _build_tree_in_pre(
    in_order, 
    pre_order,
    mid + 1, 
    end_in,
    start_pre + leftSize + 1,
    end_pre
  )
  

  return root