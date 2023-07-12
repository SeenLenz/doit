pub struct state {
    pub state_id: i32,
    pub user_id: i32,
    pub note_id: i32,
    pub state_name: String,
    pub from: sqlx::types::chrono::NaiveDate,
    pub to: sqlx::types::chrono::NaiveDate,
    pub location: String,
}
