var n = 0;

var imagens = []
var info = []
var descricao = []

imagens[0] = "<span class='nome_destaque'>True Beauty</span>"
imagens[1] = "<span class='nome_destaque'>Death Parade</span>"
imagens[2] = "<span class='nome_destaque'>Vikings</span>"

info[0] = "<figure class='icon_calendar'><img src='imagens/icons/calendar.png' alt='calendar' class='icon_slider'><figcaption>2020</figcaption></figure><figure class='icon_relogio'><img src='imagens/icons/relogio.png' alt='relogio' class='icon_slider'><figcaption>60min</figcaption></figure><figure class='icon_star'><img src='imagens/icons/star.png' alt='star' class='icon_slider'><figcaption>4.8</figcaption></figure>"
info[1] = "<figure class='icon_calendar'><img src='imagens/icons/calendar.png' alt='calendar' class='icon_slider'><figcaption>2015</figcaption></figure><figure class='icon_relogio'><img src='imagens/icons/relogio.png' alt='relogio' class='icon_slider'><figcaption>25min</figcaption></figure><figure class='icon_star'><img src='imagens/icons/star.png' alt='star' class='icon_slider'><figcaption>4.9</figcaption></figure>"
info[2] = "<figure class='icon_calendar'><img src='imagens/icons/calendar.png' alt='calendar' class='icon_slider'><figcaption>2013</figcaption></figure><figure class='icon_relogio'><img src='imagens/icons/relogio.png' alt='relogio' class='icon_slider'><figcaption>45min</figcaption></figure><figure class='icon_star'><img src='imagens/icons/star.png' alt='star' class='icon_slider'><figcaption>4.8</figcaption></figure>"

descricao[0] = "<span class='descricao_destaque'>Uma tímida fã de quadrinhos domina a arte da maquiagem, e depois vê sua posição social disparar enquanto ela se torna a garota mais bonita de sua escola literalmente da noite para o dia.</span>"
descricao[1] = "<span class='descricao_destaque'> Após a morte, os humanos são mandados para a reencarnação ou para o vácuo, mas alguns acabam indo parar no Quindecim, um bar onde um bartender misterioso chamado Decim, trabalha. </span>"
descricao[2] = "<span class='descricao_destaque'>A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.</span>"


navegarFoto(0)

function navegarFoto(i) {
    if (i == -1 && n == 0) {
        n = imagens.length - 1
    } else if (i == -1 && n == imagens.length - 1) {
        n = n + i
    } else if (n < imagens.length - 1) {
        n = n + i
    } else {
        n = 0
    }
    document.getElementById("detalhes").innerHTML = imagens[n] + info[n] + descricao[n]
    document.getElementById("destaques").innerHTML = "<div class='destaques' id='destaques' style='background:url(imagens/destaques/" + n + ".jpg) no-repeat;background-size:100%;'></<div>"
    setTimeout("navegarFoto(1)", 10000)
}
