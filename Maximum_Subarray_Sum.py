def max_sequence(arr):
    
    max_tot = 0
    curr_tot = 0
    
    for i in arr:
        
        curr_tot += i
        
        if max_tot < curr_tot :
            max_tot = curr_tot
            
        if curr_tot < 0:
            curr_tot = 0
    
    return max_tot


"""
def max_sequence(arr):
    
    if len(arr) == 0 : return 0
    elif len([i for i in arr if i <= 0]) == len(arr): return 0
    elif len([i for i in arr if i >= 0]) == len(arr): return sum(arr)

    else:
        
        max_tot = float("-inf")
        max_ending_here = 0
        
        for i in range(len(arr)):
            
            max_ending_here += arr[i]
            
            if max_tot < max_ending_here:
                max_tot = max_ending_here
                
            if max_ending_here < 0:
                max_ending_here = 0
                
        return max_tot
"""