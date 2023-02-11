export interface IPostBroadcastInfo {
  animalStoreId: string;
  title: string;
  description: string;
  thumbnail: Blob | null;
  animalIdList: string[];
}

export interface IPostBroadcastInfoRes {
  broadcastId: number;
  sessionId: string;
  connectionToken: string;
}

export interface IPostBroadcastFeeds {
  animalIdList: number[];
}

export interface IPostBroadcastBadge {
  userIdList: number[];
  badgeId: number;
}