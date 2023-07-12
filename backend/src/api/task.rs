use actix_web::{get, post, web::Data, web::Json, Responder};
use sqlx::Postgres;

#[get("/task/get")]
pub async fn task_get(Pool: Data<Postgres>) -> impl Responder {
    return Json("a".to_string());
}

#[get("/task/post/create")]
pub async fn task_create() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/task/post/update")]
pub async fn task_update() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}
// .service(task_update)
// .service(task_create)
// .service(state_get)
// .service(state_update)
// .service(state_create)
// .service(event_get)
// .service(event_update)
// .service(event_create)
// .service(usr_auth)
// .service(usr_update)
// .service(usr_create)
