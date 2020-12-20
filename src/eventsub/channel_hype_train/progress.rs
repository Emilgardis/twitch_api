//! Subscriptions that sends a notification when a hype train makes progress on the specified channel.

use super::*;
/// The `channel.hype_train.progress` subscription type sends a notification when a hype train makes progress on the specified channel.
/// [`channel.hype_train.progress`](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelhype_trainprogress)
#[derive(PartialEq, Deserialize, Serialize, Debug)]
pub struct ChannelHypeTrainProgressV1 {
    /// The broadcaster user ID for the channel you want to hype train progress notifications for.
    pub broadcaster_user_id: types::UserId,
}

impl EventSubscription for ChannelHypeTrainProgressV1 {
    type Payload = ChannelHypeTrainProgressV1Payload;

    const EVENT_TYPE: EventType = EventType::ChannelHypeTrainProgress;
    #[cfg(feature = "twitch_oauth2")]
    const SCOPE: &'static [twitch_oauth2::Scope] = &[twitch_oauth2::Scope::ChannelReadHypeTrain];
    const VERSION: &'static str = "1";
}

/// Response payload for [`channel.hype_train.progress` version `1`](ChannelHypeTrainProgressV1) subscription.
#[derive(PartialEq, Deserialize, Serialize, Debug)]
pub struct ChannelHypeTrainProgressV1Payload {
    /// The requested broadcaster ID.
    pub broadcaster_user_id: types::UserId,
    /// The requested broadcaster name.
    pub broadcaster_user_name: types::UserName,
    /// The time at which the hype train expires. The expiration is extended when the hype train reaches a new level.
    pub expires_at: types::Timestamp,
    /// The number of points required to reach the next level.
    pub goal: i64,
    /// The most recent contribution.
    pub last_contribution: Contribution,
    /// Current level of hype train event.
    pub level: i64,
    /// The number of points contributed to the hype train at the current level.
    pub progress: i64,
    /// The timestamp at which the hype train started.
    pub started_at: types::Timestamp,
    // FIXME: Contains a maximum of two user objects
    /// The contributors with the most points contributed.
    pub top_contributions: Vec<Contribution>,
    /// Total points contributed to the hype train.
    pub total: i64,
}

#[test]
fn parse_payload() {
    let payload = r##"
    {
        "subscription": {
            "id": "f1c2a387-161a-49f9-a165-0f21d7a4e1c4",
            "type": "channel.hype_train.progress",
            "version": "1",
            "condition": {
                "broadcaster_user_id": "1337"
            },
             "transport": {
                "method": "webhook",
                "callback": "https://example.com/webhooks/callback"
            },
            "created_at": "2019-11-16T10:11:12.123Z"
        },
        "event": {
            "broadcaster_user_id": "1337",
            "broadcaster_user_name": "cool_user",
            "level": 2,
            "total": 700,
            "progress": 200,
            "goal": 1000,
            "top_contributions": [
                { "user_id": "123", "user_name": "pogchamp", "type": "bits", "total": 50 },
                { "user_id": "456", "user_name": "kappa", "type": "subscription", "total": 45 }
            ],
            "last_contribution": { "user_id": "123", "user_name": "pogchamp", "type": "bits", "total": 50 },
            "started_at": "2020-07-15T17:16:03.17106713Z",
            "expires_at": "2020-07-15T17:16:11.17106713Z"
        }
    }
    "##;

    dbg!(crate::eventsub::Payload::parse(payload).unwrap());
}
