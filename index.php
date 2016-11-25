<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Web API</title>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <style type="text/css">
            .firstperson { 
                border: 2px solid gray; 
                border-radius: 8px;
                margin-bottom: 10px;
                background: #105b63; //, #fffad5, #ffd34e, #bd4932
                padding: 10px;
                color: #fffad5;
            }
            
            span.lead:not(:first-child) { color: #fffad5; }
            
            .media-heading { color: #ffd34e; }
            
            #mymedia .realimage {
                display: block; width: 100px;
            }
            
            #mymedia {
                max-height: 600px;
                overflow: scroll;
            }
        </style>
    </head>
    <body style="padding-top: 50px;">
       
        <section class="container">
            <div class="row">
                <div class="col-sm-8">
                    <article>
                        <div>
                            <input class="form-control" type="search" id="search" placeholder="search contributors" />
                        </div>
                    </article>
                    <br />
                    <article>
                        <div class="media" id="mymedia"></div><!-- media -->
                    </article>
                </div>
                <div class="col-sm-4">
                    <article>
                        <div id="landing" class="well">
                        </div><!-- panel-default -->
                    </article>
                </div>
            </div>
        </section>
        
        
        <script src="js/jquery-1.12.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/myscript.js" type="text/javascript"></script>
    </body>
</html>
