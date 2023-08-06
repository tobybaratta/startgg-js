/* This file is auto-generated. Do not edit. */ 
declare namespace StartGG {
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
  Timestamp: { input: number; output: number; }
};

/** A set of actions available for an entity to take */
type ActionSet = {
  id?: Maybe<Scalars['ID']['output']>;
};

/** Represents the state of an activity */
type ActivityState =
  /** Activity is active or in progress */
  | 'ACTIVE'
  /** Activity, like a set, has been called to start */
  | 'CALLED'
  /** Activity is done */
  | 'COMPLETED'
  /** Activity is created */
  | 'CREATED'
  /** Activity is invalid */
  | 'INVALID'
  /** Activity is queued to run */
  | 'QUEUED'
  /** Activity is ready to be started */
  | 'READY';

/** A user's address */
type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** Represents the name of the third-party service (e.g Twitter) for OAuth */
type AuthorizationType =
  | 'BATTLENET'
  | 'DISCORD'
  | 'EPIC'
  | 'MIXER'
  | 'STEAM'
  | 'TWITCH'
  | 'TWITTER'
  | 'XBOX';

/** Bracket-specific configuration */
type BracketConfig = {
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  id?: Maybe<Scalars['ID']['output']>;
};

/** The type of Bracket format that a Phase is configured with. */
type BracketType =
  | 'CIRCUIT'
  | 'CUSTOM_SCHEDULE'
  | 'DOUBLE_ELIMINATION'
  | 'ELIMINATION_ROUNDS'
  | 'EXHIBITION'
  | 'MATCHMAKING'
  | 'RACE'
  | 'ROUND_ROBIN'
  | 'SINGLE_ELIMINATION'
  | 'SWISS';

/** A character in a videogame */
type Character = {
  __typename?: 'Character';
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Name of Character */
  name?: Maybe<Scalars['String']['output']>;
};


/** A character in a videogame */
type CharacterImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Comparison operator */
type Comparator =
  | 'EQUAL'
  | 'GREATER_THAN'
  | 'GREATER_THAN_OR_EQUAL'
  | 'LESS_THAN'
  | 'LESS_THAN_OR_EQUAL';

/** Name, address, etc */
type ContactInfo = {
  __typename?: 'ContactInfo';
  /** Participant City Name */
  city?: Maybe<Scalars['String']['output']>;
  /** Participant Country Name */
  country?: Maybe<Scalars['String']['output']>;
  /** Participant Country (region) id */
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** First Name */
  nameFirst?: Maybe<Scalars['String']['output']>;
  /** Last Name */
  nameLast?: Maybe<Scalars['String']['output']>;
  /** Participant State Name */
  state?: Maybe<Scalars['String']['output']>;
  /** Participant State (region) id */
  stateId?: Maybe<Scalars['Int']['output']>;
  /** Zip or Postal Code */
  zipcode?: Maybe<Scalars['String']['output']>;
};

/** An entrant in an event */
type Entrant = {
  __typename?: 'Entrant';
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Entrant's seed number in the first phase of the event. */
  initialSeedNum?: Maybe<Scalars['Int']['output']>;
  isDisqualified?: Maybe<Scalars['Boolean']['output']>;
  /** The entrant name as it appears in bracket: gamerTag of the participant or team name */
  name?: Maybe<Scalars['String']['output']>;
  /** Paginated sets for this entrant */
  paginatedSets?: Maybe<SetConnection>;
  participants?: Maybe<Array<Maybe<Participant>>>;
  seeds?: Maybe<Array<Maybe<Seed>>>;
  skill?: Maybe<Scalars['Int']['output']>;
  /** Standing for this entrant given an event. All entrants queried must be in the same event (for now). */
  standing?: Maybe<Standing>;
  /** @deprecated DEPRECATED. Use streams instead, which supports multiple stream types and teams. */
  stream?: Maybe<Streams>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** Team linked to this entrant, if one exists */
  team?: Maybe<Team>;
};


/** An entrant in an event */
type EntrantPaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};

