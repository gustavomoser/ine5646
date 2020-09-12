var itens = [
  {
    title: "O cachorro de grife",
    description:
      "Com seu look completo da marca alemã, o cachorro de grife demonstra todo o seu estilo e requinte no modelito.",
    image:
      "https://4.bp.blogspot.com/-Q0pxWxb8ke0/T3nIBTzNJDI/AAAAAAAAfUk/f8CPAcixw_Q/s1600/Roupa-canina-Adidas-Bem-Legaus-5.jpg",
  },
  {
    title: "A galinha de roupa",
    description:
      "A galinha usa sua melhor vestimenta para passar o dia cacarejando. Além do estilo, ela está preparada para dias frios.",
    image:
      "https://catiororeflexivo.com/wp-content/uploads/2019/09/chicken-fashion-fall-collection-1-5d88698a39fe8__700.jpg",
  },
  {
    title: "O galo de calça",
    description:
      "Icone brasileiro, o galo de calça esbanja estilo. Com sua calça azul chamativa, desperta olhares por onde passa.",
    image:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2016718/rs_560x284-160818143914-1471551622-1471549213-ucbcjjhwbhnvmwe2bq7u.gif?fit=around|560:auto&output-quality=90&crop=560:auto;center,top",
  },
  {
    title: "O macaco de casaco",
    description:
      "Pronto para enfrentar os frios mais extremos da terra, o macaco de casaco não está para brincadeira. Sem falar no look charmoso e atualizado.",
    image:
      "https://conteudo.imguol.com.br/2012/12/11/11dez2012---um-pequeno-macaco-vestindo-um-casaco-de-inverno-e-uma-fralda-despertou-a-atencao-de-quem-passava-pelo-estacionamento-de-uma-loja-em-toronto-no-canada-no-dia-9-de-dezembro-1355258397448_1920x1080.jpg",
  },
  {
    title: "O pato de papete",
    description:
      "O pato de papete mostra que sapatos também são roupas e que não se pode abrir mão de um bom calçado!",
    image: "https://pbs.twimg.com/media/CYxYkrvWYAEOScY.jpg:large",
  },
  {
    title: "A vaca de botas",
    description:
      "Ainda na linha de calçados, a vaca de botas nos mostra que mesmo em dias de chuva conseguimos usar um bom look e ainda sim ficarmos estilosos.",
    image:
      "https://cadenaser00.epimg.net/programa/imagenes/2016/03/18/a_vivir_que_son_dos_dias/1458319790_538559_1458320061_noticia_normal.jpg",
  },
  {
    title: "A cobra de suéter",
    description:
      "Em ritmo natalino, a cobra de suéter apresenta um look super voltado para as comemorações de fim de ano, não passa frio e fica bem nas fotos!",
    image:
      "https://i.pinimg.com/originals/1e/42/1a/1e421a9ea41473df6e699c8f440d132b.jpg",
  },
  {
    title: "O gato dinossauro",
    description:
      "Essa é para os gamers, invejem o moletom do gato dinossauro. O estilo não está só no básico, mas no chamativo também, e tá gato!",
    image:
      "https://images-americanas.b2w.io/produtos/01/00/img/600490/2/600490234_1GG.jpg",
  },
  {
    title: "O periquito galã ",
    description:
      "Não podemos deixar de lembrar dos looks mais formais. O periquito galã esbanja formalidade e estilo com seu colete e gravata borboleta.",
    image:
      "https://i3.wp.com/ae01.alicdn.com/kf/Hf5d49613d1444997b0a159fc445d1d0cC/Roupas-P%C3%A1ssaro-papagaio-Roupas-Original-M%C3%A3o-feito-Sob-Encomenda-Bonito-Blazers-Terno-Para-Periquito-Cockatiel-Periquito.jpg",
  },
  {
    title: "O porco de biquini",
    description:
      "Torcendo pra que o corona vá embora pra podermos aproveitar o verão, o porco de biquinis vem com a tendência mais atual da moda de praia, olha que estilo!",
    image:
      "https://blog.usenatureza.com/wp-content/uploads/2014/10/priscilla-mini-porquinha.jpg",
  },
];

function list() {
  const list = document.getElementById("item-list");
  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];
    var title = document.createElement("h1");
    title.innerHTML = item.title;
    var desc = document.createElement("h3");
    desc.innerHTML = item.description;
    var image = document.createElement("img");
    image.setAttribute("src", item.image);
    var div = document.createElement("div");
    div.setAttribute("class", "item-box");
    div.append(title);
    div.append(desc);
    div.append(image);
    list.appendChild(div);
  }
}

list();
