// ==================================
// script.js - Lógica de todos los juegos
// ==================================

// -----------------------------
// Juego: Yo Nunca
// -----------------------------

const frases = [
"Yo nunca lo he hecho sin haber querido.",
"Yo nunca lo he hecho con mas de una persona en un mismo dia.",
"Yo nunca he querido tirarme a la madre/padre de un amigo/a.",
"Yo nunca he querido tirarme al hermano/a de un amigo/a.",
"Yo nunca me he querido liar con alguien presente.",
"Yo nunca he tenido fantasias sexuales sobre alguien que no considerase atractivo/a.",
"Yo nunca lo he hecho a pelo.",
"Yo nunca he acabado en la boca de alguien/ me han acabado en la boca.",
"Yo nunca he querido tirarme al novio/a de un amigo/a.",
"A mi nunca me han pedido que fuese mas lento porque iba demasiado rapido.",
"Yo nunca he dejado con las ganas a alguien.",
"A mi nunca me han dejado con las ganas.",
"Yo nunca he tenido la tipica discusion de \"luces encendidas/ apagadas\".",
"Yo nunca me he encontrado un pelo en la boca tras hacer oral.",
"Yo nunca he puesto los cuernos.",
"A mi nunca me han puesto los cuernos.",
"Yo nunca he dudado de mi orientacion sexual.",
"Yo nunca me he liado con dos personas de distinto sexo en una noche.",
"Yo nunca me he liado con alguien y me he arrepentido inmediatamente despues.",
"Yo nunca he tenido sexo por pena.",
"Yo nunca me he tirado a mi ex.",
"A mi nunca me han pillado en el acto.",
"Yo nunca lo he hecho en un lugar publico.",
"Yo nunca lo he hecho en la cama de una tercera persona.",
"Yo nunca lo he hecho con mas gente al rededor.",
"Yo nunca he hecho un trio.",
"Yo nunca he tenido fantasias sexuales sobre hacer un trio con mi novio/a y otra persona.",
"Yo nunca me he masturbado con un objeto inanimado.",
"Yo nunca me he hecho daño a mi mismo al masturbarme.",
"Yo nunca me he decepcionado al liarme/tirarme a alguien con quien tenia muchas ganas.",
"Yo nunca he practicado sadomasoquismo o usado objetos relacionados.",
"Yo nunca he intentado anal pero no salio bien.",
"Yo nunca he practicado anal por placer.",
"Yo nunca me he liado/tirado a alguien que tenia minimo 5 años mas que yo.",
"Yo nunca he hecho algo sexual en el colegio/universidad.",
"A mi nunca me han hecho un chupeton en un lugar poco comun.",
"Yo nunca he intentado emborrachar a alguien para liarme con esa persona.",
"Yo nunca he visto porno con otra persona.",
"Yo nunca me he grabado con alguien en la cama.",
"Yo nunca me he masturbado con una pelicula que no fuese pornografica.",
"Yo nunca he tenido un gatillazo.",
"Yo nunca lo he hecho con la regla.",
"Yo nunca me he querido liar con mas de 2 personas presentes.",
"Yo nunca lo he hecho disfrazado para satisfacer algun morbo.",
"Yo nunca me he liado con el chico/a con quien estaba intentando ligar un amigo/a.",
"Yo nunca me lo he tragado.",
"Yo nunca me he excitado en un momento muy poco apropiado.",
"A mi nunca se me ha roto el condon.",
"Yo nunca he estado un año sin sexo tras haberlo hecho previamente.",
"Yo nunca he puesto/a mi nunca me han puesto un condon con la boca.",
"Yo nunca he involucrado comida en el sexo.",
"Yo nunca lo he hecho en una fiesta.",
"Yo nunca me he tomado/he comprado la pastilla del dia despues.",
"Yo nunca he tenido sexo por telefono.",
"Yo nunca he tenido que correr a buscar mi ropa porque acababan de tocar el timbre de la casa.",
"Yo nunca he parado de liarme/tirarme a alguien para preguntarle a la persona como se  llamaba.",
"Yo nunca me he liado/tirado a el/la ex de un amigo/a.",
"Yo nunca le he mentido sobre mis experiencias sexuales a mi nueva pareja.",
"Yo nunca he tenido que enseñar/a mi nunca me han tenido que enseñar como desabrochar un sujetador.",
"Yo nunca he tenido una fantasia sexual sobre un profesor/profesora.",
"Yo nunca he pillado a mis padres haciendolo.",
"Yo nunca me he sacado fotos desnudo/a.",
"Yo nunca he llamado a alguien por un nombre equivocado mientras lo estabamos haciendo.",
"Yo nunca he/a mi nunca me han lamido el culo.",
"Yo nunca lo he hecho en la ducha.",
"Yo nunca he usado el kamasutra para aprender o involucrar nuevas posiciones en la cama.",
"Yo nunca lo he hecho con alguien que era virgen.",
"Yo nunca he mentido sobre ser virgen.",
"Yo nunca me he medido el pene.",
"Yo nunca he borrado conversaciones subidas de tono para que mi pareja no me pillase.",
"Yo nunca me he liado/ tirado a alguien que no me parecia atractivo/a solo porque estaba desesperado/a.",
"Yo nunca he creido haber contraido una enfermedad de transmision sexual.",
"Yo nunca he fingido/exagerado un orgasmo.",
"Yo nunca he tenido un follamigo/a.",
"Yo nunca he salido de casa sin ropa interior.",
"Yo nunca me he liado/tirado a un extranjero/a.",
"Yo nunca he sentido envidia al ver los genitales de un amigo/a.",
"Yo nunca me he masturbado en casa de un amigo/a.",
"Yo nunca he hecho/a mi nunca me han hecho una mamada con condon.",
"Yo nunca he usado hielo en la cama.",
"Yo nunca he pedido que satisfacieran un fetiche mio pero sin exito.",
"Yo nunca he intentado esconder una ereccion en publico sin exito.",
"A mi nunca me ha puesto la violencia en la cama.",
"Yo nunca me he tirado/se han tirado un pedo en el acto.",
"Yo nunca le he roto la ropa a mi pareja al quitarsela.",
"Yo nunca he intentado/querido que una pareja rompiese.",
"Yo nunca he hecho/me han hecho una cubana.",
"Yo nunca me he masturbado viendo hentai.",
"Yo nunca he aceptado hacer algo por dinero.",
"Yo nunca he metido/me han metido mas de 3 dedos.",
"Yo nunca lo he hecho en un coche y sono la bocina.",
"A mi nunca me han tenido que enseñar una foto de con quien me habia liado porque no me acordaba.",
"Yo nunca me he depilado los genitales pensando que iba a pinchar y acabe comiendome los mocos.",
"Yo nunca he querido unirme a dos amigos que estuviesen haciendolo.",
"Yo nunca he hecho una lista de todas los tios/tias con las que me he liado.",
"Yo nunca he conseguido liarme/tirarme a un amor platonico.",
"Yo nunca he tenido que usar mas de 2 condones en una misma ronda.",
"Yo nunca lo he hecho en todos los cuartos de mi/su casa.",
"Yo nunca he pedido por Chatroulette/Omegle que me enseñen el pene/las tetas.",
"Yo nunca he tenido que usar paginas online o aplicaciones para ligar.",
"Yo nunca me he dado cuenta de que me estaban mirando mientras lo estaba haciendo.",
"Yo nunca me he liado con alguien presente.",
"Yo nunca me he liado/tirado a alguien que me cayera mal.",
"A mi nunca se me han/yo nunca he acabado encima del cuerpo.",
"A mi nunca me han dado una hostia por estar tirando la caña.",
"Yo nunca me he arrepentido de con quien habia perdido la virginidad.",
"Yo nunca me he liado con alguien que acababa de vomitar.",
"A mi nunca me ha puesto alguien sin saber en su momento que esa persona tenia minimo 4 años menos que yo.",
"Yo nunca he salido con alguien con quien sabia que no iba a estar mucho tiempo.",
"Yo nunca he hecho un 69.",
"Yo nunca lo he hecho con mis/sus padres cerca.",
"Yo nunca he ligado con alguien para poner celoso/a a una persona.",
"Yo nunca me he resbalado mientras lo hacia en la ducha.",
"Yo nunca le he dicho a alguien \"te quiero\" solo para follar.",
"Yo nunca he hecho/a mi nunca me han hecho sangrar al meter dedos.",
"Yo nunca he echado un polvo malisimo.",
"Yo nunca me he masturbado al menos 5 veces en un dia.",
"Yo nunca he tenido un sueño mojado.",
"Yo nunca he pensado que el sexo oral era asqueroso.",
"Yo nunca he pensado que el sexo oral es mejor que la penetracion.",
"Yo nunca he pensado en otra persona mientras estaba haciendolo con alguien.",
"Yo nunca lo he hecho con alguien que en mi opinion tenia el pene pequeño.",
"Yo nunca he usado condones con sabores.",
"Yo nunca he/a mi nunca se me han acabado dentro sin condon.",
"Yo nunca me he guardado las fotos de mi ex desnudo/a despues de haber cortado con el/ella.",
"Yo nunca he usado/nunca han usado conmigo la marcha atras como metodo anticonceptivo.",
"Yo nunca me he liado con alguien que tenia novio/a.",
"A mi nunca me ha tirado la caña un familiar de mi novio/a.",
"Yo nunca he mandado a la friendzone a alguien tras haberme liado con esa persona.",
"Yo nunca me he alegrado por algo malo que le haya pasado a mi ex.",
"Yo nunca lo he hecho mas de 5 veces en un dia.",
"Yo nunca me he liado con alguien de mi actual clase.",
"A mi nunca me han hecho una cobra de verdad.",
"Yo nunca me he arrepentido de un tatuaje.",
"A mi nunca me ha dado mas morbo hacerlo fuera de casa que dentro.",
"Yo nunca me he quedado dormido/a durante el sexo.",
"Yo nunca me he pillado por alguien mientras tenia novio/a.",
"Yo nunca he cortado con un novio/a porque el sexo no me satisfacia.",
"Yo nunca he roto la cama al hacerlo.",
"A mi nunca me han llamado la atencion los vecinos por hacer demasiado ruido durante el sexo.",
"Yo nunca he/a mi nunca me han agarrado del pelo con fuerza en el sexo.",
"Yo nunca he aguantado menos de 10 minutos en la cama.",
"Nunca han aguantado menos de 10 minutos en la cama conmigo.",
"Yo nunca lo he hecho 3 o mas veces seguidas.",
"Yo nunca he/a mi nunca me han despertado con una mamada/polvo.",
"Yo nunca me he masturbado mientras hacia una videollamada con alguien.",
"Yo nunca me he creado una cuenta falsa en alguna red social para ver lo que hacia un/a ex sin que se diese cuenta.",
"Yo nunca he conseguido liarme o salir con alguien con quien estaba previamente en la friendzone.",
"A mi nunca me han pillado un chupeton mis padres.",
"Yo nunca tendria una relacion con alguien presente si se diese el caso.",
"Yo nunca he visto porno de hermanastros/padrastros/madrastas.",
"Yo nunca he/a mi nunca me han hecho garganta profunda.",
"Yo nunca me he sentido mal conmigo mismo tras tocarme.",
"Yo nunca le he seguido el rollo a un profesora/a que me estuviese tirando.",
"Yo nunca he pedido hacer un video porno pero sin exito.",
"Yo nunca he fingido ser de otra nacionalidad para ligar.",
"Yo nunca he tenido sexo interracial.",
"Yo nunca he estado frustrado porque no me satisfacia el sexo con una persona a quien queria.",
"Yo nunca me he masturbado en grupo.",
"Yo nunca me he obsesionado entera o parcialmente con alguien tras liarme con esa persona una vez.",
"Yo nunca he lamido unos pezones.",
"A mi nunca me han lamido los pezones.",
"Yo nunca he estado en la friendzone con alguien presente.",
"Yo nunca he cortado con alguien para salir con otra persona.",
"Nunca han cortado conmigo para salir con otra persona.",
"Yo nunca lo he hecho estando enfermo.",
"Yo nunca me he querido tirar/tirado a mi mejor amigo/a.",
"Yo nunca he preferido los culos a las tetas.",
"Yo nunca he tenido pique con el novio/a de mi ex.",
"Yo nunca he pensado que me casaria con un ex o actual pareja.",
"Yo nunca he soñado que me liaba/tiraba a alguien y me he decepcionado al despertarme.",
"Yo nunca me he liado con alguien que tenia muy mal aliento.",
"A mi nunca me han hecho daño al practicar sexo oral.",
"Yo nunca he tenido la paranoia de estar embarazada porque se me habia retrasado la regla.",
"Yo nunca he/a mi nunca me han hecho una mamada conduciendo.",
"Yo nunca le he seguido el rollo a alguien que me estaba tirando solo para conseguir alcohol.",
"Yo nunca he visto un juguete sexual y he sentido intriga.",
"Yo nunca he tenido un sueño sexual sobre alguien presente/de la clase.",
"Yo nunca he sentido intriga por practicar sexo oral con alguien de mi mismo sexo.",
"Yo nunca he pensado que el sexo entre mismo sexo es o seria mejor que el sexo entre distintos sexos.",
"Yo nunca he sentido atraccion por algun familiar.",
"Yo nunca he chupado un pene/coño que supiera muy mal.",
"A mi nunca me ha interrumpido mi mascota mientras estaba haciendolo.",
"Yo nunca me he/nunca se han equivocado de agujero.",
"Yo nunca me he masturbado justo antes de hacerlo para durar mas.",
"Yo nunca he usado un video porno como modelo a seguir.",
"Yo nunca me he vestido de cierta forma para atraer la atencion de alguien y paso de mi.",
"Yo nunca he alquilado una habitacion de hotel o motel solo para follar.",
"Yo nunca haria un trio con gente aqui presente.",
"Yo nunca he jugado a algun juego con el castigo de hacer un striptease.",
"Yo nunca me he liado con alguien que besase realmente mal.",
"Yo nunca he usado el movil mientras lo estaba haciendo.",
"Yo nunca lo he hecho manteniendo 0 contacto visual con la otra persona.",
"A mi nunca me ha tirado para atras ver cuanto pelo pubico tenia la persona con la que lo iba a hacer.",
"Yo nunca me he reido mientras lo estaba haciendo.",
"Yo nunca he tirado la caña de broma y acabo saliendo mejor de lo que esperaba.",
"Yo nunca me he liado/tirado al mejor amigo/a de mi ex.",
"Yo nunca he me hecho fotos sensuales desnudo/a para enviarselas a alguien.",
"Yo nunca he creido que alguien presente me ha tirado la caña alguna vez.",
"Yo nunca me he liado con alguien que ha querido tener algo conmigo despues sin que yo quisiera.",
"Yo nunca me he liado/tirado a alguien que no he vuelto a ver en mi vida.",
"Yo nunca me he imaginado como serian las tetas/el pene de alguien presente.",
"Yo nunca me habria tirado a alguien de clase principio de curso pero ahora me da asco.",
"Yo nunca he hecho/provocado squirting.",
"Yo nunca he/a mi nunca me han ocasionado moratones o arañazos en el sexo.",
"Yo nunca he/a mi nunca me han dado un pollazo en la cara.",
"Yo nunca he/a mi nunca me han tirado la caña para conseguir alcohol.",
"Yo nunca lo he hecho con musica de fondo.",
"Yo nunca me he liado/tirado a alguien que estaba muy por encima de mis posibilidades.",
"Yo nunca he tenido una cita de donde creia que podia surgir algo y acabe decepcionandome.",
"A mi nunca me han intentado emborrachar para liarse conmigo.",
"Yo nunca he mentido sobre mi mismo para ligar.",
"Yo nunca lo he hecho estando borracho/fumado.",
"Yo nunca le he robado condones a un familiar.",
"Yo nunca me he llevado condones pensando que iba a pinchar y acabe dandoselos a alguien.",
"Yo nunca he jugado a roles en la cama.",
"Yo nunca he usado saliva como lubricante.",
"Yo nunca me he liado 2 o mas veces con alguien con quien no tenia nada.",
"Yo nunca he negado liarme con alguien pese a ser verdad.",
"Yo nunca he dormido en la misma cama con alguien del sexo opuesto sin que pasara nada.",
"Yo nunca me he liado con mas de 10 personas en toda mi vida.",
"Yo nunca he chantajeado a alguien con contar un secreto suyo.",
"Yo nunca me he enterado de cuernos a un amigo/a y lo he ocultado por alguna razon.",
"Yo nunca he estado mas de un mes sin masturbarme.",
"Yo nunca he pasado de los preliminares y he ido directo/a al sexo.",
"Yo nunca me he quedado en los preliminares porque no me apetecia el sexo.",
"Yo nunca he dejado un polvo a mitad por cualquier razon.",
"Yo nunca me he asustado al ver el tamaño del pene de alguien.",
"Yo nunca me he liado con alguien justo despues de potar.",
"Yo nunca me he dado cuenta de que me estaban mirando mientras meaba.",
"Yo nunca he tenido arcadas al hacer oral.",
"A mi nunca me ha puesto alguien que no considerase atractivo/a.",
"Yo nunca he/a mi nunca me han hecho una mamada bajo el agua.",
"Yo nunca he rechazado a un/una ex que queria volver a liarse conmigo.",
"Yo nunca lo he hecho en otro pais.",
"Yo nunca me he masturbado con una foto.",
"Yo nunca he pensado en una vieja o un animal mientras lo hacia para durar mas.",
"Yo nunca he comprado algo en un sex shop.",
"Yo nunca le he hecho un baile sensual a mi pareja.",
"Yo nunca me he encarado con alguien que estuviese mirando o molestando a mi pareja.",
"A mi nunca me han retado a liarme con alguien.",
"Yo nunca me he masturbado pensando en alguien que no fuese mi pareja en ese momento.",
"Yo nunca me he liado/tirado a alguien a quien le tenia ganas mientras tenia novio/a.",
"Yo nunca lo he hecho sin quitarme la mayoria de la ropa.",
"Yo nunca he tenido un/una ex que se cambio de acera despues de dejarlo conmigo.",
"Yo nunca le he hecho la cobra a alguien que me habia rechazado previamente por venganza.",
"Yo nunca he puesto cachondo/a a alguien con un simple susurro al oido.",
"Yo nunca lo he hecho justo despues de discutir para reconciliarnos.",
"Yo nunca volveria con un/una ex.",
"Yo nunca me volveria a liar con alguien presente.",
"Yo nunca lo he hecho en solo una posicion todo el rato.",
"Yo nunca lo he hecho en al rededor de 10 posiciones.",
"Yo nunca he estado un mes sin hacerlo teniendo pareja.",
"Yo nunca he acabado encima de mi propio cuerpo sin querer.",
"A mi nunca me han puesto tanto que me han hecho temblar.",
"A mi nunca se me ha dormido una parte del cuerpo mientras lo hacia.",
"A mi nunca se me ha perdido algo dentro de alguien/de mi mismo/a.",
"Yo nunca he tenido que parar para preguntar si iba todo bien.",
"A mi nunca me han propuesto un trio seriamente.",
"Yo nunca he archivado un chat porque no queria que mi pareja lo viera pero tampoco queria borrarlo.",
"Yo nunca he negado masturbarme.",
"Yo nunca me he excitado/empalmado cuando me han perreado en una fiesta.",
"A mi nunca me han usado para poner celoso/a a alguien.",
"Yo nunca he estado en la cama con alguien del sexo opuesto pero solo hubo besos.",
"Yo nunca me he rascado los genitales en publico y me han visto.",
"Yo nunca lo he hecho con los calcetines puestos.",
"Yo nunca me he negado a hacerle oral a alguien que me lo habia pedido.",
"Yo nunca me he liado con un chico mas bajito/una chica mas alta que yo.",
"Yo nunca lo he hecho con gafas.",
"Yo nunca me he liado con alguien con quien no deberia haberlo hecho por ir borracho/a.",
"Yo nunca he tenido complejo sobre alguna parte de mi cuerpo.",
"Yo nunca lo he hecho justo antes de dormirme y al despertarme.",
"A mi nunca me ha tirado la caña alguien pensando que era de otra orientacion sexual.",
"Yo nunca he aceptado hacer/que me hicieran algo que no queria solo para follar.",
"Yo nunca he hecho que alguien hiciera algo que no queria con el sexo como recompensa.",
"Yo nunca he recibido fotos de alguien desnudo/a.",
"Yo nunca le he estado mirando las tetas a una chica y me ha pillado de pleno.",
"A mi nunca me ha puesto mas hacerlo sin condon.",
"Yo nunca he acabado y he continuado sin parar.",
"Yo nunca he querido tirarme al hermano/a de mi pareja o de un/a ex.",
"Yo nunca he dejado un mancha en la ropa o en la cama.",
"Yo nunca he sido dominante en la cama.",
"Yo nunca me he masturbado en una ducha que no fuese la mia.",
"Yo nunca le he contado a alguien que habia follado inmediatamente despues de hacerlo.",
"Yo nunca lo he hecho en una bañera.",
"Yo nunca lo he hecho en el suelo.",
"A mi nunca me han visto haciendo cualquier cosa sexual en el cine.",
"Yo nunca he tenido sexo esta ultima semana.",
"Yo nunca me he masturbado hoy.",
"Yo nunca he sudado mucho/bastante durante el sexo.",
"Yo nunca he buscado consejos sexuales en internet.",
"A mi nunca me ha gustado mas estar debajo que encima.",
"A mi nunca me ha gustado mas estar encima que debajo.",
"Yo nunca he salido con alguien a quien no queria.",
"Yo nunca he tenido un amigo/a que se ha liado con mi ex",
"A mi nunca me ha hecho una cobra alguien presente.",
"Yo nunca le he hecho una cobra a alguien presente.",
"Yo nunca me he masturbado en otro pais.",
"Yo nunca me he liado con alguien solo porque un amigo/a me ayudo.",
"Yo nunca pense que podria tener algo con alguien presente/de mi actual clase sin darme cuenta de que no le atraia para nada.",
"Yo nunca me he masturbado con amigo/as en casa.",
"Yo nunca me he masturbado pensando en alguien menor que yo.",
"Yo nunca he tonteado/ligado con alguien con quien no tenia ningun interes en quedar.",
"Yo nunca me he pillado por alguien con quien no podria tener nada por su orientacion sexual.",
"Yo nunca he pensado que alguien presente podia ser una fiera en la cama.",
"Yo nunca he vuelto con un/una ex.",
"Yo nunca me he liado/he salido con alguien con quien habia previamente negado que tendria algo jamas.",
"Yo nunca me he arrepentido de liarme con/pillarme por alguien presente.",
"Yo nunca me he puesto la ropa interior de alguien del sexo opuesto.",
"Yo nunca he acabado al mismo tiempo que la persona con quien lo estaba haciendo.",
"Yo nunca lo he hecho en una cama individual.",
"Yo nunca lo he hecho en un sofa.",
"Yo nunca he usado lubricante de sabores.",
"Yo nunca he dejado que alguien usara un juguete sexual conmigo.",
"A mi nunca me ha puesto hacer oral.",
"A mi nunca me ha oido haciendolo un amigo/a.",
"Yo nunca he oido a un amigo/a haciendolo.",
"Yo nunca he dejado manchas en la pared.",
"Yo nunca me he mirado en el espejo mientras lo estaba haciendo.",
"Yo nunca me he negado a hacerlo con mi pareja pese a que me lo suplicara.",
"Yo nunca les he contado a mis padres que perdi la virginidad.",
"Yo nunca he dicho que no podia ir a alguna quedada por quedarme follando.",
"Yo nunca me he puesto celoso al ver a mi pareja hablar con su ex.",
"Yo nunca he sido sumiso/a.",
"Yo nunca he pensado en operarme las tetas.",
"A mi nunca se me ha salido en pleno acto y me he hecho daño.",
"Yo nunca he hecho algo que previamente pense que nunca haria.",
"Yo nunca he/a mi nunca me han hecho el hamster.",
"Yo nunca he perdido la virginidad con 15 años o menos.",
"Yo nunca he desvirgado a alguien menor de 16 años.",
"Yo nunca he rendido poco en algun deporte porque acababa de hacerlo.",
"Yo nunca me he puesto el condon al reves.",
"Yo nunca he usado lubricantes con efectos de calor o frio.",
"Yo nunca me he puesto un condon que me fuera incomodamente pequeño o apretado.",
"Yo nunca me he masturbado con un condon puesto.",
"Yo nunca lo he hecho con los ojos tapados por algo.",
"Yo nunca he perdido el equilibrio mientras lo hacia.",
"Yo nunca he pensado que alguien presente podria salir del armario.",
"Yo nunca estuve a punto de liarme con alguien hasta que otra persona me interrumpio.",
"Yo nunca he entrado en un puticlub.",
"Yo nunca he querido entrar en un puticlub pero por una razon u otra no lo hice.",
"Yo nunca enviado/recibido fotos desnudas por accidente.",
"A mi nunca me ha puesto mas hacerlo con los padres cerca.",
"Yo nunca he tenido que asegurarme de hacerlo en silencio para que no nos oyeran los padres.",
"Yo nunca lo he hecho en una posicion que no me gustara solo porque mi pareja queria.",
"Yo nunca he sido incapaz de recrear una posicion de kamasutra.",
"Yo nunca me he liado/tirado o tenido algo con alguien para olvidarme de otra persona.",
"A mi nunca me ha tirado la caña un familiar de un amigo/a.",
"Yo nunca he pensado que, por ejemplo, (persona presente) y (persona presente) podrian liarse.",
"Yo nunca he mentido en este Yo Nunca."
];

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

