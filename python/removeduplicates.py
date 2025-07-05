def removeDuplicates(arr):
    result = []
    for i in arr:
        if i not in result:
            result.append(i)

    return result


arr = [1, 2, 3, 4, 5, 6, 74, 33, 33, 33]
print(removeDuplicates(arr))
