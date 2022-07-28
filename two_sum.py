# When given an array of integers, return indices of two numbers that add up to a target

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        indices = []
        
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if i != j and nums[i] + nums[j] == target:
                    indices.append(i)
                    indices.append(j)
                    break
            if len(indices) == 2:
                break
        return indices

sln = Solution() # Remember to instantiate an instance
print(sln.twoSum([2, 7, 11, 15], 9)) 
print(sln.twoSum([3, 2, 4], 6))
print(sln.twoSum([3, 3], 6))   