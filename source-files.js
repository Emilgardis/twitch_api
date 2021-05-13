var N = null;var sourcesIndex = {};
sourcesIndex["twitch_api2"] = {"name":"","dirs":[{"name":"eventsub","dirs":[{"name":"channel","dirs":[{"name":"channel_points_custom_reward","files":["add.rs","remove.rs","update.rs"]},{"name":"channel_points_custom_reward_redemption","files":["add.rs","update.rs"]},{"name":"hypetrain","files":["begin.rs","end.rs","progress.rs"]}],"files":["ban.rs","channel_points_custom_reward.rs","channel_points_custom_reward_redemption.rs","cheer.rs","follow.rs","hypetrain.rs","raid.rs","subscribe.rs","unban.rs","update.rs"]},{"name":"stream","files":["offline.rs","online.rs"]},{"name":"user","files":["authorization.rs","update.rs"]}],"files":["channel.rs","mod.rs","stream.rs","user.rs"]},{"name":"helix","dirs":[{"name":"bits","files":["get_bits_leaderboard.rs","get_cheermotes.rs"]},{"name":"channels","files":["get_channel_editors.rs","get_channel_information.rs","modify_channel_information.rs","start_commercial.rs"]},{"name":"clips","files":["get_clips.rs"]},{"name":"eventsub","files":["create_eventsub_subscription.rs","delete_eventsub_subscription.rs","get_eventsub_subscriptions.rs"]},{"name":"games","files":["get_games.rs","get_top_games.rs"]},{"name":"hypetrain","files":["get_hypetrain_events.rs"]},{"name":"moderation","files":["check_automod_status.rs","get_banned_events.rs","get_banned_users.rs","get_moderator_events.rs","get_moderators.rs","manage_held_automod_messages.rs"]},{"name":"points","files":["create_custom_rewards.rs","delete_custom_reward.rs","get_custom_reward.rs","get_custom_reward_redemption.rs","update_custom_reward.rs","update_redemption_status.rs"]},{"name":"search","files":["search_categories.rs","search_channels.rs"]},{"name":"streams","files":["get_followed_streams.rs","get_stream_tags.rs","get_streams.rs","replace_stream_tags.rs"]},{"name":"subscriptions","files":["check_user_subscription.rs","get_broadcaster_subscriptions.rs","get_broadcaster_subscriptions_events.rs"]},{"name":"tags","files":["get_all_stream_tags.rs"]},{"name":"teams","files":["get_channel_teams.rs","get_teams.rs"]},{"name":"users","files":["block_user.rs","create_user_follows.rs","delete_user_follows.rs","get_user_block_list.rs","get_users.rs","get_users_follows.rs","unblock_user.rs"]},{"name":"videos","files":["delete_videos.rs","get_videos.rs"]},{"name":"webhooks","dirs":[{"name":"topics","dirs":[{"name":"hypetrain","files":["hypetrain_event.rs"]},{"name":"moderation","files":["channel_ban_change_events.rs","moderator_change_events.rs"]},{"name":"streams","files":["stream_changed.rs"]},{"name":"subscriptions","files":["subscription_events.rs"]},{"name":"users","files":["user_changed.rs","user_follows.rs"]}],"files":["hypetrain.rs","mod.rs","moderation.rs","streams.rs","subscriptions.rs","users.rs"]}],"files":["get_webhook_subscriptions.rs","hub.rs"]}],"files":["bits.rs","channels.rs","client_ext.rs","clips.rs","eventsub.rs","games.rs","hypetrain.rs","mod.rs","moderation.rs","points.rs","search.rs","ser.rs","streams.rs","subscriptions.rs","tags.rs","teams.rs","users.rs","videos.rs","webhooks.rs"]},{"name":"pubsub","files":["channel_bits.rs","channel_bits_badge.rs","channel_cheer.rs","channel_points.rs","channel_sub_gifts.rs","channel_subscriptions.rs","community_points.rs","following.rs","hypetrain.rs","mod.rs","moderation.rs","raid.rs","video_playback.rs"]},{"name":"tmi","files":["mod.rs"]}],"files":["client.rs","lib.rs","types.rs"]};
sourcesIndex["twitch_oauth2"] = {"name":"","dirs":[{"name":"tokens","files":["app_access_token.rs","errors.rs","user_token.rs"]}],"files":["client.rs","id.rs","lib.rs","scopes.rs","tokens.rs"]};
createSourceSidebar();
