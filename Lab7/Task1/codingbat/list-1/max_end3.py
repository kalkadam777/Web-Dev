def max_end3(nums):
  max = nums[0]
  if nums[0]>nums[-1]:
    max = nums[0]
  else:
    max = nums[-1]
  for i in range(3):
    nums[i]=max
  return nums
    
