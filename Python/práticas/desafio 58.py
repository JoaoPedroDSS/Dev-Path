"""Crie um código que gere um numéro de 0 a 10, que revele o numéro só quando você acertar mas que avise se seu palpite foi alto ou baixo"""
import random
num=(random.randrange(0,10))
pare=1
tentativas=0
while pare==1:
    print("Eu pensei em um numero de 0 a 10, consegue adivinhar qual?")
    palpite=int(input("Seu palpite: "))
    tentativas+=1
    if palpite<num:
        print("Mais UwU")
    elif palpite>num:
        print("Menos UwU")
    elif palpite==num:
        print("Você acertou UwU, você precisou de {} tentativas ".format(tentativas))
        pare+=1