frases2 = [
"Yo nunca he besado a alguien solo porque me calentó cómo me miraba.",
"Yo nunca he terminado en la cama con alguien que conocí esa misma noche.",
"Yo nunca he tenido sexo con alguien cuyo apellido no sabía.",
"Yo nunca he enviado una foto íntima después de beber.",
"Yo nunca he recibido una foto íntima que no esperaba.",
"Yo nunca he pedido una foto más atrevida.",
"Yo nunca he borrado una foto íntima por miedo a que alguien la encontrara.",
"Yo nunca he tenido una conversación subida de tono durante horas.",
"Yo nunca he hecho sexting con alguien que estaba en la misma fiesta.",
"Yo nunca he mandado un audio gimiendo.",
"Yo nunca he recibido un audio que me dejó demasiado excitado/a.",
"Yo nunca he llamado a alguien solo porque estaba caliente.",
"Yo nunca he tenido una videollamada completamente desnudo/a.",
"Yo nunca he hecho una videollamada íntima desde un lugar arriesgado.",
"Yo nunca he usado un espejo para mandar una foto más provocativa.",
"Yo nunca he repetido una foto íntima porque la primera no me gustó.",
"Yo nunca he guardado una foto íntima porque me encantaba demasiado.",
"Yo nunca he pensado en alguien presente mientras me tocaba.",
"Yo nunca he fantaseado con besar a dos personas presentes.",
"Yo nunca he imaginado cómo sería acostarme con alguien de este grupo.",
"Yo nunca he querido que alguien presente me llevara a una habitación.",
"Yo nunca he mirado los labios de alguien presente con otras intenciones.",
"Yo nunca he pensado que alguien presente sería dominante en la cama.",
"Yo nunca he pensado que alguien presente sería sumiso/a en la cama.",
"Yo nunca he sentido tensión sexual con alguien presente.",
"Yo nunca he fingido que no me atraía alguien que sí me atraía mucho.",
"Yo nunca he evitado mirar a alguien porque me ponía nervioso/a.",
"Yo nunca he coqueteado con alguien sabiendo que acabaríamos besándonos.",
"Yo nunca he besado a alguien en secreto durante una fiesta.",
"Yo nunca he desaparecido de una fiesta para liarme con alguien.",
"Yo nunca he vuelto despeinado/a a una fiesta después de desaparecer.",
"Yo nunca he usado el baño de una fiesta para algo más que ir al baño.",
"Yo nunca he tenido sexo en un baño.",
"Yo nunca he hecho algo sexual en un probador.",
"Yo nunca he tenido sexo en una oficina.",
"Yo nunca he hecho algo sexual en una sala de clases vacía.",
"Yo nunca he tenido sexo en una escalera.",
"Yo nunca he tenido sexo en una terraza.",
"Yo nunca he tenido sexo en un balcón.",
"Yo nunca he tenido sexo en una cocina.",
"Yo nunca he tenido sexo sobre una mesa.",
"Yo nunca he tenido sexo contra una pared.",
"Yo nunca he tenido sexo en una piscina.",
"Yo nunca he tenido sexo en la playa.",
"Yo nunca he hecho algo sexual dentro del mar.",
"Yo nunca he tenido sexo en una carpa.",
"Yo nunca he tenido sexo en una casa ajena.",
"Yo nunca he tenido sexo mientras otras personas dormían cerca.",
"Yo nunca he tenido que taparme la boca para no hacer ruido.",
"Yo nunca he tenido que encender música para disimular los sonidos.",
"Yo nunca he hecho tanto ruido que alguien golpeó la pared.",
"Yo nunca he recibido una queja por hacer demasiado ruido.",
"Yo nunca he tenido sexo con la puerta sin cerrar.",
"Yo nunca he tenido sexo con riesgo de que alguien entrara.",
"Yo nunca he tenido que vestirme en menos de un minuto.",
"Yo nunca he escondido ropa interior para que nadie la encontrara.",
"Yo nunca he perdido una prenda en casa de alguien.",
"Yo nunca he vuelto a buscar una prenda después de una noche intensa.",
"Yo nunca he salido de una casa sin recordar bien cómo llegué.",
"Yo nunca he despertado al lado de alguien y me sorprendí.",
"Yo nunca he fingido dormir para evitar una conversación incómoda después.",
"Yo nunca he querido irme inmediatamente después de hacerlo.",
"Yo nunca he pedido que alguien se quedara después de hacerlo.",
"Yo nunca he dormido abrazado/a con alguien con quien no tenía nada serio.",
"Yo nunca he repetido con alguien aunque dije que sería solo una vez.",
"Yo nunca he convertido una aventura de una noche en varias noches.",
"Yo nunca he tenido una relación solo física durante meses.",
"Yo nunca he vuelto con un casi algo solo por el sexo.",
"Yo nunca he extrañado más el sexo que a mi ex.",
"Yo nunca he enviado un “te extraño” cuando en realidad quería sexo.",
"Yo nunca he respondido una historia con intenciones sexuales.",
"Yo nunca he usado una reacción a una historia para empezar a ligar.",
"Yo nunca he subido una foto pensando específicamente en que alguien la viera.",
"Yo nunca he usado una foto provocativa para poner celoso/a a alguien.",
"Yo nunca he revisado quién vio mi historia esperando a una persona.",
"Yo nunca he puesto mejores amigos solo para subir algo atrevido.",
"Yo nunca he agregado a alguien a mejores amigos para seducirlo/a.",
"Yo nunca he borrado una historia porque la vio quien no debía.",
"Yo nunca he usado una aplicación de citas solo para buscar sexo.",
"Yo nunca he quedado con alguien de una aplicación esa misma noche.",
"Yo nunca he mentido sobre mis intenciones en una aplicación de citas.",
"Yo nunca he hecho match con alguien que conocía en persona.",
"Yo nunca he ignorado a alguien después de acostarme con esa persona.",
"Yo nunca he sido ignorado/a después de acostarme con alguien.",
"Yo nunca he vuelto a escribirle a alguien meses después por calentura.",
"Yo nunca he enviado un mensaje de madrugada del que me arrepentí.",
"Yo nunca he recibido un “¿estás despierto/a?” y supe perfectamente qué quería.",
"Yo nunca he contestado “ven” sin hacer más preguntas.",
"Yo nunca he ido a casa de alguien solo con una intención.",
"Yo nunca he invitado a alguien a ver una película sin querer ver la película.",
"Yo nunca he usado Netflix como excusa para acercarme.",
"Yo nunca he terminado desnudo/a antes de que empezara la película.",
"Yo nunca he tenido sexo durante una película que nunca terminamos.",
"Yo nunca he besado a alguien durante una escena romántica para provocar.",
"Yo nunca he hecho un masaje con segundas intenciones.",
"Yo nunca he pedido un masaje esperando que pasara algo más.",
"Yo nunca he usado aceite para dar un masaje sensual.",
"Yo nunca he empezado un masaje vestido/a y terminado desnudo/a.",
"Yo nunca he hecho un striptease improvisado.",
"Yo nunca he pedido que alguien me hiciera un striptease.",
"Yo nunca he bailado de forma provocativa para alguien en privado.",
"Yo nunca he hecho un baile sensual en una fiesta.",
"Yo nunca he perreado con alguien hasta excitarme demasiado.",
"Yo nunca he tenido que alejarme porque el perreo se estaba saliendo de control.",
"Yo nunca he besado a alguien después de perrear.",
"Yo nunca he tenido sexo con la música de una fiesta sonando de fondo.",
"Yo nunca he creado una playlist específicamente para tener sexo.",
"Yo nunca he elegido una canción pensando en cómo sería hacerlo con ella.",
"Yo nunca he detenido una canción porque arruinaba el momento.",
"Yo nunca he tenido sexo con una canción ridícula de fondo.",
"Yo nunca he cantado o reído en medio del sexo.",
"Yo nunca he tenido un ataque de risa durante una posición.",
"Yo nunca he tenido que parar porque algo salió demasiado incómodo.",
"Yo nunca he probado una posición y me he arrepentido al instante.",
"Yo nunca he buscado nuevas posiciones antes de una cita.",
"Yo nunca he practicado una posición por curiosidad.",
"Yo nunca he usado una silla durante el sexo.",
"Yo nunca he usado el borde de la cama para probar algo nuevo.",
"Yo nunca he tenido sexo de pie.",
"Yo nunca he tenido sexo en la ducha y casi me caigo.",
"Yo nunca he usado hielo durante los preliminares.",
"Yo nunca he usado crema, chocolate o fruta en un momento íntimo.",
"Yo nunca he usado una venda en los ojos.",
"Yo nunca he pedido que me ataran las manos.",
"Yo nunca he atado las manos de alguien con su permiso.",
"Yo nunca he usado esposas de juguete.",
"Yo nunca he usado una corbata para algo sexual.",
"Yo nunca he usado una prenda para inmovilizar a alguien con consentimiento.",
"Yo nunca he probado juegos de dominación.",
"Yo nunca he dado órdenes en la cama.",
"Yo nunca he pedido que me dieran órdenes en la cama.",
"Yo nunca he usado una palabra de seguridad.",
"Yo nunca he hablado de límites antes de probar algo nuevo.",
"Yo nunca he descubierto un fetiche hablando con alguien.",
"Yo nunca he confesado un fetiche que me daba vergüenza.",
"Yo nunca he cumplido una fantasía que pensé que nunca haría.",
"Yo nunca he rechazado una fantasía porque era demasiado para mí.",
"Yo nunca he negociado una fantasía antes de probarla.",
"Yo nunca he escrito una lista de cosas que quería probar en la cama.",
"Yo nunca he comparado mi lista de fantasías con la de otra persona.",
"Yo nunca he marcado una fantasía como cumplida.",
"Yo nunca he tenido una fantasía recurrente con la misma persona.",
"Yo nunca he fantaseado con hacerlo en un lugar prohibido.",
"Yo nunca he fantaseado con que alguien me sorprendiera desnudo/a.",
"Yo nunca he fantaseado con un encuentro secreto.",
"Yo nunca he fantaseado con una persona con uniforme.",
"Yo nunca he fantaseado con alguien mayor que yo.",
"Yo nunca he fantaseado con alguien mucho más alto/a o bajo/a que yo.",
"Yo nunca he fantaseado con un desconocido/a.",
"Yo nunca he fantaseado con alguien famoso.",
"Yo nunca he fantaseado con un compañero/a de trabajo.",
"Yo nunca he fantaseado con alguien que veía todos los días.",
"Yo nunca he tenido un sueño sexual con alguien inesperado.",
"Yo nunca he despertado excitado/a por un sueño.",
"Yo nunca he contado un sueño sexual a la persona que aparecía.",
"Yo nunca he usado un sueño como excusa para coquetear.",
"Yo nunca he pensado en otra persona mientras besaba a alguien.",
"Yo nunca he imaginado a otra persona durante el sexo.",
"Yo nunca he dicho el nombre equivocado en un momento íntimo.",
"Yo nunca he tenido que disimular que pensé en alguien más.",
"Yo nunca he comparado mentalmente a dos personas en la cama.",
"Yo nunca he hablado de experiencias pasadas justo antes del sexo.",
"Yo nunca he preguntado con cuántas personas había estado alguien.",
"Yo nunca he mentido sobre mi número de parejas sexuales.",
"Yo nunca he reducido mi número para parecer más inocente.",
"Yo nunca he aumentado mi número para parecer más experimentado/a.",
"Yo nunca he sentido celos por una experiencia sexual pasada de mi pareja.",
"Yo nunca he revisado las redes de alguien con quien estuvo mi pareja.",
"Yo nunca he querido superar a un/una ex en la cama.",
"Yo nunca he preguntado si fui mejor que su ex.",
"Yo nunca he recibido una comparación con un/una ex.",
"Yo nunca he fingido seguridad aunque estaba muy nervioso/a.",
"Yo nunca he usado alcohol para atreverme a coquetear.",
"Yo nunca he besado a alguien porque ambos estábamos borrachos.",
"Yo nunca he despertado recordando solo partes de una noche.",
"Yo nunca he tenido que preguntar a un amigo qué pasó la noche anterior.",
"Yo nunca he prometido no volver a beber después de una noche sexualmente intensa.",
"Yo nunca he repetido la misma locura el fin de semana siguiente.",
"Yo nunca he bebido para celebrar que iba a ver a alguien.",
"Yo nunca he tomado una copa para relajarme antes de una cita.",
"Yo nunca he terminado besando a alguien durante un juego de beber.",
"Yo nunca he usado un reto como excusa para besar a alguien.",
"Yo nunca he elegido verdad para contar algo sexual.",
"Yo nunca he elegido reto esperando que fuera algo picante.",
"Yo nunca he inventado una pregunta sexual para incomodar a alguien.",
"Yo nunca he respondido una pregunta de este juego mintiendo.",
"Yo nunca he bebido aunque la frase no me aplicaba para que nadie sospechara.",
"Yo nunca he evitado beber para ocultar algo que sí hice.",
"Yo nunca he mirado a alguien justo después de escuchar una frase picante.",
"Yo nunca he sabido que una frase iba dirigida a mí.",
"Yo nunca he hecho una pregunta de “yo nunca” para revelar un secreto.",
"Yo nunca he descubierto algo inesperado de alguien jugando.",
"Yo nunca he sentido más atracción por alguien después de escucharlo/a jugar.",
"Yo nunca he querido besar a alguien después de una confesión.",
"Yo nunca he terminado un juego de beber en la cama con alguien.",
"Yo nunca he hecho una apuesta cuyo premio era un beso.",
"Yo nunca he ganado un beso en un juego.",
"Yo nunca he perdido una prenda jugando.",
"Yo nunca he jugado a quitarse ropa.",
"Yo nunca he acabado en ropa interior durante un juego.",
"Yo nunca he besado a alguien con los ojos vendados.",
"Yo nunca he reconocido a alguien por cómo besaba.",
"Yo nunca he tenido que elegir a quién besaría de un grupo.",
"Yo nunca he besado a dos personas en la misma ronda.",
"Yo nunca he dado un beso de más de un minuto por un reto.",
"Yo nunca he usado un reto para tocar a alguien de forma provocativa con consentimiento.",
"Yo nunca he permitido que alguien eligiera dónde besarme.",
"Yo nunca he elegido besar el cuello de alguien.",
"Yo nunca he dejado una marca en el cuello de alguien.",
"Yo nunca he tenido que esconder una marca con maquillaje.",
"Yo nunca he usado una bufanda para esconder un chupetón.",
"Yo nunca he dado un chupetón en un lugar difícil de ocultar.",
"Yo nunca he pedido que no me dejaran marcas y terminaron dejándome una.",
"Yo nunca he arañado la espalda de alguien.",
"Yo nunca he terminado con arañazos después del sexo.",
"Yo nunca he dejado marcas de uñas sin darme cuenta.",
"Yo nunca he dado una palmada durante el sexo.",
"Yo nunca he pedido una palmada más fuerte.",
"Yo nunca he mordido a alguien en un momento íntimo.",
"Yo nunca he pedido que me mordieran.",
"Yo nunca he besado el cuello de alguien hasta hacerlo temblar.",
"Yo nunca he descubierto que el cuello era mi punto débil.",
"Yo nunca he susurrado algo sucio al oído.",
"Yo nunca he pedido que me hablaran sucio.",
"Yo nunca he dicho algo tan atrevido que me dio vergüenza después.",
"Yo nunca he usado una palabra que jamás diría fuera de la cama.",
"Yo nunca he mandado un mensaje describiendo exactamente lo que quería hacer.",
"Yo nunca he recibido instrucciones sexuales por mensaje.",
"Yo nunca he seguido instrucciones íntimas por chat.",
"Yo nunca he escrito una fantasía completa para alguien.",
"Yo nunca he leído un relato erótico para excitarme.",
"Yo nunca he leído un relato erótico en voz alta para otra persona.",
"Yo nunca he escrito algo erótico inspirado en alguien real.",
"Yo nunca he usado un juguete sexual en pareja.",
"Yo nunca he comprado un juguete sexual con alguien.",
"Yo nunca he entrado a una sex shop con vergüenza.",
"Yo nunca he pedido un juguete por internet para evitar comprarlo en persona.",
"Yo nunca he escondido un juguete para que nadie lo viera.",
"Yo nunca he olvidado guardar un juguete después de usarlo.",
"Yo nunca he usado un juguete por videollamada.",
"Yo nunca he dejado que otra persona controlara un juguete.",
"Yo nunca he usado lubricante con efecto frío.",
"Yo nunca he usado lubricante con efecto calor.",
"Yo nunca he probado un lubricante de sabor.",
"Yo nunca he usado demasiado lubricante y fue un desastre.",
"Yo nunca he improvisado lubricante por no tener.",
"Yo nunca he tenido que parar para buscar un preservativo.",
"Yo nunca he tenido preservativos guardados en más de tres lugares.",
"Yo nunca he llevado preservativos a una cita esperando usarlos.",
"Yo nunca he comprado preservativos justo antes de ver a alguien.",
"Yo nunca he pedido preservativos a un amigo/a.",
"Yo nunca he revisado la fecha de vencimiento en pleno momento.",
"Yo nunca he abierto un preservativo con los dientes.",
"Yo nunca he puesto un preservativo de una forma provocativa.",
"Yo nunca he tenido sexo usando un preservativo con textura.",
"Yo nunca he usado un preservativo de sabor para sexo oral.",
"Yo nunca he tenido que cambiar de preservativo en medio del acto.",
"Yo nunca he tenido miedo por un retraso después de una noche intensa.",
"Yo nunca he ido a hacerme exámenes por tranquilidad después de una aventura.",
"Yo nunca he hablado de salud sexual antes de acostarme con alguien.",
"Yo nunca he mostrado resultados de exámenes a una pareja.",
"Yo nunca he pedido exclusividad sexual sin pedir una relación.",
"Yo nunca he tenido una pareja sexual exclusiva sin ser pareja formal.",
"Yo nunca he sentido celos de un follamigo/a.",
"Yo nunca he roto las reglas de una relación casual.",
"Yo nunca he dicho “sin sentimientos” y terminé sintiendo algo.",
"Yo nunca he tenido sexo de reconciliación.",
"Yo nunca he discutido y terminado besando a la otra persona.",
"Yo nunca he tenido sexo después de una pelea fuerte.",
"Yo nunca he usado el sexo para evitar hablar de un problema.",
"Yo nunca he sentido que una discusión aumentó la tensión sexual.",
"Yo nunca he besado a alguien que me caía mal.",
"Yo nunca he tenido química sexual con alguien incompatible conmigo.",
"Yo nunca he vuelto a alguien sabiendo que era mala idea.",
"Yo nunca he tenido una relación tóxica con sexo increíble.",
"Yo nunca he confundido buena química sexual con amor.",
"Yo nunca he seguido viendo a alguien solo porque el sexo era demasiado bueno.",
"Yo nunca he perdonado algo únicamente por la atracción.",
"Yo nunca he pensado “una última vez” y no fue la última.",
"Yo nunca he bloqueado y desbloqueado a alguien por calentura.",
"Yo nunca he vuelto a seguir a alguien porque quería llamar su atención.",
"Yo nunca he dado like a una foto antigua para provocar.",
"Yo nunca he stalkeado a alguien después de acostarme con esa persona.",
"Yo nunca he revisado si alguien estaba conectado antes de escribirle.",
"Yo nunca he borrado y reescrito un mensaje sexual varias veces.",
"Yo nunca he dejado un mensaje en visto para parecer menos interesado/a.",
"Yo nunca he tardado en responder aunque moría de ganas.",
"Yo nunca he mandado un emoji con doble intención.",
"Yo nunca he entendido una indirecta sexual demasiado tarde.",
"Yo nunca he confundido amabilidad con coqueteo.",
"Yo nunca he coqueteado con alguien frente a su pareja.",
"Yo nunca he sentido atracción por alguien comprometido/a.",
"Yo nunca he besado a alguien sabiendo que tenía pareja.",
"Yo nunca he ocultado que estaba viendo a dos personas.",
"Yo nunca he salido con dos personas en la misma semana.",
"Yo nunca he tenido dos citas el mismo día.",
"Yo nunca he besado a dos personas distintas en menos de una hora.",
"Yo nunca he tenido sexo con dos personas distintas en un mismo fin de semana.",
"Yo nunca he confundido mensajes y enviado algo a la persona equivocada.",
"Yo nunca he mandado una foto íntima al chat equivocado.",
"Yo nunca he llamado a alguien por accidente mientras hablaba de esa persona.",
"Yo nunca he dejado abierto un chat sexual en público.",
"Yo nunca he tenido que bajar el brillo del teléfono para ocultar una foto.",
"Yo nunca he abierto una foto íntima delante de otra persona sin querer.",
"Yo nunca he usado audífonos para escuchar un audio sexual en público.",
"Yo nunca he recibido un mensaje caliente mientras estaba con mi familia.",
"Yo nunca he respondido un mensaje sexual desde una reunión o clase.",
"Yo nunca he tenido que ocultar una excitación en un lugar público.",
"Yo nunca he usado una chaqueta o bolso para disimular.",
"Yo nunca he salido sin ropa interior porque esperaba que pasara algo.",
"Yo nunca he usado ropa interior especial para una cita.",
"Yo nunca he comprado ropa interior pensando en una persona.",
"Yo nunca he mandado una foto mostrando ropa interior nueva.",
"Yo nunca he dejado que alguien eligiera mi ropa interior.",
"Yo nunca he usado disfraces en la cama.",
"Yo nunca he cumplido una fantasía de rol.",
"Yo nunca he fingido ser desconocidos con alguien que ya conocía.",
"Yo nunca he tenido una cita fingiendo que era la primera vez.",
"Yo nunca he usado un nombre falso en un juego de rol.",
"Yo nunca he usado acento o personaje para excitar a alguien.",
"Yo nunca he hecho algo sexual frente a un espejo.",
"Yo nunca he observado a mi pareja en el espejo durante el sexo.",
"Yo nunca he grabado un video íntimo con consentimiento.",
"Yo nunca he visto un video íntimo mío después.",
"Yo nunca he borrado un video íntimo porque terminó una relación.",
"Yo nunca he hecho una sesión de fotos sensual en pareja.",
"Yo nunca he posado desnudo/a para alguien.",
"Yo nunca he dibujado o fotografiado el cuerpo de alguien desnudo/a.",
"Yo nunca he tenido sexo con las luces completamente encendidas.",
"Yo nunca he preferido hacerlo en total oscuridad por inseguridad.",
"Yo nunca he pedido que dejaran una luz tenue.",
"Yo nunca he usado velas para crear ambiente.",
"Yo nunca he preparado una habitación pensando en tener sexo.",
"Yo nunca he reservado un motel para una noche especial.",
"Yo nunca he pagado una habitación solo por unas horas.",
"Yo nunca he usado un jacuzzi con intenciones sexuales.",
"Yo nunca he tenido sexo en un hotel de lujo.",
"Yo nunca he tenido sexo en un viaje de trabajo.",
"Yo nunca he tenido una aventura durante unas vacaciones.",
"Yo nunca he besado a alguien en un avión.",
"Yo nunca he hecho algo sexual en un viaje largo.",
"Yo nunca he tenido sexo en una casa arrendada de vacaciones.",
"Yo nunca he conocido a alguien viajando y terminé en su cama.",
"Yo nunca he tenido un amor de verano puramente físico.",
"Yo nunca he despedido a alguien con un último beso demasiado intenso.",
"Yo nunca he tenido sexo sabiendo que no volvería a ver a esa persona.",
"Yo nunca he querido repetir con alguien que vivía en otro país.",
"Yo nunca he mantenido sexting a distancia durante meses.",
"Yo nunca he usado una llamada para mantener viva una relación a distancia.",
"Yo nunca he viajado solo para ver a alguien con quien tenía química sexual.",
"Yo nunca he cambiado planes por una invitación de última hora.",
"Yo nunca he cancelado una salida por quedarme con alguien.",
"Yo nunca he llegado tarde porque estaba teniendo sexo.",
"Yo nunca he ido a trabajar o estudiar sin dormir por una noche intensa.",
"Yo nunca he tenido que ocultar cansancio después de hacerlo toda la noche.",
"Yo nunca he tenido sexo más de tres veces en una noche.",
"Yo nunca he querido una cuarta ronda aunque estaba agotado/a.",
"Yo nunca he perdido la noción del tiempo durante el sexo.",
"Yo nunca he amanecido sin haber dormido nada por estar con alguien.",
"Yo nunca he despertado y empezado otra vez.",
"Yo nunca he tenido sexo antes del desayuno.",
"Yo nunca he tenido sexo en la tarde por aburrimiento.",
"Yo nunca he tenido sexo durante una pausa del trabajo o estudio.",
"Yo nunca he hecho una escapada rápida solo para tener sexo.",
"Yo nunca he tenido un encuentro de menos de quince minutos.",
"Yo nunca he tenido sexo tan largo que terminé con dolor muscular.",
"Yo nunca he necesitado agua en medio del acto.",
"Yo nunca he parado para comer y después continué.",
"Yo nunca he acabado riéndome por el desastre de la habitación.",
"Yo nunca he roto un mueble durante el sexo.",
"Yo nunca he botado algo importante por moverme demasiado.",
"Yo nunca he despertado a un vecino por golpear la pared.",
"Yo nunca he terminado con una lesión leve por una postura.",
"Yo nunca he tenido que poner hielo después de una noche intensa.",
"Yo nunca he usado una excusa absurda para explicar una marca.",
"Yo nunca he llevado gafas de sol para ocultar una noche sin dormir.",
"Yo nunca he ido a una reunión con un chupetón visible.",
"Yo nunca he mentido sobre cómo me hice un moretón.",
"Yo nunca he contado detalles íntimos a mis amigos al día siguiente.",
"Yo nunca he mostrado mensajes sexuales a un amigo/a.",
"Yo nunca he enviado capturas de un chat caliente a un grupo.",
"Yo nunca he pedido consejo antes de responder un mensaje sexual.",
"Yo nunca he presumido de una experiencia íntima.",
"Yo nunca he exagerado lo bien que salió una noche.",
"Yo nunca he fingido que no pasó nada con alguien presente.",
"Yo nunca he mantenido en secreto una aventura dentro de un grupo.",
"Yo nunca he tenido una tensión secreta con el amigo/a de alguien.",
"Yo nunca he besado a alguien que mis amigos no aprobarían.",
"Yo nunca he tenido sexo con alguien que juré que nunca tocaría.",
"Yo nunca he terminado atraído/a por alguien después de odiarlo/a.",
"Yo nunca he pasado de discutir a besarme con alguien.",
"Yo nunca he tenido una fantasía de enemigos a amantes.",
"Yo nunca he sentido que una mirada decía exactamente lo que iba a pasar.",
"Yo nunca he sabido desde el primer minuto que terminaríamos juntos.",
"Yo nunca he provocado a alguien solo para ver si se atrevía.",
"Yo nunca he dejado una puerta abierta como invitación.",
"Yo nunca he enviado mi ubicación sin explicar para qué.",
"Yo nunca he dicho “sube” sabiendo lo que iba a pasar.",
"Yo nunca he dicho “solo un beso” y terminé haciendo mucho más.",
"Yo nunca he dicho “esta es la última copa” y acabé desnudo/a.",
"Yo nunca he dicho “no pasará nada” y pasó de todo.",
"Yo nunca he prometido portarme bien y no cumplí.",
"Yo nunca he retado a alguien a besarme.",
"Yo nunca he preguntado “¿te atreves?” con doble intención.",
"Yo nunca he provocado celos para conseguir atención sexual.",
"Yo nunca he hecho contacto visual mientras bebía pensando en alguien.",
"Yo nunca he rozado a alguien intencionalmente para crear tensión.",
"Yo nunca he tocado una pierna bajo la mesa con consentimiento.",
"Yo nunca he jugado con el pie de alguien bajo la mesa.",
"Yo nunca he besado a alguien en medio de una conversación.",
"Yo nunca he interrumpido una discusión con un beso.",
"Yo nunca he tenido un beso tan intenso que olvidé dónde estaba.",
"Yo nunca he mordido el labio de alguien al besar.",
"Yo nunca he pedido que me besaran más fuerte.",
"Yo nunca he besado a alguien durante más de diez minutos.",
"Yo nunca he quedado sin aliento solo por besar.",
"Yo nunca he tenido que esconder que estaba excitado/a después de un beso.",
"Yo nunca he terminado con los labios hinchados después de besar.",
"Yo nunca he tenido sexo sin quitarme toda la ropa.",
"Yo nunca he usado solo una prenda durante todo el encuentro.",
"Yo nunca he tenido sexo con tacones o zapatos puestos.",
"Yo nunca he tenido sexo con calcetines y me dio vergüenza.",
"Yo nunca he quitado ropa con los dientes.",
"Yo nunca he roto un botón por apuro.",
"Yo nunca he rasgado accidentalmente una prenda.",
"Yo nunca he pedido que no fueran delicados con mi ropa.",
"Yo nunca he dejado ropa repartida por toda la casa.",
"Yo nunca he olvidado dónde dejé mi ropa interior.",
"Yo nunca he usado la ropa de la otra persona al día siguiente.",
"Yo nunca he salido usando una polera ajena.",
"Yo nunca he olido la ropa de alguien porque me recordaba a esa persona.",
"Yo nunca he dormido con una prenda de alguien con quien tuve algo.",
"Yo nunca he tenido sexo solo para sacarme las ganas.",
"Yo nunca he llamado a un ex únicamente por deseo.",
"Yo nunca he usado a alguien como rebote con su conocimiento.",
"Yo nunca he tenido sexo de despedida.",
"Yo nunca he tenido sexo con alguien después de terminar la relación.",
"Yo nunca he vuelto a una casa donde juré que no volvería.",
"Yo nunca he tenido un encuentro secreto con un/una ex.",
"Yo nunca he ocultado que seguía viendo a mi ex.",
"Yo nunca he comparado un encuentro nuevo con mi ex.",
"Yo nunca he pensado que nadie besaba como mi ex.",
"Yo nunca he querido mandar un mensaje a mi ex después de beber.",
"Yo nunca he enviado ese mensaje y lo borré.",
"Yo nunca he bloqueado a un ex para evitar caer.",
"Yo nunca he desbloqueado a un ex una noche de calentura.",
"Yo nunca he tenido sexo con alguien solo porque se parecía a otra persona.",
"Yo nunca he sentido atracción por la voz de alguien antes de verlo/a.",
"Yo nunca he excitado solo escuchando respirar a alguien.",
"Yo nunca he pedido que alguien siguiera hablando porque su voz me encendía.",
"Yo nunca he tenido una llamada que empezó normal y terminó sexual.",
"Yo nunca he enviado un audio desde la cama.",
"Yo nunca he escuchado un audio íntimo más de una vez.",
"Yo nunca he usado audífonos para escuchar a alguien gemir.",
"Yo nunca he querido que alguien me describiera lo que llevaba puesto.",
"Yo nunca he descrito exactamente lo que llevaba puesto para provocar.",
"Yo nunca he quitado una prenda durante una videollamada.",
"Yo nunca he hecho una cuenta regresiva para quitarme ropa.",
"Yo nunca he jugado a preguntas íntimas por videollamada.",
"Yo nunca he terminado una llamada porque ya no aguantaba las ganas.",
"Yo nunca he quedado con alguien inmediatamente después de una llamada caliente.",
"Yo nunca he sentido química sexual sin haber tocado a la persona.",
"Yo nunca he tenido una conversación tan intensa que parecía preliminar.",
"Yo nunca he usado una mirada para pedir un beso.",
"Yo nunca he pedido permiso para besar y la respuesta me excitó más.",
"Yo nunca he frenado un momento porque quería asegurarme de que ambos queríamos.",
"Yo nunca he sentido que preguntar “¿está bien?” mejoró el momento.",
"Yo nunca he probado algo nuevo después de hablarlo claramente.",
"Yo nunca he descubierto que poner límites también podía ser sexy.",
"Yo nunca he tenido una conversación sobre deseos que terminó en la cama.",
"Yo nunca he dicho exactamente cómo me gusta que me toquen.",
"Yo nunca he pedido que fueran más lento/a.",
"Yo nunca he pedido que fueran más rápido/a.",
"Yo nunca he guiado la mano de alguien.",
"Yo nunca he dejado que alguien guiara mi mano.",
"Yo nunca he pedido que repitieran exactamente lo que estaban haciendo.",
"Yo nunca he fingido no estar tan excitado/a como estaba.",
"Yo nunca he tenido que morder una almohada.",
"Yo nunca he apretado las sábanas con fuerza.",
"Yo nunca he temblado después de un orgasmo.",
"Yo nunca he tenido más de un orgasmo en un encuentro.",
"Yo nunca he ayudado a alguien a tener más de un orgasmo.",
"Yo nunca he tardado tanto que pensé que no iba a acabar.",
"Yo nunca he acabado mucho antes de lo esperado.",
"Yo nunca he seguido después de acabar porque todavía quería más.",
"Yo nunca he necesitado una pausa y después continué.",
"Yo nunca he fingido un orgasmo para terminar.",
"Yo nunca he admitido que fingí un orgasmo.",
"Yo nunca he preguntado directamente si la otra persona llegó.",
"Yo nunca he dado indicaciones para que la otra persona llegara.",
"Yo nunca he aprendido algo nuevo sobre mi cuerpo con una pareja.",
"Yo nunca he descubierto una zona sensible por accidente.",
"Yo nunca he tenido un orgasmo inesperado.",
"Yo nunca he quedado demasiado sensible para seguir.",
"Yo nunca he tenido que pedir que pararan porque era demasiado intenso.",
"Yo nunca he sentido vergüenza por lo fuerte que reaccioné.",
"Yo nunca he sorprendido a alguien con mi lado más atrevido.",
"Yo nunca he parecido inocente y luego demostré lo contrario.",
"Yo nunca he subestimado lo atrevida que era otra persona.",
"Yo nunca he dicho “no pareces de ese tipo” después de hacerlo.",
"Yo nunca he descubierto que alguien tímido/a era muy intenso/a en la cama.",
"Yo nunca he tenido química increíble con alguien que besaba raro al principio.",
"Yo nunca he enseñado a alguien cómo me gusta besar.",
"Yo nunca he pedido que me besaran en una parte específica.",
"Yo nunca he besado cada parte del cuerpo de alguien.",
"Yo nunca he pasado más tiempo en preliminares que en sexo.",
"Yo nunca he preferido los preliminares al acto en sí.",
"Yo nunca he tenido un encuentro solo de preliminares.",
"Yo nunca he tenido sexo oral en un lugar arriesgado.",
"Yo nunca he recibido sexo oral mientras veía televisión.",
"Yo nunca he hecho sexo oral como sorpresa consensuada.",
"Yo nunca he pedido que no pararan durante sexo oral.",
"Yo nunca he usado un sabor o comida durante sexo oral.",
"Yo nunca he hecho un 69 durante más tiempo del esperado.",
"Yo nunca he sentido que el sexo oral era mejor que todo lo demás.",
"Yo nunca he tenido que parar por reírme durante sexo oral.",
"Yo nunca he practicado sexo anal con preparación y consentimiento.",
"Yo nunca he sentido curiosidad por probar sexo anal.",
"Yo nunca he usado un juguete anal.",
"Yo nunca he hablado de sexo anal antes de intentarlo.",
"Yo nunca he decidido parar algo anal porque no era cómodo.",
"Yo nunca he disfrutado más de lo esperado una práctica nueva.",
"Yo nunca he dicho que no a algo y luego lo probé otro día por decisión propia.",
"Yo nunca he cambiado de opinión sobre una fantasía después de hablarla.",
"Yo nunca he repetido una práctica que al principio me daba nervios.",
"Yo nunca he usado una aplicación para controlar un juguete a distancia.",
"Yo nunca he tenido un juguete controlado desde otra habitación.",
"Yo nunca he usado un juguete en un lugar público sin que nadie lo supiera.",
"Yo nunca he llevado un juguete puesto durante una cita consensuada.",
"Yo nunca he dejado que alguien eligiera la intensidad de un juguete.",
"Yo nunca he tenido que mantener la cara seria mientras estaba muy excitado/a.",
"Yo nunca he provocado a alguien durante una cena.",
"Yo nunca he enviado un mensaje picante estando sentado/a al lado de esa persona.",
"Yo nunca he recibido una instrucción atrevida en público.",
"Yo nunca he tenido que esperar horas para cumplir una promesa sexual.",
"Yo nunca he hecho una promesa sexual por mensaje.",
"Yo nunca he usado una palabra clave para irnos de una fiesta.",
"Yo nunca he salido antes de una fiesta porque no aguantábamos más.",
"Yo nunca he besado a alguien en el ascensor camino a una habitación.",
"Yo nunca he empezado a quitar ropa antes de llegar a la cama.",
"Yo nunca he tenido sexo sin llegar a la cama.",
"Yo nunca he acabado durmiendo en el suelo por cómo quedó la habitación.",
"Yo nunca he tenido sexo en más de tres habitaciones de la misma casa.",
"Yo nunca he intentado hacerlo en cada lugar de una casa.",
"Yo nunca he empezado en un lugar y terminado en otro.",
"Yo nunca he tenido que limpiar un desastre después.",
"Yo nunca he dejado una huella evidente de lo que pasó.",
"Yo nunca he encontrado una prenda días después.",
"Yo nunca he recibido un mensaje diciendo “dejaste esto aquí”.",
"Yo nunca he usado una prenda olvidada como excusa para volver.",
"Yo nunca he vuelto por una prenda y terminé repitiendo.",
"Yo nunca he sabido que repetiríamos antes de despedirnos.",
"Yo nunca he besado a alguien en la puerta durante más de cinco minutos.",
"Yo nunca he dicho adiós varias veces porque seguíamos besándonos.",
"Yo nunca he perdido un transporte por quedarme con alguien.",
"Yo nunca he cambiado un pasaje o viaje por una noche más.",
"Yo nunca he inventado una excusa para quedarme a dormir.",
"Yo nunca he dicho que no podía manejar para quedarme.",
"Yo nunca he ofrecido alojamiento con dobles intenciones.",
"Yo nunca he compartido cama por falta de espacio y pasó algo.",
"Yo nunca he compartido cama con alguien y resistimos toda la noche.",
"Yo nunca he despertado pegado/a a alguien que no era mi pareja.",
"Yo nunca he fingido frío para acercarme a alguien.",
"Yo nunca he usado una manta como excusa para tocar a alguien.",
"Yo nunca he tenido sexo mientras llovía fuerte.",
"Yo nunca he sentido que una tormenta hizo el momento más excitante.",
"Yo nunca he tenido sexo con una ventana abierta.",
"Yo nunca he tenido miedo de que alguien nos viera desde afuera.",
"Yo nunca he cerrado cortinas a última hora.",
"Yo nunca he tenido sexo frente a una ventana.",
"Yo nunca he sentido morbo por casi ser descubierto/a.",
"Yo nunca he detenido algo porque el riesgo era demasiado.",
"Yo nunca he tenido que guardar silencio por completo.",
"Yo nunca he usado una almohada para silenciarme.",
"Yo nunca he susurrado instrucciones para que nadie oyera.",
"Yo nunca he tenido sexo mientras alguien hablaba al otro lado de la puerta.",
"Yo nunca he contestado una llamada en medio de un momento íntimo.",
"Yo nunca he fingido normalidad durante una llamada.",
"Yo nunca he cortado una llamada para seguir.",
"Yo nunca he ignorado llamadas repetidas porque estaba ocupado/a.",
"Yo nunca he enviado un mensaje diciendo “ahora no puedo” con doble sentido.",
"Yo nunca he mentido sobre dónde estaba durante una aventura.",
"Yo nunca he inventado una excusa para pasar la noche fuera.",
"Yo nunca he ocultado una salida porque sabía cómo terminaría.",
"Yo nunca he tenido una cita secreta.",
"Yo nunca he besado a alguien que nadie sabía que me gustaba.",
"Yo nunca he tenido una relación sexual completamente secreta.",
"Yo nunca he acordado no contarle a nadie.",
"Yo nunca he roto el pacto y se lo conté a mi mejor amigo/a.",
"Yo nunca he sentido más morbo porque era secreto.",
"Yo nunca he tenido miedo de que una foto revelara dónde estaba.",
"Yo nunca he pedido que no subieran historias juntos.",
"Yo nunca he evitado aparecer en una foto por una aventura.",
"Yo nunca he salido por separado de un lugar para no levantar sospechas.",
"Yo nunca he llegado por separado y terminado juntos.",
"Yo nunca he usado un nombre falso para guardar un contacto.",
"Yo nunca he archivado un chat picante.",
"Yo nunca he silenciado notificaciones de alguien para que nadie sospechara.",
"Yo nunca he cambiado la vista previa de mensajes por contenido sexual.",
"Yo nunca he usado una aplicación con mensajes que desaparecen.",
"Yo nunca he mandado una foto que solo podía verse una vez.",
"Yo nunca he hecho captura de algo que desaparecía.",
"Yo nunca he pedido que no hicieran captura.",
"Yo nunca he confiado demasiado en una foto temporal.",
"Yo nunca he tenido miedo de que se filtrara algo íntimo.",
"Yo nunca he hablado claramente sobre privacidad antes de enviar contenido.",
"Yo nunca he pedido que borraran algo íntimo después.",
"Yo nunca he borrado todo al terminar una relación.",
"Yo nunca he mantenido una conversación sexual con alguien durante años.",
"Yo nunca he retomado una conversación picante después de mucho tiempo.",
"Yo nunca he sentido química inmediata al reencontrarme con alguien.",
"Yo nunca he besado a alguien después de años sin verlo/a.",
"Yo nunca he tenido una noche pendiente durante mucho tiempo.",
"Yo nunca he cumplido una fantasía con alguien que me gustaba desde hace años.",
"Yo nunca he pensado “por fin” mientras besaba a alguien.",
"Yo nunca he tenido sexo con mi crush de mucho tiempo.",
"Yo nunca he descubierto que mi crush también fantaseaba conmigo.",
"Yo nunca he confesado una fantasía y fue correspondida.",
"Yo nunca he recibido una confesión sexual inesperada.",
"Yo nunca he dicho “yo también” ante una confesión atrevida.",
"Yo nunca he sentido que una amistad cambió después de un beso.",
"Yo nunca he cruzado la línea con un amigo/a cercano/a.",
"Yo nunca he tenido sexo con un amigo/a y luego actuamos normal.",
"Yo nunca he perdido una amistad después de acostarnos.",
"Yo nunca he mejorado una amistad después de acostarnos.",
"Yo nunca he sentido celos de un amigo/a con quien tuve algo.",
"Yo nunca he ocultado sentimientos detrás de una relación casual.",
"Yo nunca he dicho que solo quería sexo cuando quería algo más.",
"Yo nunca he dicho que quería algo más cuando en realidad solo quería sexo.",
"Yo nunca he mantenido a alguien cerca por la química sexual.",
"Yo nunca he sentido culpa después de una aventura consensuada.",
"Yo nunca he sentido orgullo secreto por una noche atrevida.",
"Yo nunca he pensado “nadie creería esto de mí”.",
"Yo nunca he hecho algo sexual completamente fuera de mi personalidad.",
"Yo nunca he sorprendido a mis amigos contando una experiencia.",
"Yo nunca he tenido una historia que todavía no puedo contar completa.",
"Yo nunca he pensado que esta noche podría terminar en algo.",
"Yo nunca he elegido mi ropa hoy esperando llamar la atención.",
"Yo nunca he venido a una fiesta con preservativos.",
"Yo nunca he mirado a alguien de este grupo pensando “quizás hoy”.",
"Yo nunca he bebido para atreverme a hablarle a alguien presente.",
"Yo nunca he querido que este juego terminara con un beso.",
"Yo nunca he esperado que una frase hiciera beber a una persona concreta.",
"Yo nunca he mentido en esta ronda para proteger mi reputación.",
"Yo nunca he descubierto esta noche que alguien me atrae.",
"Yo nunca he sentido que alguien presente me está coqueteando ahora mismo.",
"Yo nunca he querido hacer una pregunta directa a alguien presente.",
"Yo nunca he pensado que alguien presente besaría increíble.",
"Yo nunca he pensado que dos personas presentes deberían besarse.",
"Yo nunca he aceptado un beso por votación del grupo.",
"Yo nunca he deseado que me retaran a besar a alguien.",
"Yo nunca he sentido celos viendo a alguien presente coquetear.",
"Yo nunca he querido llevarme a alguien presente al final de la noche.",
"Yo nunca he pensado en invitar a alguien presente a dormir.",
"Yo nunca he imaginado cómo terminará esta fiesta.",
"Yo nunca he hecho algo de lo que mañana solo recordaré partes.",
"Yo nunca he dicho “solo tomaré un poco” antes de una noche peligrosa.",
"Yo nunca he terminado una noche de beber sin alguna historia picante.",
"Yo nunca he usado este juego para descubrir quién está disponible.",
"Yo nunca he usado este juego para medir el interés de alguien.",
"Yo nunca he bebido por una frase y mirado directamente a la persona implicada.",
"Yo nunca he pensado que alguien presente está mintiendo ahora mismo.",
"Yo nunca he querido escuchar los detalles después de que alguien bebió.",
"Yo nunca he pedido detalles demasiado explícitos en un juego.",
"Yo nunca he contado más de lo necesario porque estaba borracho/a.",
"Yo nunca he revelado una fantasía después de varias copas.",
"Yo nunca he prometido cumplir una fantasía durante una fiesta.",
"Yo nunca he cumplido una promesa sexual hecha mientras bebía.",
"Yo nunca he despertado y recordado una confesión que hice jugando.",
"Yo nunca he sentido vergüenza al día siguiente por algo que conté.",
"Yo nunca he terminado besando a la persona menos esperada.",
"Yo nunca he cambiado de opinión sobre alguien durante una fiesta.",
"Yo nunca he pasado de cero interés a mucha tensión sexual en una noche.",
"Yo nunca he pensado que el alcohol reveló una atracción real.",
"Yo nunca he besado a alguien después de decir que jamás lo haría.",
"Yo nunca he acabado en una cama que no era mía después de beber.",
"Yo nunca he despertado buscando mi teléfono y mi ropa.",
"Yo nunca he tenido que reconstruir una noche con mensajes y fotos.",
"Yo nunca he recibido un mensaje al día siguiente que decía “tenemos que hablar”.",
"Yo nunca he mandado un “¿llegaste bien?” esperando que la conversación siguiera.",
"Yo nunca he usado un “gracias por anoche” con doble intención.",
"Yo nunca he respondido “repetimos” al día siguiente.",
"Yo nunca he pensado en repetir antes de llegar a casa.",
"Yo nunca he guardado la ubicación de un lugar porque quería volver con alguien.",
"Yo nunca he tenido una noche tan buena que cambió mis planes de la semana.",
"Yo nunca he quedado con alguien al día siguiente de conocerlo/a.",
"Yo nunca he pasado un fin de semana entero en la cama con alguien.",
"Yo nunca he cancelado todo por seguir encerrado/a con alguien.",
"Yo nunca he perdido la cuenta de cuántas veces lo hicimos.",
"Yo nunca he terminado completamente agotado/a pero satisfecho/a.",
"Yo nunca he dicho “una vez más” más de una vez.",
"Yo nunca he pensado que no podría caminar bien al día siguiente.",
"Yo nunca he tenido que ocultar una sonrisa después de una noche intensa.",
"Yo nunca he vuelto a una reunión con cara de que había pasado algo.",
"Yo nunca he recibido miradas porque todos sabían lo que pasó.",
"Yo nunca he negado algo que todo el grupo ya sabía.",
"Yo nunca he tenido un secreto sexual compartido con alguien presente.",
"Yo nunca he querido que una frase de este juego revelara ese secreto.",
"Yo nunca he bebido por esta frase aunque nadie sepa por qué.",
"Yo nunca he mentido en este Yo Nunca."
]

