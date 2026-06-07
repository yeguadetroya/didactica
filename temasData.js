// database of study themes summaries with exam highlights and references
const temasData = [
  {
    "id": "Tema 1",
    "title": "Tema 1: Fundamentación del saber didáctico",
    "subtitle": "Teorías, modelos y procesos de enseñanza-aprendizaje",
    "summary": "Este tema analiza el origen histórico de la didáctica, su estatus epistemológico como pedagogía aplicada, las principales teorías y modelos de enseñanza, y las bases del proceso de enseñanza-aprendizaje.",
    "epigrafes": [
      {
        "id": "t1-1",
        "title": "1.1. Evolución histórica de la didáctica",
        "content": `
                  <p class="exam-paragraph" id="t1-1-p0" style="margin-bottom: 1.5rem; font-size: 1.05rem;">La Didáctica es de corte humanista o tradicional, centrada en el derecho del hombre a aprender. El ser humano desde el inicio de los tiempos pretende transmitir los conocimientos, los conceptos o el modo de actuar. Esto pertenece a la historia de la didáctica. <span class="exam-badge-link" onclick="openExamModal('test', 0)">📝 Test #1</span></p>
                  <div class="mm-wrapper" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 10px 24px; font-weight: 700; font-size: 1.1rem; background: rgba(99, 102, 241, 0.15); color: #c7d2fe; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 15px rgba(99,102,241,0.2); margin-bottom: 20px; text-align: center; width: 100%; max-width: 800px;">Línea de Tiempo: Evolución Histórica</div>
  <div style="width: 100%; display: flex; justify-content: center;">
    <div class="historical-timeline" style="position: relative; display: flex; justify-content: space-between; align-items: stretch; gap: 1rem; min-width: 850px; margin: 1.5rem 0 3rem 0; padding-bottom: 48px;  overflow-y: hidden; font-size: 0.85rem; text-align: center;">
                    <!-- Dotted Line -->
                    <div style="position: absolute; bottom: 30px; left: 5%; right: 5%; height: 0; border-bottom: 3px dashed #4b5563; z-index: 0;"></div>

                    <!-- Item 1 -->
                    <div style="flex: 1; min-width: 130px; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center;">
                      <strong style="color: #f8fafc; font-size: 0.75rem;">Griegos<br>(Paideia)</strong>
                      <span style="color: #94a3b8; margin: 0.3rem 0;">&amp;</span>
                      <strong style="color: #f8fafc; font-size: 0.75rem;">Romanos<br>(De oratore)</strong>
                      <div style="position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>

                    <!-- Item 2 -->
                    <div style="flex: 1; min-width: 130px; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center;">
                      <strong style="color: #f8fafc; font-size: 0.75rem;">Wolfgang Ratke</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.5rem;">(1571-1635)</span>
                      <span style="color: #34d399; font-weight: 600;">Methodus Didáctica</span>
                      <div style="position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>

                    <!-- Item 3 (Highlighted) -->
                    <div style="flex: 1.2; min-width: 160px; background: #0f172a; border: 3px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);">
                      <strong style="color: #34d399; font-size: 0.8rem;">Comenius</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.3rem;">(1592-1670)</span>
                      <strong style="color: #f8fafc;">Didáctica Magna</strong>
                      <span style="color: #e2e8f0; font-style: italic; font-size: 0.8rem; margin-bottom: 0.8rem;">"Enseñar todo a todos"</span>
                      
                      <strong style="color: #34d399; font-size: 0.75rem;">Daniel Georgius<br>Morhof</strong>
                      <strong style="color: #f8fafc; margin-top: 0.3rem;">Currículo</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem;">(1639-1691)</span>
                      <div style="position: absolute; bottom: -33px; left: 50%; transform: translateX(-50%); width: 18px; height: 18px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>

                    <!-- Item 4 -->
                    <div style="flex: 1; min-width: 130px; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center;">
                      <strong style="color: #f8fafc; font-size: 0.75rem;">Herbart</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.5rem;">(1776-1814)</span>
                      <span style="color: #34d399; font-weight: 600;">Forma natural de enseñar</span>
                      <span style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.3rem;">Planificación de la enseñanza</span>
                      <div style="position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>

                    <!-- Item 5 -->
                    <div style="flex: 1; min-width: 130px; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center;">
                      <strong style="color: #f8fafc; font-size: 0.75rem;">Escuela Nueva</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.5rem;">(aprox. 1920)</span>
                      <span style="color: #cbd5e1; font-size: 0.8rem;">Montessori, Decroly,<br>Ferriere, Freinet</span>
                      <div style="position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>

                    <!-- Item 6 (Light Green) -->
                    <div style="flex: 1; min-width: 130px; background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; border-radius: 8px; padding: 1rem 0.5rem; position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center;">
                      <strong style="color: #10b981; font-size: 0.75rem;">Didáctica Hermenéutica</strong>
                      <span style="color: #94a3b8; font-size: 0.75rem; margin-bottom: 0.5rem;">Klafki (1975)</span>
                      <span style="color: #34d399; font-weight: 600;">Psicología de la Educación</span>
                      <div style="position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; border: 3px solid #1e293b;"></div>
                    </div>
                  </div>
  </div>
</div>

                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">La educación en la antigüedad clásica</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-1-p1">En la antigüedad clásica, la educación variaba según las polis. En Esparta, el ideario se centraba en la disciplina militar y las costumbres. En cambio, en Atenas, destacó un ideario educativo integral orientado hacia la formación del ciudadano, la escritura, la formación del carácter y la música.   <span class="exam-badge-link" onclick="openExamModal('test', 1)">📝 Test #2</span></p>
                  
                  
</div><h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Nacimiento de la didáctica en el siglo XVII</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-1-p2">El nacimiento formal de la didáctica como campo independiente se produce en el siglo XVII. El término alemán <em>methodus didactica</em> fue acuñado por primera vez por Wolfgang Ratke.   <span class="exam-badge-link" onclick="openExamModal('test', 2)">📝 Test #3</span></p>
                  
                  <p class="exam-paragraph" id="t1-1-p3">Sin embargo, la didáctica se independiza y sistematiza formalmente en 1657 cuando Comenio publica la <em>Didáctica Magna</em>.   <span class="exam-badge-link" onclick="openExamModal('test', 3)">📝 Test #4</span></p>
                  
                  
<div class="highlight-block" style="margin: 1.2rem 0; padding: 1.2rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                    <h5 style="margin-top: 0; margin-bottom: 0.6rem; color: #fcd34d; font-weight: 700;">El ideario y las normas de Comenio</h5>
                    <p style="margin-bottom: 8px;">Comenio desarrolló dos conceptos fundamentales para comprender la organización escolar moderna:</p>
                    <ul style="margin-left: 30px; list-style-type: disc;">
                      <li><p class="exam-paragraph" id="t1-1-p4">Comenio planteó la utopía o ideal de la <em>Pampedia</em>, que se traduce como "educación universal" (educar a todo el género humano).   <span class="exam-badge-link" onclick="openExamModal('test', 4)">📝 Test #5</span></p></li>
                      <li><p class="exam-paragraph" id="t1-1-p5">En su obra, la famosa utopía comeniana consistía en el postulado latino <em>omnis omnia docere</em>, que significa "enseñar todo a todos". Un ideal que sirvió de base para la organización del sistema de aprendizaje escolar.   <span class="exam-badge-link" onclick="openExamModal('test', 5)">📝 Test #6</span></p></li>
                    </ul>
                    <p style="margin-top: 10px; margin-bottom: 4px;"><strong>Normas comenianas de funcionamiento:</strong></p>
                    <p class="exam-paragraph" id="t1-1-p6">Para hacer realidad esta utopía, Comenio estructuró tres normas fundamentales de funcionamiento: <strong>Simultaneidad</strong> (enseñar lo mismo al mismo tiempo a todos), <strong>Gradualidad</strong> (agrupamiento por niveles según edad y capacidad) y <strong>Alianza</strong> (el acuerdo y alianza entre familia y escuela).   <span class="exam-badge-link" onclick="openExamModal('test', 6)">📝 Test #7</span></p>
                  </div>

                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Sistematización y teorías de los siglos XIX y XX</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Johann Friedrich Herbart (Siglo XIX):</strong> <p class="exam-paragraph" id="t1-1-p7">En el siglo XIX, Johann Friedrich Herbart sistematizó la didáctica como disciplina científica fundamentada en la instrucción educativa (<em>erziehender Unterricht</em>).</p></li>
                    <li><strong>Erich Weniger (Década de 1930):</strong> <p class="exam-paragraph" id="t1-1-p8">A partir de la década de 1930, en el mundo germánico, Erich Weniger desarrolló una teoría curricular específica de didáctica hermenéutica teniendo en cuenta las características de la educación como ciencia humana o ciencia del espíritu.   <span class="exam-badge-link" onclick="openExamModal('test', 7)">📝 Test #8</span></p></li>
                    <li><strong>Wolfgang Klafki:</strong> <p class="exam-paragraph" id="t1-1-p9">Posteriormente, Wolfgang Klafki reformuló la didáctica mediante la <em>Bildungstheorie</em> (teoría de la formación) y el concepto de formación categórica, integrando los objetos culturales con las dimensiones de la personalidad.</p></li>
                  </ul>
                
`
      },
      {
        "id": "t1-2",
        "title": "1.2. Clasificación de las ciencias de la educación",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-2-p1">La Pedagogía es la ciencia en el campo de las Ciencias Sociales y Humanas que tiene como objeto global de estudio la educación en general y el desarrollo de la formación humana hacia una formación integral.   <span class="exam-badge-link" onclick="openExamModal('test', 8)">📝 Test #9</span></p>
                  
                  <div class="highlight-block" style="margin-top: 1.5rem; margin-bottom: 1.5rem; padding: 1.2rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                    <h4 style="margin-top: 0; margin-bottom: 0.8rem; color: #a5b4fc; font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700;">Clasificación de las Ciencias de la Educación (Taxonomía)</h4>
                    <p>La Pedagogía se divide tradicionalmente en dos grandes ramificaciones científicas:</p>
                    <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 1rem;">
                      <li style="margin-bottom: 8px;"><strong>1. <strong>Pedagogía General</strong> (<strong>Ciencias Fundamentadoras</strong> y Estructurales):</strong>
                        <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px;">
                          <li>Teoría de la Educación</li>
                          <li>Pedagogía Social</li>
                          <li>Pedagogía Diferencial</li>
                          <li>Pedagogía Experimental</li>
                        </ul>
                      </li>
                      <li><strong>2. Pedagogía Aplicada (Ciencias Tecnológico-Prescriptivas):</strong>
                        <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px;">
                          <li>Organización Escolar / Organización Educativa</li>
                          <li>Educación Especial</li>
                          <li>Tecnología Educativa</li>
                          <li>Orientación Educativa</li>
                          <li style="color: #fcd34d; font-weight: 600;"><p class="exam-paragraph" id="t1-2-p4">A nivel internacional, la disciplina se divide en dos grandes tradiciones. La <strong>tradición anglosajona</strong> utiliza el término <strong>Currículo</strong> (de <em>currere</em>, pista de carreras) y tiene un enfoque técnico y organizativo impulsado por autores como Bobbit. Por otro lado, la <strong>tradición germánica y centroeuropea</strong> utiliza el concepto de <strong>Didaktik</strong>, mucho más humanista, enfocado en el propósito moral y la formación profunda espiritual del alumno (Bildung). <span class="exam-badge-link dev" onclick="openExamModal('dev', 0)">🎯 Corta #1</span>  <span class="exam-badge-link" onclick="openExamModal('test', 10)">📝 Test #11</span></p></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <p class="exam-paragraph" id="t1-2-p2">Por su parte, la Didáctica es la ciencia de la educación que tiene por objeto acotado estudiar los procesos de enseñanza-aprendizaje y prescribir métodos y estrategias eficaces para desarrollarlos hacia la formación integral del discente.   <span class="exam-badge-link" onclick="openExamModal('test', 11)">📝 Test #12</span></p>
                  
                  <p class="exam-paragraph" id="t1-2-p3">Etimológicamente, el término Didáctica proviene del griego <em>Didaskein</em> (enseñar) y <em>Tékne</em> (arte o técnica), así como del latín <em>docere</em> (enseñar) y <em>discere</em> (aprender). Como ejemplo práctico actual, no se busca solo memorizar: en lugar de dictar una lección, el profesor diseña una actividad (como un huerto escolar) actuando como mediador constructivista. <span class="exam-badge-link dev" onclick="openExamModal('dev', 1)">🎯 Corta #2</span>  <span class="exam-badge-link" onclick="openExamModal('test', 12)">📝 Test #13</span></p>
                  
                  <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #a5b4fc; font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700;">Definiciones e historiografía de la didáctica</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>Diferentes autores han aportado visiones científicas a lo largo del desarrollo de la disciplina:</p>
                  <ul style="margin-left: 30px; margin-bottom: 1rem; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Rodríguez Diéguez (1980):</strong> La define de manera técnica como la <em>"ciencia y técnica de la instrucción educativa"</em>.</li>
                    <li><strong>Gimeno Sacristán (1985) y Escudero (1983):</strong> Conciben la didáctica como la ciencia que debe <em>guiar y comprender el aprendizaje</em> práctico.</li>
                    <li><strong>Schön (1983):</strong> Desarrolla el concepto de que el didacta es un <em>"práctico reflexivo"</em>, un profesional de aula en constante autoevaluación de su acción formativa.</li>
                    <li><strong>Medina y Salvador Mata (2009):</strong> Es una disciplina de naturaleza pedagógica, orientada por las finalidades educativas y comprometida con el logro de la mejora de todos los seres humanos, mediante la comprensión y transformación permanente de los procesos socio-comunicativos.</li>
                  </ul>
                  
                  
</div><h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #a5b4fc; font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700;">Doble raíz y objetivos del proceso didáctico</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>La Didáctica se define por su doble objetivo y raíz etimológica:</p>
                  <ul style="margin-left: 30px; margin-bottom: 1rem; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Doble raíz:</strong> <em>Docere</em> (enseñar, la acción del docente) y <em>Discere</em> (aprender, la adquisición efectiva de conocimiento por parte del alumnado). Se fundamenta en el <strong>aprendizaje significativo</strong>: el contenido se procesa y se le otorga un significado propio integrándolo en los esquemas mentales existentes.</li>
                    <li><strong>Doble objetivo:</strong>
                      <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px;">
                        <li><strong>Material (el <em>quod</em>):</strong> El estudio del proceso de enseñanza-aprendizaje.</li>
                        <li><strong>Formal (el <em>quo</em>):</strong> La prescripción de métodos, técnicas y estrategias eficaces para guiar y optimizar dicho proceso.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <p>En el proceso didáctico intervienen diversos elementos clave en interacción constante:</p>
                  <ul style="margin-left: 30px; margin-bottom: 1rem; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li>La comunicación docente-discente.</li>
                    <li>El método o estrategia didáctica empleada.</li>
                    <li>El contenido instructivo.</li>
                    <li>El entorno o contexto sociocultural en el que se desarrolla la enseñanza.</li>
                  </ul>
                  
                  <p><strong>Sevillano (2005)</strong>, en su obra <em>Didáctica para el Siglo XXI</em>, señala que la didáctica va más allá del concepto clásico. La didáctica constructivista sitúa al <strong>alumno en el centro</strong>, partiendo del propio estudiante y de sus necesidades y ritmos en lugar de partir de los contenidos preestablecidos.</p>
                  
                  <p class="exam-paragraph" id="t1-2-p5">Según la taxonomía de las Ciencias de la Educación de Medina y Domínguez (2016), las ciencias se organizan en Fundamentadoras (Psicología, Sociología), <strong>Pedagogía General</strong> (Teoría de la Educación) y, finalmente, la Didáctica se enmarca de forma unánime dentro de la <strong>Pedagogía Aplicada</strong>, ya que interviene de forma práctica en el aula. <span class="exam-badge-link dev" onclick="openExamModal('dev', 2)">🎯 Corta #3</span>  <span class="exam-badge-link" onclick="openExamModal('test', 9)">📝 Test #10</span></p>
                  
                  
</div>
</div>

                
`
      },
      {
        "id": "t1-3",
        "title": "1.3. Perspectivas y teorías de la didáctica",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Las tres grandes perspectivas epistemológicas</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>La didáctica como disciplina científica se ha desarrollado bajo tres enfoques o perspectivas principales:</p>
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem; text-align: left;">
                    <thead>
                      <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: #a5b4fc;">
                        <th style="padding: 8px;">Perspectiva</th>
                        <th style="padding: 8px;">Enfoque central</th>
                        <th style="padding: 8px;">Objetivo del aprendizaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Tecnológica / Científica</td>
                        <td style="padding: 8px;">Instrucción sistemática, objetivos medibles, eficacia y control.</td>
                        <td style="padding: 8px;">Adquisición de conductas observables.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Artística / Humanista</td>
                        <td style="padding: 8px;">Enseñanza como proceso creativo, único e impredecible; intuición.</td>
                        <td style="padding: 8px;">Desarrollo personal y moral del estudiante.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Cultural / Sociocrítica</td>
                        <td style="padding: 8px;">Comprensión social, diálogo, autorreflexión e investigación.</td>
                        <td style="padding: 8px;">Liberación, emancipación y transformación.</td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="exam-paragraph" id="t1-3-p1">A lo largo de la historia, la didáctica se ha estudiado bajo diferentes perspectivas o enfoques. La <strong>Perspectiva Técnica</strong> busca la hiper-eficiencia mediante normas estrictas y métodos cuantitativos. La <strong>Perspectiva Práctica</strong> ve el aula como un ecosistema vivo e impredecible, utilizando métodos cualitativos para comprender su contexto natural.</p>
<p class="exam-paragraph" id="t1-3-p2">Finalmente, el paradigma o <strong>Perspectiva Sociocrítica</strong> concibe la educación con un marcado sentido liberador y emancipador del discente (basado en Habermas). Busca que el alumno sea crítico, autónomo y capaz de reflexionar para transformar la sociedad y desenmascarar desigualdades. <span class="exam-badge-link dev" onclick="openExamModal('dev', 3)">🎯 Corta #4</span>  <span class="exam-badge-link" onclick="openExamModal('test', 13)">📝 Test #14</span></p>

</div><h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">La teoría activista</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
<p class="exam-paragraph" id="t1-3-p3">Por su parte, la <strong>Teoría Activista</strong> (Escuela Nueva) surge como reacción al planteamiento clásico o a los modelos tradicionales que centraban el protagonismo en el docente. Su carácter vitalista exige partir de la realidad y aprender por la experiencia. Sus principales teóricos fueron Kerschensteiner, Dewey, Claparède y Ferrière.   <span class="exam-badge-link" onclick="openExamModal('test', 14)">📝 Test #15</span> <span class="exam-badge-link" onclick="openExamModal('test', 15)">📝 Test #16</span></p>

</div><h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">La teoría transdisciplinar (Edgar Morin)</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
<p class="exam-paragraph" id="t1-3-p4">Como teoría científica, se basa en el principio de la <strong>unidad del conocimiento</strong>, fundamentada principalmente por Edgar Morin (junto a Piaget y Nicolescu). Traspasa los límites de cada disciplina aislada buscando currículos integrados.</p>
<p class="exam-paragraph" id="t1-3-p5">En este proceso hacia la integración, se distinguen varios niveles de profundidad:</p>
<ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
  <li><strong>Multidisciplinariedad:</strong> Trabajar el mismo tema desde distintos ángulos sin coordinación real.</li>
  <li><strong>Pluridisciplinariedad:</strong> Cooperación metodológica básica entre disciplinas.</li>
  <li id="ref-q-16"><strong>Interdisciplinariedad:</strong> Agrupación de contenidos por grandes <strong>temas o proyectos (globalización de contenido)</strong>, en lugar de dividirlos en asignaturas específicas aisladas.  <span class="exam-badge-link" onclick="openExamModal('test', 16)">📝 Test #17</span></li>
  <li><strong>Transdisciplinariedad:</strong> El grado máximo. Unidad total del saber integrando teoría y práctica en un solo conjunto unitario.</li>
</ul>
</div><h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">La teoría humanista (Rogers y Maslow)</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
<p class="exam-paragraph" id="t1-3-phumanista" style="margin-bottom: 1rem;">Las características de una Didáctica Humanista son la consideración de cada ser humano como único y valioso. El cultivo de la libertad a través de la no directividad, comprensión empática y conducta asertiva. La visión de conjunto de los componentes que constituyen la persona, la corporeidad y espiritualidad, así como la visión positiva y optimista de la educación y de la enseñanza manifestada en la confianza en la persona del que aprende y también en el ser humano en general:</p>
<ul style="margin-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc;">
  <li>El deseo de saber y comprender.</li>
  <li>El desarrollo del espíritu crítico constructivo y la creatividad.</li>
  <li>El compromiso personal y la cooperación o participación democrática.</li>
  <li>El aprecio por la maravilla de la naturaleza, que promoverá una ecoformación solidaria y responsable.</li>
  <li>La clarificación del objetivo y el sentido de la vida.</li>
</ul>
<p style="margin-bottom: 1rem;">Respetar significa aceptar a cada alumno tal como es y no buscar cambiarlo: aceptar y respetar al aprendiz como persona humana completa, con un convencimiento de las posibilidades de perfeccionamiento humano.</p>
<p style="margin-bottom: 0;">En definitiva, se trata de una valoración de la persona global, educación del sentido de la vida y de los valores, comprensión empática, libertad bien entendida, aprendizaje autodirigido, potenciación de la voluntad y el esfuerzo junto a una sana confianza en las posibilidades del aprendiz. El educador debe convertirse en facilitador y acompañar en el proceso de aprendizaje vivencial o significativo, creando el clima adecuado.</p>
                
`
      },
      {
        "id": "t1-4",
        "title": "1.4. Modelos didácticos de la enseñanza",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-4-p1">Cuando se habla de una representación abstracta, mental o conceptual y simplificada de un fenómeno real, se está haciendo referencia a un <strong>modelo</strong>. Los modelos didácticos ayudan a llevar la teoría pedagógica a la práctica del aula.   <span class="exam-badge-link" onclick="openExamModal('test', 17)">📝 Test #18</span></p>
                  
                  <p class="exam-paragraph" id="t1-4-p2">El <strong>Triángulo Didáctico de Künzli (1998)</strong> representa la enseñanza como interacción entre Docente, Discente y Contenido. Künzli detalla tres dimensiones: la Constitutiva (dominio de la materia), la Mayéutica (entender al alumno) y la <strong>Dimensión Ética</strong>, que requiere la plena conciencia moral del maestro de sus intenciones e interacciones formativas con sus alumnos. <span class="exam-badge-link dev" onclick="openExamModal('dev', 4)">🎯 Corta #5</span>  <span class="exam-badge-link" onclick="openExamModal('test', 18)">📝 Test #19</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Comparativa de modelos clásicos y contemporáneos</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Modelo clásico o tradicional:</strong> <p class="exam-paragraph" id="t1-4-p3">Entre la clasificación de modelos destaca el <strong>Modelo Tradicional o Clásico</strong>, que se caracteriza por la presentación oral de la materia por el profesor, centralizando el protagonismo en él mediante comunicación unidireccional, y el estudio del alumno a partir del libro de texto.   <span class="exam-badge-link" onclick="openExamModal('test', 19)">📝 Test #20</span></p></li>
                    <li><strong>Modelo tecnológico:</strong> <p class="exam-paragraph" id="t1-4-p4">El <strong>Modelo Tecnológico</strong> parte de las teorías conductistas de Skinner y tuvo su primera manifestación en las técnicas de enseñanza programada. Busca la eficiencia y persigue la consecución sistemática de resultados y objetivos operativos.   <span class="exam-badge-link" onclick="openExamModal('test', 20)">📝 Test #21</span></p></li>
                    <li><strong>Modelo socrático:</strong> <p class="exam-paragraph" id="t1-4-p5">El <strong>Modelo Socrático</strong> recupera y construye la mayéutica como forma de comunicación y diálogo entre docente y discente. Su personalización se basa en emerger las ideas fundamentales a través del esfuerzo continuo y la selección de la pregunta más pertinente.   <span class="exam-badge-link" onclick="openExamModal('test', 21)">📝 Test #22</span></p></li>
                  </ul>
                  
                  <p>Otros modelos contemporáneos incluyen el <strong>Modelo Activo-Situado</strong> (centrado en la acción del alumno y su contexto), el <strong>Modelo Aprendizaje para el Siglo XXI</strong> (desarrollo de competencias blandas, creatividad y TIC), y el <strong>Modelo Colaborativo</strong> (maestro y alumno cooperan para construir conocimiento).</p>
                
                  <p class="exam-paragraph" id="t1-4-p6">Existen también otros modelos contemporáneos: el <strong>Activo-Situado</strong> (basado en la Escuela Nueva y el aprender haciendo), el <strong>Comunicativo-Interactivo</strong> (de Cazden y Titone, que convierte el aula en un ecosistema de diálogo constante) y el <strong>Colaborativo</strong> (que genera una interdependencia positiva entre alumnos). <span class="exam-badge-link dev" onclick="openExamModal('dev', 5)">🎯 Corta #6</span></p>
                
`
      },
      {
        "id": "t1-5",
        "title": "1.5. El proceso de aprendizaje",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-5-p1">El proceso de asimilar información con un cambio resultante y relativamente estable en el comportamiento es <strong>aprender</strong>.   <span class="exam-badge-link" onclick="openExamModal('test', 22)">📝 Test #23</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Bases teóricas del aprendizaje</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>Existen diversos enfoques que explican cómo aprenden los seres humanos:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Conductismo (Skinner):</strong> El aprendizaje como asociación de estímulo y respuesta reforzada por recompensas o castigos.</li>
                    <li><strong>Cognitivismo (Piaget):</strong> El aprendizaje como desarrollo interno de esquemas mentales adaptativos a través de la asimilación y la acomodación.</li>
                    <li><strong>Constructivismo:</strong> <p class="exam-paragraph" id="t1-5-p2">Según el paradigma <strong>Constructivista</strong> (cuyos autores principales son Piaget, Vygotsky, Ausubel y Novak), se aprende por un proceso activo interno de construcción de conocimientos. El estudiante interactúa asimilando la información externa y acomodándola a sus propias capacidades innatas y nociones previamente adquiridas.   <span class="exam-badge-link" onclick="openExamModal('test', 23)">📝 Test #24</span> <span class="exam-badge-link" onclick="openExamModal('test', 24)">📝 Test #25</span></p></li>
                    <li><strong>Conectivismo (Siemens):</strong> El aprendizaje en la era digital como una red de nodos informativos interconectados.</li>
                  </ul>
                  
                  
</div><h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">El conductismo y el aprendizaje social</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t1-5-p3"><strong>La Teoría del Aprendizaje Social de Albert Bandura</strong> postula que la conducta se adquiere principalmente mediante la observación y modelado (imitación) en un contexto social, pasando por fases de atención, retención, reproducción y motivación.   <span class="exam-badge-link" onclick="openExamModal('test', 25)">📝 Test #26</span></p>
                  
                  <p class="exam-paragraph" id="t1-5-p4">Por su parte, el <strong>Conductismo</strong> (cuyos autores destacados son Skinner, Pavlov y Bandura, en sus inicios) se sustenta en un método asociacionista. Su procedimiento consiste en manipular una variable y medir sus efectos sobre otra, formulando la teoría como estímulo-respuesta.   <span class="exam-badge-link" onclick="openExamModal('test', 26)">📝 Test #27</span> <span class="exam-badge-link" onclick="openExamModal('test', 27)">📝 Test #28</span></p>
                
`
      }
    ]
  },
  {
    "id": "Tema 2",
    "title": "Tema 2: Principios de la enseñanza, modelos y modalidades",
    "subtitle": "Fundamentos metodológicos y desarrollo profesional",
    "summary": "Este tema explora las leyes del proceso didáctico, los tipos de motivación en el aula, las modalidades organizativas (presencial, blended, online) y los modelos de formación del profesorado de Carlos Marcelo.",
    "epigrafes": [

      {
        "id": "t2-0",
        "title": "",
        "content": `

<div class="mm-wrapper" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 10px 24px; font-weight: 700; font-size: 1.1rem; background: rgba(99, 102, 241, 0.15); color: #c7d2fe; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 15px rgba(99,102,241,0.2); margin-bottom: 20px; text-align: center; width: 100%; max-width: 800px;">Modelos Didácticos y Principios Psicológicos</div>
  
  <div style="width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: start;">
    <!-- Column 1 -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
      <div style="width: 100%; text-align: center; background: #0f172a; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; font-weight: bold; color: #f8fafc; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);">Principios Didácticos Clásicos</div>
      <div style="color: #34d399; font-size: 1.5rem; font-weight: bold; margin: 0.2rem 0; display: flex; justify-content: center; align-items: flex-end; height: 35px;"><svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="40" height="20" viewBox="0 0 40 20" style="fill: none; stroke: #10b981; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;"><path d="M20 0 L20 18 M10 10 L20 20 L30 10"/></svg></div>
      <div style="width: 100%; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1.2rem; color: #cbd5e1;">
        <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.6; text-align: left;">
          <li>- de lo conocido a lo desconocido</li>
          <li>- del análisis a la síntesis</li>
          <li>- de lo simple a lo complejo</li>
          <li>- del todo a las partes</li>
          <li>- de lo concreto a lo abstracto</li>
          <li>- de lo empírico a lo racional</li>
          <li>- de lo psicológico a lo lógico</li>
          <li>- de lo real a lo representativo</li>
        </ul>
      </div>
      
      <div style="width: 100%; text-align: center; background: #0f172a; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; font-weight: bold; color: #f8fafc; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); margin-top: 1.5rem;">Modelo de des. prof. Imbernon</div>
      <div style="color: #34d399; font-size: 1.5rem; font-weight: bold; margin: 0.2rem 0; display: flex; justify-content: center;"><svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="40" height="20" viewBox="0 0 40 20" style="fill: none; stroke: #10b981; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;"><path d="M20 0 L20 18 M10 10 L20 20 L30 10"/></svg></div>
      <div style="width: 100%; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1.2rem; color: #cbd5e1;">
        <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.6; text-align: left;">
          <li>- Form. orientada individualmente</li>
          <li>- Observación evaluación</li>
          <li>- Desarrollo y mejora</li>
          <li>- Entrenamiento o institucional</li>
          <li>- Investigación o indagativo</li>
        </ul>
      </div>
    </div>
    
    <!-- Column 2 -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
      <div style="width: 100%; text-align: center; background: #0f172a; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; font-weight: bold; color: #f8fafc; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);">Modelo de desarrollo profesional de Marcelo</div>
      <div style="color: #34d399; font-size: 1.5rem; font-weight: bold; margin: 0.2rem 0; display: flex; justify-content: center; align-items: flex-end; height: 35px;"><svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="40" height="20" viewBox="0 0 40 20" style="fill: none; stroke: #10b981; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;"><path d="M20 0 L20 18 M10 10 L20 20 L30 10"/></svg></div>
      <div style="width: 100%; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1.2rem; color: #cbd5e1;">
        <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8;">
          <li style="margin-bottom: 0.8rem;">- Desarrollo profesional autónomo</li>
          <li style="margin-bottom: 0.8rem;">- Desarrollo profesional basado en la reflexión</li>
          <li style="margin-bottom: 0.8rem;">- <strong>Desarrollo profesional mediante el desarrollo curricular y la formación del centro</strong></li>
          <li style="margin-bottom: 0.8rem;">- Desarrollo profesional a través de los cursos de formación</li>
          <li>- Desarrollo profesional desde la investigación</li>
        </ul>
      </div>
    </div>
    <!-- Column 3 -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
      <div style="width: 100%; text-align: center; background: #0f172a; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; font-weight: bold; color: #f8fafc; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);">Principios Psicológicos de la Enseñanza</div>
      <div style="color: #34d399; font-size: 1.5rem; font-weight: bold; margin: 0.2rem 0; display: flex; justify-content: center; align-items: flex-end; height: 35px;"><svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="40" height="20" viewBox="0 0 40 20" style="fill: none; stroke: #10b981; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;"><path d="M20 0 L20 18 M10 10 L20 20 L30 10"/></svg></div>
      <div style="width: 100%; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 1.2rem; color: #cbd5e1;">
        <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.5;">
          <li>Guiar al alumno</li>
          <li>Jerarquía de contenido</li>
          <li>Imágenes</li>
          <li>Activo</li>
          <li>Práctica.</li>
          <li>Retroalimentación.</li>
          <li>Expectativas positivas</li>
          <li>Desafiar pero exitosos</li>
          <li>Individualizar el estilo</li>
          <li>Clase cooperativa.</li>
          <li>Preg provocan reflexión.</li>
          <li>Ser entusiasta</li>
          <li>Estud. enseñan a otros</li>
        </ul>
      </div>
      
      <div style="width: 100%; text-align: center; background: #0f172a; border: 2px solid #10b981; border-radius: 8px; padding: 0.8rem; font-weight: bold; color: #f8fafc; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); margin-top: 1.5rem;">Motivación</div>
      <div style="color: #34d399; font-size: 1.5rem; font-weight: bold; margin: 0.2rem 0; display: flex; justify-content: center;"><svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="40" height="20" viewBox="0 0 40 20" style="fill: none; stroke: #10b981; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;"><path d="M20 0 L20 18 M10 10 L20 20 L30 10"/></svg></div>
      <div style="width: 100%; text-align: center; background: rgba(255,255,255,0.03); border: 2px solid #10b981; border-radius: 8px; padding: 0.8rem; color: #cbd5e1;">
        Intrínseca o Extrínseca
      </div>
    </div>
    
    </div>
    </div>
  </div>
</div>
`
      },
    
      {
        "id": "t2-1",
        "title": "2.1. Principios clásicos de la enseñanza",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Leyes lógicas de la didáctica</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t2-1-p1">La didáctica prescribe que para que la instrucción sea asimilable, el docente debe seguir leyes lógicas de secuenciación: <strong>proceder de lo conocido a lo desconocido, proceder del análisis a la síntesis y proceder de lo simple a lo complejo</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 28)">📝 Test #29</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Los 5 principios didácticos fundamentales</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p>Para que cualquier diseño de aula tenga coherencia metodológica, debe estructurarse en torno a estos cinco pilares:</p>
                  <ol style="margin-left: 30px; line-height: 1.6; text-align: left;">
                    <li><strong>Principio de Actividad:</strong> El discente aprende haciendo. Requiere su protagonismo mediante la acción física e intelectual.</li>
                    <li><strong>Principio de Socialización:</strong> La educación es un hecho social. Fomenta el trabajo cooperativo y el respeto mutuo.</li>
                    <li><strong>Principio de Individualización:</strong> Respeto a los diferentes ritmos y estilos de aprendizaje de cada estudiante.</li>
                    <li><strong>Principio de Creatividad:</strong> Fomento de la originalidad, el pensamiento divergente y la búsqueda de soluciones innovadoras.</li>
                    <li><strong>Principio de Intuición / Globalidad:</strong> Partir del contacto con la realidad física (lo concreto) antes de teorizar (lo abstracto).</li>
                  </ol>
                
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Principios psicológicos de la enseñanza</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t2-1-p2">Además de los clásicos, existen principios psicológicos que se centran en cómo procesa la información la mente del estudiante. Estos implican guiar al alumno, desarrollar una jerarquía estructurada de contenido y utilizar imágenes y aprendizaje visual, así como mantener altas expectativas. <span class="exam-badge-link" onclick="openExamModal('test', 29)">📝 Test #30</span></p>
                
`
      },
      {
        "id": "t2-2",
        "title": "2.2. La motivación en el proceso educativo",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t2-2-p1">La <strong>motivación</strong> (del latín <em>motivus</em>, relativo al movimiento) es el factor dinámico que impulsa la acción del sujeto y despierta su interés por aprender. <span class="exam-badge-link" onclick="openExamModal('test', 30)">📝 Test #31</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Tipos de motivación en el aprendizaje</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p>La psicología educativa clasifica la motivación según el origen del impulso de la conducta:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 1.5rem;">
                    <li><p class="exam-paragraph" id="t2-2-p2"><strong>Motivación Intrínseca (interna):</strong> Impulsada por el interés, disfrute o curiosidad innata en la tarea misma. Existe dentro del individuo y es el motor del aprendizaje duradero. <span class="exam-badge-link" onclick="openExamModal('test', 31)">📝 Test #32</span></p></li>
                    <li><p class="exam-paragraph" id="t2-2-p3"><strong>Motivación Extrínseca (exterior):</strong> Dependiente de estímulos del entorno, recompensas como las calificaciones, premios, dinero o evitación del castigo. <span class="exam-badge-link" onclick="openExamModal('test', 32)">📝 Test #33</span> <span class="exam-badge-link" onclick="openExamModal('test', 33)">📝 Test #34</span></p></li>
                  </ul>
                  
                  <div class="highlight-block" style="padding: 1rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                    <p style="margin: 0; font-size: 0.9rem;"><strong>💡 Consejo Pedagógico:</strong> La motivación del estudiante aumenta notablemente si las tareas escolares están directamente conectadas con su vida diaria, sus gustos y se plantean mediante retos o proyectos prácticos.</p>
                  </div>
                
`
      },
      {
        "id": "t2-3",
        "title": "2.3. Modalidades organizativas de la enseñanza",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Las tres modalidades principales</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p>La organización de la enseñanza según el entorno de interacción y la presencia física se divide en:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Modalidad Presencial:</strong> La interacción docente-alumno ocurre al mismo tiempo y en el mismo espacio físico (el aula). Es la base del modelo tradicional.</li>
                    <li><strong>Modalidad a Distancia u Online:</strong> Basada en la autonomía del estudiante que se apoya en plataformas digitales virtuales y tutorías asincrónicas.</li>
                    <li><strong>Modalidad Semipresencial:</strong> <p class="exam-paragraph" id="t2-3-p1"><strong>Modalidad de enseñanza semipresencial (Blended Learning):</strong> Combina las ventajas de la modalidad presencial y a distancia, de modo que el estudiante asiste a sesiones presenciales de tutoría y cuenta con los recursos autónomos y digitales en línea. <span class="exam-badge-link" onclick="openExamModal('test', 34)">📝 Test #35</span> <span class="exam-badge-link" onclick="openExamModal('test', 35)">📝 Test #36</span></p></li>
                  </ul>
                
`
      },
      {
        "id": "t2-4",
        "title": "2.4. Modelos de desarrollo profesional docente (Marcelo)",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t2-4-p1">El <strong>Modelo de desarrollo profesional docente según Marcelo</strong> (1995/2002) tipifica cinco grandes modelos para explicar cómo se forman e innovan los docentes a lo largo de su carrera: el de iniciación (para principiantes), el basado en la escuela (colaborativo en el centro), el integrado (teoría-práctica), el individualizado (autoformación) y el de entrenamiento/supervisión (coaching). <span class="exam-badge-link dev" onclick="openExamModal('dev', 6)">✒️ Corta #7</span></p>
                  
                  <div class="mm-wrapper" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 8px 24px; font-weight: 600; font-size: 1rem; background: rgba(99, 102, 241, 0.1); color: #c7d2fe; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(99,102,241,0.2); margin-bottom: 8px; text-align: center;">Modelos de Desarrollo Profesional (Marcelo)</div>
  <div style="width: 100%; display: flex; justify-content: center;">
    <table style="width: 100%; border-collapse: collapse; margin-top: 1.2rem; font-size: 0.9rem; text-align: left;">
                    <thead>
                      <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: #a5b4fc;">
                        <th style="padding: 8px; width: 30%;">Modelo</th>
                        <th style="padding: 8px;">Descripción y características</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Desarrollo profesional autónomo:</td>
                        <td style="padding: 8px;">Basado en el aprendizaje auto-dirigido. El profesor asume el control de su propia formación e iniciativa a través del análisis de tareas, la lectura, la reflexión y la investigación en su propia práctica.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Desarrollo profesional basado en la reflexión:</td>
                        <td style="padding: 8px;">El profesor es dinámico y activo, concibiéndose como un "aprendiz de su propia práctica" que resuelve problemas cuestionando su propia acción en el aula.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Desarrollo profesional mediante el desarrollo curricular y la formación del centro:</td>
                        <td style="padding: 8px;">La formación es contextualizada. El docente se forma diseñando proyectos de innovación junto a la comunidad educativa para mejorar su propia escuela.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Desarrollo profesional a través de los cursos de formación:</td>
                        <td style="padding: 8px;">Es el más utilizado pero el menos valorado. Separa la teoría de la práctica y genera una "obsesión por los certificados" más que por el perfeccionamiento real.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Desarrollo profesional desde la investigación:</td>
                        <td style="padding: 8px;">Basado en la investigación-acción. El docente aplica métodos de investigación en su aula para resolver problemas prácticos inmediatos con total igualdad entre los participantes.</td>
                      </tr>
                    </tbody>
                  </table>
  </div>
</div>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Creencias docentes y reflexión en la práctica</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t2-4-p2">Schraw y Olason (2015) proponen el uso de <strong>portafolios</strong> y <strong>registros de discurso verbal/escrito</strong> como herramientas formativas para explorar las creencias implícitas (<em>beliefs</em>) y su impacto en la práctica reflexiva.</p>
                  
                  <p class="exam-paragraph" id="t2-4-p3">El aprendizaje profesional del docente ha de orientarse hacia la <strong>mejora continua de la docencia</strong> y la adquisición de competencias profesionales dinámicas adaptadas al centro (Imbernón).</p>
                  
                  <p class="exam-paragraph" id="t2-4-p4">Bajo la perspectiva reflexiva de Schön (1992), la <strong>reflexión sobre la acción</strong> es el núcleo intelectual que permite afianzar el saber profesional. Describe el proceso de construcción en la acción y reestructuración dinámica frente a la reflexión abstracta clásica.</p>
                
`
      }
    ,
      {
        "id": "t2-5",
        "title": "2.5. Modelos emergentes en los procesos formativos",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">De la enseñanza al aprendizaje</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t2-5-p1">En el tránsito de la enseñanza al aprendizaje, el objetivo último es dotar al estudiante de las herramientas metacognitivas necesarias para autorregular su propio conocimiento. La metodología del <strong>aprender a aprender</strong> posibilita la autonomía del sujeto, que es inseparable del proceso de auto-organización, lo que marcará la modernidad educativa es la didáctica del saber pensar. <span class="exam-badge-link" onclick="openExamModal('test', 36)">📝 Test #37</span></p>
                
`
      }
    ]
  },
  {
    "id": "Tema 3",
    "title": "Tema 3: Sistema metodológico y procesos",
    "subtitle": "Métodos activos, aprendizaje cooperativo y estilos de aprendizaje",
    "summary": "Este tema aborda las decisiones sobre el método de enseñanza, la distinción entre roles activos y pasivos, el origen del método de proyectos, el aprendizaje cooperativo y los estilos de aprendizaje de Kolb y Keefe.",
    "epigrafes": [
      {
        "id": "t3-mapa",
        "title": "",
        "content": `

<div class=\"mm-wrapper\" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 10px 24px; font-weight: 700; font-size: 1.1rem; background: rgba(99, 102, 241, 0.15); color: #c7d2fe; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 15px rgba(99,102,241,0.2); margin-bottom: 20px; text-align: center; width: 100%; max-width: 800px;">Estilos de Aprendizaje</div>
  
  <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; width: 100%; justify-content: center;">
    
    <!-- COLUMNA IZQUIERDA -->
    <div style="display: flex; flex-direction: column; gap: 1.5rem; flex: 1; min-width: 300px;">
      
      <!-- Definición -->
      <div style="background: #0f172a; border: 2px solid #10b981; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); display: flex; flex-direction: column; height: 100%;">
         <h4 style="color: #34d399; margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; text-align: center; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 0.5rem;">Definición</h4>
         <p style="font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; text-align: left;">Rasgos cognitivos, afectivos y fisiológicos que sirven como indicadores relativamente estables de cómo los alumnos perciben interacciones y responden a sus ambientes de aprendizaje (Keefe, 1988).</p>
      </div>

      <!-- Estudiantes -->
      <div style="background: #0f172a; border: 2px solid #10b981; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); display: flex; flex-direction: column; height: 100%;">
         <h4 style="color: #34d399; margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; text-align: center; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 0.5rem;">Estudiantes</h4>
         <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
            <li>Activos o reflexivos</li>
            <li>Sensoriales o intuitivos</li>
            <li>Visuales o verbales</li>
            <li>Secuenciales o globales</li>
            <li>Inteligencia Múltiple</li>
         </ul>
      </div>

      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
          <!-- Mét. enseñanza -->
          <div style="background: #0f172a; border: 2px solid #10b981; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); display: flex; flex-direction: column; flex: 1; min-width: 140px;">
             <h4 style="color: #34d399; margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; text-align: center; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 0.5rem;">Mét. Enseñanza</h4>
             <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
                <li>Lección magistral</li>
                <li>Demostración</li>
                <li>Mét. proyectos</li>
                <li>Aprend. programado</li>
                <li>Puzle o <em>jigsaw</em></li>
                <li>ABP</li>
                <li>Método de caso</li>
             </ul>
          </div>

          <!-- Técnicas -->
          <div style="background: #0f172a; border: 2px solid #10b981; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); display: flex; flex-direction: column; flex: 1; min-width: 140px;">
             <h4 style="color: #34d399; margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; text-align: center; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 0.5rem;">Técnicas</h4>
             <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
                <li>Exposición</li>
                <li>Lluvia de ideas</li>
                <li>ABP</li>
                <li>Juego de roles</li>
                <li>Foros</li>
                <li>Mét. proyectos</li>
                <li>Mét. casos</li>
             </ul>
          </div>
      </div>

    </div>

    <!-- COLUMNA DERECHA (KOLB) -->
    <div style="display: flex; flex-direction: column; gap: 1.5rem; flex: 1; min-width: 300px;">
      <div style="background: #0f172a; border: 2px solid #10b981; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2); display: flex; flex-direction: column; height: 100%;">
         <h4 style="color: #34d399; margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; text-align: center; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 0.5rem;">Modelo de Kolb</h4>
         
         <div style="display: flex; flex-direction: column; gap: 1.5rem;">
             <!-- Capacidades -->
             <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(16, 185, 129, 0.4); padding: 1rem; border-radius: 6px;">
                 <strong style="color: #6ee7b7; display: block; margin-bottom: 0.5rem; font-size: 1rem; text-transform: uppercase;">Capacidades</strong>
                 <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
                    <li>Experiencia Concreta (EC)</li>
                    <li>Observación Reflexiva (OR)</li>
                    <li>Conceptualización Abstracta (CA)</li>
                    <li>Experimentación Activa (EA)</li>
                 </ul>
             </div>

             <!-- Estilos -->
             <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(16, 185, 129, 0.4); padding: 1rem; border-radius: 6px;">
                 <strong style="color: #6ee7b7; display: block; margin-bottom: 0.5rem; font-size: 1rem; text-transform: uppercase;">Estilos</strong>
                 <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
                    <li>Acomodadores</li>
                    <li>Divergentes</li>
                    <li>Convergentes</li>
                    <li>Asimiladores</li>
                 </ul>
             </div>

             <!-- Fases -->
             <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(16, 185, 129, 0.4); padding: 1rem; border-radius: 6px;">
                 <strong style="color: #6ee7b7; display: block; margin-bottom: 0.5rem; font-size: 1rem; text-transform: uppercase;">Fases</strong>
                 <ul style="list-style-type: disc; font-size: 0.95rem; color: #f8fafc; line-height: 1.6; margin: 0; padding-left: 1.5rem; text-align: left;">
                    <li>Teorizar</li>
                    <li>Experimentar</li>
                    <li>Actuar</li>
                    <li>Reflexionar</li>
                 </ul>
             </div>
         </div>
      </div>
    </div>

  </div>
</div>
`
      },
      {
        "id": "t3-1",
        "title": "3.1. Concepto de metodología didáctica",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  
<p class="exam-paragraph" id="t3-1-p1">El <strong>método docente son las decisiones</strong> curriculares sobre el "cómo enseñar", configurando el conjunto de estrategias, interacciones y recursos coordinados por el docente para lograr las metas de aprendizaje.  <span class="exam-badge-link" onclick="openExamModal('test', 37)">📝 Test #38</span></p>
                  
                  <p>La selección de la metodología no debe ser arbitraria, sino que debe alinearse de forma coherente con:</p>
                  <ul style="margin-left: 40px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li>Las metas educativas (objetivos y competencias seleccionados).</li>
                    <li>Las características madurativas y previas de los estudiantes.</li>
                    <li>El contexto social e institucional del centro escolar.</li>
                    <li>La naturaleza de la materia o disciplina de estudio.</li>
                  </ul>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Articulación de las estrategias metodológicas</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t3-1-p2">Las estrategias metodológicas se articulan en torno a <strong>tipos de procedimientos</strong> secuenciados, la <strong>transmisión de información</strong> teórica, los <strong>procesos de aplicación</strong> y la <strong>actividad directa del alumnado</strong>. </p>
                
`
      },
      {
        "id": "t3-2",
        "title": "3.2. Clasificación de métodos y método de proyectos",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Clasificación de los métodos según el rol del alumno</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p>La metodología didáctica puede estructurarse según el nivel de actividad exigido al estudiante:</p>
                  <div class="exam-paragraph">
                  <ul style="margin-left: 40px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li style="margin-bottom: 1rem;"><span id="t3-2-p1"><strong>Rol Pasivo (escuchar y observar):</strong> Métodos de transmisión verbalista como la <strong>Conferencia, Lección Magistral, Demostración y Enseñanza en Equipo</strong>. Aunque es un método unidireccional, la lección magistral sigue siendo un medio rápido de transmitir una gran cantidad de información bien estructurada en el menor tiempo posible. <span class="exam-badge-link" onclick="openExamModal('test', 38)">📝 Test #39</span> <span class="exam-badge-link" onclick="openExamModal('test', 39)">📝 Test #40</span></span></li>
                    <li style="margin-bottom: 0px;"><span id="t3-2-p2">Para el <strong>alumno que toma decisiones o realiza productos (Rol Activo)</strong>, los métodos idóneos son los que demandan su acción, como el <strong>Torbellino de ideas, Método del caso, Jigsaw, Aprendizaje Basado en Problemas y Aprendizaje Basado en Proyectos</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 40)">📝 Test #41</span></span></li>
                  </ul>
                  </div>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Aprendizaje Basado en Proyectos (Método de proyectos)</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <div class="exam-paragraph">
                  <ul style="list-style-type: none; padding-left: 0; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li id="ref-q-41" style="margin-bottom: 8px;"><strong style="color: #34d399;">Origen y Autor:</strong> Nace al amparo de la Escuela Nueva. Su creador formal es <strong>William Heard Kilpatrick</strong> (discípulo de John Dewey), quien publicó en 1918 su famoso artículo "El método de proyectos". <span class="exam-badge-link" onclick="openExamModal('test', 41)">📝 Test #42</span></li>
                    <li id="ref-q-42" style="margin-bottom: 8px;"><strong style="color: #34d399;">Definición:</strong> Kilpatrick lo define como <strong>«Una actividad intencional realizada con compromiso (de corazón) y desarrollada colectivamente»</strong> en un entorno social real. <span class="exam-badge-link" onclick="openExamModal('test', 42)">📝 Test #43</span></li>
                    <li style="margin-bottom: 8px;"><strong style="color: #34d399;">El Proceso:</strong> Los estudiantes planifican, investigan y reflexionan sobre un tema interdisciplinar durante un tiempo determinado.</li>
                    <li style="margin-bottom: 0px;"><strong style="color: #34d399;">La Meta (El Producto Final):</strong> Esta es la clave. El método de proyectos siempre exige un <strong>producto tangible final</strong>. Los estudiantes deben entregar un informe escrito, crear algo y realizar una presentación/exposición del proyecto ante una audiencia.</li>
                  </ul>
                  </div>
                  
                  <div class="exam-paragraph">
                    <h5 style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Las 4 fases del método de proyectos de Kilpatrick</h5>
                    <ol style="margin-left: 40px; line-height: 1.6; text-align: left; margin-bottom: 0;">
                      <li style="margin-bottom: 8px;"><strong>Intención:</strong> Delimitación de metas e intereses comunes.</li>
                      <li style="margin-bottom: 8px;"><strong>Preparación / Planificación:</strong> Diseño cooperativo de actividades y búsqueda de recursos.</li>
                      <li style="margin-bottom: 8px;"><strong>Ejecución:</strong> Acción práctica y elaboración de productos reales.</li>
                      <li style="margin-bottom: 0px;"><strong>Valoración / Evaluación:</strong> Juicio crítico y análisis de los logros obtenidos de forma compartida.</li>
                    </ol>
                  </div>
                
`
      },
      {
        "id": "t3-3",
        "title": "3.3. Aprendizaje cooperativo y estilos de aprendizaje",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Fundamentos del aprendizaje cooperativo</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t3-3-p1">El <strong>aprendizaje cooperativo es un enfoque interactivo de organización del trabajo en el aula según el cual</strong> se rompe con la instrucción tradicional. El aprendizaje activo exige que los estudiantes no se limiten a escuchar pasivamente, sino que compartan, hablen y colaboren.      </p>
                  
                  <p class="exam-paragraph" id="t3-3-p2">En el modelo de <strong>Johnson & Johnson (1991) se destacan</strong> los beneficios de estructurar grupos pequeños para que los estudiantes colaboren con el fin de maximizar el aprendizaje propio y de los demás miembros.  <span class="exam-badge-link" onclick="openExamModal('test', 43)">📝 Test #44</span></p>
                  <p class="exam-paragraph" id="t3-3-p2b">Por su parte, <strong>Kagan (1994)</strong> destaca que el aprendizaje cooperativo se refiere a una serie de estrategias instruccionales que incluyen la interacción cooperativa de estudiante a estudiante, sobre algún tema, como una parte integral del proceso de aprendizaje. <span class="exam-badge-link" onclick="openExamModal('test', 44)">📝 Test #45</span></p>
                  
                  <div class="exam-paragraph" id="t3-3-p3">
                  <p id="ref-q-45" style="margin-bottom: 0.5rem; margin-top: 0;">Los 5 componentes esenciales del aprendizaje cooperativo según <strong>Johnson, Johnson y Holubec (1999)</strong> son: <span class="exam-badge-link" onclick="openExamModal('test', 45)">📝 Test #46</span></p>
                  <ul style="margin-left: 40px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li><strong>Interdependencia positiva</strong></li>
                    <li><strong>Responsabilidad individual</strong></li>
                    <li><strong>Interacción cara a cara</strong></li>
                    <li><strong>Habilidades interpersonales</strong></li>
                    <li><strong>Autoevaluación grupal</strong></li>
                  </ul>
                  </div>
                  
                  <div class="exam-paragraph" id="t3-3-p4">
                  <p id="ref-q-46" style="margin-bottom: 0.5rem; margin-top: 0;">La técnica cooperativa por excelencia es el <strong>Puzle de Aronson (Jigsaw)</strong>, diseñada para eliminar la competitividad e igualar oportunidades. Se fundamenta en la división del contenido y consta de 5 fases ineludibles: <span class="exam-badge-link" onclick="openExamModal('test', 46)">📝 Test #47</span> <span class="exam-badge-link dev" onclick="openExamModal('dev', 7)">✒️ Corta #8</span></p>
                  <ol style="margin-left: 40px; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li style="margin-bottom: 8px;"><strong>Preparación de grupos (Grupos Base):</strong> Se forman grupos heterogéneos y a cada alumno se le entrega <em>solamente</em> un fragmento o "pieza" de la información total.</li>
                    <li style="margin-bottom: 8px;"><strong>Preparación en pares:</strong> El alumno estudia inicialmente su parte para asimilar de forma individual o con un compañero temporal.</li>
                    <li style="margin-bottom: 8px;"><strong>Reunión de grupos de expertos:</strong> Los estudiantes de la clase que tienen la <em>misma pieza</em> de información se reúnen en un nuevo grupo para investigar y dominar a fondo ese fragmento.</li>
                    <li style="margin-bottom: 8px;"><strong>Retorno al grupo original:</strong> Los expertos regresan a sus Grupos Base y cada miembro enseña su parte al resto. <em>Todos enseñan y todos aprenden</em>.</li>
                    <li style="margin-bottom: 0px;"><strong>Tutorización y Evaluación:</strong> La nota final obtenida por un alumno al azar repercute en la calificación de todo el grupo, garantizando que todos se preocupen del aprendizaje colectivo.</li>
                  </ol>
                  </div>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Estilos de aprendizaje y el modelo de Kolb</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t3-3-p5">Los <strong>Estilos de Aprendizaje</strong> se definen como los rasgos cognitivos, afectivos y fisiológicos que sirven como indicadores relativamente estables de cómo los alumnos interactúan y responden a sus ambientes (Keefe, 1988).  <span class="exam-badge-link" onclick="openExamModal('test', 47)">📝 Test #48</span></p>
                  
                  <p class="exam-paragraph" id="t3-3-p6">El <strong>Modelo de Kolb</strong> distingue cuatro estilos de aprendizaje: <strong>Divergentes, Asimiladores, Convergentes y Acomodadores</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 48)">📝 Test #49</span>  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin-top: 1.2rem; font-size: 0.9rem; text-align: left; margin-bottom: 1.5rem;">
                    <thead>
                      <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: #a5b4fc;">
                        <th style="padding: 8px; width: 25%;">Estilo (Kolb)</th>
                        <th style="padding: 8px; width: 35%;">Capacidades preferidas</th>
                        <th style="padding: 8px;">Métodos idóneos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Divergentes</td>
                        <td style="padding: 8px;">Experiencia concreta y observación reflexiva. Imaginativos, consideran múltiples puntos de vista.</td>
                        <td style="padding: 8px;">Torbellino de ideas, debates, casos reales.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Asimiladores</td>
                        <td style="padding: 8px;">Conceptualización abstracta y observación reflexiva. Valoran la lógica y las teorías sistemáticas.</td>
                        <td style="padding: 8px;">Lecturas, conferencias, modelos lógicos.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Convergentes</td>
                        <td style="padding: 8px;">Conceptualización abstracta y experimentación activa. Prácticos, buscan respuestas únicas y concretas.</td>
                        <td style="padding: 8px;">Ejercicios técnicos, laboratorios, simulación.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">Acomodadores</td>
                        <td style="padding: 8px;">Experiencia concreta y experimentación activa. Adaptativos, intuitivos, aprenden por ensayo-error.</td>
                        <td style="padding: 8px;">Trabajo de campo, proyectos reales, retos.</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  
                  

<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Globalización e Individualización</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t3-3-p6b">El principio didáctico de la <strong>Globalidad</strong> o Globalización persigue el intento de ofrecer a cada alumno los materiales de aprendizaje de forma similar a como percibe la información en su vida cotidiana, de manera integrada y no fragmentada.  <span class="exam-badge-link" onclick="openExamModal('test', 49)">📝 Test #50</span></p>
                  <p class="exam-paragraph" id="t3-3-p7">El principio didáctico de la <strong>Individualización</strong> se fundamenta en que no todos aprenden al mismo ritmo ni con la misma facilidad, requiriendo adaptar los contenidos y tareas.  <span class="exam-badge-link" onclick="openExamModal('test', 50)">📝 Test #51</span></p>
                  
                  

<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Disfunciones del trabajo colaborativo y origen etimológico</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t3-3-p8">El trabajo en equipo colaborativo puede verse afectado por dinámicas negativas como el <strong>efecto gorrón (aprovecharse del trabajo ajeno)</strong>, el <strong>efecto de polarización (tijeras/Mateo)</strong> y el <strong>efecto de certidumbre</strong> (Latané). </p>
                  
                  
                
`
      }
    ]
  },
  {
    "id": "Tema 4",
    "title": "Tema 4: ABP, caso, transversal e intercultural y gamificación",
    "subtitle": "Metodologías activas e innovadoras de aprendizaje situado",
    "summary": "Este tema describe en profundidad el ABP, el estudio de casos como toma de decisiones reales, el aprendizaje mutuo de Huber (MEAM) y los fundamentos conductistas/cognitivos de la gamificación.",
    "epigrafes": [

      {
        "id": "t4-0",
        "title": "",
        "content": `

<div class="mm-wrapper" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 10px 24px; font-weight: 700; font-size: 1.1rem; background: rgba(99, 102, 241, 0.15); color: #c7d2fe; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 15px rgba(99,102,241,0.2); margin-bottom: 20px; text-align: center; width: 100%; max-width: 800px;">Métodos Activos y Resolución de Problemas</div>
  <div style="width: 100%; display: flex; justify-content: center; padding: 10px; ">
    <svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="100%" viewBox="0 0 800 440" style="font-family: system-ui, sans-serif;">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a5b4fc" />
      </marker>
      <marker id="bigArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
      </marker>
    </defs>
    
    <!-- Edges -->
    <line x1="400" y1="70" x2="400" y2="160" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    <line x1="580" y1="120" x2="490" y2="175" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    <line x1="580" y1="240" x2="490" y2="215" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    
    <line x1="200" y1="180" x2="310" y2="180" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    <line x1="110" y1="140" x2="110" y2="160" stroke="#10b981" stroke-width="1.5" />
    <line x1="110" y1="200" x2="110" y2="220" stroke="#10b981" stroke-width="1.5" />
    
    <line x1="350" y1="230" x2="320" y2="300" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    <line x1="450" y1="230" x2="480" y2="300" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)" />
    
    <line x1="385" y1="320" x2="415" y2="320" stroke="#10b981" stroke-width="3" marker-end="url(#bigArrow)" />
    <line x1="415" y1="390" x2="385" y2="390" stroke="#10b981" stroke-width="3" marker-end="url(#bigArrow)" />
    
    <!-- Nodes -->
    <g fill="rgba(30, 41, 59, 0.8)" stroke="#10b981" stroke-width="1.5">
      <rect x="20" y="100" width="180" height="40" rx="4" />
      <rect x="20" y="160" width="180" height="40" rx="4" />
      <rect x="20" y="220" width="180" height="40" rx="4" />
      
      <rect x="300" y="30" width="200" height="40" rx="4" />
      
      <rect x="580" y="100" width="160" height="40" rx="4" />
      <rect x="580" y="220" width="160" height="40" rx="4" />
      
      <rect x="310" y="160" width="180" height="70" rx="6" stroke="#10b981" stroke-width="2" fill="rgba(252, 211, 77, 0.1)" />
      
      <rect x="260" y="300" width="120" height="40" rx="4" />
      <rect x="420" y="300" width="120" height="40" rx="4" />
      
      <rect x="260" y="370" width="120" height="40" rx="4" />
      <rect x="420" y="370" width="120" height="40" rx="4" />
    </g>
    
    <!-- Texts -->
    <g fill="#f8fafc" font-size="13" text-anchor="middle">
      <text x="110" y="125">Aprendizaje transversal</text>
      <text x="110" y="185">Aprendizaje integrado</text>
      <text x="110" y="245">Aprendizaje intercultural</text>
      
      <text x="400" y="55">Apr Basado en Problemas</text>
      
      <text x="660" y="125">Método de caso</text>
      <text x="660" y="245">Gamificación</text>
      
      <text x="400" y="190" font-weight="bold" fill="#fcd34d">Métodos activos</text>
      <text x="400" y="215" font-weight="bold" fill="#fcd34d">y resolución de problemas</text>
      
      <text x="320" y="325">Incertidumbre</text>
      <text x="480" y="325">Descubrimiento</text>
      
      <text x="320" y="395">Dirigismo</text>
      <text x="480" y="395">Certidumbre</text>
    </g>
  </svg>
  </div>
</div>

                  <div class="exam-paragraph">
                    <h5 id="ref-dev-8" style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Los 7 pasos sistemáticos del ABP <span class="exam-badge-link dev" onclick="openExamModal('dev', 8)">🎯 Corta #9</span></h5>
                    <ol style="margin-left: 40px; line-height: 1.6; text-align: left; margin-bottom: 0;">
                      <li style="margin-bottom: 8px;"><strong>Explicar términos:</strong> Aclarar conceptos desconocidos.</li>
                      <li style="margin-bottom: 8px;"><strong>Definir el problema:</strong> Concretar qué se busca resolver.</li>
                      <li style="margin-bottom: 8px;"><strong>Torbellino de ideas:</strong> Analizar lanzando saberes previos.</li>
                      <li style="margin-bottom: 8px;"><strong>Inventario sistemático:</strong> Estructurar las hipótesis propuestas.</li>
                      <li style="margin-bottom: 8px;"><strong>Formular asignaciones:</strong> Definir qué información falta (objetivos de auto-estudio).</li>
                      <li style="margin-bottom: 8px;"><strong>Realizar auto-estudio:</strong> Obtener información de forma autónoma.</li>
                      <li style="margin-bottom: 0px;"><strong>Informar y evaluar:</strong> Compartir hallazgos, contrastar hipótesis y resolver la situación.</li>
                    </ol>
                  
</div>
`
      },
      {
        "id": "t4-2",
        "title": "4.2. Método del caso (estudio de casos)",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t4-2-p1">El <strong>Método del Caso</strong> consiste en plantear al alumnado situaciones reales o problemas profesionales para que apliquen sus conocimientos, diagnostiquen causas, contrasten hipótesis, reflexionen y fundamenten una toma de decisiones coherente. <span class="exam-badge-link" onclick="openExamModal('test', 53)">📝 Test #54</span></p>
                  
                  <p class="exam-paragraph" id="t4-2-p2">Según De la Herrán y Paredes (2013), un caso describe una situación social o profesional real relevante. <span class="exam-badge-link" onclick="openExamModal('test', 54)">📝 Test #55</span></p>
                  
                  <p class="exam-paragraph" id="t4-2-p3">Para que el estudio de casos sea pedagógicamente óptimo, De la Herrán y Paredes indican que <strong>su interés radica en que se presenten incompletos para generar en el estudiante la necesidad de buscar información, pensar y resolverlos</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 55)">📝 Test #56</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Estructura de un caso didáctico</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <div class="exam-paragraph">
                  <p>Un supuesto práctico de examen o caso profesional debe contar con los siguientes elementos organizativos:</p>
                  <ul style="margin-left: 40px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li><strong>Contexto:</strong> Descripción de la realidad física y socio-familiar.</li>
                    <li><strong>Problema / Reto:</strong> Conflicto de partida que requiere solución.</li>
                    <li><strong>Objetivo:</strong> La meta formativa o de intervención del pedagogo.</li>
                    <li><strong>Grupo diana:</strong> Los destinatarios directos (alumnos, familias, etc.).</li>
                    <li><strong>Institución:</strong> Escuela, CRA, centro rural, entorno social de acogida.</li>
                  </ul>
                  </div>
                
`
      },
      {
        "id": "t4-3",
        "title": "4.3. Aprendizaje transversal, integrado e intercultural",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Aprendizaje Transversal</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t4-3-p1">Medina (2016) destaca como rasgos esenciales de participación en los procesos educativos el <strong>aprendizaje activo, social y reflexivo</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 56)">📝 Test #57</span></p>
                  
                  <p class="exam-paragraph" id="t4-3-p2">El Aprendizaje Transversal se refiere a la búsqueda de temas didácticos (como educación para la paz, ecología o salud) que <strong>rebasen los límites de las materias tradicionales</strong>, ya que son problemas globales imposibles de resolver desde una asignatura aislada. <span class="exam-badge-link" onclick="openExamModal('test', 57)">📝 Test #58</span></p>
    
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">El aprendizaje transversal e integrado</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph">El currículo integrado promueve que los valores cívicos, el respeto medioambiental, la igualdad de género y la educación para la salud no se traten como materias aisladas, sino que impregnen de forma transversal todas las asignaturas y áreas formativas del centro.</p>
                  
                  <p class="exam-paragraph" id="t4-3-p3">La selección del método didáctico no es arbitraria; está condicionada por <strong>factores contextuales</strong> como el nivel madurativo del alumnado, las metas y objetivos previstos, la naturaleza del contenido y los recursos espacio-temporales.</p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Modelo de aprendizaje mutuo (MEAM) de Huber y diálogo</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <div class="exam-paragraph">
                  <p>El <strong>Modelo de Enseñanza para el Aprendizaje Mutuo (MEAM)</strong> propuesto por Huber se centra en las siguientes premisas:</p>
                  <ul style="margin-left: 40px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 0;">
                    <li><strong>Mestizaje e intercambio:</strong> La diversidad cultural en el aula no es un obstáculo, sino una fuente de enriquecimiento.</li>
                    <li><strong>Responsabilidad compartida:</strong> Los estudiantes aprenden unos de otros a través de la tutorización entre iguales.</li>
                    <li><strong>Mediación del profesor:</strong> El docente ejerce como facilitador y guía de interacciones dialógicas, promoviendo el respeto y la inclusión.</li>
                  </ul>
                  </div>
                  
                  <p class="exam-paragraph" id="t4-3-p4">El <strong>Aprendizaje por el diálogo</strong> (Ruf y Gallin) enfatiza la singularidad y diversidad del alumnado, la gestión transdisciplinar y asume la incertidumbre como motor natural del proceso de descubrimiento formativo.</p>
                
`
      },
      {
        "id": "t4-4",
        "title": "4.4. La gamificación (ludificación) en el aula",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">La gamificación (ludificación) en el aula</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t4-4-p1">La idea de integrar mecanismos y elementos similares al juego en ambientes que no son juegos es la <strong>Gamificación</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 58)">📝 Test #59</span></p>
                  <p class="exam-paragraph" id="t4-4-p2">Es el uso de mecánicas, dinámicas y pensamiento de juego en entornos no lúdicos para involucrar personas y resolver problemas. Las investigaciones demuestran que sus beneficios estadísticamente significativos radican en la <strong>mejora de motivación, socialización y el compromiso (engagement)</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 59)">📝 Test #60</span></p>
                  
                  <div class="exam-paragraph">
                    <h5 style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Diferencia conceptual en el diseño de juego</h5>
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left; margin-top: 8px;">
                      <thead>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); color: #a5b4fc;">
                          <th style="padding: 4px;">Elemento</th>
                          <th style="padding: 4px;">Ejemplos prácticos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <td style="padding: 4px; font-weight: bold;">Mecánicas (Reglas)</td>
                          <td style="padding: 4px;">Puntos (XP), niveles, retos, insignias (badges), rankings de puntuación.</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <td style="padding: 4px; font-weight: bold;">Dinámicas (Impulsos)</td>
                          <td style="padding: 4px;">Estatus, competencia amistosa, recompensa, altruismo, autoexpresión.</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                          <td style="padding: 4px; font-weight: bold;">Estética (Experiencia)</td>
                          <td style="padding: 4px;">Diseño visual inmersivo, narrativa del juego, diversión y feedback sonoro.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                
