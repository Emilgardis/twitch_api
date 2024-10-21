searchState.loadedDescShard("twitch_types", 0, "Twitch types\nAdmin\nAffiliate\nA collection over borrowed items\nA collection over borrowed string items\nBroadcaster types: “partner”, “affiliate”, or “…\nGeneric collection of an abstracted item.\nIterator over the elements of a <code>Collection</code>.\nA users display name\nA users display name\nAn empty collection.\nGlobal Moderator\nConvert a type into a <code>Cow</code>\nA message ID\nA message ID\nA nickname, not capitalized.\nA nickname, not capitalized.\nNone\nNone\nA collection over owned items\nA collection over owned string items\nPartner\nA collection over deref items\nA collection over &amp;str items\nStaff\nA user ID.\nA user ID.\nA username, also specified as login. Should not be …\nA reference to a borrowed <code>UserName</code>, also specified as …\nUser types: “staff”, “admin”, “global_mod”, or …\nGet a <code>Cow&lt;&#39;_, UserIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, DisplayNameRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, NicknameRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nReturns chunks of items, similar to <code>slice::chunks</code>\ntypes for colors\ntypes for emotes\ntypes for eventsub related things\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newUserIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newDisplayNamefrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newNicknamefrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\ntypes for goals\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>UserId</code> into a <code>Box&lt;UserIdRef&gt;</code>\nConverts this <code>DisplayName</code> into a <code>Box&lt;DisplayNameRef&gt;</code>\nConverts this <code>Nickname</code> into a <code>Box&lt;NicknameRef&gt;</code>\nMake the cow with proper ownership, muu\nConverts a <code>Box&lt;UserIdRef&gt;</code> into a <code>UserId</code> without copying or …\nConverts a <code>Box&lt;DisplayNameRef&gt;</code> into a <code>DisplayName</code> without …\nConverts a <code>Box&lt;NicknameRef&gt;</code> into a <code>Nickname</code> without …\nConverts the collection into a vector.\nReturns <code>true</code> if the collection is empty.\nReturns an iterator over the collection.\nReturns the length of the collection.\ntypes for moderation\nConstructs a new UserId\nConstructs a new DisplayName\nConstructs a new Nickname\nParse a string into a <code>UserType</code>\ntypes for points\ntypes for stream related things\ntypes for subscriptions\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\ntypes for time\ntypes for user related things\nBlue\nBlue Violet\nCadet Blue\nChocolate\nCoral\nDodger Blue\nFirebrick\nGolden Rod\nGreen\nA hex color\nA color in hex\nA color in hex\nHot Pink\nColors a user can have\nOrange Red\nRed\nSea Green\nSpring Green\nYellow Green\nAll named colors\nGet a <code>Cow&lt;&#39;_, HexColorRef&gt;</code>\nReturn this color in hex\nProvides access to the underlying value as a string slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newHexColorfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>HexColor</code> into a <code>Box&lt;HexColorRef&gt;</code>\nConverts a <code>Box&lt;HexColorRef&gt;</code> into a <code>HexColor</code> without …\nConstructs a new HexColor\nUnwraps the underlying <code>String</code> value\nCreates a owned NamedUserColor&lt;’static&gt; from a borrowed …\nAnimated\nA Badge set ID\nA Badge set ID\nA channel chat badge ID\nA channel chat badge ID\nDark\nFormats for an emote.\nA chat Emote ID\nA chat Emote ID\nScales available for an emote.\nAn Emote Set ID\nAn Emote Set ID\nBackground themes available for an emote.\nBuilder for emote URLs.\nLinks to the same image of different sizes\nLight\nAn emote index as defined by eventsub, similar to IRC …\n1.0\n2.0\n3.0\nStatic\nSet animation mode to animate\nSet animation mode to default\nSet animation mode to static\nGet a <code>Cow&lt;&#39;_, BadgeSetIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, ChatBadgeIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, EmoteIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, EmoteSetIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nThe index of where the Emote starts in the text.\nSet theme to dark mode\nGenerates url for this emote.\nThe index of where the Emote ends in the text.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newBadgeSetIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newChatBadgeIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newEmoteIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newEmoteSetIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nThe emote ID.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>BadgeSetId</code> into a <code>Box&lt;BadgeSetIdRef&gt;</code>\nConverts this <code>ChatBadgeId</code> into a <code>Box&lt;ChatBadgeIdRef&gt;</code>\nConverts this <code>EmoteId</code> into a <code>Box&lt;EmoteIdRef&gt;</code>\nConverts this <code>EmoteSetId</code> into a <code>Box&lt;EmoteSetIdRef&gt;</code>\nConverts a <code>Box&lt;BadgeSetIdRef&gt;</code> into a <code>BadgeSetId</code> without …\nConverts a <code>Box&lt;ChatBadgeIdRef&gt;</code> into a <code>ChatBadgeId</code> without …\nConverts a <code>Box&lt;EmoteIdRef&gt;</code> into a <code>EmoteId</code> without copying …\nConverts a <code>Box&lt;EmoteSetIdRef&gt;</code> into a <code>EmoteSetId</code> without …\nSet theme to light mode\nConstructs a new BadgeSetId\nConstructs a new ChatBadgeId\nConstructs a new EmoteId\nConstruct a new <code>EmoteUrlBuilder</code> from a <code>EmoteId</code>\nConstructs a new EmoteSetId\nCreate the URL for this emote.\nSet size to 1.0\nSet size to 2.0\nSet size to 3.0\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nCreate a <code>EmoteUrlBuilder</code> for this emote\nURL to png of size 28x28\nURL to png of size 56x56\nURL to png of size 112x112\nAn ID of a Conduit\nAn ID of a Conduit\nAn ID of a Conduit Shard\nAn ID of a Conduit Shard\nAn EventSub Subscription ID\nAn EventSub Subscription ID\nGet a <code>Cow&lt;&#39;_, EventSubIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, ConduitIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, ConduitShardIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newEventSubIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newConduitIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newConduitShardIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>EventSubId</code> into a <code>Box&lt;EventSubIdRef&gt;</code>\nConverts this <code>ConduitId</code> into a <code>Box&lt;ConduitIdRef&gt;</code>\nConverts this <code>ConduitShardId</code> into a <code>Box&lt;ConduitShardIdRef&gt;</code>\nConverts a <code>Box&lt;EventSubIdRef&gt;</code> into a <code>EventSubId</code> without …\nConverts a <code>Box&lt;ConduitIdRef&gt;</code> into a <code>ConduitId</code> without …\nConverts a <code>Box&lt;ConduitShardIdRef&gt;</code> into a <code>ConduitShardId</code> …\nConstructs a new EventSubId\nConstructs a new ConduitId\nConstructs a new ConduitShardId\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nA Creator Goal ID\nA Creator Goal ID\nType of creator goal\nThe goal is to increase followers.\nThe goal is to increase subscriptions. This type shows …\nThe goal is to increase subscriptions. This type shows …\nThe goal is to increase subscriptions. This type shows the …\nThe goal is to increase subscriptions. This type shows the …\nGet a <code>Cow&lt;&#39;_, CreatorGoalIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newCreatorGoalIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>CreatorGoalId</code> into a <code>Box&lt;CreatorGoalIdRef&gt;</code>\nConverts a <code>Box&lt;CreatorGoalIdRef&gt;</code> into a <code>CreatorGoalId</code> …\nConstructs a new CreatorGoalId\nUnwraps the underlying <code>String</code> value\nMessage has been allowed\nStatus of a message that is or was in AutoMod queue\nA blocked term ID\nA blocked term ID\nMessage has been denied\nAutomod message expired in queue\nA message ID\nA message ID\nMessage has been caught and pending moderation\nAn unban request ID\nAn unban request ID\nGet a <code>Cow&lt;&#39;_, MsgIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, BlockedTermIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, UnbanRequestIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newMsgIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newBlockedTermIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newUnbanRequestIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>MsgId</code> into a <code>Box&lt;MsgIdRef&gt;</code>\nConverts this <code>BlockedTermId</code> into a <code>Box&lt;BlockedTermIdRef&gt;</code>\nConverts this <code>UnbanRequestId</code> into a <code>Box&lt;UnbanRequestIdRef&gt;</code>\nConverts a <code>Box&lt;MsgIdRef&gt;</code> into a <code>MsgId</code> without copying or …\nConverts a <code>Box&lt;BlockedTermIdRef&gt;</code> into a <code>BlockedTermId</code> …\nConverts a <code>Box&lt;UnbanRequestIdRef&gt;</code> into a <code>UnbanRequestId</code> …\nConstructs a new MsgId\nConstructs a new BlockedTermId\nConstructs a new UnbanRequestId\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nPoll is currently in progress.\nThe Prediction is active and viewers can make predictions.\nPoll is no longer visible on the channel.\nThe Prediction has been canceled and the Channel Points …\nPoll has reached its ended_at time.\nInformation about global cooldown\nSomething went wrong determining the state.\nThe Prediction has been locked and viewers can no longer …\nReward redemption max\nMax per stream\nMax per user per stream\nPoll is no longer visible to any user on Twitch.\nPoll choice\nA poll choice ID\nA poll choice ID\nA poll ID\nA poll ID\nStatus of a poll\nA prediction ID\nA prediction ID\nOutcome for the Prediction\nA prediction choice ID\nA prediction choice ID\nStatus of the Prediction\nUsers who were the top predictors.\nA reward redemption ID.\nA reward redemption ID.\nA winning outcome has been chosen and the Channel Points …\nA reward ID.\nA reward ID.\nPoll has been manually terminated before its ended_at time.\nGet a <code>Cow&lt;&#39;_, RewardIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, RedemptionIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, PollIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, PollChoiceIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, PredictionIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, PredictionOutcomeIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nNumber of votes received via Bits.\nNumber of Channel Points used for the outcome.\nNumber of Channel Points used by the user.\nNumber of votes received via Channel Points.\nNumber of Channel Points won by the user.\nColor for the outcome. Valid values: BLUE, PINK\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newRewardIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newRedemptionIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newPollIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newPollChoiceIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newPredictionIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newPredictionOutcomeIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nCooldown amount\nID for the choice.\nID for the outcome.\nID of the user.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>RewardId</code> into a <code>Box&lt;RewardIdRef&gt;</code>\nConverts this <code>RedemptionId</code> into a <code>Box&lt;RedemptionIdRef&gt;</code>\nConverts this <code>PollId</code> into a <code>Box&lt;PollIdRef&gt;</code>\nConverts this <code>PollChoiceId</code> into a <code>Box&lt;PollChoiceIdRef&gt;</code>\nConverts this <code>PredictionId</code> into a <code>Box&lt;PredictionIdRef&gt;</code>\nConverts this <code>PredictionOutcomeId</code> into a …\nConverts a <code>Box&lt;RewardIdRef&gt;</code> into a <code>RewardId</code> without …\nConverts a <code>Box&lt;RedemptionIdRef&gt;</code> into a <code>RedemptionId</code> …\nConverts a <code>Box&lt;PollIdRef&gt;</code> into a <code>PollId</code> without copying or …\nConverts a <code>Box&lt;PollChoiceIdRef&gt;</code> into a <code>PollChoiceId</code> …\nConverts a <code>Box&lt;PredictionIdRef&gt;</code> into a <code>PredictionId</code> …\nConverts a <code>Box&lt;PredictionOutcomeIdRef&gt;</code> into a …\nCooldown enabled\nLogin of the user.\nDisplay name of the user.\nConstructs a new RewardId\nConstructs a new RedemptionId\nConstructs a new PollId\nConstructs a new PollChoiceId\nConstructs a new PredictionId\nConstructs a new PredictionOutcomeId\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nText displayed for the choice.\nText displayed for outcome.\nArray of users who were the top predictors. null if none. …\nNumber of unique users that chose the outcome.\nTotal number of votes received for the choice across all …\nMax per stream is enabled\nMax per user per stream is enabled\nMax amount of redemptions per stream\nMax amount of redemptions per user per stream\nFilter by all. Effectively a no-op\nAn archived video\nA game or category ID\nA game or category ID\nA Charity Campaign ID\nA Charity Campaign ID\nA Charity Donation ID\nA Charity Donation ID\nA clip ID\nA clip ID\nLength of the commercial in seconds\nError for the <code>TryFrom</code> on <code>CommercialLength</code>\nIDs for content classification labels also known as CCLs\nFilter by from this day only\nDrugs, Intoxication, or Excessive Tobacco Use\nGambling\nA Guest Star Session ID\nA Guest Star Session ID\nA Guest Star Slot ID\nA Guest Star Slot ID\nA highlight\nA Hype Train ID\nA Hype Train ID\nA IGDB ID\nA IGDB ID\ninvalid length of {0}\n120s\n150s\n180s\n30s\n60s\n90s\nA live video\nMature-rated game\nFilter by this month\nOther\nOther\nA playlist video\nA premiere\nPrime subscription\nVideo is private\nSignificant Profanity or Vulgarity\nVideo is public\nA rerun\nSexual Themes\nA Stream ID\nA Stream ID\nA stream marker ID\nA stream marker ID\nA Stream Segment ID.\nA Stream Segment ID.\nSubscription tiers\nA tag ID\nA tag ID\nA Team ID\nA Team ID\nTier 1. $4.99\nTier 1. $9.99\nTier 1. $24.99\nA game or category as defined by Twitch\nA uploaded video\nA video ID\nA video ID\nPeriod during which the video was created\nType of video\nType of video\nViolent and Graphic Depictions\nA watch party\nA watchparty premiere,\nA watchparty rerun\nFilter by this week\nGet a <code>Cow&lt;&#39;_, StreamIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, CategoryIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, TagIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, TeamIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, VideoIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, ClipIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, StreamSegmentIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, HypeTrainIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, CharityCampaignIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, CharityDonationIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, IgdbIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, GuestStarSessionIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, GuestStarSlotIdRef&gt;</code>\nGet a <code>Cow&lt;&#39;_, StreamMarkerIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nProvides access to the underlying value as a string slice.\nTemplate URL for the game’s box art.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a newStreamIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newCategoryIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newTagIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newTeamIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newVideoIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newClipIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newStreamSegmentIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newHypeTrainIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newCharityCampaignIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newCharityDonationIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newIgdbIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newGuestStarSessionIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newGuestStarSlotIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nConstructs a newStreamMarkerIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nGame or category ID.\nThe ID that IGDB uses to identify this game.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>StreamId</code> into a <code>Box&lt;StreamIdRef&gt;</code>\nConverts this <code>CategoryId</code> into a <code>Box&lt;CategoryIdRef&gt;</code>\nConverts this <code>TagId</code> into a <code>Box&lt;TagIdRef&gt;</code>\nConverts this <code>TeamId</code> into a <code>Box&lt;TeamIdRef&gt;</code>\nConverts this <code>VideoId</code> into a <code>Box&lt;VideoIdRef&gt;</code>\nConverts this <code>ClipId</code> into a <code>Box&lt;ClipIdRef&gt;</code>\nConverts this <code>StreamSegmentId</code> into a …\nConverts this <code>HypeTrainId</code> into a <code>Box&lt;HypeTrainIdRef&gt;</code>\nConverts this <code>CharityCampaignId</code> into a …\nConverts this <code>CharityDonationId</code> into a …\nConverts this <code>IgdbId</code> into a <code>Box&lt;IgdbIdRef&gt;</code>\nConverts this <code>GuestStarSessionId</code> into a …\nConverts this <code>GuestStarSlotId</code> into a …\nConverts this <code>StreamMarkerId</code> into a <code>Box&lt;StreamMarkerIdRef&gt;</code>\nConverts a <code>Box&lt;StreamIdRef&gt;</code> into a <code>StreamId</code> without …\nConverts a <code>Box&lt;CategoryIdRef&gt;</code> into a <code>CategoryId</code> without …\nConverts a <code>Box&lt;TagIdRef&gt;</code> into a <code>TagId</code> without copying or …\nConverts a <code>Box&lt;TeamIdRef&gt;</code> into a <code>TeamId</code> without copying or …\nConverts a <code>Box&lt;VideoIdRef&gt;</code> into a <code>VideoId</code> without copying …\nConverts a <code>Box&lt;ClipIdRef&gt;</code> into a <code>ClipId</code> without copying or …\nConverts a <code>Box&lt;StreamSegmentIdRef&gt;</code> into a <code>StreamSegmentId</code> …\nConverts a <code>Box&lt;HypeTrainIdRef&gt;</code> into a <code>HypeTrainId</code> without …\nConverts a <code>Box&lt;CharityCampaignIdRef&gt;</code> into a …\nConverts a <code>Box&lt;CharityDonationIdRef&gt;</code> into a …\nConverts a <code>Box&lt;IgdbIdRef&gt;</code> into a <code>IgdbId</code> without copying or …\nConverts a <code>Box&lt;GuestStarSessionIdRef&gt;</code> into a …\nConverts a <code>Box&lt;GuestStarSlotIdRef&gt;</code> into a <code>GuestStarSlotId</code> …\nConverts a <code>Box&lt;StreamMarkerIdRef&gt;</code> into a <code>StreamMarkerId</code> …\nGame name.\nConstructs a new StreamId\nConstructs a new CategoryId\nConstructs a new TagId\nConstructs a new TeamId\nConstructs a new VideoId\nConstructs a new ClipId\nConstructs a new StreamSegmentId\nConstructs a new HypeTrainId\nConstructs a new CharityCampaignId\nConstructs a new CharityDonationId\nConstructs a new IgdbId\nConstructs a new GuestStarSessionId\nConstructs a new GuestStarSlotId\nConstructs a new StreamMarkerId\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nUnwraps the underlying <code>String</code> value\nA community gift ID\nA community gift ID\nGet a <code>Cow&lt;&#39;_, CommunityGiftIdRef&gt;</code>\nProvides access to the underlying value as a string slice.\nReturns the argument unchanged.\nConstructs a newCommunityGiftIdfrom a static reference\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nCalls <code>U::from(self)</code>.\nConverts this <code>CommunityGiftId</code> into a …\nConverts a <code>Box&lt;CommunityGiftIdRef&gt;</code> into a <code>CommunityGiftId</code> …\nConstructs a new CommunityGiftId\nUnwraps the underlying <code>String</code> value\nTimestamp has an invalid format.\nOther error\nCould not parse the timestamp using <code>time</code>\nCould not format the timestamp using <code>time</code>\nRFC3339 timestamp\nErrors that can occur when parsing a timestamp.\nRFC3339 timestamp\nGet a <code>Cow&lt;&#39;_, TimestampRef&gt;</code>\nProvides access to the underlying value as a string slice.\nGet the day\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new Timestamp from a static reference if it …\nTransparently reinterprets the static string slice as a …\nTransparently reinterprets the string slice as a …\nTransparently reinterprets the string slice as a …\nGet the hour\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this <code>Timestamp</code> into a <code>Box&lt;TimestampRef&gt;</code>\nConverts a <code>Box&lt;TimestampRef&gt;</code> into a <code>Timestamp</code> without …\nCompare another time and return <code>self &lt; other</code>.\nGet the millis\nGet the minute\nGet the month\nConstructs a new Timestamp if it conforms to <code>Timestamp</code>\nConstructs a new Timestamp without validation\nNormalize the timestamp into UTC time.\nCreate a timestamp corresponding to current time\nGet the second\nUnwraps the underlying <code>String</code> value\nMake a timestamp with the time component set to 00:00:00.\nConstruct into a <code>OffsetDateTime</code> time.\nConstruct into a <code>OffsetDateTime</code> time with a guaranteed UTC …\nCreate a timestamp corresponding to the start of the …\nGet the year\nlocation of error\nThing that failed\nA user according to many endpoints\nDisplay name of user\nReturns the argument unchanged.\nID of the user\nCalls <code>U::from(self)</code>.\nLogin name of the user, not capitalized\nURL of the user’s profile")