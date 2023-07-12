#[derive(serde::Serialize, serde::Deserialize, Debug)]
pub struct User {
    pub user_id: i32,
    pub username: String,
    pub password_hash: String,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub registry_date: Option<sqlx::types::chrono::NaiveDate>,
}
