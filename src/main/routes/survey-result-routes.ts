import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey_result/save_survey_result/save-survey-result-controller-factory'
import { makeLoadSurveyResultController } from '@/main/factories/controllers/survey_result/load-survey-result/load-survey-result-controller-factory'
import { adaptRoute } from '@/main/adapters/express-routes-adapter'
import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
  router.get('/surveys/:surveyId/results', auth, adaptRoute(makeLoadSurveyResultController()))
}
