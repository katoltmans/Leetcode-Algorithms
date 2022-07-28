# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
# The relative order of the elements should be kept the same.

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        index = 1
        
        for x in range(len(nums)):
            if nums[x] > nums[x-1]:
                nums[index] = nums[x]
                index += 1
                
        # Will return index (number of places that were shifted to the front)
        return index

sln = Solution()  
testArr1 = [1, 1, 2]
print("testArr1 BEFORE: ", testArr1)
print(sln.removeDuplicates(testArr1))
print("testArr1 AFTER: ", testArr1)
print(sln.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))