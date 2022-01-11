"""Progressão aritmética de 10 termos"""

num=int(input("Primeiro termo:"))
raz=int(input("A razão:"))
dec= num+(10-1)*raz
for i in range(num,dec+raz,raz):
    print(i)