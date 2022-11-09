export const surveySchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    string: {
      type: 'string'
    },
    answers: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyAnswer'
      }
    },
    date: {
      type: 'string'
    }
  }
}
