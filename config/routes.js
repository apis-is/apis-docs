

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('home', {
      title: 'apis.is'
    });
  });

  app.get('/elements', function(req, res) {
    res.render('elements', {
      title: 'All elements'
    });
  });

  /*
   * Errors
   */

   app.get('/404', function(req, res, next){
       next();
   });

   app.get('/403', function(req, res, next){
       var err = new Error('Not allowed!');
       err.status = 403;
       next(err);
   });

   app.get('/500', function(req, res, next){
       next(new Error());
   });
};
