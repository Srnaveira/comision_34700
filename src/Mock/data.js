const productos = [
    {
            id: 1,
            titulo: "El nombre del Viento",
            autor: "Patrick Rothfuss", 
            genero: "Fantasia",
            stock: 100,
            precio: 5249.00,
            descuento: 10,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788401/978840133720.webp",
            resumen: "He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayoría todavía no los dejan entrar. He recorrido de noche caminos de los que otros no se atreven a hablar ni siquiera de día. He hablado con dioses, he amado a mujeres y he escrito canciones que hacen llorar a los bardos. Me llamo Kvothe. Quizá hayas oído hablar de mí"
    },
    {
            id: 2,       
            titulo: "El temor de un hombre sabio",
            autor: "Patrick Rothfuss", 
            genero: "Fantasia",
            stock: 0,
            precio: 6457.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788401/978840133963.webp",
            resumen: "Todo hombre sabio teme tres cosas: la tormenta en el mar, la noche sin luna y la ira de un hombre amable. El hombre había desaparecido. El mito no. Músico, mendigo, ladrón, estudiante, mago, trotamundos, héroe y asesino, Kvothe había borrado su rastro. Y ni siquiera ahora que le han encontrado, ni siquiera ni siquiera ahora que le han encontrado, ni siquiera ahora que las tinieblas invaden los rincones del mundo, está dispuesto a regresar. Pero su historia prosigue, la aventura continúa, y Kvothe seguirá contándola para revelar la verdad tras la leyenda."      
    },
    { 
            id: 3,
            titulo: "Elantris",
            autor: "Brandon Sanderson",
            genero: "Fantasia",
            stock: 40,
            precio: 7157.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788466/978846665884.webp",
            resumen: "Bienvenidos a la ciudad de Elantris, la poderosa y bella capital de Arelon llamada la «ciudad de los dioses». Antaño famosa sede de inmortales, lugar repleto de poderosa magia, Elantris ha caído en desgracia. Ahora solo acoge a los nuevos «muertos en vida», postrados en una insufrible «no-vida» tras una misteriosa y terrible transformación. Un matrimonio de Estado destinado a unir los reinos de Arelon y Teod se frustra, ya que el novio, Raoden, el príncipe de Arelon, sufre inesperadamente la Transformación y se convierte en un «muerto en vida» obligado a refugiarse en Elantris. Su reciente esposa, la princesa Sarene de Teod, creyéndolo muerto, se ve obligada a incorporarse a la vida de Arelon y su nueva capital, Kae. Mientras, el embajador y alto sacerdote de otro reino vecino, Fjordell, usará su habilidad política para intentar dominar Arelod y Teod con el propósito de somerterlos a su emperador y su dios."
    },
    {    
            id: 4,
            titulo: "El aliento de los dioses",
            autor: "Brandon Sanderson",
            genero: "Fantasia",
            stock: 40,
            precio: 7366.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788466/978846665887.webp",
            resumen: "Hace años, el monarca de Idris firmó un tratado con el reino de Hallandren según el cual el rey Dedelin enviaría a su hija mayor, Vivenna, para casarse con Susebron, el rey-dios de Hallandren. Vivenna ha sido adiestrada durante toda su vida para ser una novia adecuada para Susebron y así cumplir con su deber y ayudar a forjar una paz estable entre los dos reinos. Ése era el plan hasta que el monarca de Idris envía a su hija Siri, desobediente e independiente, en lugar de Vivenna. Mientras intenta encontrar su lugar en la corte de Susebron, Siri descubre la verdad oculta sobre el rey-dios. En Idris, su hermana Vivenna se siente preocupada y teme que Siri no esté preparada para esa nueva vida, por lo que decide viajar a Hallandren. Allí se reúne con la gente de Idris que trabaja en la capital, T'Telir, y comienza una nueva vida de espionaje y sabotaje. El plan de Vivenna es rescatar a Siri, aunque tal vez ni necesite ni desee ser salvada."
    },
    {
            id: 5,
            titulo: "El camino de los Reyes",
            autor: "Brandon Sanderson",
            genero: "Fantasia",
            stock: 40,
            precio: 4999.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788466/978846665766.webp",
            resumen: "Anhelo los días previos a la Última Desolación. Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres. El mundo fue nuestro, pero lo perdimos. Probablemente no hay nada más estimulante para las almas de los hombres que la victoria. ¿O tal vez fue la victoria una ilusión durante todo ese tiempo? ¿Comprendieron nuestros enemigos que cuanto más duramente luchaban, más resistíamos nosotros? Quizá vieron que el fuego y el martillo tan solo producían mejores espadas. Pero ignoraron el acero durante el tiempo suficiente para oxidarse. Hay cuatro personas a las que observamos. La primera es el médico, quien dejó de curar para convertirse en soldado durante la guerra más brutal de nuestro tiempo. La segunda es el asesino, un homicida que llora siempre que mata. La tercera es la mentirosa, una joven que viste un manto de erudita sobre un corazón de ladrona. Por último está el alto príncipe, un guerrero que mira al pasado mientras languidece su sed de guerra. El mundo puede cambiar. La potenciación y el uso de las esquirlas pueden aparecer de nuevo, la magia de los días pasados puede volver a ser nuestra. Esas cuatro personas son la clave. Una de ellas nos redimirá. Y una de ellas nos destruirá."
    },
    {
            id: 6,
            titulo: "El Heroe de las eras, Nacidos de la Bruma 1",
            autor: "Brandon Sanderson",
            genero: "Fantasia",
            stock: 40,
            precio: 5600.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788418/978841803729.webp",
            resumen: "Durante mil años los skaa han vivido esclavizados y sumidos en el miedo al Lord Legislador, que ha reinado con un poder absoluto gracias al terror y a la poderosa magia de la «alomancia». Kelsier, el Superviviente, el único que ha logrado huir de los Pozos de Hathsin, encuentra a Vin, una pobre chica skaa con mucha suerte. Los dos se unen a la rebelión que los skaa intentan desde hace un milenio y vencen al Lord Legislador. Pero acabar con el Lord Legislador es la parte sencilla. El verdadero desafío consistirá en sobrevivir a las consecuencias de su caída. En El héroe de las eras se comprende el porqué de la niebla y las cenizas, las tenebrosas acciones del Lord Legislador y la naturaleza del Pozo de la Ascensión. Vin y el Rey Elend buscan en los últimos escondites de recursos del Lord Legislador y descubren el peligro que acecha a la humanidad. ¿Conseguirán detenerlo a tiempo?."
    },
    {
            id: 7,
            titulo: "El Marciano",
            autor: "Andy Weir",
            genero: "Ciencia-Ficcion",
            stock: 30,
            precio: 3800.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788413/978841314378.webp",
            resumen: "Hace seis dias, el astronauta Mark Watney se convirtió en una de las primeras personas en caminar por Marte. Ahora, está seguro de que va a ser la primera persona en morir allí. Después de que una tormenta de polvo casi acabase con él y oblige a su tripulacion a evacuar dándolo por muerto, Mark se encuentra atrapado y completamente solo, sin manera de enviar una señal a la tierra de que está vivo, y aunque pudiera conseguir comunicarse, sus suministros se acabarían mucho antes de que el rescate llegase."
    },
    {
            id: 8,
            titulo: "FUNDACION.",
            autor: "Issac Asimov",
            genero: "Ciencia-Ficcion",
            stock: 15,
            precio: 4600.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/images/portadas/325989-9788497599245.jpg",
            resumen: "Durante mil años los skaa han vivido esclavizados y sumidos en el miedo al Lord Legislador, que ha reinado con un poder absoluto gracias al terror y a la poderosa magia de la «alomancia». Kelsier, el Superviviente, el único que ha logrado huir de los Pozos de Hathsin, encuentra a Vin, una pobre chica skaa con mucha suerte. Los dos se unen a la rebelión que los skaa intentan desde hace un milenio y vencen al Lord Legislador. Pero acabar con el Lord Legislador es la parte sencilla. El verdadero desafío consistirá en sobrevivir a las consecuencias de su caída. En El héroe de las eras se comprende el porqué de la niebla y las cenizas, las tenebrosas acciones del Lord Legislador y la naturaleza del Pozo de la Ascensión. Vin y el Rey Elend buscan en los últimos escondites de recursos del Lord Legislador y descubren el peligro que acecha a la humanidad. ¿Conseguirán detenerlo a tiempo?."
    },
    {
            id: 9,
            titulo: "FUNDACION E IMPERIO",
            autor: "Issac Asimov",
            genero: "Ciencia-Ficcion",
            stock: 10,
            precio: 4500.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788497/978849759501.webp",
            resumen: "Durante mil años los skaa han vivido esclavizados y sumidos en el miedo al Lord Legislador, que ha reinado con un poder absoluto gracias al terror y a la poderosa magia de la «alomancia». Kelsier, el Superviviente, el único que ha logrado huir de los Pozos de Hathsin, encuentra a Vin, una pobre chica skaa con mucha suerte. Los dos se unen a la rebelión que los skaa intentan desde hace un milenio y vencen al Lord Legislador. Pero acabar con el Lord Legislador es la parte sencilla. El verdadero desafío consistirá en sobrevivir a las consecuencias de su caída. En El héroe de las eras se comprende el porqué de la niebla y las cenizas, las tenebrosas acciones del Lord Legislador y la naturaleza del Pozo de la Ascensión. Vin y el Rey Elend buscan en los últimos escondites de recursos del Lord Legislador y descubren el peligro que acecha a la humanidad. ¿Conseguirán detenerlo a tiempo?."
    },
    {
            id: 10,
            titulo: "SEGUNDA FUNDACION.",
            autor: "Issac Asimov",
            genero: "Ciencia-Ficcion",
            stock: 20,
            precio: 5600.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788497/978849759676.webp",
            resumen: "Hari Seldon predijo la caída del Imperio, y, con el fin de restaurar la civilización en el menor tiempo posible, creó dos Fundaciones. La primera fue establecida en Términus a plena luz del conocimiento público. La segunda, 'en el otro extremo de la galaxia', tomó forma bajo un velo de total silencio, ya que custodia las leyes de la psicohistoria, que solo son válidas mientras permanezcan en secreto. Cuando la Primera Fundación fue conquistada por el poder de una sola persona, un mutante llamado el Mulo, la Segunda Fundación se vio forzada a revelar su existencia y, lo que es peor, una parte de su poder. El Mulo y los vestigios de la Primera Fundación harán cualquier cosa por descubrirla. Esta es la historia de la Segunda Fundación, la novela que cierra la trilogía."
    },
    {
            id: 11,        
            titulo: "EL NOMBRE DE LA ROSA.",
            autor: "Umberco Eco",
            genero: "Historico",
            stock: 10,
            precio: 3600.00,
            descuento: 0,
            imagen: "https://www.popularlibros.com/imagenes.webp/9788426/978842640356.webp",
            resumen: "Aquí hay misterios turbadores, personajes vívidos, un retrato logrado de una época fascinante, humor sutil, sucesos inesperados y una prosa ágil que puede adaptarse a los registros de la fe, la duda, el horror, el éxtasis amoroso y la desolación."
    }
]               


export default productos;