`
      }
    ]
  },
  {
    "id": "Tema 6",
    "title": "Tema 6: Diseño curricular y fases de planificación",
    "subtitle": "Objetivos de formación, niveles de concreción y contenidos",
    "summary": "Este tema profundiza en los elementos curriculares elementales (objetivos, competencias, contenidos y evaluación), destacando la selección, la secuenciación y las normas de Mauri.",
    "mapHTML": `
<div class="mm-wrapper" style="position: relative; font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 1.5rem 0; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2); overflow-x: auto;">
  <div style="border: 1px solid #6366f1; border-radius: 6px; padding: 10px 24px; font-weight: 700; font-size: 1.1rem; background: rgba(99, 102, 241, 0.15); color: #c7d2fe; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 0 15px rgba(99,102,241,0.2); margin-bottom: 20px; text-align: center; width: 100%; max-width: 800px;">Elementos Básicos del Diseño Curricular</div>
  <div style="width: 100%; display: flex; justify-content: center; padding: 10px;">
    <svg class="zoomable-svg" onclick="if(window.openZoomModal) window.openZoomModal(this.outerHTML)" style="cursor: zoom-in; width="100%" viewBox="0 0 900 500" style="font-family: system-ui, sans-serif;">
      <defs>
        <filter id="neonGlow6" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#312e81;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e1b4b;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Connecting lines -->
      <line x1="450" y1="250" x2="450" y2="80" stroke="#10b981" stroke-width="2.5" />
      <line x1="450" y1="250" x2="200" y2="150" stroke="#10b981" stroke-width="2.5" />
      <line x1="450" y1="250" x2="700" y2="150" stroke="#10b981" stroke-width="2.5" />
      <line x1="450" y1="250" x2="280" y2="380" stroke="#10b981" stroke-width="2.5" />
      <line x1="450" y1="250" x2="620" y2="380" stroke="#10b981" stroke-width="2.5" />

      <!-- Center node -->
      <circle cx="450" cy="250" r="90" fill="url(#grad6)" stroke="#10b981" stroke-width="4" filter="url(#neonGlow6)"/>
      <text x="450" y="240" fill="#e0e7ff" font-weight="bold" font-size="22" text-anchor="middle">Diseño</text>
      <text x="450" y="270" fill="#e0e7ff" font-weight="bold" font-size="22" text-anchor="middle">Curricular</text>

      <!-- Outer nodes -->
      <g transform="translate(450, 80)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="0" y="5" fill="#f8fafc" font-weight="600" font-size="16" text-anchor="middle">Objetivos</text>
      </g>
      
      <g transform="translate(200, 150)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="0" y="5" fill="#f8fafc" font-weight="600" font-size="16" text-anchor="middle">Contenidos</text>
      </g>

      <g transform="translate(700, 150)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="0" y="5" fill="#f8fafc" font-weight="600" font-size="16" text-anchor="middle">Competencias</text>
      </g>

      <g transform="translate(280, 380)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="0" y="5" fill="#f8fafc" font-weight="600" font-size="16" text-anchor="middle">Metodología</text>
      </g>

      <g transform="translate(620, 380)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="0" y="5" fill="#f8fafc" font-weight="600" font-size="16" text-anchor="middle">Evaluación</text>
      </g>
    </svg>
  </div>
