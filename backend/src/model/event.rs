pub struct Event {
    pub event_id: i32,
    pub user_id: i32,
    pub note_id: i32,
    pub event_name: String,
    pub from: Option<sqlx::types::chrono::NaiveDate>,
    pub to: Option<sqlx::types::chrono::NaiveDate>,
}
