window.addEventListener('load', function() {
  var columRight = document.getElementById('colum-right');
  columRight.setAttribute('class', 'style-none');
  // EVENTO LIMA 2016-2
  var lima20162 = document.getElementById('lima20162');
  lima20162.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.LIM['2016-2'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-peru');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.LIM['2016-2'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.LIM['2016-2'].students[i].sprints[0].score.tech + data.LIM['2016-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      }

      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');

      if (data.LIM['2016-2'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.LIM['2016-2'].students[i].sprints[0].score.hse + data.LIM['2016-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      }

      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA LIMA 2017-1
  var lima20171 = document.getElementById('lima20171');
  lima20171.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.LIM['2017-1'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-peru');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.LIM['2017-1'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.LIM['2017-1'].students[i].sprints[0].score.tech + data.LIM['2017-1'].students[i].sprints[1].score.tech + data.LIM['2017-1'].students[i].sprints[2].score.tech + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.LIM['2017-1'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.LIM['2017-1'].students[i].sprints[0].score.hse + data.LIM['2017-1'].students[i].sprints[1].score.hse + data.LIM['2017-1'].students[i].sprints[2].score.hse + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA LIMA 2017-2
  var lima20172 = document.getElementById('lima20172');
  lima20172.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.LIM['2017-2'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-peru');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.LIM['2017-2'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.LIM['2017-2'].students[i].sprints[0].score.tech + data.LIM['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.LIM['2017-2'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.LIM['2017-2'].students[i].sprints[0].score.hse + data.LIM['2017-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO AREQUIPA 2016-2
  var arequipa20162 = document.getElementById('arequipa20162');
  arequipa20162.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.AQP['2016-2'].students.length;i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-peru');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.AQP['2016-2'].students[i].sprints[0].score.tech + data.AQP['2016-2'].students[i].sprints[1].score.tech + data.AQP['2016-2'].students[i].sprints[2].score.tech + data.AQP['2016-2'].students[i].sprints[3].score.tech) / 4 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.AQP['2016-2'].students[i].sprints[0].score.hse + data.AQP['2016-2'].students[i].sprints[1].score.hse + data.AQP['2016-2'].students[i].sprints[2].score.hse + data.AQP['2016-2'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO AREQUIPA 2017-1
  var arequipa20171 = document.getElementById('arequipa20171');
  arequipa20171.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.AQP['2017-1'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-peru');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.AQP['2017-1'].students[i].sprints[0].score.tech + data.AQP['2017-1'].students[i].sprints[1].score.tech + data.AQP['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.AQP['2017-1'].students[i].sprints[0].score.hse + data.AQP['2017-1'].students[i].sprints[1].score.hse + data.AQP['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA SANTIAGO DE CHILE 2016-2
  var chile20162 = document.getElementById('chile20162');
  chile20162.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.SCL['2016-2'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-chile');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.SCL['2016-2'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.SCL['2016-2'].students[i].sprints[0].score.tech + data.SCL['2016-2'].students[i].sprints[1].score.tech + data.SCL['2016-2'].students[i].sprints[2].score.tech + data.SCL['2016-2'].students[i].sprints[3].score.tech) / 4 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.SCL['2016-2'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.SCL['2016-2'].students[i].sprints[0].score.hse + data.SCL['2016-2'].students[i].sprints[1].score.hse + data.SCL['2016-2'].students[i].sprints[2].score.hse + data.SCL['2016-2'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA SANTIAGO DE CHILE 2017-1
  var chile20171 = document.getElementById('chile20171');
  chile20171.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.SCL['2017-1'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-chile');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.SCL['2017-1'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.SCL['2017-1'].students[i].sprints[0].score.tech + data.SCL['2017-1'].students[i].sprints[1].score.tech + data.SCL['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.SCL['2017-1'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.SCL['2017-1'].students[i].sprints[0].score.hse + data.SCL['2017-1'].students[i].sprints[1].score.hse + data.SCL['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA SANTIAGO DE CHILE 2017-2
  var chile20172 = document.getElementById('chile20172');
  chile20172.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.SCL['2017-2'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-chile');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.SCL['2017-2'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.SCL['2017-2'].students[i].sprints[0].score.tech + data.SCL['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.SCL['2017-2'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.SCL['2017-2'].students[i].sprints[0].score.hse + data.SCL['2017-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA CIUDAD DE MEXICO 2017-1
  var mexico20171 = document.getElementById('mexico20171');
  mexico20171.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.CDMX['2017-1'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-mexico');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.CDMX['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.CDMX['2017-1'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.CDMX['2017-1'].students[i].sprints[0].score.tech + data.CDMX['2017-1'].students[i].sprints[1].score.tech + data.CDMX['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.CDMX['2017-1'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.CDMX['2017-1'].students[i].sprints[0].score.hse + data.CDMX['2017-1'].students[i].sprints[1].score.hse + data.CDMX['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
  // EVENTO PARA CIUDAD DE MEXICO 2017-2
  var mexico20172 = document.getElementById('mexico20172');
  mexico20172.addEventListener('click', function(event) {
    columRight.innerHTML = '' ;
    columRight.removeAttribute('class', 'style-none');
    columRight.setAttribute('class', 'colum-right');

    for (i = 0; i < data.CDMX['2017-2'].students.length; i++) {
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');

      var figure = document.createElement('div');
      figure.setAttribute('class', 'figure-mexico');
      addStudent.appendChild(figure);

      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.CDMX['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      if (data.CDMX['2017-2'].students[i].sprints.length > 0) {
        addTech.textContent = ((data.CDMX['2017-2'].students[i].sprints[0].score.tech + data.CDMX['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      }
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      if (data.CDMX['2017-2'].students[i].sprints.length > 0) {
        addLife.textContent = ((data.CDMX['2017-2'].students[i].sprints[0].score.hse + data.CDMX['2017-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      }
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
});
