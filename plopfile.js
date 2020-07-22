module.exports = function(plop) {
  plop.setActionType('create-repo', function(answers, config, plop) {
    console.log(answers);
    console.log(config);
    return;
  });

  plop.setGenerator('new project', {
    description: 'creates a new project',
    prompts: [
      {
        type: 'string',
        name: 'name'
      }
    ],
    actions: [
      {
        type: 'create-repo',
        bar: 'this is a prop'
      }
    ]
  });
};
