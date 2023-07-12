use crate::model::usr::User;
use crate::AppState;
use actix_web::{get, post, web::Data, web::Json, HttpResponse, Responder};
use bcrypt::{hash, verify, DEFAULT_COST};

#[get("/usr/auth/{key}")]
pub async fn usr_auth() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/usr/create")]
pub async fn usr_create(body: Json<User>, pool: Data<AppState>) -> impl Responder {
    let result =
    sqlx::query!(
        "INSERT INTO users (user_id,username,password_hash,email,first_name,last_name,registry_date) VALUES ($1, $2, $3, $4, $5, $6, $7 )",
        body.user_id,
        &body.username,
        &hash(&body.password_hash, DEFAULT_COST).unwrap(),
        &body.email,
        &body.first_name,
        &body.last_name,
        body.registry_date
    )
    .execute(&pool.pg)
    .await;

    match result {
        Ok(o) => {
            println!("Success\n");
            return HttpResponse::Ok();
        }
        Err(e) => match e {
            sqlx::Error::PoolClosed => {}
            sqlx::Error::PoolTimedOut => {}
            sqlx::Error::WorkerCrashed => {}
            sqlx::Error::Io(e) => {
                println!("{:?}", e);
            }
            sqlx::Error::Tls(e) => {
                println!("{:?}", e);
            }
            _ => {
                println!("{:?}", e);
                return HttpResponse::BadRequest();
            }
        },
    }

    HttpResponse::Ok()
}

#[post("/usr/post/update")]
pub async fn usr_update(body: Json<User>, pool: Data<AppState>) -> impl Responder {
    let result =
    sqlx::query!(
        "UPDATE users SET username = $1,password_hash = $2,email = $3,first_name = $4,last_name = $5  WHERE user_id = $6",
        &body.username,
        &hash(&body.password_hash, DEFAULT_COST).unwrap(),
        &body.email,
        &body.first_name,
        &body.last_name,
        body.user_id

    )
    .execute(&pool.pg)
    .await;

    match result {
        Ok(o) => {
            println!("Success\n");
            return HttpResponse::Ok();
        }
        Err(e) => match e {
            sqlx::Error::PoolClosed => {}
            sqlx::Error::PoolTimedOut => {}
            sqlx::Error::WorkerCrashed => {}
            sqlx::Error::Io(e) => {
                println!("{:?}", e);
            }
            sqlx::Error::Tls(e) => {
                println!("{:?}", e);
            }
            _ => {
                println!("{:?}", e);
                return HttpResponse::BadRequest();
            }
        },
    }

    HttpResponse::Ok()
}
