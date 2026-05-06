
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  password: 'password',
  email: 'email',
  ykiho: 'ykiho',
  saupkiho: 'saupkiho',
  token: 'token',
  expiryDate: 'expiryDate',
  admin: 'admin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderReqMsgScalarFieldEnum = {
  id: 'id',
  accountId: 'accountId',
  message: 'message',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductListScalarFieldEnum = {
  jisa: 'jisa',
  smCode: 'smCode',
  smYmd: 'smYmd',
  addUser: 'addUser',
  createDt: 'createDt',
  bigo: 'bigo',
  web: 'web',
  bunryu: 'bunryu',
  step: 'step',
  fit: 'fit',
  card: 'card'
};

exports.Prisma.ProductListSubScalarFieldEnum = {
  auto: 'auto',
  jisa: 'jisa',
  smCode: 'smCode',
  smMyung: 'smMyung',
  smYmd: 'smYmd',
  danga: 'danga',
  danwi: 'danwi',
  etc1: 'etc1',
  etc2: 'etc2',
  etc3: 'etc3',
  etc4: 'etc4',
  etc5: 'etc5'
};

exports.Prisma.ProductScalarFieldEnum = {
  auto: 'auto',
  clCode: 'clCode',
  jisa: 'jisa',
  csCode: 'csCode',
  ctTel: 'ctTel',
  count: 'count',
  receive: 'receive',
  receiveYmd: 'receiveYmd',
  sell: 'sell',
  sellYmd: 'sellYmd',
  orderCheck: 'orderCheck',
  seller: 'seller',
  check: 'check',
  check2: 'check2',
  rgb: 'rgb',
  bigo: 'bigo',
  createDt: 'createDt',
  bigo2: 'bigo2',
  etc1: 'etc1',
  etc2: 'etc2',
  etc3: 'etc3',
  etc4: 'etc4',
  etc5: 'etc5',
  web: 'web',
  webPaymentItemId: 'webPaymentItemId',
  webBNPL: 'webBNPL'
};

exports.Prisma.ProductLogScalarFieldEnum = {
  logAuto: 'logAuto',
  logDatetime: 'logDatetime',
  logGubun: 'logGubun',
  logUser: 'logUser',
  logComputer: 'logComputer',
  auto: 'auto',
  clCode: 'clCode',
  jisa: 'jisa',
  csCode: 'csCode',
  ctTel: 'ctTel',
  count: 'count',
  receive: 'receive',
  receiveYmd: 'receiveYmd',
  sell: 'sell',
  sellYmd: 'sellYmd',
  orderCheck: 'orderCheck',
  seller: 'seller',
  check: 'check',
  check2: 'check2',
  rgb: 'rgb',
  bigo: 'bigo',
  createDt: 'createDt',
  bigo2: 'bigo2',
  etc1: 'etc1',
  etc2: 'etc2',
  etc3: 'etc3',
  etc4: 'etc4',
  etc5: 'etc5',
  web: 'web',
  webPaymentItemId: 'webPaymentItemId',
  webBNPL: 'webBNPL'
};

exports.Prisma.ProductListWebBunryuScalarFieldEnum = {
  code: 'code',
  name: 'name',
  fit: 'fit'
};

exports.Prisma.ProductListImageScalarFieldEnum = {
  jisa: 'jisa',
  smCode: 'smCode',
  image: 'image'
};

exports.Prisma.ProductSoldOutScalarFieldEnum = {
  id: 'id',
  smCode: 'smCode',
  soldOut: 'soldOut',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductNoticeScalarFieldEnum = {
  id: 'id',
  smCode: 'smCode',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CsScalarFieldEnum = {
  gubun: 'gubun',
  code: 'code',
  myung: 'myung',
  daepyo: 'daepyo',
  tel: 'tel',
  fax: 'fax',
  post: 'post',
  dup: 'dup',
  juso: 'juso',
  bunji: 'bunji',
  jisa: 'jisa',
  emCode: 'emCode',
  damdang: 'damdang',
  damdanghp: 'damdanghp',
  jongbl: 'jongbl',
  upte: 'upte',
  saupnum: 'saupnum',
  sauppost: 'sauppost',
  saupdup: 'saupdup',
  saupjuso: 'saupjuso',
  saupbunji: 'saupbunji',
  email: 'email',
  ediid: 'ediid',
  edipassword: 'edipassword',
  local: 'local',
  nonchart: 'nonchart',
  fymd: 'fymd',
  lymd: 'lymd',
  bigo: 'bigo',
  user: 'user',
  etc1: 'etc1',
  etc2: 'etc2',
  etc3: 'etc3',
  Chonguser: 'Chonguser',
  pro: 'pro',
  yanghan: 'yanghan',
  chunggu: 'chunggu',
  cherbang: 'cherbang',
  youngsu: 'youngsu',
  pacs: 'pacs',
  barcode: 'barcode',
  yakguk: 'yakguk',
  update: 'update',
  askumak: 'askumak',
  etc4: 'etc4',
  etc5: 'etc5',
  etc6: 'etc6',
  etc7: 'etc7',
  cms: 'cms',
  daegidisp: 'daegidisp',
  gumjinlink: 'gumjinlink',
  capture: 'capture',
  sutak: 'sutak',
  sutaklink: 'sutaklink',
  gumsalinkyn: 'gumsalinkyn',
  gumsalink: 'gumsalink',
  scaner: 'scaner',
  card: 'card',
  cardlink: 'cardlink',
  eleccherban: 'eleccherban',
  yakgukprint: 'yakgukprint',
  gumsabarcod: 'gumsabarcod',
  bdbarcode: 'bdbarcode',
  updatepath: 'updatepath',
  server: 'server',
  sanjae: 'sanjae',
  paljji: 'paljji',
  jungji: 'jungji',
  servermodel: 'servermodel',
  servername: 'servername',
  serverSN: 'serverSN',
  serverMT: 'serverMT',
  serverHDD: 'serverHDD',
  serverMemory: 'serverMemory',
  serverLocation: 'serverLocation',
  serversetup: 'serversetup',
  window: 'window',
  windowmemo: 'windowmemo',
  virusname: 'virusname',
  virussetup: 'virussetup',
  virusend: 'virusend',
  upsname: 'upsname',
  upssetup: 'upssetup',
  upsend: 'upsend',
  rollprint: 'rollprint',
  inuser: 'inuser',
  upuser: 'upuser',
  indate: 'indate',
  update2: 'update2',
  etc8: 'etc8',
  etc9: 'etc9',
  etc10: 'etc10',
  etc11: 'etc11',
  etc12: 'etc12',
  etc13: 'etc13',
  etc14: 'etc14',
  etc15: 'etc15',
  bogubun: 'bogubun',
  aschk: 'aschk',
  etc16: 'etc16',
  etc17: 'etc17',
  etc18: 'etc18',
  etc19: 'etc19',
  etc20: 'etc20',
  etc21: 'etc21',
  etc22: 'etc22',
  etc23: 'etc23',
  etc24: 'etc24',
  etc25: 'etc25',
  etc26: 'etc26',
  etc27: 'etc27',
  etc28: 'etc28',
  etc29: 'etc29',
  etc30: 'etc30',
  etc31: 'etc31',
  etc32: 'etc32',
  etc33: 'etc33',
  etc34: 'etc34',
  etc35: 'etc35',
  server_cust: 'server_cust',
  server_orde: 'server_orde',
  server_mici: 'server_mici',
  server_admi: 'server_admi',
  server_svrp: 'server_svrp',
  server_svrb: 'server_svrb',
  oauthpwd: 'oauthpwd',
  medi_use: 'medi_use',
  medi_pc: 'medi_pc',
  medi_autoju: 'medi_autoju',
  medi_grname: 'medi_grname',
  webExMsg: 'webExMsg'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  ykiho: 'ykiho'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  code: 'code',
  quantity: 'quantity',
  fit: 'fit',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  ykiho: 'ykiho',
  orderId: 'orderId',
  paymentKey: 'paymentKey',
  customerName: 'customerName',
  method: 'method',
  amount: 'amount',
  quantity: 'quantity',
  requestedAt: 'requestedAt',
  approvedAt: 'approvedAt',
  sendType: 'sendType',
  cancel: 'cancel',
  test: 'test'
};

exports.Prisma.PaymentItemScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  code: 'code',
  name: 'name',
  fit: 'fit',
  quantity: 'quantity',
  amount: 'amount'
};

exports.Prisma.PaymentVirtualScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  bankCode: 'bankCode',
  customerName: 'customerName',
  dueDate: 'dueDate',
  accountNumber: 'accountNumber'
};

