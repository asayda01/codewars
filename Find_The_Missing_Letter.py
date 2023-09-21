import string

def find_missing_letter(chars):
    
    abc = string.ascii_letters
    
    for index , element in enumerate( chars [ : len ( chars ) ] ):
        
        if chars [ index + 1 ]  != abc [ abc.index( element ) + 1 ]:
                return abc [ abc.index( element ) + 1 ]


"""

def find_missing_letter(chars):
    
    abc = "abcdefghijklmnopqrstuvwxyz"
    
    for index , element in enumerate(chars[:len(chars)]):
        
        if chars [ index + 1 ].lower()  != abc [ abc.index( element.lower() ) + 1 ]:
            
            if element.lower() == element:
                return abc [ abc.index( str(element) ) + 1 ]
            
            else:
                return abc [ abc.index( str(element.lower()) ) + 1 ] .upper()

"""