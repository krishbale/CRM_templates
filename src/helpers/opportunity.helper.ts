import {
  opportunity_stage,
  probability_percent,
} from 'src/opportunities/entities/opportunity.entity';

export class OpportunityHelper {
  static calculateProbability(stage: opportunity_stage): number {
    let probability: number;
    if (!stage) {
      stage = opportunity_stage.qualification;
    }
    switch (stage) {
      case opportunity_stage.qualification:
        probability = probability_percent.qualification;
        break;
      case opportunity_stage.needs_analysis:
        probability = probability_percent.needs_analysis;
        break;
      case opportunity_stage.proposal:
        probability = probability_percent.proposal;
        break;
      case opportunity_stage.negotiation:
        probability = probability_percent.negotiation;
        break;
      case opportunity_stage.closed_won:
        probability = probability_percent.closed_won;
        break;
      case opportunity_stage.closed_lost:
        probability = probability_percent.closed_lost;
        break;
      default:
        probability = 0;
        break;
    }
    return probability;
  }
}
