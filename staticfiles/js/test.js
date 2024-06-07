// const SURVEY_ID = 1;

const surveyJson = {
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "image",
     "name": "question1",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ed5f4bb0-49ad-4b9b-8fb4-bd4cb2b9dd16",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "checkbox",
     "name": "question2",
     "title": "Cuando aprendes algo nuevo, ¿encuentras que entender diagramas y gráficos te ayuda más que escuchar una explicación verbal?",
     "isRequired": true,
     "choices": [
      {
       "value": "Item 1",
       "text": "Sí, los diagramas y gráficos me ayudan mucho más a entender la información.",
       "puntos": {
        "visual": 50,
        "memoria_fotografica": 25,
        "creatividad": 10
       }

      },
      {
       "value": "Item 2",
       "text": "Prefiero escuchar la explicación verbal, aunque los gráficos también ayudan.",
       "puntos": {
        "visual": 10,
        "lectura_escritura": 25,
        "memoria_fotografica": 10
       }
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "image",
     "name": "question4",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cdbc7551-9dc1-45dc-987e-2ccfb4e2d7f8",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "checkbox",
     "name": "question3",
     "title": "¿Te resulta más fácil recordar información si está representada en un mapa mental o un esquema?",
     "isRequired": true,
     "choices": [
      {
       "value": "Item 1",
       "text": "Sí, los mapas mentales y esquemas me ayudan a recordar mejor.",
       "puntos": {
        "visual": 50,
        "memoria_fotografica": 25,
        "concentracion": 10
       }
      },
      {
       "value": "Item 2",
       "text": "A veces, pero también puedo recordar la información leyendo un texto.",
       "puntos": {
        "visual": 10,
        "lectura_escritura": 25,
        "memoria_fotografica": 10
       }
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "title": "Visual",
   "description": "Tomate todo tu tiempo :3"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "html",
     "name": "question5",
     "html": "                <div class=\"card-body\">\n\n                    <iframe width=\"540\" height=\"315\" src=\"https://www.youtube.com/embed/GLis0VZ9coE?si=r1nfTWUhC4ku5Y4u\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n                </div>"
    },
    {
     "type": "checkbox",
     "name": "question6",
     "title": "Que sientes al escuchar el video anterior?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Paz y Relajacion",
       "puntos": {
        "auditivo": 50,
        "emociones": 25,
        "concentracion": 10
      }

      },
      {
       "value": "Item 2",
       "text": "Nostalgia",
       "puntos": {
        "auditivo": 50,
        "emociones": 25,
        "memoria_fotografica": 10
      }
      },
      {
       "value": "Item 3",
       "text": "Dolor",
       "puntos": {
        "auditivo": 50,
        "emociones": 25,
        "adaptabilidad": 10
      }
      }
     ],
     "showOtherItem": true,
     "otherText": "Otro",
     "maxSelectedChoices": 1
    },
    {
     "type": "checkbox",
     "name": "question7",
     "title": "Encuentras que las canciones o rimas te ayudan a memorizar información más fácilmente",
     "choices": [
      {
       "value": "Item 1",
       "text": "No, prefiero escribir notas para recordar la información.",
       "puntos": {
        "lectura_escritura": 50,
        "aprendizaje_logico": 25,
        "concentracion": 10
      }
      },
      {
       "value": "Item 2",
       "text": "Sí, generalmente puedo recordar lo que escucho sin escribir.",
       "puntos": {
        "auditivo": 50,
        "memoria_fotografica": 25,
        "creatividad": 10
      }
      }
     ],
     "otherText": "Otro",
     "maxSelectedChoices": 1
    }
   ],
   "title": "Auditivo"
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "image",
     "name": "question9",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=deaa1a9f-2d5c-4bf8-85ea-df4c9de656f7",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    }
   ],
   "title": "Memoria Fotográfica",
   "description": "Analiza la imagen, No te preocupes, Tómate todo el tiempo que necesites :3"
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "checkbox",
     "name": "question8",
     "title": "Cuantas bolitas rojas habian?",
     "choices": [
      {
       "value": "Item 1",
       "text": "6",
       "puntos": {
        "memoria_fotografica": 40,
        "visual": 30,
        "concentracion": 20
      }
      },
      {
       "value": "Item 2",
       "text": "10",
       "puntos": {
        "memoria_fotografica": 40,
        "visual": 30,
        "concentracion": 20
      }
      },
      {
       "value": "Item 3",
       "text": "8",
         "puntos": {
          "memoria_fotografica": 50,
          "visual": 40,
          "concentracion": 30
      },
      }
     ],
     "showNoneItem": true
    },
    {
     "type": "checkbox",
     "name": "question10",
     "title": "Cuantas bolitas verdes habían?",
     "choices": [
      {
       "value": "Item 1",
       "text": "3",
       "puntos": {
        "memoria_fotografica": 20,
        "visual": 10
      }
      },
      {
       "value": "Item 2",
       "text": "4",
       "puntos": {
        "memoria_fotografica": 10
       }
      },
      {
       "value": "Item 3",
       "text": "1",
         "puntos": {
          "memoria_fotografica": 30,
          "visual": 20
      },
        }
     ],
     "showNoneItem": true
    }
   ],
   "title": "Memoría Fotografica"
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "image",
     "name": "question12",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=22444403-678d-4420-a546-fc3cbf103c7f",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    }
   ],
   "title": "Analiza esta otra imagen",
   "description": "Tómate tu tiempo"
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "matrixdynamic",
     "name": "question11",
     "title": "Que recuerdas que hay en la habitacion",
     "columns": [
      {
       "name": "Column 1",
       "title": "izquierda",
       "cellType": "dropdown",
       "choices": [
        {
         "value": 1,
         "text": "Telefono"
        },
        {
         "value": 2,
         "text": "Puerta"
        },
        {
         "value": 3,
         "text": "Ventana"
        },
        {
         "value": 4,
         "text": "Lampara"
        },
        {
         "value": 5,
         "text": "Cuadros"
        }
       ],
       "storeOthersAsComment": true
      },
      {
       "name": "Column 2",
       "title": "medio",
       "cellType": "dropdown",
       "choices": [
        {
         "value": 1,
         "text": "Telefono"
        },
        {
         "value": 2,
         "text": "Ventana"
        },
        {
         "value": 3,
         "text": "Lampara"
        },
        {
         "value": 4,
         "text": "Cuadros"
        },
        {
         "value": 5,
         "text": "Puerta"
        }
       ],
       "storeOthersAsComment": true
      },
      {
       "name": "Column 3",
       "title": "derecha"
      }
     ],
     "choices": [
      {
       "value": 1,
       "text": "Telefono"
      },
      {
       "value": 2,
       "text": "Ventana"
      },
      {
       "value": 3,
       "text": "Lampara"
      },
      {
       "value": 4,
       "text": "Cuadros"
      },
      {
       "value": 5,
       "text": "Puerta"
      }
     ]
    }
   ]
  },
  {
   "name": "page7",
   "elements": [
    {
     "type": "image",
     "name": "question25",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e012a94b-3112-4275-b947-c209e2c5f6c5",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question13",
     "title": "Imagina que tienes que ensamblar una estantería siguiendo un conjunto de instrucciones. ¿Cuál de las siguientes opciones describe mejor cómo prefieres aprender a hacerlo?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Prefiero que alguien me explique los pasos y luego intento ensamblarla yo mismo.",
       "puntos": {
        "practico": 50,
        "auditivo": 25,
        "concentracion": 10,
        "gestion": 10,
      }
      },
      {
       "value": "Item 4",
       "text": "Prefiero experimentar y ensamblarla sin seguir instrucciones específicas.",
       "puntos": {
        "practico": 50,
        "creatividad": 25,
        "adaptabilidad": 10,
        "gestion": 30,
      }
      },
      {
       "value": "Item 5",
       "text": "Prefiero leer un manual de instrucciones detallado y ensamblarla siguiendo cada paso.",
       "puntos": {
        "lectura_escritura": 50,
        "aprendizaje_logico": 25,
        "concentracion": 10,
        "gestion": 20,
      }
      },
      {
       "value": "Item 3",
       "text": "Prefiero ver un video tutorial una vez y luego ensamblarla siguiendo lo que recuerdo.",
       "puntos": {
        "visual": 50,
        "memoria_fotografica": 25,
        "practico": 10,
        "gestion": 10,
      }
      }
     ]
    },
    {
     "type": "image",
     "name": "question26",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=21734892-6ece-4cc0-ae03-35492a65465f",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question24",
     "title": "Estás aprendiendo a cocinar una receta nueva y te das cuenta de que te falta un ingrediente importante. ¿Qué harías?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Improviso con lo que tengo disponible en la cocina y continúo con la receta.",
       "puntos": {
        "practico": 50,
        "creatividad": 25,
        "adaptabilidad": 10,
        "gestion": 30,
        }
      },
      {
       "value": "Item 3",
       "text": "Consulto un libro de cocina o una página web para encontrar un sustituto adecuado y luego lo uso.",
       "puntos": {
        "lectura_escritura": 50,
        "aprendizaje_logico": 25,
        "practico": 10,
        "gestion": 20,
        }
      },
      {
       "value": "Item 4",
       "text": "Llamo o pregunto a alguien con experiencia en cocina para que me aconseje y luego aplico su consejo.",
       "puntos": {
        "auditivo": 50,
        "empatia": 25,
        "practico": 10,
        "gestion": 10,
        }
      },
     ]
    }
   ],
   "title": "Practico"
  },
  {
   "name": "page8",
   "elements": [
    {
     "type": "image",
     "name": "question15",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=91c9bc7f-d2f6-470b-a102-a3014cb2325c",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question14",
     "title": "Imagina que estás en una fiesta y ves a un amigo que parece triste y solo en una esquina. ¿Qué harías en esta situación?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Me acerco a él y le pregunto cómo se siente.",
       "puntos": {
        "empatia": 50,
        "adaptabilidad": 25,
        }
      },
      {
       "value": "Item 2",
       "text": "Le dejo tranquilo porque quizás quiere estar solo.",
       "puntos": {
        "empatia": 50,
        }
      },
      {
       "value": "Item 3",
       "text": "Le miro de lejos para ver si alguien más se acerca a hablar con él.",
       "puntos": {
        "empatia": 25,
        }
      },
      {
       "value": "Item 4",
       "text": "No sé qué hacer en esa situación.",
       "puntos": {
        "empatia": 10,
        }
      }
     ]
    },
    {
     "type": "html",
     "name": "question16",
     "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0hToYbDTthU?si=wFzTtw-2-bJa-LeM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
     "type": "radiogroup",
     "name": "question17",
     "title": "¿Como se sintió la chica en la discusión?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Molesta",
       "puntos": {
        "empatia": 30,
       }
      },
      {
       "value": "Item 2",
       "text": "Decaída",
         "puntos": {
          "empatia": 20,
         }
      },
      {
       "value": "Item 3",
       "text": "Enojada",
            "puntos": {
            "empatia": 40,
            }
      },
      {
       "value": "Item 4",
       "text": "Contenta",
       "puntos": {
        "empatia": 10,
       }
      }
     ]
    }
   ],
   "title": "Empatía"
  },
  {
   "name": "page9",
   "elements": [
    {
     "type": "image",
     "name": "question18",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=fb5a4a1d-be8f-4403-bead-51014b840dbe",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question19",
     "title": "Imagina que estás trabajando en una tarea importante para la escuela o el trabajo. De repente, suena el timbre de la puerta y hay ruido afuera. ¿Cómo reaccionas?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Sigo trabajando pero me cuesta mucho concentrarme por el ruido.",
       "puntos": {
        "concentracion": 50,
        "adaptabilidad": 25,
        "gestion": 10,
        }
      },
      {
       "value": "Item 2",
       "text": "Ignoro el ruido y sigo trabajando sin problema.",
       "puntos": {
        "concentracion": 50,
        "gestion": 30,
        }
      },
      {
       "value": "Item 3",
       "text": "Me pongo nervioso y no puedo continuar con la tarea.",
       "puntos": {
        "concentracion": 25,
        }
      },
      {
       "value": "Item 4",
       "text": "Me levanto inmediatamente para ver quién está en la puerta.",
       "puntos": {
        "adaptabilidad": 30,
        "adaptabilidad": 30,
        "concentracion": 40,
        "gestion": 20,
        }
      }
     ]
    }
   ],
   "title": "Concentracíon"
  },
  {
   "name": "page10",
   "elements": [
    {
     "type": "image",
     "name": "question20",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b8ed1a3d-6233-473d-b383-4b0989a3f339",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    }
   ],
   "title": "Memoriza la siguiente imagen"
  },
  {
   "name": "page11",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question21",
     "title": "¿Cuántos objetos rojos puedes recordar haber visto en la imagen?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Tres o cuatro",
       "puntos": {
        "memoria_fotografica": 10,
        "visual": 10,
        "concentracion": 20
      },
        },
      {
       "value": "Item 2",
       "text": "Uno o dos",
         "puntos": {
          "concentracion": 10
      },
        },
      {
       "value": "Item 3",
       "text": "Cinco o seis",
       "puntos": {
            "memoria_fotografica": 20,
            "visual": 20,
            "concentracion": 30
      },
        },
      {
       "value": "Item 4",
       "text": "Más de seis",
       "puntos": {
        "memoria_fotografica": 30,
        "visual": 30,
        "concentracion": 40
       }
      }
     ]
    }
   ],
   "title": "Concentración"
  },
  {
   "name": "page12",
   "elements": [
    {
     "type": "image",
     "name": "question23",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=24c2c57d-ea85-4335-b208-cfcb38d83896",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "comment",
     "name": "question22",
     "title": "Imagina que encuentras una puerta mágica en tu jardín que te lleva a un lugar desconocido. Describe el lugar al que llegas. ¿Qué ves, qué haces allí?"
    }
   ],
   "title": "Creatividad",
   "description": "Tomtate tu tiempo, extiendete todo lo que necesites para tu respuesta."
  },
  {
   "name": "page13",
   "elements": [
    {
     "type": "image",
     "name": "question28",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2b6473ce-c257-46ac-95ed-8e3cccab269e",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question27",
     "title": "Lee el siguiente texto:\n\"El sol, una estrella de tipo espectral G2V, se encuentra en el centro del sistema solar. Esta estrella proporciona la luz y el calor necesarios para sustentar la vida en nuestro planeta. Sin el sol, la fotosíntesis no podría ocurrir, lo que afectaría directamente a las plantas y, por ende, a la cadena alimenticia. Además, la energía solar se aprovecha mediante paneles solares para generar electricidad de manera sostenible. La luz del sol también tiene efectos positivos sobre la salud humana, ya que ayuda a la producción de vitamina D en la piel.\"\n\n¿Por qué es importante el sol para la vida en la Tierra y cómo se aprovecha su energía?\n",
     "choices": [
      {
       "value": "Item 1",
       "text": "Porque proporciona luz y calor, permite la fotosíntesis, y su energía se aprovecha mediante paneles solares para generar electricidad.",
         "puntos": {
          "lectura_escritura": 40,
          "aprendizaje_logico": 30,
          "gestion": 30,
      },
        },
      {
       "value": "Item 2",
       "text": "Porque es una estrella que gira alrededor de la Tierra y proporciona luz para la fotosíntesis.",
            "puntos": {
            "lectura_escritura": 20,
             "gestion": 10,
      },
        },
      {
       "value": "Item 3",
       "text": "Porque ayuda a la producción de vitamina C en la piel y se utiliza para calentar el agua en las casas.",
            "puntos": {
            "lectura_escritura": 30,
            "aprendizaje_logico": 20,
             "gestion": 20,
      },
        },
      {
       "value": "Item 4",
       "text": "Porque es el planeta más cercano a la Tierra y su energía se utiliza para el transporte.",
            "puntos": {
            "lectura_escritura": 10,
      },
        }
     ]
    },
    {
     "type": "image",
     "name": "question30",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=de0da030-2381-4ff3-b79c-9caba6969d09",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "ranking",
     "name": "question29",
     "title": "Ordena la siguiente secuencia:",
     "choices": [
      {
       "value": "Item 1",
       "text": "El niño abrió el libro."
      },
      {
       "value": "Item 2",
       "text": "El niño se sentó en la silla."
      },
      {
       "value": "Item 3",
       "text": "El niño encendió la lámpara."
      },
      {
       "value": "Item 4",
       "text": "El niño entró a su habitación."
      }
     ]
    }
   ],
   "title": "Lectura"
  },
  {
   "name": "page14",
   "elements": [
    {
     "type": "image",
     "name": "question32",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5117a9ac-6b12-425d-89ef-5d038c94606e",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question31",
     "title": "Un tren sigue una ruta fija a lo largo de varias estaciones. Observa el patrón de paradas:\nPrimera parada: Estación A\nSegunda parada: Estación B\nTercera parada: Estación C\nCuarta parada: Estación A\nQuinta parada: Estación B\n\n¿Cuál será la séptima parada del tren?\n",
     "choices": [
      {
       "value": "Item 1",
       "text": "Estación B",
         "puntos": {
          "aprendizaje_logico": 10,
      },
        },
      {
       "value": "Item 2",
       "text": "Estación A",
            "puntos": {
            "aprendizaje_logico": 40,
             "gestion": 20,

      },
        },
      {
       "value": "Item 3",
       "text": "Estación D",
            "puntos": {
            "aprendizaje_logico": 10,
      },
        },
      {
       "value": "Item 4",
       "text": "Estación C",
            "puntos": {
            "aprendizaje_logico": 30,
                "gestion": 10,
      },
        }
     ]
    },
    {
     "type": "image",
     "name": "question34",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2b607ee8-6893-4c93-9b82-91ff3a02b74d",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question33",
     "title": "En una mesa hay cinco objetos: un libro, una pluma, una taza, un cuaderno y una lámpara. Sabemos lo siguiente:\nEl libro está a la izquierda de la pluma.\nLa taza está a la derecha del cuaderno.\nLa lámpara está entre el libro y el cuaderno.\nLa pluma no está al extremo derecho.\n\n¿Cuál es el orden correcto de los objetos de izquierda a derecha?\n",
     "choices": [
      {
       "value": "Item 1",
       "text": "Libro, Lámpara, Cuaderno, Pluma, Taza",
         "puntos": {
          "aprendizaje_logico": 50,
          "concentracion": 30,
          "creatividad": 20,
          "gestion": 20,
         }
      },
      {
       "value": "Item 2",
       "text": "Pluma, Libro, Lámpara, Taza, Cuaderno",
            "puntos": {
            "aprendizaje_logico": 30,
            "concentracion": 20,
            "creatividad": 10,
            "gestion": 10,
            }
      },
      {
       "value": "Item 3",
       "text": "Libro, Pluma, Lámpara, Cuaderno, Taza",
            "puntos": {
            "aprendizaje_logico": 40,
            "concentracion": 20,
            "creatividad": 10,
            "gestion": 10,
            }
      },
      {
       "value": "Item 4",
       "text": "Cuaderno, Lámpara, Libro, Taza, Pluma",
            "puntos": {
            "aprendizaje_logico": 20,
            "concentracion": 10,
            "creatividad": 10
            }
      }
     ]
    }
   ],
   "title": "Logica"
  },
  {
   "name": "page15",
   "elements": [
    {
     "type": "image",
     "name": "question36",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0cd77fc3-242e-40fc-b81d-c4941109a4bf",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question35",
     "title": "¿Cómo crees que se siente la persona?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Molesta",
       "puntos": {
        "emociones": 40,
        "creatividad": 30,
        "adaptabilidad": 20
       }
      },
      {
       "value": "Item 2",
       "text": "Alegre",
       "puntos": {
        "emociones": 10,
       }
      },
      {
       "value": "Item 3",
       "text": "Indiferente",
       "puntos": {
        "emociones": 30,
        "creatividad": 20,
        "adaptabilidad": 10
      },
        },
      {
       "value": "Item 4",
       "text": "Aburrida",
         "puntos": {
          "emociones": 20,
          "creatividad": 10,
      },
        },
      {
       "value": "Item 5",
       "text": "No estoy seguro/a"
      }
     ]
    },
    {
     "type": "image",
     "name": "question37",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=728652c2-ceaf-438c-b7c5-a4e4a2e9ee2e",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question38",
     "title": "¿Porqué crees que el fantasma está contento?",
     "choices": [
      {
       "value": "Item 1",
       "text": "Es su cumpleaño",
       "puntos": {
        "emociones": 30,
        "creatividad": 10,
       }
      },
      {
       "value": "Item 2",
       "text": "Tiene pastel",
         "puntos": {
          "emociones": 20,
          "creatividad":30,
         }
      },
      {
       "value": "Item 3",
       "text": "Es un fantasma",
            "puntos": {
            "emociones": 10,
            }
      },
      {
       "value": "Item 4",
       "text": "Tiene un gorrito",
            "puntos": {
            "emociones": 10,
            }
      }
     ]
    }
   ],
   "title": "Emociones"
  },
  {
   "name": "page16",
   "elements": [
    {
     "type": "image",
     "name": "question40",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=eccfc730-dad6-45ca-90c2-764988aa05bb",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question39",
     "title": "Todos los días tomas el autobús a las 8:00 am para ir al trabajo, pero hoy el autobús está retrasado y no llegará hasta las 8:30 am.\n\n¿Qué harías en esta situación?\n",
     "choices": [
      {
       "value": "Item 1",
       "text": "Esperaría pacientemente hasta que llegue el autobús.",
         "puntos": {
          "adaptabilidad": 20,
      },
        },
      {
       "value": "Item 2",
       "text": "Me pondría muy ansioso y no sabría qué hacer.",
            "puntos": {
            "adaptabilidad": 10,
      },
        },
      {
       "value": "Item 3",
       "text": "Buscaría una alternativa, como tomar un taxi o caminar si está cerca.",
            "puntos": {
            "adaptabilidad": 30,
             "gestion": 10,
      },
        },
      {
       "value": "Item 4",
       "text": "Decidiría volver a casa y no ir al trabajo.",
            "puntos": {
            "adaptabilidad": 10,
      },
        }
     ]
    },
    {
     "type": "image",
     "name": "question42",
     "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=6c91e2e4-63de-4060-8aac-281c1f6223e0",
     "imageFit": "cover",
     "imageHeight": "auto",
     "imageWidth": "100%"
    },
    {
     "type": "radiogroup",
     "name": "question41",
     "title": "Estás en una ciudad que no conoces y necesitas llegar a una reunión importante. De repente, tu teléfono se queda sin batería y no tienes un mapa.\n\n¿Qué harías en esta situación?\n",
     "choices": [
      {
       "value": "Item 1",
       "text": "Pediría direcciones a una persona cercana.",
         "puntos": {
          "adaptabilidad": 40,
          "gestion": 20,
      },
        },
      {
       "value": "Item 2",
       "text": "Intentaría recordar el camino basado en lo que vi antes de que el teléfono se quedara sin batería.",
            "puntos": {
            "adaptabilidad": 20,
            }
      },
      {
       "value": "Item 3",
       "text": "Entraría en una tienda cercana para ver si tienen un mapa que pueda usar.",
            "puntos": {
            "adaptabilidad": 30,
                "gestion": 10,
      },
        },
      {
       "value": "Item 4",
       "text": "Me sentiría abrumado y no sabría qué hacer.",
            "puntos": {
            "adaptabilidad": 10,
      },
        }
     ]
    }
   ],
   "title": "Adaptabilidad"
  }
 ]

}


