"use strict";
var posts = [{
    id: 1,
    foto: 'js.jpg',
    fotomaior: 'about-header.jpg',
    icon: 'icons8-js-48.png',
    titulo: 'JS - Manipulando elementos',
    texto: 'Nada de framework. Vamos aprender a criar e excluir elementos em JS de forma simples e nativa da linguagem. Vamos criar filhos do componente <b>ul</b> do HTML',
    textomaior: '<pre>asdasdas</pre><p>Imagine um <strong><a href="http://pt.wikipedia.org/wiki/Cookie">cookie</a></strong> com muito mais espaço de armazenamento, onde os dados não são transitados a cada requisição de página e que, ainda por cima, não tenha data para expirar. Pronto, você imaginou a <a href="http://dev.w3.org/html5/webstorage/">API Web Storage</a> do HTML5.</p><p>Ela se divide em dois tipos: <strong>sessionStorage</strong> e <strong>localStorage</strong>.</p><ul><li>A <strong>sessionStorage</strong> ficará disponível apenas para a janela que criou o dado até que seja fechada (por exemplo, quando a sessão for encerrada). Se você abrir outra janela, ela não terá acesso aos dados daquela sessão.</li><li>A <strong>localStorage</strong>, por outro lado, não depende da sessão. Se você setar um dado no local storage esse ficará automaticamente disponível para qualquer janela. Além disso, permanecerá disponível até que seja explicitamente deletada pelo programador do site ou pelo o usuário. Perceba, o usuário pode fechar sua janela, reiniciar seu computador, viajar para o Acre e voltar mas os dados vão continuar lá.</li></ul><h2 id="exemplo">Exemplo</h2><p>No nosso exemplo vamos criar uma to-do list (lista de tarefas), foram retirados pequenos trechos do código para facilitar o entendimento, mas tudo o que você precisa saber sobre nosso estudo da API Storage se encontra aqui. Lembrando que é possível baixar o código dessa demonstração, caso queira olhar com mais detalhes.</p><p>Foi utilizado <strong>jQuery</strong> para facilitar a escrita na hora de codificar o Javascript, para os que não estão familiarizados podem recorrer a <strong><a href="http://docs.jquery.com/">documentação</a></strong> ou a mim mesmo nos comentários desse post.</p><p><strong>HTML</strong></p><p>Vamos criar uma lista não-ordenada para armazenar cada tarefa. E um botão para limpar o armazenamento, caso o usuário queira apagar as tarefas. O segredo aqui é a propriedade <strong>contentEditable </strong>definida como <strong>true</strong>, com isso tornamos editável essa lista.</p><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"lista"</span> <span class="hljs-attribute">contenteditable</span>=<span class="hljs-value">"true"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>nbsp;<span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">button</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"limpar"</span>&gt;</span>Limpar<span class="hljs-tag">&lt;/<span class="hljs-title">button</span>&gt;</span></code></pre><p><strong>JS</strong></p><p>Aqui definimos o método <strong>setItem</strong>, pertencente ao objeto <strong>localStorage</strong>, atribuindo a variável "dados" todo o html da nossa <code>&lt;ul&gt;</code> com id "lista". Note que, nesse exemplo, o método é chamado a cada evento de tecla pressionada, mas você pode criar um botão e só chamar esse método ao clicá-lo por exemplo. Melhorando assim a performance da aplicação.</p><pre><code class="hljs">$(<span class="hljs-string">"#lista"</span>).keypress(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{localStorage.setItem(<span class="hljs-string">dados </span>, $(<span class="hljs-string">"#lista"</span>).html());});</code></pre><p>Aqui fazemos um <strong>if</strong> simples verificando se existe algum valor na variável "dados" ao chamar o método <strong>getItem</strong> do objeto <strong>localStorage</strong>. Caso exista, atribui a <code>&lt;ul&gt;</code> com id "lista" o html armazenado nela.</p><pre><code class="hljs"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">local</span>Storage.getItem(<span class="hljs-string">dados < /span>)) {$(<span class="hljs-string">"#lista"</span > ).html( < span class = "hljs-built_in" > local < /span>Storage.getItem(<span class="hljs-string">dados</span > ));} < /code></pre > '
}, {
    id: 2,
    foto: 'html5.jpg',
    fotomaior: 'about-header1.jpg',
    icon: 'icons8-html-5-48.png',
    titulo: 'HTML5 - Dados com Local Storage',
    texto: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
    textomaior: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. <br><br>Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
}, {
    id: 3,
    foto: 'angular.jpg',
    fotomaior: 'about-header.jpg',
    icon: 'icons8-angularjs-48.png',
    titulo: 'Angular - Trabalhando com rotas',
    texto: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
    textomaior: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
}, {
    id: 4,
    foto: 'css3.jpg',
    fotomaior: 'about-header.jpg',
    icon: 'icons8-css3-48.png',
    titulo: 'JS - Manipulando elementos',
    texto: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
    textomaior: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
}, {
    id: 5,
    foto: 'html5.jpg',
    fotomaior: 'about-header.jpg',
    icon: 'icons8-php-logo-40.png',
    titulo: 'Create Elements with Javascript',
    texto: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
    textomaior: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
}, {
    id: 6,
    foto: 'html5.jpg',
    fotomaior: 'about-header.jpg',
    icon: 'icons8-js-48.png',
    titulo: 'Create Elements with Javascript',
    texto: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.',
    textomaior: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
}];

