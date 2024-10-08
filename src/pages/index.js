// src/pages/index.js
import React from 'react';
import MyNavbar from '../components/navbar';
import Section from '../components/section';
import Footer from '../components/footer';
import { motion } from 'framer-motion'; 
import '../styles/custom.css';
//import missingValues1 from '/images/missing_values_1.png';
/*import missingValues1 from '../../public/images/missing_values_1.png';
import missingValues2 from '../../public/images/missing_values_2.png';
import missingValues3 from '../../public/images/missing_values_3.png';
import missingValues4 from '../../public/images/missing_values_4.png';
import missingValues5 from '../../public/images/missing_values_5.png';
import missingValues6 from '../../public/images/missing_values_6.png';
import missingValues7 from '../../public/images/missing_values_7.png';
import n_o_1 from '../../public/images/n_o_1.png';
import n_o_2 from '../../public/images/n_o_2.png';
import n_o_3 from '../../public/images/n_o_3.png';
import n_o_4 from '../../public/images/n_o_4.png';
import n_o_5 from '../../public/images/n_o_5.png';
import n_o_6 from '../../public/images/n_o_6.png';
import n_o_7 from '../../public/images/n_o_7.png';
import n_o_8 from '../../../public/images/n_o_8.png';
import n_o_9 from '/images/n_o_9.png';*/