let historial2 = new Set();

function yoNunca2(num) {
  let frase;
  num = parseInt(num);

  if (num === 0) {
    const indice = Math.floor(Math.random() * frases2.length);
    frase = frases2[indice];
    num = indice + 1;
  } else if (num >= 1 && num <= frases2.length) {
    frase = frases2[num - 1];
  } else {
    document.getElementById("frase-resultado-2").innerText = "Número inválido. Ingresa entre 0 y " + frases2.length;
    return;
  }

  if (historial2.has(num)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historial2.add(num);
  }

  document.getElementById("frase-resultado-2").innerText = frase + ` (n°${num})`;
}

let historial = new Set();

function yoNunca(num) {
  let frase;

  // convertir a número
  num = parseInt(num);

  if (num === 0) {
    // Aleatorio
    const indice = Math.floor(Math.random() * frases.length);
    frase = frases[indice];
    num = indice + 1;
  } else if (num >= 1 && num <= frases.length) {
    // Por número exacto
    frase = frases[num - 1];
  } else {
    frase = "Número inválido. Ingresa entre 0 y " + frases.length;
    document.getElementById("frase-resultado").innerText = frase;
    return;
  }

  // Verificar repetición
  if (historial.has(num)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historial.add(num);
  }

  document.getElementById("frase-resultado").innerText = frase + ` (n°${num})`;
}



