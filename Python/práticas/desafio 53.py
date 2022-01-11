"""Escreva uma frase ou palavra, e veja se ela de trás para frente é igual ou não, (palindromo)"""
frase= str(input("Digite uma frase ou palavra:")).strip().upper()
sep= frase.split()
junto= ''.join(sep)
inverso=''
for letra in range(len(junto)-1,-1,-1):
    inverso+= junto[letra]
if inverso==junto:
    print("Aqui temos um palindromo {},{}".format(junto,inverso))
else:
    print("Nao temos um palindromo {},{}".format(junto,inverso))