"""

6 kyu
Who likes it?

You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing
 the names of people that like an item. 
 It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

"""


def likes(names):
    
    len1 = len(names)
    
    if (len1 == 0):
        return "no one likes this"
    if (len1 == 1):
        return "{} likes this".format(names[0])
    if (len1 == 2):
        return "{} and {} like this".format(names[0],names[1])
    if (len1 == 3):
        return "{}, {} and {} like this".format(names[0],names[1],names[2])
    if (len1 > 3):
        return "{}, {} and {} others like this".format(names[0],names[1],len1-2)

"""

def likes(names):
    match names:
        case []: return 'no one likes this'
        case [a]: return f'{a} likes this'
        case [a, b]: return f'{a} and {b} like this'
        case [a, b, c]: return f'{a}, {b} and {c} like this'
        case [a, b, *rest]: return f'{a}, {b} and {len(rest)} others like this'

"""