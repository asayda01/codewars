"""

5 kyu

Find the unique string

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It's guaranteed that array contains more than 2 strings.

This is the second kata in series:

    Find the unique number
    Find the unique string (this kata)
    Find The Unique

"""

from collections import defaultdict

def find_uniq(array):
    dict_1 = {}
    character_1 = defaultdict(int)
    for element in array:
        temp_1 = frozenset(element.strip().lower())
        dict_1[temp_1] = element
        character_1[temp_1] += 1
    
    return dict_1[next(filter(lambda key: character_1[key] == 1, character_1))]