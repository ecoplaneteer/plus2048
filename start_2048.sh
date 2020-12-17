#! /bin/bash
cd frontend/plus2048 && yarn && yarn serve & cd backend/plus2048 && mix deps.get && mix ecto.setup && mix phx.gen.context Messages Message messages user:string body:string && mix ecto.migrate && mix phx.server
