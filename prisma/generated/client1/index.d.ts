
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ModelPSQL1
 * 
 */
export type ModelPSQL1 = $Result.DefaultSelection<Prisma.$ModelPSQL1Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ModelPSQL1s
 * const modelPSQL1s = await prisma.modelPSQL1.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ModelPSQL1s
   * const modelPSQL1s = await prisma.modelPSQL1.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.modelPSQL1`: Exposes CRUD operations for the **ModelPSQL1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelPSQL1s
    * const modelPSQL1s = await prisma.modelPSQL1.findMany()
    * ```
    */
  get modelPSQL1(): Prisma.ModelPSQL1Delegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ModelPSQL1: 'ModelPSQL1'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "modelPSQL1"
      txIsolationLevel: never
    }
    model: {
      ModelPSQL1: {
        payload: Prisma.$ModelPSQL1Payload<ExtArgs>
        fields: Prisma.ModelPSQL1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelPSQL1FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelPSQL1FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          findFirst: {
            args: Prisma.ModelPSQL1FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelPSQL1FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          findMany: {
            args: Prisma.ModelPSQL1FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>[]
          }
          create: {
            args: Prisma.ModelPSQL1CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          createMany: {
            args: Prisma.ModelPSQL1CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModelPSQL1DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          update: {
            args: Prisma.ModelPSQL1UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          deleteMany: {
            args: Prisma.ModelPSQL1DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelPSQL1UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelPSQL1UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL1Payload>
          }
          aggregate: {
            args: Prisma.ModelPSQL1AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelPSQL1>
          }
          groupBy: {
            args: Prisma.ModelPSQL1GroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelPSQL1GroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ModelPSQL1FindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ModelPSQL1AggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ModelPSQL1CountArgs<ExtArgs>
            result: $Utils.Optional<ModelPSQL1CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ModelPSQL1
   */

  export type AggregateModelPSQL1 = {
    _count: ModelPSQL1CountAggregateOutputType | null
    _min: ModelPSQL1MinAggregateOutputType | null
    _max: ModelPSQL1MaxAggregateOutputType | null
  }

  export type ModelPSQL1MinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ModelPSQL1MaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ModelPSQL1CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ModelPSQL1MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModelPSQL1MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModelPSQL1CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ModelPSQL1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPSQL1 to aggregate.
     */
    where?: ModelPSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL1s to fetch.
     */
    orderBy?: ModelPSQL1OrderByWithRelationInput | ModelPSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelPSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelPSQL1s
    **/
    _count?: true | ModelPSQL1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelPSQL1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelPSQL1MaxAggregateInputType
  }

  export type GetModelPSQL1AggregateType<T extends ModelPSQL1AggregateArgs> = {
        [P in keyof T & keyof AggregateModelPSQL1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelPSQL1[P]>
      : GetScalarType<T[P], AggregateModelPSQL1[P]>
  }




  export type ModelPSQL1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelPSQL1WhereInput
    orderBy?: ModelPSQL1OrderByWithAggregationInput | ModelPSQL1OrderByWithAggregationInput[]
    by: ModelPSQL1ScalarFieldEnum[] | ModelPSQL1ScalarFieldEnum
    having?: ModelPSQL1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelPSQL1CountAggregateInputType | true
    _min?: ModelPSQL1MinAggregateInputType
    _max?: ModelPSQL1MaxAggregateInputType
  }

  export type ModelPSQL1GroupByOutputType = {
    id: string
    name: string | null
    _count: ModelPSQL1CountAggregateOutputType | null
    _min: ModelPSQL1MinAggregateOutputType | null
    _max: ModelPSQL1MaxAggregateOutputType | null
  }

  type GetModelPSQL1GroupByPayload<T extends ModelPSQL1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelPSQL1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelPSQL1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelPSQL1GroupByOutputType[P]>
            : GetScalarType<T[P], ModelPSQL1GroupByOutputType[P]>
        }
      >
    >


  export type ModelPSQL1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["modelPSQL1"]>


  export type ModelPSQL1SelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $ModelPSQL1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelPSQL1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["modelPSQL1"]>
    composites: {}
  }

  type ModelPSQL1GetPayload<S extends boolean | null | undefined | ModelPSQL1DefaultArgs> = $Result.GetResult<Prisma.$ModelPSQL1Payload, S>

  type ModelPSQL1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelPSQL1FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModelPSQL1CountAggregateInputType | true
    }

  export interface ModelPSQL1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelPSQL1'], meta: { name: 'ModelPSQL1' } }
    /**
     * Find zero or one ModelPSQL1 that matches the filter.
     * @param {ModelPSQL1FindUniqueArgs} args - Arguments to find a ModelPSQL1
     * @example
     * // Get one ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelPSQL1FindUniqueArgs>(args: SelectSubset<T, ModelPSQL1FindUniqueArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModelPSQL1 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModelPSQL1FindUniqueOrThrowArgs} args - Arguments to find a ModelPSQL1
     * @example
     * // Get one ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelPSQL1FindUniqueOrThrowArgs>(args: SelectSubset<T, ModelPSQL1FindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModelPSQL1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1FindFirstArgs} args - Arguments to find a ModelPSQL1
     * @example
     * // Get one ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelPSQL1FindFirstArgs>(args?: SelectSubset<T, ModelPSQL1FindFirstArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModelPSQL1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1FindFirstOrThrowArgs} args - Arguments to find a ModelPSQL1
     * @example
     * // Get one ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelPSQL1FindFirstOrThrowArgs>(args?: SelectSubset<T, ModelPSQL1FindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModelPSQL1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelPSQL1s
     * const modelPSQL1s = await prisma.modelPSQL1.findMany()
     * 
     * // Get first 10 ModelPSQL1s
     * const modelPSQL1s = await prisma.modelPSQL1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelPSQL1WithIdOnly = await prisma.modelPSQL1.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelPSQL1FindManyArgs>(args?: SelectSubset<T, ModelPSQL1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModelPSQL1.
     * @param {ModelPSQL1CreateArgs} args - Arguments to create a ModelPSQL1.
     * @example
     * // Create one ModelPSQL1
     * const ModelPSQL1 = await prisma.modelPSQL1.create({
     *   data: {
     *     // ... data to create a ModelPSQL1
     *   }
     * })
     * 
     */
    create<T extends ModelPSQL1CreateArgs>(args: SelectSubset<T, ModelPSQL1CreateArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModelPSQL1s.
     * @param {ModelPSQL1CreateManyArgs} args - Arguments to create many ModelPSQL1s.
     * @example
     * // Create many ModelPSQL1s
     * const modelPSQL1 = await prisma.modelPSQL1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelPSQL1CreateManyArgs>(args?: SelectSubset<T, ModelPSQL1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModelPSQL1.
     * @param {ModelPSQL1DeleteArgs} args - Arguments to delete one ModelPSQL1.
     * @example
     * // Delete one ModelPSQL1
     * const ModelPSQL1 = await prisma.modelPSQL1.delete({
     *   where: {
     *     // ... filter to delete one ModelPSQL1
     *   }
     * })
     * 
     */
    delete<T extends ModelPSQL1DeleteArgs>(args: SelectSubset<T, ModelPSQL1DeleteArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModelPSQL1.
     * @param {ModelPSQL1UpdateArgs} args - Arguments to update one ModelPSQL1.
     * @example
     * // Update one ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelPSQL1UpdateArgs>(args: SelectSubset<T, ModelPSQL1UpdateArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModelPSQL1s.
     * @param {ModelPSQL1DeleteManyArgs} args - Arguments to filter ModelPSQL1s to delete.
     * @example
     * // Delete a few ModelPSQL1s
     * const { count } = await prisma.modelPSQL1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelPSQL1DeleteManyArgs>(args?: SelectSubset<T, ModelPSQL1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelPSQL1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelPSQL1s
     * const modelPSQL1 = await prisma.modelPSQL1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelPSQL1UpdateManyArgs>(args: SelectSubset<T, ModelPSQL1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelPSQL1.
     * @param {ModelPSQL1UpsertArgs} args - Arguments to update or create a ModelPSQL1.
     * @example
     * // Update or create a ModelPSQL1
     * const modelPSQL1 = await prisma.modelPSQL1.upsert({
     *   create: {
     *     // ... data to create a ModelPSQL1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelPSQL1 we want to update
     *   }
     * })
     */
    upsert<T extends ModelPSQL1UpsertArgs>(args: SelectSubset<T, ModelPSQL1UpsertArgs<ExtArgs>>): Prisma__ModelPSQL1Client<$Result.GetResult<Prisma.$ModelPSQL1Payload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ModelPSQL1s that matches the filter.
     * @param {ModelPSQL1FindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const modelPSQL1 = await prisma.modelPSQL1.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ModelPSQL1FindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ModelPSQL1.
     * @param {ModelPSQL1AggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const modelPSQL1 = await prisma.modelPSQL1.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ModelPSQL1AggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ModelPSQL1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1CountArgs} args - Arguments to filter ModelPSQL1s to count.
     * @example
     * // Count the number of ModelPSQL1s
     * const count = await prisma.modelPSQL1.count({
     *   where: {
     *     // ... the filter for the ModelPSQL1s we want to count
     *   }
     * })
    **/
    count<T extends ModelPSQL1CountArgs>(
      args?: Subset<T, ModelPSQL1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelPSQL1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelPSQL1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelPSQL1AggregateArgs>(args: Subset<T, ModelPSQL1AggregateArgs>): Prisma.PrismaPromise<GetModelPSQL1AggregateType<T>>

    /**
     * Group by ModelPSQL1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelPSQL1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelPSQL1GroupByArgs['orderBy'] }
        : { orderBy?: ModelPSQL1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelPSQL1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelPSQL1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelPSQL1 model
   */
  readonly fields: ModelPSQL1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelPSQL1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelPSQL1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelPSQL1 model
   */ 
  interface ModelPSQL1FieldRefs {
    readonly id: FieldRef<"ModelPSQL1", 'String'>
    readonly name: FieldRef<"ModelPSQL1", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ModelPSQL1 findUnique
   */
  export type ModelPSQL1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL1 to fetch.
     */
    where: ModelPSQL1WhereUniqueInput
  }

  /**
   * ModelPSQL1 findUniqueOrThrow
   */
  export type ModelPSQL1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL1 to fetch.
     */
    where: ModelPSQL1WhereUniqueInput
  }

  /**
   * ModelPSQL1 findFirst
   */
  export type ModelPSQL1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL1 to fetch.
     */
    where?: ModelPSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL1s to fetch.
     */
    orderBy?: ModelPSQL1OrderByWithRelationInput | ModelPSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPSQL1s.
     */
    cursor?: ModelPSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPSQL1s.
     */
    distinct?: ModelPSQL1ScalarFieldEnum | ModelPSQL1ScalarFieldEnum[]
  }

  /**
   * ModelPSQL1 findFirstOrThrow
   */
  export type ModelPSQL1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL1 to fetch.
     */
    where?: ModelPSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL1s to fetch.
     */
    orderBy?: ModelPSQL1OrderByWithRelationInput | ModelPSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPSQL1s.
     */
    cursor?: ModelPSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPSQL1s.
     */
    distinct?: ModelPSQL1ScalarFieldEnum | ModelPSQL1ScalarFieldEnum[]
  }

  /**
   * ModelPSQL1 findMany
   */
  export type ModelPSQL1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL1s to fetch.
     */
    where?: ModelPSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL1s to fetch.
     */
    orderBy?: ModelPSQL1OrderByWithRelationInput | ModelPSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelPSQL1s.
     */
    cursor?: ModelPSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL1s.
     */
    skip?: number
    distinct?: ModelPSQL1ScalarFieldEnum | ModelPSQL1ScalarFieldEnum[]
  }

  /**
   * ModelPSQL1 create
   */
  export type ModelPSQL1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * The data needed to create a ModelPSQL1.
     */
    data?: XOR<ModelPSQL1CreateInput, ModelPSQL1UncheckedCreateInput>
  }

  /**
   * ModelPSQL1 createMany
   */
  export type ModelPSQL1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelPSQL1s.
     */
    data: ModelPSQL1CreateManyInput | ModelPSQL1CreateManyInput[]
  }

  /**
   * ModelPSQL1 update
   */
  export type ModelPSQL1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * The data needed to update a ModelPSQL1.
     */
    data: XOR<ModelPSQL1UpdateInput, ModelPSQL1UncheckedUpdateInput>
    /**
     * Choose, which ModelPSQL1 to update.
     */
    where: ModelPSQL1WhereUniqueInput
  }

  /**
   * ModelPSQL1 updateMany
   */
  export type ModelPSQL1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelPSQL1s.
     */
    data: XOR<ModelPSQL1UpdateManyMutationInput, ModelPSQL1UncheckedUpdateManyInput>
    /**
     * Filter which ModelPSQL1s to update
     */
    where?: ModelPSQL1WhereInput
  }

  /**
   * ModelPSQL1 upsert
   */
  export type ModelPSQL1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * The filter to search for the ModelPSQL1 to update in case it exists.
     */
    where: ModelPSQL1WhereUniqueInput
    /**
     * In case the ModelPSQL1 found by the `where` argument doesn't exist, create a new ModelPSQL1 with this data.
     */
    create: XOR<ModelPSQL1CreateInput, ModelPSQL1UncheckedCreateInput>
    /**
     * In case the ModelPSQL1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelPSQL1UpdateInput, ModelPSQL1UncheckedUpdateInput>
  }

  /**
   * ModelPSQL1 delete
   */
  export type ModelPSQL1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
    /**
     * Filter which ModelPSQL1 to delete.
     */
    where: ModelPSQL1WhereUniqueInput
  }

  /**
   * ModelPSQL1 deleteMany
   */
  export type ModelPSQL1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPSQL1s to delete
     */
    where?: ModelPSQL1WhereInput
  }

  /**
   * ModelPSQL1 findRaw
   */
  export type ModelPSQL1FindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ModelPSQL1 aggregateRaw
   */
  export type ModelPSQL1AggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ModelPSQL1 without action
   */
  export type ModelPSQL1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL1
     */
    select?: ModelPSQL1Select<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ModelPSQL1ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ModelPSQL1ScalarFieldEnum = (typeof ModelPSQL1ScalarFieldEnum)[keyof typeof ModelPSQL1ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ModelPSQL1WhereInput = {
    AND?: ModelPSQL1WhereInput | ModelPSQL1WhereInput[]
    OR?: ModelPSQL1WhereInput[]
    NOT?: ModelPSQL1WhereInput | ModelPSQL1WhereInput[]
    id?: StringFilter<"ModelPSQL1"> | string
    name?: StringNullableFilter<"ModelPSQL1"> | string | null
  }

  export type ModelPSQL1OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModelPSQL1WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelPSQL1WhereInput | ModelPSQL1WhereInput[]
    OR?: ModelPSQL1WhereInput[]
    NOT?: ModelPSQL1WhereInput | ModelPSQL1WhereInput[]
    name?: StringNullableFilter<"ModelPSQL1"> | string | null
  }, "id">

  export type ModelPSQL1OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ModelPSQL1CountOrderByAggregateInput
    _max?: ModelPSQL1MaxOrderByAggregateInput
    _min?: ModelPSQL1MinOrderByAggregateInput
  }

  export type ModelPSQL1ScalarWhereWithAggregatesInput = {
    AND?: ModelPSQL1ScalarWhereWithAggregatesInput | ModelPSQL1ScalarWhereWithAggregatesInput[]
    OR?: ModelPSQL1ScalarWhereWithAggregatesInput[]
    NOT?: ModelPSQL1ScalarWhereWithAggregatesInput | ModelPSQL1ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelPSQL1"> | string
    name?: StringNullableWithAggregatesFilter<"ModelPSQL1"> | string | null
  }

  export type ModelPSQL1CreateInput = {
    id?: string
    name?: string | null
  }

  export type ModelPSQL1UncheckedCreateInput = {
    id?: string
    name?: string | null
  }

  export type ModelPSQL1UpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL1UncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL1CreateManyInput = {
    id?: string
    name?: string | null
  }

  export type ModelPSQL1UpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL1UncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ModelPSQL1CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModelPSQL1MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModelPSQL1MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ModelPSQL1DefaultArgs instead
     */
    export type ModelPSQL1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelPSQL1DefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}