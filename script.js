
    <title>Exemplo AJAX</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <h1 id="titulo">Carregando...</h1>

    <script>
    $(document).ready(function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/harahujo-trybe/40pontos/criando_pixel_board/script.js",
            dataType: "text",
            success: function(data) {
                $('#titulo').text(data);
            }
        });
    });
    </script>
