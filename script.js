function openTab(tabName) {
    // Oculta todas as abas
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Oculta a imagem inicial
    document.getElementById('tabImage').style.display = 'none';

    // Mostra a aba especificada
    var tab = document.getElementById(tabName);
    if (tab) {
        tab.style.display = 'block';
    }
}

function enviarDadosauto() {
    var nome = document.getElementById('nome_auto').value;
    var cpf = document.getElementById('cpf_auto').value;
    var carteira = document.getElementById('carteira_auto').value;
    var chassi = document.getElementById('chassi_auto').value;
    var endereco = document.getElementById('endereco_auto').value;
    var placa = document.getElementById('placa_auto').value;
    var cep = document.getElementById('cep_auto').value;
    var telefone = document.getElementById('telefone_auto').value;
    if (nome && cpf && carteira && chassi && endereco && placa && cep && telefone) {
        // Aqui você pode enviar os dados ou realizar outras ações
        alert("Informações enviadas com sucesso!");
        // Limpa os campos
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}
function limparCampos() {
    document.getElementById('nome_auto').value = '';
    document.getElementById('cpf_auto').value = '';
    document.getElementById('carteira_auto').value = '';
    document.getElementById('chassi_auto').value = '';
    document.getElementById('endereco_auto').value = '';
    document.getElementById('placa_auto').value = '';
    document.getElementById('cep_auto').value = '';
    document.getElementById('telefone_auto').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!');
}

function enviarDadoscasa() {
    var nome = document.getElementById('nome_casa').value;
    var cpf = document.getElementById('cpf_casa').value;
    var moradia = document.getElementById('moradia_casa').value;
    var end = document.getElementById('end_casa').value;
    var cep = document.getElementById('cep_casa').value;
    var tel = document.getElementById('tel_casa').value;
    var email = document.getElementById('email_casa').value;
    if (nome && cpf && moradia && end && cep && tel && email) {
        // Aqui você pode enviar os dados ou realizar outras ações
        alert("Informações enviadas com sucesso!");
        // Limpa os campos
        limparCamposcasa();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}
function limparCamposcasa() {
    document.getElementById('nome_casa').value = '';
    document.getElementById('cpf_casa').value = '';
    document.getElementById('moradia_casa').value = '';
    document.getElementById('end_casa').value = '';
    document.getElementById('cep_casa').value = '';
    document.getElementById('tel_casa').value = '';
    document.getElementById('email_casa').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!');
}
function enviarDadoslife() {
    var nome = document.getElementById("nome_life").value;
    var cpf = document.getElementById("cpf_life").value;
    var dataNascimento = document.getElementById("data_life").value;
    var modalidade = document.getElementById("modalidade_life").value;
    var telefone = document.getElementById("tel_life").value;
    var email = document.getElementById("mail_life").value;

    // Verifica se todos os campos estão preenchidos
    if (nome && cpf && dataNascimento && modalidade && telefone && email) {
        // Aqui você pode enviar os dados ou realizar outras ações
        alert("Informações enviadas com sucesso!");
        // Limpa os campos
        limparCamposlife();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}
function limparCamposlife() {
    document.getElementById('nome_life').value = '';
    document.getElementById('cpf_life').value = '';
    document.getElementById('data_life').value = '';
    document.getElementById('modalidade_life').value = '';
    document.getElementById('tel_life').value = '';
    document.getElementById('mail_life').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!');
}

function enviarEmail() {
    var nome = document.getElementById('nome_contato').value;
    var email = document.getElementById('email_contato').value;
    var mensagem = document.getElementById('mensagem_contato').value;
    // adicionar o código para enviar o e-mail
    // ...
    // Limpa os campos após o envio
    document.getElementById('nome_contato').value = '';
    document.getElementById('email_contato').value = '';
    document.getElementById('mensagem_contato').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!');
}
function enviarDadossaude() {
    var nome = document.getElementById('nome_saude').value;
    var cpf = document.getElementById('cpf_saude').value;
    var data = document.getElementById('data_saude').value;
    var fone = document.getElementById('fone_saude').value;
    var email = document.getElementById('email_saude').value;
    if (nome && cpf && data && fone && email) {
        // Aqui você pode enviar os dados ou realizar outras ações
        alert("Informações enviadas com sucesso!");
        // Limpa os campos
        limparCampossaude();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}
function limparCampossaude() {
    document.getElementById('nome_saude').value = '';
    document.getElementById('cpf_saude').value = '';
    document.getElementById('data_saude').value = '';
    document.getElementById('fone_saude').value = '';
    document.getElementById('email_saude').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!');
}
function enviarDadossaude1() {
    var empresa = document.getElementById('empresa_saude1').value;
    var cnpj = document.getElementById('cnpj_saude1').value;
    var cidade = document.getElementById('cidade_saude1').value;
    var plano = document.getElementById('plano_saude1').value;
    var fone = document.getElementById('fone_saude1').value;
    var email = document.getElementById('email_saude1').value;
    if (empresa && cnpj && cidade && plano && fone && email) {
        // Aqui você pode enviar os dados ou realizar outras ações
        alert("Informações enviadas com sucesso!");
        // Limpa os campos
        limparCampossaude1();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}
function limparCampossaude1() {
    document.getElementById('empresa_saude1').value = '';
    document.getElementById('cnpj_saude1').value = '';
    document.getElementById('cidade_saude1').value = '';
    document.getElementById('plano_saude1').value = '';
    document.getElementById('fone_saude1').value = '';
    document.getElementById('email_saude1').value = '';
    alert('*** AGUARDE *** Entraremos em contato !!!',);
}
function aumentarTamanho() {
    const elementos = document.querySelectorAll('.contato');
    elementos.forEach(elemento => {
        elemento.style.fontSize = '1.3em';  // Aumenta o tamanho 
    });
}
setInterval(aumentarTamanho, 5000);

window.onload = function () {
    document.getElementById("cadastroForm").style.display = "none";
}
function mostrarCadastro() {
    var x = document.getElementById("cadastroForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function validarFormulario() {
    var cpf = document.getElementById("cpf").value;
    var pwd = document.getElementById("pwd").value;
    if (cpf == " " || pwd == " ") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}



function concluirCadastro() {
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
    alert("CADASTRO efetuado com sucesso !!!");
    document.getElementById("nome").value = "";
    document.getElementById("cpf_cadastro").value = "";
    document.getElementById("pwd_cadastro").value = "";
}