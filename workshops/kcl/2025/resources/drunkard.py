import random

foo = int(input('Enter width of space: '))
bar = int(input('Enter height of space: '))
baz = 0
qux = 0
quux = []
while baz != foo - 1 or qux != bar - 1:
    choice = random.randint(0, 3)
    if choice == 0 and qux < bar - 1:
        qux += 1
    elif choice == 1 and baz < foo - 1:
        baz += 1
    elif choice == 2 and qux > 0:
        qux -= 1
    elif choice == 3 and baz > 0:
        baz -= 1
    quux.append('(' + str(baz) + ',' + str(qux) + ')')
print('Drunkard path: ' + str(quux))
print('Final position: (' + str(baz) + ',' + str(qux) + ').')