const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //     "https://your-web-service.com/" + SURVEY_ID,
    //     sender.data
    // )
}

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});

function calculatePoints(survey) {
    // Inicializar los puntos para cada categoría
    const points = {
        visual: 0,
        auditivo: 0,
        memoria_fotografica: 0,
        practico: 0,
        lectura_escritura: 0,
        aprendizaje_logico: 0,
        empatia: 0,
        concentracion: 0,
        creatividad: 0,
        emociones: 0,
        adaptabilidad: 0,
        gestion: 0
    };

    // Recorrer las respuestas del usuario
    for (let questionName in survey.data) {
        let userAnswers = survey.data[questionName];

        // Asegurarse de que userAnswers es un array
        if (!Array.isArray(userAnswers)) {
            userAnswers = [userAnswers];
        }

        // Buscar la pregunta en el JSON de la encuesta
        for (let page of surveyJson.pages) {
            for (let question of page.elements) {
                if (question.name === questionName) {
                    // Encontrar la opción que el usuario eligió
                    for (let choice of question.choices) {
                        if (userAnswers.includes(choice.value)) {
                            // Sumar los puntos a los totales
                            for (let category in choice.puntos) {
                                points[category] += choice.puntos[category];
                            }
                        }
                    }
                }
            }
        }
    }

    // Devolver los puntos totales
    return points;
}

function alertResults (sender) {
    const points = calculatePoints(sender);
    // alert(JSON.stringify(points));
}

survey.onComplete.add(function(sender, options) {
    // Esconder el div del survey
    document.getElementById('surveyContainer').style.display = 'none';

    // Redirigir al usuario a la página de inicio
    window.location.href = '/inicio/';
});