type EntrantConnection = {
  __typename?: 'EntrantConnection';
  nodes?: Maybe<Array<Maybe<Entrant>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** An event in a tournament */
type Event = {
  __typename?: 'Event';
  /** How long before the event start will the check-in end (in seconds) */
  checkInBuffer?: Maybe<Scalars['Int']['output']>;
  /** How long the event check-in will last (in seconds) */
  checkInDuration?: Maybe<Scalars['Int']['output']>;
  /** Whether check-in is enabled for this event */
  checkInEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Rough categorization of event tier, denoting relative importance in the competitive scene */
  competitionTier?: Maybe<Scalars['Int']['output']>;
  /** When the event was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Last date attendees are able to create teams for team events */
  deckSubmissionDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /**
   * Maximum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMax?: Maybe<Scalars['Int']['output']>;
  /**
   * Minimum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMin?: Maybe<Scalars['Int']['output']>;
  /** The entrants that belong to an event, paginated by filter criteria */
  entrants?: Maybe<EntrantConnection>;
  /** Whether the event has decks */
  hasDecks?: Maybe<Scalars['Boolean']['output']>;
  /** Are player tasks enabled for this event */
  hasTasks?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Whether the event is an online event or not */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  league?: Maybe<League>;
  /** Markdown field for match rules/instructions */
  matchRulesMarkdown?: Maybe<Scalars['String']['output']>;
  /** Title of event set by organizer */
  name?: Maybe<Scalars['String']['output']>;
  /** Gets the number of entrants in this event */
  numEntrants?: Maybe<Scalars['Int']['output']>;
  /** The phase groups that belong to an event. */
  phaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** The phases that belong to an event. */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** TO settings for prizing */
  prizingInfo?: Maybe<Scalars['JSON']['output']>;
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** Markdown field for event rules/instructions */
  rulesMarkdown?: Maybe<Scalars['String']['output']>;
  /** Id of the event ruleset */
  rulesetId?: Maybe<Scalars['Int']['output']>;
  /**
   * Settings pulled from the event ruleset, if one exists
   * @deprecated Use ruleset
   */
  rulesetSettings?: Maybe<Scalars['JSON']['output']>;
  /** Paginated sets for this Event */
  sets?: Maybe<SetConnection>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When does this event start? */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The state of the Event. */
  state?: Maybe<ActivityState | `${ActivityState}`>;
  /** Paginated stations on this event */
  stations?: Maybe<StationsConnection>;
  /** Last date attendees are able to create teams for team events */
  teamManagementDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /** If this is a teams event, returns whether or not teams can set custom names */
  teamNameAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** Team roster size requirements */
  teamRosterSize?: Maybe<TeamRosterSize>;
  tournament?: Maybe<Tournament>;
  /** The type of the event, whether an entrant will have one participant or multiple */
  type?: Maybe<Scalars['Int']['output']>;
  /** When the event was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Whether the event uses the new EventSeeds for seeding */
  useEventSeeds?: Maybe<Scalars['Boolean']['output']>;
  /** The entrant (if applicable) for a given user in this event */
  userEntrant?: Maybe<Entrant>;
  videogame?: Maybe<Videogame>;
  /** The waves being used by the event */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** An event in a tournament */
type EventEntrantsArgs = {
  query?: InputMaybe<EventEntrantPageQuery>;
};


/** An event in a tournament */
type EventImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** An event in a tournament */
type EventPhasesArgs = {
  phaseId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<ActivityState>;
};


/** An event in a tournament */
type EventSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** An event in a tournament */
type EventStandingsArgs = {
  query: StandingPaginationQuery;
};


/** An event in a tournament */
type EventStationsArgs = {
  query?: InputMaybe<StationFilter>;
};


/** An event in a tournament */
type EventUserEntrantArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


/** An event in a tournament */
type EventWavesArgs = {
  phaseId?: InputMaybe<Scalars['ID']['input']>;
};

type EventConnection = {
  __typename?: 'EventConnection';
  nodes?: Maybe<Array<Maybe<Event>>>;
  pageInfo?: Maybe<PageInfo>;
};

type EventEntrantPageQuery = {
  filter?: InputMaybe<EventEntrantPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type EventEntrantPageQueryFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
};

type EventFilter = {
  fantasyEventId?: InputMaybe<Scalars['ID']['input']>;
  fantasyRosterHash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Name and Gamertag of the owner of an event in a league */
type EventOwner = {
  __typename?: 'EventOwner';
  email?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['ID']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gamerTag?: Maybe<Scalars['String']['output']>;
};

type EventOwnerConnection = {
  __typename?: 'EventOwnerConnection';
  nodes?: Maybe<Array<Maybe<EventOwner>>>;
  pageInfo?: Maybe<PageInfo>;
};

type EventOwnersQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** An event-level Team, in the context of some competition */
type EventTeam = Team & {
  __typename?: 'EventTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  globalTeam?: Maybe<GlobalTeam>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** An event-level Team, in the context of some competition */
type EventTeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** An event-level Team, in the context of some competition */
type EventTeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

type EventTeamConnection = {
  __typename?: 'EventTeamConnection';
  nodes?: Maybe<Array<Maybe<EventTeam>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** Used for league application tiers */
type EventTier = {
  __typename?: 'EventTier';
  id?: Maybe<Scalars['ID']['output']>;
  /** Name of this tier */
  name?: Maybe<Scalars['String']['output']>;
};

/** A game represents a single game within a set. */
type Game = {
  __typename?: 'Game';
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  orderNum?: Maybe<Scalars['Int']['output']>;
  /** Selections for this game such as character, etc. */
  selections?: Maybe<Array<Maybe<GameSelection>>>;
  /** The stage that this game was played on (if applicable) */
  stage?: Maybe<Stage>;
  state?: Maybe<Scalars['Int']['output']>;
  winnerId?: Maybe<Scalars['Int']['output']>;
};


/** A game represents a single game within a set. */
type GameImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A selection for this game. i.e. character/stage selection, etc */
type GameSelection = {
  __typename?: 'GameSelection';
  /** The entrant who this selection is for */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  orderNum?: Maybe<Scalars['Int']['output']>;
  /**
   * The participant who this selection is for. This is only populated if there are
   * selections for multiple participants of a single entrant
   */
  participant?: Maybe<Participant>;
  selectionType?: Maybe<GameSelectionType | `${GameSelectionType}`>;
  selectionValue?: Maybe<Scalars['Int']['output']>;
};

/** The type of selection i.e. is it for a character or something else */
type GameSelectionType =
  /** Character selection */
  | 'CHARACTER';

/** Global Team */
type GlobalTeam = Team & {
  __typename?: 'GlobalTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  eventTeams?: Maybe<EventTeamConnection>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues-level teams for leagues this team is competing in */
  leagueTeams?: Maybe<EventTeamConnection>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** Global Team */
type GlobalTeamEventTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
type GlobalTeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Global Team */
type GlobalTeamLeagueTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
type GlobalTeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** An image */
type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** A league */
type League = {
  __typename?: 'League';
  addrState?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']['output']>;
  entrantCount?: Maybe<Scalars['Int']['output']>;
  eventOwners?: Maybe<EventOwnerConnection>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Paginated list of events in a league */
  events?: Maybe<EventConnection>;
  /**
   * Hacked "progression" into this final event
   * @deprecated No longer used
   */
  finalEventId?: Maybe<Scalars['Int']['output']>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']['output']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']['output']>;
  hashtag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']['output']>;
  mapsPlaceId?: Maybe<Scalars['String']['output']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Top X number of people in the standings who progress to final event
   * @deprecated No longer used
   */
  numProgressingToFinalEvent?: Maybe<Scalars['Int']['output']>;
  numUniquePlayers?: Maybe<Scalars['Int']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  primaryContact?: Maybe<Scalars['String']['output']>;
  primaryContactType?: Maybe<Scalars['String']['output']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']['output']>;
  /** Whether standings for this league should be visible */
  showStandings?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']['output']>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  tiers?: Maybe<Array<Maybe<EventTier>>>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']['output']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']['output']>;
  venueAddress?: Maybe<Scalars['String']['output']>;
  venueName?: Maybe<Scalars['String']['output']>;
  videogames?: Maybe<Array<Maybe<Videogame>>>;
};


/** A league */
type LeagueEventOwnersArgs = {
  query?: InputMaybe<EventOwnersQuery>;
};


/** A league */
type LeagueEventsArgs = {
  query?: InputMaybe<LeagueEventsQuery>;
};


/** A league */
type LeagueImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A league */
type LeagueStandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};


/** A league */
type LeagueUrlArgs = {
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  tab?: InputMaybe<Scalars['String']['input']>;
};

type LeagueConnection = {
  __typename?: 'LeagueConnection';
  nodes?: Maybe<Array<Maybe<League>>>;
  pageInfo?: Maybe<PageInfo>;
};

type LeagueEventsFilter = {
  leagueEntrantId?: InputMaybe<Scalars['ID']['input']>;
  pointMappingGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
  tierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

type LeagueEventsQuery = {
  filter?: InputMaybe<LeagueEventsFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type LeaguePageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']['input']>;
  afterDate?: InputMaybe<Scalars['Timestamp']['input']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']['input']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the user that owns this league. */
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type LeagueQuery = {
  filter?: InputMaybe<LeaguePageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TournamentPaginationSort | `${TournamentPaginationSort}`>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type LocationFilterType = {
  city?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Match-level configuration */
type MatchConfig = {
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  id?: Maybe<Scalars['ID']['output']>;
};

/** Different options available for verifying player-reported match results */
type MatchConfigVerificationMethod =
  | 'ANY'
  | 'MIXER'
  | 'STREAM_ME'
  | 'TWITCH'
  | 'YOUTUBE';

type Mutation = {
  __typename?: 'Mutation';
  /** Delete a phase by id */
  deletePhase?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a station by id */
  deleteStation?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a wave by id */
  deleteWave?: Maybe<Scalars['Boolean']['output']>;
  /** Automatically attempt to resolve all schedule conflicts. Returns a list of changed seeds */
  resolveScheduleConflicts?: Maybe<Array<Maybe<Seed>>>;
  /** Swap two seed ids in a phase */
  swapSeeds?: Maybe<Array<Maybe<Seed>>>;
  /** Update set of phase groups in a phase */
  updatePhaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** Update the seeding for a phase */
  updatePhaseSeeding?: Maybe<Phase>;
  /** Create or update a Phase */
  upsertPhase?: Maybe<Phase>;
  /** Add or update a station by id */
  upsertStation?: Maybe<Stations>;
  /** Add or update a wave by id */
  upsertWave?: Maybe<Wave>;
};


type MutationDeletePhaseArgs = {
  phaseId: Scalars['ID']['input'];
};


type MutationDeleteStationArgs = {
  stationId: Scalars['ID']['input'];
};


type MutationDeleteWaveArgs = {
  waveId: Scalars['ID']['input'];
};


type MutationResolveScheduleConflictsArgs = {
  options?: InputMaybe<ResolveConflictsOptions>;
  tournamentId: Scalars['ID']['input'];
};


type MutationSwapSeedsArgs = {
  phaseId: Scalars['ID']['input'];
  seed1Id: Scalars['ID']['input'];
  seed2Id: Scalars['ID']['input'];
};


type MutationUpdatePhaseGroupsArgs = {
  groupConfigs: Array<InputMaybe<PhaseGroupUpdateInput>>;
};


type MutationUpdatePhaseSeedingArgs = {
  options?: InputMaybe<UpdatePhaseSeedingOptions>;
  phaseId: Scalars['ID']['input'];
  seedMapping: Array<InputMaybe<UpdatePhaseSeedInfo>>;
};


type MutationUpsertPhaseArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  payload: PhaseUpsertInput;
  phaseId?: InputMaybe<Scalars['ID']['input']>;
};


type MutationUpsertStationArgs = {
  fields: StationUpsertInput;
  stationId?: InputMaybe<Scalars['ID']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


type MutationUpsertWaveArgs = {
  fields: WaveUpsertInput;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

type PageInfo = {
  __typename?: 'PageInfo';
  filter?: Maybe<Scalars['JSON']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  perPage?: Maybe<Scalars['Int']['output']>;
  sortBy?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

type PaginationSearchType = {
  fieldsToSearch?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  searchString?: InputMaybe<Scalars['String']['input']>;
};

/** A participant of a tournament; either a spectator or competitor */
type Participant = {
  __typename?: 'Participant';
  /** If this participant was checked-in by admin */
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  /** The time this participant was checked-in by admin */
  checkedInAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Info for connected accounts to external services. */
  connectedAccounts?: Maybe<Scalars['JSON']['output']>;
  /**
   * Contact Info selected during registration. Falls back to User.location and/or
   * User.name if necessary. These fields are for admin use only. If you are not a
   * tournament admin or the participant being queried, these fields will be null.
   * Do not display this information publicly.
   */
  contactInfo?: Maybe<ContactInfo>;
  /** Email of the user, only available to admins within 18 months of tournament completion for tournament administrators. */
  email?: Maybe<Scalars['String']['output']>;
  /** Entrants associated with this Participant, if applicable */
  entrants?: Maybe<Array<Maybe<Entrant>>>;
  /** The events this participant registered for within a Tournament. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** The tag that was used when the participant registered, e.g. Mang0 */
  gamerTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  player?: Maybe<Player>;
  /** The prefix that the user set for this Tournament, e.g. C9 */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Tournament Admin viewable field. Shows details for required social connections */
  requiredConnections?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  /** The user this participant is associated to. */
  user?: Maybe<User>;
  /** If this participant is verified as actually being in the tournament */
  verified?: Maybe<Scalars['Boolean']['output']>;
};


/** A participant of a tournament; either a spectator or competitor */
type ParticipantImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

type ParticipantConnection = {
  __typename?: 'ParticipantConnection';
  nodes?: Maybe<Array<Maybe<Participant>>>;
  pageInfo?: Maybe<PageInfo>;
};

type ParticipantPageFilter = {
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gamerTag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  incompleteTeam?: InputMaybe<Scalars['Boolean']['input']>;
  missingDeck?: InputMaybe<Scalars['Boolean']['input']>;
  notCheckedIn?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  unpaid?: InputMaybe<Scalars['Boolean']['input']>;
};

type ParticipantPaginationQuery = {
  filter?: InputMaybe<ParticipantPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A phase in an event */
type Phase = {
  __typename?: 'Phase';
  /** The bracket type of this phase. */
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  /** The Event that this phase belongs to */
  event?: Maybe<Event>;
  /** Number of phase groups in this phase */
  groupCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Is the phase an exhibition or not. */
  isExhibition?: Maybe<Scalars['Boolean']['output']>;
  /** Name of phase e.g. Round 1 Pools */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of seeds this phase contains. */
  numSeeds?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Please use 'seeds' instead */
  paginatedSeeds?: Maybe<SeedConnection>;
  /** Phase groups under this phase, paginated */
  phaseGroups?: Maybe<PhaseGroupConnection>;
  /** The relative order of this phase within an event */
  phaseOrder?: Maybe<Scalars['Int']['output']>;
  /** Paginated seeds for this phase */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets for this Phase */
  sets?: Maybe<SetConnection>;
  /** State of the phase */
  state?: Maybe<ActivityState | `${ActivityState}`>;
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A phase in an event */
type PhasePaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
type PhasePhaseGroupsArgs = {
  query?: InputMaybe<PhaseGroupPageQuery>;
};


/** A phase in an event */
type PhaseSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
type PhaseSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};

/** A group within a phase */
type PhaseGroup = {
  __typename?: 'PhaseGroup';
  /** The bracket type of this group's phase. */
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  /** URL for this phase groups's bracket. */
  bracketUrl?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for this group within the context of its phase */
  displayIdentifier?: Maybe<Scalars['String']['output']>;
  /** For the given phase group, this is the start time of the first round that occurs in the group. */
  firstRoundTime?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  numRounds?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Please use 'seeds', which is now paginated */
  paginatedSeeds?: Maybe<SeedConnection>;
  /**
   * Paginated sets on this phaseGroup
   * @deprecated Please use 'sets', which is now paginated
   */
  paginatedSets?: Maybe<SetConnection>;
  /** The phase associated with this phase group */
  phase?: Maybe<Phase>;
  /** The progressions out of this phase group */
  progressionsOut?: Maybe<Array<Maybe<Progression>>>;
  rounds?: Maybe<Array<Maybe<Round>>>;
  seedMap?: Maybe<Scalars['JSON']['output']>;
  /** Paginated seeds for this phase group */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets on this phaseGroup */
  sets?: Maybe<SetConnection>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** Unix time the group is scheduled to start. This info could also be on the wave instead. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  tiebreakOrder?: Maybe<Scalars['JSON']['output']>;
  wave?: Maybe<Wave>;
};


/** A group within a phase */
type PhaseGroupPaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
type PhaseGroupPaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
type PhaseGroupSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
type PhaseGroupSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
type PhaseGroupStandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};

type PhaseGroupConnection = {
  __typename?: 'PhaseGroupConnection';
  nodes?: Maybe<Array<Maybe<PhaseGroup>>>;
  pageInfo?: Maybe<PageInfo>;
};

type PhaseGroupPageQuery = {
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  filter?: InputMaybe<PhaseGroupPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type PhaseGroupPageQueryFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

type PhaseGroupUpdateInput = {
  phaseGroupId: Scalars['ID']['input'];
  stationId?: InputMaybe<Scalars['ID']['input']>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

type PhaseUpsertInput = {
  bracketType?: InputMaybe<BracketType | `${BracketType}`>;
  /** The number of pools to configure for the Phase. Only applies to brackets that support pools */
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  /** The name of the Phase. For example, "Top 8" or "Pools" */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A player */
type Player = {
  __typename?: 'Player';
  gamerTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  /** Most recent active & published rankings */
  rankings?: Maybe<Array<Maybe<PlayerRank>>>;
  /**
   * Recent sets for this player.
   * @deprecated Use the sets field instead.
   */
  recentSets?: Maybe<Array<Maybe<Set>>>;
  /** Recent standings */
  recentStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Set history for this player. */
  sets?: Maybe<SetConnection>;
  user?: Maybe<User>;
};


/** A player */
type PlayerRankingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  videogameId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
type PlayerRecentSetsArgs = {
  opponentId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
type PlayerRecentStandingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  videogameId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
type PlayerSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** A player's ranks */
type PlayerRank = {
  __typename?: 'PlayerRank';
  id?: Maybe<Scalars['ID']['output']>;
  /** The player's placement on the ranking */
  rank?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** An OAuth ProfileAuthorization object */
type ProfileAuthorization = {
  __typename?: 'ProfileAuthorization';
  /** The id given by the external service */
  externalId?: Maybe<Scalars['String']['output']>;
  /** The username given by the external service (including discriminator if discord) */
  externalUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  stream?: Maybe<Stream>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<AuthorizationType | `${AuthorizationType}`>;
  url?: Maybe<Scalars['String']['output']>;
};

/** A connection between a placement in an origin phase group to a destination seed. */
type Progression = {
  __typename?: 'Progression';
  id?: Maybe<Scalars['ID']['output']>;
  originOrder?: Maybe<Scalars['Int']['output']>;
  originPhase?: Maybe<Phase>;
  originPhaseGroup?: Maybe<PhaseGroup>;
  originPlacement?: Maybe<Scalars['Int']['output']>;
};

type Query = {
  __typename?: 'Query';
  /** Returns the authenticated user */
  currentUser?: Maybe<User>;
  /** Returns an entrant given its id */
  entrant?: Maybe<Entrant>;
  /** Returns an event given its id or slug */
  event?: Maybe<Event>;
  /** Returns a league given its id or slug */
  league?: Maybe<League>;
  /** Paginated, filterable list of leagues */
  leagues?: Maybe<LeagueConnection>;
  /** Returns a participant given its id */
  participant?: Maybe<Participant>;
  /** Returns a phase given its id */
  phase?: Maybe<Phase>;
  /** Returns a phase group given its id */
  phaseGroup?: Maybe<PhaseGroup>;
  /** Returns a player given an id */
  player?: Maybe<Player>;
  /** Returns a phase seed given its id */
  seed?: Maybe<Seed>;
  /** Returns a set given its id */
  set?: Maybe<Set>;
  /** A shop entity */
  shop?: Maybe<Shop>;
  /** Returns an stream given its id */
  stream?: Maybe<Streams>;
  /** Returns all the stream queues for a given tournament */
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  /** Returns a team given its id */
  team?: Maybe<Team>;
  /** Returns a tournament given its id or slug */
  tournament?: Maybe<Tournament>;
  /** Paginated, filterable list of tournaments */
  tournaments?: Maybe<TournamentConnection>;
  /** Returns a user given a user slug of the form user/abc123, or id */
  user?: Maybe<User>;
  /** Returns a videogame given its id */
  videogame?: Maybe<Videogame>;
  /** Returns paginated list of videogames matching the search criteria. */
  videogames?: Maybe<VideogameConnection>;
};


type QueryEntrantArgs = {
  id: Scalars['ID']['input'];
};


type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryLeagueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryLeaguesArgs = {
  query: LeagueQuery;
};


type QueryParticipantArgs = {
  id: Scalars['ID']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


type QueryPhaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryPhaseGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


type QuerySeedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


type QuerySetArgs = {
  id: Scalars['ID']['input'];
};


type QueryShopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryStreamArgs = {
  id: Scalars['ID']['input'];
};


type QueryStreamQueueArgs = {
  includePlayerStreams?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryTournamentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryTournamentsArgs = {
  query: TournamentQuery;
};


type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryVideogameArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


type QueryVideogamesArgs = {
  query: VideogameQuery;
};

/** Race specific bracket configuration */
type RaceBracketConfig = BracketConfig & {
  __typename?: 'RaceBracketConfig';
  automaticEndTime?: Maybe<Scalars['Timestamp']['output']>;
  automaticStartTime?: Maybe<Scalars['Timestamp']['output']>;
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  goalTargetComparator?: Maybe<Comparator | `${Comparator}`>;
  goalTargetValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMode?: Maybe<RaceLimitMode | `${RaceLimitMode}`>;
  limitValue?: Maybe<Scalars['Int']['output']>;
  raceType?: Maybe<RaceType | `${RaceType}`>;
};

/** Enforces limits on the amount of allowable Race submissions */
type RaceLimitMode =
  | 'BEST_ALL'
  | 'FIRST_ALL'
  | 'PLAYTIME';

/** Race specific match configuration */
type RaceMatchConfig = MatchConfig & {
  __typename?: 'RaceMatchConfig';
  bracketType?: Maybe<BracketType | `${BracketType}`>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Can players report results? */
  playerReportingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Accepted methods of verification that players can use */
  verificationMethods?: Maybe<Array<Maybe<MatchConfigVerificationMethod | `${MatchConfigVerificationMethod}`>>>;
  /** Are players required to submit verification of their reported results? */
  verificationRequired?: Maybe<Scalars['Boolean']['output']>;
};

/** Race type */
type RaceType =
  | 'GOALS'
  | 'TIMED';

type ResolveConflictsLockedSeedConfig = {
  eventId: Scalars['ID']['input'];
  numSeeds: Scalars['Int']['input'];
};

type ResolveConflictsOptions = {
  lockedSeeds?: InputMaybe<Array<InputMaybe<ResolveConflictsLockedSeedConfig>>>;
};

/** A round within a phase group */
type Round = {
  __typename?: 'Round';
  /**
   * If applicable, bestOf is the number of games
   * 									one must win a majority out of to win a set in this round
   */
  bestOf?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Indicates this round's order in the phase group */
  number?: Maybe<Scalars['Int']['output']>;
  /** The time that this round is scheduled to start at */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
};

/**
 * The score that led to this standing being awarded. The meaning of this field can
 * vary by standing type and is not used for some standing types.
 */
type Score = {
  __typename?: 'Score';
  /** Like value, but formatted for race format events. Formatted according to the race config for the front end to use. */
  displayValue?: Maybe<Scalars['String']['output']>;
  /** The name of this score. e.g. "Kills" or "Stocks" */
  label?: Maybe<Scalars['String']['output']>;
  /** The raw score value */
  value?: Maybe<Scalars['Float']['output']>;
};

/** A seed for an entrant */
type Seed = {
  __typename?: 'Seed';
  /** Map of Participant ID to checked in boolean */
  checkedInParticipants?: Maybe<Scalars['JSON']['output']>;
  entrant?: Maybe<Entrant>;
  groupSeedNum?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isBye?: Maybe<Scalars['Boolean']['output']>;
  phase?: Maybe<Phase>;
  phaseGroup?: Maybe<PhaseGroup>;
  placeholderName?: Maybe<Scalars['String']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  /** The player(s) associated with this seed's entrant */
  players?: Maybe<Array<Maybe<Player>>>;
  progressionSeedId?: Maybe<Scalars['Int']['output']>;
  /** Source progression information */
  progressionSource?: Maybe<Progression>;
  seedNum?: Maybe<Scalars['Int']['output']>;
  /** Entrant's win/loss record for this standing. Scores do not include byes. */
  setRecordWithoutByes?: Maybe<Scalars['JSON']['output']>;
  standings?: Maybe<Array<Maybe<Standing>>>;
};


/** A seed for an entrant */
type SeedSetRecordWithoutByesArgs = {
  phaseGroupId: Scalars['ID']['input'];
};


/** A seed for an entrant */
type SeedStandingsArgs = {
  containerType?: InputMaybe<Scalars['String']['input']>;
};

type SeedConnection = {
  __typename?: 'SeedConnection';
  nodes?: Maybe<Array<Maybe<Seed>>>;
  pageInfo?: Maybe<PageInfo>;
};

type SeedPageFilter = {
  checkInState?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  entrantName?: InputMaybe<Scalars['String']['input']>;
  eventCheckInGroupId?: InputMaybe<Scalars['ID']['input']>;
  eventId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phaseGroupId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  phaseId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

type SeedPaginationQuery = {
  filter?: InputMaybe<SeedPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A set */
type Set = {
  __typename?: 'Set';
  /** The time this set was marked as completed */
  completedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The time this set was created */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  displayScore?: Maybe<Scalars['String']['output']>;
  /** Event that this set belongs to. */
  event?: Maybe<Event>;
  /** Full round text of this set. */
  fullRoundText?: Maybe<Scalars['String']['output']>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  /** Whether this set contains a placeholder entrant */
  hasPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The letters that describe a unique identifier within the pool. Eg. F, AT */
  identifier?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  lPlacement?: Maybe<Scalars['Int']['output']>;
  /** Phase group that this Set belongs to. */
  phaseGroup?: Maybe<PhaseGroup>;
  /** The round number of the set. Negative numbers are losers bracket */
  round?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether the set is in best of or total games mode. This instructs
   * which field is used to figure out how many games are in this set.
   */
  setGamesType?: Maybe<Scalars['Int']['output']>;
  /** A possible spot in a set. Use this to get all entrants in a set. Use this for all bracket types (FFA, elimination, etc) */
  slots?: Maybe<Array<Maybe<SetSlot>>>;
  /** The start time of the Set. If there is no startAt time on the Set, will pull it from phaseGroup rounds configuration. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  startedAt?: Maybe<Scalars['Timestamp']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  /** Tournament event station for a set */
  station?: Maybe<Stations>;
  /** Tournament event stream for a set */
  stream?: Maybe<Streams>;
  /** If setGamesType is in total games mode, this defined the number of games in the set. */
  totalGames?: Maybe<Scalars['Int']['output']>;
  /** Url of a VOD for this set */
  vodUrl?: Maybe<Scalars['String']['output']>;
  wPlacement?: Maybe<Scalars['Int']['output']>;
  winnerId?: Maybe<Scalars['Int']['output']>;
};


/** A set */
type SetDisplayScoreArgs = {
  mainEntrantId?: InputMaybe<Scalars['ID']['input']>;
};


/** A set */
type SetGameArgs = {
  orderNum: Scalars['Int']['input'];
};


/** A set */
type SetImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A set */
type SetSlotsArgs = {
  includeByes?: InputMaybe<Scalars['Boolean']['input']>;
};

type SetConnection = {
  __typename?: 'SetConnection';
  nodes?: Maybe<Array<Maybe<Set>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** Filter Sets by geographical constraints. */
type SetFilterLocation = {
  /** Only return Sets in this country. Expects a valid two-letter country code */
  country?: InputMaybe<Scalars['String']['input']>;
  distanceFrom?: InputMaybe<SetFilterLocationDistanceFrom>;
  /** Only return Sets in this state. Only applicable to US states */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Only return Sets that are a certain distance away from a specified point */
type SetFilterLocationDistanceFrom = {
  /** Point at which to perform distance calculation */
  point?: InputMaybe<SetFilterLocationDistanceFromPoint>;
  /** Distance from the point to include results in */
  radius?: InputMaybe<Scalars['String']['input']>;
};

type SetFilterLocationDistanceFromPoint = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
};

type SetFilters = {
  /** Only return Sets for these Entrants */
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for this Entrant size. For example, to fetch 1v1 Sets only, filter by an entrantSize of 1 */
  entrantSize?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets in these Events */
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets that have an attached VOD */
  hasVod?: InputMaybe<Scalars['Boolean']['input']>;
  /** Do not return empty Sets. For example, set this to true to filter out sets that are waiting for progressions. */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only return Sets that are in an Online event. If omitted, Sets for both online and offline Events are returned */
  isEventOnline?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only return Sets in certain geographical areas. */
  location?: InputMaybe<SetFilterLocation>;
  /** Only return Sets for these Participants */
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets in these PhaseGroups */
  phaseGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets in these Phases */
  phaseIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for these Players */
  playerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for these Rounds */
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Return sets that contain a bye */
  showByes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only returns Sets that are in these states */
  state?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets that are assigned to these Station IDs */
  stationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets that are assigned to these Station numbers */
  stationNumbers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets in these Tournaments */
  tournamentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return sets created or updated since this timestamp */
  updatedAfter?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** A slot in a set where a seed currently or will eventually exist in order to participate in the set. */
type SetSlot = {
  __typename?: 'SetSlot';
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Pairs with prereqType, is the ID of the prereq. */
  prereqId?: Maybe<Scalars['String']['output']>;
  /** Given a set prereq type, defines the placement required in the origin set to end up in this slot. */
  prereqPlacement?: Maybe<Scalars['Int']['output']>;
  /** Describes where the entity in this slot comes from. */
  prereqType?: Maybe<Scalars['String']['output']>;
  seed?: Maybe<Seed>;
  /** The index of the slot. Unique per set. */
  slotIndex?: Maybe<Scalars['Int']['output']>;
  /** The standing within this set for the seed currently assigned to this slot. */
  standing?: Maybe<Standing>;
};

/** Different sort type configurations used when displaying multiple sets */
type SetSortType =
  /** Sets are sorted in the suggested order that they be called to be played. The order of completed sets is reversed. */
  | 'CALL_ORDER'
  /** Sets are sorted by relevancy dependent on the state and progress of the event. */
  | 'MAGIC'
  /** Sets will not be sorted. */
  | 'NONE'
  /** Sets are sorted in the order that they were started. */
  | 'RECENT'
  /** Sets sorted by round and identifier */
  | 'ROUND'
  /** Deprecated. This is equivalent to CALL_ORDER */
  | 'STANDARD';

/** A shop */
type Shop = {
  __typename?: 'Shop';
  id?: Maybe<Scalars['ID']['output']>;
  levels?: Maybe<ShopLevelConnection>;
  messages?: Maybe<ShopOrderMessageConnection>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** A shop */
type ShopLevelsArgs = {
  query?: InputMaybe<ShopLevelsQuery>;
};


/** A shop */
type ShopMessagesArgs = {
  query?: InputMaybe<ShopOrderMessagesQuery>;
};

/** A shop level */
type ShopLevel = {
  __typename?: 'ShopLevel';
  currAmount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  goalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** A shop level */
type ShopLevelImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

type ShopLevelConnection = {
  __typename?: 'ShopLevelConnection';
  nodes?: Maybe<Array<Maybe<ShopLevel>>>;
  pageInfo?: Maybe<PageInfo>;
};

type ShopLevelsQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** The message and player info for a shop order */
type ShopOrderMessage = {
  __typename?: 'ShopOrderMessage';
  /** The player's gamertag. Returns null if anonymous message type */
  gamertag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The order message */
  message?: Maybe<Scalars['String']['output']>;
  /** The player's name. Returns null unless name & tag display is selected */
  name?: Maybe<Scalars['String']['output']>;
  /** The player who left the comment */
  player?: Maybe<Player>;
  /** The total order amount */
  total?: Maybe<Scalars['Float']['output']>;
};

type ShopOrderMessageConnection = {
  __typename?: 'ShopOrderMessageConnection';
  nodes?: Maybe<Array<Maybe<ShopOrderMessage>>>;
  pageInfo?: Maybe<PageInfo>;
};

type ShopOrderMessagesQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Represents the name of the third-party social service (e.g Twitter) for OAuth */
type SocialConnectionType =
  | 'DISCORD'
  | 'MIXER'
  | 'TWITCH'
  | 'TWITTER'
  | 'XBOX';

/** Video Stage */
type Stage = {
  __typename?: 'Stage';
  id?: Maybe<Scalars['ID']['output']>;
  /** Stage name */
  name?: Maybe<Scalars['String']['output']>;
};

/** A standing indicates the placement of something within a container. */
type Standing = {
  __typename?: 'Standing';
  /**
   * The containing entity that contextualizes this standing. Event standings, for
   * example, represent an entrant's standing in the entire event vs. Set standings
   * which is an entrant's standing in only a single set within an event.
   */
  container?: Maybe<StandingContainer>;
  /** If the entity this standing is assigned to can be resolved into an entrant, this will provide the entrant. */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  isFinal?: Maybe<Scalars['Boolean']['output']>;
  /** Metadata that goes along with this standing. Can take on different forms based on standing group type and settings. */
  metadata?: Maybe<Scalars['JSON']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  /** The player(s) tied to this standing's entity */
  player?: Maybe<Player>;
  /** @deprecated The "placement" field is identical and will eventually replace "standing" */
  standing?: Maybe<Scalars['Int']['output']>;
  stats?: Maybe<StandingStats>;
  totalPoints?: Maybe<Scalars['Float']['output']>;
};

type StandingConnection = {
  __typename?: 'StandingConnection';
  nodes?: Maybe<Array<Maybe<Standing>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** The containing entity that this standing is for */
type StandingContainer = Event | PhaseGroup | Set | Tournament;

type StandingGroupStandingPageFilter = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type StandingPageFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

type StandingPaginationQuery = {
  filter?: InputMaybe<StandingPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Any stats related to this standing. This type is experimental and very likely to change in the future. */
type StandingStats = {
  __typename?: 'StandingStats';
  score?: Maybe<Score>;
};

type StationFilter = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

type StationUpsertInput = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  number: Scalars['Int']['input'];
};

/** Stations, such as a stream setup, at an event */
type Stations = {
  __typename?: 'Stations';
  canAutoAssign?: Maybe<Scalars['Boolean']['output']>;
  clusterNumber?: Maybe<Scalars['String']['output']>;
  clusterPrefix?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  identifier?: Maybe<Scalars['Int']['output']>;
  numSetups?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  queue?: Maybe<Scalars['JSON']['output']>;
  queueDepth?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

type StationsConnection = {
  __typename?: 'StationsConnection';
  nodes?: Maybe<Array<Maybe<Stations>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A Stream object */
type Stream = {
  __typename?: 'Stream';
  id?: Maybe<Scalars['ID']['output']>;
  /** Whether the stream is currently live. May be slightly delayed. */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the stream */
  name?: Maybe<Scalars['String']['output']>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<StreamType | `${StreamType}`>;
};

/** A Stream queue object */
type StreamQueue = {
  __typename?: 'StreamQueue';
  id?: Maybe<Scalars['String']['output']>;
  /** The sets on the stream */
  sets?: Maybe<Array<Maybe<Set>>>;
  /** The stream on the queue */
  stream?: Maybe<Streams>;
};

/** Represents the source of a stream */
type StreamSource =
  /** Stream is on smashcast.tv channel */
  | 'HITBOX'
  /** Stream is on a mixer.com channel */
  | 'MIXER'
  /** Stream is on a stream.me channel */
  | 'STREAMME'
  /** Stream is on twitch.tv channel */
  | 'TWITCH';

/** Represents the type of stream service */
type StreamType =
  | 'MIXER'
  | 'TWITCH';

/** Tournament Stream */
type Streams = {
  __typename?: 'Streams';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  numSetups?: Maybe<Scalars['Int']['output']>;
  parentStreamId?: Maybe<Scalars['Int']['output']>;
  streamGame?: Maybe<Scalars['String']['output']>;
  streamId?: Maybe<Scalars['String']['output']>;
  streamLogo?: Maybe<Scalars['String']['output']>;
  streamName?: Maybe<Scalars['String']['output']>;
  streamSource?: Maybe<StreamSource | `${StreamSource}`>;
  streamStatus?: Maybe<Scalars['String']['output']>;
  streamType?: Maybe<Scalars['Int']['output']>;
  streamTypeId?: Maybe<Scalars['Int']['output']>;
};

/** A team, either at the global level or within the context of an event */
type Team = {
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** A team, either at the global level or within the context of an event */
type TeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A team, either at the global level or within the context of an event */
type TeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** A set of actions available for a team to take */
type TeamActionSet = ActionSet & {
  __typename?: 'TeamActionSet';
  id?: Maybe<Scalars['ID']['output']>;
};

type TeamConnection = {
  __typename?: 'TeamConnection';
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A member of a team */
type TeamMember = {
  __typename?: 'TeamMember';
  id?: Maybe<Scalars['ID']['output']>;
  isAlternate?: Maybe<Scalars['Boolean']['output']>;
  isCaptain?: Maybe<Scalars['Boolean']['output']>;
  /** The type of the team member */
  memberType?: Maybe<TeamMemberType | `${TeamMemberType}`>;
  participant?: Maybe<Participant>;
  player?: Maybe<Player>;
  /** The status of the team member */
  status?: Maybe<TeamMemberStatus | `${TeamMemberStatus}`>;
};

/** Membership status of a team member */
type TeamMemberStatus =
  | 'ACCEPTED'
  | 'ALUM'
  | 'HIATUS'
  | 'INVITED'
  | 'OPEN_SPOT'
  | 'REQUEST'
  | 'UNKNOWN';

/** Membership type of a team member */
type TeamMemberType =
  | 'PLAYER'
  | 'STAFF';

type TeamPaginationFilter = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  eventState?: InputMaybe<ActivityState | `${ActivityState}`>;
  globalTeamId?: InputMaybe<Scalars['ID']['input']>;
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  maxEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  memberStatus?: InputMaybe<Array<InputMaybe<TeamMemberStatus | `${TeamMemberStatus}`>>>;
  minEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  rosterComplete?: InputMaybe<Scalars['Boolean']['input']>;
  rosterIncomplete?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type TeamPaginationQuery = {
  filter?: InputMaybe<TeamPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Team roster size requirements */
type TeamRosterSize = {
  __typename?: 'TeamRosterSize';
  maxAlternates?: Maybe<Scalars['Int']['output']>;
  maxPlayers?: Maybe<Scalars['Int']['output']>;
  minAlternates?: Maybe<Scalars['Int']['output']>;
  minPlayers?: Maybe<Scalars['Int']['output']>;
};

type TopGameFilter = {
  /** Array of which # top game you want to filter on.e.g. [2, 3] will filter on the 2nd and 3rd top games */
  gameNums?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** A tournament */
type Tournament = {
  __typename?: 'Tournament';
  addrState?: Maybe<Scalars['String']['output']>;
  /** Admin-only view of admins for this tournament */
  admins?: Maybe<Array<Maybe<User>>>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']['output']>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']['output']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']['output']>;
  hashtag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  /** Is tournament registration open */
  isRegistrationOpen?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']['output']>;
  mapsPlaceId?: Maybe<Scalars['String']['output']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']['output']>;
  /** Number of attendees including spectators, if public */
  numAttendees?: Maybe<Scalars['Int']['output']>;
  /** The user who created the tournament */
  owner?: Maybe<User>;
  /** Paginated, queryable list of participants */
  participants?: Maybe<ParticipantConnection>;
  postalCode?: Maybe<Scalars['String']['output']>;
  primaryContact?: Maybe<Scalars['String']['output']>;
  primaryContactType?: Maybe<Scalars['String']['output']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']['output']>;
  /** The slug used to form the url */
  slug?: Maybe<Scalars['String']['output']>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']['output']>;
  stations?: Maybe<StationsConnection>;
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Paginated, queryable list of teams */
  teams?: Maybe<TeamConnection>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']['output']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']['output']>;
  venueAddress?: Maybe<Scalars['String']['output']>;
  venueName?: Maybe<Scalars['String']['output']>;
  /** List of all waves in this tournament */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A tournament */
type TournamentAdminsArgs = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A tournament */
type TournamentEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** A tournament */
type TournamentImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A tournament */
type TournamentParticipantsArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  query: ParticipantPaginationQuery;
};


/** A tournament */
type TournamentStationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A tournament */
type TournamentTeamsArgs = {
  query: TeamPaginationQuery;
};


/** A tournament */
type TournamentUrlArgs = {
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  tab?: InputMaybe<Scalars['String']['input']>;
};

type TournamentConnection = {
  __typename?: 'TournamentConnection';
  nodes?: Maybe<Array<Maybe<Tournament>>>;
  pageInfo?: Maybe<PageInfo>;
};

type TournamentLinks = {
  __typename?: 'TournamentLinks';
  discord?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
};

type TournamentLocationFilter = {
  /** e.g. 50mi */
  distance?: InputMaybe<Scalars['String']['input']>;
  /** Latitude, Longitude */
  distanceFrom?: InputMaybe<Scalars['String']['input']>;
};

type TournamentPageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']['input']>;
  addrState?: InputMaybe<Scalars['String']['input']>;
  afterDate?: InputMaybe<Scalars['Timestamp']['input']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']['input']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']['input']>;
  hasOnlineEvents?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** If true, filter to only tournaments the currently authed user is an admin of */
  isCurrentUserAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<TournamentLocationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the user that owns this tournament. */
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  regOpen?: InputMaybe<Scalars['Boolean']['input']>;
  sortByScore?: InputMaybe<Scalars['Boolean']['input']>;
  staffPicks?: InputMaybe<Scalars['Boolean']['input']>;
  topGames?: InputMaybe<TopGameFilter>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  venueName?: InputMaybe<Scalars['String']['input']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type TournamentPaginationSort =
  | 'computedUpdatedAt'
  | 'endAt'
  | 'eventRegistrationClosesAt'
  | 'startAt';

type TournamentQuery = {
  filter?: InputMaybe<TournamentPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TournamentPaginationSort | `${TournamentPaginationSort}`>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type UpdatePhaseSeedInfo = {
  phaseGroupId?: InputMaybe<Scalars['ID']['input']>;
  seedId: Scalars['ID']['input'];
  seedNum: Scalars['ID']['input'];
};

type UpdatePhaseSeedingOptions = {
  /** Validate that seedMapping exactly accounts for all entrants in the phase */
  strictMode?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user */
type User = {
  __typename?: 'User';
  /** Authorizations to external services (i.e. Twitch, Twitter) */
  authorizations?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  bio?: Maybe<Scalars['String']['output']>;
  /** Public facing user birthday that respects user publishing settings */
  birthday?: Maybe<Scalars['String']['output']>;
  /** Uniquely identifying token for user. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** Events this user has competed in */
  events?: Maybe<EventConnection>;
  genderPronoun?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues this user has competed in */
  leagues?: Maybe<LeagueConnection>;
  /** Public location info for this user */
  location?: Maybe<Address>;
  /** Public facing user name that respects user publishing settings */
  name?: Maybe<Scalars['String']['output']>;
  /** player for user */
  player?: Maybe<Player>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Tournaments this user is organizing or competing in */
  tournaments?: Maybe<TournamentConnection>;
};


/** A user */
type UserAuthorizationsArgs = {
  types?: InputMaybe<Array<InputMaybe<SocialConnectionType>>>;
};


/** A user */
type UserEventsArgs = {
  query?: InputMaybe<UserEventsPaginationQuery>;
};


/** A user */
type UserImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A user */
type UserLeaguesArgs = {
  query?: InputMaybe<UserLeaguesPaginationQuery>;
};


/** A user */
type UserTournamentsArgs = {
  query?: InputMaybe<UserTournamentsPaginationQuery>;
};

type UserEventsPaginationFilter = {
  eventType?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<LocationFilterType>;
  maxEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  minEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type UserEventsPaginationQuery = {
  filter?: InputMaybe<UserEventsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type UserLeaguesPaginationFilter = {
  past?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type UserLeaguesPaginationQuery = {
  filter?: InputMaybe<UserLeaguesPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

type UserTournamentsPaginationFilter = {
  excludeId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentView?: InputMaybe<Scalars['String']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

type UserTournamentsPaginationQuery = {
  filter?: InputMaybe<UserTournamentsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A videogame */
type Videogame = {
  __typename?: 'Videogame';
  /** All characters for this videogame */
  characters?: Maybe<Array<Maybe<Character>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


/** A videogame */
type VideogameImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

type VideogameConnection = {
  __typename?: 'VideogameConnection';
  nodes?: Maybe<Array<Maybe<Videogame>>>;
  pageInfo?: Maybe<PageInfo>;
};

type VideogamePageFilter = {
  forUser?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

type VideogameQuery = {
  filter?: InputMaybe<VideogamePageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A wave in a tournament */
type Wave = {
  __typename?: 'Wave';
  id?: Maybe<Scalars['ID']['output']>;
  /** The Wave Identifier */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Unix time the wave is scheduled to start. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
};

type WaveUpsertInput = {
  endAt: Scalars['Timestamp']['input'];
  identifier: Scalars['String']['input'];
  startAt: Scalars['Timestamp']['input'];
};

}