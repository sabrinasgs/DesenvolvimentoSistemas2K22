def Teste():
    numCadastrado = Cadastro()

    if numCadastrado < 1:
        print("Está função está incorreta")
    if numCadastrado > 22:
        print("Está função está incorreta")


def Cadastro():

    players = []
    numJogadores = 0

    for player in range(0, 22):
        playerCadastrado = (float(input("digite o numero do Jogador:")))

        if playerCadastrado == -1:
            print("PROGRAMA ENCERRADO!")
            return numJogadores

        print("Jogador:", playerCadastrado)
        numJogadores += 1
        players.append(playerCadastrado)

    return numJogadores

#Cadastro()
Teste()




