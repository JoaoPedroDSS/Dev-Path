"""Faça um programa que leia o sexo apenas se for masculino ou feminino"""
pare = 1
while pare ==1:
    sexo=str(input("Digite seu sexo:(F/M)")).upper().strip()
    if sexo == "M" or sexo == "F" :
       print("Registrado com sucesso")
       pare+=1 
    else:
        print("Sexo inválido, tente novamente")
        