</div>`,
    "epigrafes": [
      {
        "id": "t6-1",
        "title": "6.1. Objetivos curriculares de aprendizaje",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t6-1-p1" style="text-align: left;">Los objetivos curriculares representan las metas de aprendizaje que queremos alcanzar con la acción formativa y suponen la base para seleccionar/secuenciar contenidos y evaluar el proceso. Constituyen el <strong>"para qué"</strong> de la programación. <span class="exam-badge-link" onclick="openExamModal('test', 60)">📝 Test #61</span></p>
                  
                  <div class="highlight-block" style="padding: 1.2rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #fcd34d;">
                    <h5 style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Requisitos de formulación de objetivos</h5>
                    <p style="margin-bottom: 8px;">Para dar estatus de racionalidad a la práctica instructiva, los objetivos deben ser:</p>
                    <ul style="margin-left: 30px; list-style-type: disc; text-align: left;">
                      <li style="text-align: left;"><strong>Claros y concretos:</strong> Evitar enunciados ambiguos que den pie a libres interpretaciones.</li>
                      <li style="text-align: left;"><strong>Medibles:</strong> Formulados de forma que describan un resultado alcanzable y evaluable.</li>
                      <li style="text-align: left;"><strong>Reales:</strong> Referidos a procesos de aprendizaje observables en el comportamiento del discente.</li>
                      <li style="text-align: left;"><strong>Redactados en infinitivo:</strong> (ej. <strong>analizar, distinguir, programar, aplicar</strong>).</li>
                    </ul>
                  </div>

                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Concepto de currículo y tipos (Posner)</h4>
                  <div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p id="ref-q-61" class="exam-paragraph">Etimológicamente del latín "pista de carreras", el currículo engloba competencias, objetivos, contenidos y evaluación. Posner (1998) identifica cinco tipos concurrentes: <span class="exam-badge-link" onclick="openExamModal('test', 61)">📝 Test #62</span></p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li style="text-align: left;"><strong>Oficial o Formal:</strong> El plan escrito y explícito legible en los documentos curriculares.</li>
                    <li style="text-align: left;"><strong>Real o Práctico:</strong> Las acciones del docente en el aula durante el proceso instructivo.</li>
                    <li style="text-align: left;"><strong>Realizado:</strong> Los logros reales que los alumnos alcanzan de manera duradera.</li>
                    <li style="text-align: left;"><strong>Nulo o Potencial:</strong> Aquellos temas valiosos que han sido deliberadamente excluidos de la programación.</li>
                    <li style="text-align: left;"><strong>Oculto:</strong> Las actitudes y valores transmitidos de forma implícita e informal por los profesores y modelos en la escuela.</li>
                  </ul>
                  `
      },
      {
        "id": "t6-2",
        "title": "6.2. Niveles de concreción curricular",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t6-2-p1" style="text-align: left;">La <strong>planificación del proceso de E-A</strong> didáctica se organiza jerárquicamente a través de lo que denominamos <strong>niveles de concreción</strong>, distinguiéndose claramente entre: las <strong>finalidades</strong> de etapa (1º nivel - macro, fijadas por la administración), los <strong>objetivos generales</strong> de área (2º nivel - meso, fijados por el centro), y los <strong>objetivos específicos o didácticos</strong> de aula (3º nivel - micro, fijados por el profesor). <span class="exam-badge-link" onclick="openExamModal('test', 62)">📝 Test #63</span> <span class="exam-badge-link" onclick="openExamModal('test', 63)">📝 Test #64</span></p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin-top: 1.2rem; font-size: 0.9rem; text-align: left; margin-bottom: 1.5rem;">
                    <thead>
                      <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: #a5b4fc;">
                        <th style="padding: 8px; width: 25%;">Nivel de Concreción</th>
                        <th style="padding: 8px; width: 35%;">Ámbito y Responsabilidad</th>
                        <th style="padding: 8px;">Instrumento principal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">1º Nivel (Macro)</td>
                        <td style="padding: 8px;">Administración educativa. Fija directrices orientativas y políticas generales de la etapa.</td>
                        <td style="padding: 8px;">Diseños curriculares base / Plan de estudios (Finalidades).</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">2º Nivel (Meso)</td>
                        <td style="padding: 8px;">Centro educativo. Contextualización adaptada al entorno socio-ambiental y recursos del colegio.</td>
                        <td style="padding: 8px;">Proyecto Curricular / Plan docente (Objetivos generales).</td>
                      </tr>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 8px; font-weight: bold;">3º Nivel (Micro)</td>
                        <td style="padding: 8px;">Profesorado. Diseño concreto aplicable a un grupo específico de alumnos y tiempo delimitado.</td>
                        <td style="padding: 8px;">Programación de aula / Unidad Didáctica (Objetivos específicos/didácticos).</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">La Unidad Didáctica y Centros de Interés</h4>
                  <div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p><strong>La Unidad Didáctica</strong> se concibe como una unidad de trabajo completa y articulada relativa a un proceso de enseñanza-aprendizaje en el aula. Debe contener objetivos didácticos vinculados a competencias, contenidos específicos de aprendizaje, secuencia temporal de tareas y métodos de evaluación.</p>
                  
                  <p>Los <strong>Centros de Interés (Ovide Decroly)</strong> articulan el aprendizaje en torno a las necesidades infantiles (fisiológicas, psicológicas, sociales) con el lema <strong>"la escuela para la vida y por la vida"</strong>. Se apoya en tres principios secuenciales:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li style="text-align: left;"><strong>Observación:</strong> Contacto directo e intuitivo del niño con los fenómenos de la realidad.</li>
                    <li style="text-align: left;"><strong>Asociación:</strong> Relación espacial, temporal y causal de los hechos observados.</li>
                    <li style="text-align: left;"><strong>Expresión:</strong> Comunicación de los aprendizajes de forma oral, gráfica, artística o escrita (incluye el juego).</li>
                  </ul>
                  <p>Decroly sustenta el <strong>Paidocentrismo</strong> (el niño como eje), la <strong>Globalización</strong> (percepciones globales - sincretismo de la Gestalt), la <strong>Individualización</strong> de ritmos de aprendizaje y el principio de <strong>Actividad</strong> natural.</p>
                  `
      },
      {
        "id": "t6-3",
        "title": "6.3. Selección y secuenciación de contenidos",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t6-3-p1" style="text-align: left;">La <strong>Selección de Contenidos y los elementos curriculares</strong> deben ser coherentes y estar relacionados entre sí. Los contenidos responden al <strong>"qué enseñar"</strong> y aluden a dos procesos científicos estrechamente vinculados: la <strong>Selección</strong> (guiada por criterios de pertinencia, actualidad, eficiencia, eficacia y relevancia) y la <strong>Secuenciación</strong> (dosificar la dificultad y graduar el contenido procediendo siempre de lo simple a lo complejo en el calendario escolar). <span class="exam-badge-link dev" onclick="openExamModal('dev', 9)">🎯 Corta #10</span> <span class="exam-badge-link" onclick="openExamModal('test', 64)">📝 Test #65</span> </p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Las tres tipologías de contenidos</h4>
                  <div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>Para lograr una formación escolar integral y equilibrada, el docente debe interrelacionar tres dominios:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 1.5rem; text-align: left;">
                    <li style="text-align: left;"><strong>Contenidos Conceptuales (Saber):</strong> Conocimiento declarativo, hechos, conceptos, principios y teorías.</li>
                    <li style="text-align: left;"><strong>Contenidos Procedimentales (Saber Hacer):</strong> Habilidades, destrezas, técnicas y estrategias de resolución práctica.</li>
                    <li style="text-align: left;"><strong>Contenidos Actitudinales (Saber Ser/Estar):</strong> Valores, actitudes, compromisos éticos, socialización y civismo.</li>
                  </ul>
                  

                  <div class="highlight-block" style="padding: 1.2rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #fcd34d;">
                    <h5 style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Las 12 normas de secuenciación de Mauri (1990)</h5>
                    <ol style="margin-left: 30px; line-height: 1.5; font-size: 0.88rem; text-align: left;">
                      <li style="text-align: left;">El nivel madurativo de los alumnos.</li>
                      <li style="text-align: left;">Las ideas previas de los estudiantes.</li>
                      <li style="text-align: left;">Los diseños curriculares oficiales.</li>
                      <li style="text-align: left;">La integración equilibrada de todos los tipos de contenidos (conceptual, procedimental, actitudinal).</li>
                      <li style="text-align: left;">La estructura interna de cada materia o disciplina.</li>
                      <li style="text-align: left;">La selección de contenido como línea conductora de las secuencias relacionadas.</li>
                      <li style="text-align: left;">La secuenciación de las secuencias relacionadas.</li>
                      <li style="text-align: left;">La delimitación de las ideas-clave de cada secuencia.</li>
                      <li style="text-align: left;">La continuidad entre los eslabones de la secuencia didáctica.</li>
                      <li style="text-align: left;">El grado de progresión entre los eslabones de la secuencia (de menor a mayor dificultad).</li>
                      <li style="text-align: left;">La elaboración detallada de cada secuencia concreta.</li>
                      <li style="text-align: left;">La evaluación, reelaboración y adecuación continua de cada secuencia en función de los resultados obtenidos.</li>
                    </ol>
                  </div>
                  
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Taxonomías de aprendizaje curriculares</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>Las taxonomías favorecen la racionalización y ofrecen un mapa estructural del proceso educativo. La enseñanza debe trabajarse de manera flexible e integrar diferentes taxonomías:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li id="ref-q-65" style="text-align: left;" class="exam-paragraph"><strong>Taxonomía de Bloom (1956 - Dominio Cognitivo):</strong> <span class="exam-badge-link" onclick="openExamModal('test', 65)">📝 Test #66</span>
                      <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px; text-align: left;">
                        <li style="text-align: left;"><strong>Conocimiento:</strong> Memorizar e identificar hechos o conceptos (definir, enumerar).</li>
                        <li style="text-align: left;"><strong>Comprensión:</strong> Entender y captar el significado (describir, explicar).</li>
                        <li style="text-align: left;"><strong>Aplicación:</strong> Utilizar información en nuevas situaciones para resolver problemas (demostrar, resolver).</li>
                        <li style="text-align: left;"><strong>Análisis:</strong> Separar información e identificar causas e interrelaciones (diferenciar, contrastar).</li>
                        <li style="text-align: left;"><strong>Síntesis:</strong> Diseñar o formular nuevas estructuras a partir de elementos (crear, generar).</li>
                        <li style="text-align: left;"><strong>Evaluación:</strong> Emitir juicios valorando el mérito del material (concluir, justificar).</li>
                      </ul>
                    </li>
                    <li style="margin-top: 8px; text-align: left;" class="exam-paragraph"><strong>Taxonomía del Dominio Procedimental (Medina):</strong>
                      <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px; text-align: left;">
                        <li style="text-align: left;"><strong>Proyectar:</strong> Idear o proponer el plan y medios (planear, inventar).</li>
                        <li style="text-align: left;"><strong>Calcular:</strong> Meditar y reflexionar (deducir, considerar).</li>
                        <li style="text-align: left;"><strong>Reconstruir:</strong> Unir ideas para completar conocimientos.</li>
                        <li style="text-align: left;"><strong>Demostrar:</strong> Probar y verificar (corroborar, patentizar).</li>
                      </ul>
                    </li>
                    <li id="ref-q-66" style="margin-top: 8px; text-align: left;" class="exam-paragraph"><strong>Taxonomía del Dominio Actitudinal (Marcelo, 1977):</strong> <span class="exam-badge-link" onclick="openExamModal('test', 66)">📝 Test #67</span>
                      <ul style="margin-left: 30px; list-style-type: circle; margin-top: 4px; text-align: left;">
                        <li style="text-align: left;"><strong>Percibir:</strong> Tomar conciencia e identificarse.</li>
                        <li style="text-align: left;"><strong>Responder:</strong> Reaccionar con motivación e interés.</li>
                        <li style="text-align: left;"><strong>Valorar:</strong> Apreciar y aceptar el valor de las cosas.</li>
                        <li style="text-align: left;"><strong>Implicarse:</strong> Formar parte del esfuerzo escolar.</li>
                        <li style="text-align: left;"><strong>Comprometerse:</strong> Responsabilizarse y contraer obligaciones morales.</li>
                        <li style="text-align: left;"><strong>Participar:</strong> Colaborar y compartir con otros.</li>
                        <li style="text-align: left;"><strong>Tener iniciativa:</strong> Proponer y adquirir liderazgo.</li>
                      </ul>
                    </li>
                  </ul>
</div>

                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Evaluación de la programación (Medina y Mata)</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p>La evaluación es un proceso de control de calidad para ajustar las decisiones docentes. Debe evaluar el rendimiento, la programación y la práctica del profesor en tres fases:</p>
                  <ol style="margin-left: 30px; line-height: 1.6; text-align: left;">
                    <li style="text-align: left;"><strong>Diseño de la programación:</strong> Coherencia interna, flexibilidad y funcionalidad.</li>
                    <li style="text-align: left;"><strong>Desarrollo de la programación:</strong> Ajustes reflexivos y continuos de la ayuda didáctica en vivo.</li>
                    <li style="text-align: left;"><strong>Impacto en los alumnos:</strong> Análisis del desarrollo de capacidades y competencias finales.</li>
                  </ol>
                  
                  <p><strong>Tipos de evaluación en el aula:</strong></p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li style="text-align: left;"><strong>Evaluación Inicial o Diagnóstica:</strong> Obtener información familiar, médica o de observación del alumno para ajustar la docencia al ritmo de partida.</li>
                    <li style="text-align: left;"><strong>Evaluación Formativa:</strong> Verdadera evaluación del proceso para conocer progresos y dificultades del discente y reajustar los métodos durante la marcha.</li>
                    <li id="ref-q-67" style="text-align: left;" class="exam-paragraph"><strong>Evaluación Sumativa o Final:</strong> Control e informe final del resultado de aprendizaje asimilado tras culminar un ciclo. <span class="exam-badge-link" onclick="openExamModal('test', 67)">📝 Test #68</span></li>
                  </ul>
                  
                  <p><strong>Instrumentos de evaluación:</strong></p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li style="text-align: left;"><strong>Observación sistemática (Anguera, 1991):</strong> Notas de campo, listas de control, escalas de estimación y análisis de producciones escolares.</li>
                    <li style="text-align: left;"><strong>Entrevista:</strong> Conversación intencional para recoger datos (Estructurada, Semiestructurada, Abierta).</li>
                    <li style="text-align: left;"><strong>Exámenes:</strong> Orales (sintetizan, fluidez verbal) o Escritos (de desarrollo/redacción o pruebas objetivas/tipo test que descartan la subjetividad del evaluador).</li>
                  </ul>
</div>
                  
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Elementos del diseño curricular</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t6-3-p4" style="text-align: left;">Mientras los contenidos son el "qué" y los objetivos el "para qué", la <strong>metodología didáctica</strong> y sus estrategias definen incuestionablemente el <strong>"cómo enseñar"</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 68)">📝 Test #69</span></p>

                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Desarrollo curricular e interdisciplinariedad</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t6-3-p2" style="text-align: left;"><strong>Lawrence Stenhouse</strong> es el principal impulsor de la concepción procesual del currículo, donde el docente actúa como investigador y el <strong>desarrollo curricular</strong> se entiende como un proceso continuo de indagación práctica. </p>
                  
                  <p class="exam-paragraph" id="t6-3-p3" style="text-align: left;">La <strong>interdisciplinariedad</strong> supone la agrupación y vertebración de los contenidos curriculares en torno a centros de interés o proyectos de investigación comunes, superando la tradicional fragmentación disciplinar. </p>
                
`
      }
    ]
  },
  {
    "id": "Tema 7",
    "title": "Tema 7: Innovación didáctica y modelos de mejora",
    "subtitle": "Cambio escolar, flipped classroom y competencias digitales",
    "summary": "Este tema examina las corrientes y modelos de la innovación didáctica, abordando la mejora de la escuela, metodologías de Clase Invertida, realidad aumentada y el marco de competencias UNESCO.",
    "mapHTML": `<div class=\"mm-wrapper\" style=\"font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: #e2e8f0; width: 100%; margin: 10px auto; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 24px; background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2);\">
  <!-- Titulo -->
  <div style=\"border: 1px solid #6366f1; border-radius: 6px; padding: 10px 30px; font-weight: 600; font-size: 1.05rem; background: rgba(99, 102, 241, 0.1); color: #c7d2fe; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(99,102,241,0.2);\">Metodología y Tecnologías emergentes</div>
  <div style=\"width: 100%; display: flex; justify-content: center; padding: 10px; \">
    <svg width=\"100%\" viewBox=\"0 0 900 400\" style=\"font-family: system-ui, sans-serif;\">
      <defs>
        <marker id=\"arrowT7\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">
          <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\" />
        </marker>
      </defs>

      <!-- Connections from Innovacion to TPACK -->
      <line x1=\"220\" y1=\"200\" x2=\"330\" y2=\"200\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      
      <!-- TPACK to Metodologias to Aprendizaje -->
      <line x1=\"440\" y1=\"120\" x2=\"440\" y2=\"160\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      <line x1=\"440\" y1=\"240\" x2=\"440\" y2=\"280\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />

      <!-- Center to Right Column -->
      <path d=\"M 550 200 L 610 200 L 610 60 L 640 60\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      <path d=\"M 610 200 L 610 130 L 640 130\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      <path d=\"M 550 200 L 640 200\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      <path d=\"M 610 200 L 610 270 L 640 270\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />
      <path d=\"M 610 200 L 610 340 L 640 340\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrowT7)\" />

      <!-- Columna Izquierda -->
      <rect x=\"60\" y=\"170\" width=\"160\" height=\"60\" rx=\"8\" fill=\"rgba(30,41,59,0.9)\" stroke=\"#10b981\" stroke-width=\"2\" />
      <text x=\"140\" y=\"195\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">Innovación</text>
      <text x=\"140\" y=\"215\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">Educativa</text>

      <!-- Columna Central -->
      <rect x=\"340\" y=\"60\" width=\"200\" height=\"60\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"440\" y=\"85\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\">Modelo</text>
      <text x=\"440\" y=\"105\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\">TPACK</text>

      <rect x=\"330\" y=\"170\" width=\"220\" height=\"70\" rx=\"8\" fill=\"rgba(30,41,59,0.9)\" stroke=\"#10b981\" stroke-width=\"2\" />
      <text x=\"440\" y=\"200\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"16\" font-weight=\"bold\">Enfoques Metodológicos</text>
      <text x=\"440\" y=\"220\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"16\" font-weight=\"bold\">Activos</text>

      <rect x=\"340\" y=\"280\" width=\"200\" height=\"60\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"440\" y=\"305\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\">Aprendizaje centrado</text>
      <text x=\"440\" y=\"325\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\">en el alumno</text>

      <!-- Columna Derecha -->
      <rect x=\"650\" y=\"35\" width=\"220\" height=\"50\" rx=\"6\" fill=\"rgba(15,23,42,0.8)\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"760\" y=\"55\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">Clase invertida</text>
      <text x=\"760\" y=\"75\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"12\">(Flipped Classroom)</text>

      <rect x=\"650\" y=\"105\" width=\"220\" height=\"50\" rx=\"6\" fill=\"rgba(15,23,42,0.8)\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"760\" y=\"125\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">Juegos y Ludificación</text>
      <text x=\"760\" y=\"145\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"12\">(Gamificación)</text>

      <rect x=\"650\" y=\"175\" width=\"220\" height=\"50\" rx=\"6\" fill=\"rgba(15,23,42,0.8)\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"760\" y=\"195\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">Creciente ubicuidad de</text>
      <text x=\"760\" y=\"215\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">las redes sociales</text>

      <rect x=\"650\" y=\"245\" width=\"220\" height=\"50\" rx=\"6\" fill=\"rgba(15,23,42,0.8)\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"760\" y=\"265\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">Integración apr. en línea,</text>
      <text x=\"760\" y=\"285\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">híbrido y colaborativo</text>

      <rect x=\"650\" y=\"315\" width=\"220\" height=\"50\" rx=\"6\" fill=\"rgba(15,23,42,0.8)\" stroke=\"#10b981\" stroke-width=\"1\" />
      <text x=\"760\" y=\"335\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"500\">Análisis de Aprendizaje</text>
      <text x=\"760\" y=\"355\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"12\">(Learning analytics)</text>
    </svg>
  </div></div>
</div>
`,
    "epigrafes": [
      {
        "id": "t7-1",
        "title": "7.1. Concepto de innovación didáctica",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t7-1-p1">La innovación didáctica es un proceso sistemático e intencional orientado a <strong>mejorar los procesos de enseñanza-aprendizaje</strong> y superar las prácticas mecánicas o resistentes al cambio en las escuelas. <span class="exam-badge-link dev" onclick="openExamModal('dev', 10)">🎯 Corta #11</span> <span class="exam-badge-link" onclick="openExamModal('test', 69)">📝 Test #70</span></p>
                  
                  <p class="exam-paragraph" id="t7-1-p2">Según los manuales de cambio escolar, el concepto <strong>"mejora de la acción educativa docente" no se clasifica</strong> formalmente como un modelo estructurado de innovación de centro, tratándose de un distractor terminológico común en el examen. <span class="exam-badge-link" onclick="openExamModal('test', 70)">📝 Test #71</span></p>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Criterios para una innovación eficaz</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p>La innovación curricular debe alejarse de la mera introducción de modas y cimentarse sobre bases pedagógicas:</p>
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Sostenibilidad:</strong> El cambio debe durar en el tiempo y no limitarse a una intervención fugaz.</li>
                    <li><strong>Colaboración:</strong> Debe implicar activamente a toda la comunidad escolar (directivos, profesores, familias).</li>
                    <li><strong>Evaluación:</strong> Es necesario medir el impacto formativo real que el cambio genera en el alumnado.</li>
                    <li><strong>Foco pedagógico:</strong> La tecnología u otros recursos son medios, la mejora del aprendizaje de los alumnos es siempre la meta.</li>
                  </ul>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Resistencia al cambio y oposición</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t7-1-p3">José Tejada (1998) analiza los comportamientos frente a la innovación educativa, identificando cuatro modalidades clásicas de resistencia u oposición al cambio: el <strong>obstáculo</strong>, el <strong>rechazo</strong>, el <strong>bloqueo</strong> y la <strong>resistencia</strong>.</p>
                
`
      },
      {
        "id": "t7-2",
        "title": "7.2. Modelos de innovación educativa",
        "content": `

<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">
                  <p class="exam-paragraph" id="t7-2-p1">La literatura de cambio escolar formaliza diferentes modelos de innovación a nivel de centro educativo, destacando el <strong>Modelo de Mejora de la Escuela</strong>, el <strong>Modelo Intercultural</strong>, y otros enfoques organizativos.</p>
                  
                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left;">
                    <li><strong>Modelo de Mejora de la Escuela (School Improvement):</strong> <p class="exam-paragraph" id="t7-2-p2">El <strong>Modelo de Mejora de la Escuela</strong> (School Improvement), definido por Kenneth Leithwood y sus colaboradores, se asienta sobre el liderazgo instructivo compartido, el cambio cultural del centro y la gestión institucional eficaz. <span class="exam-badge-link" onclick="openExamModal('test', 71)">📝 Test #72</span></p></li>
                    <li><strong>Modelo Intercultural:</strong> <p class="exam-paragraph" id="t7-2-p3">El <strong>Modelo Intercultural</strong> concibe la <strong>diversidad y el enriquecimiento</strong> mutuo como motores de cambio e innovación, valorando el mestizaje cultural en el aula. <span class="exam-badge-link" onclick="openExamModal('test', 72)">📝 Test #73</span></p></li>
                    <li><strong>Modelo de Redes (y colaboración):</strong> <p class="exam-paragraph" id="t7-2-p5">El <strong>Modelo de Redes</strong> enfatiza la conexión interinstitucional y el intercambio de buenas prácticas docentes, complementando así otros enfoques como el modelo cultural o el de Leithwood. <span class="exam-badge-link" onclick="openExamModal('test', 73)">📝 Test #74</span></p></li>
                  </ul>
                  
                  <div class="highlight-block" style="padding: 1.2rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                    <h5 style="margin-top: 0; margin-bottom: 0.5rem; color: #fcd34d; font-weight: 700;">Otros modelos organizativos de innovación</h5>
                    <p style="margin-bottom: 4px;"><strong>Modelo de Investigación en la Acción:</strong> El propio docente ejerce de investigador en su aula, detectando necesidades y aplicando ciclos continuos de planificación, acción, observación y reflexión pedagógica.</p>
                  </div>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Perspectivas teóricas de la innovación didáctica</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t7-2-p4">Ernest House (1988) tipifica tres grandes perspectivas teóricas para comprender la innovación didáctica: la <strong>perspectiva tecnológica</strong> (racional-eficiente), la <strong>perspectiva cultural</strong> (valores y contextos) y la <strong>perspectiva política</strong> (poder y negociación).</p>
                
`
      },
      {
        "id": "t7-3",
        "title": "7.3. Metodologías y marcos tecnológicos",
        "content": `
                  <h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem;">Metodologías activas mediadas por tecnología</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <ul style="margin-left: 30px; list-style-type: disc; line-height: 1.6; text-align: left; margin-bottom: 1.5rem;">
                    <li><strong>Flipped Classroom (Clase Invertida):</strong> <p class="exam-paragraph" id="t7-3-p1">La <strong>Flipped Classroom (Clase Invertida)</strong> es una metodología en la que <strong>se reorganiza cómo se emplea el tiempo dentro y fuera del aula</strong>, invirtiendo el protagonismo de educadores y estudiantes. El alumno estudia la teoría en casa mediante soportes digitales y la clase presencial se dedica al aprendizaje activo.  <span class="exam-badge-link dev" onclick="openExamModal('dev', 11)">🎯 Corta #12</span> <span class="exam-badge-link" onclick="openExamModal('test', 74)">📝 Test #75</span></p></li>
                    <li><strong>Realidad Aumentada (RA):</strong> <p class="exam-paragraph" id="t7-3-p2">La <strong>Realidad Aumentada</strong> se caracteriza por la premisa de <strong>fusionar la visión directa o indirecta del entorno físico o mundo real</strong> con elementos virtuales informativos superpuestos (Azuma, 1997). <span class="exam-badge-link" onclick="openExamModal('test', 75)">📝 Test #76</span></p></li>
                    <li><strong>Redes Sociales y Analíticas de Aprendizaje:</strong> <p class="exam-paragraph" id="t7-3-p5">Otras tecnologías emergentes con gran impacto son el uso pedagógico de las <strong>Redes Sociales</strong> y las <strong>Analíticas de Aprendizaje (Learning Analytics)</strong>, herramientas que están transformando la recopilación de datos y la interacción en la educación actual. <span class="exam-badge-link" onclick="openExamModal('test', 76)">📝 Test #77</span></p></li>
                  </ul>
                  
                  
</div>
<h4 style="color: #a5b4fc; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;">Marcos conceptuales de competencias TIC</h4>
<div class="blue-line-section" style="border-left: 3px solid #6366f1; padding-left: 1rem; margin-top: 1rem; margin-bottom: 1.5rem;">

                  <p class="exam-paragraph" id="t7-3-p3">El <strong>Modelo TPACK</strong> exige que el docente interrelacione de manera inseparable tres tipos de conocimientos para una enseñanza eficaz con tecnología: <strong>Disciplinar (Contenido), Tecnológico y Pedagógico</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 78)">📝 Test #79</span></p>
                  
                  <div class="highlight-block" style="padding: 1rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
                    <p style="margin: 0; font-size: 0.88rem; line-height: 1.5;">El <strong>Modelo TPACK</strong> (Mishra y Koehler, 2006) describe la intersección de tres saberes básicos para el docente digital: <strong>Contenido didáctico</strong> (disciplina), <strong>Pedagogía</strong> (metodologías eficaces) y <strong>Tecnología</strong> (herramientas digitales).</p>
                  </div>
                  
                  <p class="exam-paragraph" id="t7-3-p4">El modelo de competencias docentes TIC de la <strong>UNESCO (2018)</strong> jerarquiza la formación tecnológica en tres niveles ascendentes: <strong>Adquisición de conocimiento, Profundización del conocimiento y Creación de conocimiento</strong>. <span class="exam-badge-link" onclick="openExamModal('test', 77)">📝 Test #78</span></p>
                  
                  <p style="margin-top: 10px;">Los tres niveles ascendentes de la UNESCO (2018) orientan la capacitación del docente desde la alfabetización técnica básica (adquisición) hasta la innovación social transformadora de aula (creación).</p>
                
`
      }
    ]
  }
];
