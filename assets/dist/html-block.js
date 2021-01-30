generateHtml = () => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Business</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
    </head>
    <nav class="navbar navbar-expand-lg navbar-success bg-success" id="nav">
        <div class="container-md justify-content-center">
            <h1><a class="navbar-brand text-white fw-bold" href="#">My Team</a></h1>
        </div>
    </nav>
    <div id="insertCards">
        
    </div>
    <body>
    
    </body>
    
    </html>`;
};

module.exports = generateHtml();