var showposts = function(id) {
    var contenthome = '';
    posts.forEach(element => {
        var foto = element.foto;
        var titulo = element.titulo;
        var texto = element.texto;
        var id = element.id;
        var icon = element.icon;
        contenthome += `
        <div class="mdl-cell mdl-card portfolio-card" onmouseover="adicionaClass(this)" onmouseout="removeClass(this)">
            <div class="mdl-card__media">
                <img class="article-image" src=" images/${foto}" border="0" alt="">
            </div>
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text"><img class="title-image" src="images/languages/${icon}" border="0" alt=""> ${titulo}</h2>
            </div>
            <div class="texto-conteudo mdl-card__supporting-text">${texto}</div>
            <div class="mdl-card__actions mdl-card--border">
                <a href="#dv-top" class="mdl-button mdl-js-button mdl-button--primary btn-post" onclick="showpostid(${id})">
                    <i class="material-icons">done_outline</i> Read more
                  </a>
            </div>
        </div>`;
    });
    document.querySelector('.content-home').innerHTML = contenthome;
}

var showpostid = function(id) {
    posts.forEach(element => {
        if (element.id == id) {
            document.querySelector(".my-header").style.display = 'none';
            document.querySelector('.post-click').style.display = 'inline';
            document.querySelector('.post-click h2').innerHTML = element.titulo;
            document.querySelector('.post-click img').setAttribute('src', 'images/' + element.fotomaior);
            document.querySelector('.post-click span').innerHTML = element.textomaior;
            document.querySelector('.content-home').style.display = 'none';
            document.querySelector('.content-home-2').style.display = 'none';
        }
    });
}

var adicionaClass = function(obj) {
    obj.classList.add('mdl-shadow--8dp');
}

var removeClass = function(obj) {
    obj.classList.remove('mdl-shadow--8dp');
}

var resume = document.querySelector("#resume");
resume.onclick = function() {
    document.querySelector(".my-header").style.display = 'none';
    document.querySelector('.post-click').style.display = 'none';
    document.querySelector('.content-home').style.display = 'none';
    document.querySelector('.content-home-2').style.display = 'inline';

    var empresas = [{
        logo: 'oi.png',
        periodo: 'March/2017 - Today',
        cargo: 'Senior Software Web Developer at Oi Telecommunications, S.A.',
        texto: 'Developing the Portal B2B system for the Corporate sector of Oi Telecomunicações. Responsible for the MAP3C module of sales for large companies. Programs and languages used: PHP, Codeigniter, AngularJS, Bootstrap, CSS3, HTML5, using SQL Server database.'
    }, {
        logo: 'hs.png',
        periodo: 'March/2017 - Today',
        cargo: 'Fullstack at HS Tecnologia - Freelancer',
        texto: 'Full-stack developer of web applications using PHP CodeIgniter, Javascript, AngularJS, NodeJS, HTML5, CSS3. Assisting in the architecture of the systems requested by Customers.'
    }, {
        logo: 'stefanini.png',
        periodo: 'February/2014 - March/2016',
        cargo: 'Senior Software Web Developer at Stefanini Business Solutions',
        texto: 'Developed and produced automated process control systems for vehicle production in the FIAT group, New Holland, CASE, Iveco. Programs and languages used: PHP, Codeigniter, AngularJS, CSS3, HTML5, jQuery, Bootstrap, Oracle, making integration between internal systems Copics and SAP.'
    }, {
        logo: 'oi.png',
        periodo: 'August/2011 - March/2014',
        cargo: 'Pleno Software Web Developer at Oi Telecommunications, S.A.',
        texto: 'Developed the Web Portal Sales System which controls the sales made on the website www.oi.com.br Contributed in developing business Dashboards modules leveraging company management information. Programs and languages used: PHP, Codeigniter, Extjs, jQuery, SQL Server.'
    }, {
        logo: 'fixti.png',
        periodo: 'May/2011 - May/2012',
        cargo: 'Development Analyst at FIXTI Freelancer',
        texto: 'Developed project management, E-billing, and various other portals as needed for Oi Telecommunications. Each development project overlapped one another to satisfy a larger technology related project for Oi Telecommunication’s customer base, which comprised of creating management information portals. Programs and languages used: PHP, Codeigniter, JQuery, CSS, SQL Server.'
    }, {
        logo: 'newcom.png',
        periodo: 'November/2010 - August/2011',
        cargo: 'Development Analyst at Newcom',
        texto: 'Developed a tracking portal for projects, control portal GPS and an ARS troubleshooting automated portal for Oi Telecommunications. I developed a tracking portal to track all changes made in server environments and changes in Oracle databases. This project aimed to save expenditures by focusing on one IT solution instead of using several other software programs and consulting for monitoring and to send the necessary documentation for audit. Programs and languages used: PHP, Extjs, Javascript, JQuery, JQuery UI.'
    }, {
        logo: 'md2.png',
        periodo: 'May/2010 - November/2010',
        cargo: 'Business Intelligence Analyst at MD2 Business Consulting',
        texto: 'Acted as a consultant for a financial business portal, insuring the development of data processing for millions of records, making ETL, Extract, Transform, Load and creating dashboards for company management. IBM InfoSphere DataStage tools for development.'
    }, {
        logo: 'mario.png',
        periodo: 'January/2010 - May/2010',
        cargo: 'PHP developer at Mario Penna Institute',
        texto: 'I developed web systems for the hospital ward area and surgeries. This included developing a consultation and examination control system, which is responsible for controlling patient processes. Programs and languages used: PHP, JQuery, CSS and SQLSERVER'
    }];

    var dados_resume = '';
    empresas.forEach(element => {
        var logo = element.logo;
        var periodo = element.periodo;
        var cargo = element.cargo;
        var texto = element.texto;
        dados_resume += `
        <img class="empresa-image" src=" images/empresas/${logo}" border="0" alt="">
        <p class="texto2-conteudo mdl-card__title-text">
        ${cargo}
        </p>
        <span class="span-conteudo mdl-card__title-text texto-conteudo">
        ${periodo}</br>
        ${texto}
        </span>
        `;
    });
    document.querySelector('.content-home-2 .conteudo-texto').innerHTML = dados_resume;
}

