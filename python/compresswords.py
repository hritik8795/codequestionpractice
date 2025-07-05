def compressword(input_str):
    result = ""
    seen = ""
    counts = {}

    for char in input_str:
        if char not in seen:
            seen += char
        counts[char] = counts.get(char, 0) + 1
    for char in seen:
        result += str(counts[char]) + char
    return result


input_str = "aaaabbbaaabbccc"
output_str = compressword(input_str)
print(output_str)
