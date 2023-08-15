import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ExampleScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const RoleScalarFieldEnumSchema = z.enum(['name','userId']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','createdAt','updatedAt','image']);

export const UserToCoffeeScalarFieldEnumSchema = z.enum(['userId','coffeeId','assignedAt','assignedBy']);

export const CafeScalarFieldEnumSchema = z.enum(['id','addedBy','ownerId','createdAt','updatedAt']);

export const RecipeScalarFieldEnumSchema = z.enum(['id','brewDevice','waterMass','waterTemperature','coffeeMass','brewTimeSeconds','grindSize','createdAt','updatedAt']);

export const BrewStepScalarFieldEnumSchema = z.enum(['id','time','duration','description','recipeId']);

export const CoffeeScalarFieldEnumSchema = z.enum(['id','origin','region','altitude','varietyId','roastProfileId','createdAt','updatedAt']);

export const RoastEquipmentScalarFieldEnumSchema = z.enum(['id','name','company']);

export const RoastProfileScalarFieldEnumSchema = z.enum(['id','development','chargeTemp','turningPointTemp','firstCrackTemp','dropTemp','roastEquipmentId','createdAt','updatedAt']);

export const VarietyScalarFieldEnumSchema = z.enum(['id','name','stature','leafTipColor','beanSize','yieldPotential','highAltitudeQualityPotential','optimalAltitude','coffeeLeafRust','nematode','coffeeBerryDisease','firstProductionYear','nutritionRequirement','ripeningOfFruit','cherryToGreenBeanOuttrun','plantingDensity','additionalAgronomicInfo','geneticDescription','lineage','breeder','history','image','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const RoleValueSchema = z.enum(['STANDARD','ADMIN','ROASTER','FARM','CAFE']);

export type RoleValueType = `${z.infer<typeof RoleValueSchema>}`

export const BrewDeviceSchema = z.enum(['CHEMEX','AEROPRESS','V60','BONMACDRIPPER','BEEHOUSEDRIPPER','KALITAWAVE','MOKAPOT','FRENCHPRESS','SIPHON','ESPRESSO','CLEVERDRIPPER','VIETNAMESEDRIPPER','CEVZE','BATCHBREW','CUPPING','OTHER']);

export type BrewDeviceType = `${z.infer<typeof BrewDeviceSchema>}`

export const StatureSchema = z.enum(['DWARF','TALL','UNKNOWN','NA']);

export type StatureType = `${z.infer<typeof StatureSchema>}`

export const LeafTipColorSchema = z.enum(['GREEN','BRONZE','GREENORBRONZE','LIGHTBRONZE','DARKBRONZE','UNKNOWN','NA']);

export type LeafTipColorType = `${z.infer<typeof LeafTipColorSchema>}`

export const BeanSizeSchema = z.enum(['BELOWAVERAGE','AVERAGE','LARGE','VERYLARGE','UNKNOWN','NA']);

export type BeanSizeType = `${z.infer<typeof BeanSizeSchema>}`

export const YieldPotentialSchema = z.enum(['LOW','MEDIUM','GOOD','HIGH','VERYHIGH','UNKNOWN','NA']);

export type YieldPotentialType = `${z.infer<typeof YieldPotentialSchema>}`

export const HighAltitudeQualityPotentialSchema = z.enum(['VERYLOW','LOW','GOOD','VERYGOOD','EXCEPTIONAL','UNKNOWN','NA']);

export type HighAltitudeQualityPotentialType = `${z.infer<typeof HighAltitudeQualityPotentialSchema>}`

export const OptimalAltitudeSchema = z.enum(['LOW','LOWMEDIUM','MEDIUM','MEDIUMHIGH','HIGH','ANY']);

export type OptimalAltitudeType = `${z.infer<typeof OptimalAltitudeSchema>}`

export const CoffeeLeafRustSchema = z.enum(['RESISTANT','TOLERANT','SUSCEPTIBLE','UNKNOWN','NA']);

export type CoffeeLeafRustType = `${z.infer<typeof CoffeeLeafRustSchema>}`

export const NematodeSchema = z.enum(['RESISTANT','TOLERANT','SUSCEPTIBLE','UNKNOWN','NA']);

export type NematodeType = `${z.infer<typeof NematodeSchema>}`

export const CoffeeBerryDiseaseSchema = z.enum(['RESISTANT','TOLERANT','SUSCEPTIBLE','UNKNOWN','NA']);

export type CoffeeBerryDiseaseType = `${z.infer<typeof CoffeeBerryDiseaseSchema>}`

export const FirstProductionYearSchema = z.enum(['YEAR2','YEAR3','YEAR4','UNKNOWN','NA']);

export type FirstProductionYearType = `${z.infer<typeof FirstProductionYearSchema>}`

export const NutritionRequirementSchema = z.enum(['VERYHIGH','HIGH','MEDIUM','LOW','UNKNOWN','NA']);

export type NutritionRequirementType = `${z.infer<typeof NutritionRequirementSchema>}`

export const RipeningOfFruitSchema = z.enum(['EARLY','AVERAGE','LATE','VERYLATE','UNKNOWN','NA']);

export type RipeningOfFruitType = `${z.infer<typeof RipeningOfFruitSchema>}`

export const CherryToGreenBeanOutturnSchema = z.enum(['LOW','AVERAGE','HIGH','VERYHIGH','UNKNOWN','NA']);

export type CherryToGreenBeanOutturnType = `${z.infer<typeof CherryToGreenBeanOutturnSchema>}`

export const PlantingDensitySchema = z.enum(['MSP12K','MSP23K','SSP34K','SSP45K','SSP56K','UNKNOWN','NA']);

export type PlantingDensityType = `${z.infer<typeof PlantingDensitySchema>}`

export const GeneticDescriptionSchema = z.enum(['BOURBONTYPICA','TYPICABOURBON','BOTHBOURBONTYPICA','ETHIOPIANLR','INTROGRESSEDCATIMOR','INTROGRESSEDSARCHIMOR','INTROGRESSEDOTHER','F1HYBRIDINTROGRESSED','F1HYBRID','UNKNOWN']);

export type GeneticDescriptionType = `${z.infer<typeof GeneticDescriptionSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EXAMPLE SCHEMA
/////////////////////////////////////////

export const ExampleSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Example = z.infer<typeof ExampleSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  name: RoleValueSchema,
  userId: z.string().nullable(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER TO COFFEE SCHEMA
/////////////////////////////////////////

export const UserToCoffeeSchema = z.object({
  userId: z.string(),
  coffeeId: z.string(),
  assignedAt: z.coerce.date(),
  assignedBy: z.string(),
})

export type UserToCoffee = z.infer<typeof UserToCoffeeSchema>

/////////////////////////////////////////
// CAFE SCHEMA
/////////////////////////////////////////

export const CafeSchema = z.object({
  id: z.string().cuid(),
  addedBy: z.string(),
  ownerId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Cafe = z.infer<typeof CafeSchema>

/////////////////////////////////////////
// RECIPE SCHEMA
/////////////////////////////////////////

export const RecipeSchema = z.object({
  brewDevice: BrewDeviceSchema,
  id: z.string().cuid(),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Recipe = z.infer<typeof RecipeSchema>

/////////////////////////////////////////
// BREW STEP SCHEMA
/////////////////////////////////////////

export const BrewStepSchema = z.object({
  id: z.string().cuid(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string(),
  recipeId: z.string().nullable(),
})

export type BrewStep = z.infer<typeof BrewStepSchema>

/////////////////////////////////////////
// COFFEE SCHEMA
/////////////////////////////////////////

export const CoffeeSchema = z.object({
  id: z.string().cuid(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Coffee = z.infer<typeof CoffeeSchema>

/////////////////////////////////////////
// ROAST EQUIPMENT SCHEMA
/////////////////////////////////////////

export const RoastEquipmentSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  company: z.string().nullable(),
})

export type RoastEquipment = z.infer<typeof RoastEquipmentSchema>

/////////////////////////////////////////
// ROAST PROFILE SCHEMA
/////////////////////////////////////////

export const RoastProfileSchema = z.object({
  id: z.string().cuid(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().nullable(),
  turningPointTemp: z.number().int().nullable(),
  firstCrackTemp: z.number().int().nullable(),
  dropTemp: z.number().int().nullable(),
  roastEquipmentId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RoastProfile = z.infer<typeof RoastProfileSchema>

/////////////////////////////////////////
// VARIETY SCHEMA
/////////////////////////////////////////

export const VarietySchema = z.object({
  stature: StatureSchema,
  leafTipColor: LeafTipColorSchema,
  beanSize: BeanSizeSchema,
  yieldPotential: YieldPotentialSchema,
  highAltitudeQualityPotential: HighAltitudeQualityPotentialSchema,
  optimalAltitude: OptimalAltitudeSchema,
  coffeeLeafRust: CoffeeLeafRustSchema,
  nematode: NematodeSchema,
  coffeeBerryDisease: CoffeeBerryDiseaseSchema,
  firstProductionYear: FirstProductionYearSchema,
  nutritionRequirement: NutritionRequirementSchema,
  ripeningOfFruit: RipeningOfFruitSchema,
  cherryToGreenBeanOuttrun: CherryToGreenBeanOutturnSchema,
  plantingDensity: PlantingDensitySchema,
  geneticDescription: GeneticDescriptionSchema,
  id: z.string().cuid(),
  name: z.string(),
  additionalAgronomicInfo: z.string().nullable(),
  lineage: z.string().nullable(),
  breeder: z.string().nullable(),
  history: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Variety = z.infer<typeof VarietySchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EXAMPLE
//------------------------------------------------------

export const ExampleSelectSchema: z.ZodType<Prisma.ExampleSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const RoleArgsSchema: z.ZodType<Prisma.RoleArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  coffees: z.union([z.boolean(),z.lazy(() => UserToCoffeeFindManyArgsSchema)]).optional(),
  ownedCafe: z.union([z.boolean(),z.lazy(() => CafeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  roles: z.boolean().optional(),
  coffees: z.boolean().optional(),
  ownedCafe: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  image: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  coffees: z.union([z.boolean(),z.lazy(() => UserToCoffeeFindManyArgsSchema)]).optional(),
  ownedCafe: z.union([z.boolean(),z.lazy(() => CafeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER TO COFFEE
//------------------------------------------------------

export const UserToCoffeeIncludeSchema: z.ZodType<Prisma.UserToCoffeeInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  coffee: z.union([z.boolean(),z.lazy(() => CoffeeArgsSchema)]).optional(),
}).strict()

export const UserToCoffeeArgsSchema: z.ZodType<Prisma.UserToCoffeeArgs> = z.object({
  select: z.lazy(() => UserToCoffeeSelectSchema).optional(),
  include: z.lazy(() => UserToCoffeeIncludeSchema).optional(),
}).strict();

export const UserToCoffeeSelectSchema: z.ZodType<Prisma.UserToCoffeeSelect> = z.object({
  userId: z.boolean().optional(),
  coffeeId: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
  assignedBy: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  coffee: z.union([z.boolean(),z.lazy(() => CoffeeArgsSchema)]).optional(),
}).strict()

// CAFE
//------------------------------------------------------

export const CafeIncludeSchema: z.ZodType<Prisma.CafeInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const CafeArgsSchema: z.ZodType<Prisma.CafeArgs> = z.object({
  select: z.lazy(() => CafeSelectSchema).optional(),
  include: z.lazy(() => CafeIncludeSchema).optional(),
}).strict();

export const CafeSelectSchema: z.ZodType<Prisma.CafeSelect> = z.object({
  id: z.boolean().optional(),
  addedBy: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// RECIPE
//------------------------------------------------------

export const RecipeIncludeSchema: z.ZodType<Prisma.RecipeInclude> = z.object({
  brewSteps: z.union([z.boolean(),z.lazy(() => BrewStepFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RecipeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RecipeArgsSchema: z.ZodType<Prisma.RecipeArgs> = z.object({
  select: z.lazy(() => RecipeSelectSchema).optional(),
  include: z.lazy(() => RecipeIncludeSchema).optional(),
}).strict();

export const RecipeCountOutputTypeArgsSchema: z.ZodType<Prisma.RecipeCountOutputTypeArgs> = z.object({
  select: z.lazy(() => RecipeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RecipeCountOutputTypeSelectSchema: z.ZodType<Prisma.RecipeCountOutputTypeSelect> = z.object({
  brewSteps: z.boolean().optional(),
}).strict();

export const RecipeSelectSchema: z.ZodType<Prisma.RecipeSelect> = z.object({
  id: z.boolean().optional(),
  brewDevice: z.boolean().optional(),
  waterMass: z.boolean().optional(),
  waterTemperature: z.boolean().optional(),
  coffeeMass: z.boolean().optional(),
  brewTimeSeconds: z.boolean().optional(),
  grindSize: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  brewSteps: z.union([z.boolean(),z.lazy(() => BrewStepFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RecipeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BREW STEP
//------------------------------------------------------

export const BrewStepIncludeSchema: z.ZodType<Prisma.BrewStepInclude> = z.object({
  Recipe: z.union([z.boolean(),z.lazy(() => RecipeArgsSchema)]).optional(),
}).strict()

export const BrewStepArgsSchema: z.ZodType<Prisma.BrewStepArgs> = z.object({
  select: z.lazy(() => BrewStepSelectSchema).optional(),
  include: z.lazy(() => BrewStepIncludeSchema).optional(),
}).strict();

export const BrewStepSelectSchema: z.ZodType<Prisma.BrewStepSelect> = z.object({
  id: z.boolean().optional(),
  time: z.boolean().optional(),
  duration: z.boolean().optional(),
  description: z.boolean().optional(),
  recipeId: z.boolean().optional(),
  Recipe: z.union([z.boolean(),z.lazy(() => RecipeArgsSchema)]).optional(),
}).strict()

// COFFEE
//------------------------------------------------------

export const CoffeeIncludeSchema: z.ZodType<Prisma.CoffeeInclude> = z.object({
  roastProfile: z.union([z.boolean(),z.lazy(() => RoastProfileArgsSchema)]).optional(),
  variety: z.union([z.boolean(),z.lazy(() => VarietyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserToCoffeeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CoffeeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CoffeeArgsSchema: z.ZodType<Prisma.CoffeeArgs> = z.object({
  select: z.lazy(() => CoffeeSelectSchema).optional(),
  include: z.lazy(() => CoffeeIncludeSchema).optional(),
}).strict();

export const CoffeeCountOutputTypeArgsSchema: z.ZodType<Prisma.CoffeeCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CoffeeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CoffeeCountOutputTypeSelectSchema: z.ZodType<Prisma.CoffeeCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
}).strict();

export const CoffeeSelectSchema: z.ZodType<Prisma.CoffeeSelect> = z.object({
  id: z.boolean().optional(),
  origin: z.boolean().optional(),
  region: z.boolean().optional(),
  altitude: z.boolean().optional(),
  varietyId: z.boolean().optional(),
  roastProfileId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  roastProfile: z.union([z.boolean(),z.lazy(() => RoastProfileArgsSchema)]).optional(),
  variety: z.union([z.boolean(),z.lazy(() => VarietyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserToCoffeeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CoffeeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROAST EQUIPMENT
//------------------------------------------------------

export const RoastEquipmentIncludeSchema: z.ZodType<Prisma.RoastEquipmentInclude> = z.object({
  RoastProfile: z.union([z.boolean(),z.lazy(() => RoastProfileFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoastEquipmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoastEquipmentArgsSchema: z.ZodType<Prisma.RoastEquipmentArgs> = z.object({
  select: z.lazy(() => RoastEquipmentSelectSchema).optional(),
  include: z.lazy(() => RoastEquipmentIncludeSchema).optional(),
}).strict();

export const RoastEquipmentCountOutputTypeArgsSchema: z.ZodType<Prisma.RoastEquipmentCountOutputTypeArgs> = z.object({
  select: z.lazy(() => RoastEquipmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoastEquipmentCountOutputTypeSelectSchema: z.ZodType<Prisma.RoastEquipmentCountOutputTypeSelect> = z.object({
  RoastProfile: z.boolean().optional(),
}).strict();

export const RoastEquipmentSelectSchema: z.ZodType<Prisma.RoastEquipmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  company: z.boolean().optional(),
  RoastProfile: z.union([z.boolean(),z.lazy(() => RoastProfileFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoastEquipmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROAST PROFILE
//------------------------------------------------------

export const RoastProfileIncludeSchema: z.ZodType<Prisma.RoastProfileInclude> = z.object({
  Coffee: z.union([z.boolean(),z.lazy(() => CoffeeFindManyArgsSchema)]).optional(),
  roastEquipment: z.union([z.boolean(),z.lazy(() => RoastEquipmentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoastProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoastProfileArgsSchema: z.ZodType<Prisma.RoastProfileArgs> = z.object({
  select: z.lazy(() => RoastProfileSelectSchema).optional(),
  include: z.lazy(() => RoastProfileIncludeSchema).optional(),
}).strict();

export const RoastProfileCountOutputTypeArgsSchema: z.ZodType<Prisma.RoastProfileCountOutputTypeArgs> = z.object({
  select: z.lazy(() => RoastProfileCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoastProfileCountOutputTypeSelectSchema: z.ZodType<Prisma.RoastProfileCountOutputTypeSelect> = z.object({
  Coffee: z.boolean().optional(),
}).strict();

export const RoastProfileSelectSchema: z.ZodType<Prisma.RoastProfileSelect> = z.object({
  id: z.boolean().optional(),
  development: z.boolean().optional(),
  chargeTemp: z.boolean().optional(),
  turningPointTemp: z.boolean().optional(),
  firstCrackTemp: z.boolean().optional(),
  dropTemp: z.boolean().optional(),
  roastEquipmentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Coffee: z.union([z.boolean(),z.lazy(() => CoffeeFindManyArgsSchema)]).optional(),
  roastEquipment: z.union([z.boolean(),z.lazy(() => RoastEquipmentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoastProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VARIETY
//------------------------------------------------------

export const VarietyIncludeSchema: z.ZodType<Prisma.VarietyInclude> = z.object({
  Coffee: z.union([z.boolean(),z.lazy(() => CoffeeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VarietyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VarietyArgsSchema: z.ZodType<Prisma.VarietyArgs> = z.object({
  select: z.lazy(() => VarietySelectSchema).optional(),
  include: z.lazy(() => VarietyIncludeSchema).optional(),
}).strict();

export const VarietyCountOutputTypeArgsSchema: z.ZodType<Prisma.VarietyCountOutputTypeArgs> = z.object({
  select: z.lazy(() => VarietyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const VarietyCountOutputTypeSelectSchema: z.ZodType<Prisma.VarietyCountOutputTypeSelect> = z.object({
  Coffee: z.boolean().optional(),
}).strict();

export const VarietySelectSchema: z.ZodType<Prisma.VarietySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  stature: z.boolean().optional(),
  leafTipColor: z.boolean().optional(),
  beanSize: z.boolean().optional(),
  yieldPotential: z.boolean().optional(),
  highAltitudeQualityPotential: z.boolean().optional(),
  optimalAltitude: z.boolean().optional(),
  coffeeLeafRust: z.boolean().optional(),
  nematode: z.boolean().optional(),
  coffeeBerryDisease: z.boolean().optional(),
  firstProductionYear: z.boolean().optional(),
  nutritionRequirement: z.boolean().optional(),
  ripeningOfFruit: z.boolean().optional(),
  cherryToGreenBeanOuttrun: z.boolean().optional(),
  plantingDensity: z.boolean().optional(),
  additionalAgronomicInfo: z.boolean().optional(),
  geneticDescription: z.boolean().optional(),
  lineage: z.boolean().optional(),
  breeder: z.boolean().optional(),
  history: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Coffee: z.union([z.boolean(),z.lazy(() => CoffeeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VarietyCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ExampleWhereInputSchema: z.ZodType<Prisma.ExampleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExampleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ExampleOrderByWithRelationInputSchema: z.ZodType<Prisma.ExampleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExampleWhereUniqueInputSchema: z.ZodType<Prisma.ExampleWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExampleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExampleWhereInputSchema),z.lazy(() => ExampleWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const ExampleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExampleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ExampleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExampleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExampleMinOrderByAggregateInputSchema).optional()
}).strict();

export const ExampleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExampleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => EnumRoleValueFilterSchema),z.lazy(() => RoleValueSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.object({
  name: z.lazy(() => RoleValueSchema)
})
.and(z.object({
  name: z.lazy(() => RoleValueSchema).optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => EnumRoleValueWithAggregatesFilterSchema),z.lazy(() => RoleValueSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeListRelationFilterSchema).optional(),
  ownedCafe: z.lazy(() => CafeListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeOrderByRelationAggregateInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeListRelationFilterSchema).optional(),
  ownedCafe: z.lazy(() => CafeListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserToCoffeeWhereInputSchema: z.ZodType<Prisma.UserToCoffeeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserToCoffeeWhereInputSchema),z.lazy(() => UserToCoffeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserToCoffeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserToCoffeeWhereInputSchema),z.lazy(() => UserToCoffeeWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coffeeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  coffee: z.union([ z.lazy(() => CoffeeRelationFilterSchema),z.lazy(() => CoffeeWhereInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeOrderByWithRelationInputSchema: z.ZodType<Prisma.UserToCoffeeOrderByWithRelationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  coffeeId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  coffee: z.lazy(() => CoffeeOrderByWithRelationInputSchema).optional()
}).strict();

export const UserToCoffeeWhereUniqueInputSchema: z.ZodType<Prisma.UserToCoffeeWhereUniqueInput> = z.object({
  userId_coffeeId: z.lazy(() => UserToCoffeeUserIdCoffeeIdCompoundUniqueInputSchema)
})
.and(z.object({
  userId_coffeeId: z.lazy(() => UserToCoffeeUserIdCoffeeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserToCoffeeWhereInputSchema),z.lazy(() => UserToCoffeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserToCoffeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserToCoffeeWhereInputSchema),z.lazy(() => UserToCoffeeWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coffeeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  coffee: z.union([ z.lazy(() => CoffeeRelationFilterSchema),z.lazy(() => CoffeeWhereInputSchema) ]).optional(),
}).strict());

export const UserToCoffeeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserToCoffeeOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  coffeeId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserToCoffeeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserToCoffeeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserToCoffeeMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserToCoffeeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserToCoffeeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserToCoffeeScalarWhereWithAggregatesInputSchema),z.lazy(() => UserToCoffeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserToCoffeeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserToCoffeeScalarWhereWithAggregatesInputSchema),z.lazy(() => UserToCoffeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  coffeeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CafeWhereInputSchema: z.ZodType<Prisma.CafeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CafeWhereInputSchema),z.lazy(() => CafeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CafeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CafeWhereInputSchema),z.lazy(() => CafeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CafeOrderByWithRelationInputSchema: z.ZodType<Prisma.CafeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addedBy: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const CafeWhereUniqueInputSchema: z.ZodType<Prisma.CafeWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CafeWhereInputSchema),z.lazy(() => CafeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CafeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CafeWhereInputSchema),z.lazy(() => CafeWhereInputSchema).array() ]).optional(),
  addedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const CafeOrderByWithAggregationInputSchema: z.ZodType<Prisma.CafeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addedBy: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CafeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CafeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CafeMinOrderByAggregateInputSchema).optional()
}).strict();

export const CafeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CafeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CafeScalarWhereWithAggregatesInputSchema),z.lazy(() => CafeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CafeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CafeScalarWhereWithAggregatesInputSchema),z.lazy(() => CafeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RecipeWhereInputSchema: z.ZodType<Prisma.RecipeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RecipeWhereInputSchema),z.lazy(() => RecipeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RecipeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RecipeWhereInputSchema),z.lazy(() => RecipeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brewDevice: z.union([ z.lazy(() => EnumBrewDeviceFilterSchema),z.lazy(() => BrewDeviceSchema) ]).optional(),
  waterMass: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  waterTemperature: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  coffeeMass: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  brewTimeSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  grindSize: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  brewSteps: z.lazy(() => BrewStepListRelationFilterSchema).optional()
}).strict();

export const RecipeOrderByWithRelationInputSchema: z.ZodType<Prisma.RecipeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brewDevice: z.lazy(() => SortOrderSchema).optional(),
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  brewSteps: z.lazy(() => BrewStepOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RecipeWhereUniqueInputSchema: z.ZodType<Prisma.RecipeWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RecipeWhereInputSchema),z.lazy(() => RecipeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RecipeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RecipeWhereInputSchema),z.lazy(() => RecipeWhereInputSchema).array() ]).optional(),
  brewDevice: z.union([ z.lazy(() => EnumBrewDeviceFilterSchema),z.lazy(() => BrewDeviceSchema) ]).optional(),
  waterMass: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  waterTemperature: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  coffeeMass: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  brewTimeSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  grindSize: z.union([ z.lazy(() => IntFilterSchema),z.number().gte(0).lte(100) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  brewSteps: z.lazy(() => BrewStepListRelationFilterSchema).optional()
}).strict());

export const RecipeOrderByWithAggregationInputSchema: z.ZodType<Prisma.RecipeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brewDevice: z.lazy(() => SortOrderSchema).optional(),
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RecipeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RecipeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RecipeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RecipeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RecipeSumOrderByAggregateInputSchema).optional()
}).strict();

export const RecipeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RecipeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RecipeScalarWhereWithAggregatesInputSchema),z.lazy(() => RecipeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RecipeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RecipeScalarWhereWithAggregatesInputSchema),z.lazy(() => RecipeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brewDevice: z.union([ z.lazy(() => EnumBrewDeviceWithAggregatesFilterSchema),z.lazy(() => BrewDeviceSchema) ]).optional(),
  waterMass: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  waterTemperature: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  coffeeMass: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  brewTimeSeconds: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  grindSize: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BrewStepWhereInputSchema: z.ZodType<Prisma.BrewStepWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BrewStepWhereInputSchema),z.lazy(() => BrewStepWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrewStepWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrewStepWhereInputSchema),z.lazy(() => BrewStepWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  time: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipeId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Recipe: z.union([ z.lazy(() => RecipeNullableRelationFilterSchema),z.lazy(() => RecipeWhereInputSchema) ]).optional().nullable(),
}).strict();

export const BrewStepOrderByWithRelationInputSchema: z.ZodType<Prisma.BrewStepOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  recipeId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Recipe: z.lazy(() => RecipeOrderByWithRelationInputSchema).optional()
}).strict();

export const BrewStepWhereUniqueInputSchema: z.ZodType<Prisma.BrewStepWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BrewStepWhereInputSchema),z.lazy(() => BrewStepWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrewStepWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrewStepWhereInputSchema),z.lazy(() => BrewStepWhereInputSchema).array() ]).optional(),
  time: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipeId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Recipe: z.union([ z.lazy(() => RecipeNullableRelationFilterSchema),z.lazy(() => RecipeWhereInputSchema) ]).optional().nullable(),
}).strict());

export const BrewStepOrderByWithAggregationInputSchema: z.ZodType<Prisma.BrewStepOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  recipeId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BrewStepCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BrewStepAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BrewStepMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BrewStepMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BrewStepSumOrderByAggregateInputSchema).optional()
}).strict();

export const BrewStepScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BrewStepScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BrewStepScalarWhereWithAggregatesInputSchema),z.lazy(() => BrewStepScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrewStepScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrewStepScalarWhereWithAggregatesInputSchema),z.lazy(() => BrewStepScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  time: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  recipeId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CoffeeWhereInputSchema: z.ZodType<Prisma.CoffeeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CoffeeWhereInputSchema),z.lazy(() => CoffeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CoffeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CoffeeWhereInputSchema),z.lazy(() => CoffeeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origin: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  region: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  altitude: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  varietyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roastProfileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  roastProfile: z.union([ z.lazy(() => RoastProfileRelationFilterSchema),z.lazy(() => RoastProfileWhereInputSchema) ]).optional(),
  variety: z.union([ z.lazy(() => VarietyRelationFilterSchema),z.lazy(() => VarietyWhereInputSchema) ]).optional(),
  users: z.lazy(() => UserToCoffeeListRelationFilterSchema).optional()
}).strict();

export const CoffeeOrderByWithRelationInputSchema: z.ZodType<Prisma.CoffeeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  origin: z.lazy(() => SortOrderSchema).optional(),
  region: z.lazy(() => SortOrderSchema).optional(),
  altitude: z.lazy(() => SortOrderSchema).optional(),
  varietyId: z.lazy(() => SortOrderSchema).optional(),
  roastProfileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  roastProfile: z.lazy(() => RoastProfileOrderByWithRelationInputSchema).optional(),
  variety: z.lazy(() => VarietyOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => UserToCoffeeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CoffeeWhereUniqueInputSchema: z.ZodType<Prisma.CoffeeWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CoffeeWhereInputSchema),z.lazy(() => CoffeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CoffeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CoffeeWhereInputSchema),z.lazy(() => CoffeeWhereInputSchema).array() ]).optional(),
  origin: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  region: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  altitude: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  varietyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roastProfileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  roastProfile: z.union([ z.lazy(() => RoastProfileRelationFilterSchema),z.lazy(() => RoastProfileWhereInputSchema) ]).optional(),
  variety: z.union([ z.lazy(() => VarietyRelationFilterSchema),z.lazy(() => VarietyWhereInputSchema) ]).optional(),
  users: z.lazy(() => UserToCoffeeListRelationFilterSchema).optional()
}).strict());

export const CoffeeOrderByWithAggregationInputSchema: z.ZodType<Prisma.CoffeeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  origin: z.lazy(() => SortOrderSchema).optional(),
  region: z.lazy(() => SortOrderSchema).optional(),
  altitude: z.lazy(() => SortOrderSchema).optional(),
  varietyId: z.lazy(() => SortOrderSchema).optional(),
  roastProfileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CoffeeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CoffeeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CoffeeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CoffeeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CoffeeSumOrderByAggregateInputSchema).optional()
}).strict();

export const CoffeeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CoffeeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CoffeeScalarWhereWithAggregatesInputSchema),z.lazy(() => CoffeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CoffeeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CoffeeScalarWhereWithAggregatesInputSchema),z.lazy(() => CoffeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  origin: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  region: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  altitude: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  varietyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  roastProfileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoastEquipmentWhereInputSchema: z.ZodType<Prisma.RoastEquipmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoastEquipmentWhereInputSchema),z.lazy(() => RoastEquipmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastEquipmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastEquipmentWhereInputSchema),z.lazy(() => RoastEquipmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileListRelationFilterSchema).optional()
}).strict();

export const RoastEquipmentOrderByWithRelationInputSchema: z.ZodType<Prisma.RoastEquipmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  company: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  RoastProfile: z.lazy(() => RoastProfileOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RoastEquipmentWhereUniqueInputSchema: z.ZodType<Prisma.RoastEquipmentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RoastEquipmentWhereInputSchema),z.lazy(() => RoastEquipmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastEquipmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastEquipmentWhereInputSchema),z.lazy(() => RoastEquipmentWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileListRelationFilterSchema).optional()
}).strict());

export const RoastEquipmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoastEquipmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  company: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RoastEquipmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoastEquipmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoastEquipmentMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoastEquipmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoastEquipmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoastEquipmentScalarWhereWithAggregatesInputSchema),z.lazy(() => RoastEquipmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastEquipmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastEquipmentScalarWhereWithAggregatesInputSchema),z.lazy(() => RoastEquipmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RoastProfileWhereInputSchema: z.ZodType<Prisma.RoastProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoastProfileWhereInputSchema),z.lazy(() => RoastProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastProfileWhereInputSchema),z.lazy(() => RoastProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  development: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  chargeTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  turningPointTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  firstCrackTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  dropTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  roastEquipmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Coffee: z.lazy(() => CoffeeListRelationFilterSchema).optional(),
  roastEquipment: z.union([ z.lazy(() => RoastEquipmentNullableRelationFilterSchema),z.lazy(() => RoastEquipmentWhereInputSchema) ]).optional().nullable(),
}).strict();

export const RoastProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.RoastProfileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  turningPointTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstCrackTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dropTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roastEquipmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Coffee: z.lazy(() => CoffeeOrderByRelationAggregateInputSchema).optional(),
  roastEquipment: z.lazy(() => RoastEquipmentOrderByWithRelationInputSchema).optional()
}).strict();

export const RoastProfileWhereUniqueInputSchema: z.ZodType<Prisma.RoastProfileWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RoastProfileWhereInputSchema),z.lazy(() => RoastProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastProfileWhereInputSchema),z.lazy(() => RoastProfileWhereInputSchema).array() ]).optional(),
  development: z.union([ z.lazy(() => IntFilterSchema),z.number().gte(0).lte(100) ]).optional(),
  chargeTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  turningPointTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  firstCrackTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  dropTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  roastEquipmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Coffee: z.lazy(() => CoffeeListRelationFilterSchema).optional(),
  roastEquipment: z.union([ z.lazy(() => RoastEquipmentNullableRelationFilterSchema),z.lazy(() => RoastEquipmentWhereInputSchema) ]).optional().nullable(),
}).strict());

export const RoastProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoastProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  turningPointTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstCrackTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dropTemp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roastEquipmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoastProfileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoastProfileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoastProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoastProfileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoastProfileSumOrderByAggregateInputSchema).optional()
}).strict();

export const RoastProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoastProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoastProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => RoastProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => RoastProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  development: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  chargeTemp: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  turningPointTemp: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  firstCrackTemp: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dropTemp: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  roastEquipmentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VarietyWhereInputSchema: z.ZodType<Prisma.VarietyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VarietyWhereInputSchema),z.lazy(() => VarietyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VarietyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VarietyWhereInputSchema),z.lazy(() => VarietyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  stature: z.union([ z.lazy(() => EnumStatureFilterSchema),z.lazy(() => StatureSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => EnumLeafTipColorFilterSchema),z.lazy(() => LeafTipColorSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => EnumBeanSizeFilterSchema),z.lazy(() => BeanSizeSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => EnumYieldPotentialFilterSchema),z.lazy(() => YieldPotentialSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => EnumHighAltitudeQualityPotentialFilterSchema),z.lazy(() => HighAltitudeQualityPotentialSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => EnumOptimalAltitudeFilterSchema),z.lazy(() => OptimalAltitudeSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => EnumCoffeeLeafRustFilterSchema),z.lazy(() => CoffeeLeafRustSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => EnumNematodeFilterSchema),z.lazy(() => NematodeSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => EnumCoffeeBerryDiseaseFilterSchema),z.lazy(() => CoffeeBerryDiseaseSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => EnumFirstProductionYearFilterSchema),z.lazy(() => FirstProductionYearSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => EnumNutritionRequirementFilterSchema),z.lazy(() => NutritionRequirementSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => EnumRipeningOfFruitFilterSchema),z.lazy(() => RipeningOfFruitSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => EnumCherryToGreenBeanOutturnFilterSchema),z.lazy(() => CherryToGreenBeanOutturnSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => EnumPlantingDensityFilterSchema),z.lazy(() => PlantingDensitySchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => EnumGeneticDescriptionFilterSchema),z.lazy(() => GeneticDescriptionSchema) ]).optional(),
  lineage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  history: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Coffee: z.lazy(() => CoffeeListRelationFilterSchema).optional()
}).strict();

export const VarietyOrderByWithRelationInputSchema: z.ZodType<Prisma.VarietyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  stature: z.lazy(() => SortOrderSchema).optional(),
  leafTipColor: z.lazy(() => SortOrderSchema).optional(),
  beanSize: z.lazy(() => SortOrderSchema).optional(),
  yieldPotential: z.lazy(() => SortOrderSchema).optional(),
  highAltitudeQualityPotential: z.lazy(() => SortOrderSchema).optional(),
  optimalAltitude: z.lazy(() => SortOrderSchema).optional(),
  coffeeLeafRust: z.lazy(() => SortOrderSchema).optional(),
  nematode: z.lazy(() => SortOrderSchema).optional(),
  coffeeBerryDisease: z.lazy(() => SortOrderSchema).optional(),
  firstProductionYear: z.lazy(() => SortOrderSchema).optional(),
  nutritionRequirement: z.lazy(() => SortOrderSchema).optional(),
  ripeningOfFruit: z.lazy(() => SortOrderSchema).optional(),
  cherryToGreenBeanOuttrun: z.lazy(() => SortOrderSchema).optional(),
  plantingDensity: z.lazy(() => SortOrderSchema).optional(),
  additionalAgronomicInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geneticDescription: z.lazy(() => SortOrderSchema).optional(),
  lineage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  breeder: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  history: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Coffee: z.lazy(() => CoffeeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const VarietyWhereUniqueInputSchema: z.ZodType<Prisma.VarietyWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => VarietyWhereInputSchema),z.lazy(() => VarietyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VarietyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VarietyWhereInputSchema),z.lazy(() => VarietyWhereInputSchema).array() ]).optional(),
  stature: z.union([ z.lazy(() => EnumStatureFilterSchema),z.lazy(() => StatureSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => EnumLeafTipColorFilterSchema),z.lazy(() => LeafTipColorSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => EnumBeanSizeFilterSchema),z.lazy(() => BeanSizeSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => EnumYieldPotentialFilterSchema),z.lazy(() => YieldPotentialSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => EnumHighAltitudeQualityPotentialFilterSchema),z.lazy(() => HighAltitudeQualityPotentialSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => EnumOptimalAltitudeFilterSchema),z.lazy(() => OptimalAltitudeSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => EnumCoffeeLeafRustFilterSchema),z.lazy(() => CoffeeLeafRustSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => EnumNematodeFilterSchema),z.lazy(() => NematodeSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => EnumCoffeeBerryDiseaseFilterSchema),z.lazy(() => CoffeeBerryDiseaseSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => EnumFirstProductionYearFilterSchema),z.lazy(() => FirstProductionYearSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => EnumNutritionRequirementFilterSchema),z.lazy(() => NutritionRequirementSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => EnumRipeningOfFruitFilterSchema),z.lazy(() => RipeningOfFruitSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => EnumCherryToGreenBeanOutturnFilterSchema),z.lazy(() => CherryToGreenBeanOutturnSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => EnumPlantingDensityFilterSchema),z.lazy(() => PlantingDensitySchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => EnumGeneticDescriptionFilterSchema),z.lazy(() => GeneticDescriptionSchema) ]).optional(),
  lineage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  history: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Coffee: z.lazy(() => CoffeeListRelationFilterSchema).optional()
}).strict());

export const VarietyOrderByWithAggregationInputSchema: z.ZodType<Prisma.VarietyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  stature: z.lazy(() => SortOrderSchema).optional(),
  leafTipColor: z.lazy(() => SortOrderSchema).optional(),
  beanSize: z.lazy(() => SortOrderSchema).optional(),
  yieldPotential: z.lazy(() => SortOrderSchema).optional(),
  highAltitudeQualityPotential: z.lazy(() => SortOrderSchema).optional(),
  optimalAltitude: z.lazy(() => SortOrderSchema).optional(),
  coffeeLeafRust: z.lazy(() => SortOrderSchema).optional(),
  nematode: z.lazy(() => SortOrderSchema).optional(),
  coffeeBerryDisease: z.lazy(() => SortOrderSchema).optional(),
  firstProductionYear: z.lazy(() => SortOrderSchema).optional(),
  nutritionRequirement: z.lazy(() => SortOrderSchema).optional(),
  ripeningOfFruit: z.lazy(() => SortOrderSchema).optional(),
  cherryToGreenBeanOuttrun: z.lazy(() => SortOrderSchema).optional(),
  plantingDensity: z.lazy(() => SortOrderSchema).optional(),
  additionalAgronomicInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  geneticDescription: z.lazy(() => SortOrderSchema).optional(),
  lineage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  breeder: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  history: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VarietyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VarietyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VarietyMinOrderByAggregateInputSchema).optional()
}).strict();

export const VarietyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VarietyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VarietyScalarWhereWithAggregatesInputSchema),z.lazy(() => VarietyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VarietyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VarietyScalarWhereWithAggregatesInputSchema),z.lazy(() => VarietyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  stature: z.union([ z.lazy(() => EnumStatureWithAggregatesFilterSchema),z.lazy(() => StatureSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => EnumLeafTipColorWithAggregatesFilterSchema),z.lazy(() => LeafTipColorSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => EnumBeanSizeWithAggregatesFilterSchema),z.lazy(() => BeanSizeSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => EnumYieldPotentialWithAggregatesFilterSchema),z.lazy(() => YieldPotentialSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => EnumHighAltitudeQualityPotentialWithAggregatesFilterSchema),z.lazy(() => HighAltitudeQualityPotentialSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => EnumOptimalAltitudeWithAggregatesFilterSchema),z.lazy(() => OptimalAltitudeSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => EnumCoffeeLeafRustWithAggregatesFilterSchema),z.lazy(() => CoffeeLeafRustSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => EnumNematodeWithAggregatesFilterSchema),z.lazy(() => NematodeSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => EnumCoffeeBerryDiseaseWithAggregatesFilterSchema),z.lazy(() => CoffeeBerryDiseaseSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => EnumFirstProductionYearWithAggregatesFilterSchema),z.lazy(() => FirstProductionYearSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => EnumNutritionRequirementWithAggregatesFilterSchema),z.lazy(() => NutritionRequirementSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => EnumRipeningOfFruitWithAggregatesFilterSchema),z.lazy(() => RipeningOfFruitSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => EnumCherryToGreenBeanOutturnWithAggregatesFilterSchema),z.lazy(() => CherryToGreenBeanOutturnSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => EnumPlantingDensityWithAggregatesFilterSchema),z.lazy(() => PlantingDensitySchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => EnumGeneticDescriptionWithAggregatesFilterSchema),z.lazy(() => GeneticDescriptionSchema) ]).optional(),
  lineage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  breeder: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  history: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ExampleCreateInputSchema: z.ZodType<Prisma.ExampleCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExampleUncheckedCreateInputSchema: z.ZodType<Prisma.ExampleUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExampleUpdateInputSchema: z.ZodType<Prisma.ExampleUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExampleUncheckedUpdateInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExampleCreateManyInputSchema: z.ZodType<Prisma.ExampleCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExampleUpdateManyMutationInputSchema: z.ZodType<Prisma.ExampleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExampleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  name: z.lazy(() => RoleValueSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutRolesInputSchema).optional()
}).strict();

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  name: z.lazy(() => RoleValueSchema),
  userId: z.string().optional().nullable()
}).strict();

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  name: z.lazy(() => RoleValueSchema),
  userId: z.string().optional().nullable()
}).strict();

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserToCoffeeCreateInputSchema: z.ZodType<Prisma.UserToCoffeeCreateInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutCoffeesInputSchema),
  coffee: z.lazy(() => CoffeeCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const UserToCoffeeUncheckedCreateInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedCreateInput> = z.object({
  userId: z.string(),
  coffeeId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const UserToCoffeeUpdateInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoffeesNestedInputSchema).optional(),
  coffee: z.lazy(() => CoffeeUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserToCoffeeUncheckedUpdateInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeCreateManyInputSchema: z.ZodType<Prisma.UserToCoffeeCreateManyInput> = z.object({
  userId: z.string(),
  coffeeId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const UserToCoffeeUpdateManyMutationInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyMutationInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeCreateInputSchema: z.ZodType<Prisma.CafeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCafeInputSchema).optional()
}).strict();

export const CafeUncheckedCreateInputSchema: z.ZodType<Prisma.CafeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  ownerId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CafeUpdateInputSchema: z.ZodType<Prisma.CafeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneWithoutOwnedCafeNestedInputSchema).optional()
}).strict();

export const CafeUncheckedUpdateInputSchema: z.ZodType<Prisma.CafeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeCreateManyInputSchema: z.ZodType<Prisma.CafeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  ownerId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CafeUpdateManyMutationInputSchema: z.ZodType<Prisma.CafeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CafeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RecipeCreateInputSchema: z.ZodType<Prisma.RecipeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  brewDevice: z.lazy(() => BrewDeviceSchema),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  brewSteps: z.lazy(() => BrewStepCreateNestedManyWithoutRecipeInputSchema).optional()
}).strict();

export const RecipeUncheckedCreateInputSchema: z.ZodType<Prisma.RecipeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  brewDevice: z.lazy(() => BrewDeviceSchema),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  brewSteps: z.lazy(() => BrewStepUncheckedCreateNestedManyWithoutRecipeInputSchema).optional()
}).strict();

export const RecipeUpdateInputSchema: z.ZodType<Prisma.RecipeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  brewSteps: z.lazy(() => BrewStepUpdateManyWithoutRecipeNestedInputSchema).optional()
}).strict();

export const RecipeUncheckedUpdateInputSchema: z.ZodType<Prisma.RecipeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  brewSteps: z.lazy(() => BrewStepUncheckedUpdateManyWithoutRecipeNestedInputSchema).optional()
}).strict();

export const RecipeCreateManyInputSchema: z.ZodType<Prisma.RecipeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  brewDevice: z.lazy(() => BrewDeviceSchema),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RecipeUpdateManyMutationInputSchema: z.ZodType<Prisma.RecipeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RecipeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RecipeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrewStepCreateInputSchema: z.ZodType<Prisma.BrewStepCreateInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string(),
  Recipe: z.lazy(() => RecipeCreateNestedOneWithoutBrewStepsInputSchema).optional()
}).strict();

export const BrewStepUncheckedCreateInputSchema: z.ZodType<Prisma.BrewStepUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string(),
  recipeId: z.string().optional().nullable()
}).strict();

export const BrewStepUpdateInputSchema: z.ZodType<Prisma.BrewStepUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Recipe: z.lazy(() => RecipeUpdateOneWithoutBrewStepsNestedInputSchema).optional()
}).strict();

export const BrewStepUncheckedUpdateInputSchema: z.ZodType<Prisma.BrewStepUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipeId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BrewStepCreateManyInputSchema: z.ZodType<Prisma.BrewStepCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string(),
  recipeId: z.string().optional().nullable()
}).strict();

export const BrewStepUpdateManyMutationInputSchema: z.ZodType<Prisma.BrewStepUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrewStepUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BrewStepUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipeId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CoffeeCreateInputSchema: z.ZodType<Prisma.CoffeeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  roastProfile: z.lazy(() => RoastProfileCreateNestedOneWithoutCoffeeInputSchema),
  variety: z.lazy(() => VarietyCreateNestedOneWithoutCoffeeInputSchema),
  users: z.lazy(() => UserToCoffeeCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeUncheckedCreateInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeUpdateInputSchema: z.ZodType<Prisma.CoffeeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfile: z.lazy(() => RoastProfileUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional(),
  variety: z.lazy(() => VarietyUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional(),
  users: z.lazy(() => UserToCoffeeUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  varietyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeCreateManyInputSchema: z.ZodType<Prisma.CoffeeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CoffeeUpdateManyMutationInputSchema: z.ZodType<Prisma.CoffeeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CoffeeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  varietyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoastEquipmentCreateInputSchema: z.ZodType<Prisma.RoastEquipmentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  company: z.string().optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileCreateNestedManyWithoutRoastEquipmentInputSchema).optional()
}).strict();

export const RoastEquipmentUncheckedCreateInputSchema: z.ZodType<Prisma.RoastEquipmentUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  company: z.string().optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileUncheckedCreateNestedManyWithoutRoastEquipmentInputSchema).optional()
}).strict();

export const RoastEquipmentUpdateInputSchema: z.ZodType<Prisma.RoastEquipmentUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileUpdateManyWithoutRoastEquipmentNestedInputSchema).optional()
}).strict();

export const RoastEquipmentUncheckedUpdateInputSchema: z.ZodType<Prisma.RoastEquipmentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RoastProfile: z.lazy(() => RoastProfileUncheckedUpdateManyWithoutRoastEquipmentNestedInputSchema).optional()
}).strict();

export const RoastEquipmentCreateManyInputSchema: z.ZodType<Prisma.RoastEquipmentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  company: z.string().optional().nullable()
}).strict();

export const RoastEquipmentUpdateManyMutationInputSchema: z.ZodType<Prisma.RoastEquipmentUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoastEquipmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoastEquipmentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoastProfileCreateInputSchema: z.ZodType<Prisma.RoastProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeCreateNestedManyWithoutRoastProfileInputSchema).optional(),
  roastEquipment: z.lazy(() => RoastEquipmentCreateNestedOneWithoutRoastProfileInputSchema).optional()
}).strict();

export const RoastProfileUncheckedCreateInputSchema: z.ZodType<Prisma.RoastProfileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  roastEquipmentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeUncheckedCreateNestedManyWithoutRoastProfileInputSchema).optional()
}).strict();

export const RoastProfileUpdateInputSchema: z.ZodType<Prisma.RoastProfileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUpdateManyWithoutRoastProfileNestedInputSchema).optional(),
  roastEquipment: z.lazy(() => RoastEquipmentUpdateOneWithoutRoastProfileNestedInputSchema).optional()
}).strict();

export const RoastProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roastEquipmentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUncheckedUpdateManyWithoutRoastProfileNestedInputSchema).optional()
}).strict();

export const RoastProfileCreateManyInputSchema: z.ZodType<Prisma.RoastProfileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  roastEquipmentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RoastProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.RoastProfileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoastProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roastEquipmentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VarietyCreateInputSchema: z.ZodType<Prisma.VarietyCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  stature: z.lazy(() => StatureSchema),
  leafTipColor: z.lazy(() => LeafTipColorSchema),
  beanSize: z.lazy(() => BeanSizeSchema),
  yieldPotential: z.lazy(() => YieldPotentialSchema),
  highAltitudeQualityPotential: z.lazy(() => HighAltitudeQualityPotentialSchema),
  optimalAltitude: z.lazy(() => OptimalAltitudeSchema),
  coffeeLeafRust: z.lazy(() => CoffeeLeafRustSchema),
  nematode: z.lazy(() => NematodeSchema),
  coffeeBerryDisease: z.lazy(() => CoffeeBerryDiseaseSchema),
  firstProductionYear: z.lazy(() => FirstProductionYearSchema),
  nutritionRequirement: z.lazy(() => NutritionRequirementSchema),
  ripeningOfFruit: z.lazy(() => RipeningOfFruitSchema),
  cherryToGreenBeanOuttrun: z.lazy(() => CherryToGreenBeanOutturnSchema),
  plantingDensity: z.lazy(() => PlantingDensitySchema),
  additionalAgronomicInfo: z.string().optional().nullable(),
  geneticDescription: z.lazy(() => GeneticDescriptionSchema),
  lineage: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeCreateNestedManyWithoutVarietyInputSchema).optional()
}).strict();

export const VarietyUncheckedCreateInputSchema: z.ZodType<Prisma.VarietyUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  stature: z.lazy(() => StatureSchema),
  leafTipColor: z.lazy(() => LeafTipColorSchema),
  beanSize: z.lazy(() => BeanSizeSchema),
  yieldPotential: z.lazy(() => YieldPotentialSchema),
  highAltitudeQualityPotential: z.lazy(() => HighAltitudeQualityPotentialSchema),
  optimalAltitude: z.lazy(() => OptimalAltitudeSchema),
  coffeeLeafRust: z.lazy(() => CoffeeLeafRustSchema),
  nematode: z.lazy(() => NematodeSchema),
  coffeeBerryDisease: z.lazy(() => CoffeeBerryDiseaseSchema),
  firstProductionYear: z.lazy(() => FirstProductionYearSchema),
  nutritionRequirement: z.lazy(() => NutritionRequirementSchema),
  ripeningOfFruit: z.lazy(() => RipeningOfFruitSchema),
  cherryToGreenBeanOuttrun: z.lazy(() => CherryToGreenBeanOutturnSchema),
  plantingDensity: z.lazy(() => PlantingDensitySchema),
  additionalAgronomicInfo: z.string().optional().nullable(),
  geneticDescription: z.lazy(() => GeneticDescriptionSchema),
  lineage: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeUncheckedCreateNestedManyWithoutVarietyInputSchema).optional()
}).strict();

export const VarietyUpdateInputSchema: z.ZodType<Prisma.VarietyUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUpdateManyWithoutVarietyNestedInputSchema).optional()
}).strict();

export const VarietyUncheckedUpdateInputSchema: z.ZodType<Prisma.VarietyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUncheckedUpdateManyWithoutVarietyNestedInputSchema).optional()
}).strict();

export const VarietyCreateManyInputSchema: z.ZodType<Prisma.VarietyCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  stature: z.lazy(() => StatureSchema),
  leafTipColor: z.lazy(() => LeafTipColorSchema),
  beanSize: z.lazy(() => BeanSizeSchema),
  yieldPotential: z.lazy(() => YieldPotentialSchema),
  highAltitudeQualityPotential: z.lazy(() => HighAltitudeQualityPotentialSchema),
  optimalAltitude: z.lazy(() => OptimalAltitudeSchema),
  coffeeLeafRust: z.lazy(() => CoffeeLeafRustSchema),
  nematode: z.lazy(() => NematodeSchema),
  coffeeBerryDisease: z.lazy(() => CoffeeBerryDiseaseSchema),
  firstProductionYear: z.lazy(() => FirstProductionYearSchema),
  nutritionRequirement: z.lazy(() => NutritionRequirementSchema),
  ripeningOfFruit: z.lazy(() => RipeningOfFruitSchema),
  cherryToGreenBeanOuttrun: z.lazy(() => CherryToGreenBeanOutturnSchema),
  plantingDensity: z.lazy(() => PlantingDensitySchema),
  additionalAgronomicInfo: z.string().optional().nullable(),
  geneticDescription: z.lazy(() => GeneticDescriptionSchema),
  lineage: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VarietyUpdateManyMutationInputSchema: z.ZodType<Prisma.VarietyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VarietyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VarietyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ExampleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExampleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExampleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRoleValueFilterSchema: z.ZodType<Prisma.EnumRoleValueFilter> = z.object({
  equals: z.lazy(() => RoleValueSchema).optional(),
  in: z.lazy(() => RoleValueSchema).array().optional(),
  notIn: z.lazy(() => RoleValueSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => NestedEnumRoleValueFilterSchema) ]).optional(),
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRoleValueWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleValueWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleValueSchema).optional(),
  in: z.lazy(() => RoleValueSchema).array().optional(),
  notIn: z.lazy(() => RoleValueSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => NestedEnumRoleValueWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleValueFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleValueFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const RoleListRelationFilterSchema: z.ZodType<Prisma.RoleListRelationFilter> = z.object({
  every: z.lazy(() => RoleWhereInputSchema).optional(),
  some: z.lazy(() => RoleWhereInputSchema).optional(),
  none: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export const UserToCoffeeListRelationFilterSchema: z.ZodType<Prisma.UserToCoffeeListRelationFilter> = z.object({
  every: z.lazy(() => UserToCoffeeWhereInputSchema).optional(),
  some: z.lazy(() => UserToCoffeeWhereInputSchema).optional(),
  none: z.lazy(() => UserToCoffeeWhereInputSchema).optional()
}).strict();

export const CafeListRelationFilterSchema: z.ZodType<Prisma.CafeListRelationFilter> = z.object({
  every: z.lazy(() => CafeWhereInputSchema).optional(),
  some: z.lazy(() => CafeWhereInputSchema).optional(),
  none: z.lazy(() => CafeWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserToCoffeeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserToCoffeeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CafeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CafeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const CoffeeRelationFilterSchema: z.ZodType<Prisma.CoffeeRelationFilter> = z.object({
  is: z.lazy(() => CoffeeWhereInputSchema).optional(),
  isNot: z.lazy(() => CoffeeWhereInputSchema).optional()
}).strict();

export const UserToCoffeeUserIdCoffeeIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserToCoffeeUserIdCoffeeIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  coffeeId: z.string()
}).strict();

export const UserToCoffeeCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserToCoffeeCountOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  coffeeId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserToCoffeeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserToCoffeeMaxOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  coffeeId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserToCoffeeMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserToCoffeeMinOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  coffeeId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CafeCountOrderByAggregateInputSchema: z.ZodType<Prisma.CafeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addedBy: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CafeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CafeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addedBy: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CafeMinOrderByAggregateInputSchema: z.ZodType<Prisma.CafeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addedBy: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumBrewDeviceFilterSchema: z.ZodType<Prisma.EnumBrewDeviceFilter> = z.object({
  equals: z.lazy(() => BrewDeviceSchema).optional(),
  in: z.lazy(() => BrewDeviceSchema).array().optional(),
  notIn: z.lazy(() => BrewDeviceSchema).array().optional(),
  not: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => NestedEnumBrewDeviceFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const BrewStepListRelationFilterSchema: z.ZodType<Prisma.BrewStepListRelationFilter> = z.object({
  every: z.lazy(() => BrewStepWhereInputSchema).optional(),
  some: z.lazy(() => BrewStepWhereInputSchema).optional(),
  none: z.lazy(() => BrewStepWhereInputSchema).optional()
}).strict();

export const BrewStepOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BrewStepOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RecipeCountOrderByAggregateInputSchema: z.ZodType<Prisma.RecipeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brewDevice: z.lazy(() => SortOrderSchema).optional(),
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RecipeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RecipeAvgOrderByAggregateInput> = z.object({
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RecipeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RecipeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brewDevice: z.lazy(() => SortOrderSchema).optional(),
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RecipeMinOrderByAggregateInputSchema: z.ZodType<Prisma.RecipeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brewDevice: z.lazy(() => SortOrderSchema).optional(),
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RecipeSumOrderByAggregateInputSchema: z.ZodType<Prisma.RecipeSumOrderByAggregateInput> = z.object({
  waterMass: z.lazy(() => SortOrderSchema).optional(),
  waterTemperature: z.lazy(() => SortOrderSchema).optional(),
  coffeeMass: z.lazy(() => SortOrderSchema).optional(),
  brewTimeSeconds: z.lazy(() => SortOrderSchema).optional(),
  grindSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumBrewDeviceWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBrewDeviceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BrewDeviceSchema).optional(),
  in: z.lazy(() => BrewDeviceSchema).array().optional(),
  notIn: z.lazy(() => BrewDeviceSchema).array().optional(),
  not: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => NestedEnumBrewDeviceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBrewDeviceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBrewDeviceFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const RecipeNullableRelationFilterSchema: z.ZodType<Prisma.RecipeNullableRelationFilter> = z.object({
  is: z.lazy(() => RecipeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RecipeWhereInputSchema).optional().nullable()
}).strict();

export const BrewStepCountOrderByAggregateInputSchema: z.ZodType<Prisma.BrewStepCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  recipeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrewStepAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BrewStepAvgOrderByAggregateInput> = z.object({
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrewStepMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BrewStepMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  recipeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrewStepMinOrderByAggregateInputSchema: z.ZodType<Prisma.BrewStepMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  recipeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BrewStepSumOrderByAggregateInputSchema: z.ZodType<Prisma.BrewStepSumOrderByAggregateInput> = z.object({
  time: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileRelationFilterSchema: z.ZodType<Prisma.RoastProfileRelationFilter> = z.object({
  is: z.lazy(() => RoastProfileWhereInputSchema).optional(),
  isNot: z.lazy(() => RoastProfileWhereInputSchema).optional()
}).strict();

export const VarietyRelationFilterSchema: z.ZodType<Prisma.VarietyRelationFilter> = z.object({
  is: z.lazy(() => VarietyWhereInputSchema).optional(),
  isNot: z.lazy(() => VarietyWhereInputSchema).optional()
}).strict();

export const CoffeeCountOrderByAggregateInputSchema: z.ZodType<Prisma.CoffeeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  origin: z.lazy(() => SortOrderSchema).optional(),
  region: z.lazy(() => SortOrderSchema).optional(),
  altitude: z.lazy(() => SortOrderSchema).optional(),
  varietyId: z.lazy(() => SortOrderSchema).optional(),
  roastProfileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CoffeeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CoffeeAvgOrderByAggregateInput> = z.object({
  altitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CoffeeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CoffeeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  origin: z.lazy(() => SortOrderSchema).optional(),
  region: z.lazy(() => SortOrderSchema).optional(),
  altitude: z.lazy(() => SortOrderSchema).optional(),
  varietyId: z.lazy(() => SortOrderSchema).optional(),
  roastProfileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CoffeeMinOrderByAggregateInputSchema: z.ZodType<Prisma.CoffeeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  origin: z.lazy(() => SortOrderSchema).optional(),
  region: z.lazy(() => SortOrderSchema).optional(),
  altitude: z.lazy(() => SortOrderSchema).optional(),
  varietyId: z.lazy(() => SortOrderSchema).optional(),
  roastProfileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CoffeeSumOrderByAggregateInputSchema: z.ZodType<Prisma.CoffeeSumOrderByAggregateInput> = z.object({
  altitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileListRelationFilterSchema: z.ZodType<Prisma.RoastProfileListRelationFilter> = z.object({
  every: z.lazy(() => RoastProfileWhereInputSchema).optional(),
  some: z.lazy(() => RoastProfileWhereInputSchema).optional(),
  none: z.lazy(() => RoastProfileWhereInputSchema).optional()
}).strict();

export const RoastProfileOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoastProfileOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastEquipmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoastEquipmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastEquipmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoastEquipmentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastEquipmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoastEquipmentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CoffeeListRelationFilterSchema: z.ZodType<Prisma.CoffeeListRelationFilter> = z.object({
  every: z.lazy(() => CoffeeWhereInputSchema).optional(),
  some: z.lazy(() => CoffeeWhereInputSchema).optional(),
  none: z.lazy(() => CoffeeWhereInputSchema).optional()
}).strict();

export const RoastEquipmentNullableRelationFilterSchema: z.ZodType<Prisma.RoastEquipmentNullableRelationFilter> = z.object({
  is: z.lazy(() => RoastEquipmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RoastEquipmentWhereInputSchema).optional().nullable()
}).strict();

export const CoffeeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CoffeeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoastProfileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.lazy(() => SortOrderSchema).optional(),
  turningPointTemp: z.lazy(() => SortOrderSchema).optional(),
  firstCrackTemp: z.lazy(() => SortOrderSchema).optional(),
  dropTemp: z.lazy(() => SortOrderSchema).optional(),
  roastEquipmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoastProfileAvgOrderByAggregateInput> = z.object({
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.lazy(() => SortOrderSchema).optional(),
  turningPointTemp: z.lazy(() => SortOrderSchema).optional(),
  firstCrackTemp: z.lazy(() => SortOrderSchema).optional(),
  dropTemp: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoastProfileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.lazy(() => SortOrderSchema).optional(),
  turningPointTemp: z.lazy(() => SortOrderSchema).optional(),
  firstCrackTemp: z.lazy(() => SortOrderSchema).optional(),
  dropTemp: z.lazy(() => SortOrderSchema).optional(),
  roastEquipmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoastProfileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.lazy(() => SortOrderSchema).optional(),
  turningPointTemp: z.lazy(() => SortOrderSchema).optional(),
  firstCrackTemp: z.lazy(() => SortOrderSchema).optional(),
  dropTemp: z.lazy(() => SortOrderSchema).optional(),
  roastEquipmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoastProfileSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoastProfileSumOrderByAggregateInput> = z.object({
  development: z.lazy(() => SortOrderSchema).optional(),
  chargeTemp: z.lazy(() => SortOrderSchema).optional(),
  turningPointTemp: z.lazy(() => SortOrderSchema).optional(),
  firstCrackTemp: z.lazy(() => SortOrderSchema).optional(),
  dropTemp: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumStatureFilterSchema: z.ZodType<Prisma.EnumStatureFilter> = z.object({
  equals: z.lazy(() => StatureSchema).optional(),
  in: z.lazy(() => StatureSchema).array().optional(),
  notIn: z.lazy(() => StatureSchema).array().optional(),
  not: z.union([ z.lazy(() => StatureSchema),z.lazy(() => NestedEnumStatureFilterSchema) ]).optional(),
}).strict();

export const EnumLeafTipColorFilterSchema: z.ZodType<Prisma.EnumLeafTipColorFilter> = z.object({
  equals: z.lazy(() => LeafTipColorSchema).optional(),
  in: z.lazy(() => LeafTipColorSchema).array().optional(),
  notIn: z.lazy(() => LeafTipColorSchema).array().optional(),
  not: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => NestedEnumLeafTipColorFilterSchema) ]).optional(),
}).strict();

export const EnumBeanSizeFilterSchema: z.ZodType<Prisma.EnumBeanSizeFilter> = z.object({
  equals: z.lazy(() => BeanSizeSchema).optional(),
  in: z.lazy(() => BeanSizeSchema).array().optional(),
  notIn: z.lazy(() => BeanSizeSchema).array().optional(),
  not: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => NestedEnumBeanSizeFilterSchema) ]).optional(),
}).strict();

export const EnumYieldPotentialFilterSchema: z.ZodType<Prisma.EnumYieldPotentialFilter> = z.object({
  equals: z.lazy(() => YieldPotentialSchema).optional(),
  in: z.lazy(() => YieldPotentialSchema).array().optional(),
  notIn: z.lazy(() => YieldPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => NestedEnumYieldPotentialFilterSchema) ]).optional(),
}).strict();

export const EnumHighAltitudeQualityPotentialFilterSchema: z.ZodType<Prisma.EnumHighAltitudeQualityPotentialFilter> = z.object({
  equals: z.lazy(() => HighAltitudeQualityPotentialSchema).optional(),
  in: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  notIn: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema) ]).optional(),
}).strict();

export const EnumOptimalAltitudeFilterSchema: z.ZodType<Prisma.EnumOptimalAltitudeFilter> = z.object({
  equals: z.lazy(() => OptimalAltitudeSchema).optional(),
  in: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  notIn: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  not: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => NestedEnumOptimalAltitudeFilterSchema) ]).optional(),
}).strict();

export const EnumCoffeeLeafRustFilterSchema: z.ZodType<Prisma.EnumCoffeeLeafRustFilter> = z.object({
  equals: z.lazy(() => CoffeeLeafRustSchema).optional(),
  in: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  notIn: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema) ]).optional(),
}).strict();

export const EnumNematodeFilterSchema: z.ZodType<Prisma.EnumNematodeFilter> = z.object({
  equals: z.lazy(() => NematodeSchema).optional(),
  in: z.lazy(() => NematodeSchema).array().optional(),
  notIn: z.lazy(() => NematodeSchema).array().optional(),
  not: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => NestedEnumNematodeFilterSchema) ]).optional(),
}).strict();

export const EnumCoffeeBerryDiseaseFilterSchema: z.ZodType<Prisma.EnumCoffeeBerryDiseaseFilter> = z.object({
  equals: z.lazy(() => CoffeeBerryDiseaseSchema).optional(),
  in: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  notIn: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema) ]).optional(),
}).strict();

export const EnumFirstProductionYearFilterSchema: z.ZodType<Prisma.EnumFirstProductionYearFilter> = z.object({
  equals: z.lazy(() => FirstProductionYearSchema).optional(),
  in: z.lazy(() => FirstProductionYearSchema).array().optional(),
  notIn: z.lazy(() => FirstProductionYearSchema).array().optional(),
  not: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => NestedEnumFirstProductionYearFilterSchema) ]).optional(),
}).strict();

export const EnumNutritionRequirementFilterSchema: z.ZodType<Prisma.EnumNutritionRequirementFilter> = z.object({
  equals: z.lazy(() => NutritionRequirementSchema).optional(),
  in: z.lazy(() => NutritionRequirementSchema).array().optional(),
  notIn: z.lazy(() => NutritionRequirementSchema).array().optional(),
  not: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => NestedEnumNutritionRequirementFilterSchema) ]).optional(),
}).strict();

export const EnumRipeningOfFruitFilterSchema: z.ZodType<Prisma.EnumRipeningOfFruitFilter> = z.object({
  equals: z.lazy(() => RipeningOfFruitSchema).optional(),
  in: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  notIn: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  not: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => NestedEnumRipeningOfFruitFilterSchema) ]).optional(),
}).strict();

export const EnumCherryToGreenBeanOutturnFilterSchema: z.ZodType<Prisma.EnumCherryToGreenBeanOutturnFilter> = z.object({
  equals: z.lazy(() => CherryToGreenBeanOutturnSchema).optional(),
  in: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  notIn: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  not: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema) ]).optional(),
}).strict();

export const EnumPlantingDensityFilterSchema: z.ZodType<Prisma.EnumPlantingDensityFilter> = z.object({
  equals: z.lazy(() => PlantingDensitySchema).optional(),
  in: z.lazy(() => PlantingDensitySchema).array().optional(),
  notIn: z.lazy(() => PlantingDensitySchema).array().optional(),
  not: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => NestedEnumPlantingDensityFilterSchema) ]).optional(),
}).strict();

export const EnumGeneticDescriptionFilterSchema: z.ZodType<Prisma.EnumGeneticDescriptionFilter> = z.object({
  equals: z.lazy(() => GeneticDescriptionSchema).optional(),
  in: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  notIn: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => NestedEnumGeneticDescriptionFilterSchema) ]).optional(),
}).strict();

export const VarietyCountOrderByAggregateInputSchema: z.ZodType<Prisma.VarietyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  stature: z.lazy(() => SortOrderSchema).optional(),
  leafTipColor: z.lazy(() => SortOrderSchema).optional(),
  beanSize: z.lazy(() => SortOrderSchema).optional(),
  yieldPotential: z.lazy(() => SortOrderSchema).optional(),
  highAltitudeQualityPotential: z.lazy(() => SortOrderSchema).optional(),
  optimalAltitude: z.lazy(() => SortOrderSchema).optional(),
  coffeeLeafRust: z.lazy(() => SortOrderSchema).optional(),
  nematode: z.lazy(() => SortOrderSchema).optional(),
  coffeeBerryDisease: z.lazy(() => SortOrderSchema).optional(),
  firstProductionYear: z.lazy(() => SortOrderSchema).optional(),
  nutritionRequirement: z.lazy(() => SortOrderSchema).optional(),
  ripeningOfFruit: z.lazy(() => SortOrderSchema).optional(),
  cherryToGreenBeanOuttrun: z.lazy(() => SortOrderSchema).optional(),
  plantingDensity: z.lazy(() => SortOrderSchema).optional(),
  additionalAgronomicInfo: z.lazy(() => SortOrderSchema).optional(),
  geneticDescription: z.lazy(() => SortOrderSchema).optional(),
  lineage: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  history: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VarietyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VarietyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  stature: z.lazy(() => SortOrderSchema).optional(),
  leafTipColor: z.lazy(() => SortOrderSchema).optional(),
  beanSize: z.lazy(() => SortOrderSchema).optional(),
  yieldPotential: z.lazy(() => SortOrderSchema).optional(),
  highAltitudeQualityPotential: z.lazy(() => SortOrderSchema).optional(),
  optimalAltitude: z.lazy(() => SortOrderSchema).optional(),
  coffeeLeafRust: z.lazy(() => SortOrderSchema).optional(),
  nematode: z.lazy(() => SortOrderSchema).optional(),
  coffeeBerryDisease: z.lazy(() => SortOrderSchema).optional(),
  firstProductionYear: z.lazy(() => SortOrderSchema).optional(),
  nutritionRequirement: z.lazy(() => SortOrderSchema).optional(),
  ripeningOfFruit: z.lazy(() => SortOrderSchema).optional(),
  cherryToGreenBeanOuttrun: z.lazy(() => SortOrderSchema).optional(),
  plantingDensity: z.lazy(() => SortOrderSchema).optional(),
  additionalAgronomicInfo: z.lazy(() => SortOrderSchema).optional(),
  geneticDescription: z.lazy(() => SortOrderSchema).optional(),
  lineage: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  history: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VarietyMinOrderByAggregateInputSchema: z.ZodType<Prisma.VarietyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  stature: z.lazy(() => SortOrderSchema).optional(),
  leafTipColor: z.lazy(() => SortOrderSchema).optional(),
  beanSize: z.lazy(() => SortOrderSchema).optional(),
  yieldPotential: z.lazy(() => SortOrderSchema).optional(),
  highAltitudeQualityPotential: z.lazy(() => SortOrderSchema).optional(),
  optimalAltitude: z.lazy(() => SortOrderSchema).optional(),
  coffeeLeafRust: z.lazy(() => SortOrderSchema).optional(),
  nematode: z.lazy(() => SortOrderSchema).optional(),
  coffeeBerryDisease: z.lazy(() => SortOrderSchema).optional(),
  firstProductionYear: z.lazy(() => SortOrderSchema).optional(),
  nutritionRequirement: z.lazy(() => SortOrderSchema).optional(),
  ripeningOfFruit: z.lazy(() => SortOrderSchema).optional(),
  cherryToGreenBeanOuttrun: z.lazy(() => SortOrderSchema).optional(),
  plantingDensity: z.lazy(() => SortOrderSchema).optional(),
  additionalAgronomicInfo: z.lazy(() => SortOrderSchema).optional(),
  geneticDescription: z.lazy(() => SortOrderSchema).optional(),
  lineage: z.lazy(() => SortOrderSchema).optional(),
  breeder: z.lazy(() => SortOrderSchema).optional(),
  history: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumStatureWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStatureWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatureSchema).optional(),
  in: z.lazy(() => StatureSchema).array().optional(),
  notIn: z.lazy(() => StatureSchema).array().optional(),
  not: z.union([ z.lazy(() => StatureSchema),z.lazy(() => NestedEnumStatureWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatureFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatureFilterSchema).optional()
}).strict();

export const EnumLeafTipColorWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeafTipColorWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeafTipColorSchema).optional(),
  in: z.lazy(() => LeafTipColorSchema).array().optional(),
  notIn: z.lazy(() => LeafTipColorSchema).array().optional(),
  not: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => NestedEnumLeafTipColorWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeafTipColorFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeafTipColorFilterSchema).optional()
}).strict();

export const EnumBeanSizeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBeanSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BeanSizeSchema).optional(),
  in: z.lazy(() => BeanSizeSchema).array().optional(),
  notIn: z.lazy(() => BeanSizeSchema).array().optional(),
  not: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => NestedEnumBeanSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBeanSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBeanSizeFilterSchema).optional()
}).strict();

export const EnumYieldPotentialWithAggregatesFilterSchema: z.ZodType<Prisma.EnumYieldPotentialWithAggregatesFilter> = z.object({
  equals: z.lazy(() => YieldPotentialSchema).optional(),
  in: z.lazy(() => YieldPotentialSchema).array().optional(),
  notIn: z.lazy(() => YieldPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => NestedEnumYieldPotentialWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumYieldPotentialFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumYieldPotentialFilterSchema).optional()
}).strict();

export const EnumHighAltitudeQualityPotentialWithAggregatesFilterSchema: z.ZodType<Prisma.EnumHighAltitudeQualityPotentialWithAggregatesFilter> = z.object({
  equals: z.lazy(() => HighAltitudeQualityPotentialSchema).optional(),
  in: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  notIn: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => NestedEnumHighAltitudeQualityPotentialWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema).optional()
}).strict();

export const EnumOptimalAltitudeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOptimalAltitudeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OptimalAltitudeSchema).optional(),
  in: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  notIn: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  not: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => NestedEnumOptimalAltitudeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOptimalAltitudeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOptimalAltitudeFilterSchema).optional()
}).strict();

export const EnumCoffeeLeafRustWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCoffeeLeafRustWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CoffeeLeafRustSchema).optional(),
  in: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  notIn: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => NestedEnumCoffeeLeafRustWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema).optional()
}).strict();

export const EnumNematodeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNematodeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NematodeSchema).optional(),
  in: z.lazy(() => NematodeSchema).array().optional(),
  notIn: z.lazy(() => NematodeSchema).array().optional(),
  not: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => NestedEnumNematodeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNematodeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNematodeFilterSchema).optional()
}).strict();

export const EnumCoffeeBerryDiseaseWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCoffeeBerryDiseaseWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CoffeeBerryDiseaseSchema).optional(),
  in: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  notIn: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => NestedEnumCoffeeBerryDiseaseWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema).optional()
}).strict();

export const EnumFirstProductionYearWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFirstProductionYearWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FirstProductionYearSchema).optional(),
  in: z.lazy(() => FirstProductionYearSchema).array().optional(),
  notIn: z.lazy(() => FirstProductionYearSchema).array().optional(),
  not: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => NestedEnumFirstProductionYearWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFirstProductionYearFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFirstProductionYearFilterSchema).optional()
}).strict();

export const EnumNutritionRequirementWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNutritionRequirementWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NutritionRequirementSchema).optional(),
  in: z.lazy(() => NutritionRequirementSchema).array().optional(),
  notIn: z.lazy(() => NutritionRequirementSchema).array().optional(),
  not: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => NestedEnumNutritionRequirementWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNutritionRequirementFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNutritionRequirementFilterSchema).optional()
}).strict();

export const EnumRipeningOfFruitWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRipeningOfFruitWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RipeningOfFruitSchema).optional(),
  in: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  notIn: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  not: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => NestedEnumRipeningOfFruitWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRipeningOfFruitFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRipeningOfFruitFilterSchema).optional()
}).strict();

export const EnumCherryToGreenBeanOutturnWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCherryToGreenBeanOutturnWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CherryToGreenBeanOutturnSchema).optional(),
  in: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  notIn: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  not: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => NestedEnumCherryToGreenBeanOutturnWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema).optional()
}).strict();

export const EnumPlantingDensityWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPlantingDensityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PlantingDensitySchema).optional(),
  in: z.lazy(() => PlantingDensitySchema).array().optional(),
  notIn: z.lazy(() => PlantingDensitySchema).array().optional(),
  not: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => NestedEnumPlantingDensityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPlantingDensityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPlantingDensityFilterSchema).optional()
}).strict();

export const EnumGeneticDescriptionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGeneticDescriptionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GeneticDescriptionSchema).optional(),
  in: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  notIn: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => NestedEnumGeneticDescriptionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGeneticDescriptionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGeneticDescriptionFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumRoleValueFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleValueFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleValueSchema).optional()
}).strict();

export const UserUpdateOneWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRolesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRolesInputSchema),z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CafeCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CafeCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeCreateWithoutOwnerInputSchema).array(),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CafeCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CafeUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeCreateWithoutOwnerInputSchema).array(),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CafeCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CafeUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CafeUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeCreateWithoutOwnerInputSchema).array(),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CafeUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CafeUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CafeCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CafeUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CafeUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CafeUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CafeUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CafeScalarWhereInputSchema),z.lazy(() => CafeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CafeUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeCreateWithoutOwnerInputSchema).array(),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CafeCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CafeUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CafeUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CafeCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CafeWhereUniqueInputSchema),z.lazy(() => CafeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CafeUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CafeUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CafeUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CafeUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CafeScalarWhereInputSchema),z.lazy(() => CafeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCoffeesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCoffeesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoffeesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoffeesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CoffeeCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CoffeeCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => CoffeeWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutCoffeesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCoffeesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoffeesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCoffeesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCoffeesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCoffeesInputSchema),z.lazy(() => UserUpdateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCoffeesInputSchema) ]).optional(),
}).strict();

export const CoffeeUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.CoffeeUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CoffeeCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => CoffeeUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => CoffeeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CoffeeUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => CoffeeUpdateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedCafeInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCafeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCafeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutOwnedCafeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutOwnedCafeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCafeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCafeInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedCafeInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedCafeInputSchema),z.lazy(() => UserUpdateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCafeInputSchema) ]).optional(),
}).strict();

export const BrewStepCreateNestedManyWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepCreateNestedManyWithoutRecipeInput> = z.object({
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateWithoutRecipeInputSchema).array(),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrewStepCreateManyRecipeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BrewStepUncheckedCreateNestedManyWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUncheckedCreateNestedManyWithoutRecipeInput> = z.object({
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateWithoutRecipeInputSchema).array(),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrewStepCreateManyRecipeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumBrewDeviceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBrewDeviceFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BrewDeviceSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BrewStepUpdateManyWithoutRecipeNestedInputSchema: z.ZodType<Prisma.BrewStepUpdateManyWithoutRecipeNestedInput> = z.object({
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateWithoutRecipeInputSchema).array(),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BrewStepUpsertWithWhereUniqueWithoutRecipeInputSchema),z.lazy(() => BrewStepUpsertWithWhereUniqueWithoutRecipeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrewStepCreateManyRecipeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BrewStepUpdateWithWhereUniqueWithoutRecipeInputSchema),z.lazy(() => BrewStepUpdateWithWhereUniqueWithoutRecipeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BrewStepUpdateManyWithWhereWithoutRecipeInputSchema),z.lazy(() => BrewStepUpdateManyWithWhereWithoutRecipeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BrewStepScalarWhereInputSchema),z.lazy(() => BrewStepScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BrewStepUncheckedUpdateManyWithoutRecipeNestedInputSchema: z.ZodType<Prisma.BrewStepUncheckedUpdateManyWithoutRecipeNestedInput> = z.object({
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateWithoutRecipeInputSchema).array(),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema),z.lazy(() => BrewStepCreateOrConnectWithoutRecipeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BrewStepUpsertWithWhereUniqueWithoutRecipeInputSchema),z.lazy(() => BrewStepUpsertWithWhereUniqueWithoutRecipeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BrewStepCreateManyRecipeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BrewStepWhereUniqueInputSchema),z.lazy(() => BrewStepWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BrewStepUpdateWithWhereUniqueWithoutRecipeInputSchema),z.lazy(() => BrewStepUpdateWithWhereUniqueWithoutRecipeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BrewStepUpdateManyWithWhereWithoutRecipeInputSchema),z.lazy(() => BrewStepUpdateManyWithWhereWithoutRecipeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BrewStepScalarWhereInputSchema),z.lazy(() => BrewStepScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RecipeCreateNestedOneWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeCreateNestedOneWithoutBrewStepsInput> = z.object({
  create: z.union([ z.lazy(() => RecipeCreateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedCreateWithoutBrewStepsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RecipeCreateOrConnectWithoutBrewStepsInputSchema).optional(),
  connect: z.lazy(() => RecipeWhereUniqueInputSchema).optional()
}).strict();

export const RecipeUpdateOneWithoutBrewStepsNestedInputSchema: z.ZodType<Prisma.RecipeUpdateOneWithoutBrewStepsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RecipeCreateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedCreateWithoutBrewStepsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RecipeCreateOrConnectWithoutBrewStepsInputSchema).optional(),
  upsert: z.lazy(() => RecipeUpsertWithoutBrewStepsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RecipeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RecipeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RecipeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RecipeUpdateToOneWithWhereWithoutBrewStepsInputSchema),z.lazy(() => RecipeUpdateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedUpdateWithoutBrewStepsInputSchema) ]).optional(),
}).strict();

export const RoastProfileCreateNestedOneWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileCreateNestedOneWithoutCoffeeInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutCoffeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoastProfileCreateOrConnectWithoutCoffeeInputSchema).optional(),
  connect: z.lazy(() => RoastProfileWhereUniqueInputSchema).optional()
}).strict();

export const VarietyCreateNestedOneWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyCreateNestedOneWithoutCoffeeInput> = z.object({
  create: z.union([ z.lazy(() => VarietyCreateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedCreateWithoutCoffeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VarietyCreateOrConnectWithoutCoffeeInputSchema).optional(),
  connect: z.lazy(() => VarietyWhereUniqueInputSchema).optional()
}).strict();

export const UserToCoffeeCreateNestedManyWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeCreateNestedManyWithoutCoffeeInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyCoffeeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeUncheckedCreateNestedManyWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedCreateNestedManyWithoutCoffeeInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyCoffeeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoastProfileUpdateOneRequiredWithoutCoffeeNestedInputSchema: z.ZodType<Prisma.RoastProfileUpdateOneRequiredWithoutCoffeeNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutCoffeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoastProfileCreateOrConnectWithoutCoffeeInputSchema).optional(),
  upsert: z.lazy(() => RoastProfileUpsertWithoutCoffeeInputSchema).optional(),
  connect: z.lazy(() => RoastProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoastProfileUpdateToOneWithWhereWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUpdateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedUpdateWithoutCoffeeInputSchema) ]).optional(),
}).strict();

export const VarietyUpdateOneRequiredWithoutCoffeeNestedInputSchema: z.ZodType<Prisma.VarietyUpdateOneRequiredWithoutCoffeeNestedInput> = z.object({
  create: z.union([ z.lazy(() => VarietyCreateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedCreateWithoutCoffeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VarietyCreateOrConnectWithoutCoffeeInputSchema).optional(),
  upsert: z.lazy(() => VarietyUpsertWithoutCoffeeInputSchema).optional(),
  connect: z.lazy(() => VarietyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VarietyUpdateToOneWithWhereWithoutCoffeeInputSchema),z.lazy(() => VarietyUpdateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedUpdateWithoutCoffeeInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUpdateManyWithoutCoffeeNestedInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyWithoutCoffeeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyCoffeeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutCoffeeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserToCoffeeUncheckedUpdateManyWithoutCoffeeNestedInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateManyWithoutCoffeeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema).array(),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserToCoffeeCreateManyCoffeeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserToCoffeeWhereUniqueInputSchema),z.lazy(() => UserToCoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUpdateManyWithWhereWithoutCoffeeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoastProfileCreateNestedManyWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileCreateNestedManyWithoutRoastEquipmentInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema).array(),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoastProfileCreateManyRoastEquipmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoastProfileUncheckedCreateNestedManyWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUncheckedCreateNestedManyWithoutRoastEquipmentInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema).array(),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoastProfileCreateManyRoastEquipmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoastProfileUpdateManyWithoutRoastEquipmentNestedInputSchema: z.ZodType<Prisma.RoastProfileUpdateManyWithoutRoastEquipmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema).array(),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoastProfileCreateManyRoastEquipmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoastProfileScalarWhereInputSchema),z.lazy(() => RoastProfileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoastProfileUncheckedUpdateManyWithoutRoastEquipmentNestedInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateManyWithoutRoastEquipmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema).array(),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoastProfileCreateManyRoastEquipmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoastProfileWhereUniqueInputSchema),z.lazy(() => RoastProfileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoastProfileScalarWhereInputSchema),z.lazy(() => RoastProfileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CoffeeCreateNestedManyWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeCreateNestedManyWithoutRoastProfileInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyRoastProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoastEquipmentCreateNestedOneWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentCreateNestedOneWithoutRoastProfileInput> = z.object({
  create: z.union([ z.lazy(() => RoastEquipmentCreateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedCreateWithoutRoastProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoastEquipmentCreateOrConnectWithoutRoastProfileInputSchema).optional(),
  connect: z.lazy(() => RoastEquipmentWhereUniqueInputSchema).optional()
}).strict();

export const CoffeeUncheckedCreateNestedManyWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateNestedManyWithoutRoastProfileInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyRoastProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CoffeeUpdateManyWithoutRoastProfileNestedInputSchema: z.ZodType<Prisma.CoffeeUpdateManyWithoutRoastProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutRoastProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyRoastProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutRoastProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CoffeeUpdateManyWithWhereWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpdateManyWithWhereWithoutRoastProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoastEquipmentUpdateOneWithoutRoastProfileNestedInputSchema: z.ZodType<Prisma.RoastEquipmentUpdateOneWithoutRoastProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoastEquipmentCreateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedCreateWithoutRoastProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoastEquipmentCreateOrConnectWithoutRoastProfileInputSchema).optional(),
  upsert: z.lazy(() => RoastEquipmentUpsertWithoutRoastProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RoastEquipmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RoastEquipmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RoastEquipmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoastEquipmentUpdateToOneWithWhereWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUpdateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedUpdateWithoutRoastProfileInputSchema) ]).optional(),
}).strict();

export const CoffeeUncheckedUpdateManyWithoutRoastProfileNestedInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateManyWithoutRoastProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutRoastProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutRoastProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyRoastProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutRoastProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CoffeeUpdateManyWithWhereWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUpdateManyWithWhereWithoutRoastProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CoffeeCreateNestedManyWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeCreateNestedManyWithoutVarietyInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateWithoutVarietyInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyVarietyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CoffeeUncheckedCreateNestedManyWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateNestedManyWithoutVarietyInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateWithoutVarietyInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyVarietyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumStatureFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatureFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => StatureSchema).optional()
}).strict();

export const EnumLeafTipColorFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeafTipColorFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LeafTipColorSchema).optional()
}).strict();

export const EnumBeanSizeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBeanSizeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BeanSizeSchema).optional()
}).strict();

export const EnumYieldPotentialFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumYieldPotentialFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => YieldPotentialSchema).optional()
}).strict();

export const EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumHighAltitudeQualityPotentialFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => HighAltitudeQualityPotentialSchema).optional()
}).strict();

export const EnumOptimalAltitudeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOptimalAltitudeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => OptimalAltitudeSchema).optional()
}).strict();

export const EnumCoffeeLeafRustFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCoffeeLeafRustFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CoffeeLeafRustSchema).optional()
}).strict();

export const EnumNematodeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNematodeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NematodeSchema).optional()
}).strict();

export const EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCoffeeBerryDiseaseFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CoffeeBerryDiseaseSchema).optional()
}).strict();

export const EnumFirstProductionYearFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFirstProductionYearFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FirstProductionYearSchema).optional()
}).strict();

export const EnumNutritionRequirementFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNutritionRequirementFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NutritionRequirementSchema).optional()
}).strict();

export const EnumRipeningOfFruitFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRipeningOfFruitFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RipeningOfFruitSchema).optional()
}).strict();

export const EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCherryToGreenBeanOutturnFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CherryToGreenBeanOutturnSchema).optional()
}).strict();

export const EnumPlantingDensityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPlantingDensityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PlantingDensitySchema).optional()
}).strict();

export const EnumGeneticDescriptionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGeneticDescriptionFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GeneticDescriptionSchema).optional()
}).strict();

export const CoffeeUpdateManyWithoutVarietyNestedInputSchema: z.ZodType<Prisma.CoffeeUpdateManyWithoutVarietyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateWithoutVarietyInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutVarietyInputSchema),z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutVarietyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyVarietyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutVarietyInputSchema),z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutVarietyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CoffeeUpdateManyWithWhereWithoutVarietyInputSchema),z.lazy(() => CoffeeUpdateManyWithWhereWithoutVarietyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CoffeeUncheckedUpdateManyWithoutVarietyNestedInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateManyWithoutVarietyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateWithoutVarietyInputSchema).array(),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema),z.lazy(() => CoffeeCreateOrConnectWithoutVarietyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutVarietyInputSchema),z.lazy(() => CoffeeUpsertWithWhereUniqueWithoutVarietyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CoffeeCreateManyVarietyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CoffeeWhereUniqueInputSchema),z.lazy(() => CoffeeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutVarietyInputSchema),z.lazy(() => CoffeeUpdateWithWhereUniqueWithoutVarietyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CoffeeUpdateManyWithWhereWithoutVarietyInputSchema),z.lazy(() => CoffeeUpdateManyWithWhereWithoutVarietyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoleValueFilterSchema: z.ZodType<Prisma.NestedEnumRoleValueFilter> = z.object({
  equals: z.lazy(() => RoleValueSchema).optional(),
  in: z.lazy(() => RoleValueSchema).array().optional(),
  notIn: z.lazy(() => RoleValueSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => NestedEnumRoleValueFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRoleValueWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleValueWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleValueSchema).optional(),
  in: z.lazy(() => RoleValueSchema).array().optional(),
  notIn: z.lazy(() => RoleValueSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => NestedEnumRoleValueWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleValueFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleValueFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedEnumBrewDeviceFilterSchema: z.ZodType<Prisma.NestedEnumBrewDeviceFilter> = z.object({
  equals: z.lazy(() => BrewDeviceSchema).optional(),
  in: z.lazy(() => BrewDeviceSchema).array().optional(),
  notIn: z.lazy(() => BrewDeviceSchema).array().optional(),
  not: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => NestedEnumBrewDeviceFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBrewDeviceWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBrewDeviceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BrewDeviceSchema).optional(),
  in: z.lazy(() => BrewDeviceSchema).array().optional(),
  notIn: z.lazy(() => BrewDeviceSchema).array().optional(),
  not: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => NestedEnumBrewDeviceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBrewDeviceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBrewDeviceFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumStatureFilterSchema: z.ZodType<Prisma.NestedEnumStatureFilter> = z.object({
  equals: z.lazy(() => StatureSchema).optional(),
  in: z.lazy(() => StatureSchema).array().optional(),
  notIn: z.lazy(() => StatureSchema).array().optional(),
  not: z.union([ z.lazy(() => StatureSchema),z.lazy(() => NestedEnumStatureFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLeafTipColorFilterSchema: z.ZodType<Prisma.NestedEnumLeafTipColorFilter> = z.object({
  equals: z.lazy(() => LeafTipColorSchema).optional(),
  in: z.lazy(() => LeafTipColorSchema).array().optional(),
  notIn: z.lazy(() => LeafTipColorSchema).array().optional(),
  not: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => NestedEnumLeafTipColorFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBeanSizeFilterSchema: z.ZodType<Prisma.NestedEnumBeanSizeFilter> = z.object({
  equals: z.lazy(() => BeanSizeSchema).optional(),
  in: z.lazy(() => BeanSizeSchema).array().optional(),
  notIn: z.lazy(() => BeanSizeSchema).array().optional(),
  not: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => NestedEnumBeanSizeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumYieldPotentialFilterSchema: z.ZodType<Prisma.NestedEnumYieldPotentialFilter> = z.object({
  equals: z.lazy(() => YieldPotentialSchema).optional(),
  in: z.lazy(() => YieldPotentialSchema).array().optional(),
  notIn: z.lazy(() => YieldPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => NestedEnumYieldPotentialFilterSchema) ]).optional(),
}).strict();

export const NestedEnumHighAltitudeQualityPotentialFilterSchema: z.ZodType<Prisma.NestedEnumHighAltitudeQualityPotentialFilter> = z.object({
  equals: z.lazy(() => HighAltitudeQualityPotentialSchema).optional(),
  in: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  notIn: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema) ]).optional(),
}).strict();

export const NestedEnumOptimalAltitudeFilterSchema: z.ZodType<Prisma.NestedEnumOptimalAltitudeFilter> = z.object({
  equals: z.lazy(() => OptimalAltitudeSchema).optional(),
  in: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  notIn: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  not: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => NestedEnumOptimalAltitudeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCoffeeLeafRustFilterSchema: z.ZodType<Prisma.NestedEnumCoffeeLeafRustFilter> = z.object({
  equals: z.lazy(() => CoffeeLeafRustSchema).optional(),
  in: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  notIn: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNematodeFilterSchema: z.ZodType<Prisma.NestedEnumNematodeFilter> = z.object({
  equals: z.lazy(() => NematodeSchema).optional(),
  in: z.lazy(() => NematodeSchema).array().optional(),
  notIn: z.lazy(() => NematodeSchema).array().optional(),
  not: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => NestedEnumNematodeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCoffeeBerryDiseaseFilterSchema: z.ZodType<Prisma.NestedEnumCoffeeBerryDiseaseFilter> = z.object({
  equals: z.lazy(() => CoffeeBerryDiseaseSchema).optional(),
  in: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  notIn: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFirstProductionYearFilterSchema: z.ZodType<Prisma.NestedEnumFirstProductionYearFilter> = z.object({
  equals: z.lazy(() => FirstProductionYearSchema).optional(),
  in: z.lazy(() => FirstProductionYearSchema).array().optional(),
  notIn: z.lazy(() => FirstProductionYearSchema).array().optional(),
  not: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => NestedEnumFirstProductionYearFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNutritionRequirementFilterSchema: z.ZodType<Prisma.NestedEnumNutritionRequirementFilter> = z.object({
  equals: z.lazy(() => NutritionRequirementSchema).optional(),
  in: z.lazy(() => NutritionRequirementSchema).array().optional(),
  notIn: z.lazy(() => NutritionRequirementSchema).array().optional(),
  not: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => NestedEnumNutritionRequirementFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRipeningOfFruitFilterSchema: z.ZodType<Prisma.NestedEnumRipeningOfFruitFilter> = z.object({
  equals: z.lazy(() => RipeningOfFruitSchema).optional(),
  in: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  notIn: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  not: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => NestedEnumRipeningOfFruitFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCherryToGreenBeanOutturnFilterSchema: z.ZodType<Prisma.NestedEnumCherryToGreenBeanOutturnFilter> = z.object({
  equals: z.lazy(() => CherryToGreenBeanOutturnSchema).optional(),
  in: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  notIn: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  not: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPlantingDensityFilterSchema: z.ZodType<Prisma.NestedEnumPlantingDensityFilter> = z.object({
  equals: z.lazy(() => PlantingDensitySchema).optional(),
  in: z.lazy(() => PlantingDensitySchema).array().optional(),
  notIn: z.lazy(() => PlantingDensitySchema).array().optional(),
  not: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => NestedEnumPlantingDensityFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGeneticDescriptionFilterSchema: z.ZodType<Prisma.NestedEnumGeneticDescriptionFilter> = z.object({
  equals: z.lazy(() => GeneticDescriptionSchema).optional(),
  in: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  notIn: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => NestedEnumGeneticDescriptionFilterSchema) ]).optional(),
}).strict();

export const NestedEnumStatureWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatureWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatureSchema).optional(),
  in: z.lazy(() => StatureSchema).array().optional(),
  notIn: z.lazy(() => StatureSchema).array().optional(),
  not: z.union([ z.lazy(() => StatureSchema),z.lazy(() => NestedEnumStatureWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatureFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatureFilterSchema).optional()
}).strict();

export const NestedEnumLeafTipColorWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLeafTipColorWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeafTipColorSchema).optional(),
  in: z.lazy(() => LeafTipColorSchema).array().optional(),
  notIn: z.lazy(() => LeafTipColorSchema).array().optional(),
  not: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => NestedEnumLeafTipColorWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeafTipColorFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeafTipColorFilterSchema).optional()
}).strict();

export const NestedEnumBeanSizeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBeanSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BeanSizeSchema).optional(),
  in: z.lazy(() => BeanSizeSchema).array().optional(),
  notIn: z.lazy(() => BeanSizeSchema).array().optional(),
  not: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => NestedEnumBeanSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBeanSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBeanSizeFilterSchema).optional()
}).strict();

export const NestedEnumYieldPotentialWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumYieldPotentialWithAggregatesFilter> = z.object({
  equals: z.lazy(() => YieldPotentialSchema).optional(),
  in: z.lazy(() => YieldPotentialSchema).array().optional(),
  notIn: z.lazy(() => YieldPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => NestedEnumYieldPotentialWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumYieldPotentialFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumYieldPotentialFilterSchema).optional()
}).strict();

export const NestedEnumHighAltitudeQualityPotentialWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumHighAltitudeQualityPotentialWithAggregatesFilter> = z.object({
  equals: z.lazy(() => HighAltitudeQualityPotentialSchema).optional(),
  in: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  notIn: z.lazy(() => HighAltitudeQualityPotentialSchema).array().optional(),
  not: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => NestedEnumHighAltitudeQualityPotentialWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumHighAltitudeQualityPotentialFilterSchema).optional()
}).strict();

export const NestedEnumOptimalAltitudeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOptimalAltitudeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OptimalAltitudeSchema).optional(),
  in: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  notIn: z.lazy(() => OptimalAltitudeSchema).array().optional(),
  not: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => NestedEnumOptimalAltitudeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOptimalAltitudeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOptimalAltitudeFilterSchema).optional()
}).strict();

export const NestedEnumCoffeeLeafRustWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCoffeeLeafRustWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CoffeeLeafRustSchema).optional(),
  in: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  notIn: z.lazy(() => CoffeeLeafRustSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => NestedEnumCoffeeLeafRustWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCoffeeLeafRustFilterSchema).optional()
}).strict();

export const NestedEnumNematodeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNematodeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NematodeSchema).optional(),
  in: z.lazy(() => NematodeSchema).array().optional(),
  notIn: z.lazy(() => NematodeSchema).array().optional(),
  not: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => NestedEnumNematodeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNematodeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNematodeFilterSchema).optional()
}).strict();

export const NestedEnumCoffeeBerryDiseaseWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCoffeeBerryDiseaseWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CoffeeBerryDiseaseSchema).optional(),
  in: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  notIn: z.lazy(() => CoffeeBerryDiseaseSchema).array().optional(),
  not: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => NestedEnumCoffeeBerryDiseaseWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCoffeeBerryDiseaseFilterSchema).optional()
}).strict();

export const NestedEnumFirstProductionYearWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFirstProductionYearWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FirstProductionYearSchema).optional(),
  in: z.lazy(() => FirstProductionYearSchema).array().optional(),
  notIn: z.lazy(() => FirstProductionYearSchema).array().optional(),
  not: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => NestedEnumFirstProductionYearWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFirstProductionYearFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFirstProductionYearFilterSchema).optional()
}).strict();

export const NestedEnumNutritionRequirementWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNutritionRequirementWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NutritionRequirementSchema).optional(),
  in: z.lazy(() => NutritionRequirementSchema).array().optional(),
  notIn: z.lazy(() => NutritionRequirementSchema).array().optional(),
  not: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => NestedEnumNutritionRequirementWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNutritionRequirementFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNutritionRequirementFilterSchema).optional()
}).strict();

export const NestedEnumRipeningOfFruitWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRipeningOfFruitWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RipeningOfFruitSchema).optional(),
  in: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  notIn: z.lazy(() => RipeningOfFruitSchema).array().optional(),
  not: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => NestedEnumRipeningOfFruitWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRipeningOfFruitFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRipeningOfFruitFilterSchema).optional()
}).strict();

export const NestedEnumCherryToGreenBeanOutturnWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCherryToGreenBeanOutturnWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CherryToGreenBeanOutturnSchema).optional(),
  in: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  notIn: z.lazy(() => CherryToGreenBeanOutturnSchema).array().optional(),
  not: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => NestedEnumCherryToGreenBeanOutturnWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCherryToGreenBeanOutturnFilterSchema).optional()
}).strict();

export const NestedEnumPlantingDensityWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPlantingDensityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PlantingDensitySchema).optional(),
  in: z.lazy(() => PlantingDensitySchema).array().optional(),
  notIn: z.lazy(() => PlantingDensitySchema).array().optional(),
  not: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => NestedEnumPlantingDensityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPlantingDensityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPlantingDensityFilterSchema).optional()
}).strict();

export const NestedEnumGeneticDescriptionWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGeneticDescriptionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GeneticDescriptionSchema).optional(),
  in: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  notIn: z.lazy(() => GeneticDescriptionSchema).array().optional(),
  not: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => NestedEnumGeneticDescriptionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGeneticDescriptionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGeneticDescriptionFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const UserUpsertWithoutRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export const UserUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoleCreateWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateWithoutUserInput> = z.object({
  name: z.lazy(() => RoleValueSchema)
}).strict();

export const RoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUserInput> = z.object({
  name: z.lazy(() => RoleValueSchema)
}).strict();

export const RoleCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const RoleCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyUserInputSchema),z.lazy(() => RoleCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserToCoffeeCreateWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeCreateWithoutUserInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string(),
  coffee: z.lazy(() => CoffeeCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const UserToCoffeeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedCreateWithoutUserInput> = z.object({
  coffeeId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const UserToCoffeeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserToCoffeeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserToCoffeeCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserToCoffeeCreateManyUserInputSchema),z.lazy(() => UserToCoffeeCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CafeCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CafeCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CafeUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CafeCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.CafeCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => CafeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CafeCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.CafeCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CafeCreateManyOwnerInputSchema),z.lazy(() => CafeCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoleUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutUserInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUserInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => EnumRoleValueFilterSchema),z.lazy(() => RoleValueSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserToCoffeeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserToCoffeeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserToCoffeeUpdateWithoutUserInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UserToCoffeeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserToCoffeeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserToCoffeeUpdateManyMutationInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserToCoffeeScalarWhereInputSchema: z.ZodType<Prisma.UserToCoffeeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserToCoffeeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserToCoffeeScalarWhereInputSchema),z.lazy(() => UserToCoffeeScalarWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coffeeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CafeUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CafeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CafeUpdateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => CafeCreateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CafeUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CafeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CafeUpdateWithoutOwnerInputSchema),z.lazy(() => CafeUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const CafeUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => CafeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CafeUpdateManyMutationInputSchema),z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const CafeScalarWhereInputSchema: z.ZodType<Prisma.CafeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CafeScalarWhereInputSchema),z.lazy(() => CafeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CafeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CafeScalarWhereInputSchema),z.lazy(() => CafeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutCoffeesInputSchema: z.ZodType<Prisma.UserCreateWithoutCoffeesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCoffeesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCoffeesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCoffeesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCoffeesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoffeesInputSchema) ]),
}).strict();

export const CoffeeCreateWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  roastProfile: z.lazy(() => RoastProfileCreateNestedOneWithoutCoffeeInputSchema),
  variety: z.lazy(() => VarietyCreateNestedOneWithoutCoffeeInputSchema)
}).strict();

export const CoffeeUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CoffeeCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const UserUpsertWithoutCoffeesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCoffeesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCoffeesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCoffeesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCoffeesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCoffeesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCoffeesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCoffeesInputSchema) ]),
}).strict();

export const UserUpdateWithoutCoffeesInputSchema: z.ZodType<Prisma.UserUpdateWithoutCoffeesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCoffeesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCoffeesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCafe: z.lazy(() => CafeUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const CoffeeUpsertWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => CoffeeUpdateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => CoffeeWhereInputSchema).optional()
}).strict();

export const CoffeeUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => CoffeeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CoffeeUpdateWithoutUsersInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const CoffeeUpdateWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfile: z.lazy(() => RoastProfileUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional(),
  variety: z.lazy(() => VarietyUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  varietyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserCreateWithoutOwnedCafeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOwnedCafeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedCafeInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCafeInputSchema) ]),
}).strict();

export const UserUpsertWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedCafeInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCafeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCafeInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedCafeInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutOwnedCafeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCafeInputSchema) ]),
}).strict();

export const UserUpdateWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserUpdateWithoutOwnedCafeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutOwnedCafeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOwnedCafeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  coffees: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const BrewStepCreateWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepCreateWithoutRecipeInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string()
}).strict();

export const BrewStepUncheckedCreateWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUncheckedCreateWithoutRecipeInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string()
}).strict();

export const BrewStepCreateOrConnectWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepCreateOrConnectWithoutRecipeInput> = z.object({
  where: z.lazy(() => BrewStepWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema) ]),
}).strict();

export const BrewStepCreateManyRecipeInputEnvelopeSchema: z.ZodType<Prisma.BrewStepCreateManyRecipeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BrewStepCreateManyRecipeInputSchema),z.lazy(() => BrewStepCreateManyRecipeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BrewStepUpsertWithWhereUniqueWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUpsertWithWhereUniqueWithoutRecipeInput> = z.object({
  where: z.lazy(() => BrewStepWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BrewStepUpdateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedUpdateWithoutRecipeInputSchema) ]),
  create: z.union([ z.lazy(() => BrewStepCreateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedCreateWithoutRecipeInputSchema) ]),
}).strict();

export const BrewStepUpdateWithWhereUniqueWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUpdateWithWhereUniqueWithoutRecipeInput> = z.object({
  where: z.lazy(() => BrewStepWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BrewStepUpdateWithoutRecipeInputSchema),z.lazy(() => BrewStepUncheckedUpdateWithoutRecipeInputSchema) ]),
}).strict();

export const BrewStepUpdateManyWithWhereWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUpdateManyWithWhereWithoutRecipeInput> = z.object({
  where: z.lazy(() => BrewStepScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BrewStepUpdateManyMutationInputSchema),z.lazy(() => BrewStepUncheckedUpdateManyWithoutRecipeInputSchema) ]),
}).strict();

export const BrewStepScalarWhereInputSchema: z.ZodType<Prisma.BrewStepScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BrewStepScalarWhereInputSchema),z.lazy(() => BrewStepScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrewStepScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrewStepScalarWhereInputSchema),z.lazy(() => BrewStepScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  time: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  recipeId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const RecipeCreateWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeCreateWithoutBrewStepsInput> = z.object({
  id: z.string().cuid().optional(),
  brewDevice: z.lazy(() => BrewDeviceSchema),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RecipeUncheckedCreateWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeUncheckedCreateWithoutBrewStepsInput> = z.object({
  id: z.string().cuid().optional(),
  brewDevice: z.lazy(() => BrewDeviceSchema),
  waterMass: z.number().int(),
  waterTemperature: z.number().int(),
  coffeeMass: z.number().int(),
  brewTimeSeconds: z.number().int(),
  grindSize: z.number().gte(0).lte(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RecipeCreateOrConnectWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeCreateOrConnectWithoutBrewStepsInput> = z.object({
  where: z.lazy(() => RecipeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RecipeCreateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedCreateWithoutBrewStepsInputSchema) ]),
}).strict();

export const RecipeUpsertWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeUpsertWithoutBrewStepsInput> = z.object({
  update: z.union([ z.lazy(() => RecipeUpdateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedUpdateWithoutBrewStepsInputSchema) ]),
  create: z.union([ z.lazy(() => RecipeCreateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedCreateWithoutBrewStepsInputSchema) ]),
  where: z.lazy(() => RecipeWhereInputSchema).optional()
}).strict();

export const RecipeUpdateToOneWithWhereWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeUpdateToOneWithWhereWithoutBrewStepsInput> = z.object({
  where: z.lazy(() => RecipeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RecipeUpdateWithoutBrewStepsInputSchema),z.lazy(() => RecipeUncheckedUpdateWithoutBrewStepsInputSchema) ]),
}).strict();

export const RecipeUpdateWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeUpdateWithoutBrewStepsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RecipeUncheckedUpdateWithoutBrewStepsInputSchema: z.ZodType<Prisma.RecipeUncheckedUpdateWithoutBrewStepsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brewDevice: z.union([ z.lazy(() => BrewDeviceSchema),z.lazy(() => EnumBrewDeviceFieldUpdateOperationsInputSchema) ]).optional(),
  waterMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  waterTemperature: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeMass: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brewTimeSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  grindSize: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoastProfileCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileCreateWithoutCoffeeInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  roastEquipment: z.lazy(() => RoastEquipmentCreateNestedOneWithoutRoastProfileInputSchema).optional()
}).strict();

export const RoastProfileUncheckedCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileUncheckedCreateWithoutCoffeeInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  roastEquipmentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RoastProfileCreateOrConnectWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileCreateOrConnectWithoutCoffeeInput> = z.object({
  where: z.lazy(() => RoastProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutCoffeeInputSchema) ]),
}).strict();

export const VarietyCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyCreateWithoutCoffeeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  stature: z.lazy(() => StatureSchema),
  leafTipColor: z.lazy(() => LeafTipColorSchema),
  beanSize: z.lazy(() => BeanSizeSchema),
  yieldPotential: z.lazy(() => YieldPotentialSchema),
  highAltitudeQualityPotential: z.lazy(() => HighAltitudeQualityPotentialSchema),
  optimalAltitude: z.lazy(() => OptimalAltitudeSchema),
  coffeeLeafRust: z.lazy(() => CoffeeLeafRustSchema),
  nematode: z.lazy(() => NematodeSchema),
  coffeeBerryDisease: z.lazy(() => CoffeeBerryDiseaseSchema),
  firstProductionYear: z.lazy(() => FirstProductionYearSchema),
  nutritionRequirement: z.lazy(() => NutritionRequirementSchema),
  ripeningOfFruit: z.lazy(() => RipeningOfFruitSchema),
  cherryToGreenBeanOuttrun: z.lazy(() => CherryToGreenBeanOutturnSchema),
  plantingDensity: z.lazy(() => PlantingDensitySchema),
  additionalAgronomicInfo: z.string().optional().nullable(),
  geneticDescription: z.lazy(() => GeneticDescriptionSchema),
  lineage: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VarietyUncheckedCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyUncheckedCreateWithoutCoffeeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  stature: z.lazy(() => StatureSchema),
  leafTipColor: z.lazy(() => LeafTipColorSchema),
  beanSize: z.lazy(() => BeanSizeSchema),
  yieldPotential: z.lazy(() => YieldPotentialSchema),
  highAltitudeQualityPotential: z.lazy(() => HighAltitudeQualityPotentialSchema),
  optimalAltitude: z.lazy(() => OptimalAltitudeSchema),
  coffeeLeafRust: z.lazy(() => CoffeeLeafRustSchema),
  nematode: z.lazy(() => NematodeSchema),
  coffeeBerryDisease: z.lazy(() => CoffeeBerryDiseaseSchema),
  firstProductionYear: z.lazy(() => FirstProductionYearSchema),
  nutritionRequirement: z.lazy(() => NutritionRequirementSchema),
  ripeningOfFruit: z.lazy(() => RipeningOfFruitSchema),
  cherryToGreenBeanOuttrun: z.lazy(() => CherryToGreenBeanOutturnSchema),
  plantingDensity: z.lazy(() => PlantingDensitySchema),
  additionalAgronomicInfo: z.string().optional().nullable(),
  geneticDescription: z.lazy(() => GeneticDescriptionSchema),
  lineage: z.string().optional().nullable(),
  breeder: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const VarietyCreateOrConnectWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyCreateOrConnectWithoutCoffeeInput> = z.object({
  where: z.lazy(() => VarietyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VarietyCreateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedCreateWithoutCoffeeInputSchema) ]),
}).strict();

export const UserToCoffeeCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeCreateWithoutCoffeeInput> = z.object({
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutCoffeesInputSchema)
}).strict();

export const UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedCreateWithoutCoffeeInput> = z.object({
  userId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const UserToCoffeeCreateOrConnectWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeCreateOrConnectWithoutCoffeeInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema) ]),
}).strict();

export const UserToCoffeeCreateManyCoffeeInputEnvelopeSchema: z.ZodType<Prisma.UserToCoffeeCreateManyCoffeeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserToCoffeeCreateManyCoffeeInputSchema),z.lazy(() => UserToCoffeeCreateManyCoffeeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoastProfileUpsertWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileUpsertWithoutCoffeeInput> = z.object({
  update: z.union([ z.lazy(() => RoastProfileUpdateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedUpdateWithoutCoffeeInputSchema) ]),
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutCoffeeInputSchema) ]),
  where: z.lazy(() => RoastProfileWhereInputSchema).optional()
}).strict();

export const RoastProfileUpdateToOneWithWhereWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileUpdateToOneWithWhereWithoutCoffeeInput> = z.object({
  where: z.lazy(() => RoastProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoastProfileUpdateWithoutCoffeeInputSchema),z.lazy(() => RoastProfileUncheckedUpdateWithoutCoffeeInputSchema) ]),
}).strict();

export const RoastProfileUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileUpdateWithoutCoffeeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roastEquipment: z.lazy(() => RoastEquipmentUpdateOneWithoutRoastProfileNestedInputSchema).optional()
}).strict();

export const RoastProfileUncheckedUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateWithoutCoffeeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roastEquipmentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VarietyUpsertWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyUpsertWithoutCoffeeInput> = z.object({
  update: z.union([ z.lazy(() => VarietyUpdateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedUpdateWithoutCoffeeInputSchema) ]),
  create: z.union([ z.lazy(() => VarietyCreateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedCreateWithoutCoffeeInputSchema) ]),
  where: z.lazy(() => VarietyWhereInputSchema).optional()
}).strict();

export const VarietyUpdateToOneWithWhereWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyUpdateToOneWithWhereWithoutCoffeeInput> = z.object({
  where: z.lazy(() => VarietyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VarietyUpdateWithoutCoffeeInputSchema),z.lazy(() => VarietyUncheckedUpdateWithoutCoffeeInputSchema) ]),
}).strict();

export const VarietyUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyUpdateWithoutCoffeeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VarietyUncheckedUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.VarietyUncheckedUpdateWithoutCoffeeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stature: z.union([ z.lazy(() => StatureSchema),z.lazy(() => EnumStatureFieldUpdateOperationsInputSchema) ]).optional(),
  leafTipColor: z.union([ z.lazy(() => LeafTipColorSchema),z.lazy(() => EnumLeafTipColorFieldUpdateOperationsInputSchema) ]).optional(),
  beanSize: z.union([ z.lazy(() => BeanSizeSchema),z.lazy(() => EnumBeanSizeFieldUpdateOperationsInputSchema) ]).optional(),
  yieldPotential: z.union([ z.lazy(() => YieldPotentialSchema),z.lazy(() => EnumYieldPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  highAltitudeQualityPotential: z.union([ z.lazy(() => HighAltitudeQualityPotentialSchema),z.lazy(() => EnumHighAltitudeQualityPotentialFieldUpdateOperationsInputSchema) ]).optional(),
  optimalAltitude: z.union([ z.lazy(() => OptimalAltitudeSchema),z.lazy(() => EnumOptimalAltitudeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeLeafRust: z.union([ z.lazy(() => CoffeeLeafRustSchema),z.lazy(() => EnumCoffeeLeafRustFieldUpdateOperationsInputSchema) ]).optional(),
  nematode: z.union([ z.lazy(() => NematodeSchema),z.lazy(() => EnumNematodeFieldUpdateOperationsInputSchema) ]).optional(),
  coffeeBerryDisease: z.union([ z.lazy(() => CoffeeBerryDiseaseSchema),z.lazy(() => EnumCoffeeBerryDiseaseFieldUpdateOperationsInputSchema) ]).optional(),
  firstProductionYear: z.union([ z.lazy(() => FirstProductionYearSchema),z.lazy(() => EnumFirstProductionYearFieldUpdateOperationsInputSchema) ]).optional(),
  nutritionRequirement: z.union([ z.lazy(() => NutritionRequirementSchema),z.lazy(() => EnumNutritionRequirementFieldUpdateOperationsInputSchema) ]).optional(),
  ripeningOfFruit: z.union([ z.lazy(() => RipeningOfFruitSchema),z.lazy(() => EnumRipeningOfFruitFieldUpdateOperationsInputSchema) ]).optional(),
  cherryToGreenBeanOuttrun: z.union([ z.lazy(() => CherryToGreenBeanOutturnSchema),z.lazy(() => EnumCherryToGreenBeanOutturnFieldUpdateOperationsInputSchema) ]).optional(),
  plantingDensity: z.union([ z.lazy(() => PlantingDensitySchema),z.lazy(() => EnumPlantingDensityFieldUpdateOperationsInputSchema) ]).optional(),
  additionalAgronomicInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geneticDescription: z.union([ z.lazy(() => GeneticDescriptionSchema),z.lazy(() => EnumGeneticDescriptionFieldUpdateOperationsInputSchema) ]).optional(),
  lineage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  breeder: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUpsertWithWhereUniqueWithoutCoffeeInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserToCoffeeUpdateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateWithoutCoffeeInputSchema) ]),
  create: z.union([ z.lazy(() => UserToCoffeeCreateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedCreateWithoutCoffeeInputSchema) ]),
}).strict();

export const UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateWithWhereUniqueWithoutCoffeeInput> = z.object({
  where: z.lazy(() => UserToCoffeeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserToCoffeeUpdateWithoutCoffeeInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateWithoutCoffeeInputSchema) ]),
}).strict();

export const UserToCoffeeUpdateManyWithWhereWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyWithWhereWithoutCoffeeInput> = z.object({
  where: z.lazy(() => UserToCoffeeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserToCoffeeUpdateManyMutationInputSchema),z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutCoffeeInputSchema) ]),
}).strict();

export const RoastProfileCreateWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileCreateWithoutRoastEquipmentInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeCreateNestedManyWithoutRoastProfileInputSchema).optional()
}).strict();

export const RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUncheckedCreateWithoutRoastEquipmentInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Coffee: z.lazy(() => CoffeeUncheckedCreateNestedManyWithoutRoastProfileInputSchema).optional()
}).strict();

export const RoastProfileCreateOrConnectWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileCreateOrConnectWithoutRoastEquipmentInput> = z.object({
  where: z.lazy(() => RoastProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema) ]),
}).strict();

export const RoastProfileCreateManyRoastEquipmentInputEnvelopeSchema: z.ZodType<Prisma.RoastProfileCreateManyRoastEquipmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoastProfileCreateManyRoastEquipmentInputSchema),z.lazy(() => RoastProfileCreateManyRoastEquipmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUpsertWithWhereUniqueWithoutRoastEquipmentInput> = z.object({
  where: z.lazy(() => RoastProfileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoastProfileUpdateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedUpdateWithoutRoastEquipmentInputSchema) ]),
  create: z.union([ z.lazy(() => RoastProfileCreateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedCreateWithoutRoastEquipmentInputSchema) ]),
}).strict();

export const RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUpdateWithWhereUniqueWithoutRoastEquipmentInput> = z.object({
  where: z.lazy(() => RoastProfileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoastProfileUpdateWithoutRoastEquipmentInputSchema),z.lazy(() => RoastProfileUncheckedUpdateWithoutRoastEquipmentInputSchema) ]),
}).strict();

export const RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUpdateManyWithWhereWithoutRoastEquipmentInput> = z.object({
  where: z.lazy(() => RoastProfileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoastProfileUpdateManyMutationInputSchema),z.lazy(() => RoastProfileUncheckedUpdateManyWithoutRoastEquipmentInputSchema) ]),
}).strict();

export const RoastProfileScalarWhereInputSchema: z.ZodType<Prisma.RoastProfileScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoastProfileScalarWhereInputSchema),z.lazy(() => RoastProfileScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoastProfileScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoastProfileScalarWhereInputSchema),z.lazy(() => RoastProfileScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  development: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  chargeTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  turningPointTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  firstCrackTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  dropTemp: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  roastEquipmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CoffeeCreateWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeCreateWithoutRoastProfileInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variety: z.lazy(() => VarietyCreateNestedOneWithoutCoffeeInputSchema),
  users: z.lazy(() => UserToCoffeeCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeUncheckedCreateWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateWithoutRoastProfileInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeCreateOrConnectWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeCreateOrConnectWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema) ]),
}).strict();

export const CoffeeCreateManyRoastProfileInputEnvelopeSchema: z.ZodType<Prisma.CoffeeCreateManyRoastProfileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CoffeeCreateManyRoastProfileInputSchema),z.lazy(() => CoffeeCreateManyRoastProfileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoastEquipmentCreateWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentCreateWithoutRoastProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  company: z.string().optional().nullable()
}).strict();

export const RoastEquipmentUncheckedCreateWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentUncheckedCreateWithoutRoastProfileInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  company: z.string().optional().nullable()
}).strict();

export const RoastEquipmentCreateOrConnectWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentCreateOrConnectWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => RoastEquipmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoastEquipmentCreateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedCreateWithoutRoastProfileInputSchema) ]),
}).strict();

export const CoffeeUpsertWithWhereUniqueWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUpsertWithWhereUniqueWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CoffeeUpdateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutRoastProfileInputSchema) ]),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutRoastProfileInputSchema) ]),
}).strict();

export const CoffeeUpdateWithWhereUniqueWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUpdateWithWhereUniqueWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CoffeeUpdateWithoutRoastProfileInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutRoastProfileInputSchema) ]),
}).strict();

export const CoffeeUpdateManyWithWhereWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUpdateManyWithWhereWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => CoffeeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CoffeeUpdateManyMutationInputSchema),z.lazy(() => CoffeeUncheckedUpdateManyWithoutRoastProfileInputSchema) ]),
}).strict();

export const CoffeeScalarWhereInputSchema: z.ZodType<Prisma.CoffeeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CoffeeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CoffeeScalarWhereInputSchema),z.lazy(() => CoffeeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origin: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  region: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  altitude: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  varietyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roastProfileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoastEquipmentUpsertWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentUpsertWithoutRoastProfileInput> = z.object({
  update: z.union([ z.lazy(() => RoastEquipmentUpdateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedUpdateWithoutRoastProfileInputSchema) ]),
  create: z.union([ z.lazy(() => RoastEquipmentCreateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedCreateWithoutRoastProfileInputSchema) ]),
  where: z.lazy(() => RoastEquipmentWhereInputSchema).optional()
}).strict();

export const RoastEquipmentUpdateToOneWithWhereWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentUpdateToOneWithWhereWithoutRoastProfileInput> = z.object({
  where: z.lazy(() => RoastEquipmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoastEquipmentUpdateWithoutRoastProfileInputSchema),z.lazy(() => RoastEquipmentUncheckedUpdateWithoutRoastProfileInputSchema) ]),
}).strict();

export const RoastEquipmentUpdateWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentUpdateWithoutRoastProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const RoastEquipmentUncheckedUpdateWithoutRoastProfileInputSchema: z.ZodType<Prisma.RoastEquipmentUncheckedUpdateWithoutRoastProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CoffeeCreateWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeCreateWithoutVarietyInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  roastProfile: z.lazy(() => RoastProfileCreateNestedOneWithoutCoffeeInputSchema),
  users: z.lazy(() => UserToCoffeeCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeUncheckedCreateWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUncheckedCreateWithoutVarietyInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserToCoffeeUncheckedCreateNestedManyWithoutCoffeeInputSchema).optional()
}).strict();

export const CoffeeCreateOrConnectWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeCreateOrConnectWithoutVarietyInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema) ]),
}).strict();

export const CoffeeCreateManyVarietyInputEnvelopeSchema: z.ZodType<Prisma.CoffeeCreateManyVarietyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CoffeeCreateManyVarietyInputSchema),z.lazy(() => CoffeeCreateManyVarietyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CoffeeUpsertWithWhereUniqueWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUpsertWithWhereUniqueWithoutVarietyInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CoffeeUpdateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutVarietyInputSchema) ]),
  create: z.union([ z.lazy(() => CoffeeCreateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedCreateWithoutVarietyInputSchema) ]),
}).strict();

export const CoffeeUpdateWithWhereUniqueWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUpdateWithWhereUniqueWithoutVarietyInput> = z.object({
  where: z.lazy(() => CoffeeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CoffeeUpdateWithoutVarietyInputSchema),z.lazy(() => CoffeeUncheckedUpdateWithoutVarietyInputSchema) ]),
}).strict();

export const CoffeeUpdateManyWithWhereWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUpdateManyWithWhereWithoutVarietyInput> = z.object({
  where: z.lazy(() => CoffeeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CoffeeUpdateManyMutationInputSchema),z.lazy(() => CoffeeUncheckedUpdateManyWithoutVarietyInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export const RoleCreateManyUserInputSchema: z.ZodType<Prisma.RoleCreateManyUserInput> = z.object({
  name: z.lazy(() => RoleValueSchema)
}).strict();

export const UserToCoffeeCreateManyUserInputSchema: z.ZodType<Prisma.UserToCoffeeCreateManyUserInput> = z.object({
  coffeeId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const CafeCreateManyOwnerInputSchema: z.ZodType<Prisma.CafeCreateManyOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  addedBy: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUserInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUserInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUserInput> = z.object({
  name: z.union([ z.lazy(() => RoleValueSchema),z.lazy(() => EnumRoleValueFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateWithoutUserInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coffee: z.lazy(() => CoffeeUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const UserToCoffeeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateWithoutUserInput> = z.object({
  coffeeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateManyWithoutUserInput> = z.object({
  coffeeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CafeUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.CafeUncheckedUpdateManyWithoutOwnerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrewStepCreateManyRecipeInputSchema: z.ZodType<Prisma.BrewStepCreateManyRecipeInput> = z.object({
  id: z.string().cuid().optional(),
  time: z.number().int(),
  duration: z.number().int(),
  description: z.string()
}).strict();

export const BrewStepUpdateWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUpdateWithoutRecipeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrewStepUncheckedUpdateWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUncheckedUpdateWithoutRecipeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BrewStepUncheckedUpdateManyWithoutRecipeInputSchema: z.ZodType<Prisma.BrewStepUncheckedUpdateManyWithoutRecipeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeCreateManyCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeCreateManyCoffeeInput> = z.object({
  userId: z.string(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string()
}).strict();

export const UserToCoffeeUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUpdateWithoutCoffeeInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCoffeesNestedInputSchema).optional()
}).strict();

export const UserToCoffeeUncheckedUpdateWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateWithoutCoffeeInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserToCoffeeUncheckedUpdateManyWithoutCoffeeInputSchema: z.ZodType<Prisma.UserToCoffeeUncheckedUpdateManyWithoutCoffeeInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoastProfileCreateManyRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileCreateManyRoastEquipmentInput> = z.object({
  id: z.string().cuid().optional(),
  development: z.number().gte(0).lte(100),
  chargeTemp: z.number().int().optional().nullable(),
  turningPointTemp: z.number().int().optional().nullable(),
  firstCrackTemp: z.number().int().optional().nullable(),
  dropTemp: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RoastProfileUpdateWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUpdateWithoutRoastEquipmentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUpdateManyWithoutRoastProfileNestedInputSchema).optional()
}).strict();

export const RoastProfileUncheckedUpdateWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateWithoutRoastEquipmentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Coffee: z.lazy(() => CoffeeUncheckedUpdateManyWithoutRoastProfileNestedInputSchema).optional()
}).strict();

export const RoastProfileUncheckedUpdateManyWithoutRoastEquipmentInputSchema: z.ZodType<Prisma.RoastProfileUncheckedUpdateManyWithoutRoastEquipmentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  development: z.union([ z.number().gte(0).lte(100),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  chargeTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  turningPointTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstCrackTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dropTemp: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CoffeeCreateManyRoastProfileInputSchema: z.ZodType<Prisma.CoffeeCreateManyRoastProfileInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  varietyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CoffeeUpdateWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUpdateWithoutRoastProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variety: z.lazy(() => VarietyUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional(),
  users: z.lazy(() => UserToCoffeeUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateWithoutRoastProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  varietyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateManyWithoutRoastProfileInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateManyWithoutRoastProfileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  varietyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CoffeeCreateManyVarietyInputSchema: z.ZodType<Prisma.CoffeeCreateManyVarietyInput> = z.object({
  id: z.string().cuid().optional(),
  origin: z.string(),
  region: z.string(),
  altitude: z.number().int(),
  roastProfileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CoffeeUpdateWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUpdateWithoutVarietyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfile: z.lazy(() => RoastProfileUpdateOneRequiredWithoutCoffeeNestedInputSchema).optional(),
  users: z.lazy(() => UserToCoffeeUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateWithoutVarietyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserToCoffeeUncheckedUpdateManyWithoutCoffeeNestedInputSchema).optional()
}).strict();

export const CoffeeUncheckedUpdateManyWithoutVarietyInputSchema: z.ZodType<Prisma.CoffeeUncheckedUpdateManyWithoutVarietyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origin: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  region: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  altitude: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  roastProfileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ExampleFindFirstArgsSchema: z.ZodType<Prisma.ExampleFindFirstArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereInputSchema.optional(),
  orderBy: z.union([ ExampleOrderByWithRelationInputSchema.array(),ExampleOrderByWithRelationInputSchema ]).optional(),
  cursor: ExampleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExampleScalarFieldEnumSchema,ExampleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ExampleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindFirstOrThrowArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereInputSchema.optional(),
  orderBy: z.union([ ExampleOrderByWithRelationInputSchema.array(),ExampleOrderByWithRelationInputSchema ]).optional(),
  cursor: ExampleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExampleScalarFieldEnumSchema,ExampleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ExampleFindManyArgsSchema: z.ZodType<Prisma.ExampleFindManyArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereInputSchema.optional(),
  orderBy: z.union([ ExampleOrderByWithRelationInputSchema.array(),ExampleOrderByWithRelationInputSchema ]).optional(),
  cursor: ExampleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExampleScalarFieldEnumSchema,ExampleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const ExampleAggregateArgsSchema: z.ZodType<Prisma.ExampleAggregateArgs> = z.object({
  where: ExampleWhereInputSchema.optional(),
  orderBy: z.union([ ExampleOrderByWithRelationInputSchema.array(),ExampleOrderByWithRelationInputSchema ]).optional(),
  cursor: ExampleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ExampleGroupByArgsSchema: z.ZodType<Prisma.ExampleGroupByArgs> = z.object({
  where: ExampleWhereInputSchema.optional(),
  orderBy: z.union([ ExampleOrderByWithAggregationInputSchema.array(),ExampleOrderByWithAggregationInputSchema ]).optional(),
  by: ExampleScalarFieldEnumSchema.array(),
  having: ExampleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ExampleFindUniqueArgsSchema: z.ZodType<Prisma.ExampleFindUniqueArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereUniqueInputSchema,
}).strict()

export const ExampleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindUniqueOrThrowArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereUniqueInputSchema,
}).strict()

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(),RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(),
  having: RoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserToCoffeeFindFirstArgsSchema: z.ZodType<Prisma.UserToCoffeeFindFirstArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereInputSchema.optional(),
  orderBy: z.union([ UserToCoffeeOrderByWithRelationInputSchema.array(),UserToCoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserToCoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserToCoffeeScalarFieldEnumSchema,UserToCoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserToCoffeeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserToCoffeeFindFirstOrThrowArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereInputSchema.optional(),
  orderBy: z.union([ UserToCoffeeOrderByWithRelationInputSchema.array(),UserToCoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserToCoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserToCoffeeScalarFieldEnumSchema,UserToCoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserToCoffeeFindManyArgsSchema: z.ZodType<Prisma.UserToCoffeeFindManyArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereInputSchema.optional(),
  orderBy: z.union([ UserToCoffeeOrderByWithRelationInputSchema.array(),UserToCoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserToCoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserToCoffeeScalarFieldEnumSchema,UserToCoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserToCoffeeAggregateArgsSchema: z.ZodType<Prisma.UserToCoffeeAggregateArgs> = z.object({
  where: UserToCoffeeWhereInputSchema.optional(),
  orderBy: z.union([ UserToCoffeeOrderByWithRelationInputSchema.array(),UserToCoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserToCoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserToCoffeeGroupByArgsSchema: z.ZodType<Prisma.UserToCoffeeGroupByArgs> = z.object({
  where: UserToCoffeeWhereInputSchema.optional(),
  orderBy: z.union([ UserToCoffeeOrderByWithAggregationInputSchema.array(),UserToCoffeeOrderByWithAggregationInputSchema ]).optional(),
  by: UserToCoffeeScalarFieldEnumSchema.array(),
  having: UserToCoffeeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserToCoffeeFindUniqueArgsSchema: z.ZodType<Prisma.UserToCoffeeFindUniqueArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereUniqueInputSchema,
}).strict()

export const UserToCoffeeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserToCoffeeFindUniqueOrThrowArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereUniqueInputSchema,
}).strict()

export const CafeFindFirstArgsSchema: z.ZodType<Prisma.CafeFindFirstArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereInputSchema.optional(),
  orderBy: z.union([ CafeOrderByWithRelationInputSchema.array(),CafeOrderByWithRelationInputSchema ]).optional(),
  cursor: CafeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CafeScalarFieldEnumSchema,CafeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CafeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CafeFindFirstOrThrowArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereInputSchema.optional(),
  orderBy: z.union([ CafeOrderByWithRelationInputSchema.array(),CafeOrderByWithRelationInputSchema ]).optional(),
  cursor: CafeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CafeScalarFieldEnumSchema,CafeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CafeFindManyArgsSchema: z.ZodType<Prisma.CafeFindManyArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereInputSchema.optional(),
  orderBy: z.union([ CafeOrderByWithRelationInputSchema.array(),CafeOrderByWithRelationInputSchema ]).optional(),
  cursor: CafeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CafeScalarFieldEnumSchema,CafeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CafeAggregateArgsSchema: z.ZodType<Prisma.CafeAggregateArgs> = z.object({
  where: CafeWhereInputSchema.optional(),
  orderBy: z.union([ CafeOrderByWithRelationInputSchema.array(),CafeOrderByWithRelationInputSchema ]).optional(),
  cursor: CafeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CafeGroupByArgsSchema: z.ZodType<Prisma.CafeGroupByArgs> = z.object({
  where: CafeWhereInputSchema.optional(),
  orderBy: z.union([ CafeOrderByWithAggregationInputSchema.array(),CafeOrderByWithAggregationInputSchema ]).optional(),
  by: CafeScalarFieldEnumSchema.array(),
  having: CafeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CafeFindUniqueArgsSchema: z.ZodType<Prisma.CafeFindUniqueArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereUniqueInputSchema,
}).strict()

export const CafeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CafeFindUniqueOrThrowArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereUniqueInputSchema,
}).strict()

export const RecipeFindFirstArgsSchema: z.ZodType<Prisma.RecipeFindFirstArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereInputSchema.optional(),
  orderBy: z.union([ RecipeOrderByWithRelationInputSchema.array(),RecipeOrderByWithRelationInputSchema ]).optional(),
  cursor: RecipeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RecipeScalarFieldEnumSchema,RecipeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RecipeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RecipeFindFirstOrThrowArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereInputSchema.optional(),
  orderBy: z.union([ RecipeOrderByWithRelationInputSchema.array(),RecipeOrderByWithRelationInputSchema ]).optional(),
  cursor: RecipeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RecipeScalarFieldEnumSchema,RecipeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RecipeFindManyArgsSchema: z.ZodType<Prisma.RecipeFindManyArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereInputSchema.optional(),
  orderBy: z.union([ RecipeOrderByWithRelationInputSchema.array(),RecipeOrderByWithRelationInputSchema ]).optional(),
  cursor: RecipeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RecipeScalarFieldEnumSchema,RecipeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RecipeAggregateArgsSchema: z.ZodType<Prisma.RecipeAggregateArgs> = z.object({
  where: RecipeWhereInputSchema.optional(),
  orderBy: z.union([ RecipeOrderByWithRelationInputSchema.array(),RecipeOrderByWithRelationInputSchema ]).optional(),
  cursor: RecipeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RecipeGroupByArgsSchema: z.ZodType<Prisma.RecipeGroupByArgs> = z.object({
  where: RecipeWhereInputSchema.optional(),
  orderBy: z.union([ RecipeOrderByWithAggregationInputSchema.array(),RecipeOrderByWithAggregationInputSchema ]).optional(),
  by: RecipeScalarFieldEnumSchema.array(),
  having: RecipeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RecipeFindUniqueArgsSchema: z.ZodType<Prisma.RecipeFindUniqueArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereUniqueInputSchema,
}).strict()

export const RecipeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RecipeFindUniqueOrThrowArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereUniqueInputSchema,
}).strict()

export const BrewStepFindFirstArgsSchema: z.ZodType<Prisma.BrewStepFindFirstArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereInputSchema.optional(),
  orderBy: z.union([ BrewStepOrderByWithRelationInputSchema.array(),BrewStepOrderByWithRelationInputSchema ]).optional(),
  cursor: BrewStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrewStepScalarFieldEnumSchema,BrewStepScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrewStepFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BrewStepFindFirstOrThrowArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereInputSchema.optional(),
  orderBy: z.union([ BrewStepOrderByWithRelationInputSchema.array(),BrewStepOrderByWithRelationInputSchema ]).optional(),
  cursor: BrewStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrewStepScalarFieldEnumSchema,BrewStepScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrewStepFindManyArgsSchema: z.ZodType<Prisma.BrewStepFindManyArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereInputSchema.optional(),
  orderBy: z.union([ BrewStepOrderByWithRelationInputSchema.array(),BrewStepOrderByWithRelationInputSchema ]).optional(),
  cursor: BrewStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrewStepScalarFieldEnumSchema,BrewStepScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const BrewStepAggregateArgsSchema: z.ZodType<Prisma.BrewStepAggregateArgs> = z.object({
  where: BrewStepWhereInputSchema.optional(),
  orderBy: z.union([ BrewStepOrderByWithRelationInputSchema.array(),BrewStepOrderByWithRelationInputSchema ]).optional(),
  cursor: BrewStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BrewStepGroupByArgsSchema: z.ZodType<Prisma.BrewStepGroupByArgs> = z.object({
  where: BrewStepWhereInputSchema.optional(),
  orderBy: z.union([ BrewStepOrderByWithAggregationInputSchema.array(),BrewStepOrderByWithAggregationInputSchema ]).optional(),
  by: BrewStepScalarFieldEnumSchema.array(),
  having: BrewStepScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BrewStepFindUniqueArgsSchema: z.ZodType<Prisma.BrewStepFindUniqueArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereUniqueInputSchema,
}).strict()

export const BrewStepFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BrewStepFindUniqueOrThrowArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereUniqueInputSchema,
}).strict()

export const CoffeeFindFirstArgsSchema: z.ZodType<Prisma.CoffeeFindFirstArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereInputSchema.optional(),
  orderBy: z.union([ CoffeeOrderByWithRelationInputSchema.array(),CoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: CoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CoffeeScalarFieldEnumSchema,CoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CoffeeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CoffeeFindFirstOrThrowArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereInputSchema.optional(),
  orderBy: z.union([ CoffeeOrderByWithRelationInputSchema.array(),CoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: CoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CoffeeScalarFieldEnumSchema,CoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CoffeeFindManyArgsSchema: z.ZodType<Prisma.CoffeeFindManyArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereInputSchema.optional(),
  orderBy: z.union([ CoffeeOrderByWithRelationInputSchema.array(),CoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: CoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CoffeeScalarFieldEnumSchema,CoffeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const CoffeeAggregateArgsSchema: z.ZodType<Prisma.CoffeeAggregateArgs> = z.object({
  where: CoffeeWhereInputSchema.optional(),
  orderBy: z.union([ CoffeeOrderByWithRelationInputSchema.array(),CoffeeOrderByWithRelationInputSchema ]).optional(),
  cursor: CoffeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CoffeeGroupByArgsSchema: z.ZodType<Prisma.CoffeeGroupByArgs> = z.object({
  where: CoffeeWhereInputSchema.optional(),
  orderBy: z.union([ CoffeeOrderByWithAggregationInputSchema.array(),CoffeeOrderByWithAggregationInputSchema ]).optional(),
  by: CoffeeScalarFieldEnumSchema.array(),
  having: CoffeeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CoffeeFindUniqueArgsSchema: z.ZodType<Prisma.CoffeeFindUniqueArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereUniqueInputSchema,
}).strict()

export const CoffeeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CoffeeFindUniqueOrThrowArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereUniqueInputSchema,
}).strict()

export const RoastEquipmentFindFirstArgsSchema: z.ZodType<Prisma.RoastEquipmentFindFirstArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereInputSchema.optional(),
  orderBy: z.union([ RoastEquipmentOrderByWithRelationInputSchema.array(),RoastEquipmentOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastEquipmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastEquipmentScalarFieldEnumSchema,RoastEquipmentScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastEquipmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoastEquipmentFindFirstOrThrowArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereInputSchema.optional(),
  orderBy: z.union([ RoastEquipmentOrderByWithRelationInputSchema.array(),RoastEquipmentOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastEquipmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastEquipmentScalarFieldEnumSchema,RoastEquipmentScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastEquipmentFindManyArgsSchema: z.ZodType<Prisma.RoastEquipmentFindManyArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereInputSchema.optional(),
  orderBy: z.union([ RoastEquipmentOrderByWithRelationInputSchema.array(),RoastEquipmentOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastEquipmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastEquipmentScalarFieldEnumSchema,RoastEquipmentScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastEquipmentAggregateArgsSchema: z.ZodType<Prisma.RoastEquipmentAggregateArgs> = z.object({
  where: RoastEquipmentWhereInputSchema.optional(),
  orderBy: z.union([ RoastEquipmentOrderByWithRelationInputSchema.array(),RoastEquipmentOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastEquipmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoastEquipmentGroupByArgsSchema: z.ZodType<Prisma.RoastEquipmentGroupByArgs> = z.object({
  where: RoastEquipmentWhereInputSchema.optional(),
  orderBy: z.union([ RoastEquipmentOrderByWithAggregationInputSchema.array(),RoastEquipmentOrderByWithAggregationInputSchema ]).optional(),
  by: RoastEquipmentScalarFieldEnumSchema.array(),
  having: RoastEquipmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoastEquipmentFindUniqueArgsSchema: z.ZodType<Prisma.RoastEquipmentFindUniqueArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereUniqueInputSchema,
}).strict()

export const RoastEquipmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoastEquipmentFindUniqueOrThrowArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereUniqueInputSchema,
}).strict()

export const RoastProfileFindFirstArgsSchema: z.ZodType<Prisma.RoastProfileFindFirstArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereInputSchema.optional(),
  orderBy: z.union([ RoastProfileOrderByWithRelationInputSchema.array(),RoastProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastProfileScalarFieldEnumSchema,RoastProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoastProfileFindFirstOrThrowArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereInputSchema.optional(),
  orderBy: z.union([ RoastProfileOrderByWithRelationInputSchema.array(),RoastProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastProfileScalarFieldEnumSchema,RoastProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastProfileFindManyArgsSchema: z.ZodType<Prisma.RoastProfileFindManyArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereInputSchema.optional(),
  orderBy: z.union([ RoastProfileOrderByWithRelationInputSchema.array(),RoastProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoastProfileScalarFieldEnumSchema,RoastProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RoastProfileAggregateArgsSchema: z.ZodType<Prisma.RoastProfileAggregateArgs> = z.object({
  where: RoastProfileWhereInputSchema.optional(),
  orderBy: z.union([ RoastProfileOrderByWithRelationInputSchema.array(),RoastProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: RoastProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoastProfileGroupByArgsSchema: z.ZodType<Prisma.RoastProfileGroupByArgs> = z.object({
  where: RoastProfileWhereInputSchema.optional(),
  orderBy: z.union([ RoastProfileOrderByWithAggregationInputSchema.array(),RoastProfileOrderByWithAggregationInputSchema ]).optional(),
  by: RoastProfileScalarFieldEnumSchema.array(),
  having: RoastProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoastProfileFindUniqueArgsSchema: z.ZodType<Prisma.RoastProfileFindUniqueArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereUniqueInputSchema,
}).strict()

export const RoastProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoastProfileFindUniqueOrThrowArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereUniqueInputSchema,
}).strict()

export const VarietyFindFirstArgsSchema: z.ZodType<Prisma.VarietyFindFirstArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereInputSchema.optional(),
  orderBy: z.union([ VarietyOrderByWithRelationInputSchema.array(),VarietyOrderByWithRelationInputSchema ]).optional(),
  cursor: VarietyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VarietyScalarFieldEnumSchema,VarietyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VarietyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VarietyFindFirstOrThrowArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereInputSchema.optional(),
  orderBy: z.union([ VarietyOrderByWithRelationInputSchema.array(),VarietyOrderByWithRelationInputSchema ]).optional(),
  cursor: VarietyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VarietyScalarFieldEnumSchema,VarietyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VarietyFindManyArgsSchema: z.ZodType<Prisma.VarietyFindManyArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereInputSchema.optional(),
  orderBy: z.union([ VarietyOrderByWithRelationInputSchema.array(),VarietyOrderByWithRelationInputSchema ]).optional(),
  cursor: VarietyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VarietyScalarFieldEnumSchema,VarietyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const VarietyAggregateArgsSchema: z.ZodType<Prisma.VarietyAggregateArgs> = z.object({
  where: VarietyWhereInputSchema.optional(),
  orderBy: z.union([ VarietyOrderByWithRelationInputSchema.array(),VarietyOrderByWithRelationInputSchema ]).optional(),
  cursor: VarietyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VarietyGroupByArgsSchema: z.ZodType<Prisma.VarietyGroupByArgs> = z.object({
  where: VarietyWhereInputSchema.optional(),
  orderBy: z.union([ VarietyOrderByWithAggregationInputSchema.array(),VarietyOrderByWithAggregationInputSchema ]).optional(),
  by: VarietyScalarFieldEnumSchema.array(),
  having: VarietyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VarietyFindUniqueArgsSchema: z.ZodType<Prisma.VarietyFindUniqueArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereUniqueInputSchema,
}).strict()

export const VarietyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VarietyFindUniqueOrThrowArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereUniqueInputSchema,
}).strict()

export const ExampleCreateArgsSchema: z.ZodType<Prisma.ExampleCreateArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  data: z.union([ ExampleCreateInputSchema,ExampleUncheckedCreateInputSchema ]),
}).strict()

export const ExampleUpsertArgsSchema: z.ZodType<Prisma.ExampleUpsertArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereUniqueInputSchema,
  create: z.union([ ExampleCreateInputSchema,ExampleUncheckedCreateInputSchema ]),
  update: z.union([ ExampleUpdateInputSchema,ExampleUncheckedUpdateInputSchema ]),
}).strict()

export const ExampleCreateManyArgsSchema: z.ZodType<Prisma.ExampleCreateManyArgs> = z.object({
  data: z.union([ ExampleCreateManyInputSchema,ExampleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ExampleDeleteArgsSchema: z.ZodType<Prisma.ExampleDeleteArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  where: ExampleWhereUniqueInputSchema,
}).strict()

export const ExampleUpdateArgsSchema: z.ZodType<Prisma.ExampleUpdateArgs> = z.object({
  select: ExampleSelectSchema.optional(),
  data: z.union([ ExampleUpdateInputSchema,ExampleUncheckedUpdateInputSchema ]),
  where: ExampleWhereUniqueInputSchema,
}).strict()

export const ExampleUpdateManyArgsSchema: z.ZodType<Prisma.ExampleUpdateManyArgs> = z.object({
  data: z.union([ ExampleUpdateManyMutationInputSchema,ExampleUncheckedUpdateManyInputSchema ]),
  where: ExampleWhereInputSchema.optional(),
}).strict()

export const ExampleDeleteManyArgsSchema: z.ZodType<Prisma.ExampleDeleteManyArgs> = z.object({
  where: ExampleWhereInputSchema.optional(),
}).strict()

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict()

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict()

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict()

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict()

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict()

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict()

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict()

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict()

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict()

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict()

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict()

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict()

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict()

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict()

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
}).strict()

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
  create: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
}).strict()

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema,RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema,RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(),
}).strict()

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserToCoffeeCreateArgsSchema: z.ZodType<Prisma.UserToCoffeeCreateArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  data: z.union([ UserToCoffeeCreateInputSchema,UserToCoffeeUncheckedCreateInputSchema ]),
}).strict()

export const UserToCoffeeUpsertArgsSchema: z.ZodType<Prisma.UserToCoffeeUpsertArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereUniqueInputSchema,
  create: z.union([ UserToCoffeeCreateInputSchema,UserToCoffeeUncheckedCreateInputSchema ]),
  update: z.union([ UserToCoffeeUpdateInputSchema,UserToCoffeeUncheckedUpdateInputSchema ]),
}).strict()

export const UserToCoffeeCreateManyArgsSchema: z.ZodType<Prisma.UserToCoffeeCreateManyArgs> = z.object({
  data: z.union([ UserToCoffeeCreateManyInputSchema,UserToCoffeeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserToCoffeeDeleteArgsSchema: z.ZodType<Prisma.UserToCoffeeDeleteArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  where: UserToCoffeeWhereUniqueInputSchema,
}).strict()

export const UserToCoffeeUpdateArgsSchema: z.ZodType<Prisma.UserToCoffeeUpdateArgs> = z.object({
  select: UserToCoffeeSelectSchema.optional(),
  include: UserToCoffeeIncludeSchema.optional(),
  data: z.union([ UserToCoffeeUpdateInputSchema,UserToCoffeeUncheckedUpdateInputSchema ]),
  where: UserToCoffeeWhereUniqueInputSchema,
}).strict()

export const UserToCoffeeUpdateManyArgsSchema: z.ZodType<Prisma.UserToCoffeeUpdateManyArgs> = z.object({
  data: z.union([ UserToCoffeeUpdateManyMutationInputSchema,UserToCoffeeUncheckedUpdateManyInputSchema ]),
  where: UserToCoffeeWhereInputSchema.optional(),
}).strict()

export const UserToCoffeeDeleteManyArgsSchema: z.ZodType<Prisma.UserToCoffeeDeleteManyArgs> = z.object({
  where: UserToCoffeeWhereInputSchema.optional(),
}).strict()

export const CafeCreateArgsSchema: z.ZodType<Prisma.CafeCreateArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  data: z.union([ CafeCreateInputSchema,CafeUncheckedCreateInputSchema ]),
}).strict()

export const CafeUpsertArgsSchema: z.ZodType<Prisma.CafeUpsertArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereUniqueInputSchema,
  create: z.union([ CafeCreateInputSchema,CafeUncheckedCreateInputSchema ]),
  update: z.union([ CafeUpdateInputSchema,CafeUncheckedUpdateInputSchema ]),
}).strict()

export const CafeCreateManyArgsSchema: z.ZodType<Prisma.CafeCreateManyArgs> = z.object({
  data: z.union([ CafeCreateManyInputSchema,CafeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CafeDeleteArgsSchema: z.ZodType<Prisma.CafeDeleteArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  where: CafeWhereUniqueInputSchema,
}).strict()

export const CafeUpdateArgsSchema: z.ZodType<Prisma.CafeUpdateArgs> = z.object({
  select: CafeSelectSchema.optional(),
  include: CafeIncludeSchema.optional(),
  data: z.union([ CafeUpdateInputSchema,CafeUncheckedUpdateInputSchema ]),
  where: CafeWhereUniqueInputSchema,
}).strict()

export const CafeUpdateManyArgsSchema: z.ZodType<Prisma.CafeUpdateManyArgs> = z.object({
  data: z.union([ CafeUpdateManyMutationInputSchema,CafeUncheckedUpdateManyInputSchema ]),
  where: CafeWhereInputSchema.optional(),
}).strict()

export const CafeDeleteManyArgsSchema: z.ZodType<Prisma.CafeDeleteManyArgs> = z.object({
  where: CafeWhereInputSchema.optional(),
}).strict()

export const RecipeCreateArgsSchema: z.ZodType<Prisma.RecipeCreateArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  data: z.union([ RecipeCreateInputSchema,RecipeUncheckedCreateInputSchema ]),
}).strict()

export const RecipeUpsertArgsSchema: z.ZodType<Prisma.RecipeUpsertArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereUniqueInputSchema,
  create: z.union([ RecipeCreateInputSchema,RecipeUncheckedCreateInputSchema ]),
  update: z.union([ RecipeUpdateInputSchema,RecipeUncheckedUpdateInputSchema ]),
}).strict()

export const RecipeCreateManyArgsSchema: z.ZodType<Prisma.RecipeCreateManyArgs> = z.object({
  data: z.union([ RecipeCreateManyInputSchema,RecipeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RecipeDeleteArgsSchema: z.ZodType<Prisma.RecipeDeleteArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  where: RecipeWhereUniqueInputSchema,
}).strict()

export const RecipeUpdateArgsSchema: z.ZodType<Prisma.RecipeUpdateArgs> = z.object({
  select: RecipeSelectSchema.optional(),
  include: RecipeIncludeSchema.optional(),
  data: z.union([ RecipeUpdateInputSchema,RecipeUncheckedUpdateInputSchema ]),
  where: RecipeWhereUniqueInputSchema,
}).strict()

export const RecipeUpdateManyArgsSchema: z.ZodType<Prisma.RecipeUpdateManyArgs> = z.object({
  data: z.union([ RecipeUpdateManyMutationInputSchema,RecipeUncheckedUpdateManyInputSchema ]),
  where: RecipeWhereInputSchema.optional(),
}).strict()

export const RecipeDeleteManyArgsSchema: z.ZodType<Prisma.RecipeDeleteManyArgs> = z.object({
  where: RecipeWhereInputSchema.optional(),
}).strict()

export const BrewStepCreateArgsSchema: z.ZodType<Prisma.BrewStepCreateArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  data: z.union([ BrewStepCreateInputSchema,BrewStepUncheckedCreateInputSchema ]),
}).strict()

export const BrewStepUpsertArgsSchema: z.ZodType<Prisma.BrewStepUpsertArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereUniqueInputSchema,
  create: z.union([ BrewStepCreateInputSchema,BrewStepUncheckedCreateInputSchema ]),
  update: z.union([ BrewStepUpdateInputSchema,BrewStepUncheckedUpdateInputSchema ]),
}).strict()

export const BrewStepCreateManyArgsSchema: z.ZodType<Prisma.BrewStepCreateManyArgs> = z.object({
  data: z.union([ BrewStepCreateManyInputSchema,BrewStepCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const BrewStepDeleteArgsSchema: z.ZodType<Prisma.BrewStepDeleteArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  where: BrewStepWhereUniqueInputSchema,
}).strict()

export const BrewStepUpdateArgsSchema: z.ZodType<Prisma.BrewStepUpdateArgs> = z.object({
  select: BrewStepSelectSchema.optional(),
  include: BrewStepIncludeSchema.optional(),
  data: z.union([ BrewStepUpdateInputSchema,BrewStepUncheckedUpdateInputSchema ]),
  where: BrewStepWhereUniqueInputSchema,
}).strict()

export const BrewStepUpdateManyArgsSchema: z.ZodType<Prisma.BrewStepUpdateManyArgs> = z.object({
  data: z.union([ BrewStepUpdateManyMutationInputSchema,BrewStepUncheckedUpdateManyInputSchema ]),
  where: BrewStepWhereInputSchema.optional(),
}).strict()

export const BrewStepDeleteManyArgsSchema: z.ZodType<Prisma.BrewStepDeleteManyArgs> = z.object({
  where: BrewStepWhereInputSchema.optional(),
}).strict()

export const CoffeeCreateArgsSchema: z.ZodType<Prisma.CoffeeCreateArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  data: z.union([ CoffeeCreateInputSchema,CoffeeUncheckedCreateInputSchema ]),
}).strict()

export const CoffeeUpsertArgsSchema: z.ZodType<Prisma.CoffeeUpsertArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereUniqueInputSchema,
  create: z.union([ CoffeeCreateInputSchema,CoffeeUncheckedCreateInputSchema ]),
  update: z.union([ CoffeeUpdateInputSchema,CoffeeUncheckedUpdateInputSchema ]),
}).strict()

export const CoffeeCreateManyArgsSchema: z.ZodType<Prisma.CoffeeCreateManyArgs> = z.object({
  data: z.union([ CoffeeCreateManyInputSchema,CoffeeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const CoffeeDeleteArgsSchema: z.ZodType<Prisma.CoffeeDeleteArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  where: CoffeeWhereUniqueInputSchema,
}).strict()

export const CoffeeUpdateArgsSchema: z.ZodType<Prisma.CoffeeUpdateArgs> = z.object({
  select: CoffeeSelectSchema.optional(),
  include: CoffeeIncludeSchema.optional(),
  data: z.union([ CoffeeUpdateInputSchema,CoffeeUncheckedUpdateInputSchema ]),
  where: CoffeeWhereUniqueInputSchema,
}).strict()

export const CoffeeUpdateManyArgsSchema: z.ZodType<Prisma.CoffeeUpdateManyArgs> = z.object({
  data: z.union([ CoffeeUpdateManyMutationInputSchema,CoffeeUncheckedUpdateManyInputSchema ]),
  where: CoffeeWhereInputSchema.optional(),
}).strict()

export const CoffeeDeleteManyArgsSchema: z.ZodType<Prisma.CoffeeDeleteManyArgs> = z.object({
  where: CoffeeWhereInputSchema.optional(),
}).strict()

export const RoastEquipmentCreateArgsSchema: z.ZodType<Prisma.RoastEquipmentCreateArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  data: z.union([ RoastEquipmentCreateInputSchema,RoastEquipmentUncheckedCreateInputSchema ]),
}).strict()

export const RoastEquipmentUpsertArgsSchema: z.ZodType<Prisma.RoastEquipmentUpsertArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereUniqueInputSchema,
  create: z.union([ RoastEquipmentCreateInputSchema,RoastEquipmentUncheckedCreateInputSchema ]),
  update: z.union([ RoastEquipmentUpdateInputSchema,RoastEquipmentUncheckedUpdateInputSchema ]),
}).strict()

export const RoastEquipmentCreateManyArgsSchema: z.ZodType<Prisma.RoastEquipmentCreateManyArgs> = z.object({
  data: z.union([ RoastEquipmentCreateManyInputSchema,RoastEquipmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RoastEquipmentDeleteArgsSchema: z.ZodType<Prisma.RoastEquipmentDeleteArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  where: RoastEquipmentWhereUniqueInputSchema,
}).strict()

export const RoastEquipmentUpdateArgsSchema: z.ZodType<Prisma.RoastEquipmentUpdateArgs> = z.object({
  select: RoastEquipmentSelectSchema.optional(),
  include: RoastEquipmentIncludeSchema.optional(),
  data: z.union([ RoastEquipmentUpdateInputSchema,RoastEquipmentUncheckedUpdateInputSchema ]),
  where: RoastEquipmentWhereUniqueInputSchema,
}).strict()

export const RoastEquipmentUpdateManyArgsSchema: z.ZodType<Prisma.RoastEquipmentUpdateManyArgs> = z.object({
  data: z.union([ RoastEquipmentUpdateManyMutationInputSchema,RoastEquipmentUncheckedUpdateManyInputSchema ]),
  where: RoastEquipmentWhereInputSchema.optional(),
}).strict()

export const RoastEquipmentDeleteManyArgsSchema: z.ZodType<Prisma.RoastEquipmentDeleteManyArgs> = z.object({
  where: RoastEquipmentWhereInputSchema.optional(),
}).strict()

export const RoastProfileCreateArgsSchema: z.ZodType<Prisma.RoastProfileCreateArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  data: z.union([ RoastProfileCreateInputSchema,RoastProfileUncheckedCreateInputSchema ]),
}).strict()

export const RoastProfileUpsertArgsSchema: z.ZodType<Prisma.RoastProfileUpsertArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereUniqueInputSchema,
  create: z.union([ RoastProfileCreateInputSchema,RoastProfileUncheckedCreateInputSchema ]),
  update: z.union([ RoastProfileUpdateInputSchema,RoastProfileUncheckedUpdateInputSchema ]),
}).strict()

export const RoastProfileCreateManyArgsSchema: z.ZodType<Prisma.RoastProfileCreateManyArgs> = z.object({
  data: z.union([ RoastProfileCreateManyInputSchema,RoastProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RoastProfileDeleteArgsSchema: z.ZodType<Prisma.RoastProfileDeleteArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  where: RoastProfileWhereUniqueInputSchema,
}).strict()

export const RoastProfileUpdateArgsSchema: z.ZodType<Prisma.RoastProfileUpdateArgs> = z.object({
  select: RoastProfileSelectSchema.optional(),
  include: RoastProfileIncludeSchema.optional(),
  data: z.union([ RoastProfileUpdateInputSchema,RoastProfileUncheckedUpdateInputSchema ]),
  where: RoastProfileWhereUniqueInputSchema,
}).strict()

export const RoastProfileUpdateManyArgsSchema: z.ZodType<Prisma.RoastProfileUpdateManyArgs> = z.object({
  data: z.union([ RoastProfileUpdateManyMutationInputSchema,RoastProfileUncheckedUpdateManyInputSchema ]),
  where: RoastProfileWhereInputSchema.optional(),
}).strict()

export const RoastProfileDeleteManyArgsSchema: z.ZodType<Prisma.RoastProfileDeleteManyArgs> = z.object({
  where: RoastProfileWhereInputSchema.optional(),
}).strict()

export const VarietyCreateArgsSchema: z.ZodType<Prisma.VarietyCreateArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  data: z.union([ VarietyCreateInputSchema,VarietyUncheckedCreateInputSchema ]),
}).strict()

export const VarietyUpsertArgsSchema: z.ZodType<Prisma.VarietyUpsertArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereUniqueInputSchema,
  create: z.union([ VarietyCreateInputSchema,VarietyUncheckedCreateInputSchema ]),
  update: z.union([ VarietyUpdateInputSchema,VarietyUncheckedUpdateInputSchema ]),
}).strict()

export const VarietyCreateManyArgsSchema: z.ZodType<Prisma.VarietyCreateManyArgs> = z.object({
  data: z.union([ VarietyCreateManyInputSchema,VarietyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VarietyDeleteArgsSchema: z.ZodType<Prisma.VarietyDeleteArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  where: VarietyWhereUniqueInputSchema,
}).strict()

export const VarietyUpdateArgsSchema: z.ZodType<Prisma.VarietyUpdateArgs> = z.object({
  select: VarietySelectSchema.optional(),
  include: VarietyIncludeSchema.optional(),
  data: z.union([ VarietyUpdateInputSchema,VarietyUncheckedUpdateInputSchema ]),
  where: VarietyWhereUniqueInputSchema,
}).strict()

export const VarietyUpdateManyArgsSchema: z.ZodType<Prisma.VarietyUpdateManyArgs> = z.object({
  data: z.union([ VarietyUpdateManyMutationInputSchema,VarietyUncheckedUpdateManyInputSchema ]),
  where: VarietyWhereInputSchema.optional(),
}).strict()

export const VarietyDeleteManyArgsSchema: z.ZodType<Prisma.VarietyDeleteManyArgs> = z.object({
  where: VarietyWhereInputSchema.optional(),
}).strict()