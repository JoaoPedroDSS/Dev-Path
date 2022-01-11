"""Leia 4 pesos e diga qual deles é o maior e o menor"""
peso=0
maior=0
menor=640
for i in range(1,5):
    peso= float(input("Digite o {}º peso:".format(i)))
    if peso>maior:
        maior=peso
    if peso<menor:
        menor=peso  
print("O maior peso foi de {:.1f}Kg\nO menor peso foi de {:.1f}Kg".format(maior,menor))
