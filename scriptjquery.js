// $(seletor).ação();  é a estrutura básica do jquery
//document - vai checar se todo o documento ja foi carregado.
//ready - vai checar se esta pronto
$(document).ready(function(){
    $('#unico2').click(function(){
        $('#unico').hide();
        $('#unico').delay(2000);
        $('#unico').fadeIn('slow');
    });
});

// uma forma mais simples de verificar se o documento ja esta carregado, é chama direto a function
$(function(){
    $('#unico4').click(function(){
        $('#unico3').hide();
        $('#unico3').fadeIn('slow');
    });
});

//usando css para alterar o texto

$(function(){
    $('#color2').click(function(){
        $('#color').css("color", "red");
    });
});
// fade out também esconde o parametro, mas ele é mais suave do que o hide
$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').css("background-color", "green");
        $('p').fadeOut('fast');
        $('p').delay(1000); //segura a tela de carregamento por alguns segundos, nesse caso, por 3
        $('p').fadeIn('slow');
    });
});

$(function(){
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').css("background-color", "white");
        $('p').fadeOut('slow');
        $('p').delay(10); //segura a tela de carregamento por alguns segundos, nesse caso, por 3
        $('p').fadeIn(5000);
        $('#mensagem').text("botão funciona perfeitamente");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border','1px solid red');
        //vamos usar o comando fadeOut para tirar a mensagem depois que ela for exibida
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    });
});

//vamos testar o chamado encadeamento em bloco
//e tambem a chamada css na mesma linha
//e aplicar uma classe aberta no html

$(function(){
    $('#y').click(function(){
        $('#x')
            .css("color","green");
        $('#text')
            .text("está funcionando")
            .css({color: 'purple', border:'2px solid orange'})
            .delay(3000)
            .fadeOut('fast')
            //essa classe muda a cor de fundo da mensagem
            .addClass('green');
        $('#y').removeClass('red');
    });
});

// agora vamos fazer um sistema de slideshow manual, pois o bootstrap ja tem uma ferramento automatizada

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    })
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    })
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    })
    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    })
})