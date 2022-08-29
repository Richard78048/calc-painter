//--------------------------funções de esconder----------------------------------------------//
function areaexterna() {
    var checkBox = document.getElementById("area_externa_ativa");
    var areaexternacontainer = document.getElementById("area_externa");
    var areaexternainput = document.getElementById("input_area_externa");
    var areaexternainputradio = document.getElementById("area_externa_radio");

        if (checkBox.checked == true){
            areaexternacontainer.style.display = "block";
            areaexternainput.required = true;
            areaexternainputradio.required = true;
            } else {
                areaexternacontainer.style.display = "none";
                areaexternainput.required = false;
                areaexternainputradio.required = false;
            }	
}
function portoes() {
    var checkBoxportoes = document.getElementById("existem_portoes");
    var estadoportoescontainer = document.getElementById("estado_portoes");
    var portoesinput = document.getElementById("quantidade_portoes");
    var portoesinputradio = document.getElementById("portao_pintado");

        if (checkBoxportoes.checked == true){
            estadoportoescontainer.style.display = "block";
            portoesinput.required = true;
            portoesinputradio.required = true;
            } else {
                estadoportoescontainer.style.display = "none";
                portoesinput.required = false;
                portoesinputradio.required = false;
            }	
}
function portas() {
    var checkBoxportas = document.getElementById("existem_portas");
    var estadoportascontainer = document.getElementById("estado_portas");
    var portasinput = document.getElementById("quantidade_portas");
    var portasinputradio = document.getElementById("porta_pintada");

        if (checkBoxportas.checked == true){
            estadoportascontainer.style.display = "block";
            portasinput.required = true;
            portasinputradio.required = true;
            } else {
                estadoportascontainer.style.display = "none";
                portasinput.required = false;
                portasinputradio.required = false;
            }	
}
function rodapes() {
    var checkBoxrodape = document.getElementById("existem_rodapes");
    var estadorodapecontainer = document.getElementById("estado_rodape");
    var rodapeinput = document.getElementById("quantidade_rodapes");
    var rodapeinputradio = document.getElementById("rodape_pintada");

        if (checkBoxrodape.checked == true){
            estadorodapecontainer.style.display = "block";
            rodapeinput.required = true;
            rodapeinputradio.required = true;
            } else {
                estadorodapecontainer.style.display = "none";
                rodapeinput.required = false;
                rodapeinputradio.required = false;
            }	
}
