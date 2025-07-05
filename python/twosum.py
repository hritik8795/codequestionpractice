# def two_sum(nums, target):
#     hashmap = {}
#     for i, num in enumerate(nums):
#         complement = target - num
#         if complement in hashmap:
#             return [hashmap[complement], i]
#         hashmap[num] = i

# print(two_sum([2, 7, 11, 15], 9))


# def two_sum(nums, target):
#     for i in range(len(nums)):
#         for j in range(i + 1, len(nums)):
#             if nums[i] + nums[j] == target:
#                 return [i, j]

# print(two_sum([2, 7, 11, 15], 9))


def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                # return [nums[i], nums[j]]
                return [i, j]


print(two_sum([2, 4, 7, 8, 4], 15))
