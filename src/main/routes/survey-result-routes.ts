import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey_result/save_survey_result/save-survey-result-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-routes-adapter'
import { auth } from '@/main/middlewares/auth'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
