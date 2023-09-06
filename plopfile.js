module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Generates a new React component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name (in PascalCase):',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'templates/Component.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
                // templateFile: 'templates/Component.css.hbs', // Crea tu propio archivo CSS de plantilla
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'templates/Component.test.js.hbs', // Crea tu propio archivo de prueba de plantilla
            },
        ],
    });
};
