"""

6 kyu

Build Tower

Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

Go challenge Build Tower Advanced once you have finished this :)

"""


"""

def tower_builder(n_floors):
    arr = []
    temp_n = n_floors
    for i in range(n_floors):
        temp_n -= 1
        arr.append(' ' * temp_n + '*' * ( i * 2 + 1 ) + ' ' * temp_n)
    return arr

"""

def tower_builder(n):
    return [("*" * (i*2-1)).center(n*2-1) for i in range(1, n+1)]