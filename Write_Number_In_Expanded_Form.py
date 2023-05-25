"""

6 kyu

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

"""

def expanded_form(num):
    
    str1 = str(num)
    str2 = ""
    
    for i in range(len(str1),0,-1):
        
        if ( int( str1[::-1][i-1]) != 0):
            
            str2 += str( int( str1[::-1][i-1] ) * pow(10,i-1) ) +" + "
            
    return str2[:len(str2)-3]


"""

def expanded_form(num):
    
    result = []

    for index, digit in enumerate( str( num ) [::-1] ) :

        if int ( digit ) != 0:
            
            result.append( digit + ( '0' * index ) )

    return ' + ' .join( result [::-1] )

"""