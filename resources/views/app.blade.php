<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css" rel="stylesheet" />
        <style>
            a#about-me {
            transition: .25s linear;
            }
        </style>
        <script src="{{ mix('/js/app.js') }}" defer></script>
        @routes
    </head>
    <body>
        @inertia
    </body>
</html>
