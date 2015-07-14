unction agenda (titulo, inic) 
{
  var _titulo = titulo;
  
   var _contenido = inic;

  
   return {
    titulo: function()               { return _titulo; },
   
               meter:  function(nombre, tf) 	{ _contenido[nombre]=tf; },
    
               tf:     function(nombre)         { return _contenido[nombre]; },
    
               borrar: function(nombre)     	{ delete _contenido[nombre]; },
    
               toJSON: function()              	{ return JSON.stringify(_contenido);},
    
               listar: function()		{ 
	var mensaje = amigos.toJSON();
                                             
                                                        mensaje = JSON.parse(mensaje);
					     
                                                        listado ="";
					     
                                                        for (nombre in mensaje) {
					     
                                                             var cadena = nombre.toString();
					     
                                                             listado = listado + cadena +","+ amigos.tf(cadena)+'\n'; }
					     
                                                        return listado; }
    
     }

 }
 
var amigos = agenda ("Amigos",
             
	{ Pepe: 113278561,
               
	  José: 157845123,
               
	  Jesús: 178512355
             });



Formato de Salida... JAVASCRIPT CONSOLE

undefined


amigos.listar()


"Pepe,113278561

José,157845123

Jesús,178512355
"