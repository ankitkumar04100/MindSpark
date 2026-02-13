import { apiClient } from "./api";

export interface AIRecommendationRequest {
  studentId: string;
  topic: string;
  performance: number;
}

export interface AIRecommendationResponse {
  nextDifficulty: number;
  recommendedTopics: string[];
  motivationalMessage: string;
}

class AIService {
  async getAdaptiveRecommendation(
    payload: AIRecommendationRequest
  ): Promise<AIRecommendationResponse> {
    return apiClient.request<AIRecommendationResponse>({
      url: "/ai/adaptive",
      method: "POST",
      data: payload,
    });
  }

  async generateSmartHints(questionId: string) {
    return apiClient.request<{ hint: string }>({
      url: `/ai/hints/${questionId}`,
      method: "GET",
    });
  }

  async analyzeLearningPattern(studentId: string) {
    return apiClient.request({
      url: `/ai/pattern/${studentId}`,
      method: "GET",
    });
  }
}

export const aiService = new AIService();
