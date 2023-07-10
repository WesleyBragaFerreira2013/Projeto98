var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var score_player1 = 0;
var score_player2 = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = score_player1;
document.getElementById("player2_score").innerHTML = score_player2;
document.getElementById("player_question").innerHTML = "turno de pergunta: " + player1_name;
document.getElementById("player_answer").innerHTML = "turno de resposta: " + player2_name;

function send() {
    numero1 = document.getElementById("number1").value;
    numero2 = document.getElementById("number2").value;
    conta = parseInt(numero1) * parseInt(numero2);

    questao = "<h4>" + numero1 + "X" + numero2 + "</h4>";
    input = "<br>Resposta: <input type='text' id='input_check_box'>";
    butao = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    div = questao + input + butao;

    document.getElementById("output").innerHTML = div;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}