# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        
        assert len(strs) > 0
        
        # declare empty string to add matching letters
        prefix = ""
        
        # Replace prefix with set of matching prefix
        for letter in zip(*strs):
            if len(set(letter)) == 1:
                prefix += letter[0]
            else: 
                break
                
        
        return prefix
    

sln = Solution()
print(sln.longestCommonPrefix(["flower", "flow", "flight"]))
print(sln.longestCommonPrefix(["dog", "racecar", "car"]))