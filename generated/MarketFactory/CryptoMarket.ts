// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PredictionPlaced extends ethereum.Event {
  get params(): PredictionPlaced__Params {
    return new PredictionPlaced__Params(this);
  }
}

export class PredictionPlaced__Params {
  _event: PredictionPlaced;

  constructor(event: PredictionPlaced) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get prediction(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get positions(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get date(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CryptoMarket__getAssetResultValue0Struct extends ethereum.Tuple {
  get assetName(): Bytes {
    return this[0].toBytes();
  }

  get assetFeed(): Address {
    return this[1].toAddress();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get assetFeedType(): i32 {
    return this[3].toI32();
  }

  get active(): boolean {
    return this[4].toBoolean();
  }
}

export class CryptoMarket__getMarketResultValue0Struct extends ethereum.Tuple {
  get marketAddress(): Address {
    return this[0].toAddress();
  }

  get asset(): CryptoMarket__getMarketResultValue0AssetStruct {
    return this[1].toTuple() as CryptoMarket__getMarketResultValue0AssetStruct;
  }

  get time(): CryptoMarket__getMarketResultValue0TimeStruct {
    return this[2].toTuple() as CryptoMarket__getMarketResultValue0TimeStruct;
  }

  get pools(): Array<CryptoMarket__getMarketResultValue0PoolsStruct> {
    return this[3].toTupleArray<
      CryptoMarket__getMarketResultValue0PoolsStruct
    >();
  }

  get phase(): i32 {
    return this[4].toI32();
  }
}

export class CryptoMarket__getMarketResultValue0AssetStruct extends ethereum.Tuple {
  get assetName(): Bytes {
    return this[0].toBytes();
  }

  get assetFeed(): Address {
    return this[1].toAddress();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get assetFeedType(): i32 {
    return this[3].toI32();
  }

  get active(): boolean {
    return this[4].toBoolean();
  }
}

export class CryptoMarket__getMarketResultValue0TimeStruct extends ethereum.Tuple {
  get creationTime(): BigInt {
    return this[0].toBigInt();
  }

  get tradingEndTime(): BigInt {
    return this[1].toBigInt();
  }

  get waitingEndTime(): BigInt {
    return this[2].toBigInt();
  }

  get reportingEndTime(): BigInt {
    return this[3].toBigInt();
  }

  get disputeEndTime(): BigInt {
    return this[4].toBigInt();
  }
}

export class CryptoMarket__getMarketResultValue0PoolsStruct extends ethereum.Tuple {
  get upper(): BigInt {
    return this[0].toBigInt();
  }

  get lower(): BigInt {
    return this[1].toBigInt();
  }

  get staked(): BigInt {
    return this[2].toBigInt();
  }

  get participants(): BigInt {
    return this[3].toBigInt();
  }

  get positions(): BigInt {
    return this[4].toBigInt();
  }

  get rewards(): BigInt {
    return this[5].toBigInt();
  }
}

export class CryptoMarket__getMarketEntityResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class CryptoMarket__getMarketTimeResultValue0Struct extends ethereum.Tuple {
  get creationTime(): BigInt {
    return this[0].toBigInt();
  }

  get tradingEndTime(): BigInt {
    return this[1].toBigInt();
  }

  get waitingEndTime(): BigInt {
    return this[2].toBigInt();
  }

  get reportingEndTime(): BigInt {
    return this[3].toBigInt();
  }

  get disputeEndTime(): BigInt {
    return this[4].toBigInt();
  }
}

export class CryptoMarket__getMarketUserResultValue0Struct extends ethereum.Tuple {
  get numberOfPredictions(): i32 {
    return this[0].toI32();
  }

  get rewardClaimed(): boolean {
    return this[1].toBoolean();
  }

  get boostModeApplied(): boolean {
    return this[2].toBoolean();
  }

  get predictions(): Array<
    CryptoMarket__getMarketUserResultValue0PredictionsStruct
  > {
    return this[3].toTupleArray<
      CryptoMarket__getMarketUserResultValue0PredictionsStruct
    >();
  }

  get user(): Address {
    return this[4].toAddress();
  }
}

export class CryptoMarket__getMarketUserResultValue0PredictionsStruct extends ethereum.Tuple {
  get positions(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get leverage(): i32 {
    return this[2].toI32();
  }
}

export class CryptoMarket__getMarketUserDataResultValue0Struct extends ethereum.Tuple {
  get numberOfPredictions(): i32 {
    return this[0].toI32();
  }

  get rewardClaimed(): boolean {
    return this[1].toBoolean();
  }

  get boostModeApplied(): boolean {
    return this[2].toBoolean();
  }

  get predictions(): Array<
    CryptoMarket__getMarketUserDataResultValue0PredictionsStruct
  > {
    return this[3].toTupleArray<
      CryptoMarket__getMarketUserDataResultValue0PredictionsStruct
    >();
  }

  get user(): Address {
    return this[4].toAddress();
  }
}

export class CryptoMarket__getMarketUserDataResultValue0PredictionsStruct extends ethereum.Tuple {
  get positions(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get leverage(): i32 {
    return this[2].toI32();
  }
}

export class CryptoMarket__getMarketUserDataResultValue1Struct extends ethereum.Tuple {
  get marketAddress(): Address {
    return this[0].toAddress();
  }

  get asset(): CryptoMarket__getMarketUserDataResultValue1AssetStruct {
    return this[1].toTuple() as CryptoMarket__getMarketUserDataResultValue1AssetStruct;
  }

  get time(): CryptoMarket__getMarketUserDataResultValue1TimeStruct {
    return this[2].toTuple() as CryptoMarket__getMarketUserDataResultValue1TimeStruct;
  }

  get pools(): Array<CryptoMarket__getMarketUserDataResultValue1PoolsStruct> {
    return this[3].toTupleArray<
      CryptoMarket__getMarketUserDataResultValue1PoolsStruct
    >();
  }

  get phase(): i32 {
    return this[4].toI32();
  }
}

export class CryptoMarket__getMarketUserDataResultValue1AssetStruct extends ethereum.Tuple {
  get assetName(): Bytes {
    return this[0].toBytes();
  }

  get assetFeed(): Address {
    return this[1].toAddress();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get assetFeedType(): i32 {
    return this[3].toI32();
  }

  get active(): boolean {
    return this[4].toBoolean();
  }
}

export class CryptoMarket__getMarketUserDataResultValue1TimeStruct extends ethereum.Tuple {
  get creationTime(): BigInt {
    return this[0].toBigInt();
  }

  get tradingEndTime(): BigInt {
    return this[1].toBigInt();
  }

  get waitingEndTime(): BigInt {
    return this[2].toBigInt();
  }

  get reportingEndTime(): BigInt {
    return this[3].toBigInt();
  }

  get disputeEndTime(): BigInt {
    return this[4].toBigInt();
  }
}

export class CryptoMarket__getMarketUserDataResultValue1PoolsStruct extends ethereum.Tuple {
  get upper(): BigInt {
    return this[0].toBigInt();
  }

  get lower(): BigInt {
    return this[1].toBigInt();
  }

  get staked(): BigInt {
    return this[2].toBigInt();
  }

  get participants(): BigInt {
    return this[3].toBigInt();
  }

  get positions(): BigInt {
    return this[4].toBigInt();
  }

  get rewards(): BigInt {
    return this[5].toBigInt();
  }
}

export class CryptoMarket__getMarketUserDataResult {
  value0: CryptoMarket__getMarketUserDataResultValue0Struct;
  value1: CryptoMarket__getMarketUserDataResultValue1Struct;

  constructor(
    value0: CryptoMarket__getMarketUserDataResultValue0Struct,
    value1: CryptoMarket__getMarketUserDataResultValue1Struct
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromTuple(this.value1));
    return map;
  }
}

export class CryptoMarket__getMarketUsersResultValue0Struct extends ethereum.Tuple {
  get numberOfPredictions(): i32 {
    return this[0].toI32();
  }

  get rewardClaimed(): boolean {
    return this[1].toBoolean();
  }

  get boostModeApplied(): boolean {
    return this[2].toBoolean();
  }

  get predictions(): Array<
    CryptoMarket__getMarketUsersResultValue0PredictionsStruct
  > {
    return this[3].toTupleArray<
      CryptoMarket__getMarketUsersResultValue0PredictionsStruct
    >();
  }

  get user(): Address {
    return this[4].toAddress();
  }
}

export class CryptoMarket__getMarketUsersResultValue0PredictionsStruct extends ethereum.Tuple {
  get positions(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get leverage(): i32 {
    return this[2].toI32();
  }
}

export class CryptoMarket__getRewardsResultValue0Struct extends ethereum.Tuple {
  get creator(): BigInt {
    return this[0].toBigInt();
  }

  get platform(): BigInt {
    return this[1].toBigInt();
  }

  get settler(): BigInt {
    return this[2].toBigInt();
  }

  get users(): BigInt {
    return this[3].toBigInt();
  }
}

export class CryptoMarket__placePredictionResult {
  value0: BigInt;
  value1: boolean;

  constructor(value0: BigInt, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }
}

export class CryptoMarket extends ethereum.SmartContract {
  static bind(address: Address): CryptoMarket {
    return new CryptoMarket("CryptoMarket", address);
  }

  claimReturns(_user: Address): BigInt {
    let result = super.call("claimReturns", "claimReturns(address):(uint256)", [
      ethereum.Value.fromAddress(_user)
    ]);

    return result[0].toBigInt();
  }

  try_claimReturns(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimReturns",
      "claimReturns(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAsset(): CryptoMarket__getAssetResultValue0Struct {
    let result = super.call(
      "getAsset",
      "getAsset():((bytes32,address,uint8,uint8,bool))",
      []
    );

    return result[0].toTuple() as CryptoMarket__getAssetResultValue0Struct;
  }

  try_getAsset(): ethereum.CallResult<
    CryptoMarket__getAssetResultValue0Struct
  > {
    let result = super.tryCall(
      "getAsset",
      "getAsset():((bytes32,address,uint8,uint8,bool))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CryptoMarket__getAssetResultValue0Struct
    );
  }

  getMarket(): CryptoMarket__getMarketResultValue0Struct {
    let result = super.call(
      "getMarket",
      "getMarket():((address,(bytes32,address,uint8,uint8,bool),(uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256)[],uint8))",
      []
    );

    return result[0].toTuple() as CryptoMarket__getMarketResultValue0Struct;
  }

  try_getMarket(): ethereum.CallResult<
    CryptoMarket__getMarketResultValue0Struct
  > {
    let result = super.tryCall(
      "getMarket",
      "getMarket():((address,(bytes32,address,uint8,uint8,bool),(uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256)[],uint8))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CryptoMarket__getMarketResultValue0Struct
    );
  }

  getMarketEntity(): CryptoMarket__getMarketEntityResult {
    let result = super.call(
      "getMarketEntity",
      "getMarketEntity():(address,address,address,address)",
      []
    );

    return new CryptoMarket__getMarketEntityResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress()
    );
  }

  try_getMarketEntity(): ethereum.CallResult<
    CryptoMarket__getMarketEntityResult
  > {
    let result = super.tryCall(
      "getMarketEntity",
      "getMarketEntity():(address,address,address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CryptoMarket__getMarketEntityResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress()
      )
    );
  }

  getMarketPhase(): i32 {
    let result = super.call("getMarketPhase", "getMarketPhase():(uint8)", []);

    return result[0].toI32();
  }

  try_getMarketPhase(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getMarketPhase",
      "getMarketPhase():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getMarketTime(): CryptoMarket__getMarketTimeResultValue0Struct {
    let result = super.call(
      "getMarketTime",
      "getMarketTime():((uint256,uint256,uint256,uint256,uint256))",
      []
    );

    return result[0].toTuple() as CryptoMarket__getMarketTimeResultValue0Struct;
  }

  try_getMarketTime(): ethereum.CallResult<
    CryptoMarket__getMarketTimeResultValue0Struct
  > {
    let result = super.tryCall(
      "getMarketTime",
      "getMarketTime():((uint256,uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CryptoMarket__getMarketTimeResultValue0Struct
    );
  }

  getMarketUser(_user: Address): CryptoMarket__getMarketUserResultValue0Struct {
    let result = super.call(
      "getMarketUser",
      "getMarketUser(address):((uint24,bool,bool,(uint256,uint256,uint8)[],address))",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toTuple() as CryptoMarket__getMarketUserResultValue0Struct;
  }

  try_getMarketUser(
    _user: Address
  ): ethereum.CallResult<CryptoMarket__getMarketUserResultValue0Struct> {
    let result = super.tryCall(
      "getMarketUser",
      "getMarketUser(address):((uint24,bool,bool,(uint256,uint256,uint8)[],address))",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CryptoMarket__getMarketUserResultValue0Struct
    );
  }

  getMarketUserData(_user: Address): CryptoMarket__getMarketUserDataResult {
    let result = super.call(
      "getMarketUserData",
      "getMarketUserData(address):((uint24,bool,bool,(uint256,uint256,uint8)[],address),(address,(bytes32,address,uint8,uint8,bool),(uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256)[],uint8))",
      [ethereum.Value.fromAddress(_user)]
    );

    return new CryptoMarket__getMarketUserDataResult(
      result[0].toTuple() as CryptoMarket__getMarketUserDataResultValue0Struct,
      result[1].toTuple() as CryptoMarket__getMarketUserDataResultValue1Struct
    ) as CryptoMarket__getMarketUserDataResult;
  }

  try_getMarketUserData(
    _user: Address
  ): ethereum.CallResult<CryptoMarket__getMarketUserDataResult> {
    let result = super.tryCall(
      "getMarketUserData",
      "getMarketUserData(address):((uint24,bool,bool,(uint256,uint256,uint8)[],address),(address,(bytes32,address,uint8,uint8,bool),(uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256)[],uint8))",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CryptoMarket__getMarketUserDataResult(
        value[0].toTuple() as CryptoMarket__getMarketUserDataResultValue0Struct,
        value[1].toTuple() as CryptoMarket__getMarketUserDataResultValue1Struct
      ) as CryptoMarket__getMarketUserDataResult
    );
  }

  getMarketUsers(): Array<CryptoMarket__getMarketUsersResultValue0Struct> {
    let result = super.call(
      "getMarketUsers",
      "getMarketUsers():((uint24,bool,bool,(uint256,uint256,uint8)[],address)[])",
      []
    );

    return result[0].toTupleArray<
      CryptoMarket__getMarketUsersResultValue0Struct
    >();
  }

  try_getMarketUsers(): ethereum.CallResult<
    Array<CryptoMarket__getMarketUsersResultValue0Struct>
  > {
    let result = super.tryCall(
      "getMarketUsers",
      "getMarketUsers():((uint24,bool,bool,(uint256,uint256,uint8)[],address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CryptoMarket__getMarketUsersResultValue0Struct>()
    );
  }

  getPoolPrice(_prediction: i32): BigInt {
    let result = super.call("getPoolPrice", "getPoolPrice(uint8):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction))
    ]);

    return result[0].toBigInt();
  }

  try_getPoolPrice(_prediction: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getPoolPrice", "getPoolPrice(uint8):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolsPrice(): Array<BigInt> {
    let result = super.call("getPoolsPrice", "getPoolsPrice():(uint64[])", []);

    return result[0].toBigIntArray();
  }

  try_getPoolsPrice(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getPoolsPrice",
      "getPoolsPrice():(uint64[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getPositions(_prediction: i32, _amount: BigInt, _leverage: i32): BigInt {
    let result = super.call(
      "getPositions",
      "getPositions(uint8,uint256,uint8):(uint64)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction)),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_leverage))
      ]
    );

    return result[0].toBigInt();
  }

  try_getPositions(
    _prediction: i32,
    _amount: BigInt,
    _leverage: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPositions",
      "getPositions(uint8,uint256,uint8):(uint64)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction)),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_leverage))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewards(): CryptoMarket__getRewardsResultValue0Struct {
    let result = super.call(
      "getRewards",
      "getRewards():((uint256,uint256,uint256,uint256))",
      []
    );

    return result[0].toTuple() as CryptoMarket__getRewardsResultValue0Struct;
  }

  try_getRewards(): ethereum.CallResult<
    CryptoMarket__getRewardsResultValue0Struct
  > {
    let result = super.tryCall(
      "getRewards",
      "getRewards():((uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CryptoMarket__getRewardsResultValue0Struct
    );
  }

  getTotalPools(): i32 {
    let result = super.call("getTotalPools", "getTotalPools():(uint8)", []);

    return result[0].toI32();
  }

  try_getTotalPools(): ethereum.CallResult<i32> {
    let result = super.tryCall("getTotalPools", "getTotalPools():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getTotalRewards(): BigInt {
    let result = super.call(
      "getTotalRewards",
      "getTotalRewards():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTotalRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalRewards",
      "getTotalRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalStaked(): BigInt {
    let result = super.call("getTotalStaked", "getTotalStaked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTotalStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalStaked",
      "getTotalStaked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserTotalReturns(_user: Address): BigInt {
    let result = super.call(
      "getUserTotalReturns",
      "getUserTotalReturns(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getUserTotalReturns(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserTotalReturns",
      "getUserTotalReturns(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWinningPool(): i32 {
    let result = super.call("getWinningPool", "getWinningPool():(uint8)", []);

    return result[0].toI32();
  }

  try_getWinningPool(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getWinningPool",
      "getWinningPool():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getWinningPoolOracle(_roundId: BigInt): i32 {
    let result = super.call(
      "getWinningPoolOracle",
      "getWinningPoolOracle(uint80):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(_roundId)]
    );

    return result[0].toI32();
  }

  try_getWinningPoolOracle(_roundId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getWinningPoolOracle",
      "getWinningPoolOracle(uint80):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(_roundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  placePrediction(
    _user: Address,
    _prediction: i32,
    _amount: BigInt,
    _leverage: i32
  ): CryptoMarket__placePredictionResult {
    let result = super.call(
      "placePrediction",
      "placePrediction(address,uint8,uint256,uint8):(uint256,bool)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction)),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_leverage))
      ]
    );

    return new CryptoMarket__placePredictionResult(
      result[0].toBigInt(),
      result[1].toBoolean()
    );
  }

  try_placePrediction(
    _user: Address,
    _prediction: i32,
    _amount: BigInt,
    _leverage: i32
  ): ethereum.CallResult<CryptoMarket__placePredictionResult> {
    let result = super.tryCall(
      "placePrediction",
      "placePrediction(address,uint8,uint256,uint8):(uint256,bool)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_prediction)),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_leverage))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CryptoMarket__placePredictionResult(
        value[0].toBigInt(),
        value[1].toBoolean()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _gateway(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _creator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _asset(): ConstructorCall_assetStruct {
    return this._call.inputValues[3].value.toTuple() as ConstructorCall_assetStruct;
  }

  get _marketTime(): ConstructorCall_marketTimeStruct {
    return this._call.inputValues[4].value.toTuple() as ConstructorCall_marketTimeStruct;
  }

  get _pools(): Array<ConstructorCall_poolsStruct> {
    return this._call.inputValues[5].value.toTupleArray<
      ConstructorCall_poolsStruct
    >();
  }

  get _LC(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall_assetStruct extends ethereum.Tuple {
  get assetName(): Bytes {
    return this[0].toBytes();
  }

  get assetFeed(): Address {
    return this[1].toAddress();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get assetFeedType(): i32 {
    return this[3].toI32();
  }

  get active(): boolean {
    return this[4].toBoolean();
  }
}

export class ConstructorCall_marketTimeStruct extends ethereum.Tuple {
  get creationTime(): BigInt {
    return this[0].toBigInt();
  }

  get tradingEndTime(): BigInt {
    return this[1].toBigInt();
  }

  get waitingEndTime(): BigInt {
    return this[2].toBigInt();
  }

  get reportingEndTime(): BigInt {
    return this[3].toBigInt();
  }

  get disputeEndTime(): BigInt {
    return this[4].toBigInt();
  }
}

export class ConstructorCall_poolsStruct extends ethereum.Tuple {
  get upper(): BigInt {
    return this[0].toBigInt();
  }

  get lower(): BigInt {
    return this[1].toBigInt();
  }

  get staked(): BigInt {
    return this[2].toBigInt();
  }

  get participants(): BigInt {
    return this[3].toBigInt();
  }

  get positions(): BigInt {
    return this[4].toBigInt();
  }

  get rewards(): BigInt {
    return this[5].toBigInt();
  }
}

export class ClaimReturnsCall extends ethereum.Call {
  get inputs(): ClaimReturnsCall__Inputs {
    return new ClaimReturnsCall__Inputs(this);
  }

  get outputs(): ClaimReturnsCall__Outputs {
    return new ClaimReturnsCall__Outputs(this);
  }
}

export class ClaimReturnsCall__Inputs {
  _call: ClaimReturnsCall;

  constructor(call: ClaimReturnsCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimReturnsCall__Outputs {
  _call: ClaimReturnsCall;

  constructor(call: ClaimReturnsCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PlacePredictionCall extends ethereum.Call {
  get inputs(): PlacePredictionCall__Inputs {
    return new PlacePredictionCall__Inputs(this);
  }

  get outputs(): PlacePredictionCall__Outputs {
    return new PlacePredictionCall__Outputs(this);
  }
}

export class PlacePredictionCall__Inputs {
  _call: PlacePredictionCall;

  constructor(call: PlacePredictionCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prediction(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _leverage(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class PlacePredictionCall__Outputs {
  _call: PlacePredictionCall;

  constructor(call: PlacePredictionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get value1(): boolean {
    return this._call.outputValues[1].value.toBoolean();
  }
}

export class SettleMarketCall extends ethereum.Call {
  get inputs(): SettleMarketCall__Inputs {
    return new SettleMarketCall__Inputs(this);
  }

  get outputs(): SettleMarketCall__Outputs {
    return new SettleMarketCall__Outputs(this);
  }
}

export class SettleMarketCall__Inputs {
  _call: SettleMarketCall;

  constructor(call: SettleMarketCall) {
    this._call = call;
  }

  get _settler(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _roundId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SettleMarketCall__Outputs {
  _call: SettleMarketCall;

  constructor(call: SettleMarketCall) {
    this._call = call;
  }
}
