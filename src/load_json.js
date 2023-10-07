// import { HorariosProfessor } from "./horarios_professor";
var fs = require("fs");

class LoadJson {
    constructor(nome) {
      var json;
      // this.consultar(nome)
    }
  
    consultar(nome) {
      fs.readFile("src\\" + nome + ".json", "utf8", function (err, data) {
        console.log(data);
        this.json = JSON.parse(data)
        var professor = new HorariosProfessor(json.nomeDoProfessor, json.horarioDeAtendimento, json.periodo, json.sala)
        console.log(professor);return
      });
    }

    getNome(json) {
      return this.json.nomeDoProfessor;
    }

    getHorario(teste) {
      // return this.json.horarioDeAtendimento;
      return teste
    }

    getPeriodo() {
      return this.json.periodo;
    }

    getSala() {
      return this.json.sala;
    }
  }


module.exports = { LoadJson };