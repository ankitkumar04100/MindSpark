import { apiClient } from "./api";

interface AnalyticsEvent {
  event: string;
  metadata?: Record<string, any>;
  timestamp: number;
}

class AnalyticsService {
  private queue: AnalyticsEvent[] = [];
  private flushInterval = 5000;

  constructor() {
    setInterval(() => {
      if (this.queue.length > 0) {
        this.flush();
      }
    }, this.flushInterval);
  }

  track(event: string, metadata?: Record<string, any>) {
    this.queue.push({
      event,
      metadata,
      timestamp: Date.now(),
    });
  }

  async flush() {
    try {
      const eventsToSend = [...this.queue];
      this.queue = [];

      await apiClient.request({
        url: "/analytics/batch",
        method: "POST",
        data: { events: eventsToSend },
      });
    } catch (error) {
      console.error("Analytics sync failed:", error);
    }
  }

  async trackPageView(page: string) {
    this.track("page_view", { page });
  }

  async trackLearningProgress(topic: string, accuracy: number) {
    this.track("learning_progress", { topic, accuracy });
  }
}

export const analyticsService = new AnalyticsService();
