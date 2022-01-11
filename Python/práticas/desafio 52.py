"""Digite um número e diga se ele é primo"""
y=0
x= int(input("Digite um número:"))
for i in range(1,x+1): 
   if x%i==0 or x%i==x:
      y+=1
if 2<y :
   print("{} não é primo".format(x)) 
else:
   print("{} é um número primo".format(x))   