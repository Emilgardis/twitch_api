(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl&lt;'a, C&gt; UnwindSafe for HelixClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; UnwindSafe for TMIClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; UnwindSafe for TwitchClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TwitchCategory","synthetic":true,"types":[]},{"text":"impl UnwindSafe for User","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubscriptionTier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BroadcasterType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UserType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPrivacy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommercialLength","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommercialLengthParseError","synthetic":true,"types":[]},{"text":"impl&lt;R, D&gt; UnwindSafe for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HelixRequestPutError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HelixRequestPatchError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !UnwindSafe for ClientRequestError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for CreateRequestError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidUri","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for HelixRequestGetError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for HelixRequestPostError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HelixRequestDeleteError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BitsLeaderboard","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBitsLeaderboardRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cheermote","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetCheermotesRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Tiers","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheermoteImages","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheermoteImage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheermoteImageArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Level","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheermoteType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DateRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LeaderboardUser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelInformation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModifyChannelInformationBody","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModifyChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StartCommercial","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StartCommercialBody","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StartCommercialRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModifyChannelInformation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Clip","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetClipsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetGamesRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetTopGamesRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheckAutoModStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheckAutoModStatusBody","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CheckAutoModStatusRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BannedEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBannedEventsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BannedUser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBannedUsersRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetModeratorEventsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModeratorEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetModeratorsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Moderator","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SearchCategoriesRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Channel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SearchChannelsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetStreamsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Stream","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StreamType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BroadcasterSubscription","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetBroadcasterSubscriptionsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetAllStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TwitchTag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AutoGenerated","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetUsersRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for User","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetUsersFollowsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UsersFollow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeleteUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateUserFollowsBody","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeleteUserFollow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateUserFollows","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetVideosRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Video","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sort","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPeriod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoTypeFilter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetChatters","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Chatters","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GetHosts","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Host","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HostsRequestId","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !UnwindSafe for RequestError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TwitchResponse","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TopicSubscribe","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TopicData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Response","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelBitsEventsV2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BitsEventData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BadgeEntitlement","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelBitsEventsV2Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BitsContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelBitsBadgeUnlocks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelBitsBadgeUnlocksReply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelCheerEventsPublicV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelCheerEventsPublicV1Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TriggerType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelPointsChannelV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Redemption","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reward","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Image","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GlobalCooldown","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RedemptionStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Max","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelPointsChannelV1Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelSubGiftsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelSubGiftsV1Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelSubscribeEventsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Emote","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubMessage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChannelSubscribeEventsV1Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommunityPointsChannelV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Following","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FollowingReply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HypeTrainEventsV1","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HypeTrainEventsV1Rewards","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Kickoff","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParticipationConversionRates","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NotificationThresholds","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConductorRewards","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BitsRewards","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubsRewards","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Participations","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Conductors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HypeTrainProgress","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Level","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HypeTrainEventsV1Reply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HypeTrainDifficulty","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Reward","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SourceType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ActionType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EndingReason","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChatModeratorActions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChatModeratorActionsReply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModerationActionCommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModerationType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Raid","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RaidReply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPlayback","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPlaybackById","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Vod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VideoPlaybackReply","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WatchpartyType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BroadcastType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DummyHttpClient","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SurfError","synthetic":true,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl UnwindSafe for AppAccessToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UserToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ValidatedToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Scope","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;EF, TT&gt; UnwindSafe for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TwitchTokenErrorResponse","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !UnwindSafe for TokenError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !UnwindSafe for ValidationError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; UnwindSafe for RevokeTokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !UnwindSafe for RefreshTokenError&lt;RE&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()