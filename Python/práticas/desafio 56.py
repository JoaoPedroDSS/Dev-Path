"""leia o nome ,sexo e idade de quatro pessoas e dê o homem mais velho, quantas mulheres tem menos de 20 anos e a média de todas as idades"""
velho=''
velhoidade=0
soma=0
for i in range(1,3):
    print("---{}° PESSOA---".format(i)) 
    nome=str(input("Digite o nome:")).strip()
    idade=int(input("Digite a idade:"))
    sexo=str(input("Digite o sexo[F/M]:")).upper().strip()
    """if sexo=='M' and idade<idade>velhoidade:
        velhoidade=idade"""
    soma+=idade
print("Media de idades:{.:1f}".format(soma/2))    