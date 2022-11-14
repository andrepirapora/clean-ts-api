import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  save (surveyId: String): Promise<SurveyResultModel>
}