var courses = document.querySelector('#courses');
courses.onclick = function() {

    document.querySelector(".my-header").style.display = 'none';
    document.querySelector('.post-click').style.display = 'none';
    document.querySelector('.content-home').style.display = 'none';
    document.querySelector('.content-home-2').style.display = 'inline';

    var c = [{
        course: 'Javascript at Udacity',
        link: 'https://br.udacity.com/course/intro-to-javascript--ud803'
    }, {
        course: 'Javascript at Rocketseat',
        link: 'https://rocketseat.com.br/curso-javascript-basico-do-zero'
    }, {
        course: 'Javascript with ES6 at Rocketseat',
        link: 'https://rocketseat.com.br/curso-javascript-es6'
    }, {
        course: 'Javascript advanced at Alura',
        link: 'https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-2'
    }, {
        course: 'AngularJS - Creating web application at Alura',
        link: 'https://cursos.alura.com.br/course/angularjs-mvc'
    }, {
        course: 'Jasmine - Automated tests in JavaScript at Alura',
        link: 'https://cursos.alura.com.br/course/testes-automatizados-em-javascript-com-jasmine'
    }, {
        course: 'HTML5 CSS3 - Turbinating web pages at Alura',
        link: 'https://cursos.alura.com.br/course/introducao-html-css'
    }, {
        course: 'Sass e Compass: Uncomplicating CSS at Alura',
        link: 'https://cursos.alura.com.br/course/sass'
    }, {
        course: 'Bootstrap - Creation of a responsive single-page at Alura',
        link: 'https://cursos.alura.com.br/course/bootstrap-criacao-single-page-responsiva'
    }, {
        course: 'PHP Advanced - Webservices at Schoolofnet',
        link: 'https://www.schoolofnet.com/curso-webservices-com-php/'
    }, {
        course: 'Codeigniter 3 at Alura',
        link: 'https://cursos.alura.com.br/course/codeigniter'
    }, {
        course: 'Slim Framework - Creating web services at Schoolofnet',
        link: 'https://www.schoolofnet.com/curso-slim-framework/'
    }];

    var dados_courses = '<h2 class="mdl-card__title-text">Hello, as you can see below, I really like to do programming courses</h2><br><br>';
    c.forEach(element => {
        var course = element.course;
        var link = element.link;
        dados_courses += `
        <p class="texto-conteudo mdl-card__title-text">
        ${course}
        </p>
        <a class="texto-conteudo" href="${link}" target="_blank">${link}</a>
        <br><br>
        `;
    });
    document.querySelector('.content-home-2 .conteudo-texto').innerHTML = dados_courses;

}

// showposts();