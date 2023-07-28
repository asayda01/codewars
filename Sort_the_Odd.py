def sort_array(source_array):
    
    sorted_odd_lis = sorted( [n for n in source_array if  n % 2 != 0] )
    odd_index = -1
    odd_lis = []
    
    for i in source_array:
        
        odd_index = odd_index + 1
        if i % 2 != 0 :
            odd_lis.append(odd_index)

    for j in range ( len( sorted_odd_lis ) ) :
        temp = odd_lis[j]
        source_array [temp] = sorted_odd_lis [j]
    
    return source_array