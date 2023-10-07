// const { descobrirPredio } = require('../src/horarios_professor');
const { HorariosProfessor } = require('../src/horarios_professor');
const { LoadJson } = require('../src/load_json');

  
  describe('Testando os horários dos professores', () => {
    it('Encontrar prédio', () => {
      // Criando um mock para a função soma
      const descobrirPredioMock = jest.fn((sala) => retornaPredio(sala));

      var horariosProfessor = new HorariosProfessor(1,2,3,4)
  
      // Substituindo a implementação da função soma pelo mock
      horariosProfessor.descobrirPredio.descobrirPredio = descobrirPredioMock;
  
      // Chamando a função com os argumentos
      const resultado = horariosProfessor.descobrirPredio.descobrirPredio(2);
  
      // Verificando se o mock foi chamado corretamente
      expect(descobrirPredioMock).toHaveBeenCalledWith(2);
  
      // Verificando o resultado da função
      expect(resultado).toBe(1);
  
      // Restaurando a implementação original da função soma
      horariosProfessor.descobrirPredio = jest.fn();
    });

    it('Get nome', () => {
      // Criando um mock para a função soma
      var x = 1
      const getHorarioMock = jest.fn((x) => '19:30');

      var loadJson = new LoadJson('Cris');
      
      // Substituindo a implementação da função soma pelo mock
      loadJson.getHorario.getHorario = getHorarioMock;
      
      var horariosProfessor = new HorariosProfessor('Cris')

      horariosProfessor.addHorario(loadJson)
  
      // Chamando a função com os argumentos
      const resultado = horariosProfessor.getHorario(x);
  
      // Verificando se o mock foi chamado corretamente
      // expect(getHorarioMock).toHaveBeenCalledWith();
  
      // Verificando o resultado da função
      expect(resultado).toBe('Cris');
  
      // Restaurando a implementação original da função soma
      horariosProfessor.getHorario = jest.fn();
    });

  });

  function retornaPredio(sala){
    if (sala < 0 || sala > 30)
    {
        return -1
    }
    if (sala <= 5)
    {
        return 1
    }
    else if (sala <= 10)
    {
        return 2
    }
    else if (sala <= 15)
    {
        return 3
    }
    else if (sala <= 20)
    {
        return 4
    }
    else if (sala <= 25)
    {
        return 5
    }
    else
    {
        return 6
    }
  }