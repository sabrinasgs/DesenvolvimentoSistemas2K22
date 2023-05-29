using System;

namespace MeuPrimeiroProjeto
{
    class Program 
    {
        static void Main(string[] args) 
        {
           ContaCorrente conta_da_Sabrina = new ContaCorrente("Sabrina",12345, 789, 10);
           ContaCorrente conta_da_Gabriele = new ContaCorrente("Gabriele", 12345, 215, 100);
           ContaCorrente conta_da_Santos = new ContaCorrente("Santos", 12345, 858, 1000);

           bool sacar_conta = conta_da_Sabrina.Sacar(100);
           bool sacar_conta1 = conta_da_Gabriele.Sacar(100);
           bool sacar_conta2 = conta_da_Santos.Sacar(100);
          
           Console.WriteLine("A conta é do (a) " + conta_da_Sabrina.Titular + 
                ", a agência é " + conta_da_Sabrina.Agencia + 
                ", e o número é: "+ conta_da_Sabrina.Numero + ", Saldo: " + conta_da_Sabrina.Saldo );

    
           Console.WriteLine("A conta é do (a) " + conta_da_Gabriele.Titular + 
                ", a agência é " + conta_da_Gabriele.Agencia + 
                ", e o número é: "+ conta_da_Gabriele.Numero + ", Saldo: " + conta_da_Gabriele.Saldo);

    
           Console.WriteLine("A conta é do (a) " + conta_da_Santos.Titular + 
                 ", a agência é " + conta_da_Santos.Agencia + 
                 ", e o número é: "+ conta_da_Santos.Numero + ", Saldo: " + conta_da_Santos.Saldo);
        }
    }
}


