class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = nums[0]
        currentSum = 0

        for n in nums:
            currentSum += n
            res = max(res, currentSum)
            if currentSum < 0:
                currentSum = 0
        
        return res