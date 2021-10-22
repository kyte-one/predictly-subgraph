import { BigInt } from "@graphprotocol/graph-ts";
import { User } from "../generated/schema";
import { ZERO_BI } from "./constant";

export function formatAssetFeedType(feedType: BigInt): string {
  if (feedType.equals(BigInt.fromString("0"))) {
    return "Price";
  }

  if (feedType.equals(BigInt.fromString("1"))) {
    return "Volume";
  }

  if (feedType.equals(BigInt.fromString("2"))) {
    return "Rank";
  }

  return "Price";
}

export function BigMin(a: BigInt, b: BigInt): BigInt {
    if (a.gt(b)) {
        return b;
    }
    return a;
}

export function createUser(userId: string): User {
    let user = new User(userId);
    user.totalMarketCreated = ZERO_BI;
    user.totalPredictions = ZERO_BI;
    user.totalSettled = ZERO_BI;
    user.totalRewardClaimed = ZERO_BI;
    user.totalPRClaimed = ZERO_BI;
    user.totalMCRClaimed = ZERO_BI;
    user.totalSRClaimed = ZERO_BI;
    user.totalLoss = ZERO_BI;
    user.totalPNL = ZERO_BI;
    return user;
  }
  