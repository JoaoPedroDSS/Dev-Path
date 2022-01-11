"""Analisar 7 anos de nascimentos e dizer quem é menor de idadde e qeum não"""
ano=0
checagem=0
menores=0
maiores=0
for i in range(1,8):
    ano=int(input("ano de nascimento da {}° pessoa:".format(i)))
    checagem=2021-ano
    if  checagem<=18:
        menores+=1
    if checagem>18:
        maiores+=1
print("nº de Pessoas menores de idade {}\nnº de pessoas maiores de idade {}".format(menores,maiores))