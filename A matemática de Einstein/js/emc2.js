window.onload = function () {
    
    $('.modal-trigger').leanModal();

    var VELOCIDADE_LUZ_VACUO_KM_S = 300000;

    document.getElementById('btnCalcular').addEventListener('click', function (e) {

        e.preventDefault();
        
        $('#modal1').openModal();

        var massa = document.getElementById('txtMassa').value;

        var energia = calcularEnergia(massa, VELOCIDADE_LUZ_VACUO_KM_S);

        exibirValorEnergia(energia);

    });

    function calcularEnergia(massa, velocidadeLuz) {
        if(massa == '') return 0;
        return massa * (velocidadeLuz * velocidadeLuz);
    }

    function exibirValorEnergia(energia) {
        document.getElementById('lblResultadoEnergia').innerHTML = energia + '<small> joules</small>';
    }
};