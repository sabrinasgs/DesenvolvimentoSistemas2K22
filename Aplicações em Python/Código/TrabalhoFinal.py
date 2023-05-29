from PySimpleGUI import PySimpleGUI as psg

#hipertext
psg.theme('Reddit')
layout = [

    [psg.Text('Nome do personagem:'),psg.Input(key = 'user')],
    [psg.Text('Senha:'), psg.Input(key = 'pasword', password_char='*')],
    [psg.Checkbox('Salvar o login?')],
    [psg.Button('Entrar')]
]

#window
janela = psg.Window('Login De Personagens', layout)

#eventos

while True:
    eventos, valores =  janela. read()
    if eventos == psg.WINDOW_CLOSED:
        break
    if eventos == 'Entrar': 
        if valores ['user'] == 'Taryn' and valores ['pasword'] == 'taryn':
            print('Protagonista do jogo. Suas habilidades sao super forca e roubar os poderes dos demais deuses.\n Sua missao e salvar seu irmao e cumprir o destino que o oraculo tinha premeditado a Zeus.')

        elif valores ['user'] == 'Dyname' and valores ['pasword'] == 'dyname':
            print('Irmao de Taryn. Sua habilidade e super forca, foi treinado pelas almas enquanto estava preso,\n alem de ter sido treinado pelos titas quando ainda crianca.')

        elif valores ['user'] == 'Poseidon' and valores ['pasword'] == 'poseidon':
            print('Deus da agua. Suas habilidades sao de dominacao de agua. Ele e responsavel por impedir que a Taryn chegue ao reino de Hades e resgate seu irmao, \n e um dos boss do game, no entando ele nao tem ciencia das tiranias de seu irmao.')

        elif valores ['user'] == 'Hades' and valores ['pasword'] == 'hades':
            print('Deus do submundo. Suas habilidades sao de manipular o fogo e dominar as almas, alem de ser o deus dos mortos.\n Ele e responsavel por resguardar o irmao de Taryn, Dyname em seu mundo, e o deus mais cruel no entanto nao tem ciencia das atitudes de Zeus.')

        elif valores ['user'] == 'Zeus' and valores ['pasword'] == 'zeus':
            print('Deus dos deuses e pai dos olimpianos. Sua habilidade e de dominar os raios. Ele e responsável por cuidar do olimpo.\n Foi ele quem prendeu Dyname no reino de Hades por medo de seu proprio destino e realizou a pratica proibida de consultar o oraculo para saber seu futuro, e o boss mais forte.')

        elif valores ['user'] == 'Cerberus' and valores ['pasword'] == 'cerberus':
            print('Cão de tres cabecas que guarda a porta do inferno, reino de Hades.')

        elif valores ['user'] == 'Medusa' and valores ['pasword'] == 'medusa':
            print('Medusa é uma mulher com serpentes no lugar do cabelo, simbolicamente é trágica, soliutária e uma figura de uma mulher incapaz de amar e ser amada.')

#Testes
        elif valores ['user'] != 'Taryn' and valores ['pasword'] != 'taryn':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Dyname' and valores ['pasword'] != 'dyname':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Poseidon' and valores ['pasword'] != 'poseidon':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Hades' and valores ['pasword'] != 'hades':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Zeus' and valores ['pasword'] != 'zeus':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Medusa' and valores ['pasword'] != 'medusa':
            print('Nao consta em nosso cadastro')

        elif valores ['user'] != 'Cerberus' and valores ['pasword'] != 'cerberus':
            print('Nao consta em nosso cadastro')

        else:
            print("O código está funcionando corretamente!")