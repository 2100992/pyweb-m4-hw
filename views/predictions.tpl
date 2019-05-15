<html>
    <head>
        <meta charset = "utf-8">
        <title>Гороскоп на сегодня</title>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        >
        <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
    <head>
    <body>
        <div class="container">
            <h1>Что день {{ date }} готовит</h1>

            % if special_date:
                <h2> Сегодня супер особенный день! </h2>
            % end

            % for pred in predictions:
                <p>{{ pred }}</p>
            % end

        </div>

        <hr/>
        <a href="/about">
            О реализации
        </a>
    </body>
    
    <script language="JavaScript">
        console.log( {{ x }});
    </script>
</html>
