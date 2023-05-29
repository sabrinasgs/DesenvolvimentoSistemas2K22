temp = float(input("Digite o valor da temperature atual da Unidade de Processamento Grafico: "))
if(temp >= 65 and temp <= 85):
    print("A GPU entá operando em uma temperatura normal!")
elif(temp > 85 and temp <= 90):
    print('A GPU não está trabalhando de forma adequada')
elif(temp > 90):
    print("CUIDADO! temperatura acima do limite")