const IndexPage = () => (
  <div>
    {/* Navbar */}
    <MyNavbar />

    {/* Sección animada de Introducción */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Animación de inicio (entra desde abajo y opaco)
      animate={{ opacity: 1, y: 0 }}   // Estado final (visibilidad completa)
      transition={{ duration: 0.5 }}   // Duración de la animación
    >
      <Section id="intro" title="Introducción a Machine Learning" >
        <h2 className="section-title">¿Qué es el Machine Learning?</h2>
        <br />
        <div className="section-text" >
          El machine learning es la ciencia de desarrollo de algoritmos y modelos estadísticos que utilizan los sistemas de computación con el fin de llevar a cabo tareas sin instrucciones explícitas, en vez de basarse en patrones e inferencias.
       
          <br />
          <a className="section-link" href="https://aws.amazon.com/es/what-is/machine-learning/#:~:text=El%20machine%20learning%20es%20la,basarse%20en%20patrones%20e%20inferencias" target="_blank" rel="noopener noreferrer">
            Leer más en AWS.
          </a>
        </div>
        <br />
        <div className="section-text">
          El machine learning es una rama de la inteligencia artificial que permite a las máquinas aprender y tomar decisiones por sí mismas a partir de la observación de datos. Este proceso de aprendizaje se basa en identificar patrones en los datos para mejorar el rendimiento de los sistemas sin intervención humana.
          <br />
          <a className="section-link" href="https://www.inesdi.com/blog/machine-learning-que-es-para-que-sirve/"target="_blank" rel="noopener noreferrer">
            Leer más en INESDI
          </a>
        </div>
        <br />
        <div className="section-text">
          El Machine Learning o aprendizaje automático es un campo científico y, más particularmente, una subcategoría de inteligencia artificial. Consiste en dejar que los algoritmos descubran «patterns», es decir, patrones recurrentes, en conjuntos de datos. Esos datos pueden ser números, palabras, imágenes, estadísticas, etc.
          <br />
          <a className="section-link" href="https://datascientest.com/es/machine-learning-definicion-funcionamiento-usos" target="_blank" rel="noopener noreferrer">
          Leer más en DataScientest 
          </a>
        </div>
       
        <h3 className="list-title"><br />Diferencias entre Machine Learning y la Inteligencia Artificial</h3>
        <ul>
          <li>
            <strong className="list-title">Alcance:</strong><br />
            <div className="list-text">
              IA: Es un campo amplio que abarca muchas áreas como el procesamiento de lenguaje natural, la robótica, la visión por computadora y el razonamiento lógico. La IA busca emular la inteligencia humana de diversas formas.<br />
              ML: Es una rama más específica dentro de la IA. Su enfoque está limitado al uso de algoritmos que permiten a las máquinas aprender a partir de datos, ajustando sus decisiones o predicciones con el tiempo.
            </div>
          </li>  
          <li>
            <strong className="list-title">Métodos:</strong><br />
            <div className="list-text">
              IA: No todos los sistemas de IA utilizan aprendizaje automático. Algunas aplicaciones de IA pueden estar basadas en reglas predefinidas o lógicas programadas, sin necesidad de que el sistema "aprenda" de los datos.<br />
              ML: Siempre requiere grandes cantidades de datos históricos y algoritmos para entrenar modelos. El sistema mejora su rendimiento basándose en los patrones que identifica dentro de los datos.
            </div>
          </li>
          <li>
            <strong className="list-title">Aplicaciones:</strong><br />
            <div className="list-text">
              IA: Puede incluir una variedad más amplia de aplicaciones, como asistentes inteligentes (Alexa, Siri), vehículos autónomos, y sistemas que toman decisiones complejas sin necesariamente utilizar datos para aprender.<br />
              ML: Es ideal para aplicaciones donde el análisis de datos es clave, como en el análisis predictivo, reconocimiento de imágenes, sistemas de recomendación, y detección de fraudes.
            </div>
          </li>
          <li>
            <strong className="list-title">Evolución:</strong><br />
            <div style={{ marginLeft: '20px' }}>
              IA: Puede incluir sistemas que no cambian ni se adaptan con el tiempo, ya que algunas soluciones están predeterminadas y no aprenden de los datos.<br />
              ML: Los sistemas basados en ML están diseñados para mejorar con el tiempo, ya que "aprenden" a partir de los resultados y retroalimentación, optimizando continuamente su precisión.
            </div>
          </li>
        </ul>
    
        <h3 className="list-title"><br />Similitudes entre Machine Learning y la Inteligencia Artificial</h3>
        <ul>
          <li>
            <strong className="list-title">Resolución de problemas complejos:</strong><br />
            <div className="list-text">
              Tanto ML como IA buscan resolver problemas de forma similar a los humanos, como la toma de decisiones, el reconocimiento de patrones, y la automatización de tareas complejas.
            </div>
          </li>
          <li>
            <strong className="list-title">Uso de algoritmos avanzados:</strong><br /> 
              <div className="list-text">
                Ambos campos utilizan algoritmos avanzados. La IA en general puede usar algoritmos basados en lógica, reglas o redes neuronales, mientras que el ML se centra más en algoritmos que aprenden de datos.
              </div>
          </li>
          <li>
            <strong className="list-title">Aplicaciones intersectoriales: </strong><br /> 
              <div className="list-text">
                IA y ML tienen aplicaciones en múltiples sectores como la salud, finanzas, marketing, tecnología, y manufactura, aunque el ML suele ser preferido cuando se dispone de grandes volúmenes de datos para análisis.
              </div>
          </li>
          <li>
            <strong className="list-title">Generación de resultados basados en datos complejos:</strong><br /> 
              <div className="list-text">
                Aunque el enfoque del ML es más específico, ambos campos van más allá de la automatización básica, ya que generan resultados sofisticados y "parecidos a los humanos" a partir del análisis de datos.
              </div>
          </li>
      </ul>



      <h3 className="list-title"><br />Diferencias entre Machine Learning y el análisis estadístico</h3>
      <ul>
          <li>
            <strong className="list-title">Propósito principal:</strong><br />
            <div className="list-text">
              ML: Está orientado hacia la predicción. Los modelos de ML están diseñados para aprender patrones a partir de datos y hacer predicciones precisas basadas en esos patrones. El objetivo es que el sistema mejore su rendimiento con el tiempo, utilizando datos de entrenamiento para generalizar a nuevos casos.<br />
              Análisis estadístico: Está enfocado principalmente en la descripción y comprensión de los datos. Busca identificar relaciones significativas y hacer inferencias basadas en teorías o modelos preexistentes. Se centra en describir cómo los datos se comportan y cuáles son sus características, más que en predecir con precisión futuros resultados.
            </div>
          </li>
          <li>
            <strong className="list-title">Enfoque:</strong><br />
            <div className="list-text">

              ML: Es un enfoque orientado a datos, que busca construir modelos a partir de ejemplos sin necesidad de hacer suposiciones explícitas sobre la naturaleza subyacente de los datos. Los algoritmos de ML pueden ser muy complejos y no necesariamente explican cómo se toman las decisiones.<br />
              Análisis estadístico: Se basa en suposiciones matemáticas explícitas sobre la distribución de los datos (como la normalidad o la homocedasticidad). Los modelos estadísticos buscan entender las relaciones causales dentro de los datos y, a menudo, deben ser interpretables.
            </div>
          </li>
          <li>
            <strong className="list-title">Naturaleza de los modelos:</strong><br />
            <div className="list-text">
              ML: Los modelos de ML pueden ser no paramétricos y no requieren tantas suposiciones sobre la forma de los datos. Además, los algoritmos como las redes neuronales o los árboles de decisión no se preocupan tanto por la estructura formal del problema, sino más por su capacidad para predecir.<br />
              Análisis estadístico: Los modelos estadísticos suelen ser paramétricos, lo que significa que tienen un número fijo de parámetros. La interpretación y las pruebas de hipótesis son fundamentales para validar las relaciones dentro de los datos.
            </div>
          </li>
          <li>
            <strong className="list-title">Dependencia de grandes cantidades de datos:</strong><br />
            <div className="list-text">
              ML: Los algoritmos de ML suelen requerir grandes cantidades de datos para entrenarse adecuadamente y producir modelos precisos, ya que se basan en la identificación de patrones complejos.<br />
              Análisis estadístico: Si bien el análisis estadístico también requiere datos, puede funcionar con conjuntos de datos más pequeños siempre y cuando se cumplan las suposiciones del modelo.
            </div>
          </li>
      </ul>
    <h3 className="list-title"><br />Similitudes entre Machine Learning y el análisis estadístico</h3>
      <ul>
          <li>
            <strong className="list-title">Basados en datos:</strong><br />
            <div className="list-text">
              Ambos campos dependen de los datos para funcionar. Tanto el análisis estadístico como el ML requieren conjuntos de datos sobre los cuales operar y son inútiles sin estos. Los datos son la base para extraer información, hacer predicciones o describir fenómenos.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Modelos predictivos: </strong><br />
            <div className="list-text">
              Tanto el análisis estadístico como el ML pueden utilizarse para construir modelos predictivos. Por ejemplo, en regresión estadística, el objetivo puede ser predecir un valor futuro basándose en relaciones inferidas. De manera similar, los algoritmos de ML también predicen valores futuros a partir de patrones aprendidos.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Inferencia y descubrimiento de relaciones: </strong><br />
            <div className="list-text">
              Ambos enfoques tratan de descubrir relaciones entre variables. En el análisis estadístico, se suele hacer de manera explícita (por ejemplo, a través de correlaciones y regresiones). En ML, aunque la inferencia es menos directa, los modelos buscan automáticamente descubrir relaciones ocultas entre las variables.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Uso de modelos estadísticos: </strong><br />
            <div className="list-text">
              El ML está intrínsecamente relacionado con la estadística, ya que muchos algoritmos de ML (como la regresión lineal, regresión logística, y Naive Bayes) se basan en principios estadísticos. Estos métodos combinan técnicas estadísticas con el objetivo de aprender patrones complejos.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Evaluación de modelos: </strong><br />
            <div className="list-text">
              En ambos campos, se utilizan métricas para evaluar la calidad y precisión de los modelos. Por ejemplo, la exactitud, precisión, recall o el error cuadrático medio (MSE) son métricas comunes tanto en ML como en el análisis estadístico para medir el rendimiento.
            </div>
          </li>
      </ul>
    <h3 className="list-title"><br />Diferencias entre Data Mining y Machine Learning</h3>
      <ul>
          <li>
            <strong className="list-title">Propósito:</strong><br />
            <div className="list-text">
              DM: Su objetivo principal es descubrir patrones ocultos y relaciones en grandes volúmenes de datos. Se utiliza para explorar los datos y encontrar información útil que pueda ser utilizada para la toma de decisiones empresariales o investigación.<br />
              ML: Su propósito es aprender de los datos y hacer predicciones basadas en esos patrones. Se enfoca en mejorar el rendimiento de los modelos a medida que se exponen a más datos, aprendiendo de forma automática sin intervención humana constante.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Interacción humana:</strong><br />
            <div className="list-text">
              DM: Requiere intervención humana significativa para seleccionar qué patrones son relevantes, interpretar los resultados y tomar decisiones basadas en esos hallazgos.<br />
              ML: Una vez entrenado un modelo, puede aprender de manera autónoma a partir de los datos, mejorando su precisión y predicción con el tiempo sin intervención constante.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Método de procesamiento:</strong><br />
            <div className="list-text">
              DM: Se basa en técnicas de análisis descriptivo para explorar los datos y encontrar patrones o relaciones entre ellos. El enfoque es más exploratorio y estático.<br />
              ML: Utiliza algoritmos predictivos para crear modelos que aprenden de los datos y pueden adaptarse a nuevas situaciones. El enfoque es dinámico y se centra en la mejora continua de las predicciones a medida que se recopilan más datos.
            </div>
          </li>
      </ul>


    <h3 className="list-title"><br />Similitudes entre Data Mining y Machine Learning:</h3>
      <ul>
          <li>
            <strong className="list-title">Dependencia de los datos: </strong><br />
            <div className="list-text">
              Ambos enfoques dependen de grandes volúmenes de datos para generar conocimiento útil. Tanto la minería de datos como el aprendizaje automático requieren datos estructurados y no estructurados para funcionar de manera efectiva.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Uso de patrones: </strong>
            <div className="list-text">
              Ambos se utilizan para identificar patrones en los datos. Mientras que la minería de datos encuentra relaciones y tendencias ocultas, el machine learning puede utilizar esos mismos patrones para hacer predicciones y mejorar continuamente.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Técnicas compartidas: </strong>
            <div className="list-text">
              Algunas técnicas utilizadas en Data Mining, como la clasificación y el clustering, también son componentes fundamentales en muchos algoritmos de Machine Learning. Ambos campos comparten métodos como los árboles de decisión, redes bayesianas y regresión.
            </div>
          </li>
      </ul>
      <ul>
          <li>
            <strong className="list-title">Objetivo de toma de decisiones: </strong>
            <div className="list-text">
              Tanto en la minería de datos como en el aprendizaje automático, el objetivo final es tomar decisiones informadas basadas en la información extraída de los datos. Los hallazgos de la minería de datos pueden alimentar los modelos de aprendizaje automático para optimizar la toma de decisiones a largo plazo.
            </div>
          </li>
      </ul>
      </Section>
    </motion.div>

    {/* Otras secciones sin animación */}
    <Section id="data" title="Tratamiento de Datos">

      <div className="section-text">
        El tratamiento de los datos es un paso fundamental antes de aplicar cualquier modelo de machine learning. Los datos, provenientes de diversas fuentes, pueden contener problemas como ruido, valores faltantes, datos no normalizados, outliers o correlaciones fuertes entre variables. Estos problemas pueden afectar negativamente el rendimiento de los modelos de ML, por lo que es necesario realizar un preprocesamiento cuidadoso.
      </div>

      <h3 className="list-title"><br />Pasos principales en el tratamiento de los datos</h3>
      <ul>
        <li>
          <strong className="list-title">Recolección y exploración de datos:</strong><br />
          <div className="list-text">
            Antes de cualquier procesamiento, es crucial recolectar los datos y realizar una exploración inicial. Esto incluye obtener una comprensión básica de las características de los datos, su distribución y sus posibles problemas.
          </div>
        </li>
        <li>
          <strong className="list-title">Visualización:</strong><br />
          <div className="list-text">
            Gráficos como histogramas, box plots y gráficos de dispersión ayudan a identificar outliers, tendencias, o distribuciones no uniformes.
          </div>
        </li>
        <li>
          <strong className="list-title">Resumen estadístico:</strong><br />
          <div className="list-text">
            Estadísticas descriptivas como la media, mediana, desviación estándar y rango pueden proporcionar información útil sobre la estructura de los datos.
          </div>
        </li>
        <li>
          <strong className="list-title">Limpieza de datos:</strong><br />
          <div className="list-text">
            La limpieza de los datos busca corregir errores y preparar los datos para que sean aptos para los modelos de machine learning.
          </div>
        </li>
        <li>
          <strong className="list-title">Manejo de valores faltantes:</strong><br />
          <div className="list-text">
            Los datasets suelen contener valores perdidos o nulos que pueden afectar el rendimiento del modelo. Algunas formas de tratarlos son:
            <ul>
              <li><strong>Eliminación:</strong> Eliminar filas o columnas que contienen valores faltantes, si la cantidad de datos faltantes es pequeña y no afectará el análisis.</li>
              <li><strong>Imputación:</strong> Rellenar los valores faltantes con la media, mediana o moda, o usar técnicas más avanzadas como la imputación basada en modelos o imputación múltiple.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Corrección de errores tipográficos:</strong><br />
          <div className="list-text">
            Corregir inconsistencias en nombres o categorías, por ejemplo, “M” y “Masculino” deberían representarse de manera uniforme.
          </div>
        </li>
        <li>
          <strong className="list-title">Normalización y estandarización de datos:</strong><br />
          <div className="list-text">
            Muchos algoritmos de machine learning, como el K-Nearest Neighbors (KNN) o Redes Neuronales, son sensibles a la escala de los datos. Es fundamental asegurarse de que los datos estén en un rango similar mediante técnicas como:
            <ul>
              <li><strong>Normalización (min-max scaling):</strong> Se ajustan los valores para que queden dentro de un rango específico, generalmente entre 0 y 1.</li>
              <li><strong>Estandarización (Z-score scaling):</strong> Los datos se transforman para que tengan una media de 0 y una desviación estándar de 1.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Detección y manejo de outliers:</strong><br />
          <div className="list-text">
            Los outliers son valores que se alejan significativamente del resto de los datos y pueden distorsionar los resultados del modelo.
            <ul>
              <li><strong>Detección de outliers:</strong> Se pueden usar box plots, z-scores, o técnicas como Isolation Forest o DBSCAN para detectar valores atípicos.</li>
              <li><strong>Tratamiento:</strong> Dependiendo del caso, los outliers pueden ser eliminados o ajustados. Sin embargo, si se cree que son representativos de algún fenómeno importante, podrían conservarse.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Eliminación de la multicolinealidad:</strong><br />
          <div className="list-text">
            La multicolinealidad ocurre cuando dos o más variables independientes están altamente correlacionadas entre sí, lo que puede hacer que algunos modelos (como regresión lineal) tengan dificultades para interpretar sus efectos.
            <ul>
              <li><strong>Métodos para detectarla:</strong> El análisis de correlación (matriz de correlación) o el VIF (Variance Inflation Factor) pueden ayudar a identificar relaciones fuertes entre variables.</li>
              <li><strong>Reducción de la multicolinealidad:</strong> Se puede reducir eliminando una de las variables correlacionadas, o utilizando técnicas como el Análisis de Componentes Principales (PCA) o reducción de dimensionalidad.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Codificación de variables categóricas:</strong><br />
          <div className="list-text">
            Los modelos de machine learning solo entienden valores numéricos, por lo que las variables categóricas deben ser convertidas en números mediante técnicas de codificación, como:
            <ul>
              <li><strong>One-Hot Encoding:</strong> Crea nuevas columnas binarias (0 o 1) para cada categoría única.</li>
              <li><strong>Label Encoding:</strong> Asigna un número entero a cada categoría, útil cuando las categorías tienen un orden intrínseco.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Creación de nuevas características:</strong><br />
          <div className="list-text">
            A veces es necesario crear nuevas variables o modificar las existentes para mejorar la capacidad predictiva de un modelo.
            <ul>
              <li><strong>Transformaciones logarítmicas:</strong> Útil para reducir la influencia de grandes valores extremos.</li>
              <li><strong>Ingeniería de características:</strong> Consiste en combinar variables, crear ratios o polinomios, o realizar transformaciones que aumenten la capacidad predictiva.</li>
            </ul>
          </div>
        </li>
        <li>
          <strong className="list-title">Reducción de dimensionalidad:</strong><br />
          <div className="list-text">
            Con datasets que contienen muchas variables, es útil reducir el número de características para mejorar la eficiencia del modelo sin perder información importante.
            <ul>
              <li><strong>PCA (Análisis de Componentes Principales):</strong> Método estadístico que transforma las variables originales en un conjunto de variables no correlacionadas llamadas componentes principales.</li>
              <li><strong>Técnicas de selección de características:</strong> Seleccionar solo las características más relevantes a través de métodos como la selección forward, backward o de paso (stepwise).</li>
            </ul>
          </div>
        </li>
      </ul>
      <br />

      <h3 class="list-title" id="ejemplo-valores-faltantes">Ejemplo: Tratamiento de Valores Faltantes</h3>
      <br />

      <div class="list-text">
      
          A continuación, se presenta un ejemplo detallado de cómo manejar los valores faltantes utilizando el dataset del Titanic.
      </div>
      
      <div class="list-text">
          Tomando el dataset del Titanic y observando las estadísticas iniciales, se puede notar que hay varios atributos con valores faltantes. Los principales son los siguientes:
      </div>
      <br />
      <ul class="list-text">
          <li><span class="list-title"><strong>Cabin:</strong></span> 1014 de 1309 datos faltantes</li>
          <li><span class="list-title"><strong>Life boat:</strong></span> 823 de 1309 datos faltantes</li>
          <li><span class="list-title"><strong>Age:</strong></span> 263 de 1309 datos faltantes</li>
          <li><span class="list-title"><strong>Port of embarkation:</strong></span> 2 de 1309 datos faltantes</li>
          <li><span class="list-title"><strong>Passenger fare:</strong></span> 1 dato faltante</li>
      </ul>

      <div class="list-text">
          En total, hay 12 atributos en el dataset.
      </div>
      <br />
      <img src="/images/missing_values_1.png" alt="Dataset del Titanic con atributos faltantes" class="example-image" />
      <br />

      <div class="list-text">
          Al observar que "Cabin" y "Life boat" tienen demasiados valores faltantes como para ser útiles en nuestro modelo, decidimos eliminarlos. Utilizamos el operador <strong>Select Attributes</strong> para eliminar estos atributos, dejando 10 atributos restantes.
      </div>
      <br />
      <img src="/images/missing_values_2.png" alt="Selección de atributos eliminando 'Cabin' y 'Life boat'" class="example-image" />
      <br />

      <div class="list-text">
          El atributo <strong>Age</strong> es importante para nuestro análisis, ya que podría ser útil para predecir la variable objetivo. Sin embargo, también tiene muchos valores faltantes, por lo que eliminarlo no es una opción ideal.
      </div>
      <br />
      <img src="/images/missing_values_3.png" alt="Visualización del atributo 'Age' con valores faltantes" class="example-image" />
      <br />

      <div class="list-text">
          Para solucionar este problema, utilizamos el operador <strong>Replace Missing Values</strong> y reemplazamos los valores faltantes de "Age" con la media de este atributo. De esta forma, mantenemos los datos del atributo "Age" sin necesidad de eliminar registros completos.
      </div>
      <br />
      <img src="/images/missing_values_4.png" alt="Reemplazo de valores faltantes en 'Age' con la media" class="example-image" />
      <br />

      <div class="list-text">
          Ahora, solo quedan dos atributos con valores faltantes: uno con 2 valores faltantes y otro con solo 1. Dado que estos registros representan un número muy pequeño de datos, es prudente considerar eliminar estos 3 registros.
      </div>
      <br />
      <img src="/images/missing_values_5.png" alt="Identificación de registros con pocos valores faltantes" class="example-image" />
      <br />

      <div class="list-text">
          Para eliminar estos registros, utilizamos el operador <strong>Filter Examples</strong> con la condición de que no existan atributos faltantes. Esto nos permitirá filtrar los 3 registros restantes con datos faltantes.
      </div>
      <br />
      <img src="/images/missing_values_6.png" alt="Filtrado de registros con atributos faltantes" class="example-image" />
      <br />

      <div class="list-text">
          Finalmente, observamos cómo nuestro dataset está ahora completamente limpio de valores faltantes, con los atributos necesarios y sin eliminar información importante .
      </div>
      <br />
      <img src="/images/missing_values_7.png" alt="Dataset limpio sin valores faltantes" class="example-image" />
      <br />
      <br />
      <h3 className="list-title" id="normalizacion-outliers">Ejemplo: Normalización y Detección de Outliers</h3>

      <div class="list-text">
          Seleccionando el dataset <strong>Wine</strong> , observando las estadísticas de este, podemos ver que hay diferentes atributos numéricos pero en diferentes rangos y promedios.
      </div>
      <br />
      <img src="/src/images/n_o_1.png" alt="Selección del dataset Wine" class="example-image" />
      <br />

      <div class="list-text">
          Por ejemplo, algunos atributos tienen valores que van de <strong>0.7 a 5.8</strong>, mientras que otros oscilan entre <strong>70 a 162</strong>.
      </div>
      <br />
      <img src="/images/n_o_2.png" alt="Rangos y promedios del dataset Wine" class="example-image" />
      <br />

      <div class="list-text">
          Cuando tienes valores numéricos que varían en diferentes rangos, es conveniente llevarlos a un mismo rango y normalizarlos. Esto es importante en algunos algoritmos como <strong>k-Nearest Neighbors (k-NN)</strong>, ya que este algoritmo trabaja con distancias y, si los datos no están normalizados, los atributos con mayores valores pueden dominar la distancia.
      </div>
      <br />

      <div class="list-text">
          Para lograr esta normalización, utilizamos el bloque <strong>Normalize</strong> con la opción <strong>Z-Transformation</strong>.
      </div>
      <br />
      <img src="/images/n_o_3.png" alt="Normalización con Z-Transformation" class="example-image" />
      <br />

      <div class="list-text">
          Una vez normalizados, podemos observar que el promedio de los atributos es <strong>0</strong> y la varianza es <strong>1</strong>.
      </div>
      <br />
      <img src="/images/n_o_4.png"alt="Datos normalizados con promedio 0 y varianza 1" class="example-image" />
      <br />

      <div class="list-text">
          No solo se utilizan distancias en los algoritmos, sino que también podemos aplicarlas para detectar <strong>outliers</strong>. En este caso, usamos el bloque <strong>Detect Outlier (Distances)</strong> con los siguientes parámetros:
      </div>

      <ul class="list-text">
          <li><span class="list-title">Número de vecinos:</span> 10</li>
          <li><span class="list-title">Número de outliers:</span> 10</li>
          <li><span class="list-title">Función de distancia:</span> Euclidiana</li>
      </ul>
      <br />
      <img src="/images/n_o_5.png" alt="Detección de outliers con 10 vecinos y función de distancia Euclidiana" class="example-image" />
      <br />

      <div class="list-text">
          Esto nos genera un nuevo atributo llamado <strong>outlier</strong>, donde podemos observar que hay <strong>168</strong> registros que no son outliers y <strong>10</strong> que sí lo son.
      </div>
      <br />
      <img src="/images/n_o_6.png" alt="Atributo outlier indicando 168 no outliers y 10 outliers" class="example-image" />
      <br />

      <div class="list-text">
          A continuación, queremos excluir estos 10 casos de nuestro dataset. Para ello, utilizamos el bloque <strong>Filter Examples</strong> y, con un filtro personalizado, seleccionamos <strong>outlier = false</strong>.
      </div>
      <br />
      <img src="/images/n_o_7.png" alt="Filtro personalizado para excluir outliers" class="example-image" />
      <br />

      <div class="list-text">
          Al ejecutar nuevamente el proceso, podemos ver que ahora contamos con <strong>168 registros</strong> en el dataset.
      </div>
      <br />
      <img src="/images/n_o_8.png" alt="Dataset reducido a 168 registros después de filtrar outliers" class="example-image" />
      <br />
      <img src="/images/n_o_9.png" alt="Visualización final con 168 registros" class="example-image" />
      <br />




    </Section>

    <Section id="algorithms" title="Algoritmos Lineales">
      <p>Aquí va el contenido sobre los algoritmos lineales...</p>
    </Section>

    <Section id="case-study" title="Caso de Estudio">
      <p>Aquí va el contenido del caso de estudio...</p>
    </Section>

    {/* Footer */}
    <Footer />
  </div>
);

export default IndexPage;

