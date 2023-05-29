/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2022 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */

/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */

      int sequencia[100] = {}; //Declaração de variável de sequência
	  int rodada_atual = 0;  //Declaração do estado de inicialização da rodada
	  int passo_atual_na_sequencia = 0;  //Declaração de contagem do próximo passo da sequência
	  int botao_pressionado = 0;  //Declaração do estado de inicialização do botão
	  int perdeu_o_jogo = 0;  //Declaração de variável ao perder o jogo
	  int pinosLeds [4] = {GPIO_PIN_12,GPIO_PIN_13,GPIO_PIN_14,GPIO_PIN_15} ;  //Declaração de variável dos leds
	  int pinosBotoes [4] = {GPIO_PIN_9,GPIO_PIN_10,GPIO_PIN_11,GPIO_PIN_15} ;  //Declaração de variável dos botões

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
static void MX_GPIO_Init(void);
/* USER CODE BEGIN PFP */
void teste_leds(void); //Chamando a função de testar leds
void proximaRodada(); //Chamando a função de próxima rodada
void reproduzirSequencia(); //Chamando a função de reproduzir sequência
void aguardarJogador(); //Chamando a função de aguardar jogador
void aguardarJogada(); //Chamando a função de aguardar jogada
void verificarJogada(); //Chamando a função de verificar jogada
/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void) //Inicialização da main - código principal
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  /* USER CODE BEGIN 2 */
teste_leds(); //Função para testar os leds
  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1) //Função de loop
  {

	  if (perdeu_o_jogo) { //Condição caso o jogador perca o jogo
	      int sequencia[100] = { }; //Declaração para sequência voltar ao inicio
	      rodada_atual = 0; //Declaração para a rodada voltar ao inicio
	      passo_atual_na_sequencia = 0; //Declaração para zerar a sequência
	      perdeu_o_jogo = 0; //Declaração para zerar a sequência de ganhos
	    }
	  proximaRodada(); //Chamando a função de próxima roodada
	  reproduzirSequencia(); //Chamando a função de reproduzir Sequência
	  aguardarJogador(); //Chamando a função de aguardar jogador
	  HAL_Delay(1000); //Delay - Espera

    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue = RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_NONE;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }
  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV1;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_0) != HAL_OK)
  {
    Error_Handler();
  }
}

/**
  * @brief GPIO Initialization Function
  * @param None
  * @retval None
  */
static void MX_GPIO_Init(void)
{
  GPIO_InitTypeDef GPIO_InitStruct = {0};

  /* GPIO Ports Clock Enable */
  __HAL_RCC_GPIOB_CLK_ENABLE();
  __HAL_RCC_GPIOA_CLK_ENABLE();

  /*Configure GPIO pin Output Level */
  HAL_GPIO_WritePin(GPIOB, GPIO_PIN_12|GPIO_PIN_13|GPIO_PIN_14|GPIO_PIN_15, GPIO_PIN_RESET);

  /*Configure GPIO pins : PB12 PB13 PB14 PB15 */
  GPIO_InitStruct.Pin = GPIO_PIN_12|GPIO_PIN_13|GPIO_PIN_14|GPIO_PIN_15;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(GPIOB, &GPIO_InitStruct);

  /*Configure GPIO pins : PA9 PA10 PA11 PA12 */
  GPIO_InitStruct.Pin = GPIO_PIN_9|GPIO_PIN_10|GPIO_PIN_11|GPIO_PIN_12;
  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
  GPIO_InitStruct.Pull = GPIO_PULLDOWN;
  HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

  /*Configure GPIO pin : PA15 */
  GPIO_InitStruct.Pin = GPIO_PIN_15;
  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

}

/* USER CODE BEGIN 4 */
void teste_leds(void){ //Chamando a função de testar leds
	HAL_GPIO_WritePin(GPIOB,pinosLeds[0], 1);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[0], 0);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[1], 1);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[1], 0);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[2], 1);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[2], 0);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[3], 1);
    HAL_Delay(100);
    HAL_GPIO_WritePin(GPIOB,pinosLeds[3], 0);
    HAL_Delay(100);
} //Fechando chaves
void proximaRodada() { //Função de próxima rodada
  int numero_sorteado = random(0, 4); //Escolha de próxima a ser ligado aleatoriamente
  numero_sorteado=numero_sorteado%4; //Pegando o resto da divisão para escolha do led
  sequencia[rodada_atual++] = numero_sorteado;
} //Fechando chaves
void reproduzirSequencia() { //Chamando a função de reproduzir de sequência
  for (int i = 0; i < rodada_atual; i++) {
    HAL_GPIO_WritePin(GPIOB, pinosLeds[sequencia[i]], 1);
    HAL_Delay(500);
    HAL_GPIO_WritePin(GPIOB, pinosLeds[sequencia[i]], 0);
    HAL_Delay(100);
  }
}
void aguardarJogador() {
  for (int i = 0; i < rodada_atual; i++) {
    aguardarJogada();
    verificarJogada();

    if (perdeu_o_jogo) {
      break;
    }

    passo_atual_na_sequencia++;
  }
  passo_atual_na_sequencia = 0;
}
void aguardarJogada() {
 int jogada_efetuada = 0;
  while (!jogada_efetuada) {
    for (int i = 0; i <= 3; i++) {
    if (HAL_GPIO_ReadPin(GPIOA, pinosBotoes[i]) == 1){
        botao_pressionado = i;
        HAL_GPIO_WritePin(GPIOB, pinosLeds[i], 1);
        HAL_Delay(300);
        HAL_GPIO_WritePin(GPIOB, pinosLeds[i], 0);
        jogada_efetuada = 1;
      }
    }
   HAL_Delay(10);
  }
}
void verificarJogada() {
  if (sequencia[passo_atual_na_sequencia] != botao_pressionado) {
    for (int i = 0; i <= 3; i++) {
      HAL_GPIO_WritePin(GPIOB, pinosLeds[i], 1);
      HAL_Delay(200);
      HAL_GPIO_WritePin(GPIOB,pinosLeds[i], 0);
    }
    for (int i = 0; i <= 3; i++) {
    	HAL_GPIO_WritePin(GPIOB,pinosLeds[0], 1);
    	HAL_GPIO_WritePin(GPIOB,pinosLeds[1], 1);
    	HAL_GPIO_WritePin(GPIOB,pinosLeds[2], 1);
    	HAL_GPIO_WritePin(GPIOB,pinosLeds[3], 1);
        HAL_Delay(100);
        HAL_GPIO_WritePin(GPIOB,pinosLeds[0], 0);
        HAL_GPIO_WritePin(GPIOB,pinosLeds[1], 0);
        HAL_GPIO_WritePin(GPIOB,pinosLeds[2], 0);
        HAL_GPIO_WritePin(GPIOB,pinosLeds[3], 0);
        HAL_Delay(100);
}

    perdeu_o_jogo = 1;
}
}


/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */

/************************ (C) COPYRIGHT STMicroelectronics *****END OF FILE****/
