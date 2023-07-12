use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use sqlx::{PgPool, Pool, Postgres};

mod api;
mod model;
mod strcts;

use ::config::Config;
use api::event::{event_create, event_get, event_update};
use api::state::{state_create, state_get, state_update};
use api::task::{task_create, task_get, task_update};
use api::usr::{usr_auth, usr_create, usr_update};
use std::env;

pub struct AppState {
    pg: Pool<Postgres>,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenvy::from_filename("./src/.env.dev").unwrap();

    let dburl = env::var("DATABASE_URL").expect("failed to fetch connection URL");
    println!("\n{}\n", &dburl);
    let pool = PgPool::connect(&dburl).await.unwrap();

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(AppState { pg: pool.clone() }))
            .service(task_get)
            .service(usr_create)
    })
    .bind(("127.0.0.1", 8000))?
    .run()
    .await
}
