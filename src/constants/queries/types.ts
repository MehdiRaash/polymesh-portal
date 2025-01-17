import {
  Balance,
  ProposalStatus,
} from '@polymeshassociation/polymesh-sdk/types';
import { TMultiSigArgs } from '~/layouts/MultiSig/types';

export interface IAddress {
  did: string;
}
export interface ITicker {
  ticker: string;
  localId: number;
}
export interface IDividend {
  from: {
    did: string;
    kind: {
      Default: null;
    };
  };
  amount: number;
  currency: {
    id: string;
    ticker: string;
  };
  perShare: number;
  expiresAt: number;
  paymentAt: number;
  reclaimed: boolean;
  remaining: number;
}

export interface ITransferEvent {
  id: string;
  blockId: number;
  extrinsicIdx: number;
  block: {
    datetime: string;
  };
  attributes: {
    value: string | Balance | IAddress | ITicker | IDividend | number;
  }[];
}

interface IMovement {
  id: string;
  amount?: string;
  nftIds?: string[];
  assetId: string;
  asset: {
    name: string;
    ticker: string;
  };
  createdBlock: {
    blockId: number;
    datetime: string;
  };
  from: {
    name: string | null;
  };
  to: {
    name: string | null;
  };
}

interface IPortfolioMovements {
  nodes: IMovement[];
  totalCount: number;
}

interface ITransferEvents {
  nodes: ITransferEvent[];
  totalCount: number;
}

export interface IMovementQueryResponse {
  portfolioMovements: IPortfolioMovements;
}

export interface ITransferQueryResponse {
  events: ITransferEvents;
}

export interface IAssetTransaction {
  amount: number | null;
  nftIds: string[] | null;
  assetId: string;
  id: string;
  datetime: string;
  fromPortfolioId: string;
  toPortfolioId: string;
  createdBlockId: string;
  extrinsicIdx: number | null;
  eventIdx: number;
  instructionId: string | null;
  instructionMemo: string;
  asset: {
    name: string;
    ticker: string;
  };
}

export interface IAssetTransactions {
  totalCount: number;
  nodes: IAssetTransaction[];
}

export interface ITransactionsQueryResponse {
  assetTransactions: IAssetTransactions;
}

export interface IDistribution {
  targetId: string;
  distributionId: string;
  amount: string;
  amountAfterTax: string;
  tax: string;
  distribution: {
    amount: string;
    currency: {
      id: string;
      ticker: string;
    };
    portfolioId: string;
    portfolio: {
      name: string | null;
    };
    assetId: string;
    localId: number;
    perShare: string;
  };
  createdAt: string;
  createdBlockId: string;
  datetime: string;
  eventId: string;
  id: string;
  nodeId: string;
  updatedBlockId: string;
}

export interface IDistributionsQueryResponse {
  distributionPayments: {
    nodes: IDistribution[];
    totalCount: number;
  };
}

export interface IStakingRewardEvent {
  id: string;
  createdBlockId: number;
  datetime: string;
  identityId: string;
  stashAccount: string;
  amount: string;
  eventId: string;
}

export interface IRewardsQueryResponse {
  stakingEvents: {
    nodes: IStakingRewardEvent[];
    totalCount: number;
  };
}

export enum ERawMultiSigStatus {
  ACTIVE = 'Active',
  SUCCESS = 'Success',
  FAILED = 'Failed',
  REJECTED = 'Rejected',
  DELETED = 'Deleted',
}

export interface IRawMultiSigVote {
  action: 'Approved' | 'Rejected';
  signer: {
    signerValue: string;
  };
}
export interface IRawMultiSigProposal {
  updatedBlockId: string;
  approvalCount: number;
  createdBlockId: string;
  creatorAccount: string;
  datetime: string;
  extrinsicIdx: number;
  proposalId: number;
  rejectionCount: number;
  status: ProposalStatus | ERawMultiSigStatus;
  votes: {
    nodes: IRawMultiSigVote[];
  };
}

export interface IProposalQueryResponse {
  multiSigProposals: {
    nodes: IRawMultiSigProposal[];
    totalCount: number;
  };
}

export interface IRawMultiSigExtrinsic {
  blockId: string;
  extrinsicIdx: number;
  params: {
    proposal: {
      args: TMultiSigArgs;
      method: string;
      section: string;
    };
    expiry: number | null;
    auto_close: boolean;
    multisig: string;
  };
}

export interface IMultisigExtrinsicQueryResponse {
  extrinsics: {
    nodes: IRawMultiSigExtrinsic[];
    totalCount: number;
  };
}
