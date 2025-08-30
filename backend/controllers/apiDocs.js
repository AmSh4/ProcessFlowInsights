// Swagger definition
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'ProcessFlowInsights API',
    version: '1.0.0',
  },
  paths: {
    '/analyze': {
      post: {
        summary: 'Analyze event log',
        consumes: ['multipart/form-data'],
        parameters: [{ name: 'file', in: 'formData', type: 'file' }],
        responses: { 200: { description: 'Analysis result' } },
      },
    },
    // More paths...
  },
};