module.exports = function (app,jsonParser){

    const Empresa = require('./empresa');

    //GET Todas las empresas
    findAllEmpresas = function (req, res){
        Empresa.find(function (err,empresas){
            if(!err) res.send(empresas);
            else console.log('Error',err)
        });
    }

    //GET por indice genenrado automáticamente por MongoDB
    findByIDE = function (req, res){
        Empresa.findById(req.params.id, function (err, empresa){
            console.log(empresa)
            if(!err) res.send(empresa);
            else console.log('Error',err);
        });
    }
    //POST Agregar una empresa

    addEmpresa = function (req, res){
        console.log("POST");
        console.log(req.body);
        //Se crea como JSON
        const empresa = new Empresa({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fechaFundacion: req.body.fechaFundacion,
            webSite: req.body.webSite
        });
        empresa.save(function (err){
            if (!err) console.log('Empresa Guardada');
            else console.log('Error', err)
        });
        res.send(empresa);
    }

    //PUT ACTUALIZAR
    updateEmpresa = function (req, res){
        console.log(req.body);
        Empresa.findById(req.params.id, function (err,empresa){
            empresa.nombre = req.body.nombre;
            empresa.descripcion = req.body.descripcion;
            empresa.fechaFundacion = req.body.fechaFundacion;
            empresa.webSite = req.body.webSite;
            
            empresa.save(function (err){
                if (!err) console.log('Empresa Actualizada');
                else console.log('Error', err)
            })
        })
       
    }

    //DELETE

    deleteEmpresa = function (req, res){
        Empresa.findById(req.params.id, function (err, empresa){
            empresa.remove(function (err){
                if (!err) console.log('Empresa Borrada');
                else console.log('Error', err);
            })
        })
    }
    //Routes

    app.get('/empresas', jsonParser, findAllEmpresas);
    app.get('/empresas/:id', jsonParser, findByIDE);
    app.post('/empresas', jsonParser, addEmpresa);
    app.put('/empresas/:id', jsonParser,updateEmpresa);
    app.delete('/empresas/:id', jsonParser,deleteEmpresa);

     /////////////////////////////////////////////////////////////////////////////
    //////APP
    const Aplicacion = require('./aplicacion');

    //GET Todas las aplicaciones
    findAllAplicaciones = function (req, res){
        Aplicacion.find(function (err,aplicaciones){
            if(!err) res.send(aplicaciones);
            else console.log('Error',err)
        });
    }

    //GET por indice genenrado automáticamente por MongoDB
    findByIDA = function (req, res){
        Aplicacion.findById(req.params.id, function (err, aplicacion){
            if(!err) res.send(aplicacion);
            else console.log('Error',err);
        });
    }
    //POST Agregar una aplicacion

    addAplicacion = function (req, res){
        console.log("POST");
        console.log(req.body);
        //Se crea como JSON
        const aplicacion = new Aplicacion({
            empresa: req.body.empresa,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fechaCreacion: req.body.fechaCreacion,
            versionActual: req.body.versionActual,
            costo: req.body.costo
        });
        aplicacion.save(function (err){
            if (!err) console.log('Aplicacion Guardada');
            else console.log('Error', err)
        });
        res.send(aplicacion);
    }

    //PUT ACTUALIZAR
    updateAplicacion = function (req, res){
        console.log(req.body);
        Aplicacion.findById(req.params.id, function (err,aplicacion){
            aplicacion.empresa= req.body.empresa;
            aplicacion.nombre= req.body.nombre;
            aplicacion.descripcion= req.body.descripcion;
            aplicacion.fechaCreacion= req.body.fechaCreacion;
            aplicacion.versionActual= req.body.versionActual;
            aplicacion.costo= req.body.costo;
            
            aplicacion.save(function (err){
                if (!err) console.log('Aplicacion Actualizada');
                else console.log('Error', err)
            })
        })
       
    }

    //DELETE

    deleteAplicacion = function (req, res){
        Aplicacion.findById(req.params.id, function (err, aplicacion){
            aplicacion.remove(function (err){
                if (!err) console.log('Aplicacion Borrada');
                else console.log('Error', err);
            })
        })
    }
    //Routes

    app.get('/aplicacion', jsonParser, findAllAplicaciones);
    app.get('/aplicacion/:id', jsonParser, findByIDA);
    app.post('/aplicacion', jsonParser, addAplicacion);
    app.put('/aplicacion/:id', jsonParser,updateAplicacion);
    app.delete('/aplicacion/:id', jsonParser,deleteAplicacion);

}

