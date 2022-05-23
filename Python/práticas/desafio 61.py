"""Faça um código que faz uma progressão aritmética, com 10 termos e ultilizando While"""

pri=int(input("Primeiro termo:"))
raz=int(input("Razão:"))
dec= pri+(10-1)*raz
pro=0
while pri!=dec : 
    pri+=raz 
    print("{}".format(pri), end='')
    if pri!=dec :
        print(" => ", end='')
