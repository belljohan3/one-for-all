import * as ContributionModel from '../models/contributionModel';
import { Contribution } from '../types';

export const getAll = async () => {
  return ContributionModel.getAllContributions();
};

export const add = async (contribution: Contribution) => {
  return ContributionModel.addContribution(contribution);
};
