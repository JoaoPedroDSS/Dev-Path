"""Faça um programa que leia um número e fatore ele"""

num=int(input("Digite o número que será fatorado:"))
c= num
fat= 1
while c>0:
    print("{}".format(c), end='')
    print("x" if c>1 else '=', end='')
    fat*=c
    c-=1
print(fat)