exports.Prisma.PaymentRefundScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  bank: 'bank',
  accountNumber: 'accountNumber',
  holderName: 'holderName',
  amount: 'amount',
  reason: 'reason'
};

exports.Prisma.EmScalarFieldEnum = {
  code: 'code',
  name: 'name',
  jisa: 'jisa',
  buCode: 'buCode',
  endYmd: 'endYmd'
};

exports.Prisma.NewCpmMsgScalarFieldEnum = {
  auto: 'auto',
  chk: 'chk',
  recUser: 'recUser',
  recDate: 'recDate',
  msg: 'msg',
  bmsg: 'bmsg',
  senUser: 'senUser',
  senDate: 'senDate',
  show: 'show',
  dc: 'dc',
  dcUser: 'dcUser',
  dcDate: 'dcDate',
  etc1: 'etc1'
};

exports.Prisma.PgMsgScalarFieldEnum = {
  id: 'id',
  msg: 'msg'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Account: 'Account',
  OrderReqMsg: 'OrderReqMsg',
  ProductList: 'ProductList',
  ProductListSub: 'ProductListSub',
  Product: 'Product',
  ProductLog: 'ProductLog',
  ProductListWebBunryu: 'ProductListWebBunryu',
  ProductListImage: 'ProductListImage',
  ProductSoldOut: 'ProductSoldOut',
  ProductNotice: 'ProductNotice',
  Cs: 'Cs',
  Cart: 'Cart',
  CartItem: 'CartItem',
  Payment: 'Payment',
  PaymentItem: 'PaymentItem',
  PaymentVirtual: 'PaymentVirtual',
  PaymentRefund: 'PaymentRefund',
  Em: 'Em',
  NewCpmMsg: 'NewCpmMsg',
  PgMsg: 'PgMsg'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Apps\\click-store\\click-store\\src\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4uL3NyYy9wcmlzbWEvY2xpZW50Ig0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgcHJvdmlkZXIgPSAibXlzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQptb2RlbCBBY2NvdW50IHsNCiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdXNlcklkICAgICBTdHJpbmcgICAgQHVuaXF1ZSBAbWFwKG5hbWU6ICJ1c2VyX2lkIikNCiAgcGFzc3dvcmQgICBTdHJpbmcNCiAgZW1haWwgICAgICBTdHJpbmcNCiAgeWtpaG8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOCkNCiAgc2F1cGtpaG8gICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoOSkNCiAgdG9rZW4gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQ0KICBleHBpcnlEYXRlIERhdGVUaW1lPyBAbWFwKG5hbWU6ICJleHBpcnlfZGF0ZSIpDQogIGFkbWluICAgICAgQm9vbGVhbj8NCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAobmFtZTogImNyZWF0ZWRfYXQiKQ0KICB1cGRhdGVkQXQgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQHVwZGF0ZWRBdCBAbWFwKG5hbWU6ICJ1cGRhdGVkX2F0IikNCg0KICBvcmRlclJlcU1zZyBPcmRlclJlcU1zZ1tdDQp9DQoNCm1vZGVsIE9yZGVyUmVxTXNnIHsNCiAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGFjY291bnRJZCBJbnQNCiAgbWVzc2FnZSAgIFN0cmluZw0KICB1cGRhdGVkQXQgRGF0ZVRpbWUNCiAgYWNjb3VudCAgIEFjY291bnQgIEByZWxhdGlvbihmaWVsZHM6IFthY2NvdW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KDQogIEBAdW5pcXVlKFthY2NvdW50SWQsIG1lc3NhZ2VdKQ0KfQ0KDQptb2RlbCBQcm9kdWN0TGlzdCB7DQogIGppc2EgICAgIFN0cmluZyAgIEB1bmlxdWUgQG1hcCgicGxfamlzYSIpDQogIHNtQ29kZSAgIFN0cmluZyAgIEB1bmlxdWUgQG1hcCgicGxfc21jb2RlIikNCiAgc21ZbWQgICAgU3RyaW5nICAgQG1hcCgicGxfc215bWQiKQ0KICBhZGRVc2VyICBTdHJpbmcgICBAbWFwKCJwbF9hZGR1c2VyIikNCiAgY3JlYXRlRHQgRGF0ZVRpbWUgQG1hcCgicGxfY3JlYXRlZHQiKQ0KICBiaWdvICAgICBTdHJpbmcgICBAbWFwKCJwbF9iaWdvIikNCiAgd2ViICAgICAgQm9vbGVhbiAgQG1hcCgicGxfd2ViIikNCiAgYnVucnl1ICAgU3RyaW5nICAgQG1hcCgicGxfYnVucnl1IikNCiAgc3RlcCAgICAgSW50ICAgICAgQG1hcCgicGxfc3RlcCIpDQogIGZpdCAgICAgIEJvb2xlYW4gIEBtYXAoInBsX2ZpdCIpDQogIGNhcmQgICAgIEJvb2xlYW4gIEBtYXAoInBsX2NhcmQiKQ0KICAvLyBQcm9kdWN0TGlzdFN1YiDrqqjrjbjqs7zsnZgg7KGw7J24IOq0gOqzhCDshKTsoJUNCiAgLy8gcHJvZHVjdExpc3RTdWIgUHJvZHVjdExpc3RTdWIgQHJlbGF0aW9uKGZpZWxkczogW2ppc2EsIHNtQ29kZV0sIHJlZmVyZW5jZXM6IFtqaXNhLCBzbUNvZGVdKQ0KfQ0KDQptb2RlbCBQcm9kdWN0TGlzdFN1YiB7DQogIGF1dG8gICAgSW50ICAgIEBpZCBAbWFwKCJwbHNfYXV0byIpDQogIGppc2EgICAgU3RyaW5nIEBtYXAoInBsc19qaXNhIikNCiAgc21Db2RlICBTdHJpbmcgQG1hcCgicGxzX3NtY29kZSIpDQogIHNtTXl1bmcgU3RyaW5nIEBtYXAoInBsc19zbW15dW5nIikNCiAgc21ZbWQgICBTdHJpbmcgQG1hcCgicGxzX3NteW1kIikNCiAgZGFuZ2EgICBGbG9hdCAgQG1hcCgicGxzX2RhbmdhIikNCiAgZGFud2kgICBTdHJpbmcgQG1hcCgicGxzX2RhbndpIikNCiAgZXRjMSAgICBTdHJpbmcgQG1hcCgicGxzX2V0YzEiKQ0KICBldGMyICAgIFN0cmluZyBAbWFwKCJwbHNfZXRjMiIpDQogIGV0YzMgICAgU3RyaW5nIEBtYXAoInBsc19ldGMzIikNCiAgZXRjNCAgICBTdHJpbmcgQG1hcCgicGxzX2V0YzQiKQ0KICBldGM1ICAgIFN0cmluZyBAbWFwKCJwbHNfZXRjNSIpDQoNCiAgLy8gUHJvZHVjdExpc3Qg66qo64246rO87J2YIOyhsOyduCDqtIDqs4Qg7ISk7KCVDQogIC8vIHByb2R1Y3QgUHJvZHVjdD8NCn0NCg0KbW9kZWwgUHJvZHVjdCB7DQogIGF1dG8gICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcChuYW1lOiAicGRfYXV0byIpDQogIGNsQ29kZSAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfY2xjb2RlIikNCiAgamlzYSAgICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9qaXNhIikNCiAgY3NDb2RlICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9jc2NvZGUiKQ0KICBjdFRlbCAgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX2N0dGVsIikNCiAgY291bnQgICAgICAgICAgICBJbnQgICAgICBAbWFwKG5hbWU6ICJwZF9jb3VudCIpDQogIHJlY2VpdmUgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfcmVjZWl2ZSIpDQogIHJlY2VpdmVZbWQgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfcmVjZWl2ZXltZCIpDQogIHNlbGwgICAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfc2VsbCIpDQogIHNlbGxZbWQgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfc2VsbHltZCIpDQogIG9yZGVyQ2hlY2sgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfb3JkZXJjaGVjayIpDQogIHNlbGxlciAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfc2VsbGVyIikNCiAgY2hlY2sgICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9jaGVjayIpDQogIGNoZWNrMiAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfY2hlY2syIikNCiAgcmdiICAgICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9yZ2IiKQ0KICBiaWdvICAgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX2JpZ28iKQ0KICBjcmVhdGVEdCAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKG5hbWU6ICJwZF9jcmVhdGVkdCIpDQogIGJpZ28yICAgICAgICAgICAgU3RyaW5nPyAgQG1hcChuYW1lOiAicGRfYmlnbzIiKQ0KICBldGMxICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzEiKQ0KICBldGMyICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzIiKQ0KICBldGMzICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzMiKQ0KICBldGM0ICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzQiKQ0KICBldGM1ICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzUiKQ0KICB3ZWIgICAgICAgICAgICAgIEJvb2xlYW4gIEBtYXAobmFtZTogInBkX3dlYiIpDQogIHdlYlBheW1lbnRJdGVtSWQgSW50PyAgICAgQG1hcChuYW1lOiAicGRfd2ViX3BheW1lbnRfaXRlbV9pZCIpDQogIHdlYkJOUEwgICAgICAgICAgQm9vbGVhbiAgQG1hcChuYW1lOiAicGRfd2ViX2JucGwiKQ0KDQogIC8vIHBscyBQcm9kdWN0TGlzdFN1Yj8gQHJlbGF0aW9uKGZpZWxkczogW3dlYlBheW1lbnRJdGVtSWRdLCByZWZlcmVuY2VzOiBbYXV0b10pDQogIC8vIHByb2R1Y3QgUHJvZHVjdExpc3RTdWJbXQ0KICAvLyBwbHMgUHJvZHVjdExpc3RTdWI/DQp9DQoNCm1vZGVsIFByb2R1Y3RMb2cgew0KICBsb2dBdXRvICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAobmFtZTogInBkX2xvZ2F1dG8iKQ0KICBsb2dEYXRldGltZSAgICAgIERhdGVUaW1lIEBtYXAobmFtZTogInBkX2xvZ2RhdGV0aW1lIikNCiAgbG9nR3VidW4gICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9sb2dndWJ1biIpDQogIGxvZ1VzZXIgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfbG9ndXNlciIpDQogIGxvZ0NvbXB1dGVyICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfbG9nY29tcHV0ZXIiKQ0KICBhdXRvICAgICAgICAgICAgIEludCAgICAgIEBtYXAobmFtZTogInBkX2F1dG8iKQ0KICBjbENvZGUgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX2NsY29kZSIpDQogIGppc2EgICAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfamlzYSIpDQogIGNzQ29kZSAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfY3Njb2RlIikNCiAgY3RUZWwgICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9jdHRlbCIpDQogIGNvdW50ICAgICAgICAgICAgSW50ICAgICAgQG1hcChuYW1lOiAicGRfY291bnQiKQ0KICByZWNlaXZlICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX3JlY2VpdmUiKQ0KICByZWNlaXZlWW1kICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX3JlY2VpdmV5bWQiKQ0KICBzZWxsICAgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX3NlbGwiKQ0KICBzZWxsWW1kICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX3NlbGx5bWQiKQ0KICBvcmRlckNoZWNrICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX29yZGVyY2hlY2siKQ0KICBzZWxsZXIgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX3NlbGxlciIpDQogIGNoZWNrICAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfY2hlY2siKQ0KICBjaGVjazIgICAgICAgICAgIFN0cmluZyAgIEBtYXAobmFtZTogInBkX2NoZWNrMiIpDQogIHJnYiAgICAgICAgICAgICAgU3RyaW5nICAgQG1hcChuYW1lOiAicGRfcmdiIikNCiAgYmlnbyAgICAgICAgICAgICBTdHJpbmcgICBAbWFwKG5hbWU6ICJwZF9iaWdvIikNCiAgY3JlYXRlRHQgICAgICAgICBEYXRlVGltZSBAbWFwKG5hbWU6ICJwZF9jcmVhdGVkdCIpDQogIGJpZ28yICAgICAgICAgICAgU3RyaW5nPyAgQG1hcChuYW1lOiAicGRfYmlnbzIiKQ0KICBldGMxICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzEiKQ0KICBldGMyICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzIiKQ0KICBldGMzICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzMiKQ0KICBldGM0ICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzQiKQ0KICBldGM1ICAgICAgICAgICAgIFN0cmluZz8gIEBtYXAobmFtZTogInBkX2V0YzUiKQ0KICB3ZWIgICAgICAgICAgICAgIEJvb2xlYW4gIEBtYXAobmFtZTogInBkX3dlYiIpDQogIHdlYlBheW1lbnRJdGVtSWQgSW50PyAgICAgQG1hcChuYW1lOiAicGRfd2ViX3BheW1lbnRfaXRlbV9pZCIpDQogIHdlYkJOUEwgICAgICAgICAgQm9vbGVhbiAgQG1hcChuYW1lOiAicGRfd2ViX2JucGwiKQ0KfQ0KDQptb2RlbCBQcm9kdWN0TGlzdFdlYkJ1bnJ5dSB7DQogIGNvZGUgU3RyaW5nICAgQHVuaXF1ZSBAbWFwKCJwd19jb2RlIikNCiAgbmFtZSBTdHJpbmcgICBAbWFwKCJwd19uYW1lIikNCiAgZml0ICBCb29sZWFuPyBAbWFwKCJwd19maXQiKQ0KDQogIEBAbWFwKCJwcm9kdWN0bGlzdF93ZWJidW5yeXUiKQ0KfQ0KDQptb2RlbCBQcm9kdWN0TGlzdEltYWdlIHsNCiAgamlzYSAgIFN0cmluZyBAdW5pcXVlIEBtYXAoInBsaV9qaXNhIikNCiAgc21Db2RlIFN0cmluZyBAdW5pcXVlIEBtYXAoInBsaV9zbWNvZGUiKQ0KICBpbWFnZSAgQnl0ZXM/IEBtYXAoInBsaV9pbWFnZSIpDQoNCiAgQEBtYXAoInByb2R1Y3RsaXN0X2ltYWdlIikNCn0NCg0KbW9kZWwgUHJvZHVjdFNvbGRPdXQgew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgc21Db2RlICAgIFN0cmluZyAgIEB1bmlxdWUgQG1hcCgic21fY29kZSIpDQogIHNvbGRPdXQgICBCb29sZWFuICBAZGVmYXVsdCh0cnVlKSBAbWFwKCJzb2xkX291dCIpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpDQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikNCg0KICBAQG1hcCgicHJvZHVjdF9zb2xkX291dCIpDQp9DQoNCm1vZGVsIFByb2R1Y3ROb3RpY2Ugew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgc21Db2RlICAgIFN0cmluZyAgIEB1bmlxdWUgQG1hcCgic21fY29kZSIpDQogIG1lc3NhZ2UgICBTdHJpbmcgICBAZGIuVGV4dCBAbWFwKCJtZXNzYWdlIikNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikNCiAgdXBkYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQ0KDQogIEBAbWFwKCJwcm9kdWN0X25vdGljZSIpDQp9DQoNCm1vZGVsIENzIHsNCiAgZ3VidW4gICAgICAgICAgU3RyaW5nICBAdW5pcXVlIEBtYXAoImNzX2d1YnVuIikNCiAgY29kZSAgICAgICAgICAgU3RyaW5nICBAdW5pcXVlIEBtYXAoImNzX2NvZGUiKQ0KICBteXVuZyAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX215dW5nIikNCiAgZGFlcHlvICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19kYWVweW8iKQ0KICB0ZWwgICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3RlbCIpDQogIGZheCAgICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZmF4IikNCiAgcG9zdCAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19wb3N0IikNCiAgZHVwICAgICAgICAgICAgSW50PyAgICBAbWFwKCJjc19kdXAiKQ0KICBqdXNvICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2p1c28iKQ0KICBidW5qaSAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2J1bmppIikNCiAgamlzYSAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19qaXNhIikNCiAgZW1Db2RlICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19lbWNvZGUiKQ0KICBkYW1kYW5nICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2RhbWRhbmciKQ0KICBkYW1kYW5naHAgICAgICBTdHJpbmc/IEBtYXAoImNzX2RhbWRhbmdocCIpDQogIGpvbmdibCAgICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfam9uZ2JsIikNCiAgdXB0ZSAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc191cHRlIikNCiAgc2F1cG51bSAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19zYXVwbnVtIikNCiAgc2F1cHBvc3QgICAgICAgU3RyaW5nPyBAbWFwKCJjc19zYXVwcG9zdCIpDQogIHNhdXBkdXAgICAgICAgIEludD8gICAgQG1hcCgiY3Nfc2F1cGR1cCIpDQogIHNhdXBqdXNvICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfc2F1cGp1c28iKQ0KICBzYXVwYnVuamkgICAgICBTdHJpbmc/IEBtYXAoImNzX3NhdXBidW5qaSIpDQogIGVtYWlsICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZW1haWwiKQ0KICBlZGlpZCAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2VkaWlkIikNCiAgZWRpcGFzc3dvcmQgICAgU3RyaW5nPyBAbWFwKCJjc19lZGlwYXNzd29yZCIpDQogIGxvY2FsICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfbG9jYWwiKQ0KICBub25jaGFydCAgICAgICBTdHJpbmc/IEBtYXAoImNzX25vbmNoYXJ0IikNCiAgZnltZCAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19meW1kIikNCiAgbHltZCAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19seW1kIikNCiAgYmlnbyAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19iaWdvIikNCiAgdXNlciAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc191c2VyIikNCiAgZXRjMSAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMxIikNCiAgZXRjMiAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMyIikNCiAgZXRjMyAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMzIikNCiAgQ2hvbmd1c2VyICAgICAgU3RyaW5nPyBAbWFwKCJjc19DaG9uZ3VzZXIiKQ0KICBwcm8gICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3BybyIpDQogIHlhbmdoYW4gICAgICAgIFN0cmluZz8gQG1hcCgiY3NfeWFuZ2hhbiIpDQogIGNodW5nZ3UgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfY2h1bmdndSIpDQogIGNoZXJiYW5nICAgICAgIFN0cmluZz8gQG1hcCgiY3NfY2hlcmJhbmciKQ0KICB5b3VuZ3N1ICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3lvdW5nc3UiKQ0KICBwYWNzICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3BhY3MiKQ0KICBiYXJjb2RlICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2JhcmNvZGUiKQ0KICB5YWtndWsgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3lha2d1ayIpDQogIHVwZGF0ZSAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfdXBkYXRlIikNCiAgYXNrdW1hayAgICAgICAgSW50PyAgICBAbWFwKCJjc19hc2t1bWFrIikNCiAgZXRjNCAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGM0IikNCiAgZXRjNSAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGM1IikNCiAgZXRjNiAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGM2IikNCiAgZXRjNyAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGM3IikNCiAgY21zICAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19jbXMiKQ0KICBkYWVnaWRpc3AgICAgICBTdHJpbmc/IEBtYXAoImNzX2RhZWdpZGlzcCIpDQogIGd1bWppbmxpbmsgICAgIFN0cmluZz8gQG1hcCgiY3NfZ3VtamlubGluayIpDQogIGNhcHR1cmUgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfY2FwdHVyZSIpDQogIHN1dGFrICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfc3V0YWsiKQ0KICBzdXRha2xpbmsgICAgICBTdHJpbmc/IEBtYXAoImNzX3N1dGFrbGluayIpDQogIGd1bXNhbGlua3luICAgIFN0cmluZz8gQG1hcCgiY3NfZ3Vtc2FsaW5reW4iKQ0KICBndW1zYWxpbmsgICAgICBTdHJpbmc/IEBtYXAoImNzX2d1bXNhbGluayIpDQogIHNjYW5lciAgICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfc2NhbmVyIikNCiAgY2FyZCAgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19jYXJkIikNCiAgY2FyZGxpbmsgICAgICAgU3RyaW5nPyBAbWFwKCJjc19jYXJkbGluayIpDQogIGVsZWNjaGVyYmFuICAgIFN0cmluZz8gQG1hcCgiY3NfZWxlY2NoZXJiYW5nIikNCiAgeWFrZ3VrcHJpbnQgICAgU3RyaW5nPyBAbWFwKCJjc195YWtndWtwcmludCIpDQogIGd1bXNhYmFyY29kICAgIFN0cmluZz8gQG1hcCgiY3NfZ3Vtc2FiYXJjb2RlIikNCiAgYmRiYXJjb2RlICAgICAgU3RyaW5nPyBAbWFwKCJjc19iZGJhcmNvZGUiKQ0KICB1cGRhdGVwYXRoICAgICBTdHJpbmc/IEBtYXAoImNzX3VwZGF0ZXBhdGgiKQ0KICBzZXJ2ZXIgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3NlcnZlciIpDQogIHNhbmphZSAgICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfc2FuamFlIikNCiAgcGFsamppICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19wYWxqamkiKQ0KICBqdW5namkgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2p1bmdqaSIpDQogIHNlcnZlcm1vZGVsICAgIFN0cmluZz8gQG1hcCgiY3Nfc2VydmVybW9kZWwiKQ0KICBzZXJ2ZXJuYW1lICAgICBTdHJpbmc/IEBtYXAoImNzX3NlcnZlcm5hbWUiKQ0KICBzZXJ2ZXJTTiAgICAgICBTdHJpbmc/IEBtYXAoImNzX3NlcnZlclNOIikNCiAgc2VydmVyTVQgICAgICAgU3RyaW5nPyBAbWFwKCJjc19zZXJ2ZXJNVCIpDQogIHNlcnZlckhERCAgICAgIFN0cmluZz8gQG1hcCgiY3Nfc2VydmVySEREIikNCiAgc2VydmVyTWVtb3J5ICAgU3RyaW5nPyBAbWFwKCJjc19zZXJ2ZXJNZW1vcnkiKQ0KICBzZXJ2ZXJMb2NhdGlvbiBTdHJpbmc/IEBtYXAoImNzX3NlcnZlckxvY2F0aW9uIikNCiAgc2VydmVyc2V0dXAgICAgU3RyaW5nPyBAbWFwKCJjc19zZXJ2ZXJzZXR1cCIpDQogIHdpbmRvdyAgICAgICAgIFN0cmluZz8gQG1hcCgiY3Nfd2luZG93IikNCiAgd2luZG93bWVtbyAgICAgU3RyaW5nPyBAbWFwKCJjc193aW5kb3dtZW1vIikNCiAgdmlydXNuYW1lICAgICAgU3RyaW5nPyBAbWFwKCJjc192aXJ1c25hbWUiKQ0KICB2aXJ1c3NldHVwICAgICBTdHJpbmc/IEBtYXAoImNzX3ZpcnVzc2V0dXAiKQ0KICB2aXJ1c2VuZCAgICAgICBTdHJpbmc/IEBtYXAoImNzX3ZpcnVzZW5kIikNCiAgdXBzbmFtZSAgICAgICAgU3RyaW5nPyBAbWFwKCJjc191cHNuYW1lIikNCiAgdXBzc2V0dXAgICAgICAgU3RyaW5nPyBAbWFwKCJjc191cHNzZXR1cCIpDQogIHVwc2VuZCAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfdXBzZW5kIikNCiAgcm9sbHByaW50ICAgICAgU3RyaW5nICBAbWFwKCJjc19yb2xscHJpbnQiKQ0KICBpbnVzZXIgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2ludXNlciIpDQogIHVwdXNlciAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfdXB1c2VyIikNCiAgaW5kYXRlICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19pbmRhdGUiKQ0KICB1cGRhdGUyICAgICAgICBTdHJpbmc/IEBtYXAoImNzX3VwZGF0ZTIiKQ0KICBldGM4ICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzgiKQ0KICBldGM5ICAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzkiKQ0KICBldGMxMCAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzEwIikNCiAgZXRjMTEgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMxMSIpDQogIGV0YzEyICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMTIiKQ0KICBldGMxMyAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzEzIikNCiAgZXRjMTQgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMxNCIpDQogIGV0YzE1ICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMTUiKQ0KICBib2d1YnVuICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2JvZ3VidW4iKQ0KICBhc2NoayAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2FzY2hrIikNCiAgZXRjMTYgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMxNiIpDQogIGV0YzE3ICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMTciKQ0KICBldGMxOCAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzE4IikNCiAgZXRjMTkgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMxOSIpDQogIGV0YzIwICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMjAiKQ0KICBldGMyMSAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzIxIikNCiAgZXRjMjIgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMyMiIpDQogIGV0YzIzICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMjMiKQ0KICBldGMyNCAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzI0IikNCiAgZXRjMjUgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMyNSIpDQogIGV0YzI2ICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMjYiKQ0KICBldGMyNyAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzI3IikNCiAgZXRjMjggICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMyOCIpDQogIGV0YzI5ICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMjkiKQ0KICBldGMzMCAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzMwIikNCiAgZXRjMzEgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMzMSIpDQogIGV0YzMyICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMzIiKQ0KICBldGMzMyAgICAgICAgICBTdHJpbmc/IEBtYXAoImNzX2V0YzMzIikNCiAgZXRjMzQgICAgICAgICAgU3RyaW5nPyBAbWFwKCJjc19ldGMzNCIpDQogIGV0YzM1ICAgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfZXRjMzUiKQ0KICBzZXJ2ZXJfY3VzdCAgICBTdHJpbmc/IEBtYXAoImNzX3NlcnZlcl9jdXN0b21lciIpDQogIHNlcnZlcl9vcmRlICAgIFN0cmluZz8gQG1hcCgiY3Nfc2VydmVyX29yZGVybnVtIikNCiAgc2VydmVyX21pY2kgICAgU3RyaW5nPyBAbWFwKCJjc19zZXJ2ZXJfbWljaWQiKQ0KICBzZXJ2ZXJfYWRtaSAgICBTdHJpbmc/IEBtYXAoImNzX3NlcnZlcl9hZG1pbmlkIikNCiAgc2VydmVyX3N2cnAgICAgU3RyaW5nPyBAbWFwKCJjc19zZXJ2ZXJfc3ZycGFzcyIpDQogIHNlcnZlcl9zdnJiICAgIFN0cmluZz8gQG1hcCgiY3Nfc2VydmVyX3N2cmJpZ28iKQ0KICBvYXV0aHB3ZCAgICAgICBTdHJpbmcgIEBtYXAoImNzX29hdXRocHdkIikNCiAgbWVkaV91c2UgICAgICAgU3RyaW5nPyBAbWFwKCJjc19tZWRpX3VzZSIpDQogIG1lZGlfcGMgICAgICAgIFN0cmluZz8gQG1hcCgiY3NfbWVkaV9wYyIpDQogIG1lZGlfYXV0b2p1ICAgIFN0cmluZz8gQG1hcCgiY3NfbWVkaV9hdXRvanVwc3UiKQ0KICBtZWRpX2dybmFtZSAgICBTdHJpbmc/IEBtYXAoImNzX21lZGlfZ3JuYW1lIikNCiAgd2ViRXhNc2cgICAgICAgQm9vbGVhbiBAbWFwKCJjc193ZWJfZXhtc2ciKQ0KfQ0KDQptb2RlbCBDYXJ0IHsNCiAgaWQgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgeWtpaG8gICAgIFN0cmluZw0KICBjYXJ0SXRlbXMgQ2FydEl0ZW1bXQ0KfQ0KDQptb2RlbCBDYXJ0SXRlbSB7DQogIGlkICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjYXJ0SWQgICAgICBJbnQgICAgICAgQG1hcCgiY2FydF9pZCIpDQogIGNvZGUgICAgICAgIFN0cmluZw0KICBxdWFudGl0eSAgICBJbnQNCiAgZml0ICAgICAgICAgQm9vbGVhbg0KICBjcmVhdGVkRGF0ZSBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfZGF0ZSIpDQogIHVwZGF0ZWREYXRlIERhdGVUaW1lPyBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfZGF0ZSIpDQogIGNhcnQgICAgICAgIENhcnQgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY2FydElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgLy8gcHJvZHVjdCBQcm9kdWN0TGlzdFN1Yg0KDQogIEBAbWFwKCJjYXJ0X2l0ZW0iKQ0KfQ0KDQptb2RlbCBQYXltZW50IHsNCiAgaWQgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB5a2lobyAgICAgICAgU3RyaW5nDQogIG9yZGVySWQgICAgICBTdHJpbmcgICAgQHVuaXF1ZSBAbWFwKCJvcmRlcl9pZCIpDQogIHBheW1lbnRLZXkgICBTdHJpbmcgICAgQG1hcCgicGF5bWVudF9rZXkiKQ0KICBjdXN0b21lck5hbWUgU3RyaW5nICAgIEBtYXAoImN1c3RvbWVyX25hbWUiKQ0KICBtZXRob2QgICAgICAgU3RyaW5nDQogIGFtb3VudCAgICAgICBJbnQNCiAgcXVhbnRpdHkgICAgIEludA0KICByZXF1ZXN0ZWRBdCAgRGF0ZVRpbWU/IEBtYXAoInJlcXVlc3RlZF9hdCIpDQogIGFwcHJvdmVkQXQgICBEYXRlVGltZT8gQG1hcCgiYXBwcm92ZWRfYXQiKQ0KICBzZW5kVHlwZSAgICAgU3RyaW5nICAgIEBtYXAoInNlbmRfdHlwZSIpDQogIGNhbmNlbCAgICAgICBCb29sZWFuDQogIHRlc3QgICAgICAgICBJbnQ/DQoNCiAgLy8gUmVsYXRpb24gd2l0aCBQYXltZW50SXRlbQ0KICBwYXltZW50SXRlbXMgUGF5bWVudEl0ZW1bXQ0KDQogIC8vIFJlbGF0aW9uIHdpdGggUGF5bWVudFZpcnR1YWwNCiAgdmlydHVhbCBQYXltZW50VmlydHVhbD8NCiAgcmVmdW5kICBQYXltZW50UmVmdW5kPw0KfQ0KDQptb2RlbCBQYXltZW50SXRlbSB7DQogIGlkICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHBheW1lbnRJZCBJbnQNCiAgY29kZSAgICAgIFN0cmluZw0KICBuYW1lICAgICAgU3RyaW5nDQogIGZpdCAgICAgICBCb29sZWFuDQogIHF1YW50aXR5ICBJbnQNCiAgYW1vdW50ICAgIEZsb2F0DQoNCiAgLy8gUmVsYXRpb24gd2l0aCBQYXltZW50DQogIHBheW1lbnQgUGF5bWVudCBAcmVsYXRpb24oZmllbGRzOiBbcGF5bWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBAQG1hcCgicGF5bWVudF9pdGVtIikNCn0NCg0KbW9kZWwgUGF5bWVudFZpcnR1YWwgew0KICBpZCAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHBheW1lbnRJZCAgICAgSW50ICAgICAgQHVuaXF1ZSBAbWFwKCJwYXltZW50X2lkIikNCiAgYmFua0NvZGUgICAgICBTdHJpbmcgICBAbWFwKCJiYW5rX2NvZGUiKQ0KICBjdXN0b21lck5hbWUgIFN0cmluZyAgIEBtYXAoImN1c3RvbWVyX25hbWUiKQ0KICBkdWVEYXRlICAgICAgIERhdGVUaW1lIEBtYXAoImR1ZV9kYXRlIikNCiAgYWNjb3VudE51bWJlciBTdHJpbmcgICBAbWFwKCJhY2NvdW50X251bWJlciIpDQoNCiAgLy8gUmVsYXRpb24gd2l0aCBQYXltZW50DQogIHBheW1lbnQgUGF5bWVudCBAcmVsYXRpb24oZmllbGRzOiBbcGF5bWVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBAQG1hcCgicGF5bWVudF92aXJ0dWFsIikNCn0NCg0KbW9kZWwgUGF5bWVudFJlZnVuZCB7DQogIGlkICAgICAgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHBheW1lbnRJZCAgICAgSW50ICAgIEB1bmlxdWUNCiAgYmFuayAgICAgICAgICBTdHJpbmcNCiAgYWNjb3VudE51bWJlciBTdHJpbmcNCiAgaG9sZGVyTmFtZSAgICBTdHJpbmcNCiAgYW1vdW50ICAgICAgICBJbnQNCiAgcmVhc29uICAgICAgICBTdHJpbmcNCg0KICBwYXltZW50IFBheW1lbnQgQHJlbGF0aW9uKGZpZWxkczogW3BheW1lbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCm1vZGVsIEVtIHsNCiAgY29kZSAgIFN0cmluZyAgQHVuaXF1ZSBAbWFwKG5hbWU6ICJlbV9jb2RlIikNCiAgbmFtZSAgIFN0cmluZz8gQG1hcChuYW1lOiAiZW1fbmFtZSIpDQogIGppc2EgICBTdHJpbmc/IEBtYXAobmFtZTogImVtX2ppc2EiKQ0KICBidUNvZGUgU3RyaW5nPyBAbWFwKG5hbWU6ICJlbV9idWNvZGUiKQ0KICBlbmRZbWQgU3RyaW5nPyBAbWFwKG5hbWU6ICJlbV9lbmR5bWQiKQ0KfQ0KDQptb2RlbCBOZXdDcG1Nc2cgew0KICBhdXRvICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAobmFtZTogImNtX2F1dG8iKQ0KICBjaGsgICAgIFN0cmluZyAgIEBtYXAobmFtZTogImNtX2NoayIpDQogIHJlY1VzZXIgU3RyaW5nPyAgQG1hcChuYW1lOiAiY21fcmVjdXNlciIpDQogIHJlY0RhdGUgU3RyaW5nPyAgQG1hcChuYW1lOiAiY21fcmVjZGF0ZSIpDQogIG1zZyAgICAgU3RyaW5nPyAgQG1hcChuYW1lOiAiY21fbXNnIikNCiAgYm1zZyAgICBCeXRlcz8gICBAbWFwKG5hbWU6ICJjbV9ibXNnIikNCiAgc2VuVXNlciBTdHJpbmc/ICBAbWFwKG5hbWU6ICJjbV9zZW51c2VyIikNCiAgc2VuRGF0ZSBTdHJpbmc/ICBAbWFwKG5hbWU6ICJjbV9zZW5kYXRlIikNCiAgc2hvdyAgICBTdHJpbmc/ICBAbWFwKG5hbWU6ICJjbV9zaG93IikNCiAgZGMgICAgICBCb29sZWFuPyBAbWFwKG5hbWU6ICJjbV9kYyIpDQogIGRjVXNlciAgU3RyaW5nPyAgQG1hcChuYW1lOiAiY21fZGN1c2VyIikNCiAgZGNEYXRlICBTdHJpbmc/ICBAbWFwKG5hbWU6ICJjbV9kY2RhdGUiKQ0KICBldGMxICAgIFN0cmluZz8gIEBtYXAobmFtZTogImNtX2V0YzEiKQ0KfQ0KDQptb2RlbCBQZ01zZyB7DQogIGlkICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbXNnIEJ5dGVzPw0KfQ0K",
  "inlineSchemaHash": "abec41098715b1fe0834cb62a2dc83b6f59082dd47b47511cce03e7b9ed6a07b",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/prisma/client",
    "prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ykiho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saupkiho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiryDate\",\"dbName\":\"expiry_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"orderReqMsg\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderReqMsg\",\"relationName\":\"AccountToOrderReqMsg\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderReqMsg\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToOrderReqMsg\",\"relationFromFields\":[\"accountId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"accountId\",\"message\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"accountId\",\"message\"]}],\"isGenerated\":false},\"ProductList\":{\"dbName\":null,\"fields\":[{\"name\":\"jisa\",\"dbName\":\"pl_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smCode\",\"dbName\":\"pl_smcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smYmd\",\"dbName\":\"pl_smymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addUser\",\"dbName\":\"pl_adduser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createDt\",\"dbName\":\"pl_createdt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo\",\"dbName\":\"pl_bigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"web\",\"dbName\":\"pl_web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bunryu\",\"dbName\":\"pl_bunryu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"dbName\":\"pl_step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fit\",\"dbName\":\"pl_fit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card\",\"dbName\":\"pl_card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductListSub\":{\"dbName\":null,\"fields\":[{\"name\":\"auto\",\"dbName\":\"pls_auto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jisa\",\"dbName\":\"pls_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smCode\",\"dbName\":\"pls_smcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smMyung\",\"dbName\":\"pls_smmyung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smYmd\",\"dbName\":\"pls_smymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"danga\",\"dbName\":\"pls_danga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"danwi\",\"dbName\":\"pls_danwi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc1\",\"dbName\":\"pls_etc1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc2\",\"dbName\":\"pls_etc2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc3\",\"dbName\":\"pls_etc3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc4\",\"dbName\":\"pls_etc4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc5\",\"dbName\":\"pls_etc5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"auto\",\"dbName\":\"pd_auto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clCode\",\"dbName\":\"pd_clcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jisa\",\"dbName\":\"pd_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csCode\",\"dbName\":\"pd_cscode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ctTel\",\"dbName\":\"pd_cttel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"dbName\":\"pd_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receive\",\"dbName\":\"pd_receive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiveYmd\",\"dbName\":\"pd_receiveymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell\",\"dbName\":\"pd_sell\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellYmd\",\"dbName\":\"pd_sellymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderCheck\",\"dbName\":\"pd_ordercheck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller\",\"dbName\":\"pd_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check\",\"dbName\":\"pd_check\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check2\",\"dbName\":\"pd_check2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rgb\",\"dbName\":\"pd_rgb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo\",\"dbName\":\"pd_bigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createDt\",\"dbName\":\"pd_createdt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo2\",\"dbName\":\"pd_bigo2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc1\",\"dbName\":\"pd_etc1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc2\",\"dbName\":\"pd_etc2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc3\",\"dbName\":\"pd_etc3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc4\",\"dbName\":\"pd_etc4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc5\",\"dbName\":\"pd_etc5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"web\",\"dbName\":\"pd_web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webPaymentItemId\",\"dbName\":\"pd_web_payment_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webBNPL\",\"dbName\":\"pd_web_bnpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductLog\":{\"dbName\":null,\"fields\":[{\"name\":\"logAuto\",\"dbName\":\"pd_logauto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logDatetime\",\"dbName\":\"pd_logdatetime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logGubun\",\"dbName\":\"pd_loggubun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logUser\",\"dbName\":\"pd_loguser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logComputer\",\"dbName\":\"pd_logcomputer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auto\",\"dbName\":\"pd_auto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clCode\",\"dbName\":\"pd_clcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jisa\",\"dbName\":\"pd_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"csCode\",\"dbName\":\"pd_cscode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ctTel\",\"dbName\":\"pd_cttel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"dbName\":\"pd_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receive\",\"dbName\":\"pd_receive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiveYmd\",\"dbName\":\"pd_receiveymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sell\",\"dbName\":\"pd_sell\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sellYmd\",\"dbName\":\"pd_sellymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderCheck\",\"dbName\":\"pd_ordercheck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller\",\"dbName\":\"pd_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check\",\"dbName\":\"pd_check\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"check2\",\"dbName\":\"pd_check2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rgb\",\"dbName\":\"pd_rgb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo\",\"dbName\":\"pd_bigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createDt\",\"dbName\":\"pd_createdt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo2\",\"dbName\":\"pd_bigo2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc1\",\"dbName\":\"pd_etc1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc2\",\"dbName\":\"pd_etc2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc3\",\"dbName\":\"pd_etc3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc4\",\"dbName\":\"pd_etc4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc5\",\"dbName\":\"pd_etc5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"web\",\"dbName\":\"pd_web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webPaymentItemId\",\"dbName\":\"pd_web_payment_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webBNPL\",\"dbName\":\"pd_web_bnpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductListWebBunryu\":{\"dbName\":\"productlist_webbunryu\",\"fields\":[{\"name\":\"code\",\"dbName\":\"pw_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"dbName\":\"pw_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fit\",\"dbName\":\"pw_fit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductListImage\":{\"dbName\":\"productlist_image\",\"fields\":[{\"name\":\"jisa\",\"dbName\":\"pli_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smCode\",\"dbName\":\"pli_smcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"dbName\":\"pli_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductSoldOut\":{\"dbName\":\"product_sold_out\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smCode\",\"dbName\":\"sm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"soldOut\",\"dbName\":\"sold_out\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductNotice\":{\"dbName\":\"product_notice\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"smCode\",\"dbName\":\"sm_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"dbName\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cs\":{\"dbName\":null,\"fields\":[{\"name\":\"gubun\",\"dbName\":\"cs_gubun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"dbName\":\"cs_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"myung\",\"dbName\":\"cs_myung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daepyo\",\"dbName\":\"cs_daepyo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"dbName\":\"cs_tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fax\",\"dbName\":\"cs_fax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"dbName\":\"cs_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dup\",\"dbName\":\"cs_dup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"juso\",\"dbName\":\"cs_juso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bunji\",\"dbName\":\"cs_bunji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jisa\",\"dbName\":\"cs_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emCode\",\"dbName\":\"cs_emcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"damdang\",\"dbName\":\"cs_damdang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"damdanghp\",\"dbName\":\"cs_damdanghp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jongbl\",\"dbName\":\"cs_jongbl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upte\",\"dbName\":\"cs_upte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saupnum\",\"dbName\":\"cs_saupnum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sauppost\",\"dbName\":\"cs_sauppost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saupdup\",\"dbName\":\"cs_saupdup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saupjuso\",\"dbName\":\"cs_saupjuso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saupbunji\",\"dbName\":\"cs_saupbunji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"cs_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ediid\",\"dbName\":\"cs_ediid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edipassword\",\"dbName\":\"cs_edipassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"local\",\"dbName\":\"cs_local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nonchart\",\"dbName\":\"cs_nonchart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fymd\",\"dbName\":\"cs_fymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lymd\",\"dbName\":\"cs_lymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigo\",\"dbName\":\"cs_bigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"dbName\":\"cs_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc1\",\"dbName\":\"cs_etc1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc2\",\"dbName\":\"cs_etc2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc3\",\"dbName\":\"cs_etc3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Chonguser\",\"dbName\":\"cs_Chonguser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pro\",\"dbName\":\"cs_pro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yanghan\",\"dbName\":\"cs_yanghan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chunggu\",\"dbName\":\"cs_chunggu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cherbang\",\"dbName\":\"cs_cherbang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"youngsu\",\"dbName\":\"cs_youngsu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pacs\",\"dbName\":\"cs_pacs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barcode\",\"dbName\":\"cs_barcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yakguk\",\"dbName\":\"cs_yakguk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update\",\"dbName\":\"cs_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"askumak\",\"dbName\":\"cs_askumak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc4\",\"dbName\":\"cs_etc4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc5\",\"dbName\":\"cs_etc5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc6\",\"dbName\":\"cs_etc6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc7\",\"dbName\":\"cs_etc7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cms\",\"dbName\":\"cs_cms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daegidisp\",\"dbName\":\"cs_daegidisp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gumjinlink\",\"dbName\":\"cs_gumjinlink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capture\",\"dbName\":\"cs_capture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sutak\",\"dbName\":\"cs_sutak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sutaklink\",\"dbName\":\"cs_sutaklink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gumsalinkyn\",\"dbName\":\"cs_gumsalinkyn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gumsalink\",\"dbName\":\"cs_gumsalink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scaner\",\"dbName\":\"cs_scaner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card\",\"dbName\":\"cs_card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cardlink\",\"dbName\":\"cs_cardlink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eleccherban\",\"dbName\":\"cs_eleccherbang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yakgukprint\",\"dbName\":\"cs_yakgukprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gumsabarcod\",\"dbName\":\"cs_gumsabarcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bdbarcode\",\"dbName\":\"cs_bdbarcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatepath\",\"dbName\":\"cs_updatepath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server\",\"dbName\":\"cs_server\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sanjae\",\"dbName\":\"cs_sanjae\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paljji\",\"dbName\":\"cs_paljji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jungji\",\"dbName\":\"cs_jungji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servermodel\",\"dbName\":\"cs_servermodel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servername\",\"dbName\":\"cs_servername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverSN\",\"dbName\":\"cs_serverSN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverMT\",\"dbName\":\"cs_serverMT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverHDD\",\"dbName\":\"cs_serverHDD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverMemory\",\"dbName\":\"cs_serverMemory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverLocation\",\"dbName\":\"cs_serverLocation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serversetup\",\"dbName\":\"cs_serversetup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"window\",\"dbName\":\"cs_window\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"windowmemo\",\"dbName\":\"cs_windowmemo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"virusname\",\"dbName\":\"cs_virusname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"virussetup\",\"dbName\":\"cs_virussetup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"virusend\",\"dbName\":\"cs_virusend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upsname\",\"dbName\":\"cs_upsname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upssetup\",\"dbName\":\"cs_upssetup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upsend\",\"dbName\":\"cs_upsend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rollprint\",\"dbName\":\"cs_rollprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inuser\",\"dbName\":\"cs_inuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upuser\",\"dbName\":\"cs_upuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"indate\",\"dbName\":\"cs_indate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update2\",\"dbName\":\"cs_update2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc8\",\"dbName\":\"cs_etc8\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc9\",\"dbName\":\"cs_etc9\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc10\",\"dbName\":\"cs_etc10\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc11\",\"dbName\":\"cs_etc11\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc12\",\"dbName\":\"cs_etc12\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc13\",\"dbName\":\"cs_etc13\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc14\",\"dbName\":\"cs_etc14\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc15\",\"dbName\":\"cs_etc15\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bogubun\",\"dbName\":\"cs_bogubun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aschk\",\"dbName\":\"cs_aschk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc16\",\"dbName\":\"cs_etc16\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc17\",\"dbName\":\"cs_etc17\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc18\",\"dbName\":\"cs_etc18\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc19\",\"dbName\":\"cs_etc19\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc20\",\"dbName\":\"cs_etc20\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc21\",\"dbName\":\"cs_etc21\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc22\",\"dbName\":\"cs_etc22\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc23\",\"dbName\":\"cs_etc23\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc24\",\"dbName\":\"cs_etc24\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc25\",\"dbName\":\"cs_etc25\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc26\",\"dbName\":\"cs_etc26\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc27\",\"dbName\":\"cs_etc27\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc28\",\"dbName\":\"cs_etc28\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc29\",\"dbName\":\"cs_etc29\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc30\",\"dbName\":\"cs_etc30\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc31\",\"dbName\":\"cs_etc31\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc32\",\"dbName\":\"cs_etc32\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc33\",\"dbName\":\"cs_etc33\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc34\",\"dbName\":\"cs_etc34\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc35\",\"dbName\":\"cs_etc35\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_cust\",\"dbName\":\"cs_server_customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_orde\",\"dbName\":\"cs_server_ordernum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_mici\",\"dbName\":\"cs_server_micid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_admi\",\"dbName\":\"cs_server_adminid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_svrp\",\"dbName\":\"cs_server_svrpass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_svrb\",\"dbName\":\"cs_server_svrbigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthpwd\",\"dbName\":\"cs_oauthpwd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medi_use\",\"dbName\":\"cs_medi_use\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medi_pc\",\"dbName\":\"cs_medi_pc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medi_autoju\",\"dbName\":\"cs_medi_autojupsu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medi_grname\",\"dbName\":\"cs_medi_grname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webExMsg\",\"dbName\":\"cs_web_exmsg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cart\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ykiho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cartItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CartItem\",\"relationName\":\"CartToCartItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CartItem\":{\"dbName\":\"cart_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cartId\",\"dbName\":\"cart_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdDate\",\"dbName\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedDate\",\"dbName\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"cart\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cart\",\"relationName\":\"CartToCartItem\",\"relationFromFields\":[\"cartId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ykiho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"dbName\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentKey\",\"dbName\":\"payment_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerName\",\"dbName\":\"customer_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestedAt\",\"dbName\":\"requested_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approvedAt\",\"dbName\":\"approved_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sendType\",\"dbName\":\"send_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentItem\",\"relationName\":\"PaymentToPaymentItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"virtual\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentVirtual\",\"relationName\":\"PaymentToPaymentVirtual\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refund\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentRefund\",\"relationName\":\"PaymentToPaymentRefund\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentItem\":{\"dbName\":\"payment_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToPaymentItem\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentVirtual\":{\"dbName\":\"payment_virtual\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"dbName\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankCode\",\"dbName\":\"bank_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerName\",\"dbName\":\"customer_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueDate\",\"dbName\":\"due_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountNumber\",\"dbName\":\"account_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToPaymentVirtual\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentRefund\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"holderName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"PaymentToPaymentRefund\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Em\":{\"dbName\":null,\"fields\":[{\"name\":\"code\",\"dbName\":\"em_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"dbName\":\"em_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jisa\",\"dbName\":\"em_jisa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buCode\",\"dbName\":\"em_bucode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endYmd\",\"dbName\":\"em_endymd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NewCpmMsg\":{\"dbName\":null,\"fields\":[{\"name\":\"auto\",\"dbName\":\"cm_auto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chk\",\"dbName\":\"cm_chk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recUser\",\"dbName\":\"cm_recuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recDate\",\"dbName\":\"cm_recdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"dbName\":\"cm_msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bmsg\",\"dbName\":\"cm_bmsg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senUser\",\"dbName\":\"cm_senuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senDate\",\"dbName\":\"cm_sendate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"dbName\":\"cm_show\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dc\",\"dbName\":\"cm_dc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dcUser\",\"dbName\":\"cm_dcuser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dcDate\",\"dbName\":\"cm_dcdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etc1\",\"dbName\":\"cm_etc1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PgMsg\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/prisma/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/prisma/client/schema.prisma")