function yoNuncaFrase() {
  const frases = [
    "Yo nunca he llegado tarde a clase.",
    "Yo nunca he mandado un mensaje a la persona equivocada.",
    "Yo nunca he mentido para salir de un apuro.",
    "Yo nunca he perdido las llaves de mi casa.",
    "Yo nunca he dicho que ya comí cuando no era cierto.",
    "Yo nunca me he quedado dormido en el transporte público.",
    "Yo nunca he usado la misma excusa más de una vez.",
    "Yo nunca me he reído en un momento inapropiado.",
    "Yo nunca he olvidado el cumpleaños de alguien cercano."
  ];

  // Elegir frase aleatoria
  const indice = Math.floor(Math.random() * frases.length);
  const frase = frases[indice];

  // Mostrar en el div correspondiente
  document.getElementById("frase-resultado").innerText = frase;
}




// =============================
// Juego: Cuarto Rey (Mazo de 52 cartas, sin Joker)
// =============================

const palos = ["♠️", "♥️", "♣️", "♦️"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let mazoCuartoRey = [];

// Generar mazo
for (let p of palos) {
  for (let v of valores) {
    mazoCuartoRey.push(`${v}${p}`);
  }
}

// Barajar mazo (Fisher-Yates)
function barajarMazo(mazo) {
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  return mazo;
}

mazoCuartoRey = barajarMazo(mazoCuartoRey);

// Función para sacar carta
function cuartoReyAccion() {
  if (mazoCuartoRey.length === 0) {
    document.getElementById("cuarto-rey-resultado").innerText = "¡El mazo se ha acabado!";
    return;
  }

  const carta = mazoCuartoRey.pop();
  document.getElementById("cuarto-rey-resultado").innerText = `Carta: [${carta}]`;
}

// -----------------------------
// Juego: La puta (mazo de 52 cartas)
// -----------------------------

const reglasLaPuta = {
  A: "Espejo",
  2: "Reto",
  3: "Regala 3 sorbos",
  4: "Quién es más probable: todos apuntan; quien tenga más votos toma",
  5: "Cascada",
  6: "Cultura chupística",
  7: "Juego 2 espaldas",
  8: "Juego: bongo bongo, patas de pato, miradas, crear historia o cachipún",
  9: "Cacho humano",
  10: "La puta",
  J: "Yo nunca nunca",
  Q: "Regla",
  K: "Cuarto rey"
};

let mazoLaPuta = [];

// Mismo mazo y forma de sacar cartas que Cuarto Rey.
for (let p of palos) {
  for (let v of valores) {
    mazoLaPuta.push(`${v}${p}`);
  }
}

mazoLaPuta = barajarMazo(mazoLaPuta);

function laPutaAccion() {
  const resultado = document.getElementById("la-puta-resultado");

  if (mazoLaPuta.length === 0) {
    resultado.innerText = "¡El mazo se ha acabado!";
    return;
  }

  const carta = mazoLaPuta.pop();
  const valor = carta.match(/^(10|[A2-9JQK])/)[0];
  resultado.innerText = `Carta: [${carta}] · ${reglasLaPuta[valor]}`;
}

// -----------------------------
// Juego: Más probable
// -----------------------------

const frasesMasProbable = [
  "¿Quién es más probable que se vaya con alguien que acaba de conocer?",
  "¿Quién es más probable que mande nudes primero?",
  "¿Quién es más probable que se coma a alguien del grupo?",
  "¿Quién es más probable que tenga más de un crush ahora mismo?",
  "¿Quién es más probable que bese a alguien por una apuesta?",
  "¿Quién es más probable que vuelva a hablarle a su ex de madrugada?",
  "¿Quién es más probable que tenga una historia prohibida?",
  "¿Quién es más probable que se enamore después de una noche?",
  "¿Quién es más probable que sea el mejor beso del grupo?",
  "¿Quién es más probable que mienta diciendo que no le gusta alguien?",
  "¿Quién es más probable que tenga la lista de mejores besos?",
  "¿Quién es más probable que se agarre a alguien esta noche?",
  "¿Quién es más probable que tenga más secretos calientes?",
  "¿Quién es más probable que coquetee sin darse cuenta?",
  "¿Quién es más probable que termine en una situación incómoda mañana?",
  "¿Quién es más probable que le escriba a alguien que no debería?",
  "¿Quién es más probable que bese a dos personas en una misma noche?",
  "¿Quién es más probable que tenga el peor gusto para elegir gente?",
  "¿Quién es más probable que se quede con alguien solo por química?",
  "¿Quién es más probable que se arrepienta de un mensaje enviado?"
];

function masProbableAccion() {
  const indice = Math.floor(Math.random() * frasesMasProbable.length);
  document.getElementById("mas-probable-resultado").innerText = frasesMasProbable[indice];
}

// -----------------------------
// Juego: El impostor
// -----------------------------

const palabrasImpostor = {
  carrete: [
    "Piscola", "Shot", "Cerveza", "After", "Previa", "Karaoke", "Vaso", "Hielo", "Discoteca", "Reggaetón",
    "Tequila", "Ron", "Vodka", "Gin", "Vino", "Espumante", "Botillería", "Uber", "Resaca", "Bajón",
    "Perreo", "Michelada", "Terremoto", "Cenicero", "Encendedor", "Corto", "VIP", "Pulsera", "Guardarropía", "DJ",
    "Parlante", "Luces", "Barra", "Bartender", "Copete", "Promoción", "Happy Hour", "Trago", "Seco", "Brindis",
    "Curado", "Apagón de tele", "Caña", "Jägermeister", "Pisco Sour", "Mistral", "Alto del Carmen", "Campanario", "Fernet", "Guachaca"
  ],
  
  cuerpo: [
    "Espalda", "Cuello", "Labios", "Manos", "Ojos", "Piernas", "Pelo", "Hombros", "Cintura", "Tatuaje",
    "Lengua", "Ombligo", "Pecho", "Abdomen", "Glúteos", "Muslos", "Rodilla", "Tobillo", "Pie", "Dedos",
    "Uñas", "Oreja", "Nariz", "Cejas", "Pestañas", "Mejillas", "Frente", "Nuca", "Clavícula", "Cadera",
    "Pantorrilla", "Talón", "Codo", "Muñeca", "Antebrazo", "Piel", "Cicatriz", "Lunar", "Piercing", "Barba",
    "Bigote", "Axila", "Nudillos", "Paladar", "Encías", "Dientes", "Garganta", "Pómulos", "Barbilla", "Ingle"
  ],
  
  lugares: [
    "Playa", "Auto", "Baño", "Ascensor", "Cocina", "Hotel", "Fiesta", "Piscina", "Cine", "Terraza",
    "Motel", "Parque", "Bar", "Restaurante", "Universidad", "Colegio", "Metro", "Micro", "Avión", "Gimnasio",
    "Estadio", "Concierto", "Bosque", "Montaña", "Calle", "Callejón", "Balcón", "Techo", "Sótano", "Bodega",
    "Sillón", "Cama", "Armario", "Escalera", "Oficina", "Probador", "Supermercado", "Mall", "Playa nudista", "Cabaña",
    "Carpa", "Jacuzzi", "Sauna", "Hospital", "Iglesia", "Cementerio", "Comisaría", "Paradero", "Cajero automático", "Ring de boxeo"
  ],
  
  cultura: [
    "Shrek", "Bad Bunny", "Titanic", "Barbie", "Harry Potter", "Karol G", "Friends", "Marvel", "Tinder", "Instagram",
    "TikTok", "Twitter", "OnlyFans", "Netflix", "HBO", "Spotify", "YouTube", "Twitch", "Ibai", "Bizarrap",
    "Rosalía", "Feid", "Dua Lipa", "Taylor Swift", "Los Simpson", "Bob Esponja", "Juego de Tronos", "Stranger Things", "Euphoria", "La Casa de Papel",
    "Star Wars", "Batman", "Spider-Man", "GTA", "Minecraft", "FIFA", "Fortnite", "Among Us", "Meme", "Sticker",
    "Podcast", "Influencer", "Youtuber", "Otaku", "K-Pop", "BTS", "Blackpink", "Coachella", "Lollapalooza", "Bumble"
  ],

  citas_y_travesuras: [
    "Beso", "Abrazo", "Match", "Cita", "Ex", "Tóxico", "Crush", "Sugar Daddy", "Sugar Baby", "Ghosting",
    "Red Flag", "Green Flag", "Amigos con ventaja", "Pololeo", "Soltero", "Matrimonio", "Divorcio", "Cuernos", "Infidelidad", "Celos",
    "Mensaje", "Visto", "Bloqueo", "Nudes", "Sexting", "Pack", "Declaración", "Flechazo", "Cucharita", "Chape",
    "Atraque", "Atracción", "Tensión sexual", "Fantasía", "Fetiche", "Lencería", "Preservativo", "Pastilla", "Lubricante", "Juguete",
    "Esposas", "Látigo", "Trío", "Orgasmo", "Clímax", "Gemido", "Chupón", "Mañanero", "Rapidito", "Kamasutra"
  ],

  comida_y_bajon: [
    "Pizza", "Hamburguesa", "Completos", "Papas fritas", "Sushi", "Tacos", "Empanada", "Churrasco", "Lomo italiano", "Sopaipilla",
    "Salchipapa", "Chorrillana", "Nachos", "Queso fundido", "Pollo frito", "Nuggets", "Kebab", "Shawarma", "Fajitas", "Burrito",
    "Ceviche", "Ramen", "Hot dog", "Macarrones", "Donas", "Helado", "Chocolate", "Galletas", "Gomitas", "Doritos",
    "Cheetos", "Ramitas", "Maní", "Almendras", "Aceitunas", "Palta", "Mayonesa", "Kétchup", "Mostaza", "Ají",
    "Salsa de ajo", "Queso cheddar", "Tocino", "Huevo frito", "Churros", "Waffles", "Crepes", "Brownie", "Torta", "Alfajor"
  ],

  excusas_y_mentiras: [
    "Me quedé dormido", "Había mucho taco", "Se me apagó el celular", "Estoy enfermo", "Tengo que estudiar", "Mi mamá no me deja", "No tengo plata", "Mañana trabajo temprano", "Se me perdió la micro", "Me duele la cabeza",
    "Estoy cansado", "Tengo un compromiso familiar", "El perro se comió mi tarea", "No me sonó la alarma", "Me robaron", "Se me rompió la llave", "Tengo que cuidar a mi hermano", "Me intoxiqué", "Se me pinchó una rueda", "Estoy en una reunión",
    "No me llega el internet", "Se cortó la luz", "Estoy con caña", "Me duele la guata", "Tengo médico", "Me torcí el pie", "Me invitaron a otro lado", "Se me olvidó", "No leí el mensaje", "Pensé que era mañana",
    "Me equivoqué de día", "Tengo que ir al banco", "Estoy arreglando mi pieza", "Mi ex me llamó", "Tengo una urgencia", "No encuentro las llaves", "Se me manchó la ropa", "No tengo qué ponerme", "Me canceló el Uber", "Tengo que pasear al perro",
    "Estoy lavando ropa", "Me quedé encerrado", "Estoy cocinando", "Tengo visitas", "Me pegaron una enfermedad", "Estoy en el gimnasio", "Tengo prueba mañana", "Me castigaron", "No me siento bien", "Tengo mucha pega"
  ]
};
let estadoImpostor = { jugadores: [], indice: 0, impostor: 0, palabra: "", tiempo: 60, intervalo: null };

function esNombreEasterEgg(nombre) {
  const normalizado = nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return normalizado.includes("edu") || normalizado.includes("itu");
}

function iniciarImpostor() {
  const inputNombres = document.getElementById("impostor-nombres");
  const nombres = inputNombres.value
    .split(/[,\n]+/)
    .map(nombre => nombre.trim())
    .map(nombre => esNombreEasterEgg(nombre) ? "🪇" : nombre)
    .filter(Boolean);
  const turno = document.getElementById("impostor-turno");

  if (nombres.length < 3) {
    turno.innerText = "Mínimo 3 jugadores";
    document.getElementById("impostor-stage").hidden = false;
    return;
  }

  inputNombres.value = nombres.join(", ");

  const categoria = document.getElementById("impostor-categoria").value;
  const palabras = palabrasImpostor[categoria];
  const tiempo = Math.max(15, Math.min(300, Number(document.getElementById("impostor-tiempo").value) || 60));

  clearInterval(estadoImpostor.intervalo);
  estadoImpostor = {
    jugadores: nombres,
    indice: 0,
    impostor: Math.floor(Math.random() * nombres.length),
    palabra: palabras[Math.floor(Math.random() * palabras.length)],
    tiempo,
    intervalo: null
  };

  document.getElementById("impostor-stage").hidden = false;
  document.getElementById("impostor-timer").hidden = true;
  prepararTurnoImpostor();
}

function prepararTurnoImpostor() {
  const { jugadores, indice } = estadoImpostor;
  document.getElementById("impostor-turno").innerText = `Turno: ${jugadores[indice]}`;
  document.getElementById("impostor-palabra").innerText = "";
  document.getElementById("impostor-revelar").hidden = false;
  document.getElementById("impostor-siguiente").hidden = true;
}

function revelarPalabraImpostor() {
  const esImpostor = estadoImpostor.indice === estadoImpostor.impostor;
  document.getElementById("impostor-palabra").innerText = esImpostor ? "IMPOSTOR" : estadoImpostor.palabra;
  document.getElementById("impostor-revelar").hidden = true;
  document.getElementById("impostor-siguiente").hidden = false;
}

function siguienteJugadorImpostor() {
  estadoImpostor.indice += 1;
  if (estadoImpostor.indice < estadoImpostor.jugadores.length) {
    prepararTurnoImpostor();
    return;
  }
  iniciarTimerImpostor();
}

function iniciarTimerImpostor() {
  const timer = document.getElementById("impostor-timer");
  document.getElementById("impostor-turno").innerText = "";
  document.getElementById("impostor-palabra").innerText = "";
  document.getElementById("impostor-siguiente").hidden = true;
  timer.hidden = false;

  const actualizarTimer = () => {
    const minutos = Math.floor(estadoImpostor.tiempo / 60);
    const segundos = estadoImpostor.tiempo % 60;
    timer.innerText = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  };

  actualizarTimer();
  estadoImpostor.intervalo = setInterval(() => {
    estadoImpostor.tiempo -= 1;
    actualizarTimer();
    if (estadoImpostor.tiempo <= 0) clearInterval(estadoImpostor.intervalo);
  }, 1000);
}




// -----------------------------
// Juego: The Kiss List
// -----------------------------

const lugares = [
  "La Calle (cuenta en todos los estilos)",
  "Jardín",
  "Plaza (de noche)",
  "Sillón",
  "Cocina",
  "Auto (en cualquier parte del auto)",
  "Cama ⤵️",
  "💢Cama papas💢 X 2",
  "mirador",
  "pick up",
  "Carrete",
  "Disco",
  "afuera de la disco",
  "Matrimonio ⤵️",
  "pista de baile x2",
  "Plantas (adentro)",
  "Baño",
  "Baño químico",
  "Plaza (de dia)",
  "Mall",
  "Uber/Taxi/Bus",
  "Pieza de la nana",
  "En un restaurant",
  "Transporte público",
  "Gym",
  "Cine",
  "Universidad o Colegio",
  "Después de vomitar",
  "Piscinas",
  "Ascensor",
  "Mesa (arriba)",
  "En el mar/playa/adentro bañandose/ arena/lancha/ balsa",
  "💢Jacuzzi 💢",
  "En el cerro (alturas)",
  "Puente",
  "auto/casa abandonada",
  "Columpio",
  "En el extranjero",
  "Sauna",
  "Avión",
  "Ducha",
  "Barco y/o derivados",
  "Nieve",
  "cama de una amiga",
  "cochamo",
  "fdg",
  "desayuno",
  "guanaqueros",
  "bahía inglesa",
  "playa la virgen",
  "la serena",
  "noviembre las brisas",
  "pichilemu",
  "preu",
  "sala paes",
  "Despensa/bodega/subterraneo",
  "closet",
  "Escalera",
  "Concierto",
  "Pesebrera / a caballo",
  "Techo",
  "Casita de muñecas",
  "Cama saltarina",
  "Cancha de tennis o de otro deporte",
  "En un colegio",
  "Probador",
  "carpa",
  "💢Andaribel 💢 X 2",
  "fantasilandia / parque de diversiones",
  "Mesa de pool",
  "Mesa de ping pong",
  "Arriba de un bar",
  "Arriba de un camarote",
  "Arriba de un camarote con alguien abajo X2",
  "En el techo de un auto",
  "Biblioteca",

];

const desafios = [
  "Hermano de una amiga",
  "Familiar cercano de una amiga",
  "Amigo de un hermano",
  "Uno + chico 👶🏼",
  "Uno + grande (4 años o mas) 👴🏼",
  "Compañero colegio/universidad",
  "ojos claros",
  "ex de una amiga",
  "Desconocido",
  "Provinciano",
  "Extranjero",
  "Muy amigo",
  "Ex pololo/salientes",
  "Coloro",
  "Pelado",
  "De tu porte o mas bajo",
  "Alguien de trabajos",
  "Ayudante",
  "o mas amigos entre ellos",
  "compartido con amiga",
  "que se saque la polera",
  "sacarte la polera",
  "que te desabrochen los sostenes",
  "Tirarse tu",
  "Que te hagan un chupon",
  "Hacer un chupon",
  "morder los labios",
  "que te muerdan los labios",
  "Con chicle",
  "que se te pase un chicle ajeno",
  "Body shot",
  "Dedo",
  "Correr",
  "👅(•) (•)",
  "🤲🏼 (•) (•)",
  "Tirar",
  "👅🐚",
  "👅🍆",
  "Que te muerdan/beso la oreja",
  "Morder/beso la oreja",
  "Con algun alimento (Ej. Chocolate, frutilla)",
  "debajo del agua",
  "Romper algo pelándose",
];

const posiciones = [
  "Acostados",
  "Sentados",
  "Gatita",
  "En altura",
  "Arrodillados",
  "Spider man",
  "Titanic",
  "Viendote con tu amiga en las mismas (2pa2)",
  "Koala sentada",
  "Koalas",
  "El \"Christian Grey\"",
  "Contra la pared",
  "La Romantica",
];

let historialLugares = new Set();
let historialDesafios = new Set();
let historialPosiciones = new Set();

function kissListLugar() {
  const indice = Math.floor(Math.random() * lugares.length);
  let frase = lugares[indice];

  if (historialLugares.has(indice)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historialLugares.add(indice);
  }

  document.getElementById("kiss-list-resultado").innerText =
    "Lugar: " + frase;
}

function kissListDesafio() {
  const indice = Math.floor(Math.random() * desafios.length);
  let frase = desafios[indice];

  if (historialDesafios.has(indice)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historialDesafios.add(indice);
  }

  document.getElementById("kiss-list-resultado").innerText =
    "Desafío: " + frase;
}

function kissListPosicion() {
  const indice = Math.floor(Math.random() * posiciones.length);
  let frase = posiciones[indice];

  if (historialPosiciones.has(indice)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historialPosiciones.add(indice);
  }

  document.getElementById("kiss-list-resultado").innerText =
    "Posición: " + frase;
}



// =============================
// Juego: La Polla 🤪
// =============================

const retosKino = [
"Darle la mano al de tu izquierda x una ronda",
"Repudio",
"Chupale la oreja al de tu derecha",
"El que se ríe pierde",
"Toman las q nunca han estado en algo",
"Cachipun a la primera, perdedor toma",
"Pon una regla",
"Casados toman",
"Vale por una ida al baño",
"Limones",
"Selfie",
"Toman los que hayan wajiado en un medio de transporte",
"No decir “si/no” por una ronda",
"Sinónimos de pene",
"Mi pico/vagina es… (con una letra)",
"Teñidxs toman",
"Los veggies toman",
"Los que les gusta el olor a bencina",
"Cacho humano",
"Chancho inflado",
"Bodyshot",
"Ropa roja toma",
"7",
"Apple toma",
"Raja rut",
"Siéntate arriba del de tu derecha x una ronda",
"Cambiar prenda con el de izquierda",
"Regla del dedo (ultimo que pone el dedo toma)",
"Rulers toman",
"Totem",
"2 mentiras 1 verdad",
"Tararear una canción y adivinar",
"Mostrar ropa interior",
"Toma tantos tragos como tantas letras tenga tu nombre",
"Cultura chupistica",
"Es de cuico",
"Trago por vez ida de waja",
"El que tenga calcetines diferentes toma",
"Fondo",
"El último que toca el suelo toma",
"Es de roto",
"Trompetazo",
"Penitencia",
"Toman los q tengan un medallón",
"Los que salgan sonriendo en el carnet",
"King of the Bongo",
"Cambio tu acento x una ronda",
"Botellita",
"Búfalo (tomar con la izquierda)",
"Beso de amix",
"La mas macabea toma",
"Wpp a la última persona que te agarraste",
"Deportistas destacados toman",
"Quien es mas probable...",
"Confesion",
"Broma telefónica",
"Más ritmo (póngale)",
"Años divido en 2 = tragos",
"Africano",
"Toman los que tienen reloj",
"Rotar vasos a la derecha",
"Sácate una prenda",
"Toman los que estén fumando",
"Sigue la historia (un...un pájaro...)",
"Snorkel",
"Chica 3D",
"Comerse un filtro",
"Elegir si o no (3 veces) toma la minoría",
"Tragos por pelón arrepentido",
"El último q se sube a la silla toma",
"Cascada",
"Reparte 6 tragos",
"Frutal / animales sonidos",
"Los que se han ido de intercambio toman",
"Toman los que están tomando con blanca",
"Toman los cabeza de pishi",
"Patos (1 pato 2 patas)",
"Vikingo (vikingo, remos, marea)",
"1 trago x arito",
"Infiltrado",
"Toma 4 tragos",
"Fuck, marry, kill",
"Que corra el hielo de boca en boca",
"Piernas cruzadas toman 2",
"Piropos al de alado, 1 ronda",
"Rappi de hielo",
"Mi vagina es...",
"Los que estudien o quieran comercial toman",
"Agregar regla",
"Chupón al del frente, parte a elección",
"Toman los ojitos de piscina",
"La y el  mas pelado toma",
"Las mujeres toman",
"El mejor orgasmo reparte 10 tragos",
"Toma la más pechugona",
"Espalda con espalda (quien es la más y apuntar)",
"Un chupito",
"Residente toma",
"Repudio",
"Guiño (teni q cachar quien se guiña)",
"Fantasmita",
"Trago x ex",
"Beso en la parte del cuerpo con tu inicial",
"Toman las q se han agarrado alguien de un(s) año más chico",
"Toma x cada pelado de tu colegio",
"Pelados x tragos",
"Dedo arriba o abajo: A. Que tus papás te vean tirando / tu ver a tus papas tirando.  B.Que tu abuelo te mande nudes / tu mandarle uno C. Tomar con blanca/ negra",
"V o R",
"Voy al bar...",
"Cuenta una historia bizarra",
"Toma el impuntual, último que llegó",
"La mas sobria toma",
"Pic instagram",
"Toman los q tienen tinder",
"Paranoia (pregunta baja, respuesta alta) 3 personas",
"Tarita",
"Probabilidades",
"5 minutos en el paraíso con el seco opuesto a la derecha",
"El más probable que:  A. de ser stripper. B. de casarse con unx millonarix. C.que interactúe con un fantasma",
"Toman los q se lo han llevado en cana",
"Languetazo (hombro-frente)",
"Zurdos toman",
"Si esta tu pelado comparte 2 tragos con el",
"Trabalenguas",
"Cachetada al más votado",
"Todos toman menos tu",
"Toman los que tengan más de la mitad del vaso",
"Teléfono",
"Toman los que llevan A en su nombre",
"Palabras encadenadas (casa-saco)",
"Barman (todos te piden piscola ati)",
"Tocar narices mientras el de al frente la mata",
"Toma x garabato 1 ronda",
"Mejor twerk de hombres reparte tragos, mujeres votan",
"Todos toman",
"Toma el concho familiar",
"Tapita",
"Los que no han estado de cumpleaños toman",
"Shot a ciegas",
"Sorbo sorbo shot",
"Toma el con la anaconda más grande",
"Cheers for the friendship",
"Toma el número del mes en que nacieron",
"Nunca nunca 1 ronda",
"Cambio de nombres",
"El de tu izquierda debe armar un trago en tu boca",
"Menor y mayor toman la diferencia entre ambos",
"Toman por cada mes de pololeo",
"Todos pegados con todos de los codos, toma por separada de codos",
"Medusa (1,2,3 mirar, contacto visual toma)",
"Fantasía sexual",
"Lugar más random q se hayan pelado , todos",
"Toma por todas las personas que te han gustado",
"Apunten todos al mejor vestido y vestida",
"Contar peor experiencia sexual",
"Toman l@s q siguen en el colegio",
"Toman l@s que hayan estado en un colegio Opus"
];

let historialkino = new Set();

function kino(num) {
  let frase;

  num = parseInt(num);

  if (isNaN(num) || num < 0 || num > retosKino.length) {
    document.getElementById("la-polla-resultado").innerText =
      "Número inválido. Ingresa entre 0 y " + retosKino.length + " (0 = aleatorio)";
    return;
  }

  if (num === 0) {
    const indice = Math.floor(Math.random() * retosKino.length);
    frase = retosKino[indice];
    num = indice + 1;
  } else {
    frase = retosKino[num - 1];
  }

  if (historialkino.has(num)) {
    frase = "[REPETIDA] " + frase;
  } else {
    historialkino.add(num);
  }

  document.getElementById("la-polla-resultado").innerText =
    frase + ` (n°${num})`;
}
