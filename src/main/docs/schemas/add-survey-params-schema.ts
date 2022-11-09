export const addSurveyParamsSchema = {
  type: 'object',
  properties: {
    string: {
      type: 'string'
    },
    answers: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyAnswer'
      }
    }
  }
}
