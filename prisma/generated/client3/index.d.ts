
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
 * Model ModelPSQL3
 * 
 */
export type ModelPSQL3 = $Result.DefaultSelection<Prisma.$ModelPSQL3Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ModelPSQL3s
 * const modelPSQL3s = await prisma.modelPSQL3.findMany()
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
   * // Fetch zero or more ModelPSQL3s
   * const modelPSQL3s = await prisma.modelPSQL3.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.modelPSQL3`: Exposes CRUD operations for the **ModelPSQL3** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelPSQL3s
    * const modelPSQL3s = await prisma.modelPSQL3.findMany()
    * ```
    */
  get modelPSQL3(): Prisma.ModelPSQL3Delegate<ExtArgs>;
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
    ModelPSQL3: 'ModelPSQL3'
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
      modelProps: "modelPSQL3"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ModelPSQL3: {
        payload: Prisma.$ModelPSQL3Payload<ExtArgs>
        fields: Prisma.ModelPSQL3FieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelPSQL3FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelPSQL3FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          findFirst: {
            args: Prisma.ModelPSQL3FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelPSQL3FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          findMany: {
            args: Prisma.ModelPSQL3FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>[]
          }
          create: {
            args: Prisma.ModelPSQL3CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          createMany: {
            args: Prisma.ModelPSQL3CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelPSQL3CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>[]
          }
          delete: {
            args: Prisma.ModelPSQL3DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          update: {
            args: Prisma.ModelPSQL3UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          deleteMany: {
            args: Prisma.ModelPSQL3DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelPSQL3UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelPSQL3UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPSQL3Payload>
          }
          aggregate: {
            args: Prisma.ModelPSQL3AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelPSQL3>
          }
          groupBy: {
            args: Prisma.ModelPSQL3GroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelPSQL3GroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelPSQL3CountArgs<ExtArgs>
            result: $Utils.Optional<ModelPSQL3CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
   * Model ModelPSQL3
   */

  export type AggregateModelPSQL3 = {
    _count: ModelPSQL3CountAggregateOutputType | null
    _avg: ModelPSQL3AvgAggregateOutputType | null
    _sum: ModelPSQL3SumAggregateOutputType | null
    _min: ModelPSQL3MinAggregateOutputType | null
    _max: ModelPSQL3MaxAggregateOutputType | null
  }

  export type ModelPSQL3AvgAggregateOutputType = {
    id: number | null
  }

  export type ModelPSQL3SumAggregateOutputType = {
    id: number | null
  }

  export type ModelPSQL3MinAggregateOutputType = {
    id: number | null
    model: string | null
  }

  export type ModelPSQL3MaxAggregateOutputType = {
    id: number | null
    model: string | null
  }

  export type ModelPSQL3CountAggregateOutputType = {
    id: number
    model: number
    _all: number
  }


  export type ModelPSQL3AvgAggregateInputType = {
    id?: true
  }

  export type ModelPSQL3SumAggregateInputType = {
    id?: true
  }

  export type ModelPSQL3MinAggregateInputType = {
    id?: true
    model?: true
  }

  export type ModelPSQL3MaxAggregateInputType = {
    id?: true
    model?: true
  }

  export type ModelPSQL3CountAggregateInputType = {
    id?: true
    model?: true
    _all?: true
  }

  export type ModelPSQL3AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPSQL3 to aggregate.
     */
    where?: ModelPSQL3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL3s to fetch.
     */
    orderBy?: ModelPSQL3OrderByWithRelationInput | ModelPSQL3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelPSQL3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelPSQL3s
    **/
    _count?: true | ModelPSQL3CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelPSQL3AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelPSQL3SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelPSQL3MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelPSQL3MaxAggregateInputType
  }

  export type GetModelPSQL3AggregateType<T extends ModelPSQL3AggregateArgs> = {
        [P in keyof T & keyof AggregateModelPSQL3]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelPSQL3[P]>
      : GetScalarType<T[P], AggregateModelPSQL3[P]>
  }




  export type ModelPSQL3GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelPSQL3WhereInput
    orderBy?: ModelPSQL3OrderByWithAggregationInput | ModelPSQL3OrderByWithAggregationInput[]
    by: ModelPSQL3ScalarFieldEnum[] | ModelPSQL3ScalarFieldEnum
    having?: ModelPSQL3ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelPSQL3CountAggregateInputType | true
    _avg?: ModelPSQL3AvgAggregateInputType
    _sum?: ModelPSQL3SumAggregateInputType
    _min?: ModelPSQL3MinAggregateInputType
    _max?: ModelPSQL3MaxAggregateInputType
  }

  export type ModelPSQL3GroupByOutputType = {
    id: number
    model: string | null
    _count: ModelPSQL3CountAggregateOutputType | null
    _avg: ModelPSQL3AvgAggregateOutputType | null
    _sum: ModelPSQL3SumAggregateOutputType | null
    _min: ModelPSQL3MinAggregateOutputType | null
    _max: ModelPSQL3MaxAggregateOutputType | null
  }

  type GetModelPSQL3GroupByPayload<T extends ModelPSQL3GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelPSQL3GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelPSQL3GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelPSQL3GroupByOutputType[P]>
            : GetScalarType<T[P], ModelPSQL3GroupByOutputType[P]>
        }
      >
    >


  export type ModelPSQL3Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
  }, ExtArgs["result"]["modelPSQL3"]>

  export type ModelPSQL3SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
  }, ExtArgs["result"]["modelPSQL3"]>

  export type ModelPSQL3SelectScalar = {
    id?: boolean
    model?: boolean
  }


  export type $ModelPSQL3Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelPSQL3"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string | null
    }, ExtArgs["result"]["modelPSQL3"]>
    composites: {}
  }

  type ModelPSQL3GetPayload<S extends boolean | null | undefined | ModelPSQL3DefaultArgs> = $Result.GetResult<Prisma.$ModelPSQL3Payload, S>

  type ModelPSQL3CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelPSQL3FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModelPSQL3CountAggregateInputType | true
    }

  export interface ModelPSQL3Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelPSQL3'], meta: { name: 'ModelPSQL3' } }
    /**
     * Find zero or one ModelPSQL3 that matches the filter.
     * @param {ModelPSQL3FindUniqueArgs} args - Arguments to find a ModelPSQL3
     * @example
     * // Get one ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelPSQL3FindUniqueArgs>(args: SelectSubset<T, ModelPSQL3FindUniqueArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModelPSQL3 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModelPSQL3FindUniqueOrThrowArgs} args - Arguments to find a ModelPSQL3
     * @example
     * // Get one ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelPSQL3FindUniqueOrThrowArgs>(args: SelectSubset<T, ModelPSQL3FindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModelPSQL3 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3FindFirstArgs} args - Arguments to find a ModelPSQL3
     * @example
     * // Get one ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelPSQL3FindFirstArgs>(args?: SelectSubset<T, ModelPSQL3FindFirstArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModelPSQL3 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3FindFirstOrThrowArgs} args - Arguments to find a ModelPSQL3
     * @example
     * // Get one ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelPSQL3FindFirstOrThrowArgs>(args?: SelectSubset<T, ModelPSQL3FindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModelPSQL3s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelPSQL3s
     * const modelPSQL3s = await prisma.modelPSQL3.findMany()
     * 
     * // Get first 10 ModelPSQL3s
     * const modelPSQL3s = await prisma.modelPSQL3.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelPSQL3WithIdOnly = await prisma.modelPSQL3.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelPSQL3FindManyArgs>(args?: SelectSubset<T, ModelPSQL3FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModelPSQL3.
     * @param {ModelPSQL3CreateArgs} args - Arguments to create a ModelPSQL3.
     * @example
     * // Create one ModelPSQL3
     * const ModelPSQL3 = await prisma.modelPSQL3.create({
     *   data: {
     *     // ... data to create a ModelPSQL3
     *   }
     * })
     * 
     */
    create<T extends ModelPSQL3CreateArgs>(args: SelectSubset<T, ModelPSQL3CreateArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModelPSQL3s.
     * @param {ModelPSQL3CreateManyArgs} args - Arguments to create many ModelPSQL3s.
     * @example
     * // Create many ModelPSQL3s
     * const modelPSQL3 = await prisma.modelPSQL3.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelPSQL3CreateManyArgs>(args?: SelectSubset<T, ModelPSQL3CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelPSQL3s and returns the data saved in the database.
     * @param {ModelPSQL3CreateManyAndReturnArgs} args - Arguments to create many ModelPSQL3s.
     * @example
     * // Create many ModelPSQL3s
     * const modelPSQL3 = await prisma.modelPSQL3.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelPSQL3s and only return the `id`
     * const modelPSQL3WithIdOnly = await prisma.modelPSQL3.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelPSQL3CreateManyAndReturnArgs>(args?: SelectSubset<T, ModelPSQL3CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ModelPSQL3.
     * @param {ModelPSQL3DeleteArgs} args - Arguments to delete one ModelPSQL3.
     * @example
     * // Delete one ModelPSQL3
     * const ModelPSQL3 = await prisma.modelPSQL3.delete({
     *   where: {
     *     // ... filter to delete one ModelPSQL3
     *   }
     * })
     * 
     */
    delete<T extends ModelPSQL3DeleteArgs>(args: SelectSubset<T, ModelPSQL3DeleteArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModelPSQL3.
     * @param {ModelPSQL3UpdateArgs} args - Arguments to update one ModelPSQL3.
     * @example
     * // Update one ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelPSQL3UpdateArgs>(args: SelectSubset<T, ModelPSQL3UpdateArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModelPSQL3s.
     * @param {ModelPSQL3DeleteManyArgs} args - Arguments to filter ModelPSQL3s to delete.
     * @example
     * // Delete a few ModelPSQL3s
     * const { count } = await prisma.modelPSQL3.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelPSQL3DeleteManyArgs>(args?: SelectSubset<T, ModelPSQL3DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelPSQL3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelPSQL3s
     * const modelPSQL3 = await prisma.modelPSQL3.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelPSQL3UpdateManyArgs>(args: SelectSubset<T, ModelPSQL3UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelPSQL3.
     * @param {ModelPSQL3UpsertArgs} args - Arguments to update or create a ModelPSQL3.
     * @example
     * // Update or create a ModelPSQL3
     * const modelPSQL3 = await prisma.modelPSQL3.upsert({
     *   create: {
     *     // ... data to create a ModelPSQL3
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelPSQL3 we want to update
     *   }
     * })
     */
    upsert<T extends ModelPSQL3UpsertArgs>(args: SelectSubset<T, ModelPSQL3UpsertArgs<ExtArgs>>): Prisma__ModelPSQL3Client<$Result.GetResult<Prisma.$ModelPSQL3Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModelPSQL3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3CountArgs} args - Arguments to filter ModelPSQL3s to count.
     * @example
     * // Count the number of ModelPSQL3s
     * const count = await prisma.modelPSQL3.count({
     *   where: {
     *     // ... the filter for the ModelPSQL3s we want to count
     *   }
     * })
    **/
    count<T extends ModelPSQL3CountArgs>(
      args?: Subset<T, ModelPSQL3CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelPSQL3CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelPSQL3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelPSQL3AggregateArgs>(args: Subset<T, ModelPSQL3AggregateArgs>): Prisma.PrismaPromise<GetModelPSQL3AggregateType<T>>

    /**
     * Group by ModelPSQL3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPSQL3GroupByArgs} args - Group by arguments.
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
      T extends ModelPSQL3GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelPSQL3GroupByArgs['orderBy'] }
        : { orderBy?: ModelPSQL3GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelPSQL3GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelPSQL3GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelPSQL3 model
   */
  readonly fields: ModelPSQL3FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelPSQL3.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelPSQL3Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ModelPSQL3 model
   */ 
  interface ModelPSQL3FieldRefs {
    readonly id: FieldRef<"ModelPSQL3", 'Int'>
    readonly model: FieldRef<"ModelPSQL3", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ModelPSQL3 findUnique
   */
  export type ModelPSQL3FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL3 to fetch.
     */
    where: ModelPSQL3WhereUniqueInput
  }

  /**
   * ModelPSQL3 findUniqueOrThrow
   */
  export type ModelPSQL3FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL3 to fetch.
     */
    where: ModelPSQL3WhereUniqueInput
  }

  /**
   * ModelPSQL3 findFirst
   */
  export type ModelPSQL3FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL3 to fetch.
     */
    where?: ModelPSQL3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL3s to fetch.
     */
    orderBy?: ModelPSQL3OrderByWithRelationInput | ModelPSQL3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPSQL3s.
     */
    cursor?: ModelPSQL3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPSQL3s.
     */
    distinct?: ModelPSQL3ScalarFieldEnum | ModelPSQL3ScalarFieldEnum[]
  }

  /**
   * ModelPSQL3 findFirstOrThrow
   */
  export type ModelPSQL3FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL3 to fetch.
     */
    where?: ModelPSQL3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL3s to fetch.
     */
    orderBy?: ModelPSQL3OrderByWithRelationInput | ModelPSQL3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPSQL3s.
     */
    cursor?: ModelPSQL3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPSQL3s.
     */
    distinct?: ModelPSQL3ScalarFieldEnum | ModelPSQL3ScalarFieldEnum[]
  }

  /**
   * ModelPSQL3 findMany
   */
  export type ModelPSQL3FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter, which ModelPSQL3s to fetch.
     */
    where?: ModelPSQL3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPSQL3s to fetch.
     */
    orderBy?: ModelPSQL3OrderByWithRelationInput | ModelPSQL3OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelPSQL3s.
     */
    cursor?: ModelPSQL3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPSQL3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPSQL3s.
     */
    skip?: number
    distinct?: ModelPSQL3ScalarFieldEnum | ModelPSQL3ScalarFieldEnum[]
  }

  /**
   * ModelPSQL3 create
   */
  export type ModelPSQL3CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * The data needed to create a ModelPSQL3.
     */
    data?: XOR<ModelPSQL3CreateInput, ModelPSQL3UncheckedCreateInput>
  }

  /**
   * ModelPSQL3 createMany
   */
  export type ModelPSQL3CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelPSQL3s.
     */
    data: ModelPSQL3CreateManyInput | ModelPSQL3CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelPSQL3 createManyAndReturn
   */
  export type ModelPSQL3CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModelPSQL3s.
     */
    data: ModelPSQL3CreateManyInput | ModelPSQL3CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelPSQL3 update
   */
  export type ModelPSQL3UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * The data needed to update a ModelPSQL3.
     */
    data: XOR<ModelPSQL3UpdateInput, ModelPSQL3UncheckedUpdateInput>
    /**
     * Choose, which ModelPSQL3 to update.
     */
    where: ModelPSQL3WhereUniqueInput
  }

  /**
   * ModelPSQL3 updateMany
   */
  export type ModelPSQL3UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelPSQL3s.
     */
    data: XOR<ModelPSQL3UpdateManyMutationInput, ModelPSQL3UncheckedUpdateManyInput>
    /**
     * Filter which ModelPSQL3s to update
     */
    where?: ModelPSQL3WhereInput
  }

  /**
   * ModelPSQL3 upsert
   */
  export type ModelPSQL3UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * The filter to search for the ModelPSQL3 to update in case it exists.
     */
    where: ModelPSQL3WhereUniqueInput
    /**
     * In case the ModelPSQL3 found by the `where` argument doesn't exist, create a new ModelPSQL3 with this data.
     */
    create: XOR<ModelPSQL3CreateInput, ModelPSQL3UncheckedCreateInput>
    /**
     * In case the ModelPSQL3 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelPSQL3UpdateInput, ModelPSQL3UncheckedUpdateInput>
  }

  /**
   * ModelPSQL3 delete
   */
  export type ModelPSQL3DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
    /**
     * Filter which ModelPSQL3 to delete.
     */
    where: ModelPSQL3WhereUniqueInput
  }

  /**
   * ModelPSQL3 deleteMany
   */
  export type ModelPSQL3DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPSQL3s to delete
     */
    where?: ModelPSQL3WhereInput
  }

  /**
   * ModelPSQL3 without action
   */
  export type ModelPSQL3DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPSQL3
     */
    select?: ModelPSQL3Select<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ModelPSQL3ScalarFieldEnum: {
    id: 'id',
    model: 'model'
  };

  export type ModelPSQL3ScalarFieldEnum = (typeof ModelPSQL3ScalarFieldEnum)[keyof typeof ModelPSQL3ScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ModelPSQL3WhereInput = {
    AND?: ModelPSQL3WhereInput | ModelPSQL3WhereInput[]
    OR?: ModelPSQL3WhereInput[]
    NOT?: ModelPSQL3WhereInput | ModelPSQL3WhereInput[]
    id?: IntFilter<"ModelPSQL3"> | number
    model?: StringNullableFilter<"ModelPSQL3"> | string | null
  }

  export type ModelPSQL3OrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
  }

  export type ModelPSQL3WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelPSQL3WhereInput | ModelPSQL3WhereInput[]
    OR?: ModelPSQL3WhereInput[]
    NOT?: ModelPSQL3WhereInput | ModelPSQL3WhereInput[]
    model?: StringNullableFilter<"ModelPSQL3"> | string | null
  }, "id">

  export type ModelPSQL3OrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
    _count?: ModelPSQL3CountOrderByAggregateInput
    _avg?: ModelPSQL3AvgOrderByAggregateInput
    _max?: ModelPSQL3MaxOrderByAggregateInput
    _min?: ModelPSQL3MinOrderByAggregateInput
    _sum?: ModelPSQL3SumOrderByAggregateInput
  }

  export type ModelPSQL3ScalarWhereWithAggregatesInput = {
    AND?: ModelPSQL3ScalarWhereWithAggregatesInput | ModelPSQL3ScalarWhereWithAggregatesInput[]
    OR?: ModelPSQL3ScalarWhereWithAggregatesInput[]
    NOT?: ModelPSQL3ScalarWhereWithAggregatesInput | ModelPSQL3ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModelPSQL3"> | number
    model?: StringNullableWithAggregatesFilter<"ModelPSQL3"> | string | null
  }

  export type ModelPSQL3CreateInput = {
    model?: string | null
  }

  export type ModelPSQL3UncheckedCreateInput = {
    id?: number
    model?: string | null
  }

  export type ModelPSQL3UpdateInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL3UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL3CreateManyInput = {
    id?: number
    model?: string | null
  }

  export type ModelPSQL3UpdateManyMutationInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModelPSQL3UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModelPSQL3CountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
  }

  export type ModelPSQL3AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModelPSQL3MaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
  }

  export type ModelPSQL3MinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
  }

  export type ModelPSQL3SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ModelPSQL3DefaultArgs instead
     */
    export type ModelPSQL3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelPSQL3DefaultArgs<ExtArgs>

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