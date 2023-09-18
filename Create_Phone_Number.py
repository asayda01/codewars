def create_phone_number(n):
	return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

"""
def create_phone_number(n):
    return "(" + str( ''.join(str(e) for e in n[:3]) )  + ") " + str( ''.join(str(e) for e in n[3:6]) ) + "-" + str( ''.join(str(e) for e in n[6